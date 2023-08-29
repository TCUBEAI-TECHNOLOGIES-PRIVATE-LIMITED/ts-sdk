import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving entities
 *
 * @generated from enum tcube.ENTITY_SORT_KEY
 */
export declare enum ENTITY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ENTITY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ENTITY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ENTITY_SORT_KEY_CREATED_AT = 1;
     */
    ENTITY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ENTITY_SORT_KEY_MODIFIED_AT = 2;
     */
    ENTITY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: ENTITY_SORT_KEY_NAME = 10;
     */
    ENTITY_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: ENTITY_SORT_KEY_CODE = 11;
     */
    ENTITY_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a entity
 *
 * @generated from message tcube.EntitiesServiceCreateRequest
 */
export declare class EntitiesServiceCreateRequest extends Message<EntitiesServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The name of the entity
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The global identifier of the entity
     *
     * @generated from field: string global_identifier = 11;
     */
    globalIdentifier: string;
    /**
     * Description of the entity
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The email address of the entity
     *
     * @generated from field: string email = 15;
     */
    email: string;
    /**
     * The phone number of the entity
     *
     * @generated from field: string phone = 16;
     */
    phone: string;
    /**
     * The address of the entity
     *
     * @generated from field: string address = 17;
     */
    address: string;
    /**
     * The city in which the entity is based out of
     *
     * @generated from field: string city = 18;
     */
    city: string;
    /**
     * The state in which the entity is based out of
     *
     * @generated from field: string state = 19;
     */
    state: string;
    /**
     * The zipcode of the location in which the entity is based out of
     *
     * @generated from field: string zip_code = 20;
     */
    zipCode: string;
    /**
     * An optional custom domain name, which will be used to display info about serials, packagings and shippings
     *
     * @generated from field: string domain = 21;
     */
    domain: string;
    /**
     * The first name of the entity administrator
     *
     * @generated from field: string first_name = 30;
     */
    firstName: string;
    /**
     * The last name of the entity administrator
     *
     * // The password with which the user can login for the first time
     * string plain_text_password = 32 [(validate.rules).string = {
     *     pattern:   "^[0-9A-Za-z_@\\-]+$", // No spaces
     *     max_bytes: 100,
     * }];
     *
     * @generated from field: string last_name = 31;
     */
    lastName: string;
    /**
     * The UUID of the role of the user that is creating this entity
     *
     * @generated from field: string role_uuid = 40;
     */
    roleUuid: string;
    constructor(data?: PartialMessage<EntitiesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.EntitiesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesServiceCreateRequest;
    static equals(a: EntitiesServiceCreateRequest | PlainMessage<EntitiesServiceCreateRequest> | undefined, b: EntitiesServiceCreateRequest | PlainMessage<EntitiesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a entity
 *
 * @generated from message tcube.EntitiesServiceUpdateRequest
 */
export declare class EntitiesServiceUpdateRequest extends Message<EntitiesServiceUpdateRequest> {
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
     * The name of the entity
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The global identifier of the entity
     *
     * @generated from field: string global_identifier = 11;
     */
    globalIdentifier: string;
    /**
     * Description of the entity
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The email address of the entity
     *
     * @generated from field: string email = 15;
     */
    email: string;
    /**
     * The phone number of the entity
     *
     * @generated from field: string phone = 16;
     */
    phone: string;
    /**
     * The address of the entity
     *
     * @generated from field: string address = 17;
     */
    address: string;
    /**
     * The city in which the entity is based out of
     *
     * @generated from field: string city = 18;
     */
    city: string;
    /**
     * The state in which the entity is based out of
     *
     * @generated from field: string state = 19;
     */
    state: string;
    /**
     * The zipcode of the location in which the entity is based out of
     *
     * @generated from field: string zip_code = 20;
     */
    zipCode: string;
    /**
     * An optional custom domain name, which will be used to display info about serials, packagings and shippings
     *
     * @generated from field: string domain = 21;
     */
    domain: string;
    constructor(data?: PartialMessage<EntitiesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.EntitiesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesServiceUpdateRequest;
    static equals(a: EntitiesServiceUpdateRequest | PlainMessage<EntitiesServiceUpdateRequest> | undefined, b: EntitiesServiceUpdateRequest | PlainMessage<EntitiesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each entity on the platform
 *
 * @generated from message tcube.Entity
 */
export declare class Entity extends Message<Entity> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The name of the entity
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The global identifier of the entity
     *
     * @generated from field: string global_identifier = 11;
     */
    globalIdentifier: string;
    /**
     * Description of the entity
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * Code of the entity
     *
     * @generated from field: string code = 13;
     */
    code: string;
    /**
     * The email address of the entity
     *
     * @generated from field: string email = 14;
     */
    email: string;
    /**
     * The phone number of the entity
     *
     * @generated from field: string phone = 15;
     */
    phone: string;
    /**
     * The address of the entity
     *
     * @generated from field: string address = 16;
     */
    address: string;
    /**
     * The city in which the entity is based out of
     *
     * @generated from field: string city = 17;
     */
    city: string;
    /**
     * The state in which the entity is based out of
     *
     * @generated from field: string state = 18;
     */
    state: string;
    /**
     * The zipcode of the location in which the entity is based out of
     *
     * @generated from field: string zip_code = 19;
     */
    zipCode: string;
    /**
     * Stores if the entity has been verified
     *
     * @generated from field: bool is_verified = 20;
     */
    isVerified: boolean;
    /**
     * An optional custom domain name, which will be used to display info about serials, packagings and shippings
     *
     * @generated from field: string domain = 21;
     */
    domain: string;
    constructor(data?: PartialMessage<Entity>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Entity";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Entity;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Entity;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Entity;
    static equals(a: Entity | PlainMessage<Entity> | undefined, b: Entity | PlainMessage<Entity> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of entities
 *
 * @generated from message tcube.EntitiesList
 */
export declare class EntitiesList extends Message<EntitiesList> {
    /**
     * List of entities
     *
     * @generated from field: repeated tcube.Entity list = 1;
     */
    list: Entity[];
    constructor(data?: PartialMessage<EntitiesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.EntitiesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesList;
    static equals(a: EntitiesList | PlainMessage<EntitiesList> | undefined, b: EntitiesList | PlainMessage<EntitiesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.EntitiesServicePaginationReq
 */
export declare class EntitiesServicePaginationReq extends Message<EntitiesServicePaginationReq> {
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
     * @generated from field: tcube.ENTITY_SORT_KEY sort_key = 5;
     */
    sortKey: ENTITY_SORT_KEY;
    constructor(data?: PartialMessage<EntitiesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.EntitiesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesServicePaginationReq;
    static equals(a: EntitiesServicePaginationReq | PlainMessage<EntitiesServicePaginationReq> | undefined, b: EntitiesServicePaginationReq | PlainMessage<EntitiesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.EntityPaginationResp
 */
export declare class EntityPaginationResp extends Message<EntityPaginationResp> {
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
     * @generated from field: repeated tcube.Entity payload = 3;
     */
    payload: Entity[];
    constructor(data?: PartialMessage<EntityPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.EntityPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityPaginationResp;
    static equals(a: EntityPaginationResp | PlainMessage<EntityPaginationResp> | undefined, b: EntityPaginationResp | PlainMessage<EntityPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.EntitiesServiceFilterReq
 */
export declare class EntitiesServiceFilterReq extends Message<EntitiesServiceFilterReq> {
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
     * @generated from field: tcube.ENTITY_SORT_KEY sort_key = 5;
     */
    sortKey: ENTITY_SORT_KEY;
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
     * The name of the entity
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the entity
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The email address of the entity
     *
     * @generated from field: string email = 23;
     */
    email: string;
    /**
     * The phone number of the entity
     *
     * @generated from field: string phone = 24;
     */
    phone: string;
    /**
     * The city in which the entity is based out of
     *
     * @generated from field: string city = 26;
     */
    city: string;
    /**
     * The state in which the entity is based out of
     *
     * @generated from field: string state = 27;
     */
    state: string;
    /**
     * The zipcode of the location in which the entity is based out of
     *
     * @generated from field: string zip_code = 28;
     */
    zipCode: string;
    constructor(data?: PartialMessage<EntitiesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.EntitiesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesServiceFilterReq;
    static equals(a: EntitiesServiceFilterReq | PlainMessage<EntitiesServiceFilterReq> | undefined, b: EntitiesServiceFilterReq | PlainMessage<EntitiesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.EntitiesServiceSearchAllReq
 */
export declare class EntitiesServiceSearchAllReq extends Message<EntitiesServiceSearchAllReq> {
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
     * @generated from field: tcube.ENTITY_SORT_KEY sort_key = 5;
     */
    sortKey: ENTITY_SORT_KEY;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<EntitiesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.EntitiesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesServiceSearchAllReq;
    static equals(a: EntitiesServiceSearchAllReq | PlainMessage<EntitiesServiceSearchAllReq> | undefined, b: EntitiesServiceSearchAllReq | PlainMessage<EntitiesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=entities_pb.d.ts.map