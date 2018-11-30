const fs = require('fs')

const dump = json => console.log(JSON.stringify(json, null, '    '));

/// tpl

const capitalise = s => s.replace(/^./, str => str.toUpperCase())

const typeTpl = ({predicate, params, type}) => {
    return `
/**
 *
 * @see {@link https://core.telegram.org/constructor/${predicate}}
 * @typedef {${type}} ${predicate}` + params.map(({type, name}) =>
    `\n * @property {${type}} ${name}` ).join('') + `\n */`
}

const descriptionTpl = ({method, params, type}) => {
    return `
    /**
     * @see {@link https://core.telegram.org/method/${method}}` +
     `${params.length ? '\n     * @param {object} config': ''}` +
     params.map(({type, name}) =>  `\n     * @property {${type}} config.${name}` ).join('') + `
     * @returns {${type}}
     */`
}

const classTpl = (name, methods) => {
    return `class ${capitalise(name)} extends Ctor {` +
    methods.map(fn => {
        const [, name] = fn.method.split('.')
        const description = descriptionTpl(fn)
        const hasParams = fn.params.length

    return `${description}\n    ${name}(${hasParams ? 'config': ''}) {
        return this.send('${fn.method}'${hasParams ? ', config': ''})
    }`
    }).join('\n') + `\n}\n`
}

/// run
const schema = require('./schema.json')


let types = ['number:int', 'number:double', 'number:log', 'string:bytes', 'boolean:Bool', 'Array:Vector']
    .map(t => t.split(':'))
    .map(([type, predicate]) => ({type, predicate, params: []}))
    .map(typeTpl).join('\n') + schema.constructors
    .filter(c => !!c)
    .map(typeTpl).join('\n')

fs.writeFileSync('types.js', types)


const methods = schema.methods.reduce((m, fn) => {
    const [ctor, method] = fn.method.split('.')
    if (!method) return m

    if (!m[ctor]) {
        m[ctor] = []
    }

    return  m[ctor].push(fn), m
}, {})

const keys = Object.keys(methods)

let classes = keys.map(ctor => classTpl(ctor, methods[ctor])).join('\n')

const external = keys.map(capitalise).map(ctor => `MTProtoClient.${ctor} = ${ctor}`).join('\n')

const internal = keys.map(ctor => {
    return `
        /**
         * @type {${capitalise(ctor)}}
         */
        this.${ctor} = new ctor.${capitalise(ctor)}(this)`
}).join('\n')


let template = fs.readFileSync('./templates/client.js').toString()


fs.writeFileSync('index.js', template
    .replace('//classes//', classes)
    .replace('//internal//', internal)
    .replace('//external//', external)
)
