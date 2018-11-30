
/**
 *
 * @see {@link https://core.telegram.org/constructor/int}
 * @typedef {number} int
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/double}
 * @typedef {number} double
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/log}
 * @typedef {number} log
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
 * @see {@link https://core.telegram.org/constructor/vector}
 * @typedef {Vector t} vector
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
 * @see {@link https://core.telegram.org/constructor/inputPeerContact}
 * @typedef {InputPeer} inputPeerContact
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerForeign}
 * @typedef {InputPeer} inputPeerForeign
 * @property {int} user_id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerChat}
 * @typedef {InputPeer} inputPeerChat
 * @property {int} chat_id
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
 * @see {@link https://core.telegram.org/constructor/inputUserContact}
 * @typedef {InputUser} inputUserContact
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputUserForeign}
 * @typedef {InputUser} inputUserForeign
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
 * @see {@link https://core.telegram.org/constructor/inputMediaEmpty}
 * @typedef {InputMedia} inputMediaEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedPhoto}
 * @typedef {InputMedia} inputMediaUploadedPhoto
 * @property {InputFile} file
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaPhoto}
 * @typedef {InputMedia} inputMediaPhoto
 * @property {InputPhoto} id
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
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedVideo}
 * @typedef {InputMedia} inputMediaUploadedVideo
 * @property {InputFile} file
 * @property {int} duration
 * @property {int} w
 * @property {int} h
 * @property {string} mime_type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedThumbVideo}
 * @typedef {InputMedia} inputMediaUploadedThumbVideo
 * @property {InputFile} file
 * @property {InputFile} thumb
 * @property {int} duration
 * @property {int} w
 * @property {int} h
 * @property {string} mime_type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaVideo}
 * @typedef {InputMedia} inputMediaVideo
 * @property {InputVideo} id
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
 * @property {InputPhotoCrop} crop
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputChatPhoto}
 * @typedef {InputChatPhoto} inputChatPhoto
 * @property {InputPhoto} id
 * @property {InputPhotoCrop} crop
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
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputVideoEmpty}
 * @typedef {InputVideo} inputVideoEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputVideo}
 * @typedef {InputVideo} inputVideo
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputFileLocation}
 * @typedef {InputFileLocation} inputFileLocation
 * @property {long} volume_id
 * @property {int} local_id
 * @property {long} secret
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputVideoFileLocation}
 * @typedef {InputFileLocation} inputVideoFileLocation
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhotoCropAuto}
 * @typedef {InputPhotoCrop} inputPhotoCropAuto
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPhotoCrop}
 * @typedef {InputPhotoCrop} inputPhotoCrop
 * @property {double} crop_left
 * @property {double} crop_top
 * @property {double} crop_width
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
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userEmpty}
 * @typedef {User} userEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userSelf}
 * @typedef {User} userSelf
 * @property {int} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 * @property {string} phone
 * @property {UserProfilePhoto} photo
 * @property {UserStatus} status
 * @property {Bool} inactive
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userContact}
 * @typedef {User} userContact
 * @property {int} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 * @property {long} access_hash
 * @property {string} phone
 * @property {UserProfilePhoto} photo
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userRequest}
 * @typedef {User} userRequest
 * @property {int} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 * @property {long} access_hash
 * @property {string} phone
 * @property {UserProfilePhoto} photo
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userForeign}
 * @typedef {User} userForeign
 * @property {int} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
 * @property {long} access_hash
 * @property {UserProfilePhoto} photo
 * @property {UserStatus} status
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userDeleted}
 * @typedef {User} userDeleted
 * @property {int} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} username
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
 * @see {@link https://core.telegram.org/constructor/chatEmpty}
 * @typedef {Chat} chatEmpty
 * @property {int} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chat}
 * @typedef {Chat} chat
 * @property {int} id
 * @property {string} title
 * @property {ChatPhoto} photo
 * @property {int} participants_count
 * @property {int} date
 * @property {Bool} left
 * @property {int} version
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatForbidden}
 * @typedef {Chat} chatForbidden
 * @property {int} id
 * @property {string} title
 * @property {int} date
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatFull}
 * @typedef {ChatFull} chatFull
 * @property {int} id
 * @property {ChatParticipants} participants
 * @property {Photo} chat_photo
 * @property {PeerNotifySettings} notify_settings
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
 * @see {@link https://core.telegram.org/constructor/chatParticipantsForbidden}
 * @typedef {ChatParticipants} chatParticipantsForbidden
 * @property {int} chat_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/chatParticipants}
 * @typedef {ChatParticipants} chatParticipants
 * @property {int} chat_id
 * @property {int} admin_id
 * @property {Vector<ChatParticipant>} participants
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
 * @property {int} flags
 * @property {int} id
 * @property {int} from_id
 * @property {Peer} to_id
 * @property {int} date
 * @property {string} message
 * @property {MessageMedia} media
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageForwarded}
 * @typedef {Message} messageForwarded
 * @property {int} flags
 * @property {int} id
 * @property {int} fwd_from_id
 * @property {int} fwd_date
 * @property {int} from_id
 * @property {Peer} to_id
 * @property {int} date
 * @property {string} message
 * @property {MessageMedia} media
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageService}
 * @typedef {Message} messageService
 * @property {int} flags
 * @property {int} id
 * @property {int} from_id
 * @property {Peer} to_id
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
 * @property {Photo} photo
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaVideo}
 * @typedef {MessageMedia} messageMediaVideo
 * @property {Video} video
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
 * @property {int} user_id
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
 * @property {Vector<int>} users
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
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageActionChatDeleteUser}
 * @typedef {MessageAction} messageActionChatDeleteUser
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/dialog}
 * @typedef {Dialog} dialog
 * @property {Peer} peer
 * @property {int} top_message
 * @property {int} unread_count
 * @property {PeerNotifySettings} notify_settings
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
 * @property {long} id
 * @property {long} access_hash
 * @property {int} user_id
 * @property {int} date
 * @property {string} caption
 * @property {GeoPoint} geo
 * @property {Vector<PhotoSize>} sizes
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
 * @see {@link https://core.telegram.org/constructor/videoEmpty}
 * @typedef {Video} videoEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/video}
 * @typedef {Video} video
 * @property {long} id
 * @property {long} access_hash
 * @property {int} user_id
 * @property {int} date
 * @property {string} caption
 * @property {int} duration
 * @property {string} mime_type
 * @property {int} size
 * @property {PhotoSize} thumb
 * @property {int} dc_id
 * @property {int} w
 * @property {int} h
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
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.checkedPhone}
 * @typedef {auth.CheckedPhone} auth.checkedPhone
 * @property {Bool} phone_registered
 * @property {Bool} phone_invited
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.sentCode}
 * @typedef {auth.SentCode} auth.sentCode
 * @property {Bool} phone_registered
 * @property {string} phone_code_hash
 * @property {int} send_call_timeout
 * @property {Bool} is_password
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/auth.authorization}
 * @typedef {auth.Authorization} auth.authorization
 * @property {int} expires
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
 * @see {@link https://core.telegram.org/constructor/inputNotifyAll}
 * @typedef {InputNotifyPeer} inputNotifyAll
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerNotifyEventsEmpty}
 * @typedef {InputPeerNotifyEvents} inputPeerNotifyEventsEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerNotifyEventsAll}
 * @typedef {InputPeerNotifyEvents} inputPeerNotifyEventsAll
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPeerNotifySettings}
 * @typedef {InputPeerNotifySettings} inputPeerNotifySettings
 * @property {int} mute_until
 * @property {string} sound
 * @property {Bool} show_previews
 * @property {int} events_mask
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerNotifyEventsEmpty}
 * @typedef {PeerNotifyEvents} peerNotifyEventsEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerNotifyEventsAll}
 * @typedef {PeerNotifyEvents} peerNotifyEventsAll
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerNotifySettings}
 * @typedef {PeerNotifySettings} peerNotifySettings
 * @property {int} mute_until
 * @property {string} sound
 * @property {Bool} show_previews
 * @property {int} events_mask
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/peerSettings}
 * @typedef {PeerSettings} peerSettings
 * @property {#} flags
 * @property {flags.0?true} report_spam
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/wallPaper}
 * @typedef {WallPaper} wallPaper
 * @property {int} id
 * @property {string} title
 * @property {Vector<PhotoSize>} sizes
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
 * @see {@link https://core.telegram.org/constructor/inputReportReasonChildAbuse}
 * @typedef {ReportReason} inputReportReasonChildAbuse
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputReportReasonOther}
 * @typedef {ReportReason} inputReportReasonOther
 * @property {string} text
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/userFull}
 * @typedef {UserFull} userFull
 * @property {User} user
 * @property {contacts.Link} link
 * @property {Photo} profile_photo
 * @property {PeerNotifySettings} notify_settings
 * @property {Bool} blocked
 * @property {string} real_first_name
 * @property {string} real_last_name
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
 * @see {@link https://core.telegram.org/constructor/contacts.foreignLinkUnknown}
 * @typedef {contacts.ForeignLink} contacts.foreignLinkUnknown
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.foreignLinkRequested}
 * @typedef {contacts.ForeignLink} contacts.foreignLinkRequested
 * @property {Bool} has_phone
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.foreignLinkMutual}
 * @typedef {contacts.ForeignLink} contacts.foreignLinkMutual
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.myLinkEmpty}
 * @typedef {contacts.MyLink} contacts.myLinkEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.myLinkRequested}
 * @typedef {contacts.MyLink} contacts.myLinkRequested
 * @property {Bool} contact
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.myLinkContact}
 * @typedef {contacts.MyLink} contacts.myLinkContact
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.link}
 * @typedef {contacts.Link} contacts.link
 * @property {contacts.MyLink} my_link
 * @property {contacts.ForeignLink} foreign_link
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
 * @property {Vector<Contact>} contacts
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.importedContacts}
 * @typedef {contacts.ImportedContacts} contacts.importedContacts
 * @property {Vector<ImportedContact>} imported
 * @property {Vector<long>} retry_contacts
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.blocked}
 * @typedef {contacts.Blocked} contacts.blocked
 * @property {Vector<ContactBlocked>} blocked
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.blockedSlice}
 * @typedef {contacts.Blocked} contacts.blockedSlice
 * @property {int} count
 * @property {Vector<ContactBlocked>} blocked
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogs}
 * @typedef {messages.Dialogs} messages.dialogs
 * @property {Vector<Dialog>} dialogs
 * @property {Vector<Message>} messages
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.dialogsSlice}
 * @typedef {messages.Dialogs} messages.dialogsSlice
 * @property {int} count
 * @property {Vector<Dialog>} dialogs
 * @property {Vector<Message>} messages
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messages}
 * @typedef {messages.Messages} messages.messages
 * @property {Vector<Message>} messages
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.messagesSlice}
 * @typedef {messages.Messages} messages.messagesSlice
 * @property {int} count
 * @property {Vector<Message>} messages
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.statedMessages}
 * @typedef {messages.StatedMessages} messages.statedMessages
 * @property {Vector<Message>} messages
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 * @property {int} pts
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.statedMessage}
 * @typedef {messages.StatedMessage} messages.statedMessage
 * @property {Message} message
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 * @property {int} pts
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.sentMessage}
 * @typedef {messages.SentMessage} messages.sentMessage
 * @property {int} id
 * @property {int} date
 * @property {int} pts
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chats}
 * @typedef {messages.Chats} messages.chats
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.chatFull}
 * @typedef {messages.ChatFull} messages.chatFull
 * @property {ChatFull} full_chat
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.affectedHistory}
 * @typedef {messages.AffectedHistory} messages.affectedHistory
 * @property {int} pts
 * @property {int} seq
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
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterAudio}
 * @typedef {MessagesFilter} inputMessagesFilterAudio
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMessagesFilterAudioDocuments}
 * @typedef {MessagesFilter} inputMessagesFilterAudioDocuments
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
 * @see {@link https://core.telegram.org/constructor/updateNewMessage}
 * @typedef {Update} updateNewMessage
 * @property {Message} message
 * @property {int} pts
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
 * @see {@link https://core.telegram.org/constructor/updateReadMessages}
 * @typedef {Update} updateReadMessages
 * @property {Vector<int>} messages
 * @property {int} pts
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateDeleteMessages}
 * @typedef {Update} updateDeleteMessages
 * @property {Vector<int>} messages
 * @property {int} pts
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
 * @property {contacts.MyLink} my_link
 * @property {contacts.ForeignLink} foreign_link
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateNewAuthorization}
 * @typedef {Update} updateNewAuthorization
 * @property {long} auth_key_id
 * @property {int} date
 * @property {string} device
 * @property {string} location
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
 * @property {Vector<Message>} new_messages
 * @property {Vector<EncryptedMessage>} new_encrypted_messages
 * @property {Vector<Update>} other_updates
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 * @property {updates.State} state
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates.differenceSlice}
 * @typedef {updates.Difference} updates.differenceSlice
 * @property {Vector<Message>} new_messages
 * @property {Vector<EncryptedMessage>} new_encrypted_messages
 * @property {Vector<Update>} other_updates
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 * @property {updates.State} intermediate_state
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
 * @property {int} id
 * @property {int} from_id
 * @property {string} message
 * @property {int} pts
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateShortChatMessage}
 * @typedef {Updates} updateShortChatMessage
 * @property {int} id
 * @property {int} from_id
 * @property {int} chat_id
 * @property {string} message
 * @property {int} pts
 * @property {int} date
 * @property {int} seq
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
 * @property {Vector<Update>} updates
 * @property {Vector<User>} users
 * @property {Vector<Chat>} chats
 * @property {int} date
 * @property {int} seq_start
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updates}
 * @typedef {Updates} updates
 * @property {Vector<Update>} updates
 * @property {Vector<User>} users
 * @property {Vector<Chat>} chats
 * @property {int} date
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photos}
 * @typedef {photos.Photos} photos.photos
 * @property {Vector<Photo>} photos
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photosSlice}
 * @typedef {photos.Photos} photos.photosSlice
 * @property {int} count
 * @property {Vector<Photo>} photos
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/photos.photo}
 * @typedef {photos.Photo} photos.photo
 * @property {Photo} photo
 * @property {Vector<User>} users
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
 * @see {@link https://core.telegram.org/constructor/dcOption}
 * @typedef {DcOption} dcOption
 * @property {int} id
 * @property {string} hostname
 * @property {string} ip_address
 * @property {int} port
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/config}
 * @typedef {Config} config
 * @property {int} date
 * @property {int} expires
 * @property {Bool} test_mode
 * @property {int} this_dc
 * @property {Vector<DcOption>} dc_options
 * @property {int} chat_big_size
 * @property {int} chat_size_max
 * @property {int} broadcast_size_max
 * @property {Vector<DisabledFeature>} disabled_features
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
 * @property {int} id
 * @property {Bool} critical
 * @property {string} url
 * @property {string} text
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
 * @see {@link https://core.telegram.org/constructor/messages.statedMessagesLinks}
 * @typedef {messages.StatedMessages} messages.statedMessagesLinks
 * @property {Vector<Message>} messages
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 * @property {Vector<contacts.Link>} links
 * @property {int} pts
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.statedMessageLink}
 * @typedef {messages.StatedMessage} messages.statedMessageLink
 * @property {Message} message
 * @property {Vector<Chat>} chats
 * @property {Vector<User>} users
 * @property {Vector<contacts.Link>} links
 * @property {int} pts
 * @property {int} seq
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messages.sentMessageLink}
 * @typedef {messages.SentMessage} messages.sentMessageLink
 * @property {int} id
 * @property {int} date
 * @property {int} pts
 * @property {int} seq
 * @property {Vector<contacts.Link>} links
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
 * @see {@link https://core.telegram.org/constructor/inputEncryptedFileLocation}
 * @typedef {InputFileLocation} inputEncryptedFileLocation
 * @property {long} id
 * @property {long} access_hash
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
 * @see {@link https://core.telegram.org/constructor/inputFileBig}
 * @typedef {InputFile} inputFileBig
 * @property {long} id
 * @property {int} parts
 * @property {string} name
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
 * @see {@link https://core.telegram.org/constructor/updateChatParticipantAdd}
 * @typedef {Update} updateChatParticipantAdd
 * @property {int} chat_id
 * @property {int} user_id
 * @property {int} inviter_id
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
 * @property {Vector<DcOption>} dc_options
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedAudio}
 * @typedef {InputMedia} inputMediaUploadedAudio
 * @property {InputFile} file
 * @property {int} duration
 * @property {string} mime_type
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaAudio}
 * @typedef {InputMedia} inputMediaAudio
 * @property {InputAudio} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedDocument}
 * @typedef {InputMedia} inputMediaUploadedDocument
 * @property {InputFile} file
 * @property {string} mime_type
 * @property {Vector<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaUploadedThumbDocument}
 * @typedef {InputMedia} inputMediaUploadedThumbDocument
 * @property {InputFile} file
 * @property {InputFile} thumb
 * @property {string} mime_type
 * @property {Vector<DocumentAttribute>} attributes
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputMediaDocument}
 * @typedef {InputMedia} inputMediaDocument
 * @property {InputDocument} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaDocument}
 * @typedef {MessageMedia} messageMediaDocument
 * @property {Document} document
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/messageMediaAudio}
 * @typedef {MessageMedia} messageMediaAudio
 * @property {Audio} audio
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputAudioEmpty}
 * @typedef {InputAudio} inputAudioEmpty
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputAudio}
 * @typedef {InputAudio} inputAudio
 * @property {long} id
 * @property {long} access_hash
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
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputAudioFileLocation}
 * @typedef {InputFileLocation} inputAudioFileLocation
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputDocumentFileLocation}
 * @typedef {InputFileLocation} inputDocumentFileLocation
 * @property {long} id
 * @property {long} access_hash
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/audioEmpty}
 * @typedef {Audio} audioEmpty
 * @property {long} id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/audio}
 * @typedef {Audio} audio
 * @property {long} id
 * @property {long} access_hash
 * @property {int} user_id
 * @property {int} date
 * @property {int} duration
 * @property {string} mime_type
 * @property {int} size
 * @property {int} dc_id
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
 * @property {int} date
 * @property {string} mime_type
 * @property {int} size
 * @property {PhotoSize} thumb
 * @property {int} dc_id
 * @property {Vector<DocumentAttribute>} attributes
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
 * @see {@link https://core.telegram.org/constructor/notifyAll}
 * @typedef {NotifyPeer} notifyAll
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
 * @see {@link https://core.telegram.org/constructor/auth.sentAppCode}
 * @typedef {auth.SentCode} auth.sentAppCode
 * @property {Bool} phone_registered
 * @property {string} phone_code_hash
 * @property {int} send_call_timeout
 * @property {Bool} is_password
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
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadPhotoAction}
 * @typedef {SendMessageAction} sendMessageUploadPhotoAction
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/sendMessageUploadDocumentAction}
 * @typedef {SendMessageAction} sendMessageUploadDocumentAction
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
 * @see {@link https://core.telegram.org/constructor/contactFound}
 * @typedef {ContactFound} contactFound
 * @property {int} user_id
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/contacts.found}
 * @typedef {contacts.Found} contacts.found
 * @property {Vector<ContactFound>} results
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/updateServiceNotification}
 * @typedef {Update} updateServiceNotification
 * @property {string} type
 * @property {string} message
 * @property {MessageMedia} media
 * @property {Bool} popup
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
 * @see {@link https://core.telegram.org/constructor/updatePrivacy}
 * @typedef {Update} updatePrivacy
 * @property {PrivacyKey} key
 * @property {Vector<PrivacyRule>} rules
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/inputPrivacyKeyStatusTimestamp}
 * @typedef {InputPrivacyKey} inputPrivacyKeyStatusTimestamp
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/privacyKeyStatusTimestamp}
 * @typedef {PrivacyKey} privacyKeyStatusTimestamp
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
 * @property {Vector<InputUser>} users
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
 * @property {Vector<InputUser>} users
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
 * @property {Vector<int>} users
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
 * @property {Vector<int>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.privacyRules}
 * @typedef {account.PrivacyRules} account.privacyRules
 * @property {Vector<PrivacyRule>} rules
 * @property {Vector<User>} users
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/accountDaysTTL}
 * @typedef {AccountDaysTTL} accountDaysTTL
 * @property {int} days
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/account.sentChangePhoneCode}
 * @typedef {account.SentChangePhoneCode} account.sentChangePhoneCode
 * @property {string} phone_code_hash
 * @property {int} send_call_timeout
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
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeVideo}
 * @typedef {DocumentAttribute} documentAttributeVideo
 * @property {int} duration
 * @property {int} w
 * @property {int} h
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeAudio}
 * @typedef {DocumentAttribute} documentAttributeAudio
 * @property {int} duration
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/documentAttributeFilename}
 * @typedef {DocumentAttribute} documentAttributeFilename
 * @property {string} file_name
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
 * @property {string} hash
 * @property {Vector<Document>} stickers
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/stickerPack}
 * @typedef {StickerPack} stickerPack
 * @property {string} emoticon
 * @property {Vector<long>} documents
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
 * @property {string} hash
 * @property {Vector<StickerPack>} packs
 * @property {Vector<Document>} documents
 */

/**
 *
 * @see {@link https://core.telegram.org/constructor/disabledFeature}
 * @typedef {DisabledFeature} disabledFeature
 * @property {string} feature
 * @property {string} description
 */