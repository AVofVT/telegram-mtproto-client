
/// TL Builtin ///
/**
 *
 * @see {@link https://core.telegram.org/constructor/Type}
 * @typedef {any} Type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/int}
 * @typedef {number} int
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/long}
 * @typedef {string} long
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/double}
 * @typedef {number} double
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/int128}
 * @typedef {(number | string)} int128
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/int256}
 * @typedef {(number | string)} int256
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/bytes}
 * @typedef {number[]} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/boolFalse}
 * @typedef {false} boolFalse
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/boolTrue}
 * @typedef {true} boolTrue
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/X}
 * @typedef {any} X
 */


/// Constructors ///

/**
 *
 * @see {@link https://core.telegram.org/constructor/resPQ}
 * @typedef {Object} resPQ
 * @property {string} [_=resPQ]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {string} pq
 * @property {Array.<long>} server_public_key_fingerprints
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data}
 * @typedef {Object} p_q_inner_data
 * @property {string} [_=p_q_inner_data]
 * @property {string} pq
 * @property {string} p
 * @property {string} q
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int256} new_nonce
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data_dc}
 * @typedef {Object} p_q_inner_data_dc
 * @property {string} [_=p_q_inner_data_dc]
 * @property {string} pq
 * @property {string} p
 * @property {string} q
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int256} new_nonce
 * @property {int} dc
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data_temp}
 * @typedef {Object} p_q_inner_data_temp
 * @property {string} [_=p_q_inner_data_temp]
 * @property {string} pq
 * @property {string} p
 * @property {string} q
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int256} new_nonce
 * @property {int} expires_in
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data_temp_dc}
 * @typedef {Object} p_q_inner_data_temp_dc
 * @property {string} [_=p_q_inner_data_temp_dc]
 * @property {string} pq
 * @property {string} p
 * @property {string} q
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int256} new_nonce
 * @property {int} dc
 * @property {int} expires_in
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/server_DH_params_fail}
 * @typedef {Object} server_DH_params_fail
 * @property {string} [_=server_DH_params_fail]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/server_DH_params_ok}
 * @typedef {Object} server_DH_params_ok
 * @property {string} [_=server_DH_params_ok]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {string} encrypted_answer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/server_DH_inner_data}
 * @typedef {Object} server_DH_inner_data
 * @property {string} [_=server_DH_inner_data]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int} g
 * @property {string} dh_prime
 * @property {string} g_a
 * @property {int} server_time
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/client_DH_inner_data}
 * @typedef {Object} client_DH_inner_data
 * @property {string} [_=client_DH_inner_data]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {long} retry_id
 * @property {string} g_b
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dh_gen_ok}
 * @typedef {Object} dh_gen_ok
 * @property {string} [_=dh_gen_ok]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash1
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dh_gen_retry}
 * @typedef {Object} dh_gen_retry
 * @property {string} [_=dh_gen_retry]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash2
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dh_gen_fail}
 * @typedef {Object} dh_gen_fail
 * @property {string} [_=dh_gen_fail]
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash3
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_auth_key_ok}
 * @typedef {Object} destroy_auth_key_ok
 * @property {string} [_=destroy_auth_key_ok]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_auth_key_none}
 * @typedef {Object} destroy_auth_key_none
 * @property {string} [_=destroy_auth_key_none]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_auth_key_fail}
 * @typedef {Object} destroy_auth_key_fail
 * @property {string} [_=destroy_auth_key_fail]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_ack}
 * @typedef {Object} msgs_ack
 * @property {string} [_=msgs_ack]
 * @property {Array.<long>} msg_ids
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/bad_msg_notification}
 * @typedef {Object} bad_msg_notification
 * @property {string} [_=bad_msg_notification]
 * @property {long} bad_msg_id
 * @property {int} bad_msg_seqno
 * @property {int} error_code
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/bad_server_salt}
 * @typedef {Object} bad_server_salt
 * @property {string} [_=bad_server_salt]
 * @property {long} bad_msg_id
 * @property {int} bad_msg_seqno
 * @property {int} error_code
 * @property {long} new_server_salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_state_req}
 * @typedef {Object} msgs_state_req
 * @property {string} [_=msgs_state_req]
 * @property {Array.<long>} msg_ids
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_state_info}
 * @typedef {Object} msgs_state_info
 * @property {string} [_=msgs_state_info]
 * @property {long} req_msg_id
 * @property {string} info
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_all_info}
 * @typedef {Object} msgs_all_info
 * @property {string} [_=msgs_all_info]
 * @property {Array.<long>} msg_ids
 * @property {string} info
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msg_detailed_info}
 * @typedef {Object} msg_detailed_info
 * @property {string} [_=msg_detailed_info]
 * @property {long} msg_id
 * @property {long} answer_msg_id
 * @property {int} bytes
 * @property {int} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msg_new_detailed_info}
 * @typedef {Object} msg_new_detailed_info
 * @property {string} [_=msg_new_detailed_info]
 * @property {long} answer_msg_id
 * @property {int} bytes
 * @property {int} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msg_resend_req}
 * @typedef {Object} msg_resend_req
 * @property {string} [_=msg_resend_req]
 * @property {Array.<long>} msg_ids
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_error}
 * @typedef {Object} rpc_error
 * @property {string} [_=rpc_error]
 * @property {int} error_code
 * @property {string} error_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_answer_unknown}
 * @typedef {Object} rpc_answer_unknown
 * @property {string} [_=rpc_answer_unknown]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_answer_dropped_running}
 * @typedef {Object} rpc_answer_dropped_running
 * @property {string} [_=rpc_answer_dropped_running]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_answer_dropped}
 * @typedef {Object} rpc_answer_dropped
 * @property {string} [_=rpc_answer_dropped]
 * @property {long} msg_id
 * @property {int} seq_no
 * @property {int} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/future_salt}
 * @typedef {Object} future_salt
 * @property {string} [_=future_salt]
 * @property {int} valid_since
 * @property {int} valid_until
 * @property {long} salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/future_salts}
 * @typedef {Object} future_salts
 * @property {string} [_=future_salts]
 * @property {long} req_msg_id
 * @property {int} now
 * @property {Array.<future_salt>} salts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pong}
 * @typedef {Object} pong
 * @property {string} [_=pong]
 * @property {long} msg_id
 * @property {long} ping_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_session_ok}
 * @typedef {Object} destroy_session_ok
 * @property {string} [_=destroy_session_ok]
 * @property {long} session_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_session_none}
 * @typedef {Object} destroy_session_none
 * @property {string} [_=destroy_session_none]
 * @property {long} session_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/new_session_created}
 * @typedef {Object} new_session_created
 * @property {string} [_=new_session_created]
 * @property {long} first_msg_id
 * @property {long} unique_id
 * @property {long} server_salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/http_wait}
 * @typedef {Object} http_wait
 * @property {string} [_=http_wait]
 * @property {int} max_delay
 * @property {int} wait_after
 * @property {int} max_wait
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/ipPort}
 * @typedef {Object} ipPort
 * @property {string} [_=ipPort]
 * @property {int} ipv4
 * @property {int} port
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/ipPortSecret}
 * @typedef {Object} ipPortSecret
 * @property {string} [_=ipPortSecret]
 * @property {int} ipv4
 * @property {int} port
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/accessPointRule}
 * @typedef {Object} accessPointRule
 * @property {string} [_=accessPointRule]
 * @property {string} phone_prefix_rules
 * @property {int} dc_id
 * @property {Array.<IpPort>} ips
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.configSimple}
 * @typedef {Object} help_configSimple
 * @property {string} [_=help.configSimple]
 * @property {int} date
 * @property {int} expires
 * @property {Array.<AccessPointRule>} rules
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/boolFalse}
 * @typedef {Object} boolFalse
 * @property {string} [_=boolFalse]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/boolTrue}
 * @typedef {Object} boolTrue
 * @property {string} [_=boolTrue]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/true}
 * @typedef {Object} true
 * @property {string} [_=true]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/error}
 * @typedef {Object} error
 * @property {string} [_=error]
 * @property {int} code
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/null}
 * @typedef {Object} null
 * @property {string} [_=null]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerEmpty}
 * @typedef {Object} inputPeerEmpty
 * @property {string} [_=inputPeerEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerSelf}
 * @typedef {Object} inputPeerSelf
 * @property {string} [_=inputPeerSelf]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerChat}
 * @typedef {Object} inputPeerChat
 * @property {string} [_=inputPeerChat]
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerUser}
 * @typedef {Object} inputPeerUser
 * @property {string} [_=inputPeerUser]
 * @property {int} user_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerChannel}
 * @typedef {Object} inputPeerChannel
 * @property {string} [_=inputPeerChannel]
 * @property {int} channel_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputUserEmpty}
 * @typedef {Object} inputUserEmpty
 * @property {string} [_=inputUserEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputUserSelf}
 * @typedef {Object} inputUserSelf
 * @property {string} [_=inputUserSelf]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputUser}
 * @typedef {Object} inputUser
 * @property {string} [_=inputUser]
 * @property {int} user_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhoneContact}
 * @typedef {Object} inputPhoneContact
 * @property {string} [_=inputPhoneContact]
 * @property {long} client_id
 * @property {string} phone
 * @property {string} first_name
 * @property {string} last_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputFile}
 * @typedef {Object} inputFile
 * @property {string} [_=inputFile]
 * @property {long} id
 * @property {int} parts
 * @property {string} name
 * @property {string} md5_checksum
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputFileBig}
 * @typedef {Object} inputFileBig
 * @property {string} [_=inputFileBig]
 * @property {long} id
 * @property {int} parts
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaEmpty}
 * @typedef {Object} inputMediaEmpty
 * @property {string} [_=inputMediaEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedPhoto}
 * @typedef {Object} inputMediaUploadedPhoto
 * @property {string} [_=inputMediaUploadedPhoto]
 * @property {number} flags
 * @property {InputFile} file
 * @property {?Array.<InputDocument>} stickers
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaPhoto}
 * @typedef {Object} inputMediaPhoto
 * @property {string} [_=inputMediaPhoto]
 * @property {number} flags
 * @property {InputPhoto} id
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaGeoPoint}
 * @typedef {Object} inputMediaGeoPoint
 * @property {string} [_=inputMediaGeoPoint]
 * @property {InputGeoPoint} geo_point
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaContact}
 * @typedef {Object} inputMediaContact
 * @property {string} [_=inputMediaContact]
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedDocument}
 * @typedef {Object} inputMediaUploadedDocument
 * @property {string} [_=inputMediaUploadedDocument]
 * @property {number} flags
 * @property {?true} nosound_video
 * @property {InputFile} file
 * @property {?InputFile} thumb
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 * @property {?Array.<InputDocument>} stickers
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaDocument}
 * @typedef {Object} inputMediaDocument
 * @property {string} [_=inputMediaDocument]
 * @property {number} flags
 * @property {InputDocument} id
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaVenue}
 * @typedef {Object} inputMediaVenue
 * @property {string} [_=inputMediaVenue]
 * @property {InputGeoPoint} geo_point
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaGifExternal}
 * @typedef {Object} inputMediaGifExternal
 * @property {string} [_=inputMediaGifExternal]
 * @property {string} url
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaPhotoExternal}
 * @typedef {Object} inputMediaPhotoExternal
 * @property {string} [_=inputMediaPhotoExternal]
 * @property {number} flags
 * @property {string} url
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaDocumentExternal}
 * @typedef {Object} inputMediaDocumentExternal
 * @property {string} [_=inputMediaDocumentExternal]
 * @property {number} flags
 * @property {string} url
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaGame}
 * @typedef {Object} inputMediaGame
 * @property {string} [_=inputMediaGame]
 * @property {InputGame} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaInvoice}
 * @typedef {Object} inputMediaInvoice
 * @property {string} [_=inputMediaInvoice]
 * @property {number} flags
 * @property {string} title
 * @property {string} description
 * @property {?InputWebDocument} photo
 * @property {Invoice} invoice
 * @property {bytes} payload
 * @property {string} provider
 * @property {DataJSON} provider_data
 * @property {string} start_param
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaGeoLive}
 * @typedef {Object} inputMediaGeoLive
 * @property {string} [_=inputMediaGeoLive]
 * @property {InputGeoPoint} geo_point
 * @property {int} period
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChatPhotoEmpty}
 * @typedef {Object} inputChatPhotoEmpty
 * @property {string} [_=inputChatPhotoEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChatUploadedPhoto}
 * @typedef {Object} inputChatUploadedPhoto
 * @property {string} [_=inputChatUploadedPhoto]
 * @property {InputFile} file
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChatPhoto}
 * @typedef {Object} inputChatPhoto
 * @property {string} [_=inputChatPhoto]
 * @property {InputPhoto} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputGeoPointEmpty}
 * @typedef {Object} inputGeoPointEmpty
 * @property {string} [_=inputGeoPointEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputGeoPoint}
 * @typedef {Object} inputGeoPoint
 * @property {string} [_=inputGeoPoint]
 * @property {double} lat
 * @property {double} long
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhotoEmpty}
 * @typedef {Object} inputPhotoEmpty
 * @property {string} [_=inputPhotoEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhoto}
 * @typedef {Object} inputPhoto
 * @property {string} [_=inputPhoto]
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputFileLocation}
 * @typedef {Object} inputFileLocation
 * @property {string} [_=inputFileLocation]
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileLocation}
 * @typedef {Object} inputEncryptedFileLocation
 * @property {string} [_=inputEncryptedFileLocation]
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDocumentFileLocation}
 * @typedef {Object} inputDocumentFileLocation
 * @property {string} [_=inputDocumentFileLocation]
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureFileLocation}
 * @typedef {Object} inputSecureFileLocation
 * @property {string} [_=inputSecureFileLocation]
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputTakeoutFileLocation}
 * @typedef {Object} inputTakeoutFileLocation
 * @property {string} [_=inputTakeoutFileLocation]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputAppEvent}
 * @typedef {Object} inputAppEvent
 * @property {string} [_=inputAppEvent]
 * @property {double} time
 * @property {string} type
 * @property {long} peer
 * @property {string} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerUser}
 * @typedef {Object} peerUser
 * @property {string} [_=peerUser]
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerChat}
 * @typedef {Object} peerChat
 * @property {string} [_=peerChat]
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerChannel}
 * @typedef {Object} peerChannel
 * @property {string} [_=peerChannel]
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileUnknown}
 * @typedef {Object} storage_fileUnknown
 * @property {string} [_=storage.fileUnknown]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.filePartial}
 * @typedef {Object} storage_filePartial
 * @property {string} [_=storage.filePartial]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileJpeg}
 * @typedef {Object} storage_fileJpeg
 * @property {string} [_=storage.fileJpeg]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileGif}
 * @typedef {Object} storage_fileGif
 * @property {string} [_=storage.fileGif]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.filePng}
 * @typedef {Object} storage_filePng
 * @property {string} [_=storage.filePng]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.filePdf}
 * @typedef {Object} storage_filePdf
 * @property {string} [_=storage.filePdf]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileMp3}
 * @typedef {Object} storage_fileMp3
 * @property {string} [_=storage.fileMp3]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileMov}
 * @typedef {Object} storage_fileMov
 * @property {string} [_=storage.fileMov]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileMp4}
 * @typedef {Object} storage_fileMp4
 * @property {string} [_=storage.fileMp4]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileWebp}
 * @typedef {Object} storage_fileWebp
 * @property {string} [_=storage.fileWebp]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/fileLocationUnavailable}
 * @typedef {Object} fileLocationUnavailable
 * @property {string} [_=fileLocationUnavailable]
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/fileLocation}
 * @typedef {Object} fileLocation
 * @property {string} [_=fileLocation]
 * @property {int} dc_id
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userEmpty}
 * @typedef {Object} userEmpty
 * @property {string} [_=userEmpty]
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/user}
 * @typedef {Object} user
 * @property {string} [_=user]
 * @property {number} flags
 * @property {?true} self
 * @property {?true} contact
 * @property {?true} mutual_contact
 * @property {?true} deleted
 * @property {?true} bot
 * @property {?true} bot_chat_history
 * @property {?true} bot_nochats
 * @property {?true} verified
 * @property {?true} restricted
 * @property {?true} min
 * @property {?true} bot_inline_geo
 * @property {int} id
 * @property {?long} access_hash
 * @property {?string} first_name
 * @property {?string} last_name
 * @property {?string} username
 * @property {?string} phone
 * @property {?UserProfilePhoto} photo
 * @property {?UserStatus} status
 * @property {?int} bot_info_version
 * @property {?string} restriction_reason
 * @property {?string} bot_inline_placeholder
 * @property {?string} lang_code
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userProfilePhotoEmpty}
 * @typedef {Object} userProfilePhotoEmpty
 * @property {string} [_=userProfilePhotoEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userProfilePhoto}
 * @typedef {Object} userProfilePhoto
 * @property {string} [_=userProfilePhoto]
 * @property {long} photo_id
 * @property {FileLocation} photo_small
 * @property {FileLocation} photo_big
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusEmpty}
 * @typedef {Object} userStatusEmpty
 * @property {string} [_=userStatusEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusOnline}
 * @typedef {Object} userStatusOnline
 * @property {string} [_=userStatusOnline]
 * @property {int} expires
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusOffline}
 * @typedef {Object} userStatusOffline
 * @property {string} [_=userStatusOffline]
 * @property {int} was_online
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusRecently}
 * @typedef {Object} userStatusRecently
 * @property {string} [_=userStatusRecently]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusLastWeek}
 * @typedef {Object} userStatusLastWeek
 * @property {string} [_=userStatusLastWeek]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusLastMonth}
 * @typedef {Object} userStatusLastMonth
 * @property {string} [_=userStatusLastMonth]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatEmpty}
 * @typedef {Object} chatEmpty
 * @property {string} [_=chatEmpty]
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chat}
 * @typedef {Object} chat
 * @property {string} [_=chat]
 * @property {number} flags
 * @property {?true} creator
 * @property {?true} kicked
 * @property {?true} left
 * @property {?true} admins_enabled
 * @property {?true} admin
 * @property {?true} deactivated
 * @property {int} id
 * @property {string} title
 * @property {ChatPhoto} photo
 * @property {int} participants_count
 * @property {int} date
 * @property {int} version
 * @property {?InputChannel} migrated_to
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatForbidden}
 * @typedef {Object} chatForbidden
 * @property {string} [_=chatForbidden]
 * @property {int} id
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channel}
 * @typedef {Object} channel
 * @property {string} [_=channel]
 * @property {number} flags
 * @property {?true} creator
 * @property {?true} left
 * @property {?true} editor
 * @property {?true} broadcast
 * @property {?true} verified
 * @property {?true} megagroup
 * @property {?true} restricted
 * @property {?true} democracy
 * @property {?true} signatures
 * @property {?true} min
 * @property {int} id
 * @property {?long} access_hash
 * @property {string} title
 * @property {?string} username
 * @property {ChatPhoto} photo
 * @property {int} date
 * @property {int} version
 * @property {?string} restriction_reason
 * @property {?ChannelAdminRights} admin_rights
 * @property {?ChannelBannedRights} banned_rights
 * @property {?int} participants_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelForbidden}
 * @typedef {Object} channelForbidden
 * @property {string} [_=channelForbidden]
 * @property {number} flags
 * @property {?true} broadcast
 * @property {?true} megagroup
 * @property {int} id
 * @property {long} access_hash
 * @property {string} title
 * @property {?int} until_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatFull}
 * @typedef {Object} chatFull
 * @property {string} [_=chatFull]
 * @property {number} flags
 * @property {int} id
 * @property {ChatParticipants} participants
 * @property {?Photo} chat_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {ExportedChatInvite} exported_invite
 * @property {?Array.<BotInfo>} bot_info
 * @property {?int} pinned_msg_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelFull}
 * @typedef {Object} channelFull
 * @property {string} [_=channelFull]
 * @property {number} flags
 * @property {?true} can_view_participants
 * @property {?true} can_set_username
 * @property {?true} can_set_stickers
 * @property {?true} hidden_prehistory
 * @property {int} id
 * @property {string} about
 * @property {?int} participants_count
 * @property {?int} admins_count
 * @property {?int} kicked_count
 * @property {?int} banned_count
 * @property {int} read_inbox_max_id
 * @property {int} read_outbox_max_id
 * @property {int} unread_count
 * @property {Photo} chat_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {ExportedChatInvite} exported_invite
 * @property {Array.<BotInfo>} bot_info
 * @property {?int} migrated_from_chat_id
 * @property {?int} migrated_from_max_id
 * @property {?int} pinned_msg_id
 * @property {?StickerSet} stickerset
 * @property {?int} available_min_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipant}
 * @typedef {Object} chatParticipant
 * @property {string} [_=chatParticipant]
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipantCreator}
 * @typedef {Object} chatParticipantCreator
 * @property {string} [_=chatParticipantCreator]
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipantAdmin}
 * @typedef {Object} chatParticipantAdmin
 * @property {string} [_=chatParticipantAdmin]
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipantsForbidden}
 * @typedef {Object} chatParticipantsForbidden
 * @property {string} [_=chatParticipantsForbidden]
 * @property {number} flags
 * @property {int} chat_id
 * @property {?ChatParticipant} self_participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipants}
 * @typedef {Object} chatParticipants
 * @property {string} [_=chatParticipants]
 * @property {int} chat_id
 * @property {Array.<ChatParticipant>} participants
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatPhotoEmpty}
 * @typedef {Object} chatPhotoEmpty
 * @property {string} [_=chatPhotoEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatPhoto}
 * @typedef {Object} chatPhoto
 * @property {string} [_=chatPhoto]
 * @property {FileLocation} photo_small
 * @property {FileLocation} photo_big
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEmpty}
 * @typedef {Object} messageEmpty
 * @property {string} [_=messageEmpty]
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/message}
 * @typedef {Object} message
 * @property {string} [_=message]
 * @property {number} flags
 * @property {?true} out
 * @property {?true} mentioned
 * @property {?true} media_unread
 * @property {?true} silent
 * @property {?true} post
 * @property {?true} from_scheduled
 * @property {int} id
 * @property {?int} from_id
 * @property {Peer} to_id
 * @property {?MessageFwdHeader} fwd_from
 * @property {?int} via_bot_id
 * @property {?int} reply_to_msg_id
 * @property {int} date
 * @property {string} message
 * @property {?MessageMedia} media
 * @property {?ReplyMarkup} reply_markup
 * @property {?Array.<MessageEntity>} entities
 * @property {?int} views
 * @property {?int} edit_date
 * @property {?string} post_author
 * @property {?long} grouped_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageService}
 * @typedef {Object} messageService
 * @property {string} [_=messageService]
 * @property {number} flags
 * @property {?true} out
 * @property {?true} mentioned
 * @property {?true} media_unread
 * @property {?true} silent
 * @property {?true} post
 * @property {int} id
 * @property {?int} from_id
 * @property {Peer} to_id
 * @property {?int} reply_to_msg_id
 * @property {int} date
 * @property {MessageAction} action
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaEmpty}
 * @typedef {Object} messageMediaEmpty
 * @property {string} [_=messageMediaEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaPhoto}
 * @typedef {Object} messageMediaPhoto
 * @property {string} [_=messageMediaPhoto]
 * @property {number} flags
 * @property {?Photo} photo
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaGeo}
 * @typedef {Object} messageMediaGeo
 * @property {string} [_=messageMediaGeo]
 * @property {GeoPoint} geo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaContact}
 * @typedef {Object} messageMediaContact
 * @property {string} [_=messageMediaContact]
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaUnsupported}
 * @typedef {Object} messageMediaUnsupported
 * @property {string} [_=messageMediaUnsupported]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaDocument}
 * @typedef {Object} messageMediaDocument
 * @property {string} [_=messageMediaDocument]
 * @property {number} flags
 * @property {?Document} document
 * @property {?int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaWebPage}
 * @typedef {Object} messageMediaWebPage
 * @property {string} [_=messageMediaWebPage]
 * @property {WebPage} webpage
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaVenue}
 * @typedef {Object} messageMediaVenue
 * @property {string} [_=messageMediaVenue]
 * @property {GeoPoint} geo
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaGame}
 * @typedef {Object} messageMediaGame
 * @property {string} [_=messageMediaGame]
 * @property {Game} game
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaInvoice}
 * @typedef {Object} messageMediaInvoice
 * @property {string} [_=messageMediaInvoice]
 * @property {number} flags
 * @property {?true} shipping_address_requested
 * @property {?true} test
 * @property {string} title
 * @property {string} description
 * @property {?WebDocument} photo
 * @property {?int} receipt_msg_id
 * @property {string} currency
 * @property {long} total_amount
 * @property {string} start_param
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaGeoLive}
 * @typedef {Object} messageMediaGeoLive
 * @property {string} [_=messageMediaGeoLive]
 * @property {GeoPoint} geo
 * @property {int} period
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionEmpty}
 * @typedef {Object} messageActionEmpty
 * @property {string} [_=messageActionEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatCreate}
 * @typedef {Object} messageActionChatCreate
 * @property {string} [_=messageActionChatCreate]
 * @property {string} title
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatEditTitle}
 * @typedef {Object} messageActionChatEditTitle
 * @property {string} [_=messageActionChatEditTitle]
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatEditPhoto}
 * @typedef {Object} messageActionChatEditPhoto
 * @property {string} [_=messageActionChatEditPhoto]
 * @property {Photo} photo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatDeletePhoto}
 * @typedef {Object} messageActionChatDeletePhoto
 * @property {string} [_=messageActionChatDeletePhoto]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatAddUser}
 * @typedef {Object} messageActionChatAddUser
 * @property {string} [_=messageActionChatAddUser]
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatDeleteUser}
 * @typedef {Object} messageActionChatDeleteUser
 * @property {string} [_=messageActionChatDeleteUser]
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatJoinedByLink}
 * @typedef {Object} messageActionChatJoinedByLink
 * @property {string} [_=messageActionChatJoinedByLink]
 * @property {int} inviter_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChannelCreate}
 * @typedef {Object} messageActionChannelCreate
 * @property {string} [_=messageActionChannelCreate]
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatMigrateTo}
 * @typedef {Object} messageActionChatMigrateTo
 * @property {string} [_=messageActionChatMigrateTo]
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChannelMigrateFrom}
 * @typedef {Object} messageActionChannelMigrateFrom
 * @property {string} [_=messageActionChannelMigrateFrom]
 * @property {string} title
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPinMessage}
 * @typedef {Object} messageActionPinMessage
 * @property {string} [_=messageActionPinMessage]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionHistoryClear}
 * @typedef {Object} messageActionHistoryClear
 * @property {string} [_=messageActionHistoryClear]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionGameScore}
 * @typedef {Object} messageActionGameScore
 * @property {string} [_=messageActionGameScore]
 * @property {long} game_id
 * @property {int} score
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPaymentSentMe}
 * @typedef {Object} messageActionPaymentSentMe
 * @property {string} [_=messageActionPaymentSentMe]
 * @property {number} flags
 * @property {string} currency
 * @property {long} total_amount
 * @property {bytes} payload
 * @property {?PaymentRequestedInfo} info
 * @property {?string} shipping_option_id
 * @property {PaymentCharge} charge
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPaymentSent}
 * @typedef {Object} messageActionPaymentSent
 * @property {string} [_=messageActionPaymentSent]
 * @property {string} currency
 * @property {long} total_amount
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPhoneCall}
 * @typedef {Object} messageActionPhoneCall
 * @property {string} [_=messageActionPhoneCall]
 * @property {number} flags
 * @property {long} call_id
 * @property {?PhoneCallDiscardReason} reason
 * @property {?int} duration
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionScreenshotTaken}
 * @typedef {Object} messageActionScreenshotTaken
 * @property {string} [_=messageActionScreenshotTaken]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionCustomAction}
 * @typedef {Object} messageActionCustomAction
 * @property {string} [_=messageActionCustomAction]
 * @property {string} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionBotAllowed}
 * @typedef {Object} messageActionBotAllowed
 * @property {string} [_=messageActionBotAllowed]
 * @property {string} domain
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionSecureValuesSentMe}
 * @typedef {Object} messageActionSecureValuesSentMe
 * @property {string} [_=messageActionSecureValuesSentMe]
 * @property {Array.<SecureValue>} values
 * @property {SecureCredentialsEncrypted} credentials
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionSecureValuesSent}
 * @typedef {Object} messageActionSecureValuesSent
 * @property {string} [_=messageActionSecureValuesSent]
 * @property {Array.<SecureValueType>} types
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dialog}
 * @typedef {Object} dialog
 * @property {string} [_=dialog]
 * @property {number} flags
 * @property {?true} pinned
 * @property {?true} unread_mark
 * @property {Peer} peer
 * @property {int} top_message
 * @property {int} read_inbox_max_id
 * @property {int} read_outbox_max_id
 * @property {int} unread_count
 * @property {int} unread_mentions_count
 * @property {PeerNotifySettings} notify_settings
 * @property {?int} pts
 * @property {?DraftMessage} draft
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photoEmpty}
 * @typedef {Object} photoEmpty
 * @property {string} [_=photoEmpty]
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photo}
 * @typedef {Object} photo
 * @property {string} [_=photo]
 * @property {number} flags
 * @property {?true} has_stickers
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 * @property {int} date
 * @property {Array.<PhotoSize>} sizes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photoSizeEmpty}
 * @typedef {Object} photoSizeEmpty
 * @property {string} [_=photoSizeEmpty]
 * @property {string} type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photoSize}
 * @typedef {Object} photoSize
 * @property {string} [_=photoSize]
 * @property {string} type
 * @property {FileLocation} location
 * @property {int} w
 * @property {int} h
 * @property {int} size
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photoCachedSize}
 * @typedef {Object} photoCachedSize
 * @property {string} [_=photoCachedSize]
 * @property {string} type
 * @property {FileLocation} location
 * @property {int} w
 * @property {int} h
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/geoPointEmpty}
 * @typedef {Object} geoPointEmpty
 * @property {string} [_=geoPointEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/geoPoint}
 * @typedef {Object} geoPoint
 * @property {string} [_=geoPoint]
 * @property {double} long
 * @property {double} lat
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.checkedPhone}
 * @typedef {Object} auth_checkedPhone
 * @property {string} [_=auth.checkedPhone]
 * @property {Bool} phone_registered
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCode}
 * @typedef {Object} auth_sentCode
 * @property {string} [_=auth.sentCode]
 * @property {number} flags
 * @property {?true} phone_registered
 * @property {auth_SentCodeType} type
 * @property {string} phone_code_hash
 * @property {?auth_CodeType} next_type
 * @property {?int} timeout
 * @property {?help_TermsOfService} terms_of_service
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.authorization}
 * @typedef {Object} auth_authorization
 * @property {string} [_=auth.authorization]
 * @property {number} flags
 * @property {?int} tmp_sessions
 * @property {User} user
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.exportedAuthorization}
 * @typedef {Object} auth_exportedAuthorization
 * @property {string} [_=auth.exportedAuthorization]
 * @property {int} id
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyPeer}
 * @typedef {Object} inputNotifyPeer
 * @property {string} [_=inputNotifyPeer]
 * @property {InputPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyUsers}
 * @typedef {Object} inputNotifyUsers
 * @property {string} [_=inputNotifyUsers]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyChats}
 * @typedef {Object} inputNotifyChats
 * @property {string} [_=inputNotifyChats]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyBroadcasts}
 * @typedef {Object} inputNotifyBroadcasts
 * @property {string} [_=inputNotifyBroadcasts]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerNotifySettings}
 * @typedef {Object} inputPeerNotifySettings
 * @property {string} [_=inputPeerNotifySettings]
 * @property {number} flags
 * @property {?Bool} show_previews
 * @property {?Bool} silent
 * @property {?int} mute_until
 * @property {?string} sound
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerNotifySettings}
 * @typedef {Object} peerNotifySettings
 * @property {string} [_=peerNotifySettings]
 * @property {number} flags
 * @property {?Bool} show_previews
 * @property {?Bool} silent
 * @property {?int} mute_until
 * @property {?string} sound
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerSettings}
 * @typedef {Object} peerSettings
 * @property {string} [_=peerSettings]
 * @property {number} flags
 * @property {?true} report_spam
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/wallPaper}
 * @typedef {Object} wallPaper
 * @property {string} [_=wallPaper]
 * @property {int} id
 * @property {string} title
 * @property {Array.<PhotoSize>} sizes
 * @property {int} color
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/wallPaperSolid}
 * @typedef {Object} wallPaperSolid
 * @property {string} [_=wallPaperSolid]
 * @property {int} id
 * @property {string} title
 * @property {int} bg_color
 * @property {int} color
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonSpam}
 * @typedef {Object} inputReportReasonSpam
 * @property {string} [_=inputReportReasonSpam]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonViolence}
 * @typedef {Object} inputReportReasonViolence
 * @property {string} [_=inputReportReasonViolence]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonPornography}
 * @typedef {Object} inputReportReasonPornography
 * @property {string} [_=inputReportReasonPornography]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonOther}
 * @typedef {Object} inputReportReasonOther
 * @property {string} [_=inputReportReasonOther]
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonCopyright}
 * @typedef {Object} inputReportReasonCopyright
 * @property {string} [_=inputReportReasonCopyright]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userFull}
 * @typedef {Object} userFull
 * @property {string} [_=userFull]
 * @property {number} flags
 * @property {?true} blocked
 * @property {?true} phone_calls_available
 * @property {?true} phone_calls_private
 * @property {?true} can_pin_message
 * @property {User} user
 * @property {?string} about
 * @property {contacts_Link} link
 * @property {?Photo} profile_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {?BotInfo} bot_info
 * @property {?int} pinned_msg_id
 * @property {int} common_chats_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contact}
 * @typedef {Object} contact
 * @property {string} [_=contact]
 * @property {int} user_id
 * @property {Bool} mutual
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/importedContact}
 * @typedef {Object} importedContact
 * @property {string} [_=importedContact]
 * @property {int} user_id
 * @property {long} client_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactBlocked}
 * @typedef {Object} contactBlocked
 * @property {string} [_=contactBlocked]
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactStatus}
 * @typedef {Object} contactStatus
 * @property {string} [_=contactStatus]
 * @property {int} user_id
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.link}
 * @typedef {Object} contacts_link
 * @property {string} [_=contacts.link]
 * @property {ContactLink} my_link
 * @property {ContactLink} foreign_link
 * @property {User} user
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.contactsNotModified}
 * @typedef {Object} contacts_contactsNotModified
 * @property {string} [_=contacts.contactsNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.contacts}
 * @typedef {Object} contacts_contacts
 * @property {string} [_=contacts.contacts]
 * @property {Array.<Contact>} contacts
 * @property {int} saved_count
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.importedContacts}
 * @typedef {Object} contacts_importedContacts
 * @property {string} [_=contacts.importedContacts]
 * @property {Array.<ImportedContact>} imported
 * @property {Array.<PopularContact>} popular_invites
 * @property {Array.<long>} retry_contacts
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.blocked}
 * @typedef {Object} contacts_blocked
 * @property {string} [_=contacts.blocked]
 * @property {Array.<ContactBlocked>} blocked
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.blockedSlice}
 * @typedef {Object} contacts_blockedSlice
 * @property {string} [_=contacts.blockedSlice]
 * @property {int} count
 * @property {Array.<ContactBlocked>} blocked
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogs}
 * @typedef {Object} messages_dialogs
 * @property {string} [_=messages.dialogs]
 * @property {Array.<Dialog>} dialogs
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogsSlice}
 * @typedef {Object} messages_dialogsSlice
 * @property {string} [_=messages.dialogsSlice]
 * @property {int} count
 * @property {Array.<Dialog>} dialogs
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogsNotModified}
 * @typedef {Object} messages_dialogsNotModified
 * @property {string} [_=messages.dialogsNotModified]
 * @property {int} count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messages}
 * @typedef {Object} messages_messages
 * @property {string} [_=messages.messages]
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messagesSlice}
 * @typedef {Object} messages_messagesSlice
 * @property {string} [_=messages.messagesSlice]
 * @property {int} count
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.channelMessages}
 * @typedef {Object} messages_channelMessages
 * @property {string} [_=messages.channelMessages]
 * @property {number} flags
 * @property {int} pts
 * @property {int} count
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messagesNotModified}
 * @typedef {Object} messages_messagesNotModified
 * @property {string} [_=messages.messagesNotModified]
 * @property {int} count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chats}
 * @typedef {Object} messages_chats
 * @property {string} [_=messages.chats]
 * @property {Array.<Chat>} chats
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chatsSlice}
 * @typedef {Object} messages_chatsSlice
 * @property {string} [_=messages.chatsSlice]
 * @property {int} count
 * @property {Array.<Chat>} chats
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chatFull}
 * @typedef {Object} messages_chatFull
 * @property {string} [_=messages.chatFull]
 * @property {ChatFull} full_chat
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.affectedHistory}
 * @typedef {Object} messages_affectedHistory
 * @property {string} [_=messages.affectedHistory]
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} offset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterEmpty}
 * @typedef {Object} inputMessagesFilterEmpty
 * @property {string} [_=inputMessagesFilterEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterPhotos}
 * @typedef {Object} inputMessagesFilterPhotos
 * @property {string} [_=inputMessagesFilterPhotos]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterVideo}
 * @typedef {Object} inputMessagesFilterVideo
 * @property {string} [_=inputMessagesFilterVideo]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterPhotoVideo}
 * @typedef {Object} inputMessagesFilterPhotoVideo
 * @property {string} [_=inputMessagesFilterPhotoVideo]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterDocument}
 * @typedef {Object} inputMessagesFilterDocument
 * @property {string} [_=inputMessagesFilterDocument]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterUrl}
 * @typedef {Object} inputMessagesFilterUrl
 * @property {string} [_=inputMessagesFilterUrl]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterGif}
 * @typedef {Object} inputMessagesFilterGif
 * @property {string} [_=inputMessagesFilterGif]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterVoice}
 * @typedef {Object} inputMessagesFilterVoice
 * @property {string} [_=inputMessagesFilterVoice]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterMusic}
 * @typedef {Object} inputMessagesFilterMusic
 * @property {string} [_=inputMessagesFilterMusic]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterChatPhotos}
 * @typedef {Object} inputMessagesFilterChatPhotos
 * @property {string} [_=inputMessagesFilterChatPhotos]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterPhoneCalls}
 * @typedef {Object} inputMessagesFilterPhoneCalls
 * @property {string} [_=inputMessagesFilterPhoneCalls]
 * @property {number} flags
 * @property {?true} missed
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterRoundVoice}
 * @typedef {Object} inputMessagesFilterRoundVoice
 * @property {string} [_=inputMessagesFilterRoundVoice]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterRoundVideo}
 * @typedef {Object} inputMessagesFilterRoundVideo
 * @property {string} [_=inputMessagesFilterRoundVideo]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterMyMentions}
 * @typedef {Object} inputMessagesFilterMyMentions
 * @property {string} [_=inputMessagesFilterMyMentions]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterGeo}
 * @typedef {Object} inputMessagesFilterGeo
 * @property {string} [_=inputMessagesFilterGeo]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterContacts}
 * @typedef {Object} inputMessagesFilterContacts
 * @property {string} [_=inputMessagesFilterContacts]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewMessage}
 * @typedef {Object} updateNewMessage
 * @property {string} [_=updateNewMessage]
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateMessageID}
 * @typedef {Object} updateMessageID
 * @property {string} [_=updateMessageID]
 * @property {int} id
 * @property {long} random_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDeleteMessages}
 * @typedef {Object} updateDeleteMessages
 * @property {string} [_=updateDeleteMessages]
 * @property {Array.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserTyping}
 * @typedef {Object} updateUserTyping
 * @property {string} [_=updateUserTyping]
 * @property {int} user_id
 * @property {SendMessageAction} action
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatUserTyping}
 * @typedef {Object} updateChatUserTyping
 * @property {string} [_=updateChatUserTyping]
 * @property {int} chat_id
 * @property {int} user_id
 * @property {SendMessageAction} action
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipants}
 * @typedef {Object} updateChatParticipants
 * @property {string} [_=updateChatParticipants]
 * @property {ChatParticipants} participants
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserStatus}
 * @typedef {Object} updateUserStatus
 * @property {string} [_=updateUserStatus]
 * @property {int} user_id
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserName}
 * @typedef {Object} updateUserName
 * @property {string} [_=updateUserName]
 * @property {int} user_id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserPhoto}
 * @typedef {Object} updateUserPhoto
 * @property {string} [_=updateUserPhoto]
 * @property {int} user_id
 * @property {int} date
 * @property {UserProfilePhoto} photo
 * @property {Bool} previous
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateContactRegistered}
 * @typedef {Object} updateContactRegistered
 * @property {string} [_=updateContactRegistered]
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateContactLink}
 * @typedef {Object} updateContactLink
 * @property {string} [_=updateContactLink]
 * @property {int} user_id
 * @property {ContactLink} my_link
 * @property {ContactLink} foreign_link
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewEncryptedMessage}
 * @typedef {Object} updateNewEncryptedMessage
 * @property {string} [_=updateNewEncryptedMessage]
 * @property {EncryptedMessage} message
 * @property {int} qts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEncryptedChatTyping}
 * @typedef {Object} updateEncryptedChatTyping
 * @property {string} [_=updateEncryptedChatTyping]
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEncryption}
 * @typedef {Object} updateEncryption
 * @property {string} [_=updateEncryption]
 * @property {EncryptedChat} chat
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEncryptedMessagesRead}
 * @typedef {Object} updateEncryptedMessagesRead
 * @property {string} [_=updateEncryptedMessagesRead]
 * @property {int} chat_id
 * @property {int} max_date
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipantAdd}
 * @typedef {Object} updateChatParticipantAdd
 * @property {string} [_=updateChatParticipantAdd]
 * @property {int} chat_id
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipantDelete}
 * @typedef {Object} updateChatParticipantDelete
 * @property {string} [_=updateChatParticipantDelete]
 * @property {int} chat_id
 * @property {int} user_id
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDcOptions}
 * @typedef {Object} updateDcOptions
 * @property {string} [_=updateDcOptions]
 * @property {Array.<DcOption>} dc_options
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserBlocked}
 * @typedef {Object} updateUserBlocked
 * @property {string} [_=updateUserBlocked]
 * @property {int} user_id
 * @property {Bool} blocked
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNotifySettings}
 * @typedef {Object} updateNotifySettings
 * @property {string} [_=updateNotifySettings]
 * @property {NotifyPeer} peer
 * @property {PeerNotifySettings} notify_settings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateServiceNotification}
 * @typedef {Object} updateServiceNotification
 * @property {string} [_=updateServiceNotification]
 * @property {number} flags
 * @property {?true} popup
 * @property {?int} inbox_date
 * @property {string} type
 * @property {string} message
 * @property {MessageMedia} media
 * @property {Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatePrivacy}
 * @typedef {Object} updatePrivacy
 * @property {string} [_=updatePrivacy]
 * @property {PrivacyKey} key
 * @property {Array.<PrivacyRule>} rules
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserPhone}
 * @typedef {Object} updateUserPhone
 * @property {string} [_=updateUserPhone]
 * @property {int} user_id
 * @property {string} phone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadHistoryInbox}
 * @typedef {Object} updateReadHistoryInbox
 * @property {string} [_=updateReadHistoryInbox]
 * @property {Peer} peer
 * @property {int} max_id
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadHistoryOutbox}
 * @typedef {Object} updateReadHistoryOutbox
 * @property {string} [_=updateReadHistoryOutbox]
 * @property {Peer} peer
 * @property {int} max_id
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateWebPage}
 * @typedef {Object} updateWebPage
 * @property {string} [_=updateWebPage]
 * @property {WebPage} webpage
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadMessagesContents}
 * @typedef {Object} updateReadMessagesContents
 * @property {string} [_=updateReadMessagesContents]
 * @property {Array.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelTooLong}
 * @typedef {Object} updateChannelTooLong
 * @property {string} [_=updateChannelTooLong]
 * @property {number} flags
 * @property {int} channel_id
 * @property {?int} pts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannel}
 * @typedef {Object} updateChannel
 * @property {string} [_=updateChannel]
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewChannelMessage}
 * @typedef {Object} updateNewChannelMessage
 * @property {string} [_=updateNewChannelMessage]
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadChannelInbox}
 * @typedef {Object} updateReadChannelInbox
 * @property {string} [_=updateReadChannelInbox]
 * @property {int} channel_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDeleteChannelMessages}
 * @typedef {Object} updateDeleteChannelMessages
 * @property {string} [_=updateDeleteChannelMessages]
 * @property {int} channel_id
 * @property {Array.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelMessageViews}
 * @typedef {Object} updateChannelMessageViews
 * @property {string} [_=updateChannelMessageViews]
 * @property {int} channel_id
 * @property {int} id
 * @property {int} views
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatAdmins}
 * @typedef {Object} updateChatAdmins
 * @property {string} [_=updateChatAdmins]
 * @property {int} chat_id
 * @property {Bool} enabled
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipantAdmin}
 * @typedef {Object} updateChatParticipantAdmin
 * @property {string} [_=updateChatParticipantAdmin]
 * @property {int} chat_id
 * @property {int} user_id
 * @property {Bool} is_admin
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewStickerSet}
 * @typedef {Object} updateNewStickerSet
 * @property {string} [_=updateNewStickerSet]
 * @property {messages_StickerSet} stickerset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateStickerSetsOrder}
 * @typedef {Object} updateStickerSetsOrder
 * @property {string} [_=updateStickerSetsOrder]
 * @property {number} flags
 * @property {?true} masks
 * @property {Array.<long>} order
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateStickerSets}
 * @typedef {Object} updateStickerSets
 * @property {string} [_=updateStickerSets]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateSavedGifs}
 * @typedef {Object} updateSavedGifs
 * @property {string} [_=updateSavedGifs]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotInlineQuery}
 * @typedef {Object} updateBotInlineQuery
 * @property {string} [_=updateBotInlineQuery]
 * @property {number} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {string} query
 * @property {?GeoPoint} geo
 * @property {string} offset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotInlineSend}
 * @typedef {Object} updateBotInlineSend
 * @property {string} [_=updateBotInlineSend]
 * @property {number} flags
 * @property {int} user_id
 * @property {string} query
 * @property {?GeoPoint} geo
 * @property {string} id
 * @property {?InputBotInlineMessageID} msg_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEditChannelMessage}
 * @typedef {Object} updateEditChannelMessage
 * @property {string} [_=updateEditChannelMessage]
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelPinnedMessage}
 * @typedef {Object} updateChannelPinnedMessage
 * @property {string} [_=updateChannelPinnedMessage]
 * @property {int} channel_id
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotCallbackQuery}
 * @typedef {Object} updateBotCallbackQuery
 * @property {string} [_=updateBotCallbackQuery]
 * @property {number} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {Peer} peer
 * @property {int} msg_id
 * @property {long} chat_instance
 * @property {?bytes} data
 * @property {?string} game_short_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEditMessage}
 * @typedef {Object} updateEditMessage
 * @property {string} [_=updateEditMessage]
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateInlineBotCallbackQuery}
 * @typedef {Object} updateInlineBotCallbackQuery
 * @property {string} [_=updateInlineBotCallbackQuery]
 * @property {number} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {InputBotInlineMessageID} msg_id
 * @property {long} chat_instance
 * @property {?bytes} data
 * @property {?string} game_short_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadChannelOutbox}
 * @typedef {Object} updateReadChannelOutbox
 * @property {string} [_=updateReadChannelOutbox]
 * @property {int} channel_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDraftMessage}
 * @typedef {Object} updateDraftMessage
 * @property {string} [_=updateDraftMessage]
 * @property {Peer} peer
 * @property {DraftMessage} draft
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadFeaturedStickers}
 * @typedef {Object} updateReadFeaturedStickers
 * @property {string} [_=updateReadFeaturedStickers]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateRecentStickers}
 * @typedef {Object} updateRecentStickers
 * @property {string} [_=updateRecentStickers]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateConfig}
 * @typedef {Object} updateConfig
 * @property {string} [_=updateConfig]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatePtsChanged}
 * @typedef {Object} updatePtsChanged
 * @property {string} [_=updatePtsChanged]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelWebPage}
 * @typedef {Object} updateChannelWebPage
 * @property {string} [_=updateChannelWebPage]
 * @property {int} channel_id
 * @property {WebPage} webpage
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDialogPinned}
 * @typedef {Object} updateDialogPinned
 * @property {string} [_=updateDialogPinned]
 * @property {number} flags
 * @property {?true} pinned
 * @property {DialogPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatePinnedDialogs}
 * @typedef {Object} updatePinnedDialogs
 * @property {string} [_=updatePinnedDialogs]
 * @property {number} flags
 * @property {?Array.<DialogPeer>} order
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotWebhookJSON}
 * @typedef {Object} updateBotWebhookJSON
 * @property {string} [_=updateBotWebhookJSON]
 * @property {DataJSON} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotWebhookJSONQuery}
 * @typedef {Object} updateBotWebhookJSONQuery
 * @property {string} [_=updateBotWebhookJSONQuery]
 * @property {long} query_id
 * @property {DataJSON} data
 * @property {int} timeout
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotShippingQuery}
 * @typedef {Object} updateBotShippingQuery
 * @property {string} [_=updateBotShippingQuery]
 * @property {long} query_id
 * @property {int} user_id
 * @property {bytes} payload
 * @property {PostAddress} shipping_address
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotPrecheckoutQuery}
 * @typedef {Object} updateBotPrecheckoutQuery
 * @property {string} [_=updateBotPrecheckoutQuery]
 * @property {number} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {bytes} payload
 * @property {?PaymentRequestedInfo} info
 * @property {?string} shipping_option_id
 * @property {string} currency
 * @property {long} total_amount
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatePhoneCall}
 * @typedef {Object} updatePhoneCall
 * @property {string} [_=updatePhoneCall]
 * @property {PhoneCall} phone_call
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateLangPackTooLong}
 * @typedef {Object} updateLangPackTooLong
 * @property {string} [_=updateLangPackTooLong]
 * @property {string} lang_code
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateLangPack}
 * @typedef {Object} updateLangPack
 * @property {string} [_=updateLangPack]
 * @property {LangPackDifference} difference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateFavedStickers}
 * @typedef {Object} updateFavedStickers
 * @property {string} [_=updateFavedStickers]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelReadMessagesContents}
 * @typedef {Object} updateChannelReadMessagesContents
 * @property {string} [_=updateChannelReadMessagesContents]
 * @property {int} channel_id
 * @property {Array.<int>} messages
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateContactsReset}
 * @typedef {Object} updateContactsReset
 * @property {string} [_=updateContactsReset]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelAvailableMessages}
 * @typedef {Object} updateChannelAvailableMessages
 * @property {string} [_=updateChannelAvailableMessages]
 * @property {int} channel_id
 * @property {int} available_min_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDialogUnreadMark}
 * @typedef {Object} updateDialogUnreadMark
 * @property {string} [_=updateDialogUnreadMark]
 * @property {number} flags
 * @property {?true} unread
 * @property {DialogPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserPinnedMessage}
 * @typedef {Object} updateUserPinnedMessage
 * @property {string} [_=updateUserPinnedMessage]
 * @property {int} user_id
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatPinnedMessage}
 * @typedef {Object} updateChatPinnedMessage
 * @property {string} [_=updateChatPinnedMessage]
 * @property {int} chat_id
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.state}
 * @typedef {Object} updates_state
 * @property {string} [_=updates.state]
 * @property {int} pts
 * @property {int} qts
 * @property {int} date
 * @property {int} seq
 * @property {int} unread_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.differenceEmpty}
 * @typedef {Object} updates_differenceEmpty
 * @property {string} [_=updates.differenceEmpty]
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.difference}
 * @typedef {Object} updates_difference
 * @property {string} [_=updates.difference]
 * @property {Array.<Message>} new_messages
 * @property {Array.<EncryptedMessage>} new_encrypted_messages
 * @property {Array.<Update>} other_updates
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 * @property {updates_State} state
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.differenceSlice}
 * @typedef {Object} updates_differenceSlice
 * @property {string} [_=updates.differenceSlice]
 * @property {Array.<Message>} new_messages
 * @property {Array.<EncryptedMessage>} new_encrypted_messages
 * @property {Array.<Update>} other_updates
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 * @property {updates_State} intermediate_state
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.differenceTooLong}
 * @typedef {Object} updates_differenceTooLong
 * @property {string} [_=updates.differenceTooLong]
 * @property {int} pts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatesTooLong}
 * @typedef {Object} updatesTooLong
 * @property {string} [_=updatesTooLong]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShortMessage}
 * @typedef {Object} updateShortMessage
 * @property {string} [_=updateShortMessage]
 * @property {number} flags
 * @property {?true} out
 * @property {?true} mentioned
 * @property {?true} media_unread
 * @property {?true} silent
 * @property {int} id
 * @property {int} user_id
 * @property {string} message
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} date
 * @property {?MessageFwdHeader} fwd_from
 * @property {?int} via_bot_id
 * @property {?int} reply_to_msg_id
 * @property {?Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShortChatMessage}
 * @typedef {Object} updateShortChatMessage
 * @property {string} [_=updateShortChatMessage]
 * @property {number} flags
 * @property {?true} out
 * @property {?true} mentioned
 * @property {?true} media_unread
 * @property {?true} silent
 * @property {int} id
 * @property {int} from_id
 * @property {int} chat_id
 * @property {string} message
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} date
 * @property {?MessageFwdHeader} fwd_from
 * @property {?int} via_bot_id
 * @property {?int} reply_to_msg_id
 * @property {?Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShort}
 * @typedef {Object} updateShort
 * @property {string} [_=updateShort]
 * @property {Update} update
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatesCombined}
 * @typedef {Object} updatesCombined
 * @property {string} [_=updatesCombined]
 * @property {Array.<Update>} updates
 * @property {Array.<User>} users
 * @property {Array.<Chat>} chats
 * @property {int} date
 * @property {int} seq_start
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates}
 * @typedef {Object} updates
 * @property {string} [_=updates]
 * @property {Array.<Update>} updates
 * @property {Array.<User>} users
 * @property {Array.<Chat>} chats
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShortSentMessage}
 * @typedef {Object} updateShortSentMessage
 * @property {string} [_=updateShortSentMessage]
 * @property {number} flags
 * @property {?true} out
 * @property {int} id
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} date
 * @property {?MessageMedia} media
 * @property {?Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photos}
 * @typedef {Object} photos_photos
 * @property {string} [_=photos.photos]
 * @property {Array.<Photo>} photos
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photosSlice}
 * @typedef {Object} photos_photosSlice
 * @property {string} [_=photos.photosSlice]
 * @property {int} count
 * @property {Array.<Photo>} photos
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photo}
 * @typedef {Object} photos_photo
 * @property {string} [_=photos.photo]
 * @property {Photo} photo
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.file}
 * @typedef {Object} upload_file
 * @property {string} [_=upload.file]
 * @property {storage_FileType} type
 * @property {int} mtime
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.fileCdnRedirect}
 * @typedef {Object} upload_fileCdnRedirect
 * @property {string} [_=upload.fileCdnRedirect]
 * @property {int} dc_id
 * @property {bytes} file_token
 * @property {bytes} encryption_key
 * @property {bytes} encryption_iv
 * @property {Array.<FileHash>} file_hashes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dcOption}
 * @typedef {Object} dcOption
 * @property {string} [_=dcOption]
 * @property {number} flags
 * @property {?true} ipv6
 * @property {?true} media_only
 * @property {?true} tcpo_only
 * @property {?true} cdn
 * @property {?true} static
 * @property {int} id
 * @property {string} ip_address
 * @property {int} port
 * @property {?bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/config}
 * @typedef {Object} config
 * @property {string} [_=config]
 * @property {number} flags
 * @property {?true} phonecalls_enabled
 * @property {?true} default_p2p_contacts
 * @property {?true} preload_featured_stickers
 * @property {?true} ignore_phone_entities
 * @property {?true} revoke_pm_inbox
 * @property {?true} blocked_mode
 * @property {int} date
 * @property {int} expires
 * @property {Bool} test_mode
 * @property {int} this_dc
 * @property {Array.<DcOption>} dc_options
 * @property {string} dc_txt_domain_name
 * @property {int} chat_size_max
 * @property {int} megagroup_size_max
 * @property {int} forwarded_count_max
 * @property {int} online_update_period_ms
 * @property {int} offline_blur_timeout_ms
 * @property {int} offline_idle_timeout_ms
 * @property {int} online_cloud_timeout_ms
 * @property {int} notify_cloud_delay_ms
 * @property {int} notify_default_delay_ms
 * @property {int} push_chat_period_ms
 * @property {int} push_chat_limit
 * @property {int} saved_gifs_limit
 * @property {int} edit_time_limit
 * @property {int} revoke_time_limit
 * @property {int} revoke_pm_time_limit
 * @property {int} rating_e_decay
 * @property {int} stickers_recent_limit
 * @property {int} stickers_faved_limit
 * @property {int} channels_read_media_period
 * @property {?int} tmp_sessions
 * @property {int} pinned_dialogs_count_max
 * @property {int} call_receive_timeout_ms
 * @property {int} call_ring_timeout_ms
 * @property {int} call_connect_timeout_ms
 * @property {int} call_packet_timeout_ms
 * @property {string} me_url_prefix
 * @property {?string} autoupdate_url_prefix
 * @property {?string} gif_search_username
 * @property {?string} venue_search_username
 * @property {?string} img_search_username
 * @property {?string} static_maps_provider
 * @property {int} caption_length_max
 * @property {int} message_length_max
 * @property {int} webfile_dc_id
 * @property {?string} suggested_lang_code
 * @property {?int} lang_pack_version
 * @property {?int} base_lang_pack_version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/nearestDc}
 * @typedef {Object} nearestDc
 * @property {string} [_=nearestDc]
 * @property {string} country
 * @property {int} this_dc
 * @property {int} nearest_dc
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.appUpdate}
 * @typedef {Object} help_appUpdate
 * @property {string} [_=help.appUpdate]
 * @property {number} flags
 * @property {?true} popup
 * @property {int} id
 * @property {string} version
 * @property {string} text
 * @property {Array.<MessageEntity>} entities
 * @property {?Document} document
 * @property {?string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.noAppUpdate}
 * @typedef {Object} help_noAppUpdate
 * @property {string} [_=help.noAppUpdate]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.inviteText}
 * @typedef {Object} help_inviteText
 * @property {string} [_=help.inviteText]
 * @property {string} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChatEmpty}
 * @typedef {Object} encryptedChatEmpty
 * @property {string} [_=encryptedChatEmpty]
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChatWaiting}
 * @typedef {Object} encryptedChatWaiting
 * @property {string} [_=encryptedChatWaiting]
 * @property {int} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChatRequested}
 * @typedef {Object} encryptedChatRequested
 * @property {string} [_=encryptedChatRequested]
 * @property {int} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {bytes} g_a
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChat}
 * @typedef {Object} encryptedChat
 * @property {string} [_=encryptedChat]
 * @property {int} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {bytes} g_a_or_b
 * @property {long} key_fingerprint
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChatDiscarded}
 * @typedef {Object} encryptedChatDiscarded
 * @property {string} [_=encryptedChatDiscarded]
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedChat}
 * @typedef {Object} inputEncryptedChat
 * @property {string} [_=inputEncryptedChat]
 * @property {int} chat_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedFileEmpty}
 * @typedef {Object} encryptedFileEmpty
 * @property {string} [_=encryptedFileEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedFile}
 * @typedef {Object} encryptedFile
 * @property {string} [_=encryptedFile]
 * @property {long} id
 * @property {long} access_hash
 * @property {int} size
 * @property {int} dc_id
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileEmpty}
 * @typedef {Object} inputEncryptedFileEmpty
 * @property {string} [_=inputEncryptedFileEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileUploaded}
 * @typedef {Object} inputEncryptedFileUploaded
 * @property {string} [_=inputEncryptedFileUploaded]
 * @property {long} id
 * @property {int} parts
 * @property {string} md5_checksum
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFile}
 * @typedef {Object} inputEncryptedFile
 * @property {string} [_=inputEncryptedFile]
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileBigUploaded}
 * @typedef {Object} inputEncryptedFileBigUploaded
 * @property {string} [_=inputEncryptedFileBigUploaded]
 * @property {long} id
 * @property {int} parts
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedMessage}
 * @typedef {Object} encryptedMessage
 * @property {string} [_=encryptedMessage]
 * @property {long} random_id
 * @property {int} chat_id
 * @property {int} date
 * @property {bytes} bytes
 * @property {EncryptedFile} file
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedMessageService}
 * @typedef {Object} encryptedMessageService
 * @property {string} [_=encryptedMessageService]
 * @property {long} random_id
 * @property {int} chat_id
 * @property {int} date
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dhConfigNotModified}
 * @typedef {Object} messages_dhConfigNotModified
 * @property {string} [_=messages.dhConfigNotModified]
 * @property {bytes} random
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dhConfig}
 * @typedef {Object} messages_dhConfig
 * @property {string} [_=messages.dhConfig]
 * @property {int} g
 * @property {bytes} p
 * @property {int} version
 * @property {bytes} random
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.sentEncryptedMessage}
 * @typedef {Object} messages_sentEncryptedMessage
 * @property {string} [_=messages.sentEncryptedMessage]
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.sentEncryptedFile}
 * @typedef {Object} messages_sentEncryptedFile
 * @property {string} [_=messages.sentEncryptedFile]
 * @property {int} date
 * @property {EncryptedFile} file
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDocumentEmpty}
 * @typedef {Object} inputDocumentEmpty
 * @property {string} [_=inputDocumentEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDocument}
 * @typedef {Object} inputDocument
 * @property {string} [_=inputDocument]
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentEmpty}
 * @typedef {Object} documentEmpty
 * @property {string} [_=documentEmpty]
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/document}
 * @typedef {Object} document
 * @property {string} [_=document]
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 * @property {int} date
 * @property {string} mime_type
 * @property {int} size
 * @property {PhotoSize} thumb
 * @property {int} dc_id
 * @property {Array.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.support}
 * @typedef {Object} help_support
 * @property {string} [_=help.support]
 * @property {string} phone_number
 * @property {User} user
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyPeer}
 * @typedef {Object} notifyPeer
 * @property {string} [_=notifyPeer]
 * @property {Peer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyUsers}
 * @typedef {Object} notifyUsers
 * @property {string} [_=notifyUsers]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyChats}
 * @typedef {Object} notifyChats
 * @property {string} [_=notifyChats]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyBroadcasts}
 * @typedef {Object} notifyBroadcasts
 * @property {string} [_=notifyBroadcasts]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageTypingAction}
 * @typedef {Object} sendMessageTypingAction
 * @property {string} [_=sendMessageTypingAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageCancelAction}
 * @typedef {Object} sendMessageCancelAction
 * @property {string} [_=sendMessageCancelAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageRecordVideoAction}
 * @typedef {Object} sendMessageRecordVideoAction
 * @property {string} [_=sendMessageRecordVideoAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadVideoAction}
 * @typedef {Object} sendMessageUploadVideoAction
 * @property {string} [_=sendMessageUploadVideoAction]
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageRecordAudioAction}
 * @typedef {Object} sendMessageRecordAudioAction
 * @property {string} [_=sendMessageRecordAudioAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadAudioAction}
 * @typedef {Object} sendMessageUploadAudioAction
 * @property {string} [_=sendMessageUploadAudioAction]
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadPhotoAction}
 * @typedef {Object} sendMessageUploadPhotoAction
 * @property {string} [_=sendMessageUploadPhotoAction]
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadDocumentAction}
 * @typedef {Object} sendMessageUploadDocumentAction
 * @property {string} [_=sendMessageUploadDocumentAction]
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageGeoLocationAction}
 * @typedef {Object} sendMessageGeoLocationAction
 * @property {string} [_=sendMessageGeoLocationAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageChooseContactAction}
 * @typedef {Object} sendMessageChooseContactAction
 * @property {string} [_=sendMessageChooseContactAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageGamePlayAction}
 * @typedef {Object} sendMessageGamePlayAction
 * @property {string} [_=sendMessageGamePlayAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageRecordRoundAction}
 * @typedef {Object} sendMessageRecordRoundAction
 * @property {string} [_=sendMessageRecordRoundAction]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadRoundAction}
 * @typedef {Object} sendMessageUploadRoundAction
 * @property {string} [_=sendMessageUploadRoundAction]
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.found}
 * @typedef {Object} contacts_found
 * @property {string} [_=contacts.found]
 * @property {Array.<Peer>} my_results
 * @property {Array.<Peer>} results
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyStatusTimestamp}
 * @typedef {Object} inputPrivacyKeyStatusTimestamp
 * @property {string} [_=inputPrivacyKeyStatusTimestamp]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyChatInvite}
 * @typedef {Object} inputPrivacyKeyChatInvite
 * @property {string} [_=inputPrivacyKeyChatInvite]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyPhoneCall}
 * @typedef {Object} inputPrivacyKeyPhoneCall
 * @property {string} [_=inputPrivacyKeyPhoneCall]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyPhoneP2P}
 * @typedef {Object} inputPrivacyKeyPhoneP2P
 * @property {string} [_=inputPrivacyKeyPhoneP2P]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyStatusTimestamp}
 * @typedef {Object} privacyKeyStatusTimestamp
 * @property {string} [_=privacyKeyStatusTimestamp]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyChatInvite}
 * @typedef {Object} privacyKeyChatInvite
 * @property {string} [_=privacyKeyChatInvite]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyPhoneCall}
 * @typedef {Object} privacyKeyPhoneCall
 * @property {string} [_=privacyKeyPhoneCall]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyPhoneP2P}
 * @typedef {Object} privacyKeyPhoneP2P
 * @property {string} [_=privacyKeyPhoneP2P]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueAllowContacts}
 * @typedef {Object} inputPrivacyValueAllowContacts
 * @property {string} [_=inputPrivacyValueAllowContacts]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueAllowAll}
 * @typedef {Object} inputPrivacyValueAllowAll
 * @property {string} [_=inputPrivacyValueAllowAll]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueAllowUsers}
 * @typedef {Object} inputPrivacyValueAllowUsers
 * @property {string} [_=inputPrivacyValueAllowUsers]
 * @property {Array.<InputUser>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueDisallowContacts}
 * @typedef {Object} inputPrivacyValueDisallowContacts
 * @property {string} [_=inputPrivacyValueDisallowContacts]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueDisallowAll}
 * @typedef {Object} inputPrivacyValueDisallowAll
 * @property {string} [_=inputPrivacyValueDisallowAll]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueDisallowUsers}
 * @typedef {Object} inputPrivacyValueDisallowUsers
 * @property {string} [_=inputPrivacyValueDisallowUsers]
 * @property {Array.<InputUser>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueAllowContacts}
 * @typedef {Object} privacyValueAllowContacts
 * @property {string} [_=privacyValueAllowContacts]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueAllowAll}
 * @typedef {Object} privacyValueAllowAll
 * @property {string} [_=privacyValueAllowAll]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueAllowUsers}
 * @typedef {Object} privacyValueAllowUsers
 * @property {string} [_=privacyValueAllowUsers]
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueDisallowContacts}
 * @typedef {Object} privacyValueDisallowContacts
 * @property {string} [_=privacyValueDisallowContacts]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueDisallowAll}
 * @typedef {Object} privacyValueDisallowAll
 * @property {string} [_=privacyValueDisallowAll]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueDisallowUsers}
 * @typedef {Object} privacyValueDisallowUsers
 * @property {string} [_=privacyValueDisallowUsers]
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.privacyRules}
 * @typedef {Object} account_privacyRules
 * @property {string} [_=account.privacyRules]
 * @property {Array.<PrivacyRule>} rules
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/accountDaysTTL}
 * @typedef {Object} accountDaysTTL
 * @property {string} [_=accountDaysTTL]
 * @property {int} days
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeImageSize}
 * @typedef {Object} documentAttributeImageSize
 * @property {string} [_=documentAttributeImageSize]
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeAnimated}
 * @typedef {Object} documentAttributeAnimated
 * @property {string} [_=documentAttributeAnimated]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeSticker}
 * @typedef {Object} documentAttributeSticker
 * @property {string} [_=documentAttributeSticker]
 * @property {number} flags
 * @property {?true} mask
 * @property {string} alt
 * @property {InputStickerSet} stickerset
 * @property {?MaskCoords} mask_coords
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeVideo}
 * @typedef {Object} documentAttributeVideo
 * @property {string} [_=documentAttributeVideo]
 * @property {number} flags
 * @property {?true} round_message
 * @property {?true} supports_streaming
 * @property {int} duration
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeAudio}
 * @typedef {Object} documentAttributeAudio
 * @property {string} [_=documentAttributeAudio]
 * @property {number} flags
 * @property {?true} voice
 * @property {int} duration
 * @property {?string} title
 * @property {?string} performer
 * @property {?bytes} waveform
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeFilename}
 * @typedef {Object} documentAttributeFilename
 * @property {string} [_=documentAttributeFilename]
 * @property {string} file_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeHasStickers}
 * @typedef {Object} documentAttributeHasStickers
 * @property {string} [_=documentAttributeHasStickers]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickersNotModified}
 * @typedef {Object} messages_stickersNotModified
 * @property {string} [_=messages.stickersNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickers}
 * @typedef {Object} messages_stickers
 * @property {string} [_=messages.stickers]
 * @property {int} hash
 * @property {Array.<Document>} stickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerPack}
 * @typedef {Object} stickerPack
 * @property {string} [_=stickerPack]
 * @property {string} emoticon
 * @property {Array.<long>} documents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.allStickersNotModified}
 * @typedef {Object} messages_allStickersNotModified
 * @property {string} [_=messages.allStickersNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.allStickers}
 * @typedef {Object} messages_allStickers
 * @property {string} [_=messages.allStickers]
 * @property {int} hash
 * @property {Array.<StickerSet>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.affectedMessages}
 * @typedef {Object} messages_affectedMessages
 * @property {string} [_=messages.affectedMessages]
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkUnknown}
 * @typedef {Object} contactLinkUnknown
 * @property {string} [_=contactLinkUnknown]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkNone}
 * @typedef {Object} contactLinkNone
 * @property {string} [_=contactLinkNone]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkHasPhone}
 * @typedef {Object} contactLinkHasPhone
 * @property {string} [_=contactLinkHasPhone]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkContact}
 * @typedef {Object} contactLinkContact
 * @property {string} [_=contactLinkContact]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webPageEmpty}
 * @typedef {Object} webPageEmpty
 * @property {string} [_=webPageEmpty]
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webPagePending}
 * @typedef {Object} webPagePending
 * @property {string} [_=webPagePending]
 * @property {long} id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webPage}
 * @typedef {Object} webPage
 * @property {string} [_=webPage]
 * @property {number} flags
 * @property {long} id
 * @property {string} url
 * @property {string} display_url
 * @property {int} hash
 * @property {?string} type
 * @property {?string} site_name
 * @property {?string} title
 * @property {?string} description
 * @property {?Photo} photo
 * @property {?string} embed_url
 * @property {?string} embed_type
 * @property {?int} embed_width
 * @property {?int} embed_height
 * @property {?int} duration
 * @property {?string} author
 * @property {?Document} document
 * @property {?Page} cached_page
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webPageNotModified}
 * @typedef {Object} webPageNotModified
 * @property {string} [_=webPageNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/authorization}
 * @typedef {Object} authorization
 * @property {string} [_=authorization]
 * @property {number} flags
 * @property {?true} current
 * @property {?true} official_app
 * @property {?true} password_pending
 * @property {long} hash
 * @property {string} device_model
 * @property {string} platform
 * @property {string} system_version
 * @property {int} api_id
 * @property {string} app_name
 * @property {string} app_version
 * @property {int} date_created
 * @property {int} date_active
 * @property {string} ip
 * @property {string} country
 * @property {string} region
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.authorizations}
 * @typedef {Object} account_authorizations
 * @property {string} [_=account.authorizations]
 * @property {Array.<Authorization>} authorizations
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.password}
 * @typedef {Object} account_password
 * @property {string} [_=account.password]
 * @property {number} flags
 * @property {?true} has_recovery
 * @property {?true} has_secure_values
 * @property {?true} has_password
 * @property {?PasswordKdfAlgo} current_algo
 * @property {?bytes} srp_B
 * @property {?long} srp_id
 * @property {?string} hint
 * @property {?string} email_unconfirmed_pattern
 * @property {PasswordKdfAlgo} new_algo
 * @property {SecurePasswordKdfAlgo} new_secure_algo
 * @property {bytes} secure_random
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.passwordSettings}
 * @typedef {Object} account_passwordSettings
 * @property {string} [_=account.passwordSettings]
 * @property {number} flags
 * @property {?string} email
 * @property {?SecureSecretSettings} secure_settings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.passwordInputSettings}
 * @typedef {Object} account_passwordInputSettings
 * @property {string} [_=account.passwordInputSettings]
 * @property {number} flags
 * @property {?PasswordKdfAlgo} new_algo
 * @property {?bytes} new_password_hash
 * @property {?string} hint
 * @property {?string} email
 * @property {?SecureSecretSettings} new_secure_settings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.passwordRecovery}
 * @typedef {Object} auth_passwordRecovery
 * @property {string} [_=auth.passwordRecovery]
 * @property {string} email_pattern
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/receivedNotifyMessage}
 * @typedef {Object} receivedNotifyMessage
 * @property {string} [_=receivedNotifyMessage]
 * @property {int} id
 * @property {int} flags
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInviteEmpty}
 * @typedef {Object} chatInviteEmpty
 * @property {string} [_=chatInviteEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInviteExported}
 * @typedef {Object} chatInviteExported
 * @property {string} [_=chatInviteExported]
 * @property {string} link
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInviteAlready}
 * @typedef {Object} chatInviteAlready
 * @property {string} [_=chatInviteAlready]
 * @property {Chat} chat
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInvite}
 * @typedef {Object} chatInvite
 * @property {string} [_=chatInvite]
 * @property {number} flags
 * @property {?true} channel
 * @property {?true} broadcast
 * @property {?true} public
 * @property {?true} megagroup
 * @property {string} title
 * @property {ChatPhoto} photo
 * @property {int} participants_count
 * @property {?Array.<User>} participants
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetEmpty}
 * @typedef {Object} inputStickerSetEmpty
 * @property {string} [_=inputStickerSetEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetID}
 * @typedef {Object} inputStickerSetID
 * @property {string} [_=inputStickerSetID]
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetShortName}
 * @typedef {Object} inputStickerSetShortName
 * @property {string} [_=inputStickerSetShortName]
 * @property {string} short_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerSet}
 * @typedef {Object} stickerSet
 * @property {string} [_=stickerSet]
 * @property {number} flags
 * @property {?true} archived
 * @property {?true} official
 * @property {?true} masks
 * @property {?int} installed_date
 * @property {long} id
 * @property {long} access_hash
 * @property {string} title
 * @property {string} short_name
 * @property {int} count
 * @property {int} hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickerSet}
 * @typedef {Object} messages_stickerSet
 * @property {string} [_=messages.stickerSet]
 * @property {StickerSet} set
 * @property {Array.<StickerPack>} packs
 * @property {Array.<Document>} documents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botCommand}
 * @typedef {Object} botCommand
 * @property {string} [_=botCommand]
 * @property {string} command
 * @property {string} description
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInfo}
 * @typedef {Object} botInfo
 * @property {string} [_=botInfo]
 * @property {int} user_id
 * @property {string} description
 * @property {Array.<BotCommand>} commands
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButton}
 * @typedef {Object} keyboardButton
 * @property {string} [_=keyboardButton]
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonUrl}
 * @typedef {Object} keyboardButtonUrl
 * @property {string} [_=keyboardButtonUrl]
 * @property {string} text
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonCallback}
 * @typedef {Object} keyboardButtonCallback
 * @property {string} [_=keyboardButtonCallback]
 * @property {string} text
 * @property {bytes} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonRequestPhone}
 * @typedef {Object} keyboardButtonRequestPhone
 * @property {string} [_=keyboardButtonRequestPhone]
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonRequestGeoLocation}
 * @typedef {Object} keyboardButtonRequestGeoLocation
 * @property {string} [_=keyboardButtonRequestGeoLocation]
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonSwitchInline}
 * @typedef {Object} keyboardButtonSwitchInline
 * @property {string} [_=keyboardButtonSwitchInline]
 * @property {number} flags
 * @property {?true} same_peer
 * @property {string} text
 * @property {string} query
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonGame}
 * @typedef {Object} keyboardButtonGame
 * @property {string} [_=keyboardButtonGame]
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonBuy}
 * @typedef {Object} keyboardButtonBuy
 * @property {string} [_=keyboardButtonBuy]
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonRow}
 * @typedef {Object} keyboardButtonRow
 * @property {string} [_=keyboardButtonRow]
 * @property {Array.<KeyboardButton>} buttons
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyKeyboardHide}
 * @typedef {Object} replyKeyboardHide
 * @property {string} [_=replyKeyboardHide]
 * @property {number} flags
 * @property {?true} selective
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyKeyboardForceReply}
 * @typedef {Object} replyKeyboardForceReply
 * @property {string} [_=replyKeyboardForceReply]
 * @property {number} flags
 * @property {?true} single_use
 * @property {?true} selective
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyKeyboardMarkup}
 * @typedef {Object} replyKeyboardMarkup
 * @property {string} [_=replyKeyboardMarkup]
 * @property {number} flags
 * @property {?true} resize
 * @property {?true} single_use
 * @property {?true} selective
 * @property {Array.<KeyboardButtonRow>} rows
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyInlineMarkup}
 * @typedef {Object} replyInlineMarkup
 * @property {string} [_=replyInlineMarkup]
 * @property {Array.<KeyboardButtonRow>} rows
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityUnknown}
 * @typedef {Object} messageEntityUnknown
 * @property {string} [_=messageEntityUnknown]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityMention}
 * @typedef {Object} messageEntityMention
 * @property {string} [_=messageEntityMention]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityHashtag}
 * @typedef {Object} messageEntityHashtag
 * @property {string} [_=messageEntityHashtag]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityBotCommand}
 * @typedef {Object} messageEntityBotCommand
 * @property {string} [_=messageEntityBotCommand]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityUrl}
 * @typedef {Object} messageEntityUrl
 * @property {string} [_=messageEntityUrl]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityEmail}
 * @typedef {Object} messageEntityEmail
 * @property {string} [_=messageEntityEmail]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityBold}
 * @typedef {Object} messageEntityBold
 * @property {string} [_=messageEntityBold]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityItalic}
 * @typedef {Object} messageEntityItalic
 * @property {string} [_=messageEntityItalic]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityCode}
 * @typedef {Object} messageEntityCode
 * @property {string} [_=messageEntityCode]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityPre}
 * @typedef {Object} messageEntityPre
 * @property {string} [_=messageEntityPre]
 * @property {int} offset
 * @property {int} length
 * @property {string} language
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityTextUrl}
 * @typedef {Object} messageEntityTextUrl
 * @property {string} [_=messageEntityTextUrl]
 * @property {int} offset
 * @property {int} length
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityMentionName}
 * @typedef {Object} messageEntityMentionName
 * @property {string} [_=messageEntityMentionName]
 * @property {int} offset
 * @property {int} length
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessageEntityMentionName}
 * @typedef {Object} inputMessageEntityMentionName
 * @property {string} [_=inputMessageEntityMentionName]
 * @property {int} offset
 * @property {int} length
 * @property {InputUser} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityPhone}
 * @typedef {Object} messageEntityPhone
 * @property {string} [_=messageEntityPhone]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityCashtag}
 * @typedef {Object} messageEntityCashtag
 * @property {string} [_=messageEntityCashtag]
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChannelEmpty}
 * @typedef {Object} inputChannelEmpty
 * @property {string} [_=inputChannelEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChannel}
 * @typedef {Object} inputChannel
 * @property {string} [_=inputChannel]
 * @property {int} channel_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.resolvedPeer}
 * @typedef {Object} contacts_resolvedPeer
 * @property {string} [_=contacts.resolvedPeer]
 * @property {Peer} peer
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageRange}
 * @typedef {Object} messageRange
 * @property {string} [_=messageRange]
 * @property {int} min_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.channelDifferenceEmpty}
 * @typedef {Object} updates_channelDifferenceEmpty
 * @property {string} [_=updates.channelDifferenceEmpty]
 * @property {number} flags
 * @property {?true} final
 * @property {int} pts
 * @property {?int} timeout
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.channelDifferenceTooLong}
 * @typedef {Object} updates_channelDifferenceTooLong
 * @property {string} [_=updates.channelDifferenceTooLong]
 * @property {number} flags
 * @property {?true} final
 * @property {int} pts
 * @property {?int} timeout
 * @property {int} top_message
 * @property {int} read_inbox_max_id
 * @property {int} read_outbox_max_id
 * @property {int} unread_count
 * @property {int} unread_mentions_count
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.channelDifference}
 * @typedef {Object} updates_channelDifference
 * @property {string} [_=updates.channelDifference]
 * @property {number} flags
 * @property {?true} final
 * @property {int} pts
 * @property {?int} timeout
 * @property {Array.<Message>} new_messages
 * @property {Array.<Update>} other_updates
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelMessagesFilterEmpty}
 * @typedef {Object} channelMessagesFilterEmpty
 * @property {string} [_=channelMessagesFilterEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelMessagesFilter}
 * @typedef {Object} channelMessagesFilter
 * @property {string} [_=channelMessagesFilter]
 * @property {number} flags
 * @property {?true} exclude_new_messages
 * @property {Array.<MessageRange>} ranges
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipant}
 * @typedef {Object} channelParticipant
 * @property {string} [_=channelParticipant]
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantSelf}
 * @typedef {Object} channelParticipantSelf
 * @property {string} [_=channelParticipantSelf]
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantCreator}
 * @typedef {Object} channelParticipantCreator
 * @property {string} [_=channelParticipantCreator]
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantAdmin}
 * @typedef {Object} channelParticipantAdmin
 * @property {string} [_=channelParticipantAdmin]
 * @property {number} flags
 * @property {?true} can_edit
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} promoted_by
 * @property {int} date
 * @property {ChannelAdminRights} admin_rights
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantBanned}
 * @typedef {Object} channelParticipantBanned
 * @property {string} [_=channelParticipantBanned]
 * @property {number} flags
 * @property {?true} left
 * @property {int} user_id
 * @property {int} kicked_by
 * @property {int} date
 * @property {ChannelBannedRights} banned_rights
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsRecent}
 * @typedef {Object} channelParticipantsRecent
 * @property {string} [_=channelParticipantsRecent]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsAdmins}
 * @typedef {Object} channelParticipantsAdmins
 * @property {string} [_=channelParticipantsAdmins]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsKicked}
 * @typedef {Object} channelParticipantsKicked
 * @property {string} [_=channelParticipantsKicked]
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsBots}
 * @typedef {Object} channelParticipantsBots
 * @property {string} [_=channelParticipantsBots]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsBanned}
 * @typedef {Object} channelParticipantsBanned
 * @property {string} [_=channelParticipantsBanned]
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsSearch}
 * @typedef {Object} channelParticipantsSearch
 * @property {string} [_=channelParticipantsSearch]
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.channelParticipants}
 * @typedef {Object} channels_channelParticipants
 * @property {string} [_=channels.channelParticipants]
 * @property {int} count
 * @property {Array.<ChannelParticipant>} participants
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.channelParticipantsNotModified}
 * @typedef {Object} channels_channelParticipantsNotModified
 * @property {string} [_=channels.channelParticipantsNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.channelParticipant}
 * @typedef {Object} channels_channelParticipant
 * @property {string} [_=channels.channelParticipant]
 * @property {ChannelParticipant} participant
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.termsOfService}
 * @typedef {Object} help_termsOfService
 * @property {string} [_=help.termsOfService]
 * @property {number} flags
 * @property {?true} popup
 * @property {DataJSON} id
 * @property {string} text
 * @property {Array.<MessageEntity>} entities
 * @property {?int} min_age_confirm
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/foundGif}
 * @typedef {Object} foundGif
 * @property {string} [_=foundGif]
 * @property {string} url
 * @property {string} thumb_url
 * @property {string} content_url
 * @property {string} content_type
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/foundGifCached}
 * @typedef {Object} foundGifCached
 * @property {string} [_=foundGifCached]
 * @property {string} url
 * @property {Photo} photo
 * @property {Document} document
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.foundGifs}
 * @typedef {Object} messages_foundGifs
 * @property {string} [_=messages.foundGifs]
 * @property {int} next_offset
 * @property {Array.<FoundGif>} results
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.savedGifsNotModified}
 * @typedef {Object} messages_savedGifsNotModified
 * @property {string} [_=messages.savedGifsNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.savedGifs}
 * @typedef {Object} messages_savedGifs
 * @property {string} [_=messages.savedGifs]
 * @property {int} hash
 * @property {Array.<Document>} gifs
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaAuto}
 * @typedef {Object} inputBotInlineMessageMediaAuto
 * @property {string} [_=inputBotInlineMessageMediaAuto]
 * @property {number} flags
 * @property {string} message
 * @property {?Array.<MessageEntity>} entities
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageText}
 * @typedef {Object} inputBotInlineMessageText
 * @property {string} [_=inputBotInlineMessageText]
 * @property {number} flags
 * @property {?true} no_webpage
 * @property {string} message
 * @property {?Array.<MessageEntity>} entities
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaGeo}
 * @typedef {Object} inputBotInlineMessageMediaGeo
 * @property {string} [_=inputBotInlineMessageMediaGeo]
 * @property {number} flags
 * @property {InputGeoPoint} geo_point
 * @property {int} period
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaVenue}
 * @typedef {Object} inputBotInlineMessageMediaVenue
 * @property {string} [_=inputBotInlineMessageMediaVenue]
 * @property {number} flags
 * @property {InputGeoPoint} geo_point
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaContact}
 * @typedef {Object} inputBotInlineMessageMediaContact
 * @property {string} [_=inputBotInlineMessageMediaContact]
 * @property {number} flags
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageGame}
 * @typedef {Object} inputBotInlineMessageGame
 * @property {string} [_=inputBotInlineMessageGame]
 * @property {number} flags
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResult}
 * @typedef {Object} inputBotInlineResult
 * @property {string} [_=inputBotInlineResult]
 * @property {number} flags
 * @property {string} id
 * @property {string} type
 * @property {?string} title
 * @property {?string} description
 * @property {?string} url
 * @property {?InputWebDocument} thumb
 * @property {?InputWebDocument} content
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResultPhoto}
 * @typedef {Object} inputBotInlineResultPhoto
 * @property {string} [_=inputBotInlineResultPhoto]
 * @property {string} id
 * @property {string} type
 * @property {InputPhoto} photo
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResultDocument}
 * @typedef {Object} inputBotInlineResultDocument
 * @property {string} [_=inputBotInlineResultDocument]
 * @property {number} flags
 * @property {string} id
 * @property {string} type
 * @property {?string} title
 * @property {?string} description
 * @property {InputDocument} document
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResultGame}
 * @typedef {Object} inputBotInlineResultGame
 * @property {string} [_=inputBotInlineResultGame]
 * @property {string} id
 * @property {string} short_name
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaAuto}
 * @typedef {Object} botInlineMessageMediaAuto
 * @property {string} [_=botInlineMessageMediaAuto]
 * @property {number} flags
 * @property {string} message
 * @property {?Array.<MessageEntity>} entities
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageText}
 * @typedef {Object} botInlineMessageText
 * @property {string} [_=botInlineMessageText]
 * @property {number} flags
 * @property {?true} no_webpage
 * @property {string} message
 * @property {?Array.<MessageEntity>} entities
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaGeo}
 * @typedef {Object} botInlineMessageMediaGeo
 * @property {string} [_=botInlineMessageMediaGeo]
 * @property {number} flags
 * @property {GeoPoint} geo
 * @property {int} period
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaVenue}
 * @typedef {Object} botInlineMessageMediaVenue
 * @property {string} [_=botInlineMessageMediaVenue]
 * @property {number} flags
 * @property {GeoPoint} geo
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaContact}
 * @typedef {Object} botInlineMessageMediaContact
 * @property {string} [_=botInlineMessageMediaContact]
 * @property {number} flags
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {?ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineResult}
 * @typedef {Object} botInlineResult
 * @property {string} [_=botInlineResult]
 * @property {number} flags
 * @property {string} id
 * @property {string} type
 * @property {?string} title
 * @property {?string} description
 * @property {?string} url
 * @property {?WebDocument} thumb
 * @property {?WebDocument} content
 * @property {BotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMediaResult}
 * @typedef {Object} botInlineMediaResult
 * @property {string} [_=botInlineMediaResult]
 * @property {number} flags
 * @property {string} id
 * @property {string} type
 * @property {?Photo} photo
 * @property {?Document} document
 * @property {?string} title
 * @property {?string} description
 * @property {BotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.botResults}
 * @typedef {Object} messages_botResults
 * @property {string} [_=messages.botResults]
 * @property {number} flags
 * @property {?true} gallery
 * @property {long} query_id
 * @property {?string} next_offset
 * @property {?InlineBotSwitchPM} switch_pm
 * @property {Array.<BotInlineResult>} results
 * @property {int} cache_time
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/exportedMessageLink}
 * @typedef {Object} exportedMessageLink
 * @property {string} [_=exportedMessageLink]
 * @property {string} link
 * @property {string} html
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageFwdHeader}
 * @typedef {Object} messageFwdHeader
 * @property {string} [_=messageFwdHeader]
 * @property {number} flags
 * @property {?int} from_id
 * @property {int} date
 * @property {?int} channel_id
 * @property {?int} channel_post
 * @property {?string} post_author
 * @property {?Peer} saved_from_peer
 * @property {?int} saved_from_msg_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.codeTypeSms}
 * @typedef {Object} auth_codeTypeSms
 * @property {string} [_=auth.codeTypeSms]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.codeTypeCall}
 * @typedef {Object} auth_codeTypeCall
 * @property {string} [_=auth.codeTypeCall]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.codeTypeFlashCall}
 * @typedef {Object} auth_codeTypeFlashCall
 * @property {string} [_=auth.codeTypeFlashCall]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeApp}
 * @typedef {Object} auth_sentCodeTypeApp
 * @property {string} [_=auth.sentCodeTypeApp]
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeSms}
 * @typedef {Object} auth_sentCodeTypeSms
 * @property {string} [_=auth.sentCodeTypeSms]
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeCall}
 * @typedef {Object} auth_sentCodeTypeCall
 * @property {string} [_=auth.sentCodeTypeCall]
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeFlashCall}
 * @typedef {Object} auth_sentCodeTypeFlashCall
 * @property {string} [_=auth.sentCodeTypeFlashCall]
 * @property {string} pattern
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.botCallbackAnswer}
 * @typedef {Object} messages_botCallbackAnswer
 * @property {string} [_=messages.botCallbackAnswer]
 * @property {number} flags
 * @property {?true} alert
 * @property {?true} has_url
 * @property {?true} native_ui
 * @property {?string} message
 * @property {?string} url
 * @property {int} cache_time
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messageEditData}
 * @typedef {Object} messages_messageEditData
 * @property {string} [_=messages.messageEditData]
 * @property {number} flags
 * @property {?true} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageID}
 * @typedef {Object} inputBotInlineMessageID
 * @property {string} [_=inputBotInlineMessageID]
 * @property {int} dc_id
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inlineBotSwitchPM}
 * @typedef {Object} inlineBotSwitchPM
 * @property {string} [_=inlineBotSwitchPM]
 * @property {string} text
 * @property {string} start_param
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.peerDialogs}
 * @typedef {Object} messages_peerDialogs
 * @property {string} [_=messages.peerDialogs]
 * @property {Array.<Dialog>} dialogs
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 * @property {updates_State} state
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeer}
 * @typedef {Object} topPeer
 * @property {string} [_=topPeer]
 * @property {Peer} peer
 * @property {double} rating
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryBotsPM}
 * @typedef {Object} topPeerCategoryBotsPM
 * @property {string} [_=topPeerCategoryBotsPM]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryBotsInline}
 * @typedef {Object} topPeerCategoryBotsInline
 * @property {string} [_=topPeerCategoryBotsInline]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryCorrespondents}
 * @typedef {Object} topPeerCategoryCorrespondents
 * @property {string} [_=topPeerCategoryCorrespondents]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryGroups}
 * @typedef {Object} topPeerCategoryGroups
 * @property {string} [_=topPeerCategoryGroups]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryChannels}
 * @typedef {Object} topPeerCategoryChannels
 * @property {string} [_=topPeerCategoryChannels]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryPhoneCalls}
 * @typedef {Object} topPeerCategoryPhoneCalls
 * @property {string} [_=topPeerCategoryPhoneCalls]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryPeers}
 * @typedef {Object} topPeerCategoryPeers
 * @property {string} [_=topPeerCategoryPeers]
 * @property {TopPeerCategory} category
 * @property {int} count
 * @property {Array.<TopPeer>} peers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.topPeersNotModified}
 * @typedef {Object} contacts_topPeersNotModified
 * @property {string} [_=contacts.topPeersNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.topPeers}
 * @typedef {Object} contacts_topPeers
 * @property {string} [_=contacts.topPeers]
 * @property {Array.<TopPeerCategoryPeers>} categories
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.topPeersDisabled}
 * @typedef {Object} contacts_topPeersDisabled
 * @property {string} [_=contacts.topPeersDisabled]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/draftMessageEmpty}
 * @typedef {Object} draftMessageEmpty
 * @property {string} [_=draftMessageEmpty]
 * @property {number} flags
 * @property {?int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/draftMessage}
 * @typedef {Object} draftMessage
 * @property {string} [_=draftMessage]
 * @property {number} flags
 * @property {?true} no_webpage
 * @property {?int} reply_to_msg_id
 * @property {string} message
 * @property {?Array.<MessageEntity>} entities
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.featuredStickersNotModified}
 * @typedef {Object} messages_featuredStickersNotModified
 * @property {string} [_=messages.featuredStickersNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.featuredStickers}
 * @typedef {Object} messages_featuredStickers
 * @property {string} [_=messages.featuredStickers]
 * @property {int} hash
 * @property {Array.<StickerSetCovered>} sets
 * @property {Array.<long>} unread
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.recentStickersNotModified}
 * @typedef {Object} messages_recentStickersNotModified
 * @property {string} [_=messages.recentStickersNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.recentStickers}
 * @typedef {Object} messages_recentStickers
 * @property {string} [_=messages.recentStickers]
 * @property {int} hash
 * @property {Array.<StickerPack>} packs
 * @property {Array.<Document>} stickers
 * @property {Array.<int>} dates
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.archivedStickers}
 * @typedef {Object} messages_archivedStickers
 * @property {string} [_=messages.archivedStickers]
 * @property {int} count
 * @property {Array.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickerSetInstallResultSuccess}
 * @typedef {Object} messages_stickerSetInstallResultSuccess
 * @property {string} [_=messages.stickerSetInstallResultSuccess]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickerSetInstallResultArchive}
 * @typedef {Object} messages_stickerSetInstallResultArchive
 * @property {string} [_=messages.stickerSetInstallResultArchive]
 * @property {Array.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerSetCovered}
 * @typedef {Object} stickerSetCovered
 * @property {string} [_=stickerSetCovered]
 * @property {StickerSet} set
 * @property {Document} cover
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerSetMultiCovered}
 * @typedef {Object} stickerSetMultiCovered
 * @property {string} [_=stickerSetMultiCovered]
 * @property {StickerSet} set
 * @property {Array.<Document>} covers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/maskCoords}
 * @typedef {Object} maskCoords
 * @property {string} [_=maskCoords]
 * @property {int} n
 * @property {double} x
 * @property {double} y
 * @property {double} zoom
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickeredMediaPhoto}
 * @typedef {Object} inputStickeredMediaPhoto
 * @property {string} [_=inputStickeredMediaPhoto]
 * @property {InputPhoto} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickeredMediaDocument}
 * @typedef {Object} inputStickeredMediaDocument
 * @property {string} [_=inputStickeredMediaDocument]
 * @property {InputDocument} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/game}
 * @typedef {Object} game
 * @property {string} [_=game]
 * @property {number} flags
 * @property {long} id
 * @property {long} access_hash
 * @property {string} short_name
 * @property {string} title
 * @property {string} description
 * @property {Photo} photo
 * @property {?Document} document
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputGameID}
 * @typedef {Object} inputGameID
 * @property {string} [_=inputGameID]
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputGameShortName}
 * @typedef {Object} inputGameShortName
 * @property {string} [_=inputGameShortName]
 * @property {InputUser} bot_id
 * @property {string} short_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/highScore}
 * @typedef {Object} highScore
 * @property {string} [_=highScore]
 * @property {int} pos
 * @property {int} user_id
 * @property {int} score
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.highScores}
 * @typedef {Object} messages_highScores
 * @property {string} [_=messages.highScores]
 * @property {Array.<HighScore>} scores
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textEmpty}
 * @typedef {Object} textEmpty
 * @property {string} [_=textEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textPlain}
 * @typedef {Object} textPlain
 * @property {string} [_=textPlain]
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textBold}
 * @typedef {Object} textBold
 * @property {string} [_=textBold]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textItalic}
 * @typedef {Object} textItalic
 * @property {string} [_=textItalic]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textUnderline}
 * @typedef {Object} textUnderline
 * @property {string} [_=textUnderline]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textStrike}
 * @typedef {Object} textStrike
 * @property {string} [_=textStrike]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textFixed}
 * @typedef {Object} textFixed
 * @property {string} [_=textFixed]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textUrl}
 * @typedef {Object} textUrl
 * @property {string} [_=textUrl]
 * @property {RichText} text
 * @property {string} url
 * @property {long} webpage_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textEmail}
 * @typedef {Object} textEmail
 * @property {string} [_=textEmail]
 * @property {RichText} text
 * @property {string} email
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textConcat}
 * @typedef {Object} textConcat
 * @property {string} [_=textConcat]
 * @property {Array.<RichText>} texts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textSubscript}
 * @typedef {Object} textSubscript
 * @property {string} [_=textSubscript]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textSuperscript}
 * @typedef {Object} textSuperscript
 * @property {string} [_=textSuperscript]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textMarked}
 * @typedef {Object} textMarked
 * @property {string} [_=textMarked]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textPhone}
 * @typedef {Object} textPhone
 * @property {string} [_=textPhone]
 * @property {RichText} text
 * @property {string} phone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textImage}
 * @typedef {Object} textImage
 * @property {string} [_=textImage]
 * @property {long} document_id
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textAnchor}
 * @typedef {Object} textAnchor
 * @property {string} [_=textAnchor]
 * @property {RichText} text
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockUnsupported}
 * @typedef {Object} pageBlockUnsupported
 * @property {string} [_=pageBlockUnsupported]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockTitle}
 * @typedef {Object} pageBlockTitle
 * @property {string} [_=pageBlockTitle]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockSubtitle}
 * @typedef {Object} pageBlockSubtitle
 * @property {string} [_=pageBlockSubtitle]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockAuthorDate}
 * @typedef {Object} pageBlockAuthorDate
 * @property {string} [_=pageBlockAuthorDate]
 * @property {RichText} author
 * @property {int} published_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockHeader}
 * @typedef {Object} pageBlockHeader
 * @property {string} [_=pageBlockHeader]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockSubheader}
 * @typedef {Object} pageBlockSubheader
 * @property {string} [_=pageBlockSubheader]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockParagraph}
 * @typedef {Object} pageBlockParagraph
 * @property {string} [_=pageBlockParagraph]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockPreformatted}
 * @typedef {Object} pageBlockPreformatted
 * @property {string} [_=pageBlockPreformatted]
 * @property {RichText} text
 * @property {string} language
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockFooter}
 * @typedef {Object} pageBlockFooter
 * @property {string} [_=pageBlockFooter]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockDivider}
 * @typedef {Object} pageBlockDivider
 * @property {string} [_=pageBlockDivider]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockAnchor}
 * @typedef {Object} pageBlockAnchor
 * @property {string} [_=pageBlockAnchor]
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockList}
 * @typedef {Object} pageBlockList
 * @property {string} [_=pageBlockList]
 * @property {Array.<PageListItem>} items
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockBlockquote}
 * @typedef {Object} pageBlockBlockquote
 * @property {string} [_=pageBlockBlockquote]
 * @property {RichText} text
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockPullquote}
 * @typedef {Object} pageBlockPullquote
 * @property {string} [_=pageBlockPullquote]
 * @property {RichText} text
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockPhoto}
 * @typedef {Object} pageBlockPhoto
 * @property {string} [_=pageBlockPhoto]
 * @property {number} flags
 * @property {long} photo_id
 * @property {PageCaption} caption
 * @property {?string} url
 * @property {?long} webpage_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockVideo}
 * @typedef {Object} pageBlockVideo
 * @property {string} [_=pageBlockVideo]
 * @property {number} flags
 * @property {?true} autoplay
 * @property {?true} loop
 * @property {long} video_id
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockCover}
 * @typedef {Object} pageBlockCover
 * @property {string} [_=pageBlockCover]
 * @property {PageBlock} cover
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockEmbed}
 * @typedef {Object} pageBlockEmbed
 * @property {string} [_=pageBlockEmbed]
 * @property {number} flags
 * @property {?true} full_width
 * @property {?true} allow_scrolling
 * @property {?string} url
 * @property {?string} html
 * @property {?long} poster_photo_id
 * @property {?int} w
 * @property {?int} h
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockEmbedPost}
 * @typedef {Object} pageBlockEmbedPost
 * @property {string} [_=pageBlockEmbedPost]
 * @property {string} url
 * @property {long} webpage_id
 * @property {long} author_photo_id
 * @property {string} author
 * @property {int} date
 * @property {Array.<PageBlock>} blocks
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockCollage}
 * @typedef {Object} pageBlockCollage
 * @property {string} [_=pageBlockCollage]
 * @property {Array.<PageBlock>} items
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockSlideshow}
 * @typedef {Object} pageBlockSlideshow
 * @property {string} [_=pageBlockSlideshow]
 * @property {Array.<PageBlock>} items
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockChannel}
 * @typedef {Object} pageBlockChannel
 * @property {string} [_=pageBlockChannel]
 * @property {Chat} channel
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockAudio}
 * @typedef {Object} pageBlockAudio
 * @property {string} [_=pageBlockAudio]
 * @property {long} audio_id
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockKicker}
 * @typedef {Object} pageBlockKicker
 * @property {string} [_=pageBlockKicker]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockTable}
 * @typedef {Object} pageBlockTable
 * @property {string} [_=pageBlockTable]
 * @property {number} flags
 * @property {?true} bordered
 * @property {?true} striped
 * @property {RichText} title
 * @property {Array.<PageTableRow>} rows
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockOrderedList}
 * @typedef {Object} pageBlockOrderedList
 * @property {string} [_=pageBlockOrderedList]
 * @property {Array.<PageListOrderedItem>} items
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockDetails}
 * @typedef {Object} pageBlockDetails
 * @property {string} [_=pageBlockDetails]
 * @property {number} flags
 * @property {?true} open
 * @property {Array.<PageBlock>} blocks
 * @property {RichText} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockRelatedArticles}
 * @typedef {Object} pageBlockRelatedArticles
 * @property {string} [_=pageBlockRelatedArticles]
 * @property {RichText} title
 * @property {Array.<PageRelatedArticle>} articles
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockMap}
 * @typedef {Object} pageBlockMap
 * @property {string} [_=pageBlockMap]
 * @property {GeoPoint} geo
 * @property {int} zoom
 * @property {int} w
 * @property {int} h
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonMissed}
 * @typedef {Object} phoneCallDiscardReasonMissed
 * @property {string} [_=phoneCallDiscardReasonMissed]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonDisconnect}
 * @typedef {Object} phoneCallDiscardReasonDisconnect
 * @property {string} [_=phoneCallDiscardReasonDisconnect]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonHangup}
 * @typedef {Object} phoneCallDiscardReasonHangup
 * @property {string} [_=phoneCallDiscardReasonHangup]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonBusy}
 * @typedef {Object} phoneCallDiscardReasonBusy
 * @property {string} [_=phoneCallDiscardReasonBusy]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dataJSON}
 * @typedef {Object} dataJSON
 * @property {string} [_=dataJSON]
 * @property {string} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/labeledPrice}
 * @typedef {Object} labeledPrice
 * @property {string} [_=labeledPrice]
 * @property {string} label
 * @property {long} amount
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/invoice}
 * @typedef {Object} invoice
 * @property {string} [_=invoice]
 * @property {number} flags
 * @property {?true} test
 * @property {?true} name_requested
 * @property {?true} phone_requested
 * @property {?true} email_requested
 * @property {?true} shipping_address_requested
 * @property {?true} flexible
 * @property {?true} phone_to_provider
 * @property {?true} email_to_provider
 * @property {string} currency
 * @property {Array.<LabeledPrice>} prices
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/paymentCharge}
 * @typedef {Object} paymentCharge
 * @property {string} [_=paymentCharge]
 * @property {string} id
 * @property {string} provider_charge_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/postAddress}
 * @typedef {Object} postAddress
 * @property {string} [_=postAddress]
 * @property {string} street_line1
 * @property {string} street_line2
 * @property {string} city
 * @property {string} state
 * @property {string} country_iso2
 * @property {string} post_code
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/paymentRequestedInfo}
 * @typedef {Object} paymentRequestedInfo
 * @property {string} [_=paymentRequestedInfo]
 * @property {number} flags
 * @property {?string} name
 * @property {?string} phone
 * @property {?string} email
 * @property {?PostAddress} shipping_address
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/paymentSavedCredentialsCard}
 * @typedef {Object} paymentSavedCredentialsCard
 * @property {string} [_=paymentSavedCredentialsCard]
 * @property {string} id
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webDocument}
 * @typedef {Object} webDocument
 * @property {string} [_=webDocument]
 * @property {string} url
 * @property {long} access_hash
 * @property {int} size
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webDocumentNoProxy}
 * @typedef {Object} webDocumentNoProxy
 * @property {string} [_=webDocumentNoProxy]
 * @property {string} url
 * @property {int} size
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputWebDocument}
 * @typedef {Object} inputWebDocument
 * @property {string} [_=inputWebDocument]
 * @property {string} url
 * @property {int} size
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputWebFileLocation}
 * @typedef {Object} inputWebFileLocation
 * @property {string} [_=inputWebFileLocation]
 * @property {string} url
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputWebFileGeoPointLocation}
 * @typedef {Object} inputWebFileGeoPointLocation
 * @property {string} [_=inputWebFileGeoPointLocation]
 * @property {InputGeoPoint} geo_point
 * @property {long} access_hash
 * @property {int} w
 * @property {int} h
 * @property {int} zoom
 * @property {int} scale
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.webFile}
 * @typedef {Object} upload_webFile
 * @property {string} [_=upload.webFile]
 * @property {int} size
 * @property {string} mime_type
 * @property {storage_FileType} file_type
 * @property {int} mtime
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentForm}
 * @typedef {Object} payments_paymentForm
 * @property {string} [_=payments.paymentForm]
 * @property {number} flags
 * @property {?true} can_save_credentials
 * @property {?true} password_missing
 * @property {int} bot_id
 * @property {Invoice} invoice
 * @property {int} provider_id
 * @property {string} url
 * @property {?string} native_provider
 * @property {?DataJSON} native_params
 * @property {?PaymentRequestedInfo} saved_info
 * @property {?PaymentSavedCredentials} saved_credentials
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.validatedRequestedInfo}
 * @typedef {Object} payments_validatedRequestedInfo
 * @property {string} [_=payments.validatedRequestedInfo]
 * @property {number} flags
 * @property {?string} id
 * @property {?Array.<ShippingOption>} shipping_options
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentResult}
 * @typedef {Object} payments_paymentResult
 * @property {string} [_=payments.paymentResult]
 * @property {Updates} updates
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentVerficationNeeded}
 * @typedef {Object} payments_paymentVerficationNeeded
 * @property {string} [_=payments.paymentVerficationNeeded]
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentReceipt}
 * @typedef {Object} payments_paymentReceipt
 * @property {string} [_=payments.paymentReceipt]
 * @property {number} flags
 * @property {int} date
 * @property {int} bot_id
 * @property {Invoice} invoice
 * @property {int} provider_id
 * @property {?PaymentRequestedInfo} info
 * @property {?ShippingOption} shipping
 * @property {string} currency
 * @property {long} total_amount
 * @property {string} credentials_title
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.savedInfo}
 * @typedef {Object} payments_savedInfo
 * @property {string} [_=payments.savedInfo]
 * @property {number} flags
 * @property {?true} has_saved_credentials
 * @property {?PaymentRequestedInfo} saved_info
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentialsSaved}
 * @typedef {Object} inputPaymentCredentialsSaved
 * @property {string} [_=inputPaymentCredentialsSaved]
 * @property {string} id
 * @property {bytes} tmp_password
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentials}
 * @typedef {Object} inputPaymentCredentials
 * @property {string} [_=inputPaymentCredentials]
 * @property {number} flags
 * @property {?true} save
 * @property {DataJSON} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentialsApplePay}
 * @typedef {Object} inputPaymentCredentialsApplePay
 * @property {string} [_=inputPaymentCredentialsApplePay]
 * @property {DataJSON} payment_data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentialsAndroidPay}
 * @typedef {Object} inputPaymentCredentialsAndroidPay
 * @property {string} [_=inputPaymentCredentialsAndroidPay]
 * @property {DataJSON} payment_token
 * @property {string} google_transaction_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.tmpPassword}
 * @typedef {Object} account_tmpPassword
 * @property {string} [_=account.tmpPassword]
 * @property {bytes} tmp_password
 * @property {int} valid_until
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/shippingOption}
 * @typedef {Object} shippingOption
 * @property {string} [_=shippingOption]
 * @property {string} id
 * @property {string} title
 * @property {Array.<LabeledPrice>} prices
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetItem}
 * @typedef {Object} inputStickerSetItem
 * @property {string} [_=inputStickerSetItem]
 * @property {number} flags
 * @property {InputDocument} document
 * @property {string} emoji
 * @property {?MaskCoords} mask_coords
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhoneCall}
 * @typedef {Object} inputPhoneCall
 * @property {string} [_=inputPhoneCall]
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallEmpty}
 * @typedef {Object} phoneCallEmpty
 * @property {string} [_=phoneCallEmpty]
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallWaiting}
 * @typedef {Object} phoneCallWaiting
 * @property {string} [_=phoneCallWaiting]
 * @property {number} flags
 * @property {long} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {PhoneCallProtocol} protocol
 * @property {?int} receive_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallRequested}
 * @typedef {Object} phoneCallRequested
 * @property {string} [_=phoneCallRequested]
 * @property {long} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {bytes} g_a_hash
 * @property {PhoneCallProtocol} protocol
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallAccepted}
 * @typedef {Object} phoneCallAccepted
 * @property {string} [_=phoneCallAccepted]
 * @property {long} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {bytes} g_b
 * @property {PhoneCallProtocol} protocol
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCall}
 * @typedef {Object} phoneCall
 * @property {string} [_=phoneCall]
 * @property {number} flags
 * @property {?true} p2p_allowed
 * @property {long} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {bytes} g_a_or_b
 * @property {long} key_fingerprint
 * @property {PhoneCallProtocol} protocol
 * @property {PhoneConnection} connection
 * @property {Array.<PhoneConnection>} alternative_connections
 * @property {int} start_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscarded}
 * @typedef {Object} phoneCallDiscarded
 * @property {string} [_=phoneCallDiscarded]
 * @property {number} flags
 * @property {?true} need_rating
 * @property {?true} need_debug
 * @property {long} id
 * @property {?PhoneCallDiscardReason} reason
 * @property {?int} duration
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneConnection}
 * @typedef {Object} phoneConnection
 * @property {string} [_=phoneConnection]
 * @property {long} id
 * @property {string} ip
 * @property {string} ipv6
 * @property {int} port
 * @property {bytes} peer_tag
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallProtocol}
 * @typedef {Object} phoneCallProtocol
 * @property {string} [_=phoneCallProtocol]
 * @property {number} flags
 * @property {?true} udp_p2p
 * @property {?true} udp_reflector
 * @property {int} min_layer
 * @property {int} max_layer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phone.phoneCall}
 * @typedef {Object} phone_phoneCall
 * @property {string} [_=phone.phoneCall]
 * @property {PhoneCall} phone_call
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.cdnFileReuploadNeeded}
 * @typedef {Object} upload_cdnFileReuploadNeeded
 * @property {string} [_=upload.cdnFileReuploadNeeded]
 * @property {bytes} request_token
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.cdnFile}
 * @typedef {Object} upload_cdnFile
 * @property {string} [_=upload.cdnFile]
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/cdnPublicKey}
 * @typedef {Object} cdnPublicKey
 * @property {string} [_=cdnPublicKey]
 * @property {int} dc_id
 * @property {string} public_key
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/cdnConfig}
 * @typedef {Object} cdnConfig
 * @property {string} [_=cdnConfig]
 * @property {Array.<CdnPublicKey>} public_keys
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackString}
 * @typedef {Object} langPackString
 * @property {string} [_=langPackString]
 * @property {string} key
 * @property {string} value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackStringPluralized}
 * @typedef {Object} langPackStringPluralized
 * @property {string} [_=langPackStringPluralized]
 * @property {number} flags
 * @property {string} key
 * @property {?string} zero_value
 * @property {?string} one_value
 * @property {?string} two_value
 * @property {?string} few_value
 * @property {?string} many_value
 * @property {string} other_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackStringDeleted}
 * @typedef {Object} langPackStringDeleted
 * @property {string} [_=langPackStringDeleted]
 * @property {string} key
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackDifference}
 * @typedef {Object} langPackDifference
 * @property {string} [_=langPackDifference]
 * @property {string} lang_code
 * @property {int} from_version
 * @property {int} version
 * @property {Array.<LangPackString>} strings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackLanguage}
 * @typedef {Object} langPackLanguage
 * @property {string} [_=langPackLanguage]
 * @property {number} flags
 * @property {?true} official
 * @property {?true} rtl
 * @property {string} name
 * @property {string} native_name
 * @property {string} lang_code
 * @property {?string} base_lang_code
 * @property {string} plural_code
 * @property {int} strings_count
 * @property {int} translated_count
 * @property {string} translations_url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminRights}
 * @typedef {Object} channelAdminRights
 * @property {string} [_=channelAdminRights]
 * @property {number} flags
 * @property {?true} change_info
 * @property {?true} post_messages
 * @property {?true} edit_messages
 * @property {?true} delete_messages
 * @property {?true} ban_users
 * @property {?true} invite_users
 * @property {?true} invite_link
 * @property {?true} pin_messages
 * @property {?true} add_admins
 * @property {?true} manage_call
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelBannedRights}
 * @typedef {Object} channelBannedRights
 * @property {string} [_=channelBannedRights]
 * @property {number} flags
 * @property {?true} view_messages
 * @property {?true} send_messages
 * @property {?true} send_media
 * @property {?true} send_stickers
 * @property {?true} send_gifs
 * @property {?true} send_games
 * @property {?true} send_inline
 * @property {?true} embed_links
 * @property {int} until_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeTitle}
 * @typedef {Object} channelAdminLogEventActionChangeTitle
 * @property {string} [_=channelAdminLogEventActionChangeTitle]
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeAbout}
 * @typedef {Object} channelAdminLogEventActionChangeAbout
 * @property {string} [_=channelAdminLogEventActionChangeAbout]
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeUsername}
 * @typedef {Object} channelAdminLogEventActionChangeUsername
 * @property {string} [_=channelAdminLogEventActionChangeUsername]
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangePhoto}
 * @typedef {Object} channelAdminLogEventActionChangePhoto
 * @property {string} [_=channelAdminLogEventActionChangePhoto]
 * @property {ChatPhoto} prev_photo
 * @property {ChatPhoto} new_photo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionToggleInvites}
 * @typedef {Object} channelAdminLogEventActionToggleInvites
 * @property {string} [_=channelAdminLogEventActionToggleInvites]
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionToggleSignatures}
 * @typedef {Object} channelAdminLogEventActionToggleSignatures
 * @property {string} [_=channelAdminLogEventActionToggleSignatures]
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionUpdatePinned}
 * @typedef {Object} channelAdminLogEventActionUpdatePinned
 * @property {string} [_=channelAdminLogEventActionUpdatePinned]
 * @property {Message} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionEditMessage}
 * @typedef {Object} channelAdminLogEventActionEditMessage
 * @property {string} [_=channelAdminLogEventActionEditMessage]
 * @property {Message} prev_message
 * @property {Message} new_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionDeleteMessage}
 * @typedef {Object} channelAdminLogEventActionDeleteMessage
 * @property {string} [_=channelAdminLogEventActionDeleteMessage]
 * @property {Message} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantJoin}
 * @typedef {Object} channelAdminLogEventActionParticipantJoin
 * @property {string} [_=channelAdminLogEventActionParticipantJoin]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantLeave}
 * @typedef {Object} channelAdminLogEventActionParticipantLeave
 * @property {string} [_=channelAdminLogEventActionParticipantLeave]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantInvite}
 * @typedef {Object} channelAdminLogEventActionParticipantInvite
 * @property {string} [_=channelAdminLogEventActionParticipantInvite]
 * @property {ChannelParticipant} participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantToggleBan}
 * @typedef {Object} channelAdminLogEventActionParticipantToggleBan
 * @property {string} [_=channelAdminLogEventActionParticipantToggleBan]
 * @property {ChannelParticipant} prev_participant
 * @property {ChannelParticipant} new_participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantToggleAdmin}
 * @typedef {Object} channelAdminLogEventActionParticipantToggleAdmin
 * @property {string} [_=channelAdminLogEventActionParticipantToggleAdmin]
 * @property {ChannelParticipant} prev_participant
 * @property {ChannelParticipant} new_participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeStickerSet}
 * @typedef {Object} channelAdminLogEventActionChangeStickerSet
 * @property {string} [_=channelAdminLogEventActionChangeStickerSet]
 * @property {InputStickerSet} prev_stickerset
 * @property {InputStickerSet} new_stickerset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionTogglePreHistoryHidden}
 * @typedef {Object} channelAdminLogEventActionTogglePreHistoryHidden
 * @property {string} [_=channelAdminLogEventActionTogglePreHistoryHidden]
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEvent}
 * @typedef {Object} channelAdminLogEvent
 * @property {string} [_=channelAdminLogEvent]
 * @property {long} id
 * @property {int} date
 * @property {int} user_id
 * @property {ChannelAdminLogEventAction} action
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.adminLogResults}
 * @typedef {Object} channels_adminLogResults
 * @property {string} [_=channels.adminLogResults]
 * @property {Array.<ChannelAdminLogEvent>} events
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventsFilter}
 * @typedef {Object} channelAdminLogEventsFilter
 * @property {string} [_=channelAdminLogEventsFilter]
 * @property {number} flags
 * @property {?true} join
 * @property {?true} leave
 * @property {?true} invite
 * @property {?true} ban
 * @property {?true} unban
 * @property {?true} kick
 * @property {?true} unkick
 * @property {?true} promote
 * @property {?true} demote
 * @property {?true} info
 * @property {?true} settings
 * @property {?true} pinned
 * @property {?true} edit
 * @property {?true} delete
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/popularContact}
 * @typedef {Object} popularContact
 * @property {string} [_=popularContact]
 * @property {long} client_id
 * @property {int} importers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.favedStickersNotModified}
 * @typedef {Object} messages_favedStickersNotModified
 * @property {string} [_=messages.favedStickersNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.favedStickers}
 * @typedef {Object} messages_favedStickers
 * @property {string} [_=messages.favedStickers]
 * @property {int} hash
 * @property {Array.<StickerPack>} packs
 * @property {Array.<Document>} stickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlUnknown}
 * @typedef {Object} recentMeUrlUnknown
 * @property {string} [_=recentMeUrlUnknown]
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlUser}
 * @typedef {Object} recentMeUrlUser
 * @property {string} [_=recentMeUrlUser]
 * @property {string} url
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlChat}
 * @typedef {Object} recentMeUrlChat
 * @property {string} [_=recentMeUrlChat]
 * @property {string} url
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlChatInvite}
 * @typedef {Object} recentMeUrlChatInvite
 * @property {string} [_=recentMeUrlChatInvite]
 * @property {string} url
 * @property {ChatInvite} chat_invite
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlStickerSet}
 * @typedef {Object} recentMeUrlStickerSet
 * @property {string} [_=recentMeUrlStickerSet]
 * @property {string} url
 * @property {StickerSetCovered} set
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.recentMeUrls}
 * @typedef {Object} help_recentMeUrls
 * @property {string} [_=help.recentMeUrls]
 * @property {Array.<RecentMeUrl>} urls
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSingleMedia}
 * @typedef {Object} inputSingleMedia
 * @property {string} [_=inputSingleMedia]
 * @property {number} flags
 * @property {InputMedia} media
 * @property {long} random_id
 * @property {string} message
 * @property {?Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webAuthorization}
 * @typedef {Object} webAuthorization
 * @property {string} [_=webAuthorization]
 * @property {long} hash
 * @property {int} bot_id
 * @property {string} domain
 * @property {string} browser
 * @property {string} platform
 * @property {int} date_created
 * @property {int} date_active
 * @property {string} ip
 * @property {string} region
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.webAuthorizations}
 * @typedef {Object} account_webAuthorizations
 * @property {string} [_=account.webAuthorizations]
 * @property {Array.<WebAuthorization>} authorizations
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessageID}
 * @typedef {Object} inputMessageID
 * @property {string} [_=inputMessageID]
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessageReplyTo}
 * @typedef {Object} inputMessageReplyTo
 * @property {string} [_=inputMessageReplyTo]
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagePinned}
 * @typedef {Object} inputMessagePinned
 * @property {string} [_=inputMessagePinned]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDialogPeer}
 * @typedef {Object} inputDialogPeer
 * @property {string} [_=inputDialogPeer]
 * @property {InputPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dialogPeer}
 * @typedef {Object} dialogPeer
 * @property {string} [_=dialogPeer]
 * @property {Peer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.foundStickerSetsNotModified}
 * @typedef {Object} messages_foundStickerSetsNotModified
 * @property {string} [_=messages.foundStickerSetsNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.foundStickerSets}
 * @typedef {Object} messages_foundStickerSets
 * @property {string} [_=messages.foundStickerSets]
 * @property {int} hash
 * @property {Array.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/fileHash}
 * @typedef {Object} fileHash
 * @property {string} [_=fileHash]
 * @property {int} offset
 * @property {int} limit
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputClientProxy}
 * @typedef {Object} inputClientProxy
 * @property {string} [_=inputClientProxy]
 * @property {string} address
 * @property {int} port
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.proxyDataEmpty}
 * @typedef {Object} help_proxyDataEmpty
 * @property {string} [_=help.proxyDataEmpty]
 * @property {int} expires
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.proxyDataPromo}
 * @typedef {Object} help_proxyDataPromo
 * @property {string} [_=help.proxyDataPromo]
 * @property {int} expires
 * @property {Peer} peer
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.termsOfServiceUpdateEmpty}
 * @typedef {Object} help_termsOfServiceUpdateEmpty
 * @property {string} [_=help.termsOfServiceUpdateEmpty]
 * @property {int} expires
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.termsOfServiceUpdate}
 * @typedef {Object} help_termsOfServiceUpdate
 * @property {string} [_=help.termsOfServiceUpdate]
 * @property {int} expires
 * @property {help_TermsOfService} terms_of_service
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureFileUploaded}
 * @typedef {Object} inputSecureFileUploaded
 * @property {string} [_=inputSecureFileUploaded]
 * @property {long} id
 * @property {int} parts
 * @property {string} md5_checksum
 * @property {bytes} file_hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureFile}
 * @typedef {Object} inputSecureFile
 * @property {string} [_=inputSecureFile]
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureFileEmpty}
 * @typedef {Object} secureFileEmpty
 * @property {string} [_=secureFileEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureFile}
 * @typedef {Object} secureFile
 * @property {string} [_=secureFile]
 * @property {long} id
 * @property {long} access_hash
 * @property {int} size
 * @property {int} dc_id
 * @property {int} date
 * @property {bytes} file_hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureData}
 * @typedef {Object} secureData
 * @property {string} [_=secureData]
 * @property {bytes} data
 * @property {bytes} data_hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePlainPhone}
 * @typedef {Object} securePlainPhone
 * @property {string} [_=securePlainPhone]
 * @property {string} phone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePlainEmail}
 * @typedef {Object} securePlainEmail
 * @property {string} [_=securePlainEmail]
 * @property {string} email
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePersonalDetails}
 * @typedef {Object} secureValueTypePersonalDetails
 * @property {string} [_=secureValueTypePersonalDetails]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePassport}
 * @typedef {Object} secureValueTypePassport
 * @property {string} [_=secureValueTypePassport]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeDriverLicense}
 * @typedef {Object} secureValueTypeDriverLicense
 * @property {string} [_=secureValueTypeDriverLicense]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeIdentityCard}
 * @typedef {Object} secureValueTypeIdentityCard
 * @property {string} [_=secureValueTypeIdentityCard]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeInternalPassport}
 * @typedef {Object} secureValueTypeInternalPassport
 * @property {string} [_=secureValueTypeInternalPassport]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeAddress}
 * @typedef {Object} secureValueTypeAddress
 * @property {string} [_=secureValueTypeAddress]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeUtilityBill}
 * @typedef {Object} secureValueTypeUtilityBill
 * @property {string} [_=secureValueTypeUtilityBill]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeBankStatement}
 * @typedef {Object} secureValueTypeBankStatement
 * @property {string} [_=secureValueTypeBankStatement]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeRentalAgreement}
 * @typedef {Object} secureValueTypeRentalAgreement
 * @property {string} [_=secureValueTypeRentalAgreement]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePassportRegistration}
 * @typedef {Object} secureValueTypePassportRegistration
 * @property {string} [_=secureValueTypePassportRegistration]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeTemporaryRegistration}
 * @typedef {Object} secureValueTypeTemporaryRegistration
 * @property {string} [_=secureValueTypeTemporaryRegistration]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePhone}
 * @typedef {Object} secureValueTypePhone
 * @property {string} [_=secureValueTypePhone]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeEmail}
 * @typedef {Object} secureValueTypeEmail
 * @property {string} [_=secureValueTypeEmail]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValue}
 * @typedef {Object} secureValue
 * @property {string} [_=secureValue]
 * @property {number} flags
 * @property {SecureValueType} type
 * @property {?SecureData} data
 * @property {?SecureFile} front_side
 * @property {?SecureFile} reverse_side
 * @property {?SecureFile} selfie
 * @property {?Array.<SecureFile>} translation
 * @property {?Array.<SecureFile>} files
 * @property {?SecurePlainData} plain_data
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureValue}
 * @typedef {Object} inputSecureValue
 * @property {string} [_=inputSecureValue]
 * @property {number} flags
 * @property {SecureValueType} type
 * @property {?SecureData} data
 * @property {?InputSecureFile} front_side
 * @property {?InputSecureFile} reverse_side
 * @property {?InputSecureFile} selfie
 * @property {?Array.<InputSecureFile>} translation
 * @property {?Array.<InputSecureFile>} files
 * @property {?SecurePlainData} plain_data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueHash}
 * @typedef {Object} secureValueHash
 * @property {string} [_=secureValueHash]
 * @property {SecureValueType} type
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorData}
 * @typedef {Object} secureValueErrorData
 * @property {string} [_=secureValueErrorData]
 * @property {SecureValueType} type
 * @property {bytes} data_hash
 * @property {string} field
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorFrontSide}
 * @typedef {Object} secureValueErrorFrontSide
 * @property {string} [_=secureValueErrorFrontSide]
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorReverseSide}
 * @typedef {Object} secureValueErrorReverseSide
 * @property {string} [_=secureValueErrorReverseSide]
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorSelfie}
 * @typedef {Object} secureValueErrorSelfie
 * @property {string} [_=secureValueErrorSelfie]
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorFile}
 * @typedef {Object} secureValueErrorFile
 * @property {string} [_=secureValueErrorFile]
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorFiles}
 * @typedef {Object} secureValueErrorFiles
 * @property {string} [_=secureValueErrorFiles]
 * @property {SecureValueType} type
 * @property {Array.<bytes>} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueError}
 * @typedef {Object} secureValueError
 * @property {string} [_=secureValueError]
 * @property {SecureValueType} type
 * @property {bytes} hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorTranslationFile}
 * @typedef {Object} secureValueErrorTranslationFile
 * @property {string} [_=secureValueErrorTranslationFile]
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorTranslationFiles}
 * @typedef {Object} secureValueErrorTranslationFiles
 * @property {string} [_=secureValueErrorTranslationFiles]
 * @property {SecureValueType} type
 * @property {Array.<bytes>} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureCredentialsEncrypted}
 * @typedef {Object} secureCredentialsEncrypted
 * @property {string} [_=secureCredentialsEncrypted]
 * @property {bytes} data
 * @property {bytes} hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.authorizationForm}
 * @typedef {Object} account_authorizationForm
 * @property {string} [_=account.authorizationForm]
 * @property {number} flags
 * @property {Array.<SecureRequiredType>} required_types
 * @property {Array.<SecureValue>} values
 * @property {Array.<SecureValueError>} errors
 * @property {Array.<User>} users
 * @property {?string} privacy_policy_url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.sentEmailCode}
 * @typedef {Object} account_sentEmailCode
 * @property {string} [_=account.sentEmailCode]
 * @property {string} email_pattern
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.deepLinkInfoEmpty}
 * @typedef {Object} help_deepLinkInfoEmpty
 * @property {string} [_=help.deepLinkInfoEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.deepLinkInfo}
 * @typedef {Object} help_deepLinkInfo
 * @property {string} [_=help.deepLinkInfo]
 * @property {number} flags
 * @property {?true} update_app
 * @property {string} message
 * @property {?Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/savedPhoneContact}
 * @typedef {Object} savedPhoneContact
 * @property {string} [_=savedPhoneContact]
 * @property {string} phone
 * @property {string} first_name
 * @property {string} last_name
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.takeout}
 * @typedef {Object} account_takeout
 * @property {string} [_=account.takeout]
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/passwordKdfAlgoUnknown}
 * @typedef {Object} passwordKdfAlgoUnknown
 * @property {string} [_=passwordKdfAlgoUnknown]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow}
 * @typedef {Object} passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow
 * @property {string} [_=passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow]
 * @property {bytes} salt1
 * @property {bytes} salt2
 * @property {int} g
 * @property {bytes} p
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePasswordKdfAlgoUnknown}
 * @typedef {Object} securePasswordKdfAlgoUnknown
 * @property {string} [_=securePasswordKdfAlgoUnknown]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000}
 * @typedef {Object} securePasswordKdfAlgoPBKDF2HMACSHA512iter100000
 * @property {string} [_=securePasswordKdfAlgoPBKDF2HMACSHA512iter100000]
 * @property {bytes} salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePasswordKdfAlgoSHA512}
 * @typedef {Object} securePasswordKdfAlgoSHA512
 * @property {string} [_=securePasswordKdfAlgoSHA512]
 * @property {bytes} salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureSecretSettings}
 * @typedef {Object} secureSecretSettings
 * @property {string} [_=secureSecretSettings]
 * @property {SecurePasswordKdfAlgo} secure_algo
 * @property {bytes} secure_secret
 * @property {long} secure_secret_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputCheckPasswordEmpty}
 * @typedef {Object} inputCheckPasswordEmpty
 * @property {string} [_=inputCheckPasswordEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputCheckPasswordSRP}
 * @typedef {Object} inputCheckPasswordSRP
 * @property {string} [_=inputCheckPasswordSRP]
 * @property {long} srp_id
 * @property {bytes} A
 * @property {bytes} M1
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureRequiredType}
 * @typedef {Object} secureRequiredType
 * @property {string} [_=secureRequiredType]
 * @property {number} flags
 * @property {?true} native_names
 * @property {?true} selfie_required
 * @property {?true} translation_required
 * @property {SecureValueType} type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureRequiredTypeOneOf}
 * @typedef {Object} secureRequiredTypeOneOf
 * @property {string} [_=secureRequiredTypeOneOf]
 * @property {Array.<SecureRequiredType>} types
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.passportConfigNotModified}
 * @typedef {Object} help_passportConfigNotModified
 * @property {string} [_=help.passportConfigNotModified]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.passportConfig}
 * @typedef {Object} help_passportConfig
 * @property {string} [_=help.passportConfig]
 * @property {int} hash
 * @property {DataJSON} countries_langs
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageTableCell}
 * @typedef {Object} pageTableCell
 * @property {string} [_=pageTableCell]
 * @property {number} flags
 * @property {?true} header
 * @property {?true} align_center
 * @property {?true} align_right
 * @property {?true} valign_middle
 * @property {?true} valign_bottom
 * @property {?RichText} text
 * @property {?int} colspan
 * @property {?int} rowspan
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageTableRow}
 * @typedef {Object} pageTableRow
 * @property {string} [_=pageTableRow]
 * @property {Array.<PageTableCell>} cells
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageCaption}
 * @typedef {Object} pageCaption
 * @property {string} [_=pageCaption]
 * @property {RichText} text
 * @property {RichText} credit
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListItemText}
 * @typedef {Object} pageListItemText
 * @property {string} [_=pageListItemText]
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListItemBlocks}
 * @typedef {Object} pageListItemBlocks
 * @property {string} [_=pageListItemBlocks]
 * @property {Array.<PageBlock>} blocks
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListOrderedItemText}
 * @typedef {Object} pageListOrderedItemText
 * @property {string} [_=pageListOrderedItemText]
 * @property {string} num
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListOrderedItemBlocks}
 * @typedef {Object} pageListOrderedItemBlocks
 * @property {string} [_=pageListOrderedItemBlocks]
 * @property {string} num
 * @property {Array.<PageBlock>} blocks
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageRelatedArticle}
 * @typedef {Object} pageRelatedArticle
 * @property {string} [_=pageRelatedArticle]
 * @property {number} flags
 * @property {string} url
 * @property {long} webpage_id
 * @property {?string} title
 * @property {?string} description
 * @property {?long} photo_id
 * @property {?string} author
 * @property {?int} published_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/page}
 * @typedef {Object} page
 * @property {string} [_=page]
 * @property {number} flags
 * @property {?true} part
 * @property {?true} rtl
 * @property {string} url
 * @property {Array.<PageBlock>} blocks
 * @property {Array.<Photo>} photos
 * @property {Array.<Document>} documents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.supportName}
 * @typedef {Object} help_supportName
 * @property {string} [_=help.supportName]
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.userInfoEmpty}
 * @typedef {Object} help_userInfoEmpty
 * @property {string} [_=help.userInfoEmpty]
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.userInfo}
 * @typedef {Object} help_userInfo
 * @property {string} [_=help.userInfo]
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 * @property {string} author
 * @property {int} date
 */

