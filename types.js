
/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/int.md}
 * @typedef {number} int
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/double.md}
 * @typedef {number} double
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/log.md}
 * @typedef {number} log
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/bytes.md}
 * @typedef {string} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/Bool.md}
 * @typedef {boolean} Bool
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/Vector.md}
 * @typedef {Array} Vector
 */
/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/resPQ.md}
 * @typedef {ResPQ} resPQ
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {string} pq
 * @property {Vector.<long>} server_public_key_fingerprints
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/p_q_inner_data.md}
 * @typedef {P_Q_inner_data} p_q_inner_data
 * @property {string} pq
 * @property {string} p
 * @property {string} q
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int256} new_nonce
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/p_q_inner_data_dc.md}
 * @typedef {P_Q_inner_data} p_q_inner_data_dc
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/p_q_inner_data_temp.md}
 * @typedef {P_Q_inner_data} p_q_inner_data_temp
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/p_q_inner_data_temp_dc.md}
 * @typedef {P_Q_inner_data} p_q_inner_data_temp_dc
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/server_DH_params_fail.md}
 * @typedef {Server_DH_Params} server_DH_params_fail
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/server_DH_params_ok.md}
 * @typedef {Server_DH_Params} server_DH_params_ok
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {string} encrypted_answer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/server_DH_inner_data.md}
 * @typedef {Server_DH_inner_data} server_DH_inner_data
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int} g
 * @property {string} dh_prime
 * @property {string} g_a
 * @property {int} server_time
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/client_DH_inner_data.md}
 * @typedef {Client_DH_Inner_Data} client_DH_inner_data
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {long} retry_id
 * @property {string} g_b
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/dh_gen_ok.md}
 * @typedef {Set_client_DH_params_answer} dh_gen_ok
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash1
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/dh_gen_retry.md}
 * @typedef {Set_client_DH_params_answer} dh_gen_retry
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash2
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/dh_gen_fail.md}
 * @typedef {Set_client_DH_params_answer} dh_gen_fail
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash3
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/destroy_auth_key_ok.md}
 * @typedef {DestroyAuthKeyRes} destroy_auth_key_ok
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/destroy_auth_key_none.md}
 * @typedef {DestroyAuthKeyRes} destroy_auth_key_none
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/destroy_auth_key_fail.md}
 * @typedef {DestroyAuthKeyRes} destroy_auth_key_fail
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/msgs_ack.md}
 * @typedef {MsgsAck} msgs_ack
 * @property {Vector.<long>} msg_ids
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/bad_msg_notification.md}
 * @typedef {BadMsgNotification} bad_msg_notification
 * @property {long} bad_msg_id
 * @property {int} bad_msg_seqno
 * @property {int} error_code
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/bad_server_salt.md}
 * @typedef {BadMsgNotification} bad_server_salt
 * @property {long} bad_msg_id
 * @property {int} bad_msg_seqno
 * @property {int} error_code
 * @property {long} new_server_salt
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/msgs_state_req.md}
 * @typedef {MsgsStateReq} msgs_state_req
 * @property {Vector.<long>} msg_ids
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/msgs_state_info.md}
 * @typedef {MsgsStateInfo} msgs_state_info
 * @property {long} req_msg_id
 * @property {string} info
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/msgs_all_info.md}
 * @typedef {MsgsAllInfo} msgs_all_info
 * @property {Vector.<long>} msg_ids
 * @property {string} info
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/msg_detailed_info.md}
 * @typedef {MsgDetailedInfo} msg_detailed_info
 * @property {long} msg_id
 * @property {long} answer_msg_id
 * @property {int} bytes
 * @property {int} status
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/msg_new_detailed_info.md}
 * @typedef {MsgDetailedInfo} msg_new_detailed_info
 * @property {long} answer_msg_id
 * @property {int} bytes
 * @property {int} status
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/msg_resend_req.md}
 * @typedef {MsgResendReq} msg_resend_req
 * @property {Vector.<long>} msg_ids
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/rpc_error.md}
 * @typedef {RpcError} rpc_error
 * @property {int} error_code
 * @property {string} error_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/rpc_answer_unknown.md}
 * @typedef {RpcDropAnswer} rpc_answer_unknown
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/rpc_answer_dropped_running.md}
 * @typedef {RpcDropAnswer} rpc_answer_dropped_running
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/rpc_answer_dropped.md}
 * @typedef {RpcDropAnswer} rpc_answer_dropped
 * @property {long} msg_id
 * @property {int} seq_no
 * @property {int} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/future_salt.md}
 * @typedef {FutureSalt} future_salt
 * @property {int} valid_since
 * @property {int} valid_until
 * @property {long} salt
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/future_salts.md}
 * @typedef {FutureSalts} future_salts
 * @property {long} req_msg_id
 * @property {int} now
 * @property {vector.<future_salt>} salts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pong.md}
 * @typedef {Pong} pong
 * @property {long} msg_id
 * @property {long} ping_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/destroy_session_ok.md}
 * @typedef {DestroySessionRes} destroy_session_ok
 * @property {long} session_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/destroy_session_none.md}
 * @typedef {DestroySessionRes} destroy_session_none
 * @property {long} session_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/new_session_created.md}
 * @typedef {NewSession} new_session_created
 * @property {long} first_msg_id
 * @property {long} unique_id
 * @property {long} server_salt
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/http_wait.md}
 * @typedef {HttpWait} http_wait
 * @property {int} max_delay
 * @property {int} wait_after
 * @property {int} max_wait
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/ipPort.md}
 * @typedef {IpPort} ipPort
 * @property {int} ipv4
 * @property {int} port
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/ipPortSecret.md}
 * @typedef {IpPort} ipPortSecret
 * @property {int} ipv4
 * @property {int} port
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/accessPointRule.md}
 * @typedef {AccessPointRule} accessPointRule
 * @property {string} phone_prefix_rules
 * @property {int} dc_id
 * @property {vector.<IpPort>} ips
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.configSimple.md}
 * @typedef {help.ConfigSimple} help.configSimple
 * @property {int} date
 * @property {int} expires
 * @property {vector.<AccessPointRule>} rules
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/boolFalse.md}
 * @typedef {Bool} boolFalse
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/boolTrue.md}
 * @typedef {Bool} boolTrue
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/true.md}
 * @typedef {True} true
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/error.md}
 * @typedef {Error} error
 * @property {int} code
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/null.md}
 * @typedef {Null} null
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPeerEmpty.md}
 * @typedef {InputPeer} inputPeerEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPeerSelf.md}
 * @typedef {InputPeer} inputPeerSelf
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPeerChat.md}
 * @typedef {InputPeer} inputPeerChat
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPeerUser.md}
 * @typedef {InputPeer} inputPeerUser
 * @property {int} user_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPeerChannel.md}
 * @typedef {InputPeer} inputPeerChannel
 * @property {int} channel_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputUserEmpty.md}
 * @typedef {InputUser} inputUserEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputUserSelf.md}
 * @typedef {InputUser} inputUserSelf
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputUser.md}
 * @typedef {InputUser} inputUser
 * @property {int} user_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPhoneContact.md}
 * @typedef {InputContact} inputPhoneContact
 * @property {long} client_id
 * @property {string} phone
 * @property {string} first_name
 * @property {string} last_name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputFile.md}
 * @typedef {InputFile} inputFile
 * @property {long} id
 * @property {int} parts
 * @property {string} name
 * @property {string} md5_checksum
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputFileBig.md}
 * @typedef {InputFile} inputFileBig
 * @property {long} id
 * @property {int} parts
 * @property {string} name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaEmpty.md}
 * @typedef {InputMedia} inputMediaEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaUploadedPhoto.md}
 * @typedef {InputMedia} inputMediaUploadedPhoto
 * @property {#} flags
 * @property {InputFile} file
 * @property {Vector.<InputDocument>} stickers
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaPhoto.md}
 * @typedef {InputMedia} inputMediaPhoto
 * @property {#} flags
 * @property {InputPhoto} id
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaGeoPoint.md}
 * @typedef {InputMedia} inputMediaGeoPoint
 * @property {InputGeoPoint} geo_point
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaContact.md}
 * @typedef {InputMedia} inputMediaContact
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaUploadedDocument.md}
 * @typedef {InputMedia} inputMediaUploadedDocument
 * @property {#} flags
 * @property {true} nosound_video
 * @property {InputFile} file
 * @property {InputFile} thumb
 * @property {string} mime_type
 * @property {Vector.<DocumentAttribute>} attributes
 * @property {Vector.<InputDocument>} stickers
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaDocument.md}
 * @typedef {InputMedia} inputMediaDocument
 * @property {#} flags
 * @property {InputDocument} id
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaVenue.md}
 * @typedef {InputMedia} inputMediaVenue
 * @property {InputGeoPoint} geo_point
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaGifExternal.md}
 * @typedef {InputMedia} inputMediaGifExternal
 * @property {string} url
 * @property {string} q
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaPhotoExternal.md}
 * @typedef {InputMedia} inputMediaPhotoExternal
 * @property {#} flags
 * @property {string} url
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaDocumentExternal.md}
 * @typedef {InputMedia} inputMediaDocumentExternal
 * @property {#} flags
 * @property {string} url
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaGame.md}
 * @typedef {InputMedia} inputMediaGame
 * @property {InputGame} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaInvoice.md}
 * @typedef {InputMedia} inputMediaInvoice
 * @property {#} flags
 * @property {string} title
 * @property {string} description
 * @property {InputWebDocument} photo
 * @property {Invoice} invoice
 * @property {bytes} payload
 * @property {string} provider
 * @property {DataJSON} provider_data
 * @property {string} start_param
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMediaGeoLive.md}
 * @typedef {InputMedia} inputMediaGeoLive
 * @property {InputGeoPoint} geo_point
 * @property {int} period
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputChatPhotoEmpty.md}
 * @typedef {InputChatPhoto} inputChatPhotoEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputChatUploadedPhoto.md}
 * @typedef {InputChatPhoto} inputChatUploadedPhoto
 * @property {InputFile} file
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputChatPhoto.md}
 * @typedef {InputChatPhoto} inputChatPhoto
 * @property {InputPhoto} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputGeoPointEmpty.md}
 * @typedef {InputGeoPoint} inputGeoPointEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputGeoPoint.md}
 * @typedef {InputGeoPoint} inputGeoPoint
 * @property {double} lat
 * @property {double} long
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPhotoEmpty.md}
 * @typedef {InputPhoto} inputPhotoEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPhoto.md}
 * @typedef {InputPhoto} inputPhoto
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputFileLocation.md}
 * @typedef {InputFileLocation} inputFileLocation
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputEncryptedFileLocation.md}
 * @typedef {InputFileLocation} inputEncryptedFileLocation
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputDocumentFileLocation.md}
 * @typedef {InputFileLocation} inputDocumentFileLocation
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputSecureFileLocation.md}
 * @typedef {InputFileLocation} inputSecureFileLocation
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputTakeoutFileLocation.md}
 * @typedef {InputFileLocation} inputTakeoutFileLocation
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputAppEvent.md}
 * @typedef {InputAppEvent} inputAppEvent
 * @property {double} time
 * @property {string} type
 * @property {long} peer
 * @property {string} data
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/peerUser.md}
 * @typedef {Peer} peerUser
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/peerChat.md}
 * @typedef {Peer} peerChat
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/peerChannel.md}
 * @typedef {Peer} peerChannel
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.fileUnknown.md}
 * @typedef {storage.FileType} storage.fileUnknown
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.filePartial.md}
 * @typedef {storage.FileType} storage.filePartial
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.fileJpeg.md}
 * @typedef {storage.FileType} storage.fileJpeg
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.fileGif.md}
 * @typedef {storage.FileType} storage.fileGif
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.filePng.md}
 * @typedef {storage.FileType} storage.filePng
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.filePdf.md}
 * @typedef {storage.FileType} storage.filePdf
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.fileMp3.md}
 * @typedef {storage.FileType} storage.fileMp3
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.fileMov.md}
 * @typedef {storage.FileType} storage.fileMov
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.fileMp4.md}
 * @typedef {storage.FileType} storage.fileMp4
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/storage.fileWebp.md}
 * @typedef {storage.FileType} storage.fileWebp
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/fileLocationUnavailable.md}
 * @typedef {FileLocation} fileLocationUnavailable
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/fileLocation.md}
 * @typedef {FileLocation} fileLocation
 * @property {int} dc_id
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userEmpty.md}
 * @typedef {User} userEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/user.md}
 * @typedef {User} user
 * @property {#} flags
 * @property {true} self
 * @property {true} contact
 * @property {true} mutual_contact
 * @property {true} deleted
 * @property {true} bot
 * @property {true} bot_chat_history
 * @property {true} bot_nochats
 * @property {true} verified
 * @property {true} restricted
 * @property {true} min
 * @property {true} bot_inline_geo
 * @property {int} id
 * @property {long} access_hash
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 * @property {string} phone
 * @property {UserProfilePhoto} photo
 * @property {UserStatus} status
 * @property {int} bot_info_version
 * @property {string} restriction_reason
 * @property {string} bot_inline_placeholder
 * @property {string} lang_code
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userProfilePhotoEmpty.md}
 * @typedef {UserProfilePhoto} userProfilePhotoEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userProfilePhoto.md}
 * @typedef {UserProfilePhoto} userProfilePhoto
 * @property {long} photo_id
 * @property {FileLocation} photo_small
 * @property {FileLocation} photo_big
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userStatusEmpty.md}
 * @typedef {UserStatus} userStatusEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userStatusOnline.md}
 * @typedef {UserStatus} userStatusOnline
 * @property {int} expires
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userStatusOffline.md}
 * @typedef {UserStatus} userStatusOffline
 * @property {int} was_online
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userStatusRecently.md}
 * @typedef {UserStatus} userStatusRecently
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userStatusLastWeek.md}
 * @typedef {UserStatus} userStatusLastWeek
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userStatusLastMonth.md}
 * @typedef {UserStatus} userStatusLastMonth
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatEmpty.md}
 * @typedef {Chat} chatEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chat.md}
 * @typedef {Chat} chat
 * @property {#} flags
 * @property {true} creator
 * @property {true} kicked
 * @property {true} left
 * @property {true} admins_enabled
 * @property {true} admin
 * @property {true} deactivated
 * @property {int} id
 * @property {string} title
 * @property {ChatPhoto} photo
 * @property {int} participants_count
 * @property {int} date
 * @property {int} version
 * @property {InputChannel} migrated_to
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatForbidden.md}
 * @typedef {Chat} chatForbidden
 * @property {int} id
 * @property {string} title
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channel.md}
 * @typedef {Chat} channel
 * @property {#} flags
 * @property {true} creator
 * @property {true} left
 * @property {true} editor
 * @property {true} broadcast
 * @property {true} verified
 * @property {true} megagroup
 * @property {true} restricted
 * @property {true} democracy
 * @property {true} signatures
 * @property {true} min
 * @property {int} id
 * @property {long} access_hash
 * @property {string} title
 * @property {string} username
 * @property {ChatPhoto} photo
 * @property {int} date
 * @property {int} version
 * @property {string} restriction_reason
 * @property {ChannelAdminRights} admin_rights
 * @property {ChannelBannedRights} banned_rights
 * @property {int} participants_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelForbidden.md}
 * @typedef {Chat} channelForbidden
 * @property {#} flags
 * @property {true} broadcast
 * @property {true} megagroup
 * @property {int} id
 * @property {long} access_hash
 * @property {string} title
 * @property {int} until_date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatFull.md}
 * @typedef {ChatFull} chatFull
 * @property {int} id
 * @property {ChatParticipants} participants
 * @property {Photo} chat_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {ExportedChatInvite} exported_invite
 * @property {Vector.<BotInfo>} bot_info
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelFull.md}
 * @typedef {ChatFull} channelFull
 * @property {#} flags
 * @property {true} can_view_participants
 * @property {true} can_set_username
 * @property {true} can_set_stickers
 * @property {true} hidden_prehistory
 * @property {int} id
 * @property {string} about
 * @property {int} participants_count
 * @property {int} admins_count
 * @property {int} kicked_count
 * @property {int} banned_count
 * @property {int} read_inbox_max_id
 * @property {int} read_outbox_max_id
 * @property {int} unread_count
 * @property {Photo} chat_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {ExportedChatInvite} exported_invite
 * @property {Vector.<BotInfo>} bot_info
 * @property {int} migrated_from_chat_id
 * @property {int} migrated_from_max_id
 * @property {int} pinned_msg_id
 * @property {StickerSet} stickerset
 * @property {int} available_min_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatParticipant.md}
 * @typedef {ChatParticipant} chatParticipant
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatParticipantCreator.md}
 * @typedef {ChatParticipant} chatParticipantCreator
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatParticipantAdmin.md}
 * @typedef {ChatParticipant} chatParticipantAdmin
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatParticipantsForbidden.md}
 * @typedef {ChatParticipants} chatParticipantsForbidden
 * @property {#} flags
 * @property {int} chat_id
 * @property {ChatParticipant} self_participant
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatParticipants.md}
 * @typedef {ChatParticipants} chatParticipants
 * @property {int} chat_id
 * @property {Vector.<ChatParticipant>} participants
 * @property {int} version
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatPhotoEmpty.md}
 * @typedef {ChatPhoto} chatPhotoEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatPhoto.md}
 * @typedef {ChatPhoto} chatPhoto
 * @property {FileLocation} photo_small
 * @property {FileLocation} photo_big
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEmpty.md}
 * @typedef {Message} messageEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/message.md}
 * @typedef {Message} message
 * @property {#} flags
 * @property {true} out
 * @property {true} mentioned
 * @property {true} media_unread
 * @property {true} silent
 * @property {true} post
 * @property {int} id
 * @property {int} from_id
 * @property {Peer} to_id
 * @property {MessageFwdHeader} fwd_from
 * @property {int} via_bot_id
 * @property {int} reply_to_msg_id
 * @property {int} date
 * @property {string} message
 * @property {MessageMedia} media
 * @property {ReplyMarkup} reply_markup
 * @property {Vector.<MessageEntity>} entities
 * @property {int} views
 * @property {int} edit_date
 * @property {string} post_author
 * @property {long} grouped_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageService.md}
 * @typedef {Message} messageService
 * @property {#} flags
 * @property {true} out
 * @property {true} mentioned
 * @property {true} media_unread
 * @property {true} silent
 * @property {true} post
 * @property {int} id
 * @property {int} from_id
 * @property {Peer} to_id
 * @property {int} reply_to_msg_id
 * @property {int} date
 * @property {MessageAction} action
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaEmpty.md}
 * @typedef {MessageMedia} messageMediaEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaPhoto.md}
 * @typedef {MessageMedia} messageMediaPhoto
 * @property {#} flags
 * @property {Photo} photo
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaGeo.md}
 * @typedef {MessageMedia} messageMediaGeo
 * @property {GeoPoint} geo
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaContact.md}
 * @typedef {MessageMedia} messageMediaContact
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaUnsupported.md}
 * @typedef {MessageMedia} messageMediaUnsupported
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaDocument.md}
 * @typedef {MessageMedia} messageMediaDocument
 * @property {#} flags
 * @property {Document} document
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaWebPage.md}
 * @typedef {MessageMedia} messageMediaWebPage
 * @property {WebPage} webpage
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaVenue.md}
 * @typedef {MessageMedia} messageMediaVenue
 * @property {GeoPoint} geo
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaGame.md}
 * @typedef {MessageMedia} messageMediaGame
 * @property {Game} game
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaInvoice.md}
 * @typedef {MessageMedia} messageMediaInvoice
 * @property {#} flags
 * @property {true} shipping_address_requested
 * @property {true} test
 * @property {string} title
 * @property {string} description
 * @property {WebDocument} photo
 * @property {int} receipt_msg_id
 * @property {string} currency
 * @property {long} total_amount
 * @property {string} start_param
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageMediaGeoLive.md}
 * @typedef {MessageMedia} messageMediaGeoLive
 * @property {GeoPoint} geo
 * @property {int} period
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionEmpty.md}
 * @typedef {MessageAction} messageActionEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatCreate.md}
 * @typedef {MessageAction} messageActionChatCreate
 * @property {string} title
 * @property {Vector.<int>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatEditTitle.md}
 * @typedef {MessageAction} messageActionChatEditTitle
 * @property {string} title
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatEditPhoto.md}
 * @typedef {MessageAction} messageActionChatEditPhoto
 * @property {Photo} photo
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatDeletePhoto.md}
 * @typedef {MessageAction} messageActionChatDeletePhoto
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatAddUser.md}
 * @typedef {MessageAction} messageActionChatAddUser
 * @property {Vector.<int>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatDeleteUser.md}
 * @typedef {MessageAction} messageActionChatDeleteUser
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatJoinedByLink.md}
 * @typedef {MessageAction} messageActionChatJoinedByLink
 * @property {int} inviter_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChannelCreate.md}
 * @typedef {MessageAction} messageActionChannelCreate
 * @property {string} title
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChatMigrateTo.md}
 * @typedef {MessageAction} messageActionChatMigrateTo
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionChannelMigrateFrom.md}
 * @typedef {MessageAction} messageActionChannelMigrateFrom
 * @property {string} title
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionPinMessage.md}
 * @typedef {MessageAction} messageActionPinMessage
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionHistoryClear.md}
 * @typedef {MessageAction} messageActionHistoryClear
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionGameScore.md}
 * @typedef {MessageAction} messageActionGameScore
 * @property {long} game_id
 * @property {int} score
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionPaymentSentMe.md}
 * @typedef {MessageAction} messageActionPaymentSentMe
 * @property {#} flags
 * @property {string} currency
 * @property {long} total_amount
 * @property {bytes} payload
 * @property {PaymentRequestedInfo} info
 * @property {string} shipping_option_id
 * @property {PaymentCharge} charge
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionPaymentSent.md}
 * @typedef {MessageAction} messageActionPaymentSent
 * @property {string} currency
 * @property {long} total_amount
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionPhoneCall.md}
 * @typedef {MessageAction} messageActionPhoneCall
 * @property {#} flags
 * @property {long} call_id
 * @property {PhoneCallDiscardReason} reason
 * @property {int} duration
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionScreenshotTaken.md}
 * @typedef {MessageAction} messageActionScreenshotTaken
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionCustomAction.md}
 * @typedef {MessageAction} messageActionCustomAction
 * @property {string} message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionBotAllowed.md}
 * @typedef {MessageAction} messageActionBotAllowed
 * @property {string} domain
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionSecureValuesSentMe.md}
 * @typedef {MessageAction} messageActionSecureValuesSentMe
 * @property {Vector.<SecureValue>} values
 * @property {SecureCredentialsEncrypted} credentials
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageActionSecureValuesSent.md}
 * @typedef {MessageAction} messageActionSecureValuesSent
 * @property {Vector.<SecureValueType>} types
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/dialog.md}
 * @typedef {Dialog} dialog
 * @property {#} flags
 * @property {true} pinned
 * @property {true} unread_mark
 * @property {Peer} peer
 * @property {int} top_message
 * @property {int} read_inbox_max_id
 * @property {int} read_outbox_max_id
 * @property {int} unread_count
 * @property {int} unread_mentions_count
 * @property {PeerNotifySettings} notify_settings
 * @property {int} pts
 * @property {DraftMessage} draft
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photoEmpty.md}
 * @typedef {Photo} photoEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photo.md}
 * @typedef {Photo} photo
 * @property {#} flags
 * @property {true} has_stickers
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 * @property {int} date
 * @property {Vector.<PhotoSize>} sizes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photoSizeEmpty.md}
 * @typedef {PhotoSize} photoSizeEmpty
 * @property {string} type
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photoSize.md}
 * @typedef {PhotoSize} photoSize
 * @property {string} type
 * @property {FileLocation} location
 * @property {int} w
 * @property {int} h
 * @property {int} size
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photoCachedSize.md}
 * @typedef {PhotoSize} photoCachedSize
 * @property {string} type
 * @property {FileLocation} location
 * @property {int} w
 * @property {int} h
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/geoPointEmpty.md}
 * @typedef {GeoPoint} geoPointEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/geoPoint.md}
 * @typedef {GeoPoint} geoPoint
 * @property {double} long
 * @property {double} lat
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.checkedPhone.md}
 * @typedef {auth.CheckedPhone} auth.checkedPhone
 * @property {Bool} phone_registered
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.sentCode.md}
 * @typedef {auth.SentCode} auth.sentCode
 * @property {#} flags
 * @property {true} phone_registered
 * @property {auth.SentCodeType} type
 * @property {string} phone_code_hash
 * @property {auth.CodeType} next_type
 * @property {int} timeout
 * @property {help.TermsOfService} terms_of_service
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.authorization.md}
 * @typedef {auth.Authorization} auth.authorization
 * @property {#} flags
 * @property {int} tmp_sessions
 * @property {User} user
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.exportedAuthorization.md}
 * @typedef {auth.ExportedAuthorization} auth.exportedAuthorization
 * @property {int} id
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputNotifyPeer.md}
 * @typedef {InputNotifyPeer} inputNotifyPeer
 * @property {InputPeer} peer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputNotifyUsers.md}
 * @typedef {InputNotifyPeer} inputNotifyUsers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputNotifyChats.md}
 * @typedef {InputNotifyPeer} inputNotifyChats
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPeerNotifySettings.md}
 * @typedef {InputPeerNotifySettings} inputPeerNotifySettings
 * @property {#} flags
 * @property {Bool} show_previews
 * @property {Bool} silent
 * @property {int} mute_until
 * @property {string} sound
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/peerNotifySettings.md}
 * @typedef {PeerNotifySettings} peerNotifySettings
 * @property {#} flags
 * @property {Bool} show_previews
 * @property {Bool} silent
 * @property {int} mute_until
 * @property {string} sound
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/peerSettings.md}
 * @typedef {PeerSettings} peerSettings
 * @property {#} flags
 * @property {true} report_spam
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/wallPaper.md}
 * @typedef {WallPaper} wallPaper
 * @property {int} id
 * @property {string} title
 * @property {Vector.<PhotoSize>} sizes
 * @property {int} color
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/wallPaperSolid.md}
 * @typedef {WallPaper} wallPaperSolid
 * @property {int} id
 * @property {string} title
 * @property {int} bg_color
 * @property {int} color
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputReportReasonSpam.md}
 * @typedef {ReportReason} inputReportReasonSpam
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputReportReasonViolence.md}
 * @typedef {ReportReason} inputReportReasonViolence
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputReportReasonPornography.md}
 * @typedef {ReportReason} inputReportReasonPornography
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputReportReasonOther.md}
 * @typedef {ReportReason} inputReportReasonOther
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputReportReasonCopyright.md}
 * @typedef {ReportReason} inputReportReasonCopyright
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/userFull.md}
 * @typedef {UserFull} userFull
 * @property {#} flags
 * @property {true} blocked
 * @property {true} phone_calls_available
 * @property {true} phone_calls_private
 * @property {User} user
 * @property {string} about
 * @property {contacts.Link} link
 * @property {Photo} profile_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {BotInfo} bot_info
 * @property {int} common_chats_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contact.md}
 * @typedef {Contact} contact
 * @property {int} user_id
 * @property {Bool} mutual
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/importedContact.md}
 * @typedef {ImportedContact} importedContact
 * @property {int} user_id
 * @property {long} client_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contactBlocked.md}
 * @typedef {ContactBlocked} contactBlocked
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contactStatus.md}
 * @typedef {ContactStatus} contactStatus
 * @property {int} user_id
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.link.md}
 * @typedef {contacts.Link} contacts.link
 * @property {ContactLink} my_link
 * @property {ContactLink} foreign_link
 * @property {User} user
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.contactsNotModified.md}
 * @typedef {contacts.Contacts} contacts.contactsNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.contacts.md}
 * @typedef {contacts.Contacts} contacts.contacts
 * @property {Vector.<Contact>} contacts
 * @property {int} saved_count
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.importedContacts.md}
 * @typedef {contacts.ImportedContacts} contacts.importedContacts
 * @property {Vector.<ImportedContact>} imported
 * @property {Vector.<PopularContact>} popular_invites
 * @property {Vector.<long>} retry_contacts
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.blocked.md}
 * @typedef {contacts.Blocked} contacts.blocked
 * @property {Vector.<ContactBlocked>} blocked
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.blockedSlice.md}
 * @typedef {contacts.Blocked} contacts.blockedSlice
 * @property {int} count
 * @property {Vector.<ContactBlocked>} blocked
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.dialogs.md}
 * @typedef {messages.Dialogs} messages.dialogs
 * @property {Vector.<Dialog>} dialogs
 * @property {Vector.<Message>} messages
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.dialogsSlice.md}
 * @typedef {messages.Dialogs} messages.dialogsSlice
 * @property {int} count
 * @property {Vector.<Dialog>} dialogs
 * @property {Vector.<Message>} messages
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.dialogsNotModified.md}
 * @typedef {messages.Dialogs} messages.dialogsNotModified
 * @property {int} count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.messages.md}
 * @typedef {messages.Messages} messages.messages
 * @property {Vector.<Message>} messages
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.messagesSlice.md}
 * @typedef {messages.Messages} messages.messagesSlice
 * @property {int} count
 * @property {Vector.<Message>} messages
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.channelMessages.md}
 * @typedef {messages.Messages} messages.channelMessages
 * @property {#} flags
 * @property {int} pts
 * @property {int} count
 * @property {Vector.<Message>} messages
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.messagesNotModified.md}
 * @typedef {messages.Messages} messages.messagesNotModified
 * @property {int} count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.chats.md}
 * @typedef {messages.Chats} messages.chats
 * @property {Vector.<Chat>} chats
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.chatsSlice.md}
 * @typedef {messages.Chats} messages.chatsSlice
 * @property {int} count
 * @property {Vector.<Chat>} chats
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.chatFull.md}
 * @typedef {messages.ChatFull} messages.chatFull
 * @property {ChatFull} full_chat
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.affectedHistory.md}
 * @typedef {messages.AffectedHistory} messages.affectedHistory
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} offset
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterEmpty.md}
 * @typedef {MessagesFilter} inputMessagesFilterEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterPhotos.md}
 * @typedef {MessagesFilter} inputMessagesFilterPhotos
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterVideo.md}
 * @typedef {MessagesFilter} inputMessagesFilterVideo
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterPhotoVideo.md}
 * @typedef {MessagesFilter} inputMessagesFilterPhotoVideo
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterDocument.md}
 * @typedef {MessagesFilter} inputMessagesFilterDocument
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterUrl.md}
 * @typedef {MessagesFilter} inputMessagesFilterUrl
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterGif.md}
 * @typedef {MessagesFilter} inputMessagesFilterGif
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterVoice.md}
 * @typedef {MessagesFilter} inputMessagesFilterVoice
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterMusic.md}
 * @typedef {MessagesFilter} inputMessagesFilterMusic
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterChatPhotos.md}
 * @typedef {MessagesFilter} inputMessagesFilterChatPhotos
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterPhoneCalls.md}
 * @typedef {MessagesFilter} inputMessagesFilterPhoneCalls
 * @property {#} flags
 * @property {true} missed
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterRoundVoice.md}
 * @typedef {MessagesFilter} inputMessagesFilterRoundVoice
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterRoundVideo.md}
 * @typedef {MessagesFilter} inputMessagesFilterRoundVideo
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterMyMentions.md}
 * @typedef {MessagesFilter} inputMessagesFilterMyMentions
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterGeo.md}
 * @typedef {MessagesFilter} inputMessagesFilterGeo
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagesFilterContacts.md}
 * @typedef {MessagesFilter} inputMessagesFilterContacts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateNewMessage.md}
 * @typedef {Update} updateNewMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateMessageID.md}
 * @typedef {Update} updateMessageID
 * @property {int} id
 * @property {long} random_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateDeleteMessages.md}
 * @typedef {Update} updateDeleteMessages
 * @property {Vector.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateUserTyping.md}
 * @typedef {Update} updateUserTyping
 * @property {int} user_id
 * @property {SendMessageAction} action
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChatUserTyping.md}
 * @typedef {Update} updateChatUserTyping
 * @property {int} chat_id
 * @property {int} user_id
 * @property {SendMessageAction} action
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChatParticipants.md}
 * @typedef {Update} updateChatParticipants
 * @property {ChatParticipants} participants
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateUserStatus.md}
 * @typedef {Update} updateUserStatus
 * @property {int} user_id
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateUserName.md}
 * @typedef {Update} updateUserName
 * @property {int} user_id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateUserPhoto.md}
 * @typedef {Update} updateUserPhoto
 * @property {int} user_id
 * @property {int} date
 * @property {UserProfilePhoto} photo
 * @property {Bool} previous
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateContactRegistered.md}
 * @typedef {Update} updateContactRegistered
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateContactLink.md}
 * @typedef {Update} updateContactLink
 * @property {int} user_id
 * @property {ContactLink} my_link
 * @property {ContactLink} foreign_link
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateNewEncryptedMessage.md}
 * @typedef {Update} updateNewEncryptedMessage
 * @property {EncryptedMessage} message
 * @property {int} qts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateEncryptedChatTyping.md}
 * @typedef {Update} updateEncryptedChatTyping
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateEncryption.md}
 * @typedef {Update} updateEncryption
 * @property {EncryptedChat} chat
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateEncryptedMessagesRead.md}
 * @typedef {Update} updateEncryptedMessagesRead
 * @property {int} chat_id
 * @property {int} max_date
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChatParticipantAdd.md}
 * @typedef {Update} updateChatParticipantAdd
 * @property {int} chat_id
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 * @property {int} version
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChatParticipantDelete.md}
 * @typedef {Update} updateChatParticipantDelete
 * @property {int} chat_id
 * @property {int} user_id
 * @property {int} version
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateDcOptions.md}
 * @typedef {Update} updateDcOptions
 * @property {Vector.<DcOption>} dc_options
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateUserBlocked.md}
 * @typedef {Update} updateUserBlocked
 * @property {int} user_id
 * @property {Bool} blocked
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateNotifySettings.md}
 * @typedef {Update} updateNotifySettings
 * @property {NotifyPeer} peer
 * @property {PeerNotifySettings} notify_settings
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateServiceNotification.md}
 * @typedef {Update} updateServiceNotification
 * @property {#} flags
 * @property {true} popup
 * @property {int} inbox_date
 * @property {string} type
 * @property {string} message
 * @property {MessageMedia} media
 * @property {Vector.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updatePrivacy.md}
 * @typedef {Update} updatePrivacy
 * @property {PrivacyKey} key
 * @property {Vector.<PrivacyRule>} rules
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateUserPhone.md}
 * @typedef {Update} updateUserPhone
 * @property {int} user_id
 * @property {string} phone
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateReadHistoryInbox.md}
 * @typedef {Update} updateReadHistoryInbox
 * @property {Peer} peer
 * @property {int} max_id
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateReadHistoryOutbox.md}
 * @typedef {Update} updateReadHistoryOutbox
 * @property {Peer} peer
 * @property {int} max_id
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateWebPage.md}
 * @typedef {Update} updateWebPage
 * @property {WebPage} webpage
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateReadMessagesContents.md}
 * @typedef {Update} updateReadMessagesContents
 * @property {Vector.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChannelTooLong.md}
 * @typedef {Update} updateChannelTooLong
 * @property {#} flags
 * @property {int} channel_id
 * @property {int} pts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChannel.md}
 * @typedef {Update} updateChannel
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateNewChannelMessage.md}
 * @typedef {Update} updateNewChannelMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateReadChannelInbox.md}
 * @typedef {Update} updateReadChannelInbox
 * @property {int} channel_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateDeleteChannelMessages.md}
 * @typedef {Update} updateDeleteChannelMessages
 * @property {int} channel_id
 * @property {Vector.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChannelMessageViews.md}
 * @typedef {Update} updateChannelMessageViews
 * @property {int} channel_id
 * @property {int} id
 * @property {int} views
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChatAdmins.md}
 * @typedef {Update} updateChatAdmins
 * @property {int} chat_id
 * @property {Bool} enabled
 * @property {int} version
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChatParticipantAdmin.md}
 * @typedef {Update} updateChatParticipantAdmin
 * @property {int} chat_id
 * @property {int} user_id
 * @property {Bool} is_admin
 * @property {int} version
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateNewStickerSet.md}
 * @typedef {Update} updateNewStickerSet
 * @property {messages.StickerSet} stickerset
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateStickerSetsOrder.md}
 * @typedef {Update} updateStickerSetsOrder
 * @property {#} flags
 * @property {true} masks
 * @property {Vector.<long>} order
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateStickerSets.md}
 * @typedef {Update} updateStickerSets
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateSavedGifs.md}
 * @typedef {Update} updateSavedGifs
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateBotInlineQuery.md}
 * @typedef {Update} updateBotInlineQuery
 * @property {#} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {string} query
 * @property {GeoPoint} geo
 * @property {string} offset
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateBotInlineSend.md}
 * @typedef {Update} updateBotInlineSend
 * @property {#} flags
 * @property {int} user_id
 * @property {string} query
 * @property {GeoPoint} geo
 * @property {string} id
 * @property {InputBotInlineMessageID} msg_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateEditChannelMessage.md}
 * @typedef {Update} updateEditChannelMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChannelPinnedMessage.md}
 * @typedef {Update} updateChannelPinnedMessage
 * @property {int} channel_id
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateBotCallbackQuery.md}
 * @typedef {Update} updateBotCallbackQuery
 * @property {#} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {Peer} peer
 * @property {int} msg_id
 * @property {long} chat_instance
 * @property {bytes} data
 * @property {string} game_short_name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateEditMessage.md}
 * @typedef {Update} updateEditMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateInlineBotCallbackQuery.md}
 * @typedef {Update} updateInlineBotCallbackQuery
 * @property {#} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {InputBotInlineMessageID} msg_id
 * @property {long} chat_instance
 * @property {bytes} data
 * @property {string} game_short_name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateReadChannelOutbox.md}
 * @typedef {Update} updateReadChannelOutbox
 * @property {int} channel_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateDraftMessage.md}
 * @typedef {Update} updateDraftMessage
 * @property {Peer} peer
 * @property {DraftMessage} draft
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateReadFeaturedStickers.md}
 * @typedef {Update} updateReadFeaturedStickers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateRecentStickers.md}
 * @typedef {Update} updateRecentStickers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateConfig.md}
 * @typedef {Update} updateConfig
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updatePtsChanged.md}
 * @typedef {Update} updatePtsChanged
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChannelWebPage.md}
 * @typedef {Update} updateChannelWebPage
 * @property {int} channel_id
 * @property {WebPage} webpage
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateDialogPinned.md}
 * @typedef {Update} updateDialogPinned
 * @property {#} flags
 * @property {true} pinned
 * @property {DialogPeer} peer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updatePinnedDialogs.md}
 * @typedef {Update} updatePinnedDialogs
 * @property {#} flags
 * @property {Vector.<DialogPeer>} order
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateBotWebhookJSON.md}
 * @typedef {Update} updateBotWebhookJSON
 * @property {DataJSON} data
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateBotWebhookJSONQuery.md}
 * @typedef {Update} updateBotWebhookJSONQuery
 * @property {long} query_id
 * @property {DataJSON} data
 * @property {int} timeout
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateBotShippingQuery.md}
 * @typedef {Update} updateBotShippingQuery
 * @property {long} query_id
 * @property {int} user_id
 * @property {bytes} payload
 * @property {PostAddress} shipping_address
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateBotPrecheckoutQuery.md}
 * @typedef {Update} updateBotPrecheckoutQuery
 * @property {#} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {bytes} payload
 * @property {PaymentRequestedInfo} info
 * @property {string} shipping_option_id
 * @property {string} currency
 * @property {long} total_amount
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updatePhoneCall.md}
 * @typedef {Update} updatePhoneCall
 * @property {PhoneCall} phone_call
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateLangPackTooLong.md}
 * @typedef {Update} updateLangPackTooLong
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateLangPack.md}
 * @typedef {Update} updateLangPack
 * @property {LangPackDifference} difference
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateFavedStickers.md}
 * @typedef {Update} updateFavedStickers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChannelReadMessagesContents.md}
 * @typedef {Update} updateChannelReadMessagesContents
 * @property {int} channel_id
 * @property {Vector.<int>} messages
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateContactsReset.md}
 * @typedef {Update} updateContactsReset
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateChannelAvailableMessages.md}
 * @typedef {Update} updateChannelAvailableMessages
 * @property {int} channel_id
 * @property {int} available_min_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateDialogUnreadMark.md}
 * @typedef {Update} updateDialogUnreadMark
 * @property {#} flags
 * @property {true} unread
 * @property {DialogPeer} peer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.state.md}
 * @typedef {updates.State} updates.state
 * @property {int} pts
 * @property {int} qts
 * @property {int} date
 * @property {int} seq
 * @property {int} unread_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.differenceEmpty.md}
 * @typedef {updates.Difference} updates.differenceEmpty
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.difference.md}
 * @typedef {updates.Difference} updates.difference
 * @property {Vector.<Message>} new_messages
 * @property {Vector.<EncryptedMessage>} new_encrypted_messages
 * @property {Vector.<Update>} other_updates
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 * @property {updates.State} state
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.differenceSlice.md}
 * @typedef {updates.Difference} updates.differenceSlice
 * @property {Vector.<Message>} new_messages
 * @property {Vector.<EncryptedMessage>} new_encrypted_messages
 * @property {Vector.<Update>} other_updates
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 * @property {updates.State} intermediate_state
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.differenceTooLong.md}
 * @typedef {updates.Difference} updates.differenceTooLong
 * @property {int} pts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updatesTooLong.md}
 * @typedef {Updates} updatesTooLong
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateShortMessage.md}
 * @typedef {Updates} updateShortMessage
 * @property {#} flags
 * @property {true} out
 * @property {true} mentioned
 * @property {true} media_unread
 * @property {true} silent
 * @property {int} id
 * @property {int} user_id
 * @property {string} message
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} date
 * @property {MessageFwdHeader} fwd_from
 * @property {int} via_bot_id
 * @property {int} reply_to_msg_id
 * @property {Vector.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateShortChatMessage.md}
 * @typedef {Updates} updateShortChatMessage
 * @property {#} flags
 * @property {true} out
 * @property {true} mentioned
 * @property {true} media_unread
 * @property {true} silent
 * @property {int} id
 * @property {int} from_id
 * @property {int} chat_id
 * @property {string} message
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} date
 * @property {MessageFwdHeader} fwd_from
 * @property {int} via_bot_id
 * @property {int} reply_to_msg_id
 * @property {Vector.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateShort.md}
 * @typedef {Updates} updateShort
 * @property {Update} update
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updatesCombined.md}
 * @typedef {Updates} updatesCombined
 * @property {Vector.<Update>} updates
 * @property {Vector.<User>} users
 * @property {Vector.<Chat>} chats
 * @property {int} date
 * @property {int} seq_start
 * @property {int} seq
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.md}
 * @typedef {Updates} updates
 * @property {Vector.<Update>} updates
 * @property {Vector.<User>} users
 * @property {Vector.<Chat>} chats
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updateShortSentMessage.md}
 * @typedef {Updates} updateShortSentMessage
 * @property {#} flags
 * @property {true} out
 * @property {int} id
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} date
 * @property {MessageMedia} media
 * @property {Vector.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photos.photos.md}
 * @typedef {photos.Photos} photos.photos
 * @property {Vector.<Photo>} photos
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photos.photosSlice.md}
 * @typedef {photos.Photos} photos.photosSlice
 * @property {int} count
 * @property {Vector.<Photo>} photos
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/photos.photo.md}
 * @typedef {photos.Photo} photos.photo
 * @property {Photo} photo
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/upload.file.md}
 * @typedef {upload.File} upload.file
 * @property {storage.FileType} type
 * @property {int} mtime
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/upload.fileCdnRedirect.md}
 * @typedef {upload.File} upload.fileCdnRedirect
 * @property {int} dc_id
 * @property {bytes} file_token
 * @property {bytes} encryption_key
 * @property {bytes} encryption_iv
 * @property {Vector.<FileHash>} file_hashes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/dcOption.md}
 * @typedef {DcOption} dcOption
 * @property {#} flags
 * @property {true} ipv6
 * @property {true} media_only
 * @property {true} tcpo_only
 * @property {true} cdn
 * @property {true} static
 * @property {int} id
 * @property {string} ip_address
 * @property {int} port
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/config.md}
 * @typedef {Config} config
 * @property {#} flags
 * @property {true} phonecalls_enabled
 * @property {true} default_p2p_contacts
 * @property {true} preload_featured_stickers
 * @property {true} ignore_phone_entities
 * @property {true} revoke_pm_inbox
 * @property {true} blocked_mode
 * @property {int} date
 * @property {int} expires
 * @property {Bool} test_mode
 * @property {int} this_dc
 * @property {Vector.<DcOption>} dc_options
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
 * @property {int} tmp_sessions
 * @property {int} pinned_dialogs_count_max
 * @property {int} call_receive_timeout_ms
 * @property {int} call_ring_timeout_ms
 * @property {int} call_connect_timeout_ms
 * @property {int} call_packet_timeout_ms
 * @property {string} me_url_prefix
 * @property {string} autoupdate_url_prefix
 * @property {string} gif_search_username
 * @property {string} venue_search_username
 * @property {string} img_search_username
 * @property {string} static_maps_provider
 * @property {int} caption_length_max
 * @property {int} message_length_max
 * @property {int} webfile_dc_id
 * @property {string} suggested_lang_code
 * @property {int} lang_pack_version
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/nearestDc.md}
 * @typedef {NearestDc} nearestDc
 * @property {string} country
 * @property {int} this_dc
 * @property {int} nearest_dc
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.appUpdate.md}
 * @typedef {help.AppUpdate} help.appUpdate
 * @property {#} flags
 * @property {true} popup
 * @property {int} id
 * @property {string} version
 * @property {string} text
 * @property {Vector.<MessageEntity>} entities
 * @property {Document} document
 * @property {string} url
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.noAppUpdate.md}
 * @typedef {help.AppUpdate} help.noAppUpdate
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.inviteText.md}
 * @typedef {help.InviteText} help.inviteText
 * @property {string} message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedChatEmpty.md}
 * @typedef {EncryptedChat} encryptedChatEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedChatWaiting.md}
 * @typedef {EncryptedChat} encryptedChatWaiting
 * @property {int} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedChatRequested.md}
 * @typedef {EncryptedChat} encryptedChatRequested
 * @property {int} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {bytes} g_a
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedChat.md}
 * @typedef {EncryptedChat} encryptedChat
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedChatDiscarded.md}
 * @typedef {EncryptedChat} encryptedChatDiscarded
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputEncryptedChat.md}
 * @typedef {InputEncryptedChat} inputEncryptedChat
 * @property {int} chat_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedFileEmpty.md}
 * @typedef {EncryptedFile} encryptedFileEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedFile.md}
 * @typedef {EncryptedFile} encryptedFile
 * @property {long} id
 * @property {long} access_hash
 * @property {int} size
 * @property {int} dc_id
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputEncryptedFileEmpty.md}
 * @typedef {InputEncryptedFile} inputEncryptedFileEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputEncryptedFileUploaded.md}
 * @typedef {InputEncryptedFile} inputEncryptedFileUploaded
 * @property {long} id
 * @property {int} parts
 * @property {string} md5_checksum
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputEncryptedFile.md}
 * @typedef {InputEncryptedFile} inputEncryptedFile
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputEncryptedFileBigUploaded.md}
 * @typedef {InputEncryptedFile} inputEncryptedFileBigUploaded
 * @property {long} id
 * @property {int} parts
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedMessage.md}
 * @typedef {EncryptedMessage} encryptedMessage
 * @property {long} random_id
 * @property {int} chat_id
 * @property {int} date
 * @property {bytes} bytes
 * @property {EncryptedFile} file
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/encryptedMessageService.md}
 * @typedef {EncryptedMessage} encryptedMessageService
 * @property {long} random_id
 * @property {int} chat_id
 * @property {int} date
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.dhConfigNotModified.md}
 * @typedef {messages.DhConfig} messages.dhConfigNotModified
 * @property {bytes} random
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.dhConfig.md}
 * @typedef {messages.DhConfig} messages.dhConfig
 * @property {int} g
 * @property {bytes} p
 * @property {int} version
 * @property {bytes} random
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.sentEncryptedMessage.md}
 * @typedef {messages.SentEncryptedMessage} messages.sentEncryptedMessage
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.sentEncryptedFile.md}
 * @typedef {messages.SentEncryptedMessage} messages.sentEncryptedFile
 * @property {int} date
 * @property {EncryptedFile} file
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputDocumentEmpty.md}
 * @typedef {InputDocument} inputDocumentEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputDocument.md}
 * @typedef {InputDocument} inputDocument
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentEmpty.md}
 * @typedef {Document} documentEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/document.md}
 * @typedef {Document} document
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 * @property {int} date
 * @property {string} mime_type
 * @property {int} size
 * @property {PhotoSize} thumb
 * @property {int} dc_id
 * @property {Vector.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.support.md}
 * @typedef {help.Support} help.support
 * @property {string} phone_number
 * @property {User} user
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/notifyPeer.md}
 * @typedef {NotifyPeer} notifyPeer
 * @property {Peer} peer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/notifyUsers.md}
 * @typedef {NotifyPeer} notifyUsers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/notifyChats.md}
 * @typedef {NotifyPeer} notifyChats
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageTypingAction.md}
 * @typedef {SendMessageAction} sendMessageTypingAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageCancelAction.md}
 * @typedef {SendMessageAction} sendMessageCancelAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageRecordVideoAction.md}
 * @typedef {SendMessageAction} sendMessageRecordVideoAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageUploadVideoAction.md}
 * @typedef {SendMessageAction} sendMessageUploadVideoAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageRecordAudioAction.md}
 * @typedef {SendMessageAction} sendMessageRecordAudioAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageUploadAudioAction.md}
 * @typedef {SendMessageAction} sendMessageUploadAudioAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageUploadPhotoAction.md}
 * @typedef {SendMessageAction} sendMessageUploadPhotoAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageUploadDocumentAction.md}
 * @typedef {SendMessageAction} sendMessageUploadDocumentAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageGeoLocationAction.md}
 * @typedef {SendMessageAction} sendMessageGeoLocationAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageChooseContactAction.md}
 * @typedef {SendMessageAction} sendMessageChooseContactAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageGamePlayAction.md}
 * @typedef {SendMessageAction} sendMessageGamePlayAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageRecordRoundAction.md}
 * @typedef {SendMessageAction} sendMessageRecordRoundAction
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/sendMessageUploadRoundAction.md}
 * @typedef {SendMessageAction} sendMessageUploadRoundAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.found.md}
 * @typedef {contacts.Found} contacts.found
 * @property {Vector.<Peer>} my_results
 * @property {Vector.<Peer>} results
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyKeyStatusTimestamp.md}
 * @typedef {InputPrivacyKey} inputPrivacyKeyStatusTimestamp
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyKeyChatInvite.md}
 * @typedef {InputPrivacyKey} inputPrivacyKeyChatInvite
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyKeyPhoneCall.md}
 * @typedef {InputPrivacyKey} inputPrivacyKeyPhoneCall
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyKeyStatusTimestamp.md}
 * @typedef {PrivacyKey} privacyKeyStatusTimestamp
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyKeyChatInvite.md}
 * @typedef {PrivacyKey} privacyKeyChatInvite
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyKeyPhoneCall.md}
 * @typedef {PrivacyKey} privacyKeyPhoneCall
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyValueAllowContacts.md}
 * @typedef {InputPrivacyRule} inputPrivacyValueAllowContacts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyValueAllowAll.md}
 * @typedef {InputPrivacyRule} inputPrivacyValueAllowAll
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyValueAllowUsers.md}
 * @typedef {InputPrivacyRule} inputPrivacyValueAllowUsers
 * @property {Vector.<InputUser>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyValueDisallowContacts.md}
 * @typedef {InputPrivacyRule} inputPrivacyValueDisallowContacts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyValueDisallowAll.md}
 * @typedef {InputPrivacyRule} inputPrivacyValueDisallowAll
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPrivacyValueDisallowUsers.md}
 * @typedef {InputPrivacyRule} inputPrivacyValueDisallowUsers
 * @property {Vector.<InputUser>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyValueAllowContacts.md}
 * @typedef {PrivacyRule} privacyValueAllowContacts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyValueAllowAll.md}
 * @typedef {PrivacyRule} privacyValueAllowAll
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyValueAllowUsers.md}
 * @typedef {PrivacyRule} privacyValueAllowUsers
 * @property {Vector.<int>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyValueDisallowContacts.md}
 * @typedef {PrivacyRule} privacyValueDisallowContacts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyValueDisallowAll.md}
 * @typedef {PrivacyRule} privacyValueDisallowAll
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/privacyValueDisallowUsers.md}
 * @typedef {PrivacyRule} privacyValueDisallowUsers
 * @property {Vector.<int>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.privacyRules.md}
 * @typedef {account.PrivacyRules} account.privacyRules
 * @property {Vector.<PrivacyRule>} rules
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/accountDaysTTL.md}
 * @typedef {AccountDaysTTL} accountDaysTTL
 * @property {int} days
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentAttributeImageSize.md}
 * @typedef {DocumentAttribute} documentAttributeImageSize
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentAttributeAnimated.md}
 * @typedef {DocumentAttribute} documentAttributeAnimated
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentAttributeSticker.md}
 * @typedef {DocumentAttribute} documentAttributeSticker
 * @property {#} flags
 * @property {true} mask
 * @property {string} alt
 * @property {InputStickerSet} stickerset
 * @property {MaskCoords} mask_coords
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentAttributeVideo.md}
 * @typedef {DocumentAttribute} documentAttributeVideo
 * @property {#} flags
 * @property {true} round_message
 * @property {true} supports_streaming
 * @property {int} duration
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentAttributeAudio.md}
 * @typedef {DocumentAttribute} documentAttributeAudio
 * @property {#} flags
 * @property {true} voice
 * @property {int} duration
 * @property {string} title
 * @property {string} performer
 * @property {bytes} waveform
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentAttributeFilename.md}
 * @typedef {DocumentAttribute} documentAttributeFilename
 * @property {string} file_name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/documentAttributeHasStickers.md}
 * @typedef {DocumentAttribute} documentAttributeHasStickers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.stickersNotModified.md}
 * @typedef {messages.Stickers} messages.stickersNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.stickers.md}
 * @typedef {messages.Stickers} messages.stickers
 * @property {int} hash
 * @property {Vector.<Document>} stickers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/stickerPack.md}
 * @typedef {StickerPack} stickerPack
 * @property {string} emoticon
 * @property {Vector.<long>} documents
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.allStickersNotModified.md}
 * @typedef {messages.AllStickers} messages.allStickersNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.allStickers.md}
 * @typedef {messages.AllStickers} messages.allStickers
 * @property {int} hash
 * @property {Vector.<StickerSet>} sets
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.affectedMessages.md}
 * @typedef {messages.AffectedMessages} messages.affectedMessages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contactLinkUnknown.md}
 * @typedef {ContactLink} contactLinkUnknown
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contactLinkNone.md}
 * @typedef {ContactLink} contactLinkNone
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contactLinkHasPhone.md}
 * @typedef {ContactLink} contactLinkHasPhone
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contactLinkContact.md}
 * @typedef {ContactLink} contactLinkContact
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/webPageEmpty.md}
 * @typedef {WebPage} webPageEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/webPagePending.md}
 * @typedef {WebPage} webPagePending
 * @property {long} id
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/webPage.md}
 * @typedef {WebPage} webPage
 * @property {#} flags
 * @property {long} id
 * @property {string} url
 * @property {string} display_url
 * @property {int} hash
 * @property {string} type
 * @property {string} site_name
 * @property {string} title
 * @property {string} description
 * @property {Photo} photo
 * @property {string} embed_url
 * @property {string} embed_type
 * @property {int} embed_width
 * @property {int} embed_height
 * @property {int} duration
 * @property {string} author
 * @property {Document} document
 * @property {Page} cached_page
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/webPageNotModified.md}
 * @typedef {WebPage} webPageNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/authorization.md}
 * @typedef {Authorization} authorization
 * @property {long} hash
 * @property {int} flags
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.authorizations.md}
 * @typedef {account.Authorizations} account.authorizations
 * @property {Vector.<Authorization>} authorizations
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.password.md}
 * @typedef {account.Password} account.password
 * @property {#} flags
 * @property {true} has_recovery
 * @property {true} has_secure_values
 * @property {true} has_password
 * @property {PasswordKdfAlgo} current_algo
 * @property {bytes} srp_B
 * @property {long} srp_id
 * @property {string} hint
 * @property {string} email_unconfirmed_pattern
 * @property {PasswordKdfAlgo} new_algo
 * @property {SecurePasswordKdfAlgo} new_secure_algo
 * @property {bytes} secure_random
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.passwordSettings.md}
 * @typedef {account.PasswordSettings} account.passwordSettings
 * @property {#} flags
 * @property {string} email
 * @property {SecureSecretSettings} secure_settings
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.passwordInputSettings.md}
 * @typedef {account.PasswordInputSettings} account.passwordInputSettings
 * @property {#} flags
 * @property {PasswordKdfAlgo} new_algo
 * @property {bytes} new_password_hash
 * @property {string} hint
 * @property {string} email
 * @property {SecureSecretSettings} new_secure_settings
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.passwordRecovery.md}
 * @typedef {auth.PasswordRecovery} auth.passwordRecovery
 * @property {string} email_pattern
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/receivedNotifyMessage.md}
 * @typedef {ReceivedNotifyMessage} receivedNotifyMessage
 * @property {int} id
 * @property {int} flags
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatInviteEmpty.md}
 * @typedef {ExportedChatInvite} chatInviteEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatInviteExported.md}
 * @typedef {ExportedChatInvite} chatInviteExported
 * @property {string} link
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatInviteAlready.md}
 * @typedef {ChatInvite} chatInviteAlready
 * @property {Chat} chat
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/chatInvite.md}
 * @typedef {ChatInvite} chatInvite
 * @property {#} flags
 * @property {true} channel
 * @property {true} broadcast
 * @property {true} public
 * @property {true} megagroup
 * @property {string} title
 * @property {ChatPhoto} photo
 * @property {int} participants_count
 * @property {Vector.<User>} participants
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputStickerSetEmpty.md}
 * @typedef {InputStickerSet} inputStickerSetEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputStickerSetID.md}
 * @typedef {InputStickerSet} inputStickerSetID
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputStickerSetShortName.md}
 * @typedef {InputStickerSet} inputStickerSetShortName
 * @property {string} short_name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/stickerSet.md}
 * @typedef {StickerSet} stickerSet
 * @property {#} flags
 * @property {true} archived
 * @property {true} official
 * @property {true} masks
 * @property {int} installed_date
 * @property {long} id
 * @property {long} access_hash
 * @property {string} title
 * @property {string} short_name
 * @property {int} count
 * @property {int} hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.stickerSet.md}
 * @typedef {messages.StickerSet} messages.stickerSet
 * @property {StickerSet} set
 * @property {Vector.<StickerPack>} packs
 * @property {Vector.<Document>} documents
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botCommand.md}
 * @typedef {BotCommand} botCommand
 * @property {string} command
 * @property {string} description
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInfo.md}
 * @typedef {BotInfo} botInfo
 * @property {int} user_id
 * @property {string} description
 * @property {Vector.<BotCommand>} commands
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButton.md}
 * @typedef {KeyboardButton} keyboardButton
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonUrl.md}
 * @typedef {KeyboardButton} keyboardButtonUrl
 * @property {string} text
 * @property {string} url
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonCallback.md}
 * @typedef {KeyboardButton} keyboardButtonCallback
 * @property {string} text
 * @property {bytes} data
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonRequestPhone.md}
 * @typedef {KeyboardButton} keyboardButtonRequestPhone
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonRequestGeoLocation.md}
 * @typedef {KeyboardButton} keyboardButtonRequestGeoLocation
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonSwitchInline.md}
 * @typedef {KeyboardButton} keyboardButtonSwitchInline
 * @property {#} flags
 * @property {true} same_peer
 * @property {string} text
 * @property {string} query
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonGame.md}
 * @typedef {KeyboardButton} keyboardButtonGame
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonBuy.md}
 * @typedef {KeyboardButton} keyboardButtonBuy
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/keyboardButtonRow.md}
 * @typedef {KeyboardButtonRow} keyboardButtonRow
 * @property {Vector.<KeyboardButton>} buttons
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/replyKeyboardHide.md}
 * @typedef {ReplyMarkup} replyKeyboardHide
 * @property {#} flags
 * @property {true} selective
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/replyKeyboardForceReply.md}
 * @typedef {ReplyMarkup} replyKeyboardForceReply
 * @property {#} flags
 * @property {true} single_use
 * @property {true} selective
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/replyKeyboardMarkup.md}
 * @typedef {ReplyMarkup} replyKeyboardMarkup
 * @property {#} flags
 * @property {true} resize
 * @property {true} single_use
 * @property {true} selective
 * @property {Vector.<KeyboardButtonRow>} rows
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/replyInlineMarkup.md}
 * @typedef {ReplyMarkup} replyInlineMarkup
 * @property {Vector.<KeyboardButtonRow>} rows
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityUnknown.md}
 * @typedef {MessageEntity} messageEntityUnknown
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityMention.md}
 * @typedef {MessageEntity} messageEntityMention
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityHashtag.md}
 * @typedef {MessageEntity} messageEntityHashtag
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityBotCommand.md}
 * @typedef {MessageEntity} messageEntityBotCommand
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityUrl.md}
 * @typedef {MessageEntity} messageEntityUrl
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityEmail.md}
 * @typedef {MessageEntity} messageEntityEmail
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityBold.md}
 * @typedef {MessageEntity} messageEntityBold
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityItalic.md}
 * @typedef {MessageEntity} messageEntityItalic
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityCode.md}
 * @typedef {MessageEntity} messageEntityCode
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityPre.md}
 * @typedef {MessageEntity} messageEntityPre
 * @property {int} offset
 * @property {int} length
 * @property {string} language
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityTextUrl.md}
 * @typedef {MessageEntity} messageEntityTextUrl
 * @property {int} offset
 * @property {int} length
 * @property {string} url
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityMentionName.md}
 * @typedef {MessageEntity} messageEntityMentionName
 * @property {int} offset
 * @property {int} length
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessageEntityMentionName.md}
 * @typedef {MessageEntity} inputMessageEntityMentionName
 * @property {int} offset
 * @property {int} length
 * @property {InputUser} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityPhone.md}
 * @typedef {MessageEntity} messageEntityPhone
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageEntityCashtag.md}
 * @typedef {MessageEntity} messageEntityCashtag
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputChannelEmpty.md}
 * @typedef {InputChannel} inputChannelEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputChannel.md}
 * @typedef {InputChannel} inputChannel
 * @property {int} channel_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.resolvedPeer.md}
 * @typedef {contacts.ResolvedPeer} contacts.resolvedPeer
 * @property {Peer} peer
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageRange.md}
 * @typedef {MessageRange} messageRange
 * @property {int} min_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.channelDifferenceEmpty.md}
 * @typedef {updates.ChannelDifference} updates.channelDifferenceEmpty
 * @property {#} flags
 * @property {true} final
 * @property {int} pts
 * @property {int} timeout
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.channelDifferenceTooLong.md}
 * @typedef {updates.ChannelDifference} updates.channelDifferenceTooLong
 * @property {#} flags
 * @property {true} final
 * @property {int} pts
 * @property {int} timeout
 * @property {int} top_message
 * @property {int} read_inbox_max_id
 * @property {int} read_outbox_max_id
 * @property {int} unread_count
 * @property {int} unread_mentions_count
 * @property {Vector.<Message>} messages
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/updates.channelDifference.md}
 * @typedef {updates.ChannelDifference} updates.channelDifference
 * @property {#} flags
 * @property {true} final
 * @property {int} pts
 * @property {int} timeout
 * @property {Vector.<Message>} new_messages
 * @property {Vector.<Update>} other_updates
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelMessagesFilterEmpty.md}
 * @typedef {ChannelMessagesFilter} channelMessagesFilterEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelMessagesFilter.md}
 * @typedef {ChannelMessagesFilter} channelMessagesFilter
 * @property {#} flags
 * @property {true} exclude_new_messages
 * @property {Vector.<MessageRange>} ranges
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipant.md}
 * @typedef {ChannelParticipant} channelParticipant
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantSelf.md}
 * @typedef {ChannelParticipant} channelParticipantSelf
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantCreator.md}
 * @typedef {ChannelParticipant} channelParticipantCreator
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantAdmin.md}
 * @typedef {ChannelParticipant} channelParticipantAdmin
 * @property {#} flags
 * @property {true} can_edit
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} promoted_by
 * @property {int} date
 * @property {ChannelAdminRights} admin_rights
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantBanned.md}
 * @typedef {ChannelParticipant} channelParticipantBanned
 * @property {#} flags
 * @property {true} left
 * @property {int} user_id
 * @property {int} kicked_by
 * @property {int} date
 * @property {ChannelBannedRights} banned_rights
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantsRecent.md}
 * @typedef {ChannelParticipantsFilter} channelParticipantsRecent
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantsAdmins.md}
 * @typedef {ChannelParticipantsFilter} channelParticipantsAdmins
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantsKicked.md}
 * @typedef {ChannelParticipantsFilter} channelParticipantsKicked
 * @property {string} q
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantsBots.md}
 * @typedef {ChannelParticipantsFilter} channelParticipantsBots
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantsBanned.md}
 * @typedef {ChannelParticipantsFilter} channelParticipantsBanned
 * @property {string} q
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelParticipantsSearch.md}
 * @typedef {ChannelParticipantsFilter} channelParticipantsSearch
 * @property {string} q
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channels.channelParticipants.md}
 * @typedef {channels.ChannelParticipants} channels.channelParticipants
 * @property {int} count
 * @property {Vector.<ChannelParticipant>} participants
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channels.channelParticipantsNotModified.md}
 * @typedef {channels.ChannelParticipants} channels.channelParticipantsNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channels.channelParticipant.md}
 * @typedef {channels.ChannelParticipant} channels.channelParticipant
 * @property {ChannelParticipant} participant
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.termsOfService.md}
 * @typedef {help.TermsOfService} help.termsOfService
 * @property {#} flags
 * @property {true} popup
 * @property {DataJSON} id
 * @property {string} text
 * @property {Vector.<MessageEntity>} entities
 * @property {int} min_age_confirm
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/foundGif.md}
 * @typedef {FoundGif} foundGif
 * @property {string} url
 * @property {string} thumb_url
 * @property {string} content_url
 * @property {string} content_type
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/foundGifCached.md}
 * @typedef {FoundGif} foundGifCached
 * @property {string} url
 * @property {Photo} photo
 * @property {Document} document
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.foundGifs.md}
 * @typedef {messages.FoundGifs} messages.foundGifs
 * @property {int} next_offset
 * @property {Vector.<FoundGif>} results
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.savedGifsNotModified.md}
 * @typedef {messages.SavedGifs} messages.savedGifsNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.savedGifs.md}
 * @typedef {messages.SavedGifs} messages.savedGifs
 * @property {int} hash
 * @property {Vector.<Document>} gifs
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineMessageMediaAuto.md}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaAuto
 * @property {#} flags
 * @property {string} message
 * @property {Vector.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineMessageText.md}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageText
 * @property {#} flags
 * @property {true} no_webpage
 * @property {string} message
 * @property {Vector.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineMessageMediaGeo.md}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaGeo
 * @property {#} flags
 * @property {InputGeoPoint} geo_point
 * @property {int} period
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineMessageMediaVenue.md}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaVenue
 * @property {#} flags
 * @property {InputGeoPoint} geo_point
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineMessageMediaContact.md}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaContact
 * @property {#} flags
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineMessageGame.md}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageGame
 * @property {#} flags
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineResult.md}
 * @typedef {InputBotInlineResult} inputBotInlineResult
 * @property {#} flags
 * @property {string} id
 * @property {string} type
 * @property {string} title
 * @property {string} description
 * @property {string} url
 * @property {InputWebDocument} thumb
 * @property {InputWebDocument} content
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineResultPhoto.md}
 * @typedef {InputBotInlineResult} inputBotInlineResultPhoto
 * @property {string} id
 * @property {string} type
 * @property {InputPhoto} photo
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineResultDocument.md}
 * @typedef {InputBotInlineResult} inputBotInlineResultDocument
 * @property {#} flags
 * @property {string} id
 * @property {string} type
 * @property {string} title
 * @property {string} description
 * @property {InputDocument} document
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineResultGame.md}
 * @typedef {InputBotInlineResult} inputBotInlineResultGame
 * @property {string} id
 * @property {string} short_name
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInlineMessageMediaAuto.md}
 * @typedef {BotInlineMessage} botInlineMessageMediaAuto
 * @property {#} flags
 * @property {string} message
 * @property {Vector.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInlineMessageText.md}
 * @typedef {BotInlineMessage} botInlineMessageText
 * @property {#} flags
 * @property {true} no_webpage
 * @property {string} message
 * @property {Vector.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInlineMessageMediaGeo.md}
 * @typedef {BotInlineMessage} botInlineMessageMediaGeo
 * @property {#} flags
 * @property {GeoPoint} geo
 * @property {int} period
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInlineMessageMediaVenue.md}
 * @typedef {BotInlineMessage} botInlineMessageMediaVenue
 * @property {#} flags
 * @property {GeoPoint} geo
 * @property {string} title
 * @property {string} address
 * @property {string} provider
 * @property {string} venue_id
 * @property {string} venue_type
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInlineMessageMediaContact.md}
 * @typedef {BotInlineMessage} botInlineMessageMediaContact
 * @property {#} flags
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInlineResult.md}
 * @typedef {BotInlineResult} botInlineResult
 * @property {#} flags
 * @property {string} id
 * @property {string} type
 * @property {string} title
 * @property {string} description
 * @property {string} url
 * @property {WebDocument} thumb
 * @property {WebDocument} content
 * @property {BotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/botInlineMediaResult.md}
 * @typedef {BotInlineResult} botInlineMediaResult
 * @property {#} flags
 * @property {string} id
 * @property {string} type
 * @property {Photo} photo
 * @property {Document} document
 * @property {string} title
 * @property {string} description
 * @property {BotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.botResults.md}
 * @typedef {messages.BotResults} messages.botResults
 * @property {#} flags
 * @property {true} gallery
 * @property {long} query_id
 * @property {string} next_offset
 * @property {InlineBotSwitchPM} switch_pm
 * @property {Vector.<BotInlineResult>} results
 * @property {int} cache_time
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/exportedMessageLink.md}
 * @typedef {ExportedMessageLink} exportedMessageLink
 * @property {string} link
 * @property {string} html
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messageFwdHeader.md}
 * @typedef {MessageFwdHeader} messageFwdHeader
 * @property {#} flags
 * @property {int} from_id
 * @property {int} date
 * @property {int} channel_id
 * @property {int} channel_post
 * @property {string} post_author
 * @property {Peer} saved_from_peer
 * @property {int} saved_from_msg_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.codeTypeSms.md}
 * @typedef {auth.CodeType} auth.codeTypeSms
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.codeTypeCall.md}
 * @typedef {auth.CodeType} auth.codeTypeCall
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.codeTypeFlashCall.md}
 * @typedef {auth.CodeType} auth.codeTypeFlashCall
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.sentCodeTypeApp.md}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeApp
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.sentCodeTypeSms.md}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeSms
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.sentCodeTypeCall.md}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeCall
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/auth.sentCodeTypeFlashCall.md}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeFlashCall
 * @property {string} pattern
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.botCallbackAnswer.md}
 * @typedef {messages.BotCallbackAnswer} messages.botCallbackAnswer
 * @property {#} flags
 * @property {true} alert
 * @property {true} has_url
 * @property {true} native_ui
 * @property {string} message
 * @property {string} url
 * @property {int} cache_time
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.messageEditData.md}
 * @typedef {messages.MessageEditData} messages.messageEditData
 * @property {#} flags
 * @property {true} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputBotInlineMessageID.md}
 * @typedef {InputBotInlineMessageID} inputBotInlineMessageID
 * @property {int} dc_id
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inlineBotSwitchPM.md}
 * @typedef {InlineBotSwitchPM} inlineBotSwitchPM
 * @property {string} text
 * @property {string} start_param
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.peerDialogs.md}
 * @typedef {messages.PeerDialogs} messages.peerDialogs
 * @property {Vector.<Dialog>} dialogs
 * @property {Vector.<Message>} messages
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 * @property {updates.State} state
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeer.md}
 * @typedef {TopPeer} topPeer
 * @property {Peer} peer
 * @property {double} rating
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeerCategoryBotsPM.md}
 * @typedef {TopPeerCategory} topPeerCategoryBotsPM
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeerCategoryBotsInline.md}
 * @typedef {TopPeerCategory} topPeerCategoryBotsInline
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeerCategoryCorrespondents.md}
 * @typedef {TopPeerCategory} topPeerCategoryCorrespondents
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeerCategoryGroups.md}
 * @typedef {TopPeerCategory} topPeerCategoryGroups
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeerCategoryChannels.md}
 * @typedef {TopPeerCategory} topPeerCategoryChannels
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeerCategoryPhoneCalls.md}
 * @typedef {TopPeerCategory} topPeerCategoryPhoneCalls
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/topPeerCategoryPeers.md}
 * @typedef {TopPeerCategoryPeers} topPeerCategoryPeers
 * @property {TopPeerCategory} category
 * @property {int} count
 * @property {Vector.<TopPeer>} peers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.topPeersNotModified.md}
 * @typedef {contacts.TopPeers} contacts.topPeersNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.topPeers.md}
 * @typedef {contacts.TopPeers} contacts.topPeers
 * @property {Vector.<TopPeerCategoryPeers>} categories
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/contacts.topPeersDisabled.md}
 * @typedef {contacts.TopPeers} contacts.topPeersDisabled
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/draftMessageEmpty.md}
 * @typedef {DraftMessage} draftMessageEmpty
 * @property {#} flags
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/draftMessage.md}
 * @typedef {DraftMessage} draftMessage
 * @property {#} flags
 * @property {true} no_webpage
 * @property {int} reply_to_msg_id
 * @property {string} message
 * @property {Vector.<MessageEntity>} entities
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.featuredStickersNotModified.md}
 * @typedef {messages.FeaturedStickers} messages.featuredStickersNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.featuredStickers.md}
 * @typedef {messages.FeaturedStickers} messages.featuredStickers
 * @property {int} hash
 * @property {Vector.<StickerSetCovered>} sets
 * @property {Vector.<long>} unread
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.recentStickersNotModified.md}
 * @typedef {messages.RecentStickers} messages.recentStickersNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.recentStickers.md}
 * @typedef {messages.RecentStickers} messages.recentStickers
 * @property {int} hash
 * @property {Vector.<StickerPack>} packs
 * @property {Vector.<Document>} stickers
 * @property {Vector.<int>} dates
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.archivedStickers.md}
 * @typedef {messages.ArchivedStickers} messages.archivedStickers
 * @property {int} count
 * @property {Vector.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.stickerSetInstallResultSuccess.md}
 * @typedef {messages.StickerSetInstallResult} messages.stickerSetInstallResultSuccess
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.stickerSetInstallResultArchive.md}
 * @typedef {messages.StickerSetInstallResult} messages.stickerSetInstallResultArchive
 * @property {Vector.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/stickerSetCovered.md}
 * @typedef {StickerSetCovered} stickerSetCovered
 * @property {StickerSet} set
 * @property {Document} cover
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/stickerSetMultiCovered.md}
 * @typedef {StickerSetCovered} stickerSetMultiCovered
 * @property {StickerSet} set
 * @property {Vector.<Document>} covers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/maskCoords.md}
 * @typedef {MaskCoords} maskCoords
 * @property {int} n
 * @property {double} x
 * @property {double} y
 * @property {double} zoom
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputStickeredMediaPhoto.md}
 * @typedef {InputStickeredMedia} inputStickeredMediaPhoto
 * @property {InputPhoto} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputStickeredMediaDocument.md}
 * @typedef {InputStickeredMedia} inputStickeredMediaDocument
 * @property {InputDocument} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/game.md}
 * @typedef {Game} game
 * @property {#} flags
 * @property {long} id
 * @property {long} access_hash
 * @property {string} short_name
 * @property {string} title
 * @property {string} description
 * @property {Photo} photo
 * @property {Document} document
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputGameID.md}
 * @typedef {InputGame} inputGameID
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputGameShortName.md}
 * @typedef {InputGame} inputGameShortName
 * @property {InputUser} bot_id
 * @property {string} short_name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/highScore.md}
 * @typedef {HighScore} highScore
 * @property {int} pos
 * @property {int} user_id
 * @property {int} score
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.highScores.md}
 * @typedef {messages.HighScores} messages.highScores
 * @property {Vector.<HighScore>} scores
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textEmpty.md}
 * @typedef {RichText} textEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textPlain.md}
 * @typedef {RichText} textPlain
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textBold.md}
 * @typedef {RichText} textBold
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textItalic.md}
 * @typedef {RichText} textItalic
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textUnderline.md}
 * @typedef {RichText} textUnderline
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textStrike.md}
 * @typedef {RichText} textStrike
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textFixed.md}
 * @typedef {RichText} textFixed
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textUrl.md}
 * @typedef {RichText} textUrl
 * @property {RichText} text
 * @property {string} url
 * @property {long} webpage_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textEmail.md}
 * @typedef {RichText} textEmail
 * @property {RichText} text
 * @property {string} email
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/textConcat.md}
 * @typedef {RichText} textConcat
 * @property {Vector.<RichText>} texts
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockUnsupported.md}
 * @typedef {PageBlock} pageBlockUnsupported
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockTitle.md}
 * @typedef {PageBlock} pageBlockTitle
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockSubtitle.md}
 * @typedef {PageBlock} pageBlockSubtitle
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockAuthorDate.md}
 * @typedef {PageBlock} pageBlockAuthorDate
 * @property {RichText} author
 * @property {int} published_date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockHeader.md}
 * @typedef {PageBlock} pageBlockHeader
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockSubheader.md}
 * @typedef {PageBlock} pageBlockSubheader
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockParagraph.md}
 * @typedef {PageBlock} pageBlockParagraph
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockPreformatted.md}
 * @typedef {PageBlock} pageBlockPreformatted
 * @property {RichText} text
 * @property {string} language
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockFooter.md}
 * @typedef {PageBlock} pageBlockFooter
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockDivider.md}
 * @typedef {PageBlock} pageBlockDivider
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockAnchor.md}
 * @typedef {PageBlock} pageBlockAnchor
 * @property {string} name
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockList.md}
 * @typedef {PageBlock} pageBlockList
 * @property {Bool} ordered
 * @property {Vector.<RichText>} items
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockBlockquote.md}
 * @typedef {PageBlock} pageBlockBlockquote
 * @property {RichText} text
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockPullquote.md}
 * @typedef {PageBlock} pageBlockPullquote
 * @property {RichText} text
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockPhoto.md}
 * @typedef {PageBlock} pageBlockPhoto
 * @property {long} photo_id
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockVideo.md}
 * @typedef {PageBlock} pageBlockVideo
 * @property {#} flags
 * @property {true} autoplay
 * @property {true} loop
 * @property {long} video_id
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockCover.md}
 * @typedef {PageBlock} pageBlockCover
 * @property {PageBlock} cover
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockEmbed.md}
 * @typedef {PageBlock} pageBlockEmbed
 * @property {#} flags
 * @property {true} full_width
 * @property {true} allow_scrolling
 * @property {string} url
 * @property {string} html
 * @property {long} poster_photo_id
 * @property {int} w
 * @property {int} h
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockEmbedPost.md}
 * @typedef {PageBlock} pageBlockEmbedPost
 * @property {string} url
 * @property {long} webpage_id
 * @property {long} author_photo_id
 * @property {string} author
 * @property {int} date
 * @property {Vector.<PageBlock>} blocks
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockCollage.md}
 * @typedef {PageBlock} pageBlockCollage
 * @property {Vector.<PageBlock>} items
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockSlideshow.md}
 * @typedef {PageBlock} pageBlockSlideshow
 * @property {Vector.<PageBlock>} items
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockChannel.md}
 * @typedef {PageBlock} pageBlockChannel
 * @property {Chat} channel
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageBlockAudio.md}
 * @typedef {PageBlock} pageBlockAudio
 * @property {long} audio_id
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pagePart.md}
 * @typedef {Page} pagePart
 * @property {Vector.<PageBlock>} blocks
 * @property {Vector.<Photo>} photos
 * @property {Vector.<Document>} documents
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/pageFull.md}
 * @typedef {Page} pageFull
 * @property {Vector.<PageBlock>} blocks
 * @property {Vector.<Photo>} photos
 * @property {Vector.<Document>} documents
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallDiscardReasonMissed.md}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonMissed
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallDiscardReasonDisconnect.md}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonDisconnect
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallDiscardReasonHangup.md}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonHangup
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallDiscardReasonBusy.md}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonBusy
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/dataJSON.md}
 * @typedef {DataJSON} dataJSON
 * @property {string} data
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/labeledPrice.md}
 * @typedef {LabeledPrice} labeledPrice
 * @property {string} label
 * @property {long} amount
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/invoice.md}
 * @typedef {Invoice} invoice
 * @property {#} flags
 * @property {true} test
 * @property {true} name_requested
 * @property {true} phone_requested
 * @property {true} email_requested
 * @property {true} shipping_address_requested
 * @property {true} flexible
 * @property {true} phone_to_provider
 * @property {true} email_to_provider
 * @property {string} currency
 * @property {Vector.<LabeledPrice>} prices
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/paymentCharge.md}
 * @typedef {PaymentCharge} paymentCharge
 * @property {string} id
 * @property {string} provider_charge_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/postAddress.md}
 * @typedef {PostAddress} postAddress
 * @property {string} street_line1
 * @property {string} street_line2
 * @property {string} city
 * @property {string} state
 * @property {string} country_iso2
 * @property {string} post_code
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/paymentRequestedInfo.md}
 * @typedef {PaymentRequestedInfo} paymentRequestedInfo
 * @property {#} flags
 * @property {string} name
 * @property {string} phone
 * @property {string} email
 * @property {PostAddress} shipping_address
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/paymentSavedCredentialsCard.md}
 * @typedef {PaymentSavedCredentials} paymentSavedCredentialsCard
 * @property {string} id
 * @property {string} title
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/webDocument.md}
 * @typedef {WebDocument} webDocument
 * @property {string} url
 * @property {long} access_hash
 * @property {int} size
 * @property {string} mime_type
 * @property {Vector.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/webDocumentNoProxy.md}
 * @typedef {WebDocument} webDocumentNoProxy
 * @property {string} url
 * @property {int} size
 * @property {string} mime_type
 * @property {Vector.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputWebDocument.md}
 * @typedef {InputWebDocument} inputWebDocument
 * @property {string} url
 * @property {int} size
 * @property {string} mime_type
 * @property {Vector.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputWebFileLocation.md}
 * @typedef {InputWebFileLocation} inputWebFileLocation
 * @property {string} url
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputWebFileGeoPointLocation.md}
 * @typedef {InputWebFileLocation} inputWebFileGeoPointLocation
 * @property {InputGeoPoint} geo_point
 * @property {long} access_hash
 * @property {int} w
 * @property {int} h
 * @property {int} zoom
 * @property {int} scale
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/upload.webFile.md}
 * @typedef {upload.WebFile} upload.webFile
 * @property {int} size
 * @property {string} mime_type
 * @property {storage.FileType} file_type
 * @property {int} mtime
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/payments.paymentForm.md}
 * @typedef {payments.PaymentForm} payments.paymentForm
 * @property {#} flags
 * @property {true} can_save_credentials
 * @property {true} password_missing
 * @property {int} bot_id
 * @property {Invoice} invoice
 * @property {int} provider_id
 * @property {string} url
 * @property {string} native_provider
 * @property {DataJSON} native_params
 * @property {PaymentRequestedInfo} saved_info
 * @property {PaymentSavedCredentials} saved_credentials
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/payments.validatedRequestedInfo.md}
 * @typedef {payments.ValidatedRequestedInfo} payments.validatedRequestedInfo
 * @property {#} flags
 * @property {string} id
 * @property {Vector.<ShippingOption>} shipping_options
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/payments.paymentResult.md}
 * @typedef {payments.PaymentResult} payments.paymentResult
 * @property {Updates} updates
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/payments.paymentVerficationNeeded.md}
 * @typedef {payments.PaymentResult} payments.paymentVerficationNeeded
 * @property {string} url
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/payments.paymentReceipt.md}
 * @typedef {payments.PaymentReceipt} payments.paymentReceipt
 * @property {#} flags
 * @property {int} date
 * @property {int} bot_id
 * @property {Invoice} invoice
 * @property {int} provider_id
 * @property {PaymentRequestedInfo} info
 * @property {ShippingOption} shipping
 * @property {string} currency
 * @property {long} total_amount
 * @property {string} credentials_title
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/payments.savedInfo.md}
 * @typedef {payments.SavedInfo} payments.savedInfo
 * @property {#} flags
 * @property {true} has_saved_credentials
 * @property {PaymentRequestedInfo} saved_info
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPaymentCredentialsSaved.md}
 * @typedef {InputPaymentCredentials} inputPaymentCredentialsSaved
 * @property {string} id
 * @property {bytes} tmp_password
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPaymentCredentials.md}
 * @typedef {InputPaymentCredentials} inputPaymentCredentials
 * @property {#} flags
 * @property {true} save
 * @property {DataJSON} data
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPaymentCredentialsApplePay.md}
 * @typedef {InputPaymentCredentials} inputPaymentCredentialsApplePay
 * @property {DataJSON} payment_data
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPaymentCredentialsAndroidPay.md}
 * @typedef {InputPaymentCredentials} inputPaymentCredentialsAndroidPay
 * @property {DataJSON} payment_token
 * @property {string} google_transaction_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.tmpPassword.md}
 * @typedef {account.TmpPassword} account.tmpPassword
 * @property {bytes} tmp_password
 * @property {int} valid_until
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/shippingOption.md}
 * @typedef {ShippingOption} shippingOption
 * @property {string} id
 * @property {string} title
 * @property {Vector.<LabeledPrice>} prices
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputStickerSetItem.md}
 * @typedef {InputStickerSetItem} inputStickerSetItem
 * @property {#} flags
 * @property {InputDocument} document
 * @property {string} emoji
 * @property {MaskCoords} mask_coords
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputPhoneCall.md}
 * @typedef {InputPhoneCall} inputPhoneCall
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallEmpty.md}
 * @typedef {PhoneCall} phoneCallEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallWaiting.md}
 * @typedef {PhoneCall} phoneCallWaiting
 * @property {#} flags
 * @property {long} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {PhoneCallProtocol} protocol
 * @property {int} receive_date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallRequested.md}
 * @typedef {PhoneCall} phoneCallRequested
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallAccepted.md}
 * @typedef {PhoneCall} phoneCallAccepted
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCall.md}
 * @typedef {PhoneCall} phoneCall
 * @property {long} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 * @property {bytes} g_a_or_b
 * @property {long} key_fingerprint
 * @property {PhoneCallProtocol} protocol
 * @property {PhoneConnection} connection
 * @property {Vector.<PhoneConnection>} alternative_connections
 * @property {int} start_date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallDiscarded.md}
 * @typedef {PhoneCall} phoneCallDiscarded
 * @property {#} flags
 * @property {true} need_rating
 * @property {true} need_debug
 * @property {long} id
 * @property {PhoneCallDiscardReason} reason
 * @property {int} duration
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneConnection.md}
 * @typedef {PhoneConnection} phoneConnection
 * @property {long} id
 * @property {string} ip
 * @property {string} ipv6
 * @property {int} port
 * @property {bytes} peer_tag
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phoneCallProtocol.md}
 * @typedef {PhoneCallProtocol} phoneCallProtocol
 * @property {#} flags
 * @property {true} udp_p2p
 * @property {true} udp_reflector
 * @property {int} min_layer
 * @property {int} max_layer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/phone.phoneCall.md}
 * @typedef {phone.PhoneCall} phone.phoneCall
 * @property {PhoneCall} phone_call
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/upload.cdnFileReuploadNeeded.md}
 * @typedef {upload.CdnFile} upload.cdnFileReuploadNeeded
 * @property {bytes} request_token
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/upload.cdnFile.md}
 * @typedef {upload.CdnFile} upload.cdnFile
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/cdnPublicKey.md}
 * @typedef {CdnPublicKey} cdnPublicKey
 * @property {int} dc_id
 * @property {string} public_key
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/cdnConfig.md}
 * @typedef {CdnConfig} cdnConfig
 * @property {Vector.<CdnPublicKey>} public_keys
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/langPackString.md}
 * @typedef {LangPackString} langPackString
 * @property {string} key
 * @property {string} value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/langPackStringPluralized.md}
 * @typedef {LangPackString} langPackStringPluralized
 * @property {#} flags
 * @property {string} key
 * @property {string} zero_value
 * @property {string} one_value
 * @property {string} two_value
 * @property {string} few_value
 * @property {string} many_value
 * @property {string} other_value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/langPackStringDeleted.md}
 * @typedef {LangPackString} langPackStringDeleted
 * @property {string} key
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/langPackDifference.md}
 * @typedef {LangPackDifference} langPackDifference
 * @property {string} lang_code
 * @property {int} from_version
 * @property {int} version
 * @property {Vector.<LangPackString>} strings
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/langPackLanguage.md}
 * @typedef {LangPackLanguage} langPackLanguage
 * @property {string} name
 * @property {string} native_name
 * @property {string} lang_code
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminRights.md}
 * @typedef {ChannelAdminRights} channelAdminRights
 * @property {#} flags
 * @property {true} change_info
 * @property {true} post_messages
 * @property {true} edit_messages
 * @property {true} delete_messages
 * @property {true} ban_users
 * @property {true} invite_users
 * @property {true} invite_link
 * @property {true} pin_messages
 * @property {true} add_admins
 * @property {true} manage_call
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelBannedRights.md}
 * @typedef {ChannelBannedRights} channelBannedRights
 * @property {#} flags
 * @property {true} view_messages
 * @property {true} send_messages
 * @property {true} send_media
 * @property {true} send_stickers
 * @property {true} send_gifs
 * @property {true} send_games
 * @property {true} send_inline
 * @property {true} embed_links
 * @property {int} until_date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionChangeTitle.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeTitle
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionChangeAbout.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeAbout
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionChangeUsername.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeUsername
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionChangePhoto.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangePhoto
 * @property {ChatPhoto} prev_photo
 * @property {ChatPhoto} new_photo
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionToggleInvites.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionToggleInvites
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionToggleSignatures.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionToggleSignatures
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionUpdatePinned.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionUpdatePinned
 * @property {Message} message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionEditMessage.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionEditMessage
 * @property {Message} prev_message
 * @property {Message} new_message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionDeleteMessage.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionDeleteMessage
 * @property {Message} message
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionParticipantJoin.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantJoin
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionParticipantLeave.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantLeave
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionParticipantInvite.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantInvite
 * @property {ChannelParticipant} participant
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionParticipantToggleBan.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantToggleBan
 * @property {ChannelParticipant} prev_participant
 * @property {ChannelParticipant} new_participant
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionParticipantToggleAdmin.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantToggleAdmin
 * @property {ChannelParticipant} prev_participant
 * @property {ChannelParticipant} new_participant
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionChangeStickerSet.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeStickerSet
 * @property {InputStickerSet} prev_stickerset
 * @property {InputStickerSet} new_stickerset
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventActionTogglePreHistoryHidden.md}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionTogglePreHistoryHidden
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEvent.md}
 * @typedef {ChannelAdminLogEvent} channelAdminLogEvent
 * @property {long} id
 * @property {int} date
 * @property {int} user_id
 * @property {ChannelAdminLogEventAction} action
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channels.adminLogResults.md}
 * @typedef {channels.AdminLogResults} channels.adminLogResults
 * @property {Vector.<ChannelAdminLogEvent>} events
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/channelAdminLogEventsFilter.md}
 * @typedef {ChannelAdminLogEventsFilter} channelAdminLogEventsFilter
 * @property {#} flags
 * @property {true} join
 * @property {true} leave
 * @property {true} invite
 * @property {true} ban
 * @property {true} unban
 * @property {true} kick
 * @property {true} unkick
 * @property {true} promote
 * @property {true} demote
 * @property {true} info
 * @property {true} settings
 * @property {true} pinned
 * @property {true} edit
 * @property {true} delete
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/popularContact.md}
 * @typedef {PopularContact} popularContact
 * @property {long} client_id
 * @property {int} importers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.favedStickersNotModified.md}
 * @typedef {messages.FavedStickers} messages.favedStickersNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.favedStickers.md}
 * @typedef {messages.FavedStickers} messages.favedStickers
 * @property {int} hash
 * @property {Vector.<StickerPack>} packs
 * @property {Vector.<Document>} stickers
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/recentMeUrlUnknown.md}
 * @typedef {RecentMeUrl} recentMeUrlUnknown
 * @property {string} url
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/recentMeUrlUser.md}
 * @typedef {RecentMeUrl} recentMeUrlUser
 * @property {string} url
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/recentMeUrlChat.md}
 * @typedef {RecentMeUrl} recentMeUrlChat
 * @property {string} url
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/recentMeUrlChatInvite.md}
 * @typedef {RecentMeUrl} recentMeUrlChatInvite
 * @property {string} url
 * @property {ChatInvite} chat_invite
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/recentMeUrlStickerSet.md}
 * @typedef {RecentMeUrl} recentMeUrlStickerSet
 * @property {string} url
 * @property {StickerSetCovered} set
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.recentMeUrls.md}
 * @typedef {help.RecentMeUrls} help.recentMeUrls
 * @property {Vector.<RecentMeUrl>} urls
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputSingleMedia.md}
 * @typedef {InputSingleMedia} inputSingleMedia
 * @property {#} flags
 * @property {InputMedia} media
 * @property {long} random_id
 * @property {string} message
 * @property {Vector.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/webAuthorization.md}
 * @typedef {WebAuthorization} webAuthorization
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.webAuthorizations.md}
 * @typedef {account.WebAuthorizations} account.webAuthorizations
 * @property {Vector.<WebAuthorization>} authorizations
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessageID.md}
 * @typedef {InputMessage} inputMessageID
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessageReplyTo.md}
 * @typedef {InputMessage} inputMessageReplyTo
 * @property {int} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputMessagePinned.md}
 * @typedef {InputMessage} inputMessagePinned
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputDialogPeer.md}
 * @typedef {InputDialogPeer} inputDialogPeer
 * @property {InputPeer} peer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/dialogPeer.md}
 * @typedef {DialogPeer} dialogPeer
 * @property {Peer} peer
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.foundStickerSetsNotModified.md}
 * @typedef {messages.FoundStickerSets} messages.foundStickerSetsNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/messages.foundStickerSets.md}
 * @typedef {messages.FoundStickerSets} messages.foundStickerSets
 * @property {int} hash
 * @property {Vector.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/fileHash.md}
 * @typedef {FileHash} fileHash
 * @property {int} offset
 * @property {int} limit
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputClientProxy.md}
 * @typedef {InputClientProxy} inputClientProxy
 * @property {string} address
 * @property {int} port
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.proxyDataEmpty.md}
 * @typedef {help.ProxyData} help.proxyDataEmpty
 * @property {int} expires
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.proxyDataPromo.md}
 * @typedef {help.ProxyData} help.proxyDataPromo
 * @property {int} expires
 * @property {Peer} peer
 * @property {Vector.<Chat>} chats
 * @property {Vector.<User>} users
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.termsOfServiceUpdateEmpty.md}
 * @typedef {help.TermsOfServiceUpdate} help.termsOfServiceUpdateEmpty
 * @property {int} expires
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.termsOfServiceUpdate.md}
 * @typedef {help.TermsOfServiceUpdate} help.termsOfServiceUpdate
 * @property {int} expires
 * @property {help.TermsOfService} terms_of_service
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputSecureFileUploaded.md}
 * @typedef {InputSecureFile} inputSecureFileUploaded
 * @property {long} id
 * @property {int} parts
 * @property {string} md5_checksum
 * @property {bytes} file_hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputSecureFile.md}
 * @typedef {InputSecureFile} inputSecureFile
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureFileEmpty.md}
 * @typedef {SecureFile} secureFileEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureFile.md}
 * @typedef {SecureFile} secureFile
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
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureData.md}
 * @typedef {SecureData} secureData
 * @property {bytes} data
 * @property {bytes} data_hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/securePlainPhone.md}
 * @typedef {SecurePlainData} securePlainPhone
 * @property {string} phone
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/securePlainEmail.md}
 * @typedef {SecurePlainData} securePlainEmail
 * @property {string} email
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypePersonalDetails.md}
 * @typedef {SecureValueType} secureValueTypePersonalDetails
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypePassport.md}
 * @typedef {SecureValueType} secureValueTypePassport
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeDriverLicense.md}
 * @typedef {SecureValueType} secureValueTypeDriverLicense
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeIdentityCard.md}
 * @typedef {SecureValueType} secureValueTypeIdentityCard
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeInternalPassport.md}
 * @typedef {SecureValueType} secureValueTypeInternalPassport
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeAddress.md}
 * @typedef {SecureValueType} secureValueTypeAddress
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeUtilityBill.md}
 * @typedef {SecureValueType} secureValueTypeUtilityBill
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeBankStatement.md}
 * @typedef {SecureValueType} secureValueTypeBankStatement
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeRentalAgreement.md}
 * @typedef {SecureValueType} secureValueTypeRentalAgreement
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypePassportRegistration.md}
 * @typedef {SecureValueType} secureValueTypePassportRegistration
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeTemporaryRegistration.md}
 * @typedef {SecureValueType} secureValueTypeTemporaryRegistration
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypePhone.md}
 * @typedef {SecureValueType} secureValueTypePhone
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueTypeEmail.md}
 * @typedef {SecureValueType} secureValueTypeEmail
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValue.md}
 * @typedef {SecureValue} secureValue
 * @property {#} flags
 * @property {SecureValueType} type
 * @property {SecureData} data
 * @property {SecureFile} front_side
 * @property {SecureFile} reverse_side
 * @property {SecureFile} selfie
 * @property {Vector.<SecureFile>} translation
 * @property {Vector.<SecureFile>} files
 * @property {SecurePlainData} plain_data
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputSecureValue.md}
 * @typedef {InputSecureValue} inputSecureValue
 * @property {#} flags
 * @property {SecureValueType} type
 * @property {SecureData} data
 * @property {InputSecureFile} front_side
 * @property {InputSecureFile} reverse_side
 * @property {InputSecureFile} selfie
 * @property {Vector.<InputSecureFile>} translation
 * @property {Vector.<InputSecureFile>} files
 * @property {SecurePlainData} plain_data
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueHash.md}
 * @typedef {SecureValueHash} secureValueHash
 * @property {SecureValueType} type
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorData.md}
 * @typedef {SecureValueError} secureValueErrorData
 * @property {SecureValueType} type
 * @property {bytes} data_hash
 * @property {string} field
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorFrontSide.md}
 * @typedef {SecureValueError} secureValueErrorFrontSide
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorReverseSide.md}
 * @typedef {SecureValueError} secureValueErrorReverseSide
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorSelfie.md}
 * @typedef {SecureValueError} secureValueErrorSelfie
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorFile.md}
 * @typedef {SecureValueError} secureValueErrorFile
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorFiles.md}
 * @typedef {SecureValueError} secureValueErrorFiles
 * @property {SecureValueType} type
 * @property {Vector.<bytes>} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueError.md}
 * @typedef {SecureValueError} secureValueError
 * @property {SecureValueType} type
 * @property {bytes} hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorTranslationFile.md}
 * @typedef {SecureValueError} secureValueErrorTranslationFile
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureValueErrorTranslationFiles.md}
 * @typedef {SecureValueError} secureValueErrorTranslationFiles
 * @property {SecureValueType} type
 * @property {Vector.<bytes>} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureCredentialsEncrypted.md}
 * @typedef {SecureCredentialsEncrypted} secureCredentialsEncrypted
 * @property {bytes} data
 * @property {bytes} hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.authorizationForm.md}
 * @typedef {account.AuthorizationForm} account.authorizationForm
 * @property {#} flags
 * @property {Vector.<SecureRequiredType>} required_types
 * @property {Vector.<SecureValue>} values
 * @property {Vector.<SecureValueError>} errors
 * @property {Vector.<User>} users
 * @property {string} privacy_policy_url
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.sentEmailCode.md}
 * @typedef {account.SentEmailCode} account.sentEmailCode
 * @property {string} email_pattern
 * @property {int} length
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.deepLinkInfoEmpty.md}
 * @typedef {help.DeepLinkInfo} help.deepLinkInfoEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.deepLinkInfo.md}
 * @typedef {help.DeepLinkInfo} help.deepLinkInfo
 * @property {#} flags
 * @property {true} update_app
 * @property {string} message
 * @property {Vector.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/savedPhoneContact.md}
 * @typedef {SavedContact} savedPhoneContact
 * @property {string} phone
 * @property {string} first_name
 * @property {string} last_name
 * @property {int} date
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/account.takeout.md}
 * @typedef {account.Takeout} account.takeout
 * @property {long} id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/passwordKdfAlgoUnknown.md}
 * @typedef {PasswordKdfAlgo} passwordKdfAlgoUnknown
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow.md}
 * @typedef {PasswordKdfAlgo} passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow
 * @property {bytes} salt1
 * @property {bytes} salt2
 * @property {int} g
 * @property {bytes} p
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/securePasswordKdfAlgoUnknown.md}
 * @typedef {SecurePasswordKdfAlgo} securePasswordKdfAlgoUnknown
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000.md}
 * @typedef {SecurePasswordKdfAlgo} securePasswordKdfAlgoPBKDF2HMACSHA512iter100000
 * @property {bytes} salt
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/securePasswordKdfAlgoSHA512.md}
 * @typedef {SecurePasswordKdfAlgo} securePasswordKdfAlgoSHA512
 * @property {bytes} salt
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureSecretSettings.md}
 * @typedef {SecureSecretSettings} secureSecretSettings
 * @property {SecurePasswordKdfAlgo} secure_algo
 * @property {bytes} secure_secret
 * @property {long} secure_secret_id
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputCheckPasswordEmpty.md}
 * @typedef {InputCheckPasswordSRP} inputCheckPasswordEmpty
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/inputCheckPasswordSRP.md}
 * @typedef {InputCheckPasswordSRP} inputCheckPasswordSRP
 * @property {long} srp_id
 * @property {bytes} A
 * @property {bytes} M1
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureRequiredType.md}
 * @typedef {SecureRequiredType} secureRequiredType
 * @property {#} flags
 * @property {true} native_names
 * @property {true} selfie_required
 * @property {true} translation_required
 * @property {SecureValueType} type
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/secureRequiredTypeOneOf.md}
 * @typedef {SecureRequiredType} secureRequiredTypeOneOf
 * @property {Vector.<SecureRequiredType>} types
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.passportConfigNotModified.md}
 * @typedef {help.PassportConfig} help.passportConfigNotModified
 */

/**
 *
 * @see {@link https://github.com/wfjsw/telegram-core-docs/blob/master/constructor/help.passportConfig.md}
 * @typedef {help.PassportConfig} help.passportConfig
 * @property {int} hash
 * @property {DataJSON} countries_langs
 */