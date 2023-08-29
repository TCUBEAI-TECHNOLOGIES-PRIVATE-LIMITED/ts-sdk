import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DEVICE_TYPE, Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving users
 *
 * @generated from enum tcube.USER_SORT_KEY
 */
export declare enum USER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: USER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    USER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: USER_SORT_KEY_CREATED_AT = 1;
     */
    USER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: USER_SORT_KEY_MODIFIED_AT = 2;
     */
    USER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by first name
     *
     * @generated from enum value: USER_SORT_KEY_FIRST_NAME = 10;
     */
    USER_SORT_KEY_FIRST_NAME = 10,
    /**
     * Fetch ordered results by last name
     *
     * @generated from enum value: USER_SORT_KEY_LAST_NAME = 11;
     */
    USER_SORT_KEY_LAST_NAME = 11,
    /**
     * Fetch ordered results by username
     *
     * @generated from enum value: USER_SORT_KEY_USERNAME = 12;
     */
    USER_SORT_KEY_USERNAME = 12
}
/**
 *
 * Describes the necessary data structure during creation of a user
 *
 * @generated from message tcube.UsersServiceCreateRequest
 */
export declare class UsersServiceCreateRequest extends Message<UsersServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The first name of the user
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The last name of the user
     *
     * @generated from field: string last_name = 11;
     */
    lastName: string;
    /**
     * Username of the user
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The email address of the user
     *
     * @generated from field: string email = 13;
     */
    email: string;
    /**
     * The phone number of the user
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 15;
     */
    address: string;
    /**
     * Optional UUID of the entity (if present, then a corresponding entity user is also created)
     *
     * @generated from field: string entity_uuid = 30;
     */
    entityUuid: string;
    /**
     * Optional UUID of the associated role (if present, then the corresponding entity user is created with the given role UUID)
     *
     * @generated from field: string role_uuid = 31;
     */
    roleUuid: string;
    constructor(data?: PartialMessage<UsersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceCreateRequest;
    static equals(a: UsersServiceCreateRequest | PlainMessage<UsersServiceCreateRequest> | undefined, b: UsersServiceCreateRequest | PlainMessage<UsersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a user
 *
 * @generated from message tcube.UsersServiceUpdateRequest
 */
export declare class UsersServiceUpdateRequest extends Message<UsersServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the user that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * The first name of the user
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The last name of the user
     *
     * // Username of the user
     * string username = 12 [(validate.rules).string = {
     *     min_bytes: 1,
     *     max_bytes: 40,
     * }];
     *
     * @generated from field: string last_name = 11;
     */
    lastName: string;
    /**
     * The email address of the user
     *
     * @generated from field: string email = 13;
     */
    email: string;
    /**
     * The phone number of the user
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 15;
     */
    address: string;
    /**
     * Optional UUID of the entity (if present, then corresponding entity user is also updated)
     *
     * @generated from field: string entity_uuid = 30;
     */
    entityUuid: string;
    /**
     * Optional UUID of the associated role (if present, then the corresponding entity user is updated with the given role UUID)
     *
     * @generated from field: string role_uuid = 31;
     */
    roleUuid: string;
    constructor(data?: PartialMessage<UsersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceUpdateRequest;
    static equals(a: UsersServiceUpdateRequest | PlainMessage<UsersServiceUpdateRequest> | undefined, b: UsersServiceUpdateRequest | PlainMessage<UsersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to update a user's password
 *
 * @generated from message tcube.UsersServiceUpdatePasswordRequest
 */
export declare class UsersServiceUpdatePasswordRequest extends Message<UsersServiceUpdatePasswordRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the user that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * The old login password
     *
     * @generated from field: string old_plain_text_password = 3;
     */
    oldPlainTextPassword: string;
    /**
     * The new password
     *
     * @generated from field: string plain_text_password = 4;
     */
    plainTextPassword: string;
    constructor(data?: PartialMessage<UsersServiceUpdatePasswordRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServiceUpdatePasswordRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceUpdatePasswordRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceUpdatePasswordRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceUpdatePasswordRequest;
    static equals(a: UsersServiceUpdatePasswordRequest | PlainMessage<UsersServiceUpdatePasswordRequest> | undefined, b: UsersServiceUpdatePasswordRequest | PlainMessage<UsersServiceUpdatePasswordRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to reset a user's password
 *
 * @generated from message tcube.UsersServiceResetPasswordRequest
 */
export declare class UsersServiceResetPasswordRequest extends Message<UsersServiceResetPasswordRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Username of the user
     *
     * @generated from field: string username = 2;
     */
    username: string;
    constructor(data?: PartialMessage<UsersServiceResetPasswordRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServiceResetPasswordRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceResetPasswordRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceResetPasswordRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceResetPasswordRequest;
    static equals(a: UsersServiceResetPasswordRequest | PlainMessage<UsersServiceResetPasswordRequest> | undefined, b: UsersServiceResetPasswordRequest | PlainMessage<UsersServiceResetPasswordRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to register a device against a user to send push notifications
 *
 * @generated from message tcube.UsersServiceRegisterUserDeviceRequest
 */
export declare class UsersServiceRegisterUserDeviceRequest extends Message<UsersServiceRegisterUserDeviceRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the user that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * The device type
     *
     * @generated from field: tcube.DEVICE_TYPE device_type = 10;
     */
    deviceType: DEVICE_TYPE;
    /**
     * The ID of the device
     *
     * @generated from field: string device_id = 11;
     */
    deviceId: string;
    constructor(data?: PartialMessage<UsersServiceRegisterUserDeviceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServiceRegisterUserDeviceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceRegisterUserDeviceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceRegisterUserDeviceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceRegisterUserDeviceRequest;
    static equals(a: UsersServiceRegisterUserDeviceRequest | PlainMessage<UsersServiceRegisterUserDeviceRequest> | undefined, b: UsersServiceRegisterUserDeviceRequest | PlainMessage<UsersServiceRegisterUserDeviceRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each user on the platform
 *
 * @generated from message tcube.User
 */
export declare class User extends Message<User> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The first name of the user
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     * The last name of the user
     *
     * @generated from field: string last_name = 11;
     */
    lastName: string;
    /**
     * Username of the user
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The email address of the user
     *
     * @generated from field: string email = 13;
     */
    email: string;
    /**
     * The phone number of the user
     *
     * @generated from field: string phone = 14;
     */
    phone: string;
    /**
     * The address of the user
     *
     * @generated from field: string address = 15;
     */
    address: string;
    constructor(data?: PartialMessage<User>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.User";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
    static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of users
 *
 * @generated from message tcube.UsersList
 */
export declare class UsersList extends Message<UsersList> {
    /**
     * List of users
     *
     * @generated from field: repeated tcube.User list = 1;
     */
    list: User[];
    constructor(data?: PartialMessage<UsersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersList;
    static equals(a: UsersList | PlainMessage<UsersList> | undefined, b: UsersList | PlainMessage<UsersList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.UsersServicePaginationReq
 */
export declare class UsersServicePaginationReq extends Message<UsersServicePaginationReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
    constructor(data?: PartialMessage<UsersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServicePaginationReq;
    static equals(a: UsersServicePaginationReq | PlainMessage<UsersServicePaginationReq> | undefined, b: UsersServicePaginationReq | PlainMessage<UsersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.UserPaginationResp
 */
export declare class UserPaginationResp extends Message<UserPaginationResp> {
    /**
     * The number of records in this payload
     *
     * @generated from field: int64 count = 1;
     */
    count: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: int64 total = 2;
     */
    total: bigint;
    /**
     * The list of records
     *
     * @generated from field: repeated tcube.User payload = 3;
     */
    payload: User[];
    constructor(data?: PartialMessage<UserPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UserPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserPaginationResp;
    static equals(a: UserPaginationResp | PlainMessage<UserPaginationResp> | undefined, b: UserPaginationResp | PlainMessage<UserPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.UsersServiceFilterReq
 */
export declare class UsersServiceFilterReq extends Message<UsersServiceFilterReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: int64 creation_timestamp_start = 6;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: int64 creation_timestamp_end = 7;
     */
    creationTimestampEnd: bigint;
    /**
     * The first name of the user
     *
     * @generated from field: string first_name = 20;
     */
    firstName: string;
    /**
     * The last name of the user
     *
     * @generated from field: string last_name = 21;
     */
    lastName: string;
    /**
     * Username of the user
     *
     * @generated from field: string username = 22;
     */
    username: string;
    /**
     * The email address of the user
     *
     * @generated from field: string email = 23;
     */
    email: string;
    /**
     * The phone number of the user
     *
     * @generated from field: string phone = 24;
     */
    phone: string;
    constructor(data?: PartialMessage<UsersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceFilterReq;
    static equals(a: UsersServiceFilterReq | PlainMessage<UsersServiceFilterReq> | undefined, b: UsersServiceFilterReq | PlainMessage<UsersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.UsersServiceSearchAllReq
 */
export declare class UsersServiceSearchAllReq extends Message<UsersServiceSearchAllReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.USER_SORT_KEY sort_key = 5;
     */
    sortKey: USER_SORT_KEY;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<UsersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.UsersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UsersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UsersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UsersServiceSearchAllReq;
    static equals(a: UsersServiceSearchAllReq | PlainMessage<UsersServiceSearchAllReq> | undefined, b: UsersServiceSearchAllReq | PlainMessage<UsersServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=users_pb.d.ts.map