/// Types ///
/**
 * @see {@link https://core.telegram.org/type/ResPQ}
 * @typedef {(resPQ)} ResPQ
 */

/**
 * @see {@link https://core.telegram.org/type/P_Q_inner_data}
 * @typedef {(p_q_inner_data | p_q_inner_data_dc | p_q_inner_data_temp | p_q_inner_data_temp_dc)} P_Q_inner_data
 */

/**
 * @see {@link https://core.telegram.org/type/Server_DH_Params}
 * @typedef {(server_DH_params_fail | server_DH_params_ok)} Server_DH_Params
 */

/**
 * @see {@link https://core.telegram.org/type/Server_DH_inner_data}
 * @typedef {(server_DH_inner_data)} Server_DH_inner_data
 */

/**
 * @see {@link https://core.telegram.org/type/Client_DH_Inner_Data}
 * @typedef {(client_DH_inner_data)} Client_DH_Inner_Data
 */

/**
 * @see {@link https://core.telegram.org/type/Set_client_DH_params_answer}
 * @typedef {(dh_gen_ok | dh_gen_retry | dh_gen_fail)} Set_client_DH_params_answer
 */

/**
 * @see {@link https://core.telegram.org/type/DestroyAuthKeyRes}
 * @typedef {(destroy_auth_key_ok | destroy_auth_key_none | destroy_auth_key_fail)} DestroyAuthKeyRes
 */

