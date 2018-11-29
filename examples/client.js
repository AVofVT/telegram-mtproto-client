
const { Storage } = require('mtproto-storage-fs')
const { MTProto } = require('telegram-mtproto')
const MTProtoClient = require('../')
const { pluck } = require('ramda')
const { api_id, api_hash, api, server } = require('config')

const { inputField } = require('./prompt')

const selectChat = async(chats) => {
    const chatNames = pluck('title', chats)
    console.log('Your chat list')
    chatNames.map((name, id) => console.log(`${id}  ${name}`))
    console.log('Select chat by index')
    const chatIndex = await inputField('index')
    return chats[+chatIndex]
}

class ClientCLI extends MTProtoClient {
    constructor() {
        super(MTProto({
            server, api, app: {
                storage: new Storage('session.json')
            }
        }))

        this.__storage = this.__connector.storage
    }

    async __sendCode(phone_number) {

        const result = await this.auth.sendCode({
            phone_number,
            api_id,
            api_hash,
            // current_number: false
        })

        return result.phone_code_hash
    }

    async __checkPhone(phone_number) {
        const result = await this.auth.checkPhone({ phone_number })
        return result.phone_registered
    }

    async __isAlreadyAuth() {
        const storage = this.__storage
        const dc = await storage.get('dc')

        if (!dc) {
            await storage.clear()
            return false
        }

        const auth_key = await storage.get(`dc${dc}_auth_key`)
        const salt = await storage.get(`dc${dc}_server_salt`)
        const result = !!auth_key && !!salt

        if (!result) {
            await storage.clear()
        }

        return result
    }

    async __signIn(phone_number) {
        const phone_code_hash = await this.__sendCode(phone_number)
        const phone_code = await inputField('code')

        let result = await this.auth.signIn({
            phone_number,
            phone_code_hash,
            phone_code,
        })

        return result
    }

    async __signUp(phone_number, info) {
        const phone_code_hash = await this.__sendCode(phone_number)
        const phone_code = await inputField('sms code')

        const options = Object.assign({
            first_name: 'firstname',
            last_name: 'lastname',
        }, info, {
            phone_number,
            phone_code_hash,
            phone_code,
        })

        const result = await this.auth.signUp(options)

        return result
    }

    async logIn() {

        // const dc = await telegram('help.getNearestDc')

        if (await this.__isAlreadyAuth()) {
            return
        }

        const phone_number = await inputField('phone number')

        const registered = await this.__checkPhone(phone_number)

        if (!registered) {
            const first_name = await inputField('first name')
            const last_name = await inputField('last name')

            //sign up
            await this.__signUp(phone_number, { first_name, last_name })
        }

        //sign in
        await this.__signIn(phone_number)

        this.__storage.set('loggedin', true)
    }

    async logOut() {
        const result = await this.auth.logOut()
    }

    async getChat() {

        const dialogs = await this.messages.getDialogs({
            limit: 50,
        })

        const selectedChat = await selectChat(dialogs.chats)

        return selectedChat
    }
}




const client = new ClientCLI()


const run = async() => {

    await client.logIn()

    const chat = await client.getChat()
    console.log('chatHistory', chat);

    const users = await client.getUsers(chat);
    console.log(users)
}

run()
