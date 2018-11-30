
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

//classes//

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

        //internal//
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

//external//

module.exports = MTProtoClient