/**
 * @see {@link https://core.telegram.org/type/MsgsAck}
 * @typedef {(msgs_ack)} MsgsAck
 */

/**
 * @see {@link https://core.telegram.org/type/BadMsgNotification}
 * @typedef {(bad_msg_notification | bad_server_salt)} BadMsgNotification
 */

/**
 * @see {@link https://core.telegram.org/type/MsgsStateReq}
 * @typedef {(msgs_state_req)} MsgsStateReq
 */

/**
 * @see {@link https://core.telegram.org/type/MsgsStateInfo}
 * @typedef {(msgs_state_info)} MsgsStateInfo
 */

/**
 * @see {@link https://core.telegram.org/type/MsgsAllInfo}
 * @typedef {(msgs_all_info)} MsgsAllInfo
 */

/**
 * @see {@link https://core.telegram.org/type/MsgDetailedInfo}
 * @typedef {(msg_detailed_info | msg_new_detailed_info)} MsgDetailedInfo
 */

/**
 * @see {@link https://core.telegram.org/type/MsgResendReq}
 * @typedef {(msg_resend_req)} MsgResendReq
 */

/**
 * @see {@link https://core.telegram.org/type/RpcError}
 * @typedef {(rpc_error)} RpcError
 */

/**
 * @see {@link https://core.telegram.org/type/RpcDropAnswer}
 * @typedef {(rpc_answer_unknown | rpc_answer_dropped_running | rpc_answer_dropped)} RpcDropAnswer
 */

