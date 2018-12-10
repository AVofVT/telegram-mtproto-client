const fs = require('fs')
const { parse } = require('tl-parser')

const dump = json => console.log(JSON.stringify(json, (k, v) => (k === 'start' || k === 'end' ? undefined : v), '    '));

const capitalise = s => s.replace(/^./, str => str.toUpperCase())

const convertType = (type) => {
    if (~type.indexOf('.')) {
        if (~type.indexOf('Vector.')) {
            return type.replace('Vector.', 'Array.')
        }
        else {
            return type.replace('.', '_')
        }
    }

    if (type === '#') return 'number'

    return type
}


/// tl parser
const mapArgs = arg => {
    let exp = arg.argType.expression
    let optional = !!arg.conditionalDef
    let hasSubExp = exp.subexpressions && exp.subexpressions.length
    let type = exp.kind ? exp.kind + exp.expression.id.name
        : hasSubExp ? exp.subexpressions.map((s, i) => i ? `<${s.id.name}>` : s.id.name).join('.') : exp.id.name

    type = convertType(type)

    return { name: arg.id.name, type, optional }
}

const mapFunc = fn => {
    let subExp = fn.resultType.expression.subexpressions
    let type = fn.resultType.id.name + (subExp.length ? subExp.map(s => `.<${s.id.name}>` ).join('') : '')
    let args = fn.args.map(mapArgs)

    return { name: fn.id.name, args, return: type }
}

const mapCtor = ctor => {
    if (ctor.id.name === 'vector') return null

    let sexp = ctor.resultType.expression.subexpressions
    let type = ctor.resultType.id.name + (sexp.length ? sexp.map(s => `.<${s.id.name}>` ).join('') : '')
    let args = ctor.args.map(mapArgs)

    type = convertType(type)

    return {
        name: ctor.id.name,
        type, args
    }
}

/// tpl

const ctorTpl = (ctor) => {
    // !ctor && dump(ctor)
    let properties = ctor.args.map(p => `\n * @property {${p.optional ? '?' : ''}${p.type}} ${p.name}` ).join('')

    return '\n/**\n *'
        + `\n * @see {@link https://core.telegram.org/constructor/${ctor.name}}`
        + `\n * @typedef {Object} ${convertType(ctor.name)}`
        + `\n * @property {string} [_=${ctor.name}]`
        + properties + '\n */'
}

// const typeTpl = (type, name) => {
//     return `
//     /**
//      * @see {@link https://core.telegram.org/constructor/${type.name}}
//      * @typedef {(number|string)} NumberLike
//      */`

//     return '\n/**\n *'
//         + `\n * @see {@link https://core.telegram.org/constructor/${type.name}}`
//         + `\n * @typedef {Object} ${convertType(type.name)}`
//         + `\n * @property {string} [_=${type.name}]`
//         + properties + '\n */'
// }


const methodTpl = (method) => {
    const hasParams = method.args && method.args.length
    const params = method.args.map(p => `\n     * @param {${p.optional ? '?' : ''}${convertType(p.type)}} config.${p.name}` ).join('')
    return `
    /**
     * @see {@link https://core.telegram.org/method/${method.name}}` +
     `${hasParams ? '\n     * @param {Object} config' : ''}` + params + `
     * @returns {${method.return}}
     */`
}

const classTpl = (name, methods) => {
    return `class ${capitalise(name)}MtProto extends Ctor {` +
    methods.map(fn => {
        const description = methodTpl(fn)
        const hasParams = fn.args && fn.args.length

        return `${description}\n    ${fn.method}(${hasParams ? 'config' : ''}) {
        return this.send('${fn.name}'${hasParams ? ', config' : ''})
    }`
    }).join('\n') + '\n}\n'
}

/// run
const output = parse(fs.readFileSync('scheme.tl').toString())

// console.log(Object.keys(output.functions.declarations))
let result = {
    functions: output.functions.declarations.map(mapFunc),
    constructors: output.constructors.declarations.map(mapCtor)
}


result.types = output.constructors.declarations.reduce((memo, ctor) => {

    const type = convertType(ctor.resultType.id.name)
    const name = convertType(ctor.id.name)

    if (!memo[type]) {
        memo[type] = []
    }
    memo[type].push(name)

    return memo
}, {})

let types = Object.keys(result.types).map(type => {
    const value = result.types[type]

    return `/**\n * @see {@link https://core.telegram.org/type/${type}}\n`
        + ` * @typedef {(${value.join(' | ')})} ${type}\n */\n`
}).join('\n')

// dump(types)





// let tt = output.constructors.declarations.filter(o => o.id.name === 'inputMediaUploadedPhoto')

// dump(tt.map(mapCtor))


const functions = result.functions.reduce((m, fn) => {
    const [ctor, method] = fn.name.split('.')
    if (!method) return m

    if (!m[ctor]) {
        m[ctor] = []
    }

    fn.method = method || ctor
    fn.return = convertType(fn.return)

    return (m[ctor].push(fn), m)
}, {})


const internal = Object.keys(functions).map(ctor => {
    return `
        /**
         * @type {${capitalise(ctor)}MtProto}
         * @memberof MTProtoClient
         */
        this.${ctor} = new ctor.${capitalise(ctor)}(this)`
}).join('\n')

const external = Object.keys(functions).map(capitalise).map(ctor => `MTProtoClient.${ctor} = ${ctor}MtProto`).join('\n')

let classes = Object.keys(functions).map(ctor => classTpl(ctor, functions[ctor])).join('\n')


let constructors = result.constructors.filter(c => !!c).map(ctorTpl).join('\n')



let template = fs.readFileSync('./templates/client.js').toString()

fs.writeFileSync('index.js', template
    .replace('//constructors//', constructors)
    .replace('//types//', types)
    .replace('//classes//', classes)
    .replace('//internal//', internal)
    .replace('//external//', external)
)
