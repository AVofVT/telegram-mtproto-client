
class Ctor {
    /**
     * @param {MTProtoClient} client
     */
    constructor(client){
        if (client instanceof MTProtoClient) {
            /**
             * @property {MTProtoClient}
             */
            this.__client = client
        }
        else {
            throw new Error('{client} must be instanceOf {MTProtoClient}')
        }
    }

    /**
     * @param {string} method
     * @param {object} config
     * @returns {any}
     */
    send(method, config){
        return this.__client.request(method, config)
    }
}

class Auth extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/auth.checkPhone}
     * @param {object} config
     * @property {string} config.phone_number
     * @returns {auth.CheckedPhone}
     */
    checkPhone(config) {
        return this.send('auth.checkPhone', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.sendCode}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {int} config.sms_type
     * @property {int} config.api_id
     * @property {string} config.api_hash
     * @property {string} config.lang_code
     * @returns {auth.SentCode}
     */
    sendCode(config) {
        return this.send('auth.sendCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.sendCall}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @returns {Bool}
     */
    sendCall(config) {
        return this.send('auth.sendCall', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.signUp}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @property {string} config.first_name
     * @property {string} config.last_name
     * @returns {auth.Authorization}
     */
    signUp(config) {
        return this.send('auth.signUp', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.signIn}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @returns {auth.Authorization}
     */
    signIn(config) {
        return this.send('auth.signIn', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.logOut}
     * @returns {Bool}
     */
    logOut() {
        return this.send('auth.logOut')
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.resetAuthorizations}
     * @returns {Bool}
     */
    resetAuthorizations() {
        return this.send('auth.resetAuthorizations')
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.exportAuthorization}
     * @param {object} config
     * @property {int} config.dc_id
     * @returns {auth.ExportedAuthorization}
     */
    exportAuthorization(config) {
        return this.send('auth.exportAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.importAuthorization}
     * @param {object} config
     * @property {int} config.id
     * @property {bytes} config.bytes
     * @returns {auth.Authorization}
     */
    importAuthorization(config) {
        return this.send('auth.importAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.bindTempAuthKey}
     * @param {object} config
     * @property {long} config.perm_auth_key_id
     * @property {long} config.nonce
     * @property {int} config.expires_at
     * @property {bytes} config.encrypted_message
     * @returns {Bool}
     */
    bindTempAuthKey(config) {
        return this.send('auth.bindTempAuthKey', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.sendSms}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @returns {Bool}
     */
    sendSms(config) {
        return this.send('auth.sendSms', config)
    }
}

class Account extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/account.registerDevice}
     * @param {object} config
     * @property {int} config.token_type
     * @property {string} config.token
     * @property {string} config.device_model
     * @property {string} config.system_version
     * @property {string} config.app_version
     * @property {Bool} config.app_sandbox
     * @property {string} config.lang_code
     * @returns {Bool}
     */
    registerDevice(config) {
        return this.send('account.registerDevice', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.unregisterDevice}
     * @param {object} config
     * @property {int} config.token_type
     * @property {string} config.token
     * @returns {Bool}
     */
    unregisterDevice(config) {
        return this.send('account.unregisterDevice', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateNotifySettings}
     * @param {object} config
     * @property {InputNotifyPeer} config.peer
     * @property {InputPeerNotifySettings} config.settings
     * @returns {Bool}
     */
    updateNotifySettings(config) {
        return this.send('account.updateNotifySettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getNotifySettings}
     * @param {object} config
     * @property {InputNotifyPeer} config.peer
     * @returns {PeerNotifySettings}
     */
    getNotifySettings(config) {
        return this.send('account.getNotifySettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.resetNotifySettings}
     * @returns {Bool}
     */
    resetNotifySettings() {
        return this.send('account.resetNotifySettings')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateProfile}
     * @param {object} config
     * @property {string} config.first_name
     * @property {string} config.last_name
     * @returns {User}
     */
    updateProfile(config) {
        return this.send('account.updateProfile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateStatus}
     * @param {object} config
     * @property {Bool} config.offline
     * @returns {Bool}
     */
    updateStatus(config) {
        return this.send('account.updateStatus', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getWallPapers}
     * @returns {Vector<WallPaper>}
     */
    getWallPapers() {
        return this.send('account.getWallPapers')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.reportPeer}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {ReportReason} config.reason
     * @returns {Bool}
     */
    reportPeer(config) {
        return this.send('account.reportPeer', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.checkUsername}
     * @param {object} config
     * @property {string} config.username
     * @returns {Bool}
     */
    checkUsername(config) {
        return this.send('account.checkUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateUsername}
     * @param {object} config
     * @property {string} config.username
     * @returns {User}
     */
    updateUsername(config) {
        return this.send('account.updateUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getPrivacy}
     * @param {object} config
     * @property {InputPrivacyKey} config.key
     * @returns {account.PrivacyRules}
     */
    getPrivacy(config) {
        return this.send('account.getPrivacy', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.setPrivacy}
     * @param {object} config
     * @property {InputPrivacyKey} config.key
     * @property {Vector<InputPrivacyRule>} config.rules
     * @returns {account.PrivacyRules}
     */
    setPrivacy(config) {
        return this.send('account.setPrivacy', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.deleteAccount}
     * @param {object} config
     * @property {string} config.reason
     * @returns {Bool}
     */
    deleteAccount(config) {
        return this.send('account.deleteAccount', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getAccountTTL}
     * @returns {AccountDaysTTL}
     */
    getAccountTTL() {
        return this.send('account.getAccountTTL')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.setAccountTTL}
     * @param {object} config
     * @property {AccountDaysTTL} config.ttl
     * @returns {Bool}
     */
    setAccountTTL(config) {
        return this.send('account.setAccountTTL', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.sendChangePhoneCode}
     * @param {object} config
     * @property {string} config.phone_number
     * @returns {account.SentChangePhoneCode}
     */
    sendChangePhoneCode(config) {
        return this.send('account.sendChangePhoneCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.changePhone}
     * @param {object} config
     * @property {string} config.phone_number
     * @property {string} config.phone_code_hash
     * @property {string} config.phone_code
     * @returns {User}
     */
    changePhone(config) {
        return this.send('account.changePhone', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateDeviceLocked}
     * @param {object} config
     * @property {int} config.period
     * @returns {Bool}
     */
    updateDeviceLocked(config) {
        return this.send('account.updateDeviceLocked', config)
    }
}

class Users extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/users.getUsers}
     * @param {object} config
     * @property {Vector<InputUser>} config.id
     * @returns {Vector<User>}
     */
    getUsers(config) {
        return this.send('users.getUsers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/users.getFullUser}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {UserFull}
     */
    getFullUser(config) {
        return this.send('users.getFullUser', config)
    }
}

class Contacts extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/contacts.getStatuses}
     * @returns {Vector<ContactStatus>}
     */
    getStatuses() {
        return this.send('contacts.getStatuses')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getContacts}
     * @param {object} config
     * @property {string} config.hash
     * @returns {contacts.Contacts}
     */
    getContacts(config) {
        return this.send('contacts.getContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.importContacts}
     * @param {object} config
     * @property {Vector<InputContact>} config.contacts
     * @property {Bool} config.replace
     * @returns {contacts.ImportedContacts}
     */
    importContacts(config) {
        return this.send('contacts.importContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.deleteContact}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {contacts.Link}
     */
    deleteContact(config) {
        return this.send('contacts.deleteContact', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.deleteContacts}
     * @param {object} config
     * @property {Vector<InputUser>} config.id
     * @returns {Bool}
     */
    deleteContacts(config) {
        return this.send('contacts.deleteContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.block}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {Bool}
     */
    block(config) {
        return this.send('contacts.block', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.unblock}
     * @param {object} config
     * @property {InputUser} config.id
     * @returns {Bool}
     */
    unblock(config) {
        return this.send('contacts.unblock', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getBlocked}
     * @param {object} config
     * @property {int} config.offset
     * @property {int} config.limit
     * @returns {contacts.Blocked}
     */
    getBlocked(config) {
        return this.send('contacts.getBlocked', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.exportCard}
     * @returns {Vector<int>}
     */
    exportCard() {
        return this.send('contacts.exportCard')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.importCard}
     * @param {object} config
     * @property {Vector<int>} config.export_card
     * @returns {User}
     */
    importCard(config) {
        return this.send('contacts.importCard', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.search}
     * @param {object} config
     * @property {string} config.q
     * @property {int} config.limit
     * @returns {contacts.Found}
     */
    search(config) {
        return this.send('contacts.search', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.resolveUsername}
     * @param {object} config
     * @property {string} config.username
     * @returns {User}
     */
    resolveUsername(config) {
        return this.send('contacts.resolveUsername', config)
    }
}

class Messages extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/messages.getMessages}
     * @param {object} config
     * @property {Vector<int>} config.id
     * @returns {messages.Messages}
     */
    getMessages(config) {
        return this.send('messages.getMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDialogs}
     * @param {object} config
     * @property {int} config.offset
     * @property {int} config.max_id
     * @property {int} config.limit
     * @returns {messages.Dialogs}
     */
    getDialogs(config) {
        return this.send('messages.getDialogs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getHistory}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.offset
     * @property {int} config.max_id
     * @property {int} config.limit
     * @returns {messages.Messages}
     */
    getHistory(config) {
        return this.send('messages.getHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.search}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {string} config.q
     * @property {MessagesFilter} config.filter
     * @property {int} config.min_date
     * @property {int} config.max_date
     * @property {int} config.offset
     * @property {int} config.max_id
     * @property {int} config.limit
     * @returns {messages.Messages}
     */
    search(config) {
        return this.send('messages.search', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readHistory}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.max_id
     * @property {int} config.offset
     * @property {Bool} config.read_contents
     * @returns {messages.AffectedHistory}
     */
    readHistory(config) {
        return this.send('messages.readHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteHistory}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {int} config.offset
     * @returns {messages.AffectedHistory}
     */
    deleteHistory(config) {
        return this.send('messages.deleteHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteMessages}
     * @param {object} config
     * @property {Vector<int>} config.id
     * @returns {Vector<int>}
     */
    deleteMessages(config) {
        return this.send('messages.deleteMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.receivedMessages}
     * @param {object} config
     * @property {int} config.max_id
     * @returns {Vector<int>}
     */
    receivedMessages(config) {
        return this.send('messages.receivedMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setTyping}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {SendMessageAction} config.action
     * @returns {Bool}
     */
    setTyping(config) {
        return this.send('messages.setTyping', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendMessage}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {string} config.message
     * @property {long} config.random_id
     * @returns {messages.SentMessage}
     */
    sendMessage(config) {
        return this.send('messages.sendMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendMedia}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {InputMedia} config.media
     * @property {long} config.random_id
     * @returns {messages.StatedMessage}
     */
    sendMedia(config) {
        return this.send('messages.sendMedia', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.forwardMessages}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {Vector<int>} config.id
     * @returns {messages.StatedMessages}
     */
    forwardMessages(config) {
        return this.send('messages.forwardMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reportSpam}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @returns {Bool}
     */
    reportSpam(config) {
        return this.send('messages.reportSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.hideReportSpam}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @returns {Bool}
     */
    hideReportSpam(config) {
        return this.send('messages.hideReportSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getPeerSettings}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @returns {PeerSettings}
     */
    getPeerSettings(config) {
        return this.send('messages.getPeerSettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.report}
     * @param {object} config
     * @property {InputPeer} config.peer
     * @property {Vector<int>} config.id
     * @property {ReportReason} config.reason
     * @returns {Bool}
     */
    report(config) {
        return this.send('messages.report', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getChats}
     * @param {object} config
     * @property {Vector<int>} config.id
     * @returns {messages.Chats}
     */
    getChats(config) {
        return this.send('messages.getChats', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getFullChat}
     * @param {object} config
     * @property {int} config.chat_id
     * @returns {messages.ChatFull}
     */
    getFullChat(config) {
        return this.send('messages.getFullChat', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editChatTitle}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {string} config.title
     * @returns {messages.StatedMessage}
     */
    editChatTitle(config) {
        return this.send('messages.editChatTitle', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editChatPhoto}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {InputChatPhoto} config.photo
     * @returns {messages.StatedMessage}
     */
    editChatPhoto(config) {
        return this.send('messages.editChatPhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.addChatUser}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {InputUser} config.user_id
     * @property {int} config.fwd_limit
     * @returns {messages.StatedMessage}
     */
    addChatUser(config) {
        return this.send('messages.addChatUser', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteChatUser}
     * @param {object} config
     * @property {int} config.chat_id
     * @property {InputUser} config.user_id
     * @returns {messages.StatedMessage}
     */
    deleteChatUser(config) {
        return this.send('messages.deleteChatUser', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.createChat}
     * @param {object} config
     * @property {Vector<InputUser>} config.users
     * @property {string} config.title
     * @returns {messages.StatedMessage}
     */
    createChat(config) {
        return this.send('messages.createChat', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDhConfig}
     * @param {object} config
     * @property {int} config.version
     * @property {int} config.random_length
     * @returns {messages.DhConfig}
     */
    getDhConfig(config) {
        return this.send('messages.getDhConfig', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.requestEncryption}
     * @param {object} config
     * @property {InputUser} config.user_id
     * @property {int} config.random_id
     * @property {bytes} config.g_a
     * @returns {EncryptedChat}
     */
    requestEncryption(config) {
        return this.send('messages.requestEncryption', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.acceptEncryption}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {bytes} config.g_b
     * @property {long} config.key_fingerprint
     * @returns {EncryptedChat}
     */
    acceptEncryption(config) {
        return this.send('messages.acceptEncryption', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.discardEncryption}
     * @param {object} config
     * @property {int} config.chat_id
     * @returns {Bool}
     */
    discardEncryption(config) {
        return this.send('messages.discardEncryption', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setEncryptedTyping}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {Bool} config.typing
     * @returns {Bool}
     */
    setEncryptedTyping(config) {
        return this.send('messages.setEncryptedTyping', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readEncryptedHistory}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {int} config.max_date
     * @returns {Bool}
     */
    readEncryptedHistory(config) {
        return this.send('messages.readEncryptedHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendEncrypted}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {long} config.random_id
     * @property {bytes} config.data
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncrypted(config) {
        return this.send('messages.sendEncrypted', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendEncryptedFile}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {long} config.random_id
     * @property {bytes} config.data
     * @property {InputEncryptedFile} config.file
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncryptedFile(config) {
        return this.send('messages.sendEncryptedFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendEncryptedService}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @property {long} config.random_id
     * @property {bytes} config.data
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncryptedService(config) {
        return this.send('messages.sendEncryptedService', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.receivedQueue}
     * @param {object} config
     * @property {int} config.max_qts
     * @returns {Vector<long>}
     */
    receivedQueue(config) {
        return this.send('messages.receivedQueue', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reportEncryptedSpam}
     * @param {object} config
     * @property {InputEncryptedChat} config.peer
     * @returns {Bool}
     */
    reportEncryptedSpam(config) {
        return this.send('messages.reportEncryptedSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readMessageContents}
     * @param {object} config
     * @property {Vector<int>} config.id
     * @returns {Vector<int>}
     */
    readMessageContents(config) {
        return this.send('messages.readMessageContents', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getStickers}
     * @param {object} config
     * @property {string} config.emoticon
     * @property {string} config.hash
     * @returns {messages.Stickers}
     */
    getStickers(config) {
        return this.send('messages.getStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAllStickers}
     * @param {object} config
     * @property {string} config.hash
     * @returns {messages.AllStickers}
     */
    getAllStickers(config) {
        return this.send('messages.getAllStickers', config)
    }
}

class Updates extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/updates.getState}
     * @returns {updates.State}
     */
    getState() {
        return this.send('updates.getState')
    }

    /**
     * @see {@link https://core.telegram.org/method/updates.getDifference}
     * @param {object} config
     * @property {int} config.pts
     * @property {int} config.date
     * @property {int} config.qts
     * @returns {updates.Difference}
     */
    getDifference(config) {
        return this.send('updates.getDifference', config)
    }
}

class Photos extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/photos.updateProfilePhoto}
     * @param {object} config
     * @property {InputPhoto} config.id
     * @property {InputPhotoCrop} config.crop
     * @returns {UserProfilePhoto}
     */
    updateProfilePhoto(config) {
        return this.send('photos.updateProfilePhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/photos.uploadProfilePhoto}
     * @param {object} config
     * @property {InputFile} config.file
     * @property {string} config.caption
     * @property {InputGeoPoint} config.geo_point
     * @property {InputPhotoCrop} config.crop
     * @returns {photos.Photo}
     */
    uploadProfilePhoto(config) {
        return this.send('photos.uploadProfilePhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/photos.deletePhotos}
     * @param {object} config
     * @property {Vector<InputPhoto>} config.id
     * @returns {Vector<long>}
     */
    deletePhotos(config) {
        return this.send('photos.deletePhotos', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/photos.getUserPhotos}
     * @param {object} config
     * @property {InputUser} config.user_id
     * @property {int} config.offset
     * @property {int} config.max_id
     * @property {int} config.limit
     * @returns {photos.Photos}
     */
    getUserPhotos(config) {
        return this.send('photos.getUserPhotos', config)
    }
}

class Upload extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/upload.saveFilePart}
     * @param {object} config
     * @property {long} config.file_id
     * @property {int} config.file_part
     * @property {bytes} config.bytes
     * @returns {Bool}
     */
    saveFilePart(config) {
        return this.send('upload.saveFilePart', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getFile}
     * @param {object} config
     * @property {InputFileLocation} config.location
     * @property {int} config.offset
     * @property {int} config.limit
     * @returns {upload.File}
     */
    getFile(config) {
        return this.send('upload.getFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.saveBigFilePart}
     * @param {object} config
     * @property {long} config.file_id
     * @property {int} config.file_part
     * @property {int} config.file_total_parts
     * @property {bytes} config.bytes
     * @returns {Bool}
     */
    saveBigFilePart(config) {
        return this.send('upload.saveBigFilePart', config)
    }
}

class Help extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/help.getConfig}
     * @returns {Config}
     */
    getConfig() {
        return this.send('help.getConfig')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getNearestDc}
     * @returns {NearestDc}
     */
    getNearestDc() {
        return this.send('help.getNearestDc')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getAppUpdate}
     * @param {object} config
     * @property {string} config.device_model
     * @property {string} config.system_version
     * @property {string} config.app_version
     * @property {string} config.lang_code
     * @returns {help.AppUpdate}
     */
    getAppUpdate(config) {
        return this.send('help.getAppUpdate', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.saveAppLog}
     * @param {object} config
     * @property {Vector<InputAppEvent>} config.events
     * @returns {Bool}
     */
    saveAppLog(config) {
        return this.send('help.saveAppLog', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getInviteText}
     * @param {object} config
     * @property {string} config.lang_code
     * @returns {help.InviteText}
     */
    getInviteText(config) {
        return this.send('help.getInviteText', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getSupport}
     * @returns {help.Support}
     */
    getSupport() {
        return this.send('help.getSupport')
    }
}


class MTProtoClient {
    /**
     * @param {ApiManagerInstance} api
     */
    constructor(api){
        /**
         * @property {number}
         */
        this.__errors = 0
        /**
         * @property {ApiManagerInstance}
         */
        this.__connector = api

        const ctor = this.constructor

        
        /**
         * @type {Auth}
         */
        this.auth = new ctor.Auth(this)

        /**
         * @type {Account}
         */
        this.account = new ctor.Account(this)

        /**
         * @type {Users}
         */
        this.users = new ctor.Users(this)

        /**
         * @type {Contacts}
         */
        this.contacts = new ctor.Contacts(this)

        /**
         * @type {Messages}
         */
        this.messages = new ctor.Messages(this)

        /**
         * @type {Updates}
         */
        this.updates = new ctor.Updates(this)

        /**
         * @type {Photos}
         */
        this.photos = new ctor.Photos(this)

        /**
         * @type {Upload}
         */
        this.upload = new ctor.Upload(this)

        /**
         * @type {Help}
         */
        this.help = new ctor.Help(this)
    }

    request(query, config) {

        return new Promise((resolve, reject) => {
            this.__connector(query, config)
                .then(res => {
                    this.__errors = 0
                    return resolve(res)
                })
                .catch(err => {
                    if (this.__errors >= 3) {
                        return resolve({
                            code: 429,
                            message: "Flood"
                        })
                    }

                    this.__errors += 1

                    return reject(err)
                })

            setTimeout(() => {
                return resolve({
                    code: 500,
                    message: "Timeout"
                })
            }, 10000)
        })
    }
}

MTProtoClient.Ctor = Ctor

MTProtoClient.Auth = Auth
MTProtoClient.Account = Account
MTProtoClient.Users = Users
MTProtoClient.Contacts = Contacts
MTProtoClient.Messages = Messages
MTProtoClient.Updates = Updates
MTProtoClient.Photos = Photos
MTProtoClient.Upload = Upload
MTProtoClient.Help = Help

module.exports = MTProtoClient