/**
 * @see {@link https://core.telegram.org/type/FutureSalt}
 * @typedef {(future_salt)} FutureSalt
 */

/**
 * @see {@link https://core.telegram.org/type/FutureSalts}
 * @typedef {(future_salts)} FutureSalts
 */

/**
 * @see {@link https://core.telegram.org/type/Pong}
 * @typedef {(pong)} Pong
 */

/**
 * @see {@link https://core.telegram.org/type/DestroySessionRes}
 * @typedef {(destroy_session_ok | destroy_session_none)} DestroySessionRes
 */

/**
 * @see {@link https://core.telegram.org/type/NewSession}
 * @typedef {(new_session_created)} NewSession
 */

/**
 * @see {@link https://core.telegram.org/type/HttpWait}
 * @typedef {(http_wait)} HttpWait
 */

/**
 * @see {@link https://core.telegram.org/type/IpPort}
 * @typedef {(ipPort | ipPortSecret)} IpPort
 */

/**
 * @see {@link https://core.telegram.org/type/AccessPointRule}
 * @typedef {(accessPointRule)} AccessPointRule
 */

/**
 * @see {@link https://core.telegram.org/type/help_ConfigSimple}
 * @typedef {(help_configSimple)} help_ConfigSimple
 */

/**
 * @see {@link https://core.telegram.org/type/Bool}
 * @typedef {(boolFalse | boolTrue)} Bool
 */

