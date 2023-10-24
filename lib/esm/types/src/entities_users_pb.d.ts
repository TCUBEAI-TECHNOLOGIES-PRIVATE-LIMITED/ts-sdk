import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving entities users
 *
 * @generated from enum scanswift.ENTITY_USER_SORT_KEY
 */
export declare enum ENTITY_USER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ENTITY_USER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ENTITY_USER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ENTITY_USER_SORT_KEY_CREATED_AT = 1;
     */
    ENTITY_USER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ENTITY_USER_SORT_KEY_MODIFIED_AT = 2;
     */
    ENTITY_USER_SORT_KEY_MODIFIED_AT = 2
}
/**
 *
 * Describes the necessary data structure during creation of an entity user
 *
 * @generated from message scanswift.EntitiesUsersServiceCreateRequest
 */
export declare class EntitiesUsersServiceCreateRequest extends Message<EntitiesUsersServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 2;
     */
    entityUuid: string;
    /**
     * UUID of the user registered as the entity user
     *
     * @generated from field: string user_uuid = 10;
     */
    userUuid: string;
    /**
     * UUID of the associated role
     *
     * @generated from field: string role_uuid = 11;
     */
    roleUuid: string;
    constructor(data?: PartialMessage<EntitiesUsersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntitiesUsersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceCreateRequest;
    static equals(a: EntitiesUsersServiceCreateRequest | PlainMessage<EntitiesUsersServiceCreateRequest> | undefined, b: EntitiesUsersServiceCreateRequest | PlainMessage<EntitiesUsersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on an entity user
 *
 * @generated from message scanswift.EntitiesUsersServiceUpdateRequest
 */
export declare class EntitiesUsersServiceUpdateRequest extends Message<EntitiesUsersServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the resource that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * UUID of the associated role
     *
     * @generated from field: string role_uuid = 11;
     */
    roleUuid: string;
    constructor(data?: PartialMessage<EntitiesUsersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntitiesUsersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceUpdateRequest;
    static equals(a: EntitiesUsersServiceUpdateRequest | PlainMessage<EntitiesUsersServiceUpdateRequest> | undefined, b: EntitiesUsersServiceUpdateRequest | PlainMessage<EntitiesUsersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each entity user on the platform
 *
 * @generated from message scanswift.EntityUser
 */
export declare class EntityUser extends Message<EntityUser> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: scanswift.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 2;
     */
    entityUuid: string;
    /**
     * UUID of the user registered as the entity user
     *
     * @generated from field: string user_uuid = 10;
     */
    userUuid: string;
    /**
     * UUID of the associated role
     *
     * @generated from field: string role_uuid = 11;
     */
    roleUuid: string;
    constructor(data?: PartialMessage<EntityUser>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntityUser";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityUser;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityUser;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityUser;
    static equals(a: EntityUser | PlainMessage<EntityUser> | undefined, b: EntityUser | PlainMessage<EntityUser> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of entities users
 *
 * @generated from message scanswift.EntitiesUsersList
 */
export declare class EntitiesUsersList extends Message<EntitiesUsersList> {
    /**
     * List of entities users
     *
     * @generated from field: repeated scanswift.EntityUser list = 1;
     */
    list: EntityUser[];
    constructor(data?: PartialMessage<EntitiesUsersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntitiesUsersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersList;
    static equals(a: EntitiesUsersList | PlainMessage<EntitiesUsersList> | undefined, b: EntitiesUsersList | PlainMessage<EntitiesUsersList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.EntitiesUsersServicePaginationReq
 */
export declare class EntitiesUsersServicePaginationReq extends Message<EntitiesUsersServicePaginationReq> {
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
     * @generated from field: scanswift.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: scanswift.ENTITY_USER_SORT_KEY sort_key = 5;
     */
    sortKey: ENTITY_USER_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<EntitiesUsersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntitiesUsersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServicePaginationReq;
    static equals(a: EntitiesUsersServicePaginationReq | PlainMessage<EntitiesUsersServicePaginationReq> | undefined, b: EntitiesUsersServicePaginationReq | PlainMessage<EntitiesUsersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.EntityUserPaginationResp
 */
export declare class EntityUserPaginationResp extends Message<EntityUserPaginationResp> {
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
     * @generated from field: repeated scanswift.EntityUser payload = 3;
     */
    payload: EntityUser[];
    constructor(data?: PartialMessage<EntityUserPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntityUserPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityUserPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityUserPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityUserPaginationResp;
    static equals(a: EntityUserPaginationResp | PlainMessage<EntityUserPaginationResp> | undefined, b: EntityUserPaginationResp | PlainMessage<EntityUserPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.EntitiesUsersServiceFilterReq
 */
export declare class EntitiesUsersServiceFilterReq extends Message<EntitiesUsersServiceFilterReq> {
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
     * @generated from field: scanswift.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: scanswift.ENTITY_USER_SORT_KEY sort_key = 5;
     */
    sortKey: ENTITY_USER_SORT_KEY;
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
     * UUID of the entity (optional, since the consumer might need to fetch records on the basis of other records, irrespective of the entity)
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * UUID of the user registered as the entity user
     *
     * @generated from field: string user_uuid = 20;
     */
    userUuid: string;
    /**
     * UUID of the associated role
     *
     * @generated from field: string role_uuid = 21;
     */
    roleUuid: string;
    constructor(data?: PartialMessage<EntitiesUsersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntitiesUsersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceFilterReq;
    static equals(a: EntitiesUsersServiceFilterReq | PlainMessage<EntitiesUsersServiceFilterReq> | undefined, b: EntitiesUsersServiceFilterReq | PlainMessage<EntitiesUsersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.EntitiesUsersServiceSearchAllReq
 */
export declare class EntitiesUsersServiceSearchAllReq extends Message<EntitiesUsersServiceSearchAllReq> {
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
     * @generated from field: scanswift.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: scanswift.ENTITY_USER_SORT_KEY sort_key = 5;
     */
    sortKey: ENTITY_USER_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<EntitiesUsersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.EntitiesUsersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceSearchAllReq;
    static equals(a: EntitiesUsersServiceSearchAllReq | PlainMessage<EntitiesUsersServiceSearchAllReq> | undefined, b: EntitiesUsersServiceSearchAllReq | PlainMessage<EntitiesUsersServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=entities_users_pb.d.ts.map