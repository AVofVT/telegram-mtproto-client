
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

class Contest extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/contest.saveDeveloperInfo}
     * @param {Object} config
     * @param {int} config.vk_id
     * @param {string} config.name
     * @param {string} config.phone_number
     * @param {int} config.age
     * @param {string} config.city
     * @returns {Bool}
     */
    saveDeveloperInfo(config) {
        return this.send('contest.saveDeveloperInfo', config)
    }
}

class Auth extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/auth.sendCode}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.allow_flashcall
     * @param {string} config.phone_number
     * @param {Bool} config.current_number
     * @param {int} config.api_id
     * @param {string} config.api_hash
     * @returns {auth.SentCode}
     */
    sendCode(config) {
        return this.send('auth.sendCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.signUp}
     * @param {Object} config
     * @param {string} config.phone_number
     * @param {string} config.phone_code_hash
     * @param {string} config.phone_code
     * @param {string} config.first_name
     * @param {string} config.last_name
     * @returns {auth.Authorization}
     */
    signUp(config) {
        return this.send('auth.signUp', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.signIn}
     * @param {Object} config
     * @param {string} config.phone_number
     * @param {string} config.phone_code_hash
     * @param {string} config.phone_code
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
     * @param {Object} config
     * @param {int} config.dc_id
     * @returns {auth.ExportedAuthorization}
     */
    exportAuthorization(config) {
        return this.send('auth.exportAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.importAuthorization}
     * @param {Object} config
     * @param {int} config.id
     * @param {bytes} config.bytes
     * @returns {auth.Authorization}
     */
    importAuthorization(config) {
        return this.send('auth.importAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.bindTempAuthKey}
     * @param {Object} config
     * @param {long} config.perm_auth_key_id
     * @param {long} config.nonce
     * @param {int} config.expires_at
     * @param {bytes} config.encrypted_message
     * @returns {Bool}
     */
    bindTempAuthKey(config) {
        return this.send('auth.bindTempAuthKey', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.importBotAuthorization}
     * @param {Object} config
     * @param {int} config.flags
     * @param {int} config.api_id
     * @param {string} config.api_hash
     * @param {string} config.bot_auth_token
     * @returns {auth.Authorization}
     */
    importBotAuthorization(config) {
        return this.send('auth.importBotAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.checkPassword}
     * @param {Object} config
     * @param {InputCheckPasswordSRP} config.password
     * @returns {auth.Authorization}
     */
    checkPassword(config) {
        return this.send('auth.checkPassword', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.requestPasswordRecovery}
     * @returns {auth.PasswordRecovery}
     */
    requestPasswordRecovery() {
        return this.send('auth.requestPasswordRecovery')
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.recoverPassword}
     * @param {Object} config
     * @param {string} config.code
     * @returns {auth.Authorization}
     */
    recoverPassword(config) {
        return this.send('auth.recoverPassword', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.resendCode}
     * @param {Object} config
     * @param {string} config.phone_number
     * @param {string} config.phone_code_hash
     * @returns {auth.SentCode}
     */
    resendCode(config) {
        return this.send('auth.resendCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.cancelCode}
     * @param {Object} config
     * @param {string} config.phone_number
     * @param {string} config.phone_code_hash
     * @returns {Bool}
     */
    cancelCode(config) {
        return this.send('auth.cancelCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.dropTempAuthKeys}
     * @param {Object} config
     * @param {Vector.<long>} config.except_auth_keys
     * @returns {Bool}
     */
    dropTempAuthKeys(config) {
        return this.send('auth.dropTempAuthKeys', config)
    }
}

class Account extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/account.registerDevice}
     * @param {Object} config
     * @param {int} config.token_type
     * @param {string} config.token
     * @param {Bool} config.app_sandbox
     * @param {bytes} config.secret
     * @param {Vector.<int>} config.other_uids
     * @returns {Bool}
     */
    registerDevice(config) {
        return this.send('account.registerDevice', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.unregisterDevice}
     * @param {Object} config
     * @param {int} config.token_type
     * @param {string} config.token
     * @param {Vector.<int>} config.other_uids
     * @returns {Bool}
     */
    unregisterDevice(config) {
        return this.send('account.unregisterDevice', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateNotifySettings}
     * @param {Object} config
     * @param {InputNotifyPeer} config.peer
     * @param {InputPeerNotifySettings} config.settings
     * @returns {Bool}
     */
    updateNotifySettings(config) {
        return this.send('account.updateNotifySettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getNotifySettings}
     * @param {Object} config
     * @param {InputNotifyPeer} config.peer
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
     * @param {Object} config
     * @param {#} config.flags
     * @param {string} config.first_name
     * @param {string} config.last_name
     * @param {string} config.about
     * @returns {User}
     */
    updateProfile(config) {
        return this.send('account.updateProfile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateStatus}
     * @param {Object} config
     * @param {Bool} config.offline
     * @returns {Bool}
     */
    updateStatus(config) {
        return this.send('account.updateStatus', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getWallPapers}
     * @returns {Vector.<WallPaper>}
     */
    getWallPapers() {
        return this.send('account.getWallPapers')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.reportPeer}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {ReportReason} config.reason
     * @returns {Bool}
     */
    reportPeer(config) {
        return this.send('account.reportPeer', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.checkUsername}
     * @param {Object} config
     * @param {string} config.username
     * @returns {Bool}
     */
    checkUsername(config) {
        return this.send('account.checkUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateUsername}
     * @param {Object} config
     * @param {string} config.username
     * @returns {User}
     */
    updateUsername(config) {
        return this.send('account.updateUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getPrivacy}
     * @param {Object} config
     * @param {InputPrivacyKey} config.key
     * @returns {account.PrivacyRules}
     */
    getPrivacy(config) {
        return this.send('account.getPrivacy', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.setPrivacy}
     * @param {Object} config
     * @param {InputPrivacyKey} config.key
     * @param {Vector.<InputPrivacyRule>} config.rules
     * @returns {account.PrivacyRules}
     */
    setPrivacy(config) {
        return this.send('account.setPrivacy', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.deleteAccount}
     * @param {Object} config
     * @param {string} config.reason
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
     * @param {Object} config
     * @param {AccountDaysTTL} config.ttl
     * @returns {Bool}
     */
    setAccountTTL(config) {
        return this.send('account.setAccountTTL', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.sendChangePhoneCode}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.allow_flashcall
     * @param {string} config.phone_number
     * @param {Bool} config.current_number
     * @returns {auth.SentCode}
     */
    sendChangePhoneCode(config) {
        return this.send('account.sendChangePhoneCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.changePhone}
     * @param {Object} config
     * @param {string} config.phone_number
     * @param {string} config.phone_code_hash
     * @param {string} config.phone_code
     * @returns {User}
     */
    changePhone(config) {
        return this.send('account.changePhone', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updateDeviceLocked}
     * @param {Object} config
     * @param {int} config.period
     * @returns {Bool}
     */
    updateDeviceLocked(config) {
        return this.send('account.updateDeviceLocked', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getAuthorizations}
     * @returns {account.Authorizations}
     */
    getAuthorizations() {
        return this.send('account.getAuthorizations')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.resetAuthorization}
     * @param {Object} config
     * @param {long} config.hash
     * @returns {Bool}
     */
    resetAuthorization(config) {
        return this.send('account.resetAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getPassword}
     * @returns {account.Password}
     */
    getPassword() {
        return this.send('account.getPassword')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getPasswordSettings}
     * @param {Object} config
     * @param {InputCheckPasswordSRP} config.password
     * @returns {account.PasswordSettings}
     */
    getPasswordSettings(config) {
        return this.send('account.getPasswordSettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updatePasswordSettings}
     * @param {Object} config
     * @param {InputCheckPasswordSRP} config.password
     * @param {account.PasswordInputSettings} config.new_settings
     * @returns {Bool}
     */
    updatePasswordSettings(config) {
        return this.send('account.updatePasswordSettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.sendConfirmPhoneCode}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.allow_flashcall
     * @param {string} config.hash
     * @param {Bool} config.current_number
     * @returns {auth.SentCode}
     */
    sendConfirmPhoneCode(config) {
        return this.send('account.sendConfirmPhoneCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.confirmPhone}
     * @param {Object} config
     * @param {string} config.phone_code_hash
     * @param {string} config.phone_code
     * @returns {Bool}
     */
    confirmPhone(config) {
        return this.send('account.confirmPhone', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getTmpPassword}
     * @param {Object} config
     * @param {InputCheckPasswordSRP} config.password
     * @param {int} config.period
     * @returns {account.TmpPassword}
     */
    getTmpPassword(config) {
        return this.send('account.getTmpPassword', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getWebAuthorizations}
     * @returns {account.WebAuthorizations}
     */
    getWebAuthorizations() {
        return this.send('account.getWebAuthorizations')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.resetWebAuthorization}
     * @param {Object} config
     * @param {long} config.hash
     * @returns {Bool}
     */
    resetWebAuthorization(config) {
        return this.send('account.resetWebAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.resetWebAuthorizations}
     * @returns {Bool}
     */
    resetWebAuthorizations() {
        return this.send('account.resetWebAuthorizations')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getAllSecureValues}
     * @returns {Vector.<SecureValue>}
     */
    getAllSecureValues() {
        return this.send('account.getAllSecureValues')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getSecureValue}
     * @param {Object} config
     * @param {Vector.<SecureValueType>} config.types
     * @returns {Vector.<SecureValue>}
     */
    getSecureValue(config) {
        return this.send('account.getSecureValue', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.saveSecureValue}
     * @param {Object} config
     * @param {InputSecureValue} config.value
     * @param {long} config.secure_secret_id
     * @returns {SecureValue}
     */
    saveSecureValue(config) {
        return this.send('account.saveSecureValue', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.deleteSecureValue}
     * @param {Object} config
     * @param {Vector.<SecureValueType>} config.types
     * @returns {Bool}
     */
    deleteSecureValue(config) {
        return this.send('account.deleteSecureValue', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getAuthorizationForm}
     * @param {Object} config
     * @param {int} config.bot_id
     * @param {string} config.scope
     * @param {string} config.public_key
     * @returns {account.AuthorizationForm}
     */
    getAuthorizationForm(config) {
        return this.send('account.getAuthorizationForm', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.acceptAuthorization}
     * @param {Object} config
     * @param {int} config.bot_id
     * @param {string} config.scope
     * @param {string} config.public_key
     * @param {Vector.<SecureValueHash>} config.value_hashes
     * @param {SecureCredentialsEncrypted} config.credentials
     * @returns {Bool}
     */
    acceptAuthorization(config) {
        return this.send('account.acceptAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.sendVerifyPhoneCode}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.allow_flashcall
     * @param {string} config.phone_number
     * @param {Bool} config.current_number
     * @returns {auth.SentCode}
     */
    sendVerifyPhoneCode(config) {
        return this.send('account.sendVerifyPhoneCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.verifyPhone}
     * @param {Object} config
     * @param {string} config.phone_number
     * @param {string} config.phone_code_hash
     * @param {string} config.phone_code
     * @returns {Bool}
     */
    verifyPhone(config) {
        return this.send('account.verifyPhone', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.sendVerifyEmailCode}
     * @param {Object} config
     * @param {string} config.email
     * @returns {account.SentEmailCode}
     */
    sendVerifyEmailCode(config) {
        return this.send('account.sendVerifyEmailCode', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.verifyEmail}
     * @param {Object} config
     * @param {string} config.email
     * @param {string} config.code
     * @returns {Bool}
     */
    verifyEmail(config) {
        return this.send('account.verifyEmail', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.initTakeoutSession}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.contacts
     * @param {true} config.message_users
     * @param {true} config.message_chats
     * @param {true} config.message_megagroups
     * @param {true} config.message_channels
     * @param {true} config.files
     * @param {int} config.file_max_size
     * @returns {account.Takeout}
     */
    initTakeoutSession(config) {
        return this.send('account.initTakeoutSession', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.finishTakeoutSession}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.success
     * @returns {Bool}
     */
    finishTakeoutSession(config) {
        return this.send('account.finishTakeoutSession', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.confirmPasswordEmail}
     * @param {Object} config
     * @param {string} config.code
     * @returns {Bool}
     */
    confirmPasswordEmail(config) {
        return this.send('account.confirmPasswordEmail', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.resendPasswordEmail}
     * @returns {Bool}
     */
    resendPasswordEmail() {
        return this.send('account.resendPasswordEmail')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.cancelPasswordEmail}
     * @returns {Bool}
     */
    cancelPasswordEmail() {
        return this.send('account.cancelPasswordEmail')
    }
}

class Users extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/users.getUsers}
     * @param {Object} config
     * @param {Vector.<InputUser>} config.id
     * @returns {Vector.<User>}
     */
    getUsers(config) {
        return this.send('users.getUsers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/users.getFullUser}
     * @param {Object} config
     * @param {InputUser} config.id
     * @returns {UserFull}
     */
    getFullUser(config) {
        return this.send('users.getFullUser', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/users.setSecureValueErrors}
     * @param {Object} config
     * @param {InputUser} config.id
     * @param {Vector.<SecureValueError>} config.errors
     * @returns {Bool}
     */
    setSecureValueErrors(config) {
        return this.send('users.setSecureValueErrors', config)
    }
}

class Contacts extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/contacts.getContactIDs}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {Vector.<int>}
     */
    getContactIDs(config) {
        return this.send('contacts.getContactIDs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getStatuses}
     * @returns {Vector.<ContactStatus>}
     */
    getStatuses() {
        return this.send('contacts.getStatuses')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getContacts}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {contacts.Contacts}
     */
    getContacts(config) {
        return this.send('contacts.getContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.importContacts}
     * @param {Object} config
     * @param {Vector.<InputContact>} config.contacts
     * @returns {contacts.ImportedContacts}
     */
    importContacts(config) {
        return this.send('contacts.importContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.deleteContact}
     * @param {Object} config
     * @param {InputUser} config.id
     * @returns {contacts.Link}
     */
    deleteContact(config) {
        return this.send('contacts.deleteContact', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.deleteContacts}
     * @param {Object} config
     * @param {Vector.<InputUser>} config.id
     * @returns {Bool}
     */
    deleteContacts(config) {
        return this.send('contacts.deleteContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.block}
     * @param {Object} config
     * @param {InputUser} config.id
     * @returns {Bool}
     */
    block(config) {
        return this.send('contacts.block', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.unblock}
     * @param {Object} config
     * @param {InputUser} config.id
     * @returns {Bool}
     */
    unblock(config) {
        return this.send('contacts.unblock', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getBlocked}
     * @param {Object} config
     * @param {int} config.offset
     * @param {int} config.limit
     * @returns {contacts.Blocked}
     */
    getBlocked(config) {
        return this.send('contacts.getBlocked', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.exportCard}
     * @returns {Vector.<int>}
     */
    exportCard() {
        return this.send('contacts.exportCard')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.importCard}
     * @param {Object} config
     * @param {Vector.<int>} config.export_card
     * @returns {User}
     */
    importCard(config) {
        return this.send('contacts.importCard', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.search}
     * @param {Object} config
     * @param {string} config.q
     * @param {int} config.limit
     * @returns {contacts.Found}
     */
    search(config) {
        return this.send('contacts.search', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.resolveUsername}
     * @param {Object} config
     * @param {string} config.username
     * @returns {contacts.ResolvedPeer}
     */
    resolveUsername(config) {
        return this.send('contacts.resolveUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getTopPeers}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.correspondents
     * @param {true} config.bots_pm
     * @param {true} config.bots_inline
     * @param {true} config.phone_calls
     * @param {true} config.groups
     * @param {true} config.channels
     * @param {int} config.offset
     * @param {int} config.limit
     * @param {int} config.hash
     * @returns {contacts.TopPeers}
     */
    getTopPeers(config) {
        return this.send('contacts.getTopPeers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.resetTopPeerRating}
     * @param {Object} config
     * @param {TopPeerCategory} config.category
     * @param {InputPeer} config.peer
     * @returns {Bool}
     */
    resetTopPeerRating(config) {
        return this.send('contacts.resetTopPeerRating', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.resetSaved}
     * @returns {Bool}
     */
    resetSaved() {
        return this.send('contacts.resetSaved')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getSaved}
     * @returns {Vector.<SavedContact>}
     */
    getSaved() {
        return this.send('contacts.getSaved')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.toggleTopPeers}
     * @param {Object} config
     * @param {Bool} config.enabled
     * @returns {Bool}
     */
    toggleTopPeers(config) {
        return this.send('contacts.toggleTopPeers', config)
    }
}

class Messages extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/messages.getMessages}
     * @param {Object} config
     * @param {Vector.<InputMessage>} config.id
     * @returns {messages.Messages}
     */
    getMessages(config) {
        return this.send('messages.getMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDialogs}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.exclude_pinned
     * @param {int} config.offset_date
     * @param {int} config.offset_id
     * @param {InputPeer} config.offset_peer
     * @param {int} config.limit
     * @param {int} config.hash
     * @returns {messages.Dialogs}
     */
    getDialogs(config) {
        return this.send('messages.getDialogs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getHistory}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.offset_id
     * @param {int} config.offset_date
     * @param {int} config.add_offset
     * @param {int} config.limit
     * @param {int} config.max_id
     * @param {int} config.min_id
     * @param {int} config.hash
     * @returns {messages.Messages}
     */
    getHistory(config) {
        return this.send('messages.getHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.search}
     * @param {Object} config
     * @param {#} config.flags
     * @param {InputPeer} config.peer
     * @param {string} config.q
     * @param {InputUser} config.from_id
     * @param {MessagesFilter} config.filter
     * @param {int} config.min_date
     * @param {int} config.max_date
     * @param {int} config.offset_id
     * @param {int} config.add_offset
     * @param {int} config.limit
     * @param {int} config.max_id
     * @param {int} config.min_id
     * @param {int} config.hash
     * @returns {messages.Messages}
     */
    search(config) {
        return this.send('messages.search', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readHistory}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.max_id
     * @returns {messages.AffectedMessages}
     */
    readHistory(config) {
        return this.send('messages.readHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteHistory}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.just_clear
     * @param {InputPeer} config.peer
     * @param {int} config.max_id
     * @returns {messages.AffectedHistory}
     */
    deleteHistory(config) {
        return this.send('messages.deleteHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteMessages}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.revoke
     * @param {Vector.<int>} config.id
     * @returns {messages.AffectedMessages}
     */
    deleteMessages(config) {
        return this.send('messages.deleteMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.receivedMessages}
     * @param {Object} config
     * @param {int} config.max_id
     * @returns {Vector.<ReceivedNotifyMessage>}
     */
    receivedMessages(config) {
        return this.send('messages.receivedMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setTyping}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {SendMessageAction} config.action
     * @returns {Bool}
     */
    setTyping(config) {
        return this.send('messages.setTyping', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendMessage}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.no_webpage
     * @param {true} config.silent
     * @param {true} config.background
     * @param {true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {int} config.reply_to_msg_id
     * @param {string} config.message
     * @param {long} config.random_id
     * @param {ReplyMarkup} config.reply_markup
     * @param {Vector.<MessageEntity>} config.entities
     * @returns {Updates}
     */
    sendMessage(config) {
        return this.send('messages.sendMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendMedia}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.silent
     * @param {true} config.background
     * @param {true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {int} config.reply_to_msg_id
     * @param {InputMedia} config.media
     * @param {string} config.message
     * @param {long} config.random_id
     * @param {ReplyMarkup} config.reply_markup
     * @param {Vector.<MessageEntity>} config.entities
     * @returns {Updates}
     */
    sendMedia(config) {
        return this.send('messages.sendMedia', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.forwardMessages}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.silent
     * @param {true} config.background
     * @param {true} config.with_my_score
     * @param {true} config.grouped
     * @param {InputPeer} config.from_peer
     * @param {Vector.<int>} config.id
     * @param {Vector.<long>} config.random_id
     * @param {InputPeer} config.to_peer
     * @returns {Updates}
     */
    forwardMessages(config) {
        return this.send('messages.forwardMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reportSpam}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @returns {Bool}
     */
    reportSpam(config) {
        return this.send('messages.reportSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.hideReportSpam}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @returns {Bool}
     */
    hideReportSpam(config) {
        return this.send('messages.hideReportSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getPeerSettings}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @returns {PeerSettings}
     */
    getPeerSettings(config) {
        return this.send('messages.getPeerSettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.report}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {Vector.<int>} config.id
     * @param {ReportReason} config.reason
     * @returns {Bool}
     */
    report(config) {
        return this.send('messages.report', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getChats}
     * @param {Object} config
     * @param {Vector.<int>} config.id
     * @returns {messages.Chats}
     */
    getChats(config) {
        return this.send('messages.getChats', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getFullChat}
     * @param {Object} config
     * @param {int} config.chat_id
     * @returns {messages.ChatFull}
     */
    getFullChat(config) {
        return this.send('messages.getFullChat', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editChatTitle}
     * @param {Object} config
     * @param {int} config.chat_id
     * @param {string} config.title
     * @returns {Updates}
     */
    editChatTitle(config) {
        return this.send('messages.editChatTitle', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editChatPhoto}
     * @param {Object} config
     * @param {int} config.chat_id
     * @param {InputChatPhoto} config.photo
     * @returns {Updates}
     */
    editChatPhoto(config) {
        return this.send('messages.editChatPhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.addChatUser}
     * @param {Object} config
     * @param {int} config.chat_id
     * @param {InputUser} config.user_id
     * @param {int} config.fwd_limit
     * @returns {Updates}
     */
    addChatUser(config) {
        return this.send('messages.addChatUser', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteChatUser}
     * @param {Object} config
     * @param {int} config.chat_id
     * @param {InputUser} config.user_id
     * @returns {Updates}
     */
    deleteChatUser(config) {
        return this.send('messages.deleteChatUser', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.createChat}
     * @param {Object} config
     * @param {Vector.<InputUser>} config.users
     * @param {string} config.title
     * @returns {Updates}
     */
    createChat(config) {
        return this.send('messages.createChat', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDhConfig}
     * @param {Object} config
     * @param {int} config.version
     * @param {int} config.random_length
     * @returns {messages.DhConfig}
     */
    getDhConfig(config) {
        return this.send('messages.getDhConfig', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.requestEncryption}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @param {int} config.random_id
     * @param {bytes} config.g_a
     * @returns {EncryptedChat}
     */
    requestEncryption(config) {
        return this.send('messages.requestEncryption', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.acceptEncryption}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @param {bytes} config.g_b
     * @param {long} config.key_fingerprint
     * @returns {EncryptedChat}
     */
    acceptEncryption(config) {
        return this.send('messages.acceptEncryption', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.discardEncryption}
     * @param {Object} config
     * @param {int} config.chat_id
     * @returns {Bool}
     */
    discardEncryption(config) {
        return this.send('messages.discardEncryption', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setEncryptedTyping}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @param {Bool} config.typing
     * @returns {Bool}
     */
    setEncryptedTyping(config) {
        return this.send('messages.setEncryptedTyping', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readEncryptedHistory}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @param {int} config.max_date
     * @returns {Bool}
     */
    readEncryptedHistory(config) {
        return this.send('messages.readEncryptedHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendEncrypted}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @param {long} config.random_id
     * @param {bytes} config.data
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncrypted(config) {
        return this.send('messages.sendEncrypted', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendEncryptedFile}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @param {long} config.random_id
     * @param {bytes} config.data
     * @param {InputEncryptedFile} config.file
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncryptedFile(config) {
        return this.send('messages.sendEncryptedFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendEncryptedService}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @param {long} config.random_id
     * @param {bytes} config.data
     * @returns {messages.SentEncryptedMessage}
     */
    sendEncryptedService(config) {
        return this.send('messages.sendEncryptedService', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.receivedQueue}
     * @param {Object} config
     * @param {int} config.max_qts
     * @returns {Vector.<long>}
     */
    receivedQueue(config) {
        return this.send('messages.receivedQueue', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reportEncryptedSpam}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @returns {Bool}
     */
    reportEncryptedSpam(config) {
        return this.send('messages.reportEncryptedSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readMessageContents}
     * @param {Object} config
     * @param {Vector.<int>} config.id
     * @returns {messages.AffectedMessages}
     */
    readMessageContents(config) {
        return this.send('messages.readMessageContents', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getStickers}
     * @param {Object} config
     * @param {string} config.emoticon
     * @param {int} config.hash
     * @returns {messages.Stickers}
     */
    getStickers(config) {
        return this.send('messages.getStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAllStickers}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages.AllStickers}
     */
    getAllStickers(config) {
        return this.send('messages.getAllStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getWebPagePreview}
     * @param {Object} config
     * @param {#} config.flags
     * @param {string} config.message
     * @param {Vector.<MessageEntity>} config.entities
     * @returns {MessageMedia}
     */
    getWebPagePreview(config) {
        return this.send('messages.getWebPagePreview', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.exportChatInvite}
     * @param {Object} config
     * @param {int} config.chat_id
     * @returns {ExportedChatInvite}
     */
    exportChatInvite(config) {
        return this.send('messages.exportChatInvite', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.checkChatInvite}
     * @param {Object} config
     * @param {string} config.hash
     * @returns {ChatInvite}
     */
    checkChatInvite(config) {
        return this.send('messages.checkChatInvite', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.importChatInvite}
     * @param {Object} config
     * @param {string} config.hash
     * @returns {Updates}
     */
    importChatInvite(config) {
        return this.send('messages.importChatInvite', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getStickerSet}
     * @param {Object} config
     * @param {InputStickerSet} config.stickerset
     * @returns {messages.StickerSet}
     */
    getStickerSet(config) {
        return this.send('messages.getStickerSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.installStickerSet}
     * @param {Object} config
     * @param {InputStickerSet} config.stickerset
     * @param {Bool} config.archived
     * @returns {messages.StickerSetInstallResult}
     */
    installStickerSet(config) {
        return this.send('messages.installStickerSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.uninstallStickerSet}
     * @param {Object} config
     * @param {InputStickerSet} config.stickerset
     * @returns {Bool}
     */
    uninstallStickerSet(config) {
        return this.send('messages.uninstallStickerSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.startBot}
     * @param {Object} config
     * @param {InputUser} config.bot
     * @param {InputPeer} config.peer
     * @param {long} config.random_id
     * @param {string} config.start_param
     * @returns {Updates}
     */
    startBot(config) {
        return this.send('messages.startBot', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getMessagesViews}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {Vector.<int>} config.id
     * @param {Bool} config.increment
     * @returns {Vector.<int>}
     */
    getMessagesViews(config) {
        return this.send('messages.getMessagesViews', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.toggleChatAdmins}
     * @param {Object} config
     * @param {int} config.chat_id
     * @param {Bool} config.enabled
     * @returns {Updates}
     */
    toggleChatAdmins(config) {
        return this.send('messages.toggleChatAdmins', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editChatAdmin}
     * @param {Object} config
     * @param {int} config.chat_id
     * @param {InputUser} config.user_id
     * @param {Bool} config.is_admin
     * @returns {Bool}
     */
    editChatAdmin(config) {
        return this.send('messages.editChatAdmin', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.migrateChat}
     * @param {Object} config
     * @param {int} config.chat_id
     * @returns {Updates}
     */
    migrateChat(config) {
        return this.send('messages.migrateChat', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.searchGlobal}
     * @param {Object} config
     * @param {string} config.q
     * @param {int} config.offset_date
     * @param {InputPeer} config.offset_peer
     * @param {int} config.offset_id
     * @param {int} config.limit
     * @returns {messages.Messages}
     */
    searchGlobal(config) {
        return this.send('messages.searchGlobal', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reorderStickerSets}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.masks
     * @param {Vector.<long>} config.order
     * @returns {Bool}
     */
    reorderStickerSets(config) {
        return this.send('messages.reorderStickerSets', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDocumentByHash}
     * @param {Object} config
     * @param {bytes} config.sha256
     * @param {int} config.size
     * @param {string} config.mime_type
     * @returns {Document}
     */
    getDocumentByHash(config) {
        return this.send('messages.getDocumentByHash', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.searchGifs}
     * @param {Object} config
     * @param {string} config.q
     * @param {int} config.offset
     * @returns {messages.FoundGifs}
     */
    searchGifs(config) {
        return this.send('messages.searchGifs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getSavedGifs}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages.SavedGifs}
     */
    getSavedGifs(config) {
        return this.send('messages.getSavedGifs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.saveGif}
     * @param {Object} config
     * @param {InputDocument} config.id
     * @param {Bool} config.unsave
     * @returns {Bool}
     */
    saveGif(config) {
        return this.send('messages.saveGif', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getInlineBotResults}
     * @param {Object} config
     * @param {#} config.flags
     * @param {InputUser} config.bot
     * @param {InputPeer} config.peer
     * @param {InputGeoPoint} config.geo_point
     * @param {string} config.query
     * @param {string} config.offset
     * @returns {messages.BotResults}
     */
    getInlineBotResults(config) {
        return this.send('messages.getInlineBotResults', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setInlineBotResults}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.gallery
     * @param {true} config.private
     * @param {long} config.query_id
     * @param {Vector.<InputBotInlineResult>} config.results
     * @param {int} config.cache_time
     * @param {string} config.next_offset
     * @param {InlineBotSwitchPM} config.switch_pm
     * @returns {Bool}
     */
    setInlineBotResults(config) {
        return this.send('messages.setInlineBotResults', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendInlineBotResult}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.silent
     * @param {true} config.background
     * @param {true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {int} config.reply_to_msg_id
     * @param {long} config.random_id
     * @param {long} config.query_id
     * @param {string} config.id
     * @returns {Updates}
     */
    sendInlineBotResult(config) {
        return this.send('messages.sendInlineBotResult', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getMessageEditData}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.id
     * @returns {messages.MessageEditData}
     */
    getMessageEditData(config) {
        return this.send('messages.getMessageEditData', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editMessage}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.no_webpage
     * @param {true} config.stop_geo_live
     * @param {InputPeer} config.peer
     * @param {int} config.id
     * @param {string} config.message
     * @param {InputMedia} config.media
     * @param {ReplyMarkup} config.reply_markup
     * @param {Vector.<MessageEntity>} config.entities
     * @param {InputGeoPoint} config.geo_point
     * @returns {Updates}
     */
    editMessage(config) {
        return this.send('messages.editMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editInlineBotMessage}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.no_webpage
     * @param {true} config.stop_geo_live
     * @param {InputBotInlineMessageID} config.id
     * @param {string} config.message
     * @param {InputMedia} config.media
     * @param {ReplyMarkup} config.reply_markup
     * @param {Vector.<MessageEntity>} config.entities
     * @param {InputGeoPoint} config.geo_point
     * @returns {Bool}
     */
    editInlineBotMessage(config) {
        return this.send('messages.editInlineBotMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getBotCallbackAnswer}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.game
     * @param {InputPeer} config.peer
     * @param {int} config.msg_id
     * @param {bytes} config.data
     * @returns {messages.BotCallbackAnswer}
     */
    getBotCallbackAnswer(config) {
        return this.send('messages.getBotCallbackAnswer', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setBotCallbackAnswer}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.alert
     * @param {long} config.query_id
     * @param {string} config.message
     * @param {string} config.url
     * @param {int} config.cache_time
     * @returns {Bool}
     */
    setBotCallbackAnswer(config) {
        return this.send('messages.setBotCallbackAnswer', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getPeerDialogs}
     * @param {Object} config
     * @param {Vector.<InputDialogPeer>} config.peers
     * @returns {messages.PeerDialogs}
     */
    getPeerDialogs(config) {
        return this.send('messages.getPeerDialogs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.saveDraft}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.no_webpage
     * @param {int} config.reply_to_msg_id
     * @param {InputPeer} config.peer
     * @param {string} config.message
     * @param {Vector.<MessageEntity>} config.entities
     * @returns {Bool}
     */
    saveDraft(config) {
        return this.send('messages.saveDraft', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAllDrafts}
     * @returns {Updates}
     */
    getAllDrafts() {
        return this.send('messages.getAllDrafts')
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getFeaturedStickers}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages.FeaturedStickers}
     */
    getFeaturedStickers(config) {
        return this.send('messages.getFeaturedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readFeaturedStickers}
     * @param {Object} config
     * @param {Vector.<long>} config.id
     * @returns {Bool}
     */
    readFeaturedStickers(config) {
        return this.send('messages.readFeaturedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getRecentStickers}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.attached
     * @param {int} config.hash
     * @returns {messages.RecentStickers}
     */
    getRecentStickers(config) {
        return this.send('messages.getRecentStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.saveRecentSticker}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.attached
     * @param {InputDocument} config.id
     * @param {Bool} config.unsave
     * @returns {Bool}
     */
    saveRecentSticker(config) {
        return this.send('messages.saveRecentSticker', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.clearRecentStickers}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.attached
     * @returns {Bool}
     */
    clearRecentStickers(config) {
        return this.send('messages.clearRecentStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getArchivedStickers}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.masks
     * @param {long} config.offset_id
     * @param {int} config.limit
     * @returns {messages.ArchivedStickers}
     */
    getArchivedStickers(config) {
        return this.send('messages.getArchivedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getMaskStickers}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages.AllStickers}
     */
    getMaskStickers(config) {
        return this.send('messages.getMaskStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAttachedStickers}
     * @param {Object} config
     * @param {InputStickeredMedia} config.media
     * @returns {Vector.<StickerSetCovered>}
     */
    getAttachedStickers(config) {
        return this.send('messages.getAttachedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setGameScore}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.edit_message
     * @param {true} config.force
     * @param {InputPeer} config.peer
     * @param {int} config.id
     * @param {InputUser} config.user_id
     * @param {int} config.score
     * @returns {Updates}
     */
    setGameScore(config) {
        return this.send('messages.setGameScore', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setInlineGameScore}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.edit_message
     * @param {true} config.force
     * @param {InputBotInlineMessageID} config.id
     * @param {InputUser} config.user_id
     * @param {int} config.score
     * @returns {Bool}
     */
    setInlineGameScore(config) {
        return this.send('messages.setInlineGameScore', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getGameHighScores}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.id
     * @param {InputUser} config.user_id
     * @returns {messages.HighScores}
     */
    getGameHighScores(config) {
        return this.send('messages.getGameHighScores', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getInlineGameHighScores}
     * @param {Object} config
     * @param {InputBotInlineMessageID} config.id
     * @param {InputUser} config.user_id
     * @returns {messages.HighScores}
     */
    getInlineGameHighScores(config) {
        return this.send('messages.getInlineGameHighScores', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getCommonChats}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @param {int} config.max_id
     * @param {int} config.limit
     * @returns {messages.Chats}
     */
    getCommonChats(config) {
        return this.send('messages.getCommonChats', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAllChats}
     * @param {Object} config
     * @param {Vector.<int>} config.except_ids
     * @returns {messages.Chats}
     */
    getAllChats(config) {
        return this.send('messages.getAllChats', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getWebPage}
     * @param {Object} config
     * @param {string} config.url
     * @param {int} config.hash
     * @returns {WebPage}
     */
    getWebPage(config) {
        return this.send('messages.getWebPage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.toggleDialogPin}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.pinned
     * @param {InputDialogPeer} config.peer
     * @returns {Bool}
     */
    toggleDialogPin(config) {
        return this.send('messages.toggleDialogPin', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reorderPinnedDialogs}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.force
     * @param {Vector.<InputDialogPeer>} config.order
     * @returns {Bool}
     */
    reorderPinnedDialogs(config) {
        return this.send('messages.reorderPinnedDialogs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getPinnedDialogs}
     * @returns {messages.PeerDialogs}
     */
    getPinnedDialogs() {
        return this.send('messages.getPinnedDialogs')
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setBotShippingResults}
     * @param {Object} config
     * @param {#} config.flags
     * @param {long} config.query_id
     * @param {string} config.error
     * @param {Vector.<ShippingOption>} config.shipping_options
     * @returns {Bool}
     */
    setBotShippingResults(config) {
        return this.send('messages.setBotShippingResults', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setBotPrecheckoutResults}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.success
     * @param {long} config.query_id
     * @param {string} config.error
     * @returns {Bool}
     */
    setBotPrecheckoutResults(config) {
        return this.send('messages.setBotPrecheckoutResults', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.uploadMedia}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {InputMedia} config.media
     * @returns {MessageMedia}
     */
    uploadMedia(config) {
        return this.send('messages.uploadMedia', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendScreenshotNotification}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.reply_to_msg_id
     * @param {long} config.random_id
     * @returns {Updates}
     */
    sendScreenshotNotification(config) {
        return this.send('messages.sendScreenshotNotification', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getFavedStickers}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages.FavedStickers}
     */
    getFavedStickers(config) {
        return this.send('messages.getFavedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.faveSticker}
     * @param {Object} config
     * @param {InputDocument} config.id
     * @param {Bool} config.unfave
     * @returns {Bool}
     */
    faveSticker(config) {
        return this.send('messages.faveSticker', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getUnreadMentions}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.offset_id
     * @param {int} config.add_offset
     * @param {int} config.limit
     * @param {int} config.max_id
     * @param {int} config.min_id
     * @returns {messages.Messages}
     */
    getUnreadMentions(config) {
        return this.send('messages.getUnreadMentions', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readMentions}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @returns {messages.AffectedHistory}
     */
    readMentions(config) {
        return this.send('messages.readMentions', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getRecentLocations}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.limit
     * @param {int} config.hash
     * @returns {messages.Messages}
     */
    getRecentLocations(config) {
        return this.send('messages.getRecentLocations', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendMultiMedia}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.silent
     * @param {true} config.background
     * @param {true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {int} config.reply_to_msg_id
     * @param {Vector.<InputSingleMedia>} config.multi_media
     * @returns {Updates}
     */
    sendMultiMedia(config) {
        return this.send('messages.sendMultiMedia', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.uploadEncryptedFile}
     * @param {Object} config
     * @param {InputEncryptedChat} config.peer
     * @param {InputEncryptedFile} config.file
     * @returns {EncryptedFile}
     */
    uploadEncryptedFile(config) {
        return this.send('messages.uploadEncryptedFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.searchStickerSets}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.exclude_featured
     * @param {string} config.q
     * @param {int} config.hash
     * @returns {messages.FoundStickerSets}
     */
    searchStickerSets(config) {
        return this.send('messages.searchStickerSets', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getSplitRanges}
     * @returns {Vector.<MessageRange>}
     */
    getSplitRanges() {
        return this.send('messages.getSplitRanges')
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.markDialogUnread}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.unread
     * @param {InputDialogPeer} config.peer
     * @returns {Bool}
     */
    markDialogUnread(config) {
        return this.send('messages.markDialogUnread', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDialogUnreadMarks}
     * @returns {Vector.<DialogPeer>}
     */
    getDialogUnreadMarks() {
        return this.send('messages.getDialogUnreadMarks')
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.clearAllDrafts}
     * @returns {Bool}
     */
    clearAllDrafts() {
        return this.send('messages.clearAllDrafts')
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.updatePinnedMessage}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.silent
     * @param {InputPeer} config.peer
     * @param {int} config.id
     * @returns {Updates}
     */
    updatePinnedMessage(config) {
        return this.send('messages.updatePinnedMessage', config)
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
     * @param {Object} config
     * @param {#} config.flags
     * @param {int} config.pts
     * @param {int} config.pts_total_limit
     * @param {int} config.date
     * @param {int} config.qts
     * @returns {updates.Difference}
     */
    getDifference(config) {
        return this.send('updates.getDifference', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/updates.getChannelDifference}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.force
     * @param {InputChannel} config.channel
     * @param {ChannelMessagesFilter} config.filter
     * @param {int} config.pts
     * @param {int} config.limit
     * @returns {updates.ChannelDifference}
     */
    getChannelDifference(config) {
        return this.send('updates.getChannelDifference', config)
    }
}

class Photos extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/photos.updateProfilePhoto}
     * @param {Object} config
     * @param {InputPhoto} config.id
     * @returns {UserProfilePhoto}
     */
    updateProfilePhoto(config) {
        return this.send('photos.updateProfilePhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/photos.uploadProfilePhoto}
     * @param {Object} config
     * @param {InputFile} config.file
     * @returns {photos.Photo}
     */
    uploadProfilePhoto(config) {
        return this.send('photos.uploadProfilePhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/photos.deletePhotos}
     * @param {Object} config
     * @param {Vector.<InputPhoto>} config.id
     * @returns {Vector.<long>}
     */
    deletePhotos(config) {
        return this.send('photos.deletePhotos', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/photos.getUserPhotos}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @param {int} config.offset
     * @param {long} config.max_id
     * @param {int} config.limit
     * @returns {photos.Photos}
     */
    getUserPhotos(config) {
        return this.send('photos.getUserPhotos', config)
    }
}

class Upload extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/upload.saveFilePart}
     * @param {Object} config
     * @param {long} config.file_id
     * @param {int} config.file_part
     * @param {bytes} config.bytes
     * @returns {Bool}
     */
    saveFilePart(config) {
        return this.send('upload.saveFilePart', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getFile}
     * @param {Object} config
     * @param {InputFileLocation} config.location
     * @param {int} config.offset
     * @param {int} config.limit
     * @returns {upload.File}
     */
    getFile(config) {
        return this.send('upload.getFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.saveBigFilePart}
     * @param {Object} config
     * @param {long} config.file_id
     * @param {int} config.file_part
     * @param {int} config.file_total_parts
     * @param {bytes} config.bytes
     * @returns {Bool}
     */
    saveBigFilePart(config) {
        return this.send('upload.saveBigFilePart', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getWebFile}
     * @param {Object} config
     * @param {InputWebFileLocation} config.location
     * @param {int} config.offset
     * @param {int} config.limit
     * @returns {upload.WebFile}
     */
    getWebFile(config) {
        return this.send('upload.getWebFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getCdnFile}
     * @param {Object} config
     * @param {bytes} config.file_token
     * @param {int} config.offset
     * @param {int} config.limit
     * @returns {upload.CdnFile}
     */
    getCdnFile(config) {
        return this.send('upload.getCdnFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.reuploadCdnFile}
     * @param {Object} config
     * @param {bytes} config.file_token
     * @param {bytes} config.request_token
     * @returns {Vector.<FileHash>}
     */
    reuploadCdnFile(config) {
        return this.send('upload.reuploadCdnFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getCdnFileHashes}
     * @param {Object} config
     * @param {bytes} config.file_token
     * @param {int} config.offset
     * @returns {Vector.<FileHash>}
     */
    getCdnFileHashes(config) {
        return this.send('upload.getCdnFileHashes', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getFileHashes}
     * @param {Object} config
     * @param {InputFileLocation} config.location
     * @param {int} config.offset
     * @returns {Vector.<FileHash>}
     */
    getFileHashes(config) {
        return this.send('upload.getFileHashes', config)
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
     * @param {Object} config
     * @param {string} config.source
     * @returns {help.AppUpdate}
     */
    getAppUpdate(config) {
        return this.send('help.getAppUpdate', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.saveAppLog}
     * @param {Object} config
     * @param {Vector.<InputAppEvent>} config.events
     * @returns {Bool}
     */
    saveAppLog(config) {
        return this.send('help.saveAppLog', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getInviteText}
     * @returns {help.InviteText}
     */
    getInviteText() {
        return this.send('help.getInviteText')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getSupport}
     * @returns {help.Support}
     */
    getSupport() {
        return this.send('help.getSupport')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getAppChangelog}
     * @param {Object} config
     * @param {string} config.prev_app_version
     * @returns {Updates}
     */
    getAppChangelog(config) {
        return this.send('help.getAppChangelog', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.setBotUpdatesStatus}
     * @param {Object} config
     * @param {int} config.pending_updates_count
     * @param {string} config.message
     * @returns {Bool}
     */
    setBotUpdatesStatus(config) {
        return this.send('help.setBotUpdatesStatus', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getCdnConfig}
     * @returns {CdnConfig}
     */
    getCdnConfig() {
        return this.send('help.getCdnConfig')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getRecentMeUrls}
     * @param {Object} config
     * @param {string} config.referer
     * @returns {help.RecentMeUrls}
     */
    getRecentMeUrls(config) {
        return this.send('help.getRecentMeUrls', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getProxyData}
     * @returns {help.ProxyData}
     */
    getProxyData() {
        return this.send('help.getProxyData')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getTermsOfServiceUpdate}
     * @returns {help.TermsOfServiceUpdate}
     */
    getTermsOfServiceUpdate() {
        return this.send('help.getTermsOfServiceUpdate')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.acceptTermsOfService}
     * @param {Object} config
     * @param {DataJSON} config.id
     * @returns {Bool}
     */
    acceptTermsOfService(config) {
        return this.send('help.acceptTermsOfService', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getDeepLinkInfo}
     * @param {Object} config
     * @param {string} config.path
     * @returns {help.DeepLinkInfo}
     */
    getDeepLinkInfo(config) {
        return this.send('help.getDeepLinkInfo', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getPassportConfig}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {help.PassportConfig}
     */
    getPassportConfig(config) {
        return this.send('help.getPassportConfig', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getSupportName}
     * @returns {help.SupportName}
     */
    getSupportName() {
        return this.send('help.getSupportName')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getUserInfo}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @returns {help.UserInfo}
     */
    getUserInfo(config) {
        return this.send('help.getUserInfo', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.editUserInfo}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @param {string} config.message
     * @param {Vector.<MessageEntity>} config.entities
     * @returns {help.UserInfo}
     */
    editUserInfo(config) {
        return this.send('help.editUserInfo', config)
    }
}

class Channels extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/channels.readHistory}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {int} config.max_id
     * @returns {Bool}
     */
    readHistory(config) {
        return this.send('channels.readHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.deleteMessages}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Vector.<int>} config.id
     * @returns {messages.AffectedMessages}
     */
    deleteMessages(config) {
        return this.send('channels.deleteMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.deleteUserHistory}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @returns {messages.AffectedHistory}
     */
    deleteUserHistory(config) {
        return this.send('channels.deleteUserHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.reportSpam}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @param {Vector.<int>} config.id
     * @returns {Bool}
     */
    reportSpam(config) {
        return this.send('channels.reportSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getMessages}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Vector.<InputMessage>} config.id
     * @returns {messages.Messages}
     */
    getMessages(config) {
        return this.send('channels.getMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getParticipants}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {ChannelParticipantsFilter} config.filter
     * @param {int} config.offset
     * @param {int} config.limit
     * @param {int} config.hash
     * @returns {channels.ChannelParticipants}
     */
    getParticipants(config) {
        return this.send('channels.getParticipants', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getParticipant}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @returns {channels.ChannelParticipant}
     */
    getParticipant(config) {
        return this.send('channels.getParticipant', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getChannels}
     * @param {Object} config
     * @param {Vector.<InputChannel>} config.id
     * @returns {messages.Chats}
     */
    getChannels(config) {
        return this.send('channels.getChannels', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getFullChannel}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @returns {messages.ChatFull}
     */
    getFullChannel(config) {
        return this.send('channels.getFullChannel', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.createChannel}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.broadcast
     * @param {true} config.megagroup
     * @param {string} config.title
     * @param {string} config.about
     * @returns {Updates}
     */
    createChannel(config) {
        return this.send('channels.createChannel', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.editAbout}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {string} config.about
     * @returns {Bool}
     */
    editAbout(config) {
        return this.send('channels.editAbout', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.editAdmin}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @param {ChannelAdminRights} config.admin_rights
     * @returns {Updates}
     */
    editAdmin(config) {
        return this.send('channels.editAdmin', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.editTitle}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {string} config.title
     * @returns {Updates}
     */
    editTitle(config) {
        return this.send('channels.editTitle', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.editPhoto}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputChatPhoto} config.photo
     * @returns {Updates}
     */
    editPhoto(config) {
        return this.send('channels.editPhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.checkUsername}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {string} config.username
     * @returns {Bool}
     */
    checkUsername(config) {
        return this.send('channels.checkUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.updateUsername}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {string} config.username
     * @returns {Bool}
     */
    updateUsername(config) {
        return this.send('channels.updateUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.joinChannel}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @returns {Updates}
     */
    joinChannel(config) {
        return this.send('channels.joinChannel', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.leaveChannel}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @returns {Updates}
     */
    leaveChannel(config) {
        return this.send('channels.leaveChannel', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.inviteToChannel}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Vector.<InputUser>} config.users
     * @returns {Updates}
     */
    inviteToChannel(config) {
        return this.send('channels.inviteToChannel', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.exportInvite}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @returns {ExportedChatInvite}
     */
    exportInvite(config) {
        return this.send('channels.exportInvite', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.deleteChannel}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @returns {Updates}
     */
    deleteChannel(config) {
        return this.send('channels.deleteChannel', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.toggleInvites}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Bool} config.enabled
     * @returns {Updates}
     */
    toggleInvites(config) {
        return this.send('channels.toggleInvites', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.exportMessageLink}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {int} config.id
     * @param {Bool} config.grouped
     * @returns {ExportedMessageLink}
     */
    exportMessageLink(config) {
        return this.send('channels.exportMessageLink', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.toggleSignatures}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Bool} config.enabled
     * @returns {Updates}
     */
    toggleSignatures(config) {
        return this.send('channels.toggleSignatures', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.updatePinnedMessage}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.silent
     * @param {InputChannel} config.channel
     * @param {int} config.id
     * @returns {Updates}
     */
    updatePinnedMessage(config) {
        return this.send('channels.updatePinnedMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getAdminedPublicChannels}
     * @returns {messages.Chats}
     */
    getAdminedPublicChannels() {
        return this.send('channels.getAdminedPublicChannels')
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.editBanned}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @param {ChannelBannedRights} config.banned_rights
     * @returns {Updates}
     */
    editBanned(config) {
        return this.send('channels.editBanned', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getAdminLog}
     * @param {Object} config
     * @param {#} config.flags
     * @param {InputChannel} config.channel
     * @param {string} config.q
     * @param {ChannelAdminLogEventsFilter} config.events_filter
     * @param {Vector.<InputUser>} config.admins
     * @param {long} config.max_id
     * @param {long} config.min_id
     * @param {int} config.limit
     * @returns {channels.AdminLogResults}
     */
    getAdminLog(config) {
        return this.send('channels.getAdminLog', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.setStickers}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputStickerSet} config.stickerset
     * @returns {Bool}
     */
    setStickers(config) {
        return this.send('channels.setStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.readMessageContents}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Vector.<int>} config.id
     * @returns {Bool}
     */
    readMessageContents(config) {
        return this.send('channels.readMessageContents', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.deleteHistory}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {int} config.max_id
     * @returns {Bool}
     */
    deleteHistory(config) {
        return this.send('channels.deleteHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.togglePreHistoryHidden}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Bool} config.enabled
     * @returns {Updates}
     */
    togglePreHistoryHidden(config) {
        return this.send('channels.togglePreHistoryHidden', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getLeftChannels}
     * @param {Object} config
     * @param {int} config.offset
     * @returns {messages.Chats}
     */
    getLeftChannels(config) {
        return this.send('channels.getLeftChannels', config)
    }
}

class Bots extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/bots.sendCustomRequest}
     * @param {Object} config
     * @param {string} config.custom_method
     * @param {DataJSON} config.params
     * @returns {DataJSON}
     */
    sendCustomRequest(config) {
        return this.send('bots.sendCustomRequest', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/bots.answerWebhookJSONQuery}
     * @param {Object} config
     * @param {long} config.query_id
     * @param {DataJSON} config.data
     * @returns {Bool}
     */
    answerWebhookJSONQuery(config) {
        return this.send('bots.answerWebhookJSONQuery', config)
    }
}

class Payments extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/payments.getPaymentForm}
     * @param {Object} config
     * @param {int} config.msg_id
     * @returns {payments.PaymentForm}
     */
    getPaymentForm(config) {
        return this.send('payments.getPaymentForm', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.getPaymentReceipt}
     * @param {Object} config
     * @param {int} config.msg_id
     * @returns {payments.PaymentReceipt}
     */
    getPaymentReceipt(config) {
        return this.send('payments.getPaymentReceipt', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.validateRequestedInfo}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.save
     * @param {int} config.msg_id
     * @param {PaymentRequestedInfo} config.info
     * @returns {payments.ValidatedRequestedInfo}
     */
    validateRequestedInfo(config) {
        return this.send('payments.validateRequestedInfo', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.sendPaymentForm}
     * @param {Object} config
     * @param {#} config.flags
     * @param {int} config.msg_id
     * @param {string} config.requested_info_id
     * @param {string} config.shipping_option_id
     * @param {InputPaymentCredentials} config.credentials
     * @returns {payments.PaymentResult}
     */
    sendPaymentForm(config) {
        return this.send('payments.sendPaymentForm', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.getSavedInfo}
     * @returns {payments.SavedInfo}
     */
    getSavedInfo() {
        return this.send('payments.getSavedInfo')
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.clearSavedInfo}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.credentials
     * @param {true} config.info
     * @returns {Bool}
     */
    clearSavedInfo(config) {
        return this.send('payments.clearSavedInfo', config)
    }
}

class Stickers extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/stickers.createStickerSet}
     * @param {Object} config
     * @param {#} config.flags
     * @param {true} config.masks
     * @param {InputUser} config.user_id
     * @param {string} config.title
     * @param {string} config.short_name
     * @param {Vector.<InputStickerSetItem>} config.stickers
     * @returns {messages.StickerSet}
     */
    createStickerSet(config) {
        return this.send('stickers.createStickerSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/stickers.removeStickerFromSet}
     * @param {Object} config
     * @param {InputDocument} config.sticker
     * @returns {messages.StickerSet}
     */
    removeStickerFromSet(config) {
        return this.send('stickers.removeStickerFromSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/stickers.changeStickerPosition}
     * @param {Object} config
     * @param {InputDocument} config.sticker
     * @param {int} config.position
     * @returns {messages.StickerSet}
     */
    changeStickerPosition(config) {
        return this.send('stickers.changeStickerPosition', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/stickers.addStickerToSet}
     * @param {Object} config
     * @param {InputStickerSet} config.stickerset
     * @param {InputStickerSetItem} config.sticker
     * @returns {messages.StickerSet}
     */
    addStickerToSet(config) {
        return this.send('stickers.addStickerToSet', config)
    }
}

class Phone extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/phone.getCallConfig}
     * @returns {DataJSON}
     */
    getCallConfig() {
        return this.send('phone.getCallConfig')
    }

    /**
     * @see {@link https://core.telegram.org/method/phone.requestCall}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @param {int} config.random_id
     * @param {bytes} config.g_a_hash
     * @param {PhoneCallProtocol} config.protocol
     * @returns {phone.PhoneCall}
     */
    requestCall(config) {
        return this.send('phone.requestCall', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/phone.acceptCall}
     * @param {Object} config
     * @param {InputPhoneCall} config.peer
     * @param {bytes} config.g_b
     * @param {PhoneCallProtocol} config.protocol
     * @returns {phone.PhoneCall}
     */
    acceptCall(config) {
        return this.send('phone.acceptCall', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/phone.confirmCall}
     * @param {Object} config
     * @param {InputPhoneCall} config.peer
     * @param {bytes} config.g_a
     * @param {long} config.key_fingerprint
     * @param {PhoneCallProtocol} config.protocol
     * @returns {phone.PhoneCall}
     */
    confirmCall(config) {
        return this.send('phone.confirmCall', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/phone.receivedCall}
     * @param {Object} config
     * @param {InputPhoneCall} config.peer
     * @returns {Bool}
     */
    receivedCall(config) {
        return this.send('phone.receivedCall', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/phone.discardCall}
     * @param {Object} config
     * @param {InputPhoneCall} config.peer
     * @param {int} config.duration
     * @param {PhoneCallDiscardReason} config.reason
     * @param {long} config.connection_id
     * @returns {Updates}
     */
    discardCall(config) {
        return this.send('phone.discardCall', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/phone.setCallRating}
     * @param {Object} config
     * @param {InputPhoneCall} config.peer
     * @param {int} config.rating
     * @param {string} config.comment
     * @returns {Updates}
     */
    setCallRating(config) {
        return this.send('phone.setCallRating', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/phone.saveCallDebug}
     * @param {Object} config
     * @param {InputPhoneCall} config.peer
     * @param {DataJSON} config.debug
     * @returns {Bool}
     */
    saveCallDebug(config) {
        return this.send('phone.saveCallDebug', config)
    }
}

class Langpack extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/langpack.getLangPack}
     * @param {Object} config
     * @param {string} config.lang_pack
     * @param {string} config.lang_code
     * @returns {LangPackDifference}
     */
    getLangPack(config) {
        return this.send('langpack.getLangPack', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/langpack.getStrings}
     * @param {Object} config
     * @param {string} config.lang_pack
     * @param {string} config.lang_code
     * @param {Vector.<string>} config.keys
     * @returns {Vector.<LangPackString>}
     */
    getStrings(config) {
        return this.send('langpack.getStrings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/langpack.getDifference}
     * @param {Object} config
     * @param {string} config.lang_code
     * @param {int} config.from_version
     * @returns {LangPackDifference}
     */
    getDifference(config) {
        return this.send('langpack.getDifference', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/langpack.getLanguages}
     * @param {Object} config
     * @param {string} config.lang_pack
     * @returns {Vector.<LangPackLanguage>}
     */
    getLanguages(config) {
        return this.send('langpack.getLanguages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/langpack.getLanguage}
     * @param {Object} config
     * @param {string} config.lang_pack
     * @param {string} config.lang_code
     * @returns {LangPackLanguage}
     */
    getLanguage(config) {
        return this.send('langpack.getLanguage', config)
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
         * @type {Contest}
         */
        this.contest = new ctor.Contest(this)

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

        /**
         * @type {Channels}
         */
        this.channels = new ctor.Channels(this)

        /**
         * @type {Bots}
         */
        this.bots = new ctor.Bots(this)

        /**
         * @type {Payments}
         */
        this.payments = new ctor.Payments(this)

        /**
         * @type {Stickers}
         */
        this.stickers = new ctor.Stickers(this)

        /**
         * @type {Phone}
         */
        this.phone = new ctor.Phone(this)

        /**
         * @type {Langpack}
         */
        this.langpack = new ctor.Langpack(this)
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

MTProtoClient.Contest = Contest
MTProtoClient.Auth = Auth
MTProtoClient.Account = Account
MTProtoClient.Users = Users
MTProtoClient.Contacts = Contacts
MTProtoClient.Messages = Messages
MTProtoClient.Updates = Updates
MTProtoClient.Photos = Photos
MTProtoClient.Upload = Upload
MTProtoClient.Help = Help
MTProtoClient.Channels = Channels
MTProtoClient.Bots = Bots
MTProtoClient.Payments = Payments
MTProtoClient.Stickers = Stickers
MTProtoClient.Phone = Phone
MTProtoClient.Langpack = Langpack

module.exports = MTProtoClient