/**
 * @see {@link https://core.telegram.org/type/True}
 * @typedef {(true)} True
 */

/**
 * @see {@link https://core.telegram.org/type/Vector}
 * @typedef {(vector)} Vector
 */

/**
 * @see {@link https://core.telegram.org/type/Error}
 * @typedef {(error)} Error
 */

/**
 * @see {@link https://core.telegram.org/type/Null}
 * @typedef {(null)} Null
 */

/**
 * @see {@link https://core.telegram.org/type/InputPeer}
 * @typedef {(inputPeerEmpty | inputPeerSelf | inputPeerChat | inputPeerUser | inputPeerChannel)} InputPeer
 */

/**
 * @see {@link https://core.telegram.org/type/InputUser}
 * @typedef {(inputUserEmpty | inputUserSelf | inputUser)} InputUser
 */

/**
 * @see {@link https://core.telegram.org/type/InputContact}
 * @typedef {(inputPhoneContact)} InputContact
 */

/**
 * @see {@link https://core.telegram.org/type/InputFile}
 * @typedef {(inputFile | inputFileBig)} InputFile
 */

/**
 * @see {@link https://core.telegram.org/type/InputMedia}
 * @typedef {(inputMediaEmpty | inputMediaUploadedPhoto | inputMediaPhoto | inputMediaGeoPoint | inputMediaContact | inputMediaUploadedDocument | inputMediaDocument | inputMediaVenue | inputMediaGifExternal | inputMediaPhotoExternal | inputMediaDocumentExternal | inputMediaGame | inputMediaInvoice | inputMediaGeoLive)} InputMedia
 */

