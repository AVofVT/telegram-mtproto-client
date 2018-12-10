
/**
 *
 * @see {@link https://core.telegram.org/constructor/int}
 * @typedef {number} int
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/int128}
 * @typedef {number} int128
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/int256}
 * @typedef {number} int256
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/double}
 * @typedef {number} double
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/long}
 * @typedef {number} long
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/bytes}
 * @typedef {string} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/Bool}
 * @typedef {boolean} Bool
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/Vector}
 * @typedef {Array} Vector
 */
/**
 *
 * @see {@link https://core.telegram.org/constructor/resPQ}
 * @typedef {ResPQ} resPQ
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {string} pq
 * @property {Array.<long>} server_public_key_fingerprints
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data}
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
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data_dc}
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
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data_temp}
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
 * @see {@link https://core.telegram.org/constructor/p_q_inner_data_temp_dc}
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
 * @see {@link https://core.telegram.org/constructor/server_DH_params_fail}
 * @typedef {Server_DH_Params} server_DH_params_fail
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/server_DH_params_ok}
 * @typedef {Server_DH_Params} server_DH_params_ok
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {string} encrypted_answer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/server_DH_inner_data}
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
 * @see {@link https://core.telegram.org/constructor/client_DH_inner_data}
 * @typedef {Client_DH_Inner_Data} client_DH_inner_data
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {long} retry_id
 * @property {string} g_b
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dh_gen_ok}
 * @typedef {Set_client_DH_params_answer} dh_gen_ok
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash1
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dh_gen_retry}
 * @typedef {Set_client_DH_params_answer} dh_gen_retry
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash2
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dh_gen_fail}
 * @typedef {Set_client_DH_params_answer} dh_gen_fail
 * @property {int128} nonce
 * @property {int128} server_nonce
 * @property {int128} new_nonce_hash3
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_auth_key_ok}
 * @typedef {DestroyAuthKeyRes} destroy_auth_key_ok
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_auth_key_none}
 * @typedef {DestroyAuthKeyRes} destroy_auth_key_none
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_auth_key_fail}
 * @typedef {DestroyAuthKeyRes} destroy_auth_key_fail
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_ack}
 * @typedef {MsgsAck} msgs_ack
 * @property {Array.<long>} msg_ids
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/bad_msg_notification}
 * @typedef {BadMsgNotification} bad_msg_notification
 * @property {long} bad_msg_id
 * @property {int} bad_msg_seqno
 * @property {int} error_code
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/bad_server_salt}
 * @typedef {BadMsgNotification} bad_server_salt
 * @property {long} bad_msg_id
 * @property {int} bad_msg_seqno
 * @property {int} error_code
 * @property {long} new_server_salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_state_req}
 * @typedef {MsgsStateReq} msgs_state_req
 * @property {Array.<long>} msg_ids
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_state_info}
 * @typedef {MsgsStateInfo} msgs_state_info
 * @property {long} req_msg_id
 * @property {string} info
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msgs_all_info}
 * @typedef {MsgsAllInfo} msgs_all_info
 * @property {Array.<long>} msg_ids
 * @property {string} info
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msg_detailed_info}
 * @typedef {MsgDetailedInfo} msg_detailed_info
 * @property {long} msg_id
 * @property {long} answer_msg_id
 * @property {int} bytes
 * @property {int} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msg_new_detailed_info}
 * @typedef {MsgDetailedInfo} msg_new_detailed_info
 * @property {long} answer_msg_id
 * @property {int} bytes
 * @property {int} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/msg_resend_req}
 * @typedef {MsgResendReq} msg_resend_req
 * @property {Array.<long>} msg_ids
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_error}
 * @typedef {RpcError} rpc_error
 * @property {int} error_code
 * @property {string} error_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_answer_unknown}
 * @typedef {RpcDropAnswer} rpc_answer_unknown
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_answer_dropped_running}
 * @typedef {RpcDropAnswer} rpc_answer_dropped_running
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/rpc_answer_dropped}
 * @typedef {RpcDropAnswer} rpc_answer_dropped
 * @property {long} msg_id
 * @property {int} seq_no
 * @property {int} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/future_salt}
 * @typedef {FutureSalt} future_salt
 * @property {int} valid_since
 * @property {int} valid_until
 * @property {long} salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/future_salts}
 * @typedef {FutureSalts} future_salts
 * @property {long} req_msg_id
 * @property {int} now
 * @property {vector.<future_salt>} salts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pong}
 * @typedef {Pong} pong
 * @property {long} msg_id
 * @property {long} ping_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_session_ok}
 * @typedef {DestroySessionRes} destroy_session_ok
 * @property {long} session_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/destroy_session_none}
 * @typedef {DestroySessionRes} destroy_session_none
 * @property {long} session_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/new_session_created}
 * @typedef {NewSession} new_session_created
 * @property {long} first_msg_id
 * @property {long} unique_id
 * @property {long} server_salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/http_wait}
 * @typedef {HttpWait} http_wait
 * @property {int} max_delay
 * @property {int} wait_after
 * @property {int} max_wait
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/ipPort}
 * @typedef {IpPort} ipPort
 * @property {int} ipv4
 * @property {int} port
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/ipPortSecret}
 * @typedef {IpPort} ipPortSecret
 * @property {int} ipv4
 * @property {int} port
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/accessPointRule}
 * @typedef {AccessPointRule} accessPointRule
 * @property {string} phone_prefix_rules
 * @property {int} dc_id
 * @property {vector.<IpPort>} ips
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.configSimple}
 * @typedef {help.ConfigSimple} help.configSimple
 * @property {int} date
 * @property {int} expires
 * @property {vector.<AccessPointRule>} rules
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/boolFalse}
 * @typedef {Bool} boolFalse
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/boolTrue}
 * @typedef {Bool} boolTrue
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/true}
 * @typedef {True} true
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/error}
 * @typedef {Error} error
 * @property {int} code
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/null}
 * @typedef {Null} null
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerEmpty}
 * @typedef {InputPeer} inputPeerEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerSelf}
 * @typedef {InputPeer} inputPeerSelf
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerChat}
 * @typedef {InputPeer} inputPeerChat
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerUser}
 * @typedef {InputPeer} inputPeerUser
 * @property {int} user_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerChannel}
 * @typedef {InputPeer} inputPeerChannel
 * @property {int} channel_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputUserEmpty}
 * @typedef {InputUser} inputUserEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputUserSelf}
 * @typedef {InputUser} inputUserSelf
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputUser}
 * @typedef {InputUser} inputUser
 * @property {int} user_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhoneContact}
 * @typedef {InputContact} inputPhoneContact
 * @property {long} client_id
 * @property {string} phone
 * @property {string} first_name
 * @property {string} last_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputFile}
 * @typedef {InputFile} inputFile
 * @property {long} id
 * @property {int} parts
 * @property {string} name
 * @property {string} md5_checksum
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputFileBig}
 * @typedef {InputFile} inputFileBig
 * @property {long} id
 * @property {int} parts
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaEmpty}
 * @typedef {InputMedia} inputMediaEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedPhoto}
 * @typedef {InputMedia} inputMediaUploadedPhoto
 * @property {number} flags
 * @property {InputFile} file
 * @property {Array.<InputDocument>} stickers
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaPhoto}
 * @typedef {InputMedia} inputMediaPhoto
 * @property {number} flags
 * @property {InputPhoto} id
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaGeoPoint}
 * @typedef {InputMedia} inputMediaGeoPoint
 * @property {InputGeoPoint} geo_point
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaContact}
 * @typedef {InputMedia} inputMediaContact
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedDocument}
 * @typedef {InputMedia} inputMediaUploadedDocument
 * @property {number} flags
 * @property {true} nosound_video
 * @property {InputFile} file
 * @property {InputFile} thumb
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 * @property {Array.<InputDocument>} stickers
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaDocument}
 * @typedef {InputMedia} inputMediaDocument
 * @property {number} flags
 * @property {InputDocument} id
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaVenue}
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
 * @see {@link https://core.telegram.org/constructor/inputMediaGifExternal}
 * @typedef {InputMedia} inputMediaGifExternal
 * @property {string} url
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaPhotoExternal}
 * @typedef {InputMedia} inputMediaPhotoExternal
 * @property {number} flags
 * @property {string} url
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaDocumentExternal}
 * @typedef {InputMedia} inputMediaDocumentExternal
 * @property {number} flags
 * @property {string} url
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaGame}
 * @typedef {InputMedia} inputMediaGame
 * @property {InputGame} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaInvoice}
 * @typedef {InputMedia} inputMediaInvoice
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/inputMediaGeoLive}
 * @typedef {InputMedia} inputMediaGeoLive
 * @property {InputGeoPoint} geo_point
 * @property {int} period
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChatPhotoEmpty}
 * @typedef {InputChatPhoto} inputChatPhotoEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChatUploadedPhoto}
 * @typedef {InputChatPhoto} inputChatUploadedPhoto
 * @property {InputFile} file
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChatPhoto}
 * @typedef {InputChatPhoto} inputChatPhoto
 * @property {InputPhoto} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputGeoPointEmpty}
 * @typedef {InputGeoPoint} inputGeoPointEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputGeoPoint}
 * @typedef {InputGeoPoint} inputGeoPoint
 * @property {double} lat
 * @property {double} long
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhotoEmpty}
 * @typedef {InputPhoto} inputPhotoEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhoto}
 * @typedef {InputPhoto} inputPhoto
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputFileLocation}
 * @typedef {InputFileLocation} inputFileLocation
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileLocation}
 * @typedef {InputFileLocation} inputEncryptedFileLocation
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDocumentFileLocation}
 * @typedef {InputFileLocation} inputDocumentFileLocation
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureFileLocation}
 * @typedef {InputFileLocation} inputSecureFileLocation
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputTakeoutFileLocation}
 * @typedef {InputFileLocation} inputTakeoutFileLocation
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputAppEvent}
 * @typedef {InputAppEvent} inputAppEvent
 * @property {double} time
 * @property {string} type
 * @property {long} peer
 * @property {string} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerUser}
 * @typedef {Peer} peerUser
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerChat}
 * @typedef {Peer} peerChat
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerChannel}
 * @typedef {Peer} peerChannel
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileUnknown}
 * @typedef {storage.FileType} storage.fileUnknown
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.filePartial}
 * @typedef {storage.FileType} storage.filePartial
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileJpeg}
 * @typedef {storage.FileType} storage.fileJpeg
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileGif}
 * @typedef {storage.FileType} storage.fileGif
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.filePng}
 * @typedef {storage.FileType} storage.filePng
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.filePdf}
 * @typedef {storage.FileType} storage.filePdf
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileMp3}
 * @typedef {storage.FileType} storage.fileMp3
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileMov}
 * @typedef {storage.FileType} storage.fileMov
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileMp4}
 * @typedef {storage.FileType} storage.fileMp4
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/storage.fileWebp}
 * @typedef {storage.FileType} storage.fileWebp
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/fileLocationUnavailable}
 * @typedef {FileLocation} fileLocationUnavailable
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/fileLocation}
 * @typedef {FileLocation} fileLocation
 * @property {int} dc_id
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userEmpty}
 * @typedef {User} userEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/user}
 * @typedef {User} user
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/userProfilePhotoEmpty}
 * @typedef {UserProfilePhoto} userProfilePhotoEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userProfilePhoto}
 * @typedef {UserProfilePhoto} userProfilePhoto
 * @property {long} photo_id
 * @property {FileLocation} photo_small
 * @property {FileLocation} photo_big
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusEmpty}
 * @typedef {UserStatus} userStatusEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusOnline}
 * @typedef {UserStatus} userStatusOnline
 * @property {int} expires
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusOffline}
 * @typedef {UserStatus} userStatusOffline
 * @property {int} was_online
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusRecently}
 * @typedef {UserStatus} userStatusRecently
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusLastWeek}
 * @typedef {UserStatus} userStatusLastWeek
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userStatusLastMonth}
 * @typedef {UserStatus} userStatusLastMonth
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatEmpty}
 * @typedef {Chat} chatEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chat}
 * @typedef {Chat} chat
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/chatForbidden}
 * @typedef {Chat} chatForbidden
 * @property {int} id
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channel}
 * @typedef {Chat} channel
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/channelForbidden}
 * @typedef {Chat} channelForbidden
 * @property {number} flags
 * @property {true} broadcast
 * @property {true} megagroup
 * @property {int} id
 * @property {long} access_hash
 * @property {string} title
 * @property {int} until_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatFull}
 * @typedef {ChatFull} chatFull
 * @property {number} flags
 * @property {int} id
 * @property {ChatParticipants} participants
 * @property {Photo} chat_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {ExportedChatInvite} exported_invite
 * @property {Array.<BotInfo>} bot_info
 * @property {int} pinned_msg_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelFull}
 * @typedef {ChatFull} channelFull
 * @property {number} flags
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
 * @property {Array.<BotInfo>} bot_info
 * @property {int} migrated_from_chat_id
 * @property {int} migrated_from_max_id
 * @property {int} pinned_msg_id
 * @property {StickerSet} stickerset
 * @property {int} available_min_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipant}
 * @typedef {ChatParticipant} chatParticipant
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipantCreator}
 * @typedef {ChatParticipant} chatParticipantCreator
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipantAdmin}
 * @typedef {ChatParticipant} chatParticipantAdmin
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipantsForbidden}
 * @typedef {ChatParticipants} chatParticipantsForbidden
 * @property {number} flags
 * @property {int} chat_id
 * @property {ChatParticipant} self_participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipants}
 * @typedef {ChatParticipants} chatParticipants
 * @property {int} chat_id
 * @property {Array.<ChatParticipant>} participants
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatPhotoEmpty}
 * @typedef {ChatPhoto} chatPhotoEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatPhoto}
 * @typedef {ChatPhoto} chatPhoto
 * @property {FileLocation} photo_small
 * @property {FileLocation} photo_big
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEmpty}
 * @typedef {Message} messageEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/message}
 * @typedef {Message} message
 * @property {number} flags
 * @property {true} out
 * @property {true} mentioned
 * @property {true} media_unread
 * @property {true} silent
 * @property {true} post
 * @property {true} from_scheduled
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
 * @property {Array.<MessageEntity>} entities
 * @property {int} views
 * @property {int} edit_date
 * @property {string} post_author
 * @property {long} grouped_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageService}
 * @typedef {Message} messageService
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/messageMediaEmpty}
 * @typedef {MessageMedia} messageMediaEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaPhoto}
 * @typedef {MessageMedia} messageMediaPhoto
 * @property {number} flags
 * @property {Photo} photo
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaGeo}
 * @typedef {MessageMedia} messageMediaGeo
 * @property {GeoPoint} geo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaContact}
 * @typedef {MessageMedia} messageMediaContact
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaUnsupported}
 * @typedef {MessageMedia} messageMediaUnsupported
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaDocument}
 * @typedef {MessageMedia} messageMediaDocument
 * @property {number} flags
 * @property {Document} document
 * @property {int} ttl_seconds
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaWebPage}
 * @typedef {MessageMedia} messageMediaWebPage
 * @property {WebPage} webpage
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaVenue}
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
 * @see {@link https://core.telegram.org/constructor/messageMediaGame}
 * @typedef {MessageMedia} messageMediaGame
 * @property {Game} game
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaInvoice}
 * @typedef {MessageMedia} messageMediaInvoice
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/messageMediaGeoLive}
 * @typedef {MessageMedia} messageMediaGeoLive
 * @property {GeoPoint} geo
 * @property {int} period
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionEmpty}
 * @typedef {MessageAction} messageActionEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatCreate}
 * @typedef {MessageAction} messageActionChatCreate
 * @property {string} title
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatEditTitle}
 * @typedef {MessageAction} messageActionChatEditTitle
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatEditPhoto}
 * @typedef {MessageAction} messageActionChatEditPhoto
 * @property {Photo} photo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatDeletePhoto}
 * @typedef {MessageAction} messageActionChatDeletePhoto
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatAddUser}
 * @typedef {MessageAction} messageActionChatAddUser
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatDeleteUser}
 * @typedef {MessageAction} messageActionChatDeleteUser
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatJoinedByLink}
 * @typedef {MessageAction} messageActionChatJoinedByLink
 * @property {int} inviter_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChannelCreate}
 * @typedef {MessageAction} messageActionChannelCreate
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatMigrateTo}
 * @typedef {MessageAction} messageActionChatMigrateTo
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChannelMigrateFrom}
 * @typedef {MessageAction} messageActionChannelMigrateFrom
 * @property {string} title
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPinMessage}
 * @typedef {MessageAction} messageActionPinMessage
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionHistoryClear}
 * @typedef {MessageAction} messageActionHistoryClear
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionGameScore}
 * @typedef {MessageAction} messageActionGameScore
 * @property {long} game_id
 * @property {int} score
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPaymentSentMe}
 * @typedef {MessageAction} messageActionPaymentSentMe
 * @property {number} flags
 * @property {string} currency
 * @property {long} total_amount
 * @property {bytes} payload
 * @property {PaymentRequestedInfo} info
 * @property {string} shipping_option_id
 * @property {PaymentCharge} charge
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPaymentSent}
 * @typedef {MessageAction} messageActionPaymentSent
 * @property {string} currency
 * @property {long} total_amount
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionPhoneCall}
 * @typedef {MessageAction} messageActionPhoneCall
 * @property {number} flags
 * @property {long} call_id
 * @property {PhoneCallDiscardReason} reason
 * @property {int} duration
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionScreenshotTaken}
 * @typedef {MessageAction} messageActionScreenshotTaken
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionCustomAction}
 * @typedef {MessageAction} messageActionCustomAction
 * @property {string} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionBotAllowed}
 * @typedef {MessageAction} messageActionBotAllowed
 * @property {string} domain
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionSecureValuesSentMe}
 * @typedef {MessageAction} messageActionSecureValuesSentMe
 * @property {Array.<SecureValue>} values
 * @property {SecureCredentialsEncrypted} credentials
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionSecureValuesSent}
 * @typedef {MessageAction} messageActionSecureValuesSent
 * @property {Array.<SecureValueType>} types
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dialog}
 * @typedef {Dialog} dialog
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/photoEmpty}
 * @typedef {Photo} photoEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photo}
 * @typedef {Photo} photo
 * @property {number} flags
 * @property {true} has_stickers
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 * @property {int} date
 * @property {Array.<PhotoSize>} sizes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photoSizeEmpty}
 * @typedef {PhotoSize} photoSizeEmpty
 * @property {string} type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photoSize}
 * @typedef {PhotoSize} photoSize
 * @property {string} type
 * @property {FileLocation} location
 * @property {int} w
 * @property {int} h
 * @property {int} size
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photoCachedSize}
 * @typedef {PhotoSize} photoCachedSize
 * @property {string} type
 * @property {FileLocation} location
 * @property {int} w
 * @property {int} h
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/geoPointEmpty}
 * @typedef {GeoPoint} geoPointEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/geoPoint}
 * @typedef {GeoPoint} geoPoint
 * @property {double} long
 * @property {double} lat
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.checkedPhone}
 * @typedef {auth.CheckedPhone} auth.checkedPhone
 * @property {Bool} phone_registered
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCode}
 * @typedef {auth.SentCode} auth.sentCode
 * @property {number} flags
 * @property {true} phone_registered
 * @property {auth.SentCodeType} type
 * @property {string} phone_code_hash
 * @property {auth.CodeType} next_type
 * @property {int} timeout
 * @property {help.TermsOfService} terms_of_service
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.authorization}
 * @typedef {auth.Authorization} auth.authorization
 * @property {number} flags
 * @property {int} tmp_sessions
 * @property {User} user
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.exportedAuthorization}
 * @typedef {auth.ExportedAuthorization} auth.exportedAuthorization
 * @property {int} id
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyPeer}
 * @typedef {InputNotifyPeer} inputNotifyPeer
 * @property {InputPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyUsers}
 * @typedef {InputNotifyPeer} inputNotifyUsers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyChats}
 * @typedef {InputNotifyPeer} inputNotifyChats
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputNotifyBroadcasts}
 * @typedef {InputNotifyPeer} inputNotifyBroadcasts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerNotifySettings}
 * @typedef {InputPeerNotifySettings} inputPeerNotifySettings
 * @property {number} flags
 * @property {Bool} show_previews
 * @property {Bool} silent
 * @property {int} mute_until
 * @property {string} sound
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerNotifySettings}
 * @typedef {PeerNotifySettings} peerNotifySettings
 * @property {number} flags
 * @property {Bool} show_previews
 * @property {Bool} silent
 * @property {int} mute_until
 * @property {string} sound
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerSettings}
 * @typedef {PeerSettings} peerSettings
 * @property {number} flags
 * @property {true} report_spam
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/wallPaper}
 * @typedef {WallPaper} wallPaper
 * @property {int} id
 * @property {string} title
 * @property {Array.<PhotoSize>} sizes
 * @property {int} color
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/wallPaperSolid}
 * @typedef {WallPaper} wallPaperSolid
 * @property {int} id
 * @property {string} title
 * @property {int} bg_color
 * @property {int} color
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonSpam}
 * @typedef {ReportReason} inputReportReasonSpam
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonViolence}
 * @typedef {ReportReason} inputReportReasonViolence
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonPornography}
 * @typedef {ReportReason} inputReportReasonPornography
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonOther}
 * @typedef {ReportReason} inputReportReasonOther
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonCopyright}
 * @typedef {ReportReason} inputReportReasonCopyright
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userFull}
 * @typedef {UserFull} userFull
 * @property {number} flags
 * @property {true} blocked
 * @property {true} phone_calls_available
 * @property {true} phone_calls_private
 * @property {true} can_pin_message
 * @property {User} user
 * @property {string} about
 * @property {contacts.Link} link
 * @property {Photo} profile_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {BotInfo} bot_info
 * @property {int} pinned_msg_id
 * @property {int} common_chats_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contact}
 * @typedef {Contact} contact
 * @property {int} user_id
 * @property {Bool} mutual
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/importedContact}
 * @typedef {ImportedContact} importedContact
 * @property {int} user_id
 * @property {long} client_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactBlocked}
 * @typedef {ContactBlocked} contactBlocked
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactStatus}
 * @typedef {ContactStatus} contactStatus
 * @property {int} user_id
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.link}
 * @typedef {contacts.Link} contacts.link
 * @property {ContactLink} my_link
 * @property {ContactLink} foreign_link
 * @property {User} user
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.contactsNotModified}
 * @typedef {contacts.Contacts} contacts.contactsNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.contacts}
 * @typedef {contacts.Contacts} contacts.contacts
 * @property {Array.<Contact>} contacts
 * @property {int} saved_count
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.importedContacts}
 * @typedef {contacts.ImportedContacts} contacts.importedContacts
 * @property {Array.<ImportedContact>} imported
 * @property {Array.<PopularContact>} popular_invites
 * @property {Array.<long>} retry_contacts
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.blocked}
 * @typedef {contacts.Blocked} contacts.blocked
 * @property {Array.<ContactBlocked>} blocked
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.blockedSlice}
 * @typedef {contacts.Blocked} contacts.blockedSlice
 * @property {int} count
 * @property {Array.<ContactBlocked>} blocked
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogs}
 * @typedef {messages.Dialogs} messages.dialogs
 * @property {Array.<Dialog>} dialogs
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogsSlice}
 * @typedef {messages.Dialogs} messages.dialogsSlice
 * @property {int} count
 * @property {Array.<Dialog>} dialogs
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogsNotModified}
 * @typedef {messages.Dialogs} messages.dialogsNotModified
 * @property {int} count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messages}
 * @typedef {messages.Messages} messages.messages
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messagesSlice}
 * @typedef {messages.Messages} messages.messagesSlice
 * @property {int} count
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.channelMessages}
 * @typedef {messages.Messages} messages.channelMessages
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
 * @typedef {messages.Messages} messages.messagesNotModified
 * @property {int} count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chats}
 * @typedef {messages.Chats} messages.chats
 * @property {Array.<Chat>} chats
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chatsSlice}
 * @typedef {messages.Chats} messages.chatsSlice
 * @property {int} count
 * @property {Array.<Chat>} chats
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chatFull}
 * @typedef {messages.ChatFull} messages.chatFull
 * @property {ChatFull} full_chat
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.affectedHistory}
 * @typedef {messages.AffectedHistory} messages.affectedHistory
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} offset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterEmpty}
 * @typedef {MessagesFilter} inputMessagesFilterEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterPhotos}
 * @typedef {MessagesFilter} inputMessagesFilterPhotos
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterVideo}
 * @typedef {MessagesFilter} inputMessagesFilterVideo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterPhotoVideo}
 * @typedef {MessagesFilter} inputMessagesFilterPhotoVideo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterDocument}
 * @typedef {MessagesFilter} inputMessagesFilterDocument
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterUrl}
 * @typedef {MessagesFilter} inputMessagesFilterUrl
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterGif}
 * @typedef {MessagesFilter} inputMessagesFilterGif
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterVoice}
 * @typedef {MessagesFilter} inputMessagesFilterVoice
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterMusic}
 * @typedef {MessagesFilter} inputMessagesFilterMusic
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterChatPhotos}
 * @typedef {MessagesFilter} inputMessagesFilterChatPhotos
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterPhoneCalls}
 * @typedef {MessagesFilter} inputMessagesFilterPhoneCalls
 * @property {number} flags
 * @property {true} missed
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterRoundVoice}
 * @typedef {MessagesFilter} inputMessagesFilterRoundVoice
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterRoundVideo}
 * @typedef {MessagesFilter} inputMessagesFilterRoundVideo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterMyMentions}
 * @typedef {MessagesFilter} inputMessagesFilterMyMentions
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterGeo}
 * @typedef {MessagesFilter} inputMessagesFilterGeo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterContacts}
 * @typedef {MessagesFilter} inputMessagesFilterContacts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewMessage}
 * @typedef {Update} updateNewMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateMessageID}
 * @typedef {Update} updateMessageID
 * @property {int} id
 * @property {long} random_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDeleteMessages}
 * @typedef {Update} updateDeleteMessages
 * @property {Array.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserTyping}
 * @typedef {Update} updateUserTyping
 * @property {int} user_id
 * @property {SendMessageAction} action
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatUserTyping}
 * @typedef {Update} updateChatUserTyping
 * @property {int} chat_id
 * @property {int} user_id
 * @property {SendMessageAction} action
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipants}
 * @typedef {Update} updateChatParticipants
 * @property {ChatParticipants} participants
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserStatus}
 * @typedef {Update} updateUserStatus
 * @property {int} user_id
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserName}
 * @typedef {Update} updateUserName
 * @property {int} user_id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserPhoto}
 * @typedef {Update} updateUserPhoto
 * @property {int} user_id
 * @property {int} date
 * @property {UserProfilePhoto} photo
 * @property {Bool} previous
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateContactRegistered}
 * @typedef {Update} updateContactRegistered
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateContactLink}
 * @typedef {Update} updateContactLink
 * @property {int} user_id
 * @property {ContactLink} my_link
 * @property {ContactLink} foreign_link
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewEncryptedMessage}
 * @typedef {Update} updateNewEncryptedMessage
 * @property {EncryptedMessage} message
 * @property {int} qts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEncryptedChatTyping}
 * @typedef {Update} updateEncryptedChatTyping
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEncryption}
 * @typedef {Update} updateEncryption
 * @property {EncryptedChat} chat
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEncryptedMessagesRead}
 * @typedef {Update} updateEncryptedMessagesRead
 * @property {int} chat_id
 * @property {int} max_date
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipantAdd}
 * @typedef {Update} updateChatParticipantAdd
 * @property {int} chat_id
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipantDelete}
 * @typedef {Update} updateChatParticipantDelete
 * @property {int} chat_id
 * @property {int} user_id
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDcOptions}
 * @typedef {Update} updateDcOptions
 * @property {Array.<DcOption>} dc_options
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserBlocked}
 * @typedef {Update} updateUserBlocked
 * @property {int} user_id
 * @property {Bool} blocked
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNotifySettings}
 * @typedef {Update} updateNotifySettings
 * @property {NotifyPeer} peer
 * @property {PeerNotifySettings} notify_settings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateServiceNotification}
 * @typedef {Update} updateServiceNotification
 * @property {number} flags
 * @property {true} popup
 * @property {int} inbox_date
 * @property {string} type
 * @property {string} message
 * @property {MessageMedia} media
 * @property {Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatePrivacy}
 * @typedef {Update} updatePrivacy
 * @property {PrivacyKey} key
 * @property {Array.<PrivacyRule>} rules
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserPhone}
 * @typedef {Update} updateUserPhone
 * @property {int} user_id
 * @property {string} phone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadHistoryInbox}
 * @typedef {Update} updateReadHistoryInbox
 * @property {Peer} peer
 * @property {int} max_id
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadHistoryOutbox}
 * @typedef {Update} updateReadHistoryOutbox
 * @property {Peer} peer
 * @property {int} max_id
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateWebPage}
 * @typedef {Update} updateWebPage
 * @property {WebPage} webpage
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadMessagesContents}
 * @typedef {Update} updateReadMessagesContents
 * @property {Array.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelTooLong}
 * @typedef {Update} updateChannelTooLong
 * @property {number} flags
 * @property {int} channel_id
 * @property {int} pts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannel}
 * @typedef {Update} updateChannel
 * @property {int} channel_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewChannelMessage}
 * @typedef {Update} updateNewChannelMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadChannelInbox}
 * @typedef {Update} updateReadChannelInbox
 * @property {int} channel_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDeleteChannelMessages}
 * @typedef {Update} updateDeleteChannelMessages
 * @property {int} channel_id
 * @property {Array.<int>} messages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelMessageViews}
 * @typedef {Update} updateChannelMessageViews
 * @property {int} channel_id
 * @property {int} id
 * @property {int} views
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatAdmins}
 * @typedef {Update} updateChatAdmins
 * @property {int} chat_id
 * @property {Bool} enabled
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatParticipantAdmin}
 * @typedef {Update} updateChatParticipantAdmin
 * @property {int} chat_id
 * @property {int} user_id
 * @property {Bool} is_admin
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewStickerSet}
 * @typedef {Update} updateNewStickerSet
 * @property {messages.StickerSet} stickerset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateStickerSetsOrder}
 * @typedef {Update} updateStickerSetsOrder
 * @property {number} flags
 * @property {true} masks
 * @property {Array.<long>} order
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateStickerSets}
 * @typedef {Update} updateStickerSets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateSavedGifs}
 * @typedef {Update} updateSavedGifs
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotInlineQuery}
 * @typedef {Update} updateBotInlineQuery
 * @property {number} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {string} query
 * @property {GeoPoint} geo
 * @property {string} offset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotInlineSend}
 * @typedef {Update} updateBotInlineSend
 * @property {number} flags
 * @property {int} user_id
 * @property {string} query
 * @property {GeoPoint} geo
 * @property {string} id
 * @property {InputBotInlineMessageID} msg_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateEditChannelMessage}
 * @typedef {Update} updateEditChannelMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelPinnedMessage}
 * @typedef {Update} updateChannelPinnedMessage
 * @property {int} channel_id
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotCallbackQuery}
 * @typedef {Update} updateBotCallbackQuery
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/updateEditMessage}
 * @typedef {Update} updateEditMessage
 * @property {Message} message
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateInlineBotCallbackQuery}
 * @typedef {Update} updateInlineBotCallbackQuery
 * @property {number} flags
 * @property {long} query_id
 * @property {int} user_id
 * @property {InputBotInlineMessageID} msg_id
 * @property {long} chat_instance
 * @property {bytes} data
 * @property {string} game_short_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadChannelOutbox}
 * @typedef {Update} updateReadChannelOutbox
 * @property {int} channel_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDraftMessage}
 * @typedef {Update} updateDraftMessage
 * @property {Peer} peer
 * @property {DraftMessage} draft
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateReadFeaturedStickers}
 * @typedef {Update} updateReadFeaturedStickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateRecentStickers}
 * @typedef {Update} updateRecentStickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateConfig}
 * @typedef {Update} updateConfig
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatePtsChanged}
 * @typedef {Update} updatePtsChanged
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelWebPage}
 * @typedef {Update} updateChannelWebPage
 * @property {int} channel_id
 * @property {WebPage} webpage
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDialogPinned}
 * @typedef {Update} updateDialogPinned
 * @property {number} flags
 * @property {true} pinned
 * @property {DialogPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatePinnedDialogs}
 * @typedef {Update} updatePinnedDialogs
 * @property {number} flags
 * @property {Array.<DialogPeer>} order
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotWebhookJSON}
 * @typedef {Update} updateBotWebhookJSON
 * @property {DataJSON} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotWebhookJSONQuery}
 * @typedef {Update} updateBotWebhookJSONQuery
 * @property {long} query_id
 * @property {DataJSON} data
 * @property {int} timeout
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotShippingQuery}
 * @typedef {Update} updateBotShippingQuery
 * @property {long} query_id
 * @property {int} user_id
 * @property {bytes} payload
 * @property {PostAddress} shipping_address
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateBotPrecheckoutQuery}
 * @typedef {Update} updateBotPrecheckoutQuery
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/updatePhoneCall}
 * @typedef {Update} updatePhoneCall
 * @property {PhoneCall} phone_call
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateLangPackTooLong}
 * @typedef {Update} updateLangPackTooLong
 * @property {string} lang_code
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateLangPack}
 * @typedef {Update} updateLangPack
 * @property {LangPackDifference} difference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateFavedStickers}
 * @typedef {Update} updateFavedStickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelReadMessagesContents}
 * @typedef {Update} updateChannelReadMessagesContents
 * @property {int} channel_id
 * @property {Array.<int>} messages
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateContactsReset}
 * @typedef {Update} updateContactsReset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChannelAvailableMessages}
 * @typedef {Update} updateChannelAvailableMessages
 * @property {int} channel_id
 * @property {int} available_min_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDialogUnreadMark}
 * @typedef {Update} updateDialogUnreadMark
 * @property {number} flags
 * @property {true} unread
 * @property {DialogPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateUserPinnedMessage}
 * @typedef {Update} updateUserPinnedMessage
 * @property {int} user_id
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateChatPinnedMessage}
 * @typedef {Update} updateChatPinnedMessage
 * @property {int} chat_id
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.state}
 * @typedef {updates.State} updates.state
 * @property {int} pts
 * @property {int} qts
 * @property {int} date
 * @property {int} seq
 * @property {int} unread_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.differenceEmpty}
 * @typedef {updates.Difference} updates.differenceEmpty
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.difference}
 * @typedef {updates.Difference} updates.difference
 * @property {Array.<Message>} new_messages
 * @property {Array.<EncryptedMessage>} new_encrypted_messages
 * @property {Array.<Update>} other_updates
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 * @property {updates.State} state
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.differenceSlice}
 * @typedef {updates.Difference} updates.differenceSlice
 * @property {Array.<Message>} new_messages
 * @property {Array.<EncryptedMessage>} new_encrypted_messages
 * @property {Array.<Update>} other_updates
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 * @property {updates.State} intermediate_state
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.differenceTooLong}
 * @typedef {updates.Difference} updates.differenceTooLong
 * @property {int} pts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatesTooLong}
 * @typedef {Updates} updatesTooLong
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShortMessage}
 * @typedef {Updates} updateShortMessage
 * @property {number} flags
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
 * @property {Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShortChatMessage}
 * @typedef {Updates} updateShortChatMessage
 * @property {number} flags
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
 * @property {Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShort}
 * @typedef {Updates} updateShort
 * @property {Update} update
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updatesCombined}
 * @typedef {Updates} updatesCombined
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
 * @typedef {Updates} updates
 * @property {Array.<Update>} updates
 * @property {Array.<User>} users
 * @property {Array.<Chat>} chats
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShortSentMessage}
 * @typedef {Updates} updateShortSentMessage
 * @property {number} flags
 * @property {true} out
 * @property {int} id
 * @property {int} pts
 * @property {int} pts_count
 * @property {int} date
 * @property {MessageMedia} media
 * @property {Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photos}
 * @typedef {photos.Photos} photos.photos
 * @property {Array.<Photo>} photos
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photosSlice}
 * @typedef {photos.Photos} photos.photosSlice
 * @property {int} count
 * @property {Array.<Photo>} photos
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photo}
 * @typedef {photos.Photo} photos.photo
 * @property {Photo} photo
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.file}
 * @typedef {upload.File} upload.file
 * @property {storage.FileType} type
 * @property {int} mtime
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.fileCdnRedirect}
 * @typedef {upload.File} upload.fileCdnRedirect
 * @property {int} dc_id
 * @property {bytes} file_token
 * @property {bytes} encryption_key
 * @property {bytes} encryption_iv
 * @property {Array.<FileHash>} file_hashes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dcOption}
 * @typedef {DcOption} dcOption
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/config}
 * @typedef {Config} config
 * @property {number} flags
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
 * @property {int} base_lang_pack_version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/nearestDc}
 * @typedef {NearestDc} nearestDc
 * @property {string} country
 * @property {int} this_dc
 * @property {int} nearest_dc
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.appUpdate}
 * @typedef {help.AppUpdate} help.appUpdate
 * @property {number} flags
 * @property {true} popup
 * @property {int} id
 * @property {string} version
 * @property {string} text
 * @property {Array.<MessageEntity>} entities
 * @property {Document} document
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.noAppUpdate}
 * @typedef {help.AppUpdate} help.noAppUpdate
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.inviteText}
 * @typedef {help.InviteText} help.inviteText
 * @property {string} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChatEmpty}
 * @typedef {EncryptedChat} encryptedChatEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChatWaiting}
 * @typedef {EncryptedChat} encryptedChatWaiting
 * @property {int} id
 * @property {long} access_hash
 * @property {int} date
 * @property {int} admin_id
 * @property {int} participant_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedChatRequested}
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
 * @see {@link https://core.telegram.org/constructor/encryptedChat}
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
 * @see {@link https://core.telegram.org/constructor/encryptedChatDiscarded}
 * @typedef {EncryptedChat} encryptedChatDiscarded
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedChat}
 * @typedef {InputEncryptedChat} inputEncryptedChat
 * @property {int} chat_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedFileEmpty}
 * @typedef {EncryptedFile} encryptedFileEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedFile}
 * @typedef {EncryptedFile} encryptedFile
 * @property {long} id
 * @property {long} access_hash
 * @property {int} size
 * @property {int} dc_id
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileEmpty}
 * @typedef {InputEncryptedFile} inputEncryptedFileEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileUploaded}
 * @typedef {InputEncryptedFile} inputEncryptedFileUploaded
 * @property {long} id
 * @property {int} parts
 * @property {string} md5_checksum
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFile}
 * @typedef {InputEncryptedFile} inputEncryptedFile
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileBigUploaded}
 * @typedef {InputEncryptedFile} inputEncryptedFileBigUploaded
 * @property {long} id
 * @property {int} parts
 * @property {int} key_fingerprint
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedMessage}
 * @typedef {EncryptedMessage} encryptedMessage
 * @property {long} random_id
 * @property {int} chat_id
 * @property {int} date
 * @property {bytes} bytes
 * @property {EncryptedFile} file
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/encryptedMessageService}
 * @typedef {EncryptedMessage} encryptedMessageService
 * @property {long} random_id
 * @property {int} chat_id
 * @property {int} date
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dhConfigNotModified}
 * @typedef {messages.DhConfig} messages.dhConfigNotModified
 * @property {bytes} random
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dhConfig}
 * @typedef {messages.DhConfig} messages.dhConfig
 * @property {int} g
 * @property {bytes} p
 * @property {int} version
 * @property {bytes} random
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.sentEncryptedMessage}
 * @typedef {messages.SentEncryptedMessage} messages.sentEncryptedMessage
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.sentEncryptedFile}
 * @typedef {messages.SentEncryptedMessage} messages.sentEncryptedFile
 * @property {int} date
 * @property {EncryptedFile} file
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDocumentEmpty}
 * @typedef {InputDocument} inputDocumentEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDocument}
 * @typedef {InputDocument} inputDocument
 * @property {long} id
 * @property {long} access_hash
 * @property {bytes} file_reference
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentEmpty}
 * @typedef {Document} documentEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/document}
 * @typedef {Document} document
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
 * @typedef {help.Support} help.support
 * @property {string} phone_number
 * @property {User} user
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyPeer}
 * @typedef {NotifyPeer} notifyPeer
 * @property {Peer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyUsers}
 * @typedef {NotifyPeer} notifyUsers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyChats}
 * @typedef {NotifyPeer} notifyChats
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/notifyBroadcasts}
 * @typedef {NotifyPeer} notifyBroadcasts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageTypingAction}
 * @typedef {SendMessageAction} sendMessageTypingAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageCancelAction}
 * @typedef {SendMessageAction} sendMessageCancelAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageRecordVideoAction}
 * @typedef {SendMessageAction} sendMessageRecordVideoAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadVideoAction}
 * @typedef {SendMessageAction} sendMessageUploadVideoAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageRecordAudioAction}
 * @typedef {SendMessageAction} sendMessageRecordAudioAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadAudioAction}
 * @typedef {SendMessageAction} sendMessageUploadAudioAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadPhotoAction}
 * @typedef {SendMessageAction} sendMessageUploadPhotoAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadDocumentAction}
 * @typedef {SendMessageAction} sendMessageUploadDocumentAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageGeoLocationAction}
 * @typedef {SendMessageAction} sendMessageGeoLocationAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageChooseContactAction}
 * @typedef {SendMessageAction} sendMessageChooseContactAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageGamePlayAction}
 * @typedef {SendMessageAction} sendMessageGamePlayAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageRecordRoundAction}
 * @typedef {SendMessageAction} sendMessageRecordRoundAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadRoundAction}
 * @typedef {SendMessageAction} sendMessageUploadRoundAction
 * @property {int} progress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.found}
 * @typedef {contacts.Found} contacts.found
 * @property {Array.<Peer>} my_results
 * @property {Array.<Peer>} results
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyStatusTimestamp}
 * @typedef {InputPrivacyKey} inputPrivacyKeyStatusTimestamp
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyChatInvite}
 * @typedef {InputPrivacyKey} inputPrivacyKeyChatInvite
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyPhoneCall}
 * @typedef {InputPrivacyKey} inputPrivacyKeyPhoneCall
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyPhoneP2P}
 * @typedef {InputPrivacyKey} inputPrivacyKeyPhoneP2P
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyStatusTimestamp}
 * @typedef {PrivacyKey} privacyKeyStatusTimestamp
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyChatInvite}
 * @typedef {PrivacyKey} privacyKeyChatInvite
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyPhoneCall}
 * @typedef {PrivacyKey} privacyKeyPhoneCall
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyPhoneP2P}
 * @typedef {PrivacyKey} privacyKeyPhoneP2P
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueAllowContacts}
 * @typedef {InputPrivacyRule} inputPrivacyValueAllowContacts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueAllowAll}
 * @typedef {InputPrivacyRule} inputPrivacyValueAllowAll
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueAllowUsers}
 * @typedef {InputPrivacyRule} inputPrivacyValueAllowUsers
 * @property {Array.<InputUser>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueDisallowContacts}
 * @typedef {InputPrivacyRule} inputPrivacyValueDisallowContacts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueDisallowAll}
 * @typedef {InputPrivacyRule} inputPrivacyValueDisallowAll
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyValueDisallowUsers}
 * @typedef {InputPrivacyRule} inputPrivacyValueDisallowUsers
 * @property {Array.<InputUser>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueAllowContacts}
 * @typedef {PrivacyRule} privacyValueAllowContacts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueAllowAll}
 * @typedef {PrivacyRule} privacyValueAllowAll
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueAllowUsers}
 * @typedef {PrivacyRule} privacyValueAllowUsers
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueDisallowContacts}
 * @typedef {PrivacyRule} privacyValueDisallowContacts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueDisallowAll}
 * @typedef {PrivacyRule} privacyValueDisallowAll
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyValueDisallowUsers}
 * @typedef {PrivacyRule} privacyValueDisallowUsers
 * @property {Array.<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.privacyRules}
 * @typedef {account.PrivacyRules} account.privacyRules
 * @property {Array.<PrivacyRule>} rules
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/accountDaysTTL}
 * @typedef {AccountDaysTTL} accountDaysTTL
 * @property {int} days
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeImageSize}
 * @typedef {DocumentAttribute} documentAttributeImageSize
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeAnimated}
 * @typedef {DocumentAttribute} documentAttributeAnimated
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeSticker}
 * @typedef {DocumentAttribute} documentAttributeSticker
 * @property {number} flags
 * @property {true} mask
 * @property {string} alt
 * @property {InputStickerSet} stickerset
 * @property {MaskCoords} mask_coords
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeVideo}
 * @typedef {DocumentAttribute} documentAttributeVideo
 * @property {number} flags
 * @property {true} round_message
 * @property {true} supports_streaming
 * @property {int} duration
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeAudio}
 * @typedef {DocumentAttribute} documentAttributeAudio
 * @property {number} flags
 * @property {true} voice
 * @property {int} duration
 * @property {string} title
 * @property {string} performer
 * @property {bytes} waveform
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeFilename}
 * @typedef {DocumentAttribute} documentAttributeFilename
 * @property {string} file_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeHasStickers}
 * @typedef {DocumentAttribute} documentAttributeHasStickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickersNotModified}
 * @typedef {messages.Stickers} messages.stickersNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickers}
 * @typedef {messages.Stickers} messages.stickers
 * @property {int} hash
 * @property {Array.<Document>} stickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerPack}
 * @typedef {StickerPack} stickerPack
 * @property {string} emoticon
 * @property {Array.<long>} documents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.allStickersNotModified}
 * @typedef {messages.AllStickers} messages.allStickersNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.allStickers}
 * @typedef {messages.AllStickers} messages.allStickers
 * @property {int} hash
 * @property {Array.<StickerSet>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.affectedMessages}
 * @typedef {messages.AffectedMessages} messages.affectedMessages
 * @property {int} pts
 * @property {int} pts_count
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkUnknown}
 * @typedef {ContactLink} contactLinkUnknown
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkNone}
 * @typedef {ContactLink} contactLinkNone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkHasPhone}
 * @typedef {ContactLink} contactLinkHasPhone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contactLinkContact}
 * @typedef {ContactLink} contactLinkContact
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webPageEmpty}
 * @typedef {WebPage} webPageEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webPagePending}
 * @typedef {WebPage} webPagePending
 * @property {long} id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webPage}
 * @typedef {WebPage} webPage
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/webPageNotModified}
 * @typedef {WebPage} webPageNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/authorization}
 * @typedef {Authorization} authorization
 * @property {number} flags
 * @property {true} current
 * @property {true} official_app
 * @property {true} password_pending
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
 * @typedef {account.Authorizations} account.authorizations
 * @property {Array.<Authorization>} authorizations
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.password}
 * @typedef {account.Password} account.password
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/account.passwordSettings}
 * @typedef {account.PasswordSettings} account.passwordSettings
 * @property {number} flags
 * @property {string} email
 * @property {SecureSecretSettings} secure_settings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.passwordInputSettings}
 * @typedef {account.PasswordInputSettings} account.passwordInputSettings
 * @property {number} flags
 * @property {PasswordKdfAlgo} new_algo
 * @property {bytes} new_password_hash
 * @property {string} hint
 * @property {string} email
 * @property {SecureSecretSettings} new_secure_settings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.passwordRecovery}
 * @typedef {auth.PasswordRecovery} auth.passwordRecovery
 * @property {string} email_pattern
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/receivedNotifyMessage}
 * @typedef {ReceivedNotifyMessage} receivedNotifyMessage
 * @property {int} id
 * @property {int} flags
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInviteEmpty}
 * @typedef {ExportedChatInvite} chatInviteEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInviteExported}
 * @typedef {ExportedChatInvite} chatInviteExported
 * @property {string} link
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInviteAlready}
 * @typedef {ChatInvite} chatInviteAlready
 * @property {Chat} chat
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatInvite}
 * @typedef {ChatInvite} chatInvite
 * @property {number} flags
 * @property {true} channel
 * @property {true} broadcast
 * @property {true} public
 * @property {true} megagroup
 * @property {string} title
 * @property {ChatPhoto} photo
 * @property {int} participants_count
 * @property {Array.<User>} participants
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetEmpty}
 * @typedef {InputStickerSet} inputStickerSetEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetID}
 * @typedef {InputStickerSet} inputStickerSetID
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetShortName}
 * @typedef {InputStickerSet} inputStickerSetShortName
 * @property {string} short_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerSet}
 * @typedef {StickerSet} stickerSet
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/messages.stickerSet}
 * @typedef {messages.StickerSet} messages.stickerSet
 * @property {StickerSet} set
 * @property {Array.<StickerPack>} packs
 * @property {Array.<Document>} documents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botCommand}
 * @typedef {BotCommand} botCommand
 * @property {string} command
 * @property {string} description
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInfo}
 * @typedef {BotInfo} botInfo
 * @property {int} user_id
 * @property {string} description
 * @property {Array.<BotCommand>} commands
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButton}
 * @typedef {KeyboardButton} keyboardButton
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonUrl}
 * @typedef {KeyboardButton} keyboardButtonUrl
 * @property {string} text
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonCallback}
 * @typedef {KeyboardButton} keyboardButtonCallback
 * @property {string} text
 * @property {bytes} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonRequestPhone}
 * @typedef {KeyboardButton} keyboardButtonRequestPhone
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonRequestGeoLocation}
 * @typedef {KeyboardButton} keyboardButtonRequestGeoLocation
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonSwitchInline}
 * @typedef {KeyboardButton} keyboardButtonSwitchInline
 * @property {number} flags
 * @property {true} same_peer
 * @property {string} text
 * @property {string} query
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonGame}
 * @typedef {KeyboardButton} keyboardButtonGame
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonBuy}
 * @typedef {KeyboardButton} keyboardButtonBuy
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/keyboardButtonRow}
 * @typedef {KeyboardButtonRow} keyboardButtonRow
 * @property {Array.<KeyboardButton>} buttons
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyKeyboardHide}
 * @typedef {ReplyMarkup} replyKeyboardHide
 * @property {number} flags
 * @property {true} selective
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyKeyboardForceReply}
 * @typedef {ReplyMarkup} replyKeyboardForceReply
 * @property {number} flags
 * @property {true} single_use
 * @property {true} selective
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyKeyboardMarkup}
 * @typedef {ReplyMarkup} replyKeyboardMarkup
 * @property {number} flags
 * @property {true} resize
 * @property {true} single_use
 * @property {true} selective
 * @property {Array.<KeyboardButtonRow>} rows
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/replyInlineMarkup}
 * @typedef {ReplyMarkup} replyInlineMarkup
 * @property {Array.<KeyboardButtonRow>} rows
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityUnknown}
 * @typedef {MessageEntity} messageEntityUnknown
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityMention}
 * @typedef {MessageEntity} messageEntityMention
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityHashtag}
 * @typedef {MessageEntity} messageEntityHashtag
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityBotCommand}
 * @typedef {MessageEntity} messageEntityBotCommand
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityUrl}
 * @typedef {MessageEntity} messageEntityUrl
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityEmail}
 * @typedef {MessageEntity} messageEntityEmail
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityBold}
 * @typedef {MessageEntity} messageEntityBold
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityItalic}
 * @typedef {MessageEntity} messageEntityItalic
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityCode}
 * @typedef {MessageEntity} messageEntityCode
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityPre}
 * @typedef {MessageEntity} messageEntityPre
 * @property {int} offset
 * @property {int} length
 * @property {string} language
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityTextUrl}
 * @typedef {MessageEntity} messageEntityTextUrl
 * @property {int} offset
 * @property {int} length
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityMentionName}
 * @typedef {MessageEntity} messageEntityMentionName
 * @property {int} offset
 * @property {int} length
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessageEntityMentionName}
 * @typedef {MessageEntity} inputMessageEntityMentionName
 * @property {int} offset
 * @property {int} length
 * @property {InputUser} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityPhone}
 * @typedef {MessageEntity} messageEntityPhone
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageEntityCashtag}
 * @typedef {MessageEntity} messageEntityCashtag
 * @property {int} offset
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChannelEmpty}
 * @typedef {InputChannel} inputChannelEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChannel}
 * @typedef {InputChannel} inputChannel
 * @property {int} channel_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.resolvedPeer}
 * @typedef {contacts.ResolvedPeer} contacts.resolvedPeer
 * @property {Peer} peer
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageRange}
 * @typedef {MessageRange} messageRange
 * @property {int} min_id
 * @property {int} max_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.channelDifferenceEmpty}
 * @typedef {updates.ChannelDifference} updates.channelDifferenceEmpty
 * @property {number} flags
 * @property {true} final
 * @property {int} pts
 * @property {int} timeout
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.channelDifferenceTooLong}
 * @typedef {updates.ChannelDifference} updates.channelDifferenceTooLong
 * @property {number} flags
 * @property {true} final
 * @property {int} pts
 * @property {int} timeout
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
 * @typedef {updates.ChannelDifference} updates.channelDifference
 * @property {number} flags
 * @property {true} final
 * @property {int} pts
 * @property {int} timeout
 * @property {Array.<Message>} new_messages
 * @property {Array.<Update>} other_updates
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelMessagesFilterEmpty}
 * @typedef {ChannelMessagesFilter} channelMessagesFilterEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelMessagesFilter}
 * @typedef {ChannelMessagesFilter} channelMessagesFilter
 * @property {number} flags
 * @property {true} exclude_new_messages
 * @property {Array.<MessageRange>} ranges
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipant}
 * @typedef {ChannelParticipant} channelParticipant
 * @property {int} user_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantSelf}
 * @typedef {ChannelParticipant} channelParticipantSelf
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantCreator}
 * @typedef {ChannelParticipant} channelParticipantCreator
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantAdmin}
 * @typedef {ChannelParticipant} channelParticipantAdmin
 * @property {number} flags
 * @property {true} can_edit
 * @property {int} user_id
 * @property {int} inviter_id
 * @property {int} promoted_by
 * @property {int} date
 * @property {ChannelAdminRights} admin_rights
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantBanned}
 * @typedef {ChannelParticipant} channelParticipantBanned
 * @property {number} flags
 * @property {true} left
 * @property {int} user_id
 * @property {int} kicked_by
 * @property {int} date
 * @property {ChannelBannedRights} banned_rights
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsRecent}
 * @typedef {ChannelParticipantsFilter} channelParticipantsRecent
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsAdmins}
 * @typedef {ChannelParticipantsFilter} channelParticipantsAdmins
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsKicked}
 * @typedef {ChannelParticipantsFilter} channelParticipantsKicked
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsBots}
 * @typedef {ChannelParticipantsFilter} channelParticipantsBots
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsBanned}
 * @typedef {ChannelParticipantsFilter} channelParticipantsBanned
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelParticipantsSearch}
 * @typedef {ChannelParticipantsFilter} channelParticipantsSearch
 * @property {string} q
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.channelParticipants}
 * @typedef {channels.ChannelParticipants} channels.channelParticipants
 * @property {int} count
 * @property {Array.<ChannelParticipant>} participants
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.channelParticipantsNotModified}
 * @typedef {channels.ChannelParticipants} channels.channelParticipantsNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.channelParticipant}
 * @typedef {channels.ChannelParticipant} channels.channelParticipant
 * @property {ChannelParticipant} participant
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.termsOfService}
 * @typedef {help.TermsOfService} help.termsOfService
 * @property {number} flags
 * @property {true} popup
 * @property {DataJSON} id
 * @property {string} text
 * @property {Array.<MessageEntity>} entities
 * @property {int} min_age_confirm
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/foundGif}
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
 * @see {@link https://core.telegram.org/constructor/foundGifCached}
 * @typedef {FoundGif} foundGifCached
 * @property {string} url
 * @property {Photo} photo
 * @property {Document} document
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.foundGifs}
 * @typedef {messages.FoundGifs} messages.foundGifs
 * @property {int} next_offset
 * @property {Array.<FoundGif>} results
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.savedGifsNotModified}
 * @typedef {messages.SavedGifs} messages.savedGifsNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.savedGifs}
 * @typedef {messages.SavedGifs} messages.savedGifs
 * @property {int} hash
 * @property {Array.<Document>} gifs
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaAuto}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaAuto
 * @property {number} flags
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageText}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageText
 * @property {number} flags
 * @property {true} no_webpage
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaGeo}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaGeo
 * @property {number} flags
 * @property {InputGeoPoint} geo_point
 * @property {int} period
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaVenue}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaVenue
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageMediaContact}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageMediaContact
 * @property {number} flags
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageGame}
 * @typedef {InputBotInlineMessage} inputBotInlineMessageGame
 * @property {number} flags
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResult}
 * @typedef {InputBotInlineResult} inputBotInlineResult
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResultPhoto}
 * @typedef {InputBotInlineResult} inputBotInlineResultPhoto
 * @property {string} id
 * @property {string} type
 * @property {InputPhoto} photo
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResultDocument}
 * @typedef {InputBotInlineResult} inputBotInlineResultDocument
 * @property {number} flags
 * @property {string} id
 * @property {string} type
 * @property {string} title
 * @property {string} description
 * @property {InputDocument} document
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineResultGame}
 * @typedef {InputBotInlineResult} inputBotInlineResultGame
 * @property {string} id
 * @property {string} short_name
 * @property {InputBotInlineMessage} send_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaAuto}
 * @typedef {BotInlineMessage} botInlineMessageMediaAuto
 * @property {number} flags
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageText}
 * @typedef {BotInlineMessage} botInlineMessageText
 * @property {number} flags
 * @property {true} no_webpage
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaGeo}
 * @typedef {BotInlineMessage} botInlineMessageMediaGeo
 * @property {number} flags
 * @property {GeoPoint} geo
 * @property {int} period
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaVenue}
 * @typedef {BotInlineMessage} botInlineMessageMediaVenue
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/botInlineMessageMediaContact}
 * @typedef {BotInlineMessage} botInlineMessageMediaContact
 * @property {number} flags
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} vcard
 * @property {ReplyMarkup} reply_markup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/botInlineResult}
 * @typedef {BotInlineResult} botInlineResult
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/botInlineMediaResult}
 * @typedef {BotInlineResult} botInlineMediaResult
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/messages.botResults}
 * @typedef {messages.BotResults} messages.botResults
 * @property {number} flags
 * @property {true} gallery
 * @property {long} query_id
 * @property {string} next_offset
 * @property {InlineBotSwitchPM} switch_pm
 * @property {Array.<BotInlineResult>} results
 * @property {int} cache_time
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/exportedMessageLink}
 * @typedef {ExportedMessageLink} exportedMessageLink
 * @property {string} link
 * @property {string} html
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageFwdHeader}
 * @typedef {MessageFwdHeader} messageFwdHeader
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/auth.codeTypeSms}
 * @typedef {auth.CodeType} auth.codeTypeSms
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.codeTypeCall}
 * @typedef {auth.CodeType} auth.codeTypeCall
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.codeTypeFlashCall}
 * @typedef {auth.CodeType} auth.codeTypeFlashCall
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeApp}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeApp
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeSms}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeSms
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeCall}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeCall
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCodeTypeFlashCall}
 * @typedef {auth.SentCodeType} auth.sentCodeTypeFlashCall
 * @property {string} pattern
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.botCallbackAnswer}
 * @typedef {messages.BotCallbackAnswer} messages.botCallbackAnswer
 * @property {number} flags
 * @property {true} alert
 * @property {true} has_url
 * @property {true} native_ui
 * @property {string} message
 * @property {string} url
 * @property {int} cache_time
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messageEditData}
 * @typedef {messages.MessageEditData} messages.messageEditData
 * @property {number} flags
 * @property {true} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputBotInlineMessageID}
 * @typedef {InputBotInlineMessageID} inputBotInlineMessageID
 * @property {int} dc_id
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inlineBotSwitchPM}
 * @typedef {InlineBotSwitchPM} inlineBotSwitchPM
 * @property {string} text
 * @property {string} start_param
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.peerDialogs}
 * @typedef {messages.PeerDialogs} messages.peerDialogs
 * @property {Array.<Dialog>} dialogs
 * @property {Array.<Message>} messages
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 * @property {updates.State} state
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeer}
 * @typedef {TopPeer} topPeer
 * @property {Peer} peer
 * @property {double} rating
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryBotsPM}
 * @typedef {TopPeerCategory} topPeerCategoryBotsPM
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryBotsInline}
 * @typedef {TopPeerCategory} topPeerCategoryBotsInline
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryCorrespondents}
 * @typedef {TopPeerCategory} topPeerCategoryCorrespondents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryGroups}
 * @typedef {TopPeerCategory} topPeerCategoryGroups
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryChannels}
 * @typedef {TopPeerCategory} topPeerCategoryChannels
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryPhoneCalls}
 * @typedef {TopPeerCategory} topPeerCategoryPhoneCalls
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/topPeerCategoryPeers}
 * @typedef {TopPeerCategoryPeers} topPeerCategoryPeers
 * @property {TopPeerCategory} category
 * @property {int} count
 * @property {Array.<TopPeer>} peers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.topPeersNotModified}
 * @typedef {contacts.TopPeers} contacts.topPeersNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.topPeers}
 * @typedef {contacts.TopPeers} contacts.topPeers
 * @property {Array.<TopPeerCategoryPeers>} categories
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.topPeersDisabled}
 * @typedef {contacts.TopPeers} contacts.topPeersDisabled
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/draftMessageEmpty}
 * @typedef {DraftMessage} draftMessageEmpty
 * @property {number} flags
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/draftMessage}
 * @typedef {DraftMessage} draftMessage
 * @property {number} flags
 * @property {true} no_webpage
 * @property {int} reply_to_msg_id
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.featuredStickersNotModified}
 * @typedef {messages.FeaturedStickers} messages.featuredStickersNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.featuredStickers}
 * @typedef {messages.FeaturedStickers} messages.featuredStickers
 * @property {int} hash
 * @property {Array.<StickerSetCovered>} sets
 * @property {Array.<long>} unread
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.recentStickersNotModified}
 * @typedef {messages.RecentStickers} messages.recentStickersNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.recentStickers}
 * @typedef {messages.RecentStickers} messages.recentStickers
 * @property {int} hash
 * @property {Array.<StickerPack>} packs
 * @property {Array.<Document>} stickers
 * @property {Array.<int>} dates
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.archivedStickers}
 * @typedef {messages.ArchivedStickers} messages.archivedStickers
 * @property {int} count
 * @property {Array.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickerSetInstallResultSuccess}
 * @typedef {messages.StickerSetInstallResult} messages.stickerSetInstallResultSuccess
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.stickerSetInstallResultArchive}
 * @typedef {messages.StickerSetInstallResult} messages.stickerSetInstallResultArchive
 * @property {Array.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerSetCovered}
 * @typedef {StickerSetCovered} stickerSetCovered
 * @property {StickerSet} set
 * @property {Document} cover
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerSetMultiCovered}
 * @typedef {StickerSetCovered} stickerSetMultiCovered
 * @property {StickerSet} set
 * @property {Array.<Document>} covers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/maskCoords}
 * @typedef {MaskCoords} maskCoords
 * @property {int} n
 * @property {double} x
 * @property {double} y
 * @property {double} zoom
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickeredMediaPhoto}
 * @typedef {InputStickeredMedia} inputStickeredMediaPhoto
 * @property {InputPhoto} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickeredMediaDocument}
 * @typedef {InputStickeredMedia} inputStickeredMediaDocument
 * @property {InputDocument} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/game}
 * @typedef {Game} game
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/inputGameID}
 * @typedef {InputGame} inputGameID
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputGameShortName}
 * @typedef {InputGame} inputGameShortName
 * @property {InputUser} bot_id
 * @property {string} short_name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/highScore}
 * @typedef {HighScore} highScore
 * @property {int} pos
 * @property {int} user_id
 * @property {int} score
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.highScores}
 * @typedef {messages.HighScores} messages.highScores
 * @property {Array.<HighScore>} scores
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textEmpty}
 * @typedef {RichText} textEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textPlain}
 * @typedef {RichText} textPlain
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textBold}
 * @typedef {RichText} textBold
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textItalic}
 * @typedef {RichText} textItalic
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textUnderline}
 * @typedef {RichText} textUnderline
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textStrike}
 * @typedef {RichText} textStrike
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textFixed}
 * @typedef {RichText} textFixed
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textUrl}
 * @typedef {RichText} textUrl
 * @property {RichText} text
 * @property {string} url
 * @property {long} webpage_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textEmail}
 * @typedef {RichText} textEmail
 * @property {RichText} text
 * @property {string} email
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textConcat}
 * @typedef {RichText} textConcat
 * @property {Array.<RichText>} texts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textSubscript}
 * @typedef {RichText} textSubscript
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textSuperscript}
 * @typedef {RichText} textSuperscript
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textMarked}
 * @typedef {RichText} textMarked
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textPhone}
 * @typedef {RichText} textPhone
 * @property {RichText} text
 * @property {string} phone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textImage}
 * @typedef {RichText} textImage
 * @property {long} document_id
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/textAnchor}
 * @typedef {RichText} textAnchor
 * @property {RichText} text
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockUnsupported}
 * @typedef {PageBlock} pageBlockUnsupported
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockTitle}
 * @typedef {PageBlock} pageBlockTitle
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockSubtitle}
 * @typedef {PageBlock} pageBlockSubtitle
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockAuthorDate}
 * @typedef {PageBlock} pageBlockAuthorDate
 * @property {RichText} author
 * @property {int} published_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockHeader}
 * @typedef {PageBlock} pageBlockHeader
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockSubheader}
 * @typedef {PageBlock} pageBlockSubheader
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockParagraph}
 * @typedef {PageBlock} pageBlockParagraph
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockPreformatted}
 * @typedef {PageBlock} pageBlockPreformatted
 * @property {RichText} text
 * @property {string} language
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockFooter}
 * @typedef {PageBlock} pageBlockFooter
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockDivider}
 * @typedef {PageBlock} pageBlockDivider
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockAnchor}
 * @typedef {PageBlock} pageBlockAnchor
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockList}
 * @typedef {PageBlock} pageBlockList
 * @property {Array.<PageListItem>} items
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockBlockquote}
 * @typedef {PageBlock} pageBlockBlockquote
 * @property {RichText} text
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockPullquote}
 * @typedef {PageBlock} pageBlockPullquote
 * @property {RichText} text
 * @property {RichText} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockPhoto}
 * @typedef {PageBlock} pageBlockPhoto
 * @property {number} flags
 * @property {long} photo_id
 * @property {PageCaption} caption
 * @property {string} url
 * @property {long} webpage_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockVideo}
 * @typedef {PageBlock} pageBlockVideo
 * @property {number} flags
 * @property {true} autoplay
 * @property {true} loop
 * @property {long} video_id
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockCover}
 * @typedef {PageBlock} pageBlockCover
 * @property {PageBlock} cover
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockEmbed}
 * @typedef {PageBlock} pageBlockEmbed
 * @property {number} flags
 * @property {true} full_width
 * @property {true} allow_scrolling
 * @property {string} url
 * @property {string} html
 * @property {long} poster_photo_id
 * @property {int} w
 * @property {int} h
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockEmbedPost}
 * @typedef {PageBlock} pageBlockEmbedPost
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
 * @typedef {PageBlock} pageBlockCollage
 * @property {Array.<PageBlock>} items
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockSlideshow}
 * @typedef {PageBlock} pageBlockSlideshow
 * @property {Array.<PageBlock>} items
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockChannel}
 * @typedef {PageBlock} pageBlockChannel
 * @property {Chat} channel
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockAudio}
 * @typedef {PageBlock} pageBlockAudio
 * @property {long} audio_id
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockKicker}
 * @typedef {PageBlock} pageBlockKicker
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockTable}
 * @typedef {PageBlock} pageBlockTable
 * @property {number} flags
 * @property {true} bordered
 * @property {true} striped
 * @property {RichText} title
 * @property {Array.<PageTableRow>} rows
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockOrderedList}
 * @typedef {PageBlock} pageBlockOrderedList
 * @property {Array.<PageListOrderedItem>} items
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockDetails}
 * @typedef {PageBlock} pageBlockDetails
 * @property {number} flags
 * @property {true} open
 * @property {Array.<PageBlock>} blocks
 * @property {RichText} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockRelatedArticles}
 * @typedef {PageBlock} pageBlockRelatedArticles
 * @property {RichText} title
 * @property {Array.<PageRelatedArticle>} articles
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageBlockMap}
 * @typedef {PageBlock} pageBlockMap
 * @property {GeoPoint} geo
 * @property {int} zoom
 * @property {int} w
 * @property {int} h
 * @property {PageCaption} caption
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonMissed}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonMissed
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonDisconnect}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonDisconnect
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonHangup}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonHangup
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallDiscardReasonBusy}
 * @typedef {PhoneCallDiscardReason} phoneCallDiscardReasonBusy
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dataJSON}
 * @typedef {DataJSON} dataJSON
 * @property {string} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/labeledPrice}
 * @typedef {LabeledPrice} labeledPrice
 * @property {string} label
 * @property {long} amount
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/invoice}
 * @typedef {Invoice} invoice
 * @property {number} flags
 * @property {true} test
 * @property {true} name_requested
 * @property {true} phone_requested
 * @property {true} email_requested
 * @property {true} shipping_address_requested
 * @property {true} flexible
 * @property {true} phone_to_provider
 * @property {true} email_to_provider
 * @property {string} currency
 * @property {Array.<LabeledPrice>} prices
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/paymentCharge}
 * @typedef {PaymentCharge} paymentCharge
 * @property {string} id
 * @property {string} provider_charge_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/postAddress}
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
 * @see {@link https://core.telegram.org/constructor/paymentRequestedInfo}
 * @typedef {PaymentRequestedInfo} paymentRequestedInfo
 * @property {number} flags
 * @property {string} name
 * @property {string} phone
 * @property {string} email
 * @property {PostAddress} shipping_address
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/paymentSavedCredentialsCard}
 * @typedef {PaymentSavedCredentials} paymentSavedCredentialsCard
 * @property {string} id
 * @property {string} title
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webDocument}
 * @typedef {WebDocument} webDocument
 * @property {string} url
 * @property {long} access_hash
 * @property {int} size
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webDocumentNoProxy}
 * @typedef {WebDocument} webDocumentNoProxy
 * @property {string} url
 * @property {int} size
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputWebDocument}
 * @typedef {InputWebDocument} inputWebDocument
 * @property {string} url
 * @property {int} size
 * @property {string} mime_type
 * @property {Array.<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputWebFileLocation}
 * @typedef {InputWebFileLocation} inputWebFileLocation
 * @property {string} url
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputWebFileGeoPointLocation}
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
 * @see {@link https://core.telegram.org/constructor/upload.webFile}
 * @typedef {upload.WebFile} upload.webFile
 * @property {int} size
 * @property {string} mime_type
 * @property {storage.FileType} file_type
 * @property {int} mtime
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentForm}
 * @typedef {payments.PaymentForm} payments.paymentForm
 * @property {number} flags
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
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.validatedRequestedInfo}
 * @typedef {payments.ValidatedRequestedInfo} payments.validatedRequestedInfo
 * @property {number} flags
 * @property {string} id
 * @property {Array.<ShippingOption>} shipping_options
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentResult}
 * @typedef {payments.PaymentResult} payments.paymentResult
 * @property {Updates} updates
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentVerficationNeeded}
 * @typedef {payments.PaymentResult} payments.paymentVerficationNeeded
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.paymentReceipt}
 * @typedef {payments.PaymentReceipt} payments.paymentReceipt
 * @property {number} flags
 * @property {int} date
 * @property {int} bot_id
 * @property {Invoice} invoice
 * @property {int} provider_id
 * @property {PaymentRequestedInfo} info
 * @property {ShippingOption} shipping
 * @property {string} currency
 * @property {long} total_amount
 * @property {string} credentials_title
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/payments.savedInfo}
 * @typedef {payments.SavedInfo} payments.savedInfo
 * @property {number} flags
 * @property {true} has_saved_credentials
 * @property {PaymentRequestedInfo} saved_info
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentialsSaved}
 * @typedef {InputPaymentCredentials} inputPaymentCredentialsSaved
 * @property {string} id
 * @property {bytes} tmp_password
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentials}
 * @typedef {InputPaymentCredentials} inputPaymentCredentials
 * @property {number} flags
 * @property {true} save
 * @property {DataJSON} data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentialsApplePay}
 * @typedef {InputPaymentCredentials} inputPaymentCredentialsApplePay
 * @property {DataJSON} payment_data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPaymentCredentialsAndroidPay}
 * @typedef {InputPaymentCredentials} inputPaymentCredentialsAndroidPay
 * @property {DataJSON} payment_token
 * @property {string} google_transaction_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.tmpPassword}
 * @typedef {account.TmpPassword} account.tmpPassword
 * @property {bytes} tmp_password
 * @property {int} valid_until
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/shippingOption}
 * @typedef {ShippingOption} shippingOption
 * @property {string} id
 * @property {string} title
 * @property {Array.<LabeledPrice>} prices
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputStickerSetItem}
 * @typedef {InputStickerSetItem} inputStickerSetItem
 * @property {number} flags
 * @property {InputDocument} document
 * @property {string} emoji
 * @property {MaskCoords} mask_coords
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhoneCall}
 * @typedef {InputPhoneCall} inputPhoneCall
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallEmpty}
 * @typedef {PhoneCall} phoneCallEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallWaiting}
 * @typedef {PhoneCall} phoneCallWaiting
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/phoneCallRequested}
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
 * @see {@link https://core.telegram.org/constructor/phoneCallAccepted}
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
 * @see {@link https://core.telegram.org/constructor/phoneCall}
 * @typedef {PhoneCall} phoneCall
 * @property {number} flags
 * @property {true} p2p_allowed
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
 * @typedef {PhoneCall} phoneCallDiscarded
 * @property {number} flags
 * @property {true} need_rating
 * @property {true} need_debug
 * @property {long} id
 * @property {PhoneCallDiscardReason} reason
 * @property {int} duration
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneConnection}
 * @typedef {PhoneConnection} phoneConnection
 * @property {long} id
 * @property {string} ip
 * @property {string} ipv6
 * @property {int} port
 * @property {bytes} peer_tag
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phoneCallProtocol}
 * @typedef {PhoneCallProtocol} phoneCallProtocol
 * @property {number} flags
 * @property {true} udp_p2p
 * @property {true} udp_reflector
 * @property {int} min_layer
 * @property {int} max_layer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/phone.phoneCall}
 * @typedef {phone.PhoneCall} phone.phoneCall
 * @property {PhoneCall} phone_call
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.cdnFileReuploadNeeded}
 * @typedef {upload.CdnFile} upload.cdnFileReuploadNeeded
 * @property {bytes} request_token
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/upload.cdnFile}
 * @typedef {upload.CdnFile} upload.cdnFile
 * @property {bytes} bytes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/cdnPublicKey}
 * @typedef {CdnPublicKey} cdnPublicKey
 * @property {int} dc_id
 * @property {string} public_key
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/cdnConfig}
 * @typedef {CdnConfig} cdnConfig
 * @property {Array.<CdnPublicKey>} public_keys
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackString}
 * @typedef {LangPackString} langPackString
 * @property {string} key
 * @property {string} value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackStringPluralized}
 * @typedef {LangPackString} langPackStringPluralized
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/langPackStringDeleted}
 * @typedef {LangPackString} langPackStringDeleted
 * @property {string} key
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackDifference}
 * @typedef {LangPackDifference} langPackDifference
 * @property {string} lang_code
 * @property {int} from_version
 * @property {int} version
 * @property {Array.<LangPackString>} strings
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/langPackLanguage}
 * @typedef {LangPackLanguage} langPackLanguage
 * @property {number} flags
 * @property {true} official
 * @property {true} rtl
 * @property {string} name
 * @property {string} native_name
 * @property {string} lang_code
 * @property {string} base_lang_code
 * @property {string} plural_code
 * @property {int} strings_count
 * @property {int} translated_count
 * @property {string} translations_url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminRights}
 * @typedef {ChannelAdminRights} channelAdminRights
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/channelBannedRights}
 * @typedef {ChannelBannedRights} channelBannedRights
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeTitle}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeTitle
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeAbout}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeAbout
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeUsername}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeUsername
 * @property {string} prev_value
 * @property {string} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangePhoto}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangePhoto
 * @property {ChatPhoto} prev_photo
 * @property {ChatPhoto} new_photo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionToggleInvites}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionToggleInvites
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionToggleSignatures}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionToggleSignatures
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionUpdatePinned}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionUpdatePinned
 * @property {Message} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionEditMessage}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionEditMessage
 * @property {Message} prev_message
 * @property {Message} new_message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionDeleteMessage}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionDeleteMessage
 * @property {Message} message
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantJoin}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantJoin
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantLeave}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantLeave
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantInvite}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantInvite
 * @property {ChannelParticipant} participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantToggleBan}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantToggleBan
 * @property {ChannelParticipant} prev_participant
 * @property {ChannelParticipant} new_participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionParticipantToggleAdmin}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionParticipantToggleAdmin
 * @property {ChannelParticipant} prev_participant
 * @property {ChannelParticipant} new_participant
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionChangeStickerSet}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionChangeStickerSet
 * @property {InputStickerSet} prev_stickerset
 * @property {InputStickerSet} new_stickerset
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventActionTogglePreHistoryHidden}
 * @typedef {ChannelAdminLogEventAction} channelAdminLogEventActionTogglePreHistoryHidden
 * @property {Bool} new_value
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEvent}
 * @typedef {ChannelAdminLogEvent} channelAdminLogEvent
 * @property {long} id
 * @property {int} date
 * @property {int} user_id
 * @property {ChannelAdminLogEventAction} action
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channels.adminLogResults}
 * @typedef {channels.AdminLogResults} channels.adminLogResults
 * @property {Array.<ChannelAdminLogEvent>} events
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/channelAdminLogEventsFilter}
 * @typedef {ChannelAdminLogEventsFilter} channelAdminLogEventsFilter
 * @property {number} flags
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
 * @see {@link https://core.telegram.org/constructor/popularContact}
 * @typedef {PopularContact} popularContact
 * @property {long} client_id
 * @property {int} importers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.favedStickersNotModified}
 * @typedef {messages.FavedStickers} messages.favedStickersNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.favedStickers}
 * @typedef {messages.FavedStickers} messages.favedStickers
 * @property {int} hash
 * @property {Array.<StickerPack>} packs
 * @property {Array.<Document>} stickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlUnknown}
 * @typedef {RecentMeUrl} recentMeUrlUnknown
 * @property {string} url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlUser}
 * @typedef {RecentMeUrl} recentMeUrlUser
 * @property {string} url
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlChat}
 * @typedef {RecentMeUrl} recentMeUrlChat
 * @property {string} url
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlChatInvite}
 * @typedef {RecentMeUrl} recentMeUrlChatInvite
 * @property {string} url
 * @property {ChatInvite} chat_invite
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/recentMeUrlStickerSet}
 * @typedef {RecentMeUrl} recentMeUrlStickerSet
 * @property {string} url
 * @property {StickerSetCovered} set
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.recentMeUrls}
 * @typedef {help.RecentMeUrls} help.recentMeUrls
 * @property {Array.<RecentMeUrl>} urls
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSingleMedia}
 * @typedef {InputSingleMedia} inputSingleMedia
 * @property {number} flags
 * @property {InputMedia} media
 * @property {long} random_id
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/webAuthorization}
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
 * @see {@link https://core.telegram.org/constructor/account.webAuthorizations}
 * @typedef {account.WebAuthorizations} account.webAuthorizations
 * @property {Array.<WebAuthorization>} authorizations
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessageID}
 * @typedef {InputMessage} inputMessageID
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessageReplyTo}
 * @typedef {InputMessage} inputMessageReplyTo
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagePinned}
 * @typedef {InputMessage} inputMessagePinned
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDialogPeer}
 * @typedef {InputDialogPeer} inputDialogPeer
 * @property {InputPeer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dialogPeer}
 * @typedef {DialogPeer} dialogPeer
 * @property {Peer} peer
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.foundStickerSetsNotModified}
 * @typedef {messages.FoundStickerSets} messages.foundStickerSetsNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.foundStickerSets}
 * @typedef {messages.FoundStickerSets} messages.foundStickerSets
 * @property {int} hash
 * @property {Array.<StickerSetCovered>} sets
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/fileHash}
 * @typedef {FileHash} fileHash
 * @property {int} offset
 * @property {int} limit
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputClientProxy}
 * @typedef {InputClientProxy} inputClientProxy
 * @property {string} address
 * @property {int} port
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.proxyDataEmpty}
 * @typedef {help.ProxyData} help.proxyDataEmpty
 * @property {int} expires
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.proxyDataPromo}
 * @typedef {help.ProxyData} help.proxyDataPromo
 * @property {int} expires
 * @property {Peer} peer
 * @property {Array.<Chat>} chats
 * @property {Array.<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.termsOfServiceUpdateEmpty}
 * @typedef {help.TermsOfServiceUpdate} help.termsOfServiceUpdateEmpty
 * @property {int} expires
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.termsOfServiceUpdate}
 * @typedef {help.TermsOfServiceUpdate} help.termsOfServiceUpdate
 * @property {int} expires
 * @property {help.TermsOfService} terms_of_service
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureFileUploaded}
 * @typedef {InputSecureFile} inputSecureFileUploaded
 * @property {long} id
 * @property {int} parts
 * @property {string} md5_checksum
 * @property {bytes} file_hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureFile}
 * @typedef {InputSecureFile} inputSecureFile
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureFileEmpty}
 * @typedef {SecureFile} secureFileEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureFile}
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
 * @see {@link https://core.telegram.org/constructor/secureData}
 * @typedef {SecureData} secureData
 * @property {bytes} data
 * @property {bytes} data_hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePlainPhone}
 * @typedef {SecurePlainData} securePlainPhone
 * @property {string} phone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePlainEmail}
 * @typedef {SecurePlainData} securePlainEmail
 * @property {string} email
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePersonalDetails}
 * @typedef {SecureValueType} secureValueTypePersonalDetails
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePassport}
 * @typedef {SecureValueType} secureValueTypePassport
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeDriverLicense}
 * @typedef {SecureValueType} secureValueTypeDriverLicense
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeIdentityCard}
 * @typedef {SecureValueType} secureValueTypeIdentityCard
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeInternalPassport}
 * @typedef {SecureValueType} secureValueTypeInternalPassport
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeAddress}
 * @typedef {SecureValueType} secureValueTypeAddress
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeUtilityBill}
 * @typedef {SecureValueType} secureValueTypeUtilityBill
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeBankStatement}
 * @typedef {SecureValueType} secureValueTypeBankStatement
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeRentalAgreement}
 * @typedef {SecureValueType} secureValueTypeRentalAgreement
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePassportRegistration}
 * @typedef {SecureValueType} secureValueTypePassportRegistration
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeTemporaryRegistration}
 * @typedef {SecureValueType} secureValueTypeTemporaryRegistration
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypePhone}
 * @typedef {SecureValueType} secureValueTypePhone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueTypeEmail}
 * @typedef {SecureValueType} secureValueTypeEmail
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValue}
 * @typedef {SecureValue} secureValue
 * @property {number} flags
 * @property {SecureValueType} type
 * @property {SecureData} data
 * @property {SecureFile} front_side
 * @property {SecureFile} reverse_side
 * @property {SecureFile} selfie
 * @property {Array.<SecureFile>} translation
 * @property {Array.<SecureFile>} files
 * @property {SecurePlainData} plain_data
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputSecureValue}
 * @typedef {InputSecureValue} inputSecureValue
 * @property {number} flags
 * @property {SecureValueType} type
 * @property {SecureData} data
 * @property {InputSecureFile} front_side
 * @property {InputSecureFile} reverse_side
 * @property {InputSecureFile} selfie
 * @property {Array.<InputSecureFile>} translation
 * @property {Array.<InputSecureFile>} files
 * @property {SecurePlainData} plain_data
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueHash}
 * @typedef {SecureValueHash} secureValueHash
 * @property {SecureValueType} type
 * @property {bytes} hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorData}
 * @typedef {SecureValueError} secureValueErrorData
 * @property {SecureValueType} type
 * @property {bytes} data_hash
 * @property {string} field
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorFrontSide}
 * @typedef {SecureValueError} secureValueErrorFrontSide
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorReverseSide}
 * @typedef {SecureValueError} secureValueErrorReverseSide
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorSelfie}
 * @typedef {SecureValueError} secureValueErrorSelfie
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorFile}
 * @typedef {SecureValueError} secureValueErrorFile
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorFiles}
 * @typedef {SecureValueError} secureValueErrorFiles
 * @property {SecureValueType} type
 * @property {Array.<bytes>} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueError}
 * @typedef {SecureValueError} secureValueError
 * @property {SecureValueType} type
 * @property {bytes} hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorTranslationFile}
 * @typedef {SecureValueError} secureValueErrorTranslationFile
 * @property {SecureValueType} type
 * @property {bytes} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureValueErrorTranslationFiles}
 * @typedef {SecureValueError} secureValueErrorTranslationFiles
 * @property {SecureValueType} type
 * @property {Array.<bytes>} file_hash
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureCredentialsEncrypted}
 * @typedef {SecureCredentialsEncrypted} secureCredentialsEncrypted
 * @property {bytes} data
 * @property {bytes} hash
 * @property {bytes} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.authorizationForm}
 * @typedef {account.AuthorizationForm} account.authorizationForm
 * @property {number} flags
 * @property {Array.<SecureRequiredType>} required_types
 * @property {Array.<SecureValue>} values
 * @property {Array.<SecureValueError>} errors
 * @property {Array.<User>} users
 * @property {string} privacy_policy_url
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.sentEmailCode}
 * @typedef {account.SentEmailCode} account.sentEmailCode
 * @property {string} email_pattern
 * @property {int} length
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.deepLinkInfoEmpty}
 * @typedef {help.DeepLinkInfo} help.deepLinkInfoEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.deepLinkInfo}
 * @typedef {help.DeepLinkInfo} help.deepLinkInfo
 * @property {number} flags
 * @property {true} update_app
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/savedPhoneContact}
 * @typedef {SavedContact} savedPhoneContact
 * @property {string} phone
 * @property {string} first_name
 * @property {string} last_name
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.takeout}
 * @typedef {account.Takeout} account.takeout
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/passwordKdfAlgoUnknown}
 * @typedef {PasswordKdfAlgo} passwordKdfAlgoUnknown
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow}
 * @typedef {PasswordKdfAlgo} passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow
 * @property {bytes} salt1
 * @property {bytes} salt2
 * @property {int} g
 * @property {bytes} p
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePasswordKdfAlgoUnknown}
 * @typedef {SecurePasswordKdfAlgo} securePasswordKdfAlgoUnknown
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000}
 * @typedef {SecurePasswordKdfAlgo} securePasswordKdfAlgoPBKDF2HMACSHA512iter100000
 * @property {bytes} salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/securePasswordKdfAlgoSHA512}
 * @typedef {SecurePasswordKdfAlgo} securePasswordKdfAlgoSHA512
 * @property {bytes} salt
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureSecretSettings}
 * @typedef {SecureSecretSettings} secureSecretSettings
 * @property {SecurePasswordKdfAlgo} secure_algo
 * @property {bytes} secure_secret
 * @property {long} secure_secret_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputCheckPasswordEmpty}
 * @typedef {InputCheckPasswordSRP} inputCheckPasswordEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputCheckPasswordSRP}
 * @typedef {InputCheckPasswordSRP} inputCheckPasswordSRP
 * @property {long} srp_id
 * @property {bytes} A
 * @property {bytes} M1
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureRequiredType}
 * @typedef {SecureRequiredType} secureRequiredType
 * @property {number} flags
 * @property {true} native_names
 * @property {true} selfie_required
 * @property {true} translation_required
 * @property {SecureValueType} type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/secureRequiredTypeOneOf}
 * @typedef {SecureRequiredType} secureRequiredTypeOneOf
 * @property {Array.<SecureRequiredType>} types
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.passportConfigNotModified}
 * @typedef {help.PassportConfig} help.passportConfigNotModified
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.passportConfig}
 * @typedef {help.PassportConfig} help.passportConfig
 * @property {int} hash
 * @property {DataJSON} countries_langs
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageTableCell}
 * @typedef {PageTableCell} pageTableCell
 * @property {number} flags
 * @property {true} header
 * @property {true} align_center
 * @property {true} align_right
 * @property {true} valign_middle
 * @property {true} valign_bottom
 * @property {RichText} text
 * @property {int} colspan
 * @property {int} rowspan
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageTableRow}
 * @typedef {PageTableRow} pageTableRow
 * @property {Array.<PageTableCell>} cells
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageCaption}
 * @typedef {PageCaption} pageCaption
 * @property {RichText} text
 * @property {RichText} credit
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListItemText}
 * @typedef {PageListItem} pageListItemText
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListItemBlocks}
 * @typedef {PageListItem} pageListItemBlocks
 * @property {Array.<PageBlock>} blocks
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListOrderedItemText}
 * @typedef {PageListOrderedItem} pageListOrderedItemText
 * @property {string} num
 * @property {RichText} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageListOrderedItemBlocks}
 * @typedef {PageListOrderedItem} pageListOrderedItemBlocks
 * @property {string} num
 * @property {Array.<PageBlock>} blocks
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/pageRelatedArticle}
 * @typedef {PageRelatedArticle} pageRelatedArticle
 * @property {number} flags
 * @property {string} url
 * @property {long} webpage_id
 * @property {string} title
 * @property {string} description
 * @property {long} photo_id
 * @property {string} author
 * @property {int} published_date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/page}
 * @typedef {Page} page
 * @property {number} flags
 * @property {true} part
 * @property {true} rtl
 * @property {string} url
 * @property {Array.<PageBlock>} blocks
 * @property {Array.<Photo>} photos
 * @property {Array.<Document>} documents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.supportName}
 * @typedef {help.SupportName} help.supportName
 * @property {string} name
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.userInfoEmpty}
 * @typedef {help.UserInfo} help.userInfoEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/help.userInfo}
 * @typedef {help.UserInfo} help.userInfo
 * @property {string} message
 * @property {Array.<MessageEntity>} entities
 * @property {string} author
 * @property {int} date
 */