/**
 * @see {@link https://core.telegram.org/type/InputChatPhoto}
 * @typedef {(inputChatPhotoEmpty | inputChatUploadedPhoto | inputChatPhoto)} InputChatPhoto
 */

/**
 * @see {@link https://core.telegram.org/type/InputGeoPoint}
 * @typedef {(inputGeoPointEmpty | inputGeoPoint)} InputGeoPoint
 */

/**
 * @see {@link https://core.telegram.org/type/InputPhoto}
 * @typedef {(inputPhotoEmpty | inputPhoto)} InputPhoto
 */

/**
 * @see {@link https://core.telegram.org/type/InputFileLocation}
 * @typedef {(inputFileLocation | inputEncryptedFileLocation | inputDocumentFileLocation | inputSecureFileLocation | inputTakeoutFileLocation)} InputFileLocation
 */

/**
 * @see {@link https://core.telegram.org/type/InputAppEvent}
 * @typedef {(inputAppEvent)} InputAppEvent
 */

/**
 * @see {@link https://core.telegram.org/type/Peer}
 * @typedef {(peerUser | peerChat | peerChannel)} Peer
 */

/**
 * @see {@link https://core.telegram.org/type/storage_FileType}
 * @typedef {(storage_fileUnknown | storage_filePartial | storage_fileJpeg | storage_fileGif | storage_filePng | storage_filePdf | storage_fileMp3 | storage_fileMov | storage_fileMp4 | storage_fileWebp)} storage_FileType
 */

/**
 * @see {@link https://core.telegram.org/type/FileLocation}
 * @typedef {(fileLocationUnavailable | fileLocation)} FileLocation
 */

/**
 * @see {@link https://core.telegram.org/type/User}
 * @typedef {(userEmpty | user)} User
 */

/**
 * @see {@link https://core.telegram.org/type/UserProfilePhoto}
 * @typedef {(userProfilePhotoEmpty | userProfilePhoto)} UserProfilePhoto
 */

/**
 * @see {@link https://core.telegram.org/type/UserStatus}
 * @typedef {(userStatusEmpty | userStatusOnline | userStatusOffline | userStatusRecently | userStatusLastWeek | userStatusLastMonth)} UserStatus
 */

/**
 * @see {@link https://core.telegram.org/type/Chat}
 * @typedef {(chatEmpty | chat | chatForbidden | channel | channelForbidden)} Chat
 */

/**
 * @see {@link https://core.telegram.org/type/ChatFull}
 * @typedef {(chatFull | channelFull)} ChatFull
 */

/**
 * @see {@link https://core.telegram.org/type/ChatParticipant}
 * @typedef {(chatParticipant | chatParticipantCreator | chatParticipantAdmin)} ChatParticipant
 */

/**
 * @see {@link https://core.telegram.org/type/ChatParticipants}
 * @typedef {(chatParticipantsForbidden | chatParticipants)} ChatParticipants
 */

/**
 * @see {@link https://core.telegram.org/type/ChatPhoto}
 * @typedef {(chatPhotoEmpty | chatPhoto)} ChatPhoto
 */

/**
 * @see {@link https://core.telegram.org/type/Message}
 * @typedef {(messageEmpty | message | messageService)} Message
 */

/**
 * @see {@link https://core.telegram.org/type/MessageMedia}
 * @typedef {(messageMediaEmpty | messageMediaPhoto | messageMediaGeo | messageMediaContact | messageMediaUnsupported | messageMediaDocument | messageMediaWebPage | messageMediaVenue | messageMediaGame | messageMediaInvoice | messageMediaGeoLive)} MessageMedia
 */

/**
 * @see {@link https://core.telegram.org/type/MessageAction}
 * @typedef {(messageActionEmpty | messageActionChatCreate | messageActionChatEditTitle | messageActionChatEditPhoto | messageActionChatDeletePhoto | messageActionChatAddUser | messageActionChatDeleteUser | messageActionChatJoinedByLink | messageActionChannelCreate | messageActionChatMigrateTo | messageActionChannelMigrateFrom | messageActionPinMessage | messageActionHistoryClear | messageActionGameScore | messageActionPaymentSentMe | messageActionPaymentSent | messageActionPhoneCall | messageActionScreenshotTaken | messageActionCustomAction | messageActionBotAllowed | messageActionSecureValuesSentMe | messageActionSecureValuesSent)} MessageAction
 */

/**
 * @see {@link https://core.telegram.org/type/Dialog}
 * @typedef {(dialog)} Dialog
 */

/**
 * @see {@link https://core.telegram.org/type/Photo}
 * @typedef {(photoEmpty | photo)} Photo
 */

/**
 * @see {@link https://core.telegram.org/type/PhotoSize}
 * @typedef {(photoSizeEmpty | photoSize | photoCachedSize)} PhotoSize
 */

/**
 * @see {@link https://core.telegram.org/type/GeoPoint}
 * @typedef {(geoPointEmpty | geoPoint)} GeoPoint
 */

/**
 * @see {@link https://core.telegram.org/type/auth_CheckedPhone}
 * @typedef {(auth_checkedPhone)} auth_CheckedPhone
 */

/**
 * @see {@link https://core.telegram.org/type/auth_SentCode}
 * @typedef {(auth_sentCode)} auth_SentCode
 */

/**
 * @see {@link https://core.telegram.org/type/auth_Authorization}
 * @typedef {(auth_authorization)} auth_Authorization
 */

/**
 * @see {@link https://core.telegram.org/type/auth_ExportedAuthorization}
 * @typedef {(auth_exportedAuthorization)} auth_ExportedAuthorization
 */

/**
 * @see {@link https://core.telegram.org/type/InputNotifyPeer}
 * @typedef {(inputNotifyPeer | inputNotifyUsers | inputNotifyChats | inputNotifyBroadcasts)} InputNotifyPeer
 */

/**
 * @see {@link https://core.telegram.org/type/InputPeerNotifySettings}
 * @typedef {(inputPeerNotifySettings)} InputPeerNotifySettings
 */

/**
 * @see {@link https://core.telegram.org/type/PeerNotifySettings}
 * @typedef {(peerNotifySettings)} PeerNotifySettings
 */

/**
 * @see {@link https://core.telegram.org/type/PeerSettings}
 * @typedef {(peerSettings)} PeerSettings
 */

/**
 * @see {@link https://core.telegram.org/type/WallPaper}
 * @typedef {(wallPaper | wallPaperSolid)} WallPaper
 */

/**
 * @see {@link https://core.telegram.org/type/ReportReason}
 * @typedef {(inputReportReasonSpam | inputReportReasonViolence | inputReportReasonPornography | inputReportReasonOther | inputReportReasonCopyright)} ReportReason
 */

/**
 * @see {@link https://core.telegram.org/type/UserFull}
 * @typedef {(userFull)} UserFull
 */

/**
 * @see {@link https://core.telegram.org/type/Contact}
 * @typedef {(contact)} Contact
 */

/**
 * @see {@link https://core.telegram.org/type/ImportedContact}
 * @typedef {(importedContact)} ImportedContact
 */

/**
 * @see {@link https://core.telegram.org/type/ContactBlocked}
 * @typedef {(contactBlocked)} ContactBlocked
 */

/**
 * @see {@link https://core.telegram.org/type/ContactStatus}
 * @typedef {(contactStatus)} ContactStatus
 */

/**
 * @see {@link https://core.telegram.org/type/contacts_Link}
 * @typedef {(contacts_link)} contacts_Link
 */

/**
 * @see {@link https://core.telegram.org/type/contacts_Contacts}
 * @typedef {(contacts_contactsNotModified | contacts_contacts)} contacts_Contacts
 */

/**
 * @see {@link https://core.telegram.org/type/contacts_ImportedContacts}
 * @typedef {(contacts_importedContacts)} contacts_ImportedContacts
 */

/**
 * @see {@link https://core.telegram.org/type/contacts_Blocked}
 * @typedef {(contacts_blocked | contacts_blockedSlice)} contacts_Blocked
 */

/**
 * @see {@link https://core.telegram.org/type/messages_Dialogs}
 * @typedef {(messages_dialogs | messages_dialogsSlice | messages_dialogsNotModified)} messages_Dialogs
 */

/**
 * @see {@link https://core.telegram.org/type/messages_Messages}
 * @typedef {(messages_messages | messages_messagesSlice | messages_channelMessages | messages_messagesNotModified)} messages_Messages
 */

/**
 * @see {@link https://core.telegram.org/type/messages_Chats}
 * @typedef {(messages_chats | messages_chatsSlice)} messages_Chats
 */

/**
 * @see {@link https://core.telegram.org/type/messages_ChatFull}
 * @typedef {(messages_chatFull)} messages_ChatFull
 */

/**
 * @see {@link https://core.telegram.org/type/messages_AffectedHistory}
 * @typedef {(messages_affectedHistory)} messages_AffectedHistory
 */

/**
 * @see {@link https://core.telegram.org/type/MessagesFilter}
 * @typedef {(inputMessagesFilterEmpty | inputMessagesFilterPhotos | inputMessagesFilterVideo | inputMessagesFilterPhotoVideo | inputMessagesFilterDocument | inputMessagesFilterUrl | inputMessagesFilterGif | inputMessagesFilterVoice | inputMessagesFilterMusic | inputMessagesFilterChatPhotos | inputMessagesFilterPhoneCalls | inputMessagesFilterRoundVoice | inputMessagesFilterRoundVideo | inputMessagesFilterMyMentions | inputMessagesFilterGeo | inputMessagesFilterContacts)} MessagesFilter
 */

/**
 * @see {@link https://core.telegram.org/type/Update}
 * @typedef {(updateNewMessage | updateMessageID | updateDeleteMessages | updateUserTyping | updateChatUserTyping | updateChatParticipants | updateUserStatus | updateUserName | updateUserPhoto | updateContactRegistered | updateContactLink | updateNewEncryptedMessage | updateEncryptedChatTyping | updateEncryption | updateEncryptedMessagesRead | updateChatParticipantAdd | updateChatParticipantDelete | updateDcOptions | updateUserBlocked | updateNotifySettings | updateServiceNotification | updatePrivacy | updateUserPhone | updateReadHistoryInbox | updateReadHistoryOutbox | updateWebPage | updateReadMessagesContents | updateChannelTooLong | updateChannel | updateNewChannelMessage | updateReadChannelInbox | updateDeleteChannelMessages | updateChannelMessageViews | updateChatAdmins | updateChatParticipantAdmin | updateNewStickerSet | updateStickerSetsOrder | updateStickerSets | updateSavedGifs | updateBotInlineQuery | updateBotInlineSend | updateEditChannelMessage | updateChannelPinnedMessage | updateBotCallbackQuery | updateEditMessage | updateInlineBotCallbackQuery | updateReadChannelOutbox | updateDraftMessage | updateReadFeaturedStickers | updateRecentStickers | updateConfig | updatePtsChanged | updateChannelWebPage | updateDialogPinned | updatePinnedDialogs | updateBotWebhookJSON | updateBotWebhookJSONQuery | updateBotShippingQuery | updateBotPrecheckoutQuery | updatePhoneCall | updateLangPackTooLong | updateLangPack | updateFavedStickers | updateChannelReadMessagesContents | updateContactsReset | updateChannelAvailableMessages | updateDialogUnreadMark | updateUserPinnedMessage | updateChatPinnedMessage)} Update
 */

/**
 * @see {@link https://core.telegram.org/type/updates_State}
 * @typedef {(updates_state)} updates_State
 */

/**
 * @see {@link https://core.telegram.org/type/updates_Difference}
 * @typedef {(updates_differenceEmpty | updates_difference | updates_differenceSlice | updates_differenceTooLong)} updates_Difference
 */

/**
 * @see {@link https://core.telegram.org/type/Updates}
 * @typedef {(updatesTooLong | updateShortMessage | updateShortChatMessage | updateShort | updatesCombined | updates | updateShortSentMessage)} Updates
 */

/**
 * @see {@link https://core.telegram.org/type/photos_Photos}
 * @typedef {(photos_photos | photos_photosSlice)} photos_Photos
 */

/**
 * @see {@link https://core.telegram.org/type/photos_Photo}
 * @typedef {(photos_photo)} photos_Photo
 */

/**
 * @see {@link https://core.telegram.org/type/upload_File}
 * @typedef {(upload_file | upload_fileCdnRedirect)} upload_File
 */

/**
 * @see {@link https://core.telegram.org/type/DcOption}
 * @typedef {(dcOption)} DcOption
 */

/**
 * @see {@link https://core.telegram.org/type/Config}
 * @typedef {(config)} Config
 */

/**
 * @see {@link https://core.telegram.org/type/NearestDc}
 * @typedef {(nearestDc)} NearestDc
 */

/**
 * @see {@link https://core.telegram.org/type/help_AppUpdate}
 * @typedef {(help_appUpdate | help_noAppUpdate)} help_AppUpdate
 */

/**
 * @see {@link https://core.telegram.org/type/help_InviteText}
 * @typedef {(help_inviteText)} help_InviteText
 */

/**
 * @see {@link https://core.telegram.org/type/EncryptedChat}
 * @typedef {(encryptedChatEmpty | encryptedChatWaiting | encryptedChatRequested | encryptedChat | encryptedChatDiscarded)} EncryptedChat
 */

/**
 * @see {@link https://core.telegram.org/type/InputEncryptedChat}
 * @typedef {(inputEncryptedChat)} InputEncryptedChat
 */

/**
 * @see {@link https://core.telegram.org/type/EncryptedFile}
 * @typedef {(encryptedFileEmpty | encryptedFile)} EncryptedFile
 */

/**
 * @see {@link https://core.telegram.org/type/InputEncryptedFile}
 * @typedef {(inputEncryptedFileEmpty | inputEncryptedFileUploaded | inputEncryptedFile | inputEncryptedFileBigUploaded)} InputEncryptedFile
 */

/**
 * @see {@link https://core.telegram.org/type/EncryptedMessage}
 * @typedef {(encryptedMessage | encryptedMessageService)} EncryptedMessage
 */

/**
 * @see {@link https://core.telegram.org/type/messages_DhConfig}
 * @typedef {(messages_dhConfigNotModified | messages_dhConfig)} messages_DhConfig
 */

/**
 * @see {@link https://core.telegram.org/type/messages_SentEncryptedMessage}
 * @typedef {(messages_sentEncryptedMessage | messages_sentEncryptedFile)} messages_SentEncryptedMessage
 */

/**
 * @see {@link https://core.telegram.org/type/InputDocument}
 * @typedef {(inputDocumentEmpty | inputDocument)} InputDocument
 */

/**
 * @see {@link https://core.telegram.org/type/Document}
 * @typedef {(documentEmpty | document)} Document
 */

/**
 * @see {@link https://core.telegram.org/type/help_Support}
 * @typedef {(help_support)} help_Support
 */

/**
 * @see {@link https://core.telegram.org/type/NotifyPeer}
 * @typedef {(notifyPeer | notifyUsers | notifyChats | notifyBroadcasts)} NotifyPeer
 */

/**
 * @see {@link https://core.telegram.org/type/SendMessageAction}
 * @typedef {(sendMessageTypingAction | sendMessageCancelAction | sendMessageRecordVideoAction | sendMessageUploadVideoAction | sendMessageRecordAudioAction | sendMessageUploadAudioAction | sendMessageUploadPhotoAction | sendMessageUploadDocumentAction | sendMessageGeoLocationAction | sendMessageChooseContactAction | sendMessageGamePlayAction | sendMessageRecordRoundAction | sendMessageUploadRoundAction)} SendMessageAction
 */

/**
 * @see {@link https://core.telegram.org/type/contacts_Found}
 * @typedef {(contacts_found)} contacts_Found
 */

/**
 * @see {@link https://core.telegram.org/type/InputPrivacyKey}
 * @typedef {(inputPrivacyKeyStatusTimestamp | inputPrivacyKeyChatInvite | inputPrivacyKeyPhoneCall | inputPrivacyKeyPhoneP2P)} InputPrivacyKey
 */

/**
 * @see {@link https://core.telegram.org/type/PrivacyKey}
 * @typedef {(privacyKeyStatusTimestamp | privacyKeyChatInvite | privacyKeyPhoneCall | privacyKeyPhoneP2P)} PrivacyKey
 */

/**
 * @see {@link https://core.telegram.org/type/InputPrivacyRule}
 * @typedef {(inputPrivacyValueAllowContacts | inputPrivacyValueAllowAll | inputPrivacyValueAllowUsers | inputPrivacyValueDisallowContacts | inputPrivacyValueDisallowAll | inputPrivacyValueDisallowUsers)} InputPrivacyRule
 */

/**
 * @see {@link https://core.telegram.org/type/PrivacyRule}
 * @typedef {(privacyValueAllowContacts | privacyValueAllowAll | privacyValueAllowUsers | privacyValueDisallowContacts | privacyValueDisallowAll | privacyValueDisallowUsers)} PrivacyRule
 */

/**
 * @see {@link https://core.telegram.org/type/account_PrivacyRules}
 * @typedef {(account_privacyRules)} account_PrivacyRules
 */

/**
 * @see {@link https://core.telegram.org/type/AccountDaysTTL}
 * @typedef {(accountDaysTTL)} AccountDaysTTL
 */

/**
 * @see {@link https://core.telegram.org/type/DocumentAttribute}
 * @typedef {(documentAttributeImageSize | documentAttributeAnimated | documentAttributeSticker | documentAttributeVideo | documentAttributeAudio | documentAttributeFilename | documentAttributeHasStickers)} DocumentAttribute
 */

/**
 * @see {@link https://core.telegram.org/type/messages_Stickers}
 * @typedef {(messages_stickersNotModified | messages_stickers)} messages_Stickers
 */

/**
 * @see {@link https://core.telegram.org/type/StickerPack}
 * @typedef {(stickerPack)} StickerPack
 */

/**
 * @see {@link https://core.telegram.org/type/messages_AllStickers}
 * @typedef {(messages_allStickersNotModified | messages_allStickers)} messages_AllStickers
 */

/**
 * @see {@link https://core.telegram.org/type/messages_AffectedMessages}
 * @typedef {(messages_affectedMessages)} messages_AffectedMessages
 */

/**
 * @see {@link https://core.telegram.org/type/ContactLink}
 * @typedef {(contactLinkUnknown | contactLinkNone | contactLinkHasPhone | contactLinkContact)} ContactLink
 */

/**
 * @see {@link https://core.telegram.org/type/WebPage}
 * @typedef {(webPageEmpty | webPagePending | webPage | webPageNotModified)} WebPage
 */

/**
 * @see {@link https://core.telegram.org/type/Authorization}
 * @typedef {(authorization)} Authorization
 */

/**
 * @see {@link https://core.telegram.org/type/account_Authorizations}
 * @typedef {(account_authorizations)} account_Authorizations
 */

/**
 * @see {@link https://core.telegram.org/type/account_Password}
 * @typedef {(account_password)} account_Password
 */

/**
 * @see {@link https://core.telegram.org/type/account_PasswordSettings}
 * @typedef {(account_passwordSettings)} account_PasswordSettings
 */

/**
 * @see {@link https://core.telegram.org/type/account_PasswordInputSettings}
 * @typedef {(account_passwordInputSettings)} account_PasswordInputSettings
 */

/**
 * @see {@link https://core.telegram.org/type/auth_PasswordRecovery}
 * @typedef {(auth_passwordRecovery)} auth_PasswordRecovery
 */

/**
 * @see {@link https://core.telegram.org/type/ReceivedNotifyMessage}
 * @typedef {(receivedNotifyMessage)} ReceivedNotifyMessage
 */

/**
 * @see {@link https://core.telegram.org/type/ExportedChatInvite}
 * @typedef {(chatInviteEmpty | chatInviteExported)} ExportedChatInvite
 */

/**
 * @see {@link https://core.telegram.org/type/ChatInvite}
 * @typedef {(chatInviteAlready | chatInvite)} ChatInvite
 */

/**
 * @see {@link https://core.telegram.org/type/InputStickerSet}
 * @typedef {(inputStickerSetEmpty | inputStickerSetID | inputStickerSetShortName)} InputStickerSet
 */

/**
 * @see {@link https://core.telegram.org/type/StickerSet}
 * @typedef {(stickerSet)} StickerSet
 */

/**
 * @see {@link https://core.telegram.org/type/messages_StickerSet}
 * @typedef {(messages_stickerSet)} messages_StickerSet
 */

/**
 * @see {@link https://core.telegram.org/type/BotCommand}
 * @typedef {(botCommand)} BotCommand
 */

/**
 * @see {@link https://core.telegram.org/type/BotInfo}
 * @typedef {(botInfo)} BotInfo
 */

/**
 * @see {@link https://core.telegram.org/type/KeyboardButton}
 * @typedef {(keyboardButton | keyboardButtonUrl | keyboardButtonCallback | keyboardButtonRequestPhone | keyboardButtonRequestGeoLocation | keyboardButtonSwitchInline | keyboardButtonGame | keyboardButtonBuy)} KeyboardButton
 */

/**
 * @see {@link https://core.telegram.org/type/KeyboardButtonRow}
 * @typedef {(keyboardButtonRow)} KeyboardButtonRow
 */

/**
 * @see {@link https://core.telegram.org/type/ReplyMarkup}
 * @typedef {(replyKeyboardHide | replyKeyboardForceReply | replyKeyboardMarkup | replyInlineMarkup)} ReplyMarkup
 */

/**
 * @see {@link https://core.telegram.org/type/MessageEntity}
 * @typedef {(messageEntityUnknown | messageEntityMention | messageEntityHashtag | messageEntityBotCommand | messageEntityUrl | messageEntityEmail | messageEntityBold | messageEntityItalic | messageEntityCode | messageEntityPre | messageEntityTextUrl | messageEntityMentionName | inputMessageEntityMentionName | messageEntityPhone | messageEntityCashtag)} MessageEntity
 */

/**
 * @see {@link https://core.telegram.org/type/InputChannel}
 * @typedef {(inputChannelEmpty | inputChannel)} InputChannel
 */

/**
 * @see {@link https://core.telegram.org/type/contacts_ResolvedPeer}
 * @typedef {(contacts_resolvedPeer)} contacts_ResolvedPeer
 */

/**
 * @see {@link https://core.telegram.org/type/MessageRange}
 * @typedef {(messageRange)} MessageRange
 */

/**
 * @see {@link https://core.telegram.org/type/updates_ChannelDifference}
 * @typedef {(updates_channelDifferenceEmpty | updates_channelDifferenceTooLong | updates_channelDifference)} updates_ChannelDifference
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelMessagesFilter}
 * @typedef {(channelMessagesFilterEmpty | channelMessagesFilter)} ChannelMessagesFilter
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelParticipant}
 * @typedef {(channelParticipant | channelParticipantSelf | channelParticipantCreator | channelParticipantAdmin | channelParticipantBanned)} ChannelParticipant
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelParticipantsFilter}
 * @typedef {(channelParticipantsRecent | channelParticipantsAdmins | channelParticipantsKicked | channelParticipantsBots | channelParticipantsBanned | channelParticipantsSearch)} ChannelParticipantsFilter
 */

/**
 * @see {@link https://core.telegram.org/type/channels_ChannelParticipants}
 * @typedef {(channels_channelParticipants | channels_channelParticipantsNotModified)} channels_ChannelParticipants
 */

/**
 * @see {@link https://core.telegram.org/type/channels_ChannelParticipant}
 * @typedef {(channels_channelParticipant)} channels_ChannelParticipant
 */

/**
 * @see {@link https://core.telegram.org/type/help_TermsOfService}
 * @typedef {(help_termsOfService)} help_TermsOfService
 */

/**
 * @see {@link https://core.telegram.org/type/FoundGif}
 * @typedef {(foundGif | foundGifCached)} FoundGif
 */

/**
 * @see {@link https://core.telegram.org/type/messages_FoundGifs}
 * @typedef {(messages_foundGifs)} messages_FoundGifs
 */

/**
 * @see {@link https://core.telegram.org/type/messages_SavedGifs}
 * @typedef {(messages_savedGifsNotModified | messages_savedGifs)} messages_SavedGifs
 */

/**
 * @see {@link https://core.telegram.org/type/InputBotInlineMessage}
 * @typedef {(inputBotInlineMessageMediaAuto | inputBotInlineMessageText | inputBotInlineMessageMediaGeo | inputBotInlineMessageMediaVenue | inputBotInlineMessageMediaContact | inputBotInlineMessageGame)} InputBotInlineMessage
 */

/**
 * @see {@link https://core.telegram.org/type/InputBotInlineResult}
 * @typedef {(inputBotInlineResult | inputBotInlineResultPhoto | inputBotInlineResultDocument | inputBotInlineResultGame)} InputBotInlineResult
 */

/**
 * @see {@link https://core.telegram.org/type/BotInlineMessage}
 * @typedef {(botInlineMessageMediaAuto | botInlineMessageText | botInlineMessageMediaGeo | botInlineMessageMediaVenue | botInlineMessageMediaContact)} BotInlineMessage
 */

/**
 * @see {@link https://core.telegram.org/type/BotInlineResult}
 * @typedef {(botInlineResult | botInlineMediaResult)} BotInlineResult
 */

/**
 * @see {@link https://core.telegram.org/type/messages_BotResults}
 * @typedef {(messages_botResults)} messages_BotResults
 */

/**
 * @see {@link https://core.telegram.org/type/ExportedMessageLink}
 * @typedef {(exportedMessageLink)} ExportedMessageLink
 */

/**
 * @see {@link https://core.telegram.org/type/MessageFwdHeader}
 * @typedef {(messageFwdHeader)} MessageFwdHeader
 */

/**
 * @see {@link https://core.telegram.org/type/auth_CodeType}
 * @typedef {(auth_codeTypeSms | auth_codeTypeCall | auth_codeTypeFlashCall)} auth_CodeType
 */

/**
 * @see {@link https://core.telegram.org/type/auth_SentCodeType}
 * @typedef {(auth_sentCodeTypeApp | auth_sentCodeTypeSms | auth_sentCodeTypeCall | auth_sentCodeTypeFlashCall)} auth_SentCodeType
 */

/**
 * @see {@link https://core.telegram.org/type/messages_BotCallbackAnswer}
 * @typedef {(messages_botCallbackAnswer)} messages_BotCallbackAnswer
 */

/**
 * @see {@link https://core.telegram.org/type/messages_MessageEditData}
 * @typedef {(messages_messageEditData)} messages_MessageEditData
 */

/**
 * @see {@link https://core.telegram.org/type/InputBotInlineMessageID}
 * @typedef {(inputBotInlineMessageID)} InputBotInlineMessageID
 */

/**
 * @see {@link https://core.telegram.org/type/InlineBotSwitchPM}
 * @typedef {(inlineBotSwitchPM)} InlineBotSwitchPM
 */

/**
 * @see {@link https://core.telegram.org/type/messages_PeerDialogs}
 * @typedef {(messages_peerDialogs)} messages_PeerDialogs
 */

/**
 * @see {@link https://core.telegram.org/type/TopPeer}
 * @typedef {(topPeer)} TopPeer
 */

/**
 * @see {@link https://core.telegram.org/type/TopPeerCategory}
 * @typedef {(topPeerCategoryBotsPM | topPeerCategoryBotsInline | topPeerCategoryCorrespondents | topPeerCategoryGroups | topPeerCategoryChannels | topPeerCategoryPhoneCalls)} TopPeerCategory
 */

/**
 * @see {@link https://core.telegram.org/type/TopPeerCategoryPeers}
 * @typedef {(topPeerCategoryPeers)} TopPeerCategoryPeers
 */

/**
 * @see {@link https://core.telegram.org/type/contacts_TopPeers}
 * @typedef {(contacts_topPeersNotModified | contacts_topPeers | contacts_topPeersDisabled)} contacts_TopPeers
 */

/**
 * @see {@link https://core.telegram.org/type/DraftMessage}
 * @typedef {(draftMessageEmpty | draftMessage)} DraftMessage
 */

/**
 * @see {@link https://core.telegram.org/type/messages_FeaturedStickers}
 * @typedef {(messages_featuredStickersNotModified | messages_featuredStickers)} messages_FeaturedStickers
 */

/**
 * @see {@link https://core.telegram.org/type/messages_RecentStickers}
 * @typedef {(messages_recentStickersNotModified | messages_recentStickers)} messages_RecentStickers
 */

/**
 * @see {@link https://core.telegram.org/type/messages_ArchivedStickers}
 * @typedef {(messages_archivedStickers)} messages_ArchivedStickers
 */

/**
 * @see {@link https://core.telegram.org/type/messages_StickerSetInstallResult}
 * @typedef {(messages_stickerSetInstallResultSuccess | messages_stickerSetInstallResultArchive)} messages_StickerSetInstallResult
 */

/**
 * @see {@link https://core.telegram.org/type/StickerSetCovered}
 * @typedef {(stickerSetCovered | stickerSetMultiCovered)} StickerSetCovered
 */

/**
 * @see {@link https://core.telegram.org/type/MaskCoords}
 * @typedef {(maskCoords)} MaskCoords
 */

/**
 * @see {@link https://core.telegram.org/type/InputStickeredMedia}
 * @typedef {(inputStickeredMediaPhoto | inputStickeredMediaDocument)} InputStickeredMedia
 */

/**
 * @see {@link https://core.telegram.org/type/Game}
 * @typedef {(game)} Game
 */

/**
 * @see {@link https://core.telegram.org/type/InputGame}
 * @typedef {(inputGameID | inputGameShortName)} InputGame
 */

/**
 * @see {@link https://core.telegram.org/type/HighScore}
 * @typedef {(highScore)} HighScore
 */

/**
 * @see {@link https://core.telegram.org/type/messages_HighScores}
 * @typedef {(messages_highScores)} messages_HighScores
 */

/**
 * @see {@link https://core.telegram.org/type/RichText}
 * @typedef {(textEmpty | textPlain | textBold | textItalic | textUnderline | textStrike | textFixed | textUrl | textEmail | textConcat | textSubscript | textSuperscript | textMarked | textPhone | textImage | textAnchor)} RichText
 */

/**
 * @see {@link https://core.telegram.org/type/PageBlock}
 * @typedef {(pageBlockUnsupported | pageBlockTitle | pageBlockSubtitle | pageBlockAuthorDate | pageBlockHeader | pageBlockSubheader | pageBlockParagraph | pageBlockPreformatted | pageBlockFooter | pageBlockDivider | pageBlockAnchor | pageBlockList | pageBlockBlockquote | pageBlockPullquote | pageBlockPhoto | pageBlockVideo | pageBlockCover | pageBlockEmbed | pageBlockEmbedPost | pageBlockCollage | pageBlockSlideshow | pageBlockChannel | pageBlockAudio | pageBlockKicker | pageBlockTable | pageBlockOrderedList | pageBlockDetails | pageBlockRelatedArticles | pageBlockMap)} PageBlock
 */

/**
 * @see {@link https://core.telegram.org/type/PhoneCallDiscardReason}
 * @typedef {(phoneCallDiscardReasonMissed | phoneCallDiscardReasonDisconnect | phoneCallDiscardReasonHangup | phoneCallDiscardReasonBusy)} PhoneCallDiscardReason
 */

/**
 * @see {@link https://core.telegram.org/type/DataJSON}
 * @typedef {(dataJSON)} DataJSON
 */

/**
 * @see {@link https://core.telegram.org/type/LabeledPrice}
 * @typedef {(labeledPrice)} LabeledPrice
 */

/**
 * @see {@link https://core.telegram.org/type/Invoice}
 * @typedef {(invoice)} Invoice
 */

/**
 * @see {@link https://core.telegram.org/type/PaymentCharge}
 * @typedef {(paymentCharge)} PaymentCharge
 */

/**
 * @see {@link https://core.telegram.org/type/PostAddress}
 * @typedef {(postAddress)} PostAddress
 */

/**
 * @see {@link https://core.telegram.org/type/PaymentRequestedInfo}
 * @typedef {(paymentRequestedInfo)} PaymentRequestedInfo
 */

/**
 * @see {@link https://core.telegram.org/type/PaymentSavedCredentials}
 * @typedef {(paymentSavedCredentialsCard)} PaymentSavedCredentials
 */

/**
 * @see {@link https://core.telegram.org/type/WebDocument}
 * @typedef {(webDocument | webDocumentNoProxy)} WebDocument
 */

/**
 * @see {@link https://core.telegram.org/type/InputWebDocument}
 * @typedef {(inputWebDocument)} InputWebDocument
 */

/**
 * @see {@link https://core.telegram.org/type/InputWebFileLocation}
 * @typedef {(inputWebFileLocation | inputWebFileGeoPointLocation)} InputWebFileLocation
 */

/**
 * @see {@link https://core.telegram.org/type/upload_WebFile}
 * @typedef {(upload_webFile)} upload_WebFile
 */

/**
 * @see {@link https://core.telegram.org/type/payments_PaymentForm}
 * @typedef {(payments_paymentForm)} payments_PaymentForm
 */

/**
 * @see {@link https://core.telegram.org/type/payments_ValidatedRequestedInfo}
 * @typedef {(payments_validatedRequestedInfo)} payments_ValidatedRequestedInfo
 */

/**
 * @see {@link https://core.telegram.org/type/payments_PaymentResult}
 * @typedef {(payments_paymentResult | payments_paymentVerficationNeeded)} payments_PaymentResult
 */

/**
 * @see {@link https://core.telegram.org/type/payments_PaymentReceipt}
 * @typedef {(payments_paymentReceipt)} payments_PaymentReceipt
 */

/**
 * @see {@link https://core.telegram.org/type/payments_SavedInfo}
 * @typedef {(payments_savedInfo)} payments_SavedInfo
 */

/**
 * @see {@link https://core.telegram.org/type/InputPaymentCredentials}
 * @typedef {(inputPaymentCredentialsSaved | inputPaymentCredentials | inputPaymentCredentialsApplePay | inputPaymentCredentialsAndroidPay)} InputPaymentCredentials
 */

/**
 * @see {@link https://core.telegram.org/type/account_TmpPassword}
 * @typedef {(account_tmpPassword)} account_TmpPassword
 */

/**
 * @see {@link https://core.telegram.org/type/ShippingOption}
 * @typedef {(shippingOption)} ShippingOption
 */

/**
 * @see {@link https://core.telegram.org/type/InputStickerSetItem}
 * @typedef {(inputStickerSetItem)} InputStickerSetItem
 */

/**
 * @see {@link https://core.telegram.org/type/InputPhoneCall}
 * @typedef {(inputPhoneCall)} InputPhoneCall
 */

/**
 * @see {@link https://core.telegram.org/type/PhoneCall}
 * @typedef {(phoneCallEmpty | phoneCallWaiting | phoneCallRequested | phoneCallAccepted | phoneCall | phoneCallDiscarded)} PhoneCall
 */

/**
 * @see {@link https://core.telegram.org/type/PhoneConnection}
 * @typedef {(phoneConnection)} PhoneConnection
 */

/**
 * @see {@link https://core.telegram.org/type/PhoneCallProtocol}
 * @typedef {(phoneCallProtocol)} PhoneCallProtocol
 */

/**
 * @see {@link https://core.telegram.org/type/phone_PhoneCall}
 * @typedef {(phone_phoneCall)} phone_PhoneCall
 */

/**
 * @see {@link https://core.telegram.org/type/upload_CdnFile}
 * @typedef {(upload_cdnFileReuploadNeeded | upload_cdnFile)} upload_CdnFile
 */

/**
 * @see {@link https://core.telegram.org/type/CdnPublicKey}
 * @typedef {(cdnPublicKey)} CdnPublicKey
 */

/**
 * @see {@link https://core.telegram.org/type/CdnConfig}
 * @typedef {(cdnConfig)} CdnConfig
 */

/**
 * @see {@link https://core.telegram.org/type/LangPackString}
 * @typedef {(langPackString | langPackStringPluralized | langPackStringDeleted)} LangPackString
 */

/**
 * @see {@link https://core.telegram.org/type/LangPackDifference}
 * @typedef {(langPackDifference)} LangPackDifference
 */

/**
 * @see {@link https://core.telegram.org/type/LangPackLanguage}
 * @typedef {(langPackLanguage)} LangPackLanguage
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelAdminRights}
 * @typedef {(channelAdminRights)} ChannelAdminRights
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelBannedRights}
 * @typedef {(channelBannedRights)} ChannelBannedRights
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelAdminLogEventAction}
 * @typedef {(channelAdminLogEventActionChangeTitle | channelAdminLogEventActionChangeAbout | channelAdminLogEventActionChangeUsername | channelAdminLogEventActionChangePhoto | channelAdminLogEventActionToggleInvites | channelAdminLogEventActionToggleSignatures | channelAdminLogEventActionUpdatePinned | channelAdminLogEventActionEditMessage | channelAdminLogEventActionDeleteMessage | channelAdminLogEventActionParticipantJoin | channelAdminLogEventActionParticipantLeave | channelAdminLogEventActionParticipantInvite | channelAdminLogEventActionParticipantToggleBan | channelAdminLogEventActionParticipantToggleAdmin | channelAdminLogEventActionChangeStickerSet | channelAdminLogEventActionTogglePreHistoryHidden)} ChannelAdminLogEventAction
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelAdminLogEvent}
 * @typedef {(channelAdminLogEvent)} ChannelAdminLogEvent
 */

/**
 * @see {@link https://core.telegram.org/type/channels_AdminLogResults}
 * @typedef {(channels_adminLogResults)} channels_AdminLogResults
 */

/**
 * @see {@link https://core.telegram.org/type/ChannelAdminLogEventsFilter}
 * @typedef {(channelAdminLogEventsFilter)} ChannelAdminLogEventsFilter
 */

/**
 * @see {@link https://core.telegram.org/type/PopularContact}
 * @typedef {(popularContact)} PopularContact
 */

/**
 * @see {@link https://core.telegram.org/type/messages_FavedStickers}
 * @typedef {(messages_favedStickersNotModified | messages_favedStickers)} messages_FavedStickers
 */

/**
 * @see {@link https://core.telegram.org/type/RecentMeUrl}
 * @typedef {(recentMeUrlUnknown | recentMeUrlUser | recentMeUrlChat | recentMeUrlChatInvite | recentMeUrlStickerSet)} RecentMeUrl
 */

/**
 * @see {@link https://core.telegram.org/type/help_RecentMeUrls}
 * @typedef {(help_recentMeUrls)} help_RecentMeUrls
 */

/**
 * @see {@link https://core.telegram.org/type/InputSingleMedia}
 * @typedef {(inputSingleMedia)} InputSingleMedia
 */

/**
 * @see {@link https://core.telegram.org/type/WebAuthorization}
 * @typedef {(webAuthorization)} WebAuthorization
 */

/**
 * @see {@link https://core.telegram.org/type/account_WebAuthorizations}
 * @typedef {(account_webAuthorizations)} account_WebAuthorizations
 */

/**
 * @see {@link https://core.telegram.org/type/InputMessage}
 * @typedef {(inputMessageID | inputMessageReplyTo | inputMessagePinned)} InputMessage
 */

/**
 * @see {@link https://core.telegram.org/type/InputDialogPeer}
 * @typedef {(inputDialogPeer)} InputDialogPeer
 */

/**
 * @see {@link https://core.telegram.org/type/DialogPeer}
 * @typedef {(dialogPeer)} DialogPeer
 */

/**
 * @see {@link https://core.telegram.org/type/messages_FoundStickerSets}
 * @typedef {(messages_foundStickerSetsNotModified | messages_foundStickerSets)} messages_FoundStickerSets
 */

/**
 * @see {@link https://core.telegram.org/type/FileHash}
 * @typedef {(fileHash)} FileHash
 */

/**
 * @see {@link https://core.telegram.org/type/InputClientProxy}
 * @typedef {(inputClientProxy)} InputClientProxy
 */

/**
 * @see {@link https://core.telegram.org/type/help_ProxyData}
 * @typedef {(help_proxyDataEmpty | help_proxyDataPromo)} help_ProxyData
 */

/**
 * @see {@link https://core.telegram.org/type/help_TermsOfServiceUpdate}
 * @typedef {(help_termsOfServiceUpdateEmpty | help_termsOfServiceUpdate)} help_TermsOfServiceUpdate
 */

/**
 * @see {@link https://core.telegram.org/type/InputSecureFile}
 * @typedef {(inputSecureFileUploaded | inputSecureFile)} InputSecureFile
 */

/**
 * @see {@link https://core.telegram.org/type/SecureFile}
 * @typedef {(secureFileEmpty | secureFile)} SecureFile
 */

/**
 * @see {@link https://core.telegram.org/type/SecureData}
 * @typedef {(secureData)} SecureData
 */

/**
 * @see {@link https://core.telegram.org/type/SecurePlainData}
 * @typedef {(securePlainPhone | securePlainEmail)} SecurePlainData
 */

/**
 * @see {@link https://core.telegram.org/type/SecureValueType}
 * @typedef {(secureValueTypePersonalDetails | secureValueTypePassport | secureValueTypeDriverLicense | secureValueTypeIdentityCard | secureValueTypeInternalPassport | secureValueTypeAddress | secureValueTypeUtilityBill | secureValueTypeBankStatement | secureValueTypeRentalAgreement | secureValueTypePassportRegistration | secureValueTypeTemporaryRegistration | secureValueTypePhone | secureValueTypeEmail)} SecureValueType
 */

/**
 * @see {@link https://core.telegram.org/type/SecureValue}
 * @typedef {(secureValue)} SecureValue
 */

/**
 * @see {@link https://core.telegram.org/type/InputSecureValue}
 * @typedef {(inputSecureValue)} InputSecureValue
 */

/**
 * @see {@link https://core.telegram.org/type/SecureValueHash}
 * @typedef {(secureValueHash)} SecureValueHash
 */

/**
 * @see {@link https://core.telegram.org/type/SecureValueError}
 * @typedef {(secureValueErrorData | secureValueErrorFrontSide | secureValueErrorReverseSide | secureValueErrorSelfie | secureValueErrorFile | secureValueErrorFiles | secureValueError | secureValueErrorTranslationFile | secureValueErrorTranslationFiles)} SecureValueError
 */

/**
 * @see {@link https://core.telegram.org/type/SecureCredentialsEncrypted}
 * @typedef {(secureCredentialsEncrypted)} SecureCredentialsEncrypted
 */

/**
 * @see {@link https://core.telegram.org/type/account_AuthorizationForm}
 * @typedef {(account_authorizationForm)} account_AuthorizationForm
 */

/**
 * @see {@link https://core.telegram.org/type/account_SentEmailCode}
 * @typedef {(account_sentEmailCode)} account_SentEmailCode
 */

/**
 * @see {@link https://core.telegram.org/type/help_DeepLinkInfo}
 * @typedef {(help_deepLinkInfoEmpty | help_deepLinkInfo)} help_DeepLinkInfo
 */

/**
 * @see {@link https://core.telegram.org/type/SavedContact}
 * @typedef {(savedPhoneContact)} SavedContact
 */

/**
 * @see {@link https://core.telegram.org/type/account_Takeout}
 * @typedef {(account_takeout)} account_Takeout
 */

/**
 * @see {@link https://core.telegram.org/type/PasswordKdfAlgo}
 * @typedef {(passwordKdfAlgoUnknown | passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)} PasswordKdfAlgo
 */

/**
 * @see {@link https://core.telegram.org/type/SecurePasswordKdfAlgo}
 * @typedef {(securePasswordKdfAlgoUnknown | securePasswordKdfAlgoPBKDF2HMACSHA512iter100000 | securePasswordKdfAlgoSHA512)} SecurePasswordKdfAlgo
 */

/**
 * @see {@link https://core.telegram.org/type/SecureSecretSettings}
 * @typedef {(secureSecretSettings)} SecureSecretSettings
 */

/**
 * @see {@link https://core.telegram.org/type/InputCheckPasswordSRP}
 * @typedef {(inputCheckPasswordEmpty | inputCheckPasswordSRP)} InputCheckPasswordSRP
 */

/**
 * @see {@link https://core.telegram.org/type/SecureRequiredType}
 * @typedef {(secureRequiredType | secureRequiredTypeOneOf)} SecureRequiredType
 */

/**
 * @see {@link https://core.telegram.org/type/help_PassportConfig}
 * @typedef {(help_passportConfigNotModified | help_passportConfig)} help_PassportConfig
 */

/**
 * @see {@link https://core.telegram.org/type/PageTableCell}
 * @typedef {(pageTableCell)} PageTableCell
 */

/**
 * @see {@link https://core.telegram.org/type/PageTableRow}
 * @typedef {(pageTableRow)} PageTableRow
 */

/**
 * @see {@link https://core.telegram.org/type/PageCaption}
 * @typedef {(pageCaption)} PageCaption
 */

/**
 * @see {@link https://core.telegram.org/type/PageListItem}
 * @typedef {(pageListItemText | pageListItemBlocks)} PageListItem
 */

/**
 * @see {@link https://core.telegram.org/type/PageListOrderedItem}
 * @typedef {(pageListOrderedItemText | pageListOrderedItemBlocks)} PageListOrderedItem
 */

/**
 * @see {@link https://core.telegram.org/type/PageRelatedArticle}
 * @typedef {(pageRelatedArticle)} PageRelatedArticle
 */

/**
 * @see {@link https://core.telegram.org/type/Page}
 * @typedef {(page)} Page
 */

/**
 * @see {@link https://core.telegram.org/type/help_SupportName}
 * @typedef {(help_supportName)} help_SupportName
 */

/**
 * @see {@link https://core.telegram.org/type/help_UserInfo}
 * @typedef {(help_userInfoEmpty | help_userInfo)} help_UserInfo
 */


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

class ContestMtProto extends Ctor {
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

class AuthMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/auth.sendCode}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.allow_flashcall
     * @param {string} config.phone_number
     * @param {?Bool} config.current_number
     * @param {int} config.api_id
     * @param {string} config.api_hash
     * @returns {auth_SentCode}
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
     * @returns {auth_Authorization}
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
     * @returns {auth_Authorization}
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
     * @returns {auth_ExportedAuthorization}
     */
    exportAuthorization(config) {
        return this.send('auth.exportAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.importAuthorization}
     * @param {Object} config
     * @param {int} config.id
     * @param {bytes} config.bytes
     * @returns {auth_Authorization}
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
     * @returns {auth_Authorization}
     */
    importBotAuthorization(config) {
        return this.send('auth.importBotAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.checkPassword}
     * @param {Object} config
     * @param {InputCheckPasswordSRP} config.password
     * @returns {auth_Authorization}
     */
    checkPassword(config) {
        return this.send('auth.checkPassword', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.requestPasswordRecovery}
     * @returns {auth_PasswordRecovery}
     */
    requestPasswordRecovery() {
        return this.send('auth.requestPasswordRecovery')
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.recoverPassword}
     * @param {Object} config
     * @param {string} config.code
     * @returns {auth_Authorization}
     */
    recoverPassword(config) {
        return this.send('auth.recoverPassword', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/auth.resendCode}
     * @param {Object} config
     * @param {string} config.phone_number
     * @param {string} config.phone_code_hash
     * @returns {auth_SentCode}
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
     * @param {Array.<long>} config.except_auth_keys
     * @returns {Bool}
     */
    dropTempAuthKeys(config) {
        return this.send('auth.dropTempAuthKeys', config)
    }
}

class AccountMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/account.registerDevice}
     * @param {Object} config
     * @param {int} config.token_type
     * @param {string} config.token
     * @param {Bool} config.app_sandbox
     * @param {bytes} config.secret
     * @param {Array.<int>} config.other_uids
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
     * @param {Array.<int>} config.other_uids
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
     * @param {number} config.flags
     * @param {?string} config.first_name
     * @param {?string} config.last_name
     * @param {?string} config.about
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
     * @returns {Array.<WallPaper>}
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
     * @returns {account_PrivacyRules}
     */
    getPrivacy(config) {
        return this.send('account.getPrivacy', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.setPrivacy}
     * @param {Object} config
     * @param {InputPrivacyKey} config.key
     * @param {Array.<InputPrivacyRule>} config.rules
     * @returns {account_PrivacyRules}
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
     * @param {number} config.flags
     * @param {?true} config.allow_flashcall
     * @param {string} config.phone_number
     * @param {?Bool} config.current_number
     * @returns {auth_SentCode}
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
     * @returns {account_Authorizations}
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
     * @returns {account_Password}
     */
    getPassword() {
        return this.send('account.getPassword')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getPasswordSettings}
     * @param {Object} config
     * @param {InputCheckPasswordSRP} config.password
     * @returns {account_PasswordSettings}
     */
    getPasswordSettings(config) {
        return this.send('account.getPasswordSettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.updatePasswordSettings}
     * @param {Object} config
     * @param {InputCheckPasswordSRP} config.password
     * @param {account_PasswordInputSettings} config.new_settings
     * @returns {Bool}
     */
    updatePasswordSettings(config) {
        return this.send('account.updatePasswordSettings', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.sendConfirmPhoneCode}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.allow_flashcall
     * @param {string} config.hash
     * @param {?Bool} config.current_number
     * @returns {auth_SentCode}
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
     * @returns {account_TmpPassword}
     */
    getTmpPassword(config) {
        return this.send('account.getTmpPassword', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getWebAuthorizations}
     * @returns {account_WebAuthorizations}
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
     * @returns {Array.<SecureValue>}
     */
    getAllSecureValues() {
        return this.send('account.getAllSecureValues')
    }

    /**
     * @see {@link https://core.telegram.org/method/account.getSecureValue}
     * @param {Object} config
     * @param {Array.<SecureValueType>} config.types
     * @returns {Array.<SecureValue>}
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
     * @param {Array.<SecureValueType>} config.types
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
     * @returns {account_AuthorizationForm}
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
     * @param {Array.<SecureValueHash>} config.value_hashes
     * @param {SecureCredentialsEncrypted} config.credentials
     * @returns {Bool}
     */
    acceptAuthorization(config) {
        return this.send('account.acceptAuthorization', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.sendVerifyPhoneCode}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.allow_flashcall
     * @param {string} config.phone_number
     * @param {?Bool} config.current_number
     * @returns {auth_SentCode}
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
     * @returns {account_SentEmailCode}
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
     * @param {number} config.flags
     * @param {?true} config.contacts
     * @param {?true} config.message_users
     * @param {?true} config.message_chats
     * @param {?true} config.message_megagroups
     * @param {?true} config.message_channels
     * @param {?true} config.files
     * @param {?int} config.file_max_size
     * @returns {account_Takeout}
     */
    initTakeoutSession(config) {
        return this.send('account.initTakeoutSession', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/account.finishTakeoutSession}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.success
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

class UsersMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/users.getUsers}
     * @param {Object} config
     * @param {Array.<InputUser>} config.id
     * @returns {Array.<User>}
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
     * @param {Array.<SecureValueError>} config.errors
     * @returns {Bool}
     */
    setSecureValueErrors(config) {
        return this.send('users.setSecureValueErrors', config)
    }
}

class ContactsMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/contacts.getContactIDs}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {Array.<int>}
     */
    getContactIDs(config) {
        return this.send('contacts.getContactIDs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getStatuses}
     * @returns {Array.<ContactStatus>}
     */
    getStatuses() {
        return this.send('contacts.getStatuses')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getContacts}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {contacts_Contacts}
     */
    getContacts(config) {
        return this.send('contacts.getContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.importContacts}
     * @param {Object} config
     * @param {Array.<InputContact>} config.contacts
     * @returns {contacts_ImportedContacts}
     */
    importContacts(config) {
        return this.send('contacts.importContacts', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.deleteContact}
     * @param {Object} config
     * @param {InputUser} config.id
     * @returns {contacts_Link}
     */
    deleteContact(config) {
        return this.send('contacts.deleteContact', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.deleteContacts}
     * @param {Object} config
     * @param {Array.<InputUser>} config.id
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
     * @returns {contacts_Blocked}
     */
    getBlocked(config) {
        return this.send('contacts.getBlocked', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.exportCard}
     * @returns {Array.<int>}
     */
    exportCard() {
        return this.send('contacts.exportCard')
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.importCard}
     * @param {Object} config
     * @param {Array.<int>} config.export_card
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
     * @returns {contacts_Found}
     */
    search(config) {
        return this.send('contacts.search', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.resolveUsername}
     * @param {Object} config
     * @param {string} config.username
     * @returns {contacts_ResolvedPeer}
     */
    resolveUsername(config) {
        return this.send('contacts.resolveUsername', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/contacts.getTopPeers}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.correspondents
     * @param {?true} config.bots_pm
     * @param {?true} config.bots_inline
     * @param {?true} config.phone_calls
     * @param {?true} config.groups
     * @param {?true} config.channels
     * @param {int} config.offset
     * @param {int} config.limit
     * @param {int} config.hash
     * @returns {contacts_TopPeers}
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
     * @returns {Array.<SavedContact>}
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

class MessagesMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/messages.getMessages}
     * @param {Object} config
     * @param {Array.<InputMessage>} config.id
     * @returns {messages_Messages}
     */
    getMessages(config) {
        return this.send('messages.getMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDialogs}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.exclude_pinned
     * @param {int} config.offset_date
     * @param {int} config.offset_id
     * @param {InputPeer} config.offset_peer
     * @param {int} config.limit
     * @param {int} config.hash
     * @returns {messages_Dialogs}
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
     * @returns {messages_Messages}
     */
    getHistory(config) {
        return this.send('messages.getHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.search}
     * @param {Object} config
     * @param {number} config.flags
     * @param {InputPeer} config.peer
     * @param {string} config.q
     * @param {?InputUser} config.from_id
     * @param {MessagesFilter} config.filter
     * @param {int} config.min_date
     * @param {int} config.max_date
     * @param {int} config.offset_id
     * @param {int} config.add_offset
     * @param {int} config.limit
     * @param {int} config.max_id
     * @param {int} config.min_id
     * @param {int} config.hash
     * @returns {messages_Messages}
     */
    search(config) {
        return this.send('messages.search', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readHistory}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @param {int} config.max_id
     * @returns {messages_AffectedMessages}
     */
    readHistory(config) {
        return this.send('messages.readHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteHistory}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.just_clear
     * @param {InputPeer} config.peer
     * @param {int} config.max_id
     * @returns {messages_AffectedHistory}
     */
    deleteHistory(config) {
        return this.send('messages.deleteHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.deleteMessages}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.revoke
     * @param {Array.<int>} config.id
     * @returns {messages_AffectedMessages}
     */
    deleteMessages(config) {
        return this.send('messages.deleteMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.receivedMessages}
     * @param {Object} config
     * @param {int} config.max_id
     * @returns {Array.<ReceivedNotifyMessage>}
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
     * @param {number} config.flags
     * @param {?true} config.no_webpage
     * @param {?true} config.silent
     * @param {?true} config.background
     * @param {?true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {?int} config.reply_to_msg_id
     * @param {string} config.message
     * @param {long} config.random_id
     * @param {?ReplyMarkup} config.reply_markup
     * @param {?Array.<MessageEntity>} config.entities
     * @returns {Updates}
     */
    sendMessage(config) {
        return this.send('messages.sendMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendMedia}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.silent
     * @param {?true} config.background
     * @param {?true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {?int} config.reply_to_msg_id
     * @param {InputMedia} config.media
     * @param {string} config.message
     * @param {long} config.random_id
     * @param {?ReplyMarkup} config.reply_markup
     * @param {?Array.<MessageEntity>} config.entities
     * @returns {Updates}
     */
    sendMedia(config) {
        return this.send('messages.sendMedia', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.forwardMessages}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.silent
     * @param {?true} config.background
     * @param {?true} config.with_my_score
     * @param {?true} config.grouped
     * @param {InputPeer} config.from_peer
     * @param {Array.<int>} config.id
     * @param {Array.<long>} config.random_id
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
     * @param {Array.<int>} config.id
     * @param {ReportReason} config.reason
     * @returns {Bool}
     */
    report(config) {
        return this.send('messages.report', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getChats}
     * @param {Object} config
     * @param {Array.<int>} config.id
     * @returns {messages_Chats}
     */
    getChats(config) {
        return this.send('messages.getChats', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getFullChat}
     * @param {Object} config
     * @param {int} config.chat_id
     * @returns {messages_ChatFull}
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
     * @param {Array.<InputUser>} config.users
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
     * @returns {messages_DhConfig}
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
     * @returns {messages_SentEncryptedMessage}
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
     * @returns {messages_SentEncryptedMessage}
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
     * @returns {messages_SentEncryptedMessage}
     */
    sendEncryptedService(config) {
        return this.send('messages.sendEncryptedService', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.receivedQueue}
     * @param {Object} config
     * @param {int} config.max_qts
     * @returns {Array.<long>}
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
     * @param {Array.<int>} config.id
     * @returns {messages_AffectedMessages}
     */
    readMessageContents(config) {
        return this.send('messages.readMessageContents', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getStickers}
     * @param {Object} config
     * @param {string} config.emoticon
     * @param {int} config.hash
     * @returns {messages_Stickers}
     */
    getStickers(config) {
        return this.send('messages.getStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAllStickers}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages_AllStickers}
     */
    getAllStickers(config) {
        return this.send('messages.getAllStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getWebPagePreview}
     * @param {Object} config
     * @param {number} config.flags
     * @param {string} config.message
     * @param {?Array.<MessageEntity>} config.entities
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
     * @returns {messages_StickerSet}
     */
    getStickerSet(config) {
        return this.send('messages.getStickerSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.installStickerSet}
     * @param {Object} config
     * @param {InputStickerSet} config.stickerset
     * @param {Bool} config.archived
     * @returns {messages_StickerSetInstallResult}
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
     * @param {Array.<int>} config.id
     * @param {Bool} config.increment
     * @returns {Array.<int>}
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
     * @returns {messages_Messages}
     */
    searchGlobal(config) {
        return this.send('messages.searchGlobal', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reorderStickerSets}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.masks
     * @param {Array.<long>} config.order
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
     * @returns {messages_FoundGifs}
     */
    searchGifs(config) {
        return this.send('messages.searchGifs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getSavedGifs}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages_SavedGifs}
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
     * @param {number} config.flags
     * @param {InputUser} config.bot
     * @param {InputPeer} config.peer
     * @param {?InputGeoPoint} config.geo_point
     * @param {string} config.query
     * @param {string} config.offset
     * @returns {messages_BotResults}
     */
    getInlineBotResults(config) {
        return this.send('messages.getInlineBotResults', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setInlineBotResults}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.gallery
     * @param {?true} config.private
     * @param {long} config.query_id
     * @param {Array.<InputBotInlineResult>} config.results
     * @param {int} config.cache_time
     * @param {?string} config.next_offset
     * @param {?InlineBotSwitchPM} config.switch_pm
     * @returns {Bool}
     */
    setInlineBotResults(config) {
        return this.send('messages.setInlineBotResults', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendInlineBotResult}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.silent
     * @param {?true} config.background
     * @param {?true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {?int} config.reply_to_msg_id
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
     * @returns {messages_MessageEditData}
     */
    getMessageEditData(config) {
        return this.send('messages.getMessageEditData', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editMessage}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.no_webpage
     * @param {?true} config.stop_geo_live
     * @param {InputPeer} config.peer
     * @param {int} config.id
     * @param {?string} config.message
     * @param {?InputMedia} config.media
     * @param {?ReplyMarkup} config.reply_markup
     * @param {?Array.<MessageEntity>} config.entities
     * @param {?InputGeoPoint} config.geo_point
     * @returns {Updates}
     */
    editMessage(config) {
        return this.send('messages.editMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.editInlineBotMessage}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.no_webpage
     * @param {?true} config.stop_geo_live
     * @param {InputBotInlineMessageID} config.id
     * @param {?string} config.message
     * @param {?InputMedia} config.media
     * @param {?ReplyMarkup} config.reply_markup
     * @param {?Array.<MessageEntity>} config.entities
     * @param {?InputGeoPoint} config.geo_point
     * @returns {Bool}
     */
    editInlineBotMessage(config) {
        return this.send('messages.editInlineBotMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getBotCallbackAnswer}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.game
     * @param {InputPeer} config.peer
     * @param {int} config.msg_id
     * @param {?bytes} config.data
     * @returns {messages_BotCallbackAnswer}
     */
    getBotCallbackAnswer(config) {
        return this.send('messages.getBotCallbackAnswer', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setBotCallbackAnswer}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.alert
     * @param {long} config.query_id
     * @param {?string} config.message
     * @param {?string} config.url
     * @param {int} config.cache_time
     * @returns {Bool}
     */
    setBotCallbackAnswer(config) {
        return this.send('messages.setBotCallbackAnswer', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getPeerDialogs}
     * @param {Object} config
     * @param {Array.<InputDialogPeer>} config.peers
     * @returns {messages_PeerDialogs}
     */
    getPeerDialogs(config) {
        return this.send('messages.getPeerDialogs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.saveDraft}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.no_webpage
     * @param {?int} config.reply_to_msg_id
     * @param {InputPeer} config.peer
     * @param {string} config.message
     * @param {?Array.<MessageEntity>} config.entities
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
     * @returns {messages_FeaturedStickers}
     */
    getFeaturedStickers(config) {
        return this.send('messages.getFeaturedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readFeaturedStickers}
     * @param {Object} config
     * @param {Array.<long>} config.id
     * @returns {Bool}
     */
    readFeaturedStickers(config) {
        return this.send('messages.readFeaturedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getRecentStickers}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.attached
     * @param {int} config.hash
     * @returns {messages_RecentStickers}
     */
    getRecentStickers(config) {
        return this.send('messages.getRecentStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.saveRecentSticker}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.attached
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
     * @param {number} config.flags
     * @param {?true} config.attached
     * @returns {Bool}
     */
    clearRecentStickers(config) {
        return this.send('messages.clearRecentStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getArchivedStickers}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.masks
     * @param {long} config.offset_id
     * @param {int} config.limit
     * @returns {messages_ArchivedStickers}
     */
    getArchivedStickers(config) {
        return this.send('messages.getArchivedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getMaskStickers}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {messages_AllStickers}
     */
    getMaskStickers(config) {
        return this.send('messages.getMaskStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAttachedStickers}
     * @param {Object} config
     * @param {InputStickeredMedia} config.media
     * @returns {Array.<StickerSetCovered>}
     */
    getAttachedStickers(config) {
        return this.send('messages.getAttachedStickers', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setGameScore}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.edit_message
     * @param {?true} config.force
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
     * @param {number} config.flags
     * @param {?true} config.edit_message
     * @param {?true} config.force
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
     * @returns {messages_HighScores}
     */
    getGameHighScores(config) {
        return this.send('messages.getGameHighScores', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getInlineGameHighScores}
     * @param {Object} config
     * @param {InputBotInlineMessageID} config.id
     * @param {InputUser} config.user_id
     * @returns {messages_HighScores}
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
     * @returns {messages_Chats}
     */
    getCommonChats(config) {
        return this.send('messages.getCommonChats', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getAllChats}
     * @param {Object} config
     * @param {Array.<int>} config.except_ids
     * @returns {messages_Chats}
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
     * @param {number} config.flags
     * @param {?true} config.pinned
     * @param {InputDialogPeer} config.peer
     * @returns {Bool}
     */
    toggleDialogPin(config) {
        return this.send('messages.toggleDialogPin', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.reorderPinnedDialogs}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.force
     * @param {Array.<InputDialogPeer>} config.order
     * @returns {Bool}
     */
    reorderPinnedDialogs(config) {
        return this.send('messages.reorderPinnedDialogs', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getPinnedDialogs}
     * @returns {messages_PeerDialogs}
     */
    getPinnedDialogs() {
        return this.send('messages.getPinnedDialogs')
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setBotShippingResults}
     * @param {Object} config
     * @param {number} config.flags
     * @param {long} config.query_id
     * @param {?string} config.error
     * @param {?Array.<ShippingOption>} config.shipping_options
     * @returns {Bool}
     */
    setBotShippingResults(config) {
        return this.send('messages.setBotShippingResults', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.setBotPrecheckoutResults}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.success
     * @param {long} config.query_id
     * @param {?string} config.error
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
     * @returns {messages_FavedStickers}
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
     * @returns {messages_Messages}
     */
    getUnreadMentions(config) {
        return this.send('messages.getUnreadMentions', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.readMentions}
     * @param {Object} config
     * @param {InputPeer} config.peer
     * @returns {messages_AffectedHistory}
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
     * @returns {messages_Messages}
     */
    getRecentLocations(config) {
        return this.send('messages.getRecentLocations', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.sendMultiMedia}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.silent
     * @param {?true} config.background
     * @param {?true} config.clear_draft
     * @param {InputPeer} config.peer
     * @param {?int} config.reply_to_msg_id
     * @param {Array.<InputSingleMedia>} config.multi_media
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
     * @param {number} config.flags
     * @param {?true} config.exclude_featured
     * @param {string} config.q
     * @param {int} config.hash
     * @returns {messages_FoundStickerSets}
     */
    searchStickerSets(config) {
        return this.send('messages.searchStickerSets', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getSplitRanges}
     * @returns {Array.<MessageRange>}
     */
    getSplitRanges() {
        return this.send('messages.getSplitRanges')
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.markDialogUnread}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.unread
     * @param {InputDialogPeer} config.peer
     * @returns {Bool}
     */
    markDialogUnread(config) {
        return this.send('messages.markDialogUnread', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/messages.getDialogUnreadMarks}
     * @returns {Array.<DialogPeer>}
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
     * @param {number} config.flags
     * @param {?true} config.silent
     * @param {InputPeer} config.peer
     * @param {int} config.id
     * @returns {Updates}
     */
    updatePinnedMessage(config) {
        return this.send('messages.updatePinnedMessage', config)
    }
}

class UpdatesMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/updates.getState}
     * @returns {updates_State}
     */
    getState() {
        return this.send('updates.getState')
    }

    /**
     * @see {@link https://core.telegram.org/method/updates.getDifference}
     * @param {Object} config
     * @param {number} config.flags
     * @param {int} config.pts
     * @param {?int} config.pts_total_limit
     * @param {int} config.date
     * @param {int} config.qts
     * @returns {updates_Difference}
     */
    getDifference(config) {
        return this.send('updates.getDifference', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/updates.getChannelDifference}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.force
     * @param {InputChannel} config.channel
     * @param {ChannelMessagesFilter} config.filter
     * @param {int} config.pts
     * @param {int} config.limit
     * @returns {updates_ChannelDifference}
     */
    getChannelDifference(config) {
        return this.send('updates.getChannelDifference', config)
    }
}

class PhotosMtProto extends Ctor {
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
     * @returns {photos_Photo}
     */
    uploadProfilePhoto(config) {
        return this.send('photos.uploadProfilePhoto', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/photos.deletePhotos}
     * @param {Object} config
     * @param {Array.<InputPhoto>} config.id
     * @returns {Array.<long>}
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
     * @returns {photos_Photos}
     */
    getUserPhotos(config) {
        return this.send('photos.getUserPhotos', config)
    }
}

class UploadMtProto extends Ctor {
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
     * @returns {upload_File}
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
     * @returns {upload_WebFile}
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
     * @returns {upload_CdnFile}
     */
    getCdnFile(config) {
        return this.send('upload.getCdnFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.reuploadCdnFile}
     * @param {Object} config
     * @param {bytes} config.file_token
     * @param {bytes} config.request_token
     * @returns {Array.<FileHash>}
     */
    reuploadCdnFile(config) {
        return this.send('upload.reuploadCdnFile', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getCdnFileHashes}
     * @param {Object} config
     * @param {bytes} config.file_token
     * @param {int} config.offset
     * @returns {Array.<FileHash>}
     */
    getCdnFileHashes(config) {
        return this.send('upload.getCdnFileHashes', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/upload.getFileHashes}
     * @param {Object} config
     * @param {InputFileLocation} config.location
     * @param {int} config.offset
     * @returns {Array.<FileHash>}
     */
    getFileHashes(config) {
        return this.send('upload.getFileHashes', config)
    }
}

class HelpMtProto extends Ctor {
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
     * @returns {help_AppUpdate}
     */
    getAppUpdate(config) {
        return this.send('help.getAppUpdate', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.saveAppLog}
     * @param {Object} config
     * @param {Array.<InputAppEvent>} config.events
     * @returns {Bool}
     */
    saveAppLog(config) {
        return this.send('help.saveAppLog', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getInviteText}
     * @returns {help_InviteText}
     */
    getInviteText() {
        return this.send('help.getInviteText')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getSupport}
     * @returns {help_Support}
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
     * @returns {help_RecentMeUrls}
     */
    getRecentMeUrls(config) {
        return this.send('help.getRecentMeUrls', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getProxyData}
     * @returns {help_ProxyData}
     */
    getProxyData() {
        return this.send('help.getProxyData')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getTermsOfServiceUpdate}
     * @returns {help_TermsOfServiceUpdate}
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
     * @returns {help_DeepLinkInfo}
     */
    getDeepLinkInfo(config) {
        return this.send('help.getDeepLinkInfo', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getPassportConfig}
     * @param {Object} config
     * @param {int} config.hash
     * @returns {help_PassportConfig}
     */
    getPassportConfig(config) {
        return this.send('help.getPassportConfig', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getSupportName}
     * @returns {help_SupportName}
     */
    getSupportName() {
        return this.send('help.getSupportName')
    }

    /**
     * @see {@link https://core.telegram.org/method/help.getUserInfo}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @returns {help_UserInfo}
     */
    getUserInfo(config) {
        return this.send('help.getUserInfo', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/help.editUserInfo}
     * @param {Object} config
     * @param {InputUser} config.user_id
     * @param {string} config.message
     * @param {Array.<MessageEntity>} config.entities
     * @returns {help_UserInfo}
     */
    editUserInfo(config) {
        return this.send('help.editUserInfo', config)
    }
}

class ChannelsMtProto extends Ctor {
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
     * @param {Array.<int>} config.id
     * @returns {messages_AffectedMessages}
     */
    deleteMessages(config) {
        return this.send('channels.deleteMessages', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.deleteUserHistory}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @returns {messages_AffectedHistory}
     */
    deleteUserHistory(config) {
        return this.send('channels.deleteUserHistory', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.reportSpam}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @param {Array.<int>} config.id
     * @returns {Bool}
     */
    reportSpam(config) {
        return this.send('channels.reportSpam', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getMessages}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {Array.<InputMessage>} config.id
     * @returns {messages_Messages}
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
     * @returns {channels_ChannelParticipants}
     */
    getParticipants(config) {
        return this.send('channels.getParticipants', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getParticipant}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @param {InputUser} config.user_id
     * @returns {channels_ChannelParticipant}
     */
    getParticipant(config) {
        return this.send('channels.getParticipant', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getChannels}
     * @param {Object} config
     * @param {Array.<InputChannel>} config.id
     * @returns {messages_Chats}
     */
    getChannels(config) {
        return this.send('channels.getChannels', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getFullChannel}
     * @param {Object} config
     * @param {InputChannel} config.channel
     * @returns {messages_ChatFull}
     */
    getFullChannel(config) {
        return this.send('channels.getFullChannel', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.createChannel}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.broadcast
     * @param {?true} config.megagroup
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
     * @param {Array.<InputUser>} config.users
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
     * @param {number} config.flags
     * @param {?true} config.silent
     * @param {InputChannel} config.channel
     * @param {int} config.id
     * @returns {Updates}
     */
    updatePinnedMessage(config) {
        return this.send('channels.updatePinnedMessage', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/channels.getAdminedPublicChannels}
     * @returns {messages_Chats}
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
     * @param {number} config.flags
     * @param {InputChannel} config.channel
     * @param {string} config.q
     * @param {?ChannelAdminLogEventsFilter} config.events_filter
     * @param {?Array.<InputUser>} config.admins
     * @param {long} config.max_id
     * @param {long} config.min_id
     * @param {int} config.limit
     * @returns {channels_AdminLogResults}
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
     * @param {Array.<int>} config.id
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
     * @returns {messages_Chats}
     */
    getLeftChannels(config) {
        return this.send('channels.getLeftChannels', config)
    }
}

class BotsMtProto extends Ctor {
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

class PaymentsMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/payments.getPaymentForm}
     * @param {Object} config
     * @param {int} config.msg_id
     * @returns {payments_PaymentForm}
     */
    getPaymentForm(config) {
        return this.send('payments.getPaymentForm', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.getPaymentReceipt}
     * @param {Object} config
     * @param {int} config.msg_id
     * @returns {payments_PaymentReceipt}
     */
    getPaymentReceipt(config) {
        return this.send('payments.getPaymentReceipt', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.validateRequestedInfo}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.save
     * @param {int} config.msg_id
     * @param {PaymentRequestedInfo} config.info
     * @returns {payments_ValidatedRequestedInfo}
     */
    validateRequestedInfo(config) {
        return this.send('payments.validateRequestedInfo', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.sendPaymentForm}
     * @param {Object} config
     * @param {number} config.flags
     * @param {int} config.msg_id
     * @param {?string} config.requested_info_id
     * @param {?string} config.shipping_option_id
     * @param {InputPaymentCredentials} config.credentials
     * @returns {payments_PaymentResult}
     */
    sendPaymentForm(config) {
        return this.send('payments.sendPaymentForm', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.getSavedInfo}
     * @returns {payments_SavedInfo}
     */
    getSavedInfo() {
        return this.send('payments.getSavedInfo')
    }

    /**
     * @see {@link https://core.telegram.org/method/payments.clearSavedInfo}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.credentials
     * @param {?true} config.info
     * @returns {Bool}
     */
    clearSavedInfo(config) {
        return this.send('payments.clearSavedInfo', config)
    }
}

class StickersMtProto extends Ctor {
    /**
     * @see {@link https://core.telegram.org/method/stickers.createStickerSet}
     * @param {Object} config
     * @param {number} config.flags
     * @param {?true} config.masks
     * @param {InputUser} config.user_id
     * @param {string} config.title
     * @param {string} config.short_name
     * @param {Array.<InputStickerSetItem>} config.stickers
     * @returns {messages_StickerSet}
     */
    createStickerSet(config) {
        return this.send('stickers.createStickerSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/stickers.removeStickerFromSet}
     * @param {Object} config
     * @param {InputDocument} config.sticker
     * @returns {messages_StickerSet}
     */
    removeStickerFromSet(config) {
        return this.send('stickers.removeStickerFromSet', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/stickers.changeStickerPosition}
     * @param {Object} config
     * @param {InputDocument} config.sticker
     * @param {int} config.position
     * @returns {messages_StickerSet}
     */
    changeStickerPosition(config) {
        return this.send('stickers.changeStickerPosition', config)
    }

    /**
     * @see {@link https://core.telegram.org/method/stickers.addStickerToSet}
     * @param {Object} config
     * @param {InputStickerSet} config.stickerset
     * @param {InputStickerSetItem} config.sticker
     * @returns {messages_StickerSet}
     */
    addStickerToSet(config) {
        return this.send('stickers.addStickerToSet', config)
    }
}

class PhoneMtProto extends Ctor {
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
     * @returns {phone_PhoneCall}
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
     * @returns {phone_PhoneCall}
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
     * @returns {phone_PhoneCall}
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

class LangpackMtProto extends Ctor {
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
     * @param {Array.<string>} config.keys
     * @returns {Array.<LangPackString>}
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
     * @returns {Array.<LangPackLanguage>}
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
         * @type {ContestMtProto}
         * @memberof MTProtoClient
         */
        this.contest = new ctor.Contest(this)

        /**
         * @type {AuthMtProto}
         * @memberof MTProtoClient
         */
        this.auth = new ctor.Auth(this)

        /**
         * @type {AccountMtProto}
         * @memberof MTProtoClient
         */
        this.account = new ctor.Account(this)

        /**
         * @type {UsersMtProto}
         * @memberof MTProtoClient
         */
        this.users = new ctor.Users(this)

        /**
         * @type {ContactsMtProto}
         * @memberof MTProtoClient
         */
        this.contacts = new ctor.Contacts(this)

        /**
         * @type {MessagesMtProto}
         * @memberof MTProtoClient
         */
        this.messages = new ctor.Messages(this)

        /**
         * @type {UpdatesMtProto}
         * @memberof MTProtoClient
         */
        this.updates = new ctor.Updates(this)

        /**
         * @type {PhotosMtProto}
         * @memberof MTProtoClient
         */
        this.photos = new ctor.Photos(this)

        /**
         * @type {UploadMtProto}
         * @memberof MTProtoClient
         */
        this.upload = new ctor.Upload(this)

        /**
         * @type {HelpMtProto}
         * @memberof MTProtoClient
         */
        this.help = new ctor.Help(this)

        /**
         * @type {ChannelsMtProto}
         * @memberof MTProtoClient
         */
        this.channels = new ctor.Channels(this)

        /**
         * @type {BotsMtProto}
         * @memberof MTProtoClient
         */
        this.bots = new ctor.Bots(this)

        /**
         * @type {PaymentsMtProto}
         * @memberof MTProtoClient
         */
        this.payments = new ctor.Payments(this)

        /**
         * @type {StickersMtProto}
         * @memberof MTProtoClient
         */
        this.stickers = new ctor.Stickers(this)

        /**
         * @type {PhoneMtProto}
         * @memberof MTProtoClient
         */
        this.phone = new ctor.Phone(this)

        /**
         * @type {LangpackMtProto}
         * @memberof MTProtoClient
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

MTProtoClient.Contest = ContestMtProto
MTProtoClient.Auth = AuthMtProto
MTProtoClient.Account = AccountMtProto
MTProtoClient.Users = UsersMtProto
MTProtoClient.Contacts = ContactsMtProto
MTProtoClient.Messages = MessagesMtProto
MTProtoClient.Updates = UpdatesMtProto
MTProtoClient.Photos = PhotosMtProto
MTProtoClient.Upload = UploadMtProto
MTProtoClient.Help = HelpMtProto
MTProtoClient.Channels = ChannelsMtProto
MTProtoClient.Bots = BotsMtProto
MTProtoClient.Payments = PaymentsMtProto
MTProtoClient.Stickers = StickersMtProto
MTProtoClient.Phone = PhoneMtProto
MTProtoClient.Langpack = LangpackMtProto

module.exports = MTProtoClient
