import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available zone types
 *
 * @generated from enum tcube.ZONE_TYPE
 */
export declare enum ZONE_TYPE {
    /**
     * Used only for filter requests
     *
     * @generated from enum value: ZONE_TYPE_ANY_UNSPECIFIED = 0;
     */
    ZONE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Manufacturing zone
     *
     * @generated from enum value: ZONE_TYPE_MANUFACTURING = 1;
     */
    ZONE_TYPE_MANUFACTURING = 1,
    /**
     * Packaging zone
     *
     * @generated from enum value: ZONE_TYPE_PACKAGING = 2;
     */
    ZONE_TYPE_PACKAGING = 2,
    /**
     * Shipping zone
     *
     * @generated from enum value: ZONE_TYPE_SHIPPING = 3;
     */
    ZONE_TYPE_SHIPPING = 3
}
/**
 *
 * Describes the available sort keys for retrieving zones
 *
 * @generated from enum tcube.ZONE_SORT_KEY
 */
export declare enum ZONE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ZONE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ZONE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ZONE_SORT_KEY_CREATED_AT = 1;
     */
    ZONE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ZONE_SORT_KEY_MODIFIED_AT = 2;
     */
    ZONE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: ZONE_SORT_KEY_NAME = 10;
     */
    ZONE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: ZONE_SORT_KEY_CODE = 11;
     */
    ZONE_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a zone
 *
 * @generated from message tcube.ZonesServiceCreateRequest
 */
export declare class ZonesServiceCreateRequest extends Message<ZonesServiceCreateRequest> {
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
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * The name of the zone
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the zone
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the zone
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The type of the zone
     *
     * @generated from field: tcube.ZONE_TYPE type = 13;
     */
    type: ZONE_TYPE;
    constructor(data?: PartialMessage<ZonesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ZonesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZonesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZonesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZonesServiceCreateRequest;
    static equals(a: ZonesServiceCreateRequest | PlainMessage<ZonesServiceCreateRequest> | undefined, b: ZonesServiceCreateRequest | PlainMessage<ZonesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a zone
 *
 * @generated from message tcube.ZonesServiceUpdateRequest
 */
export declare class ZonesServiceUpdateRequest extends Message<ZonesServiceUpdateRequest> {
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
     * The name of the zone
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the zone
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the zone
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The type of the zone
     *
     * @generated from field: tcube.ZONE_TYPE type = 13;
     */
    type: ZONE_TYPE;
    constructor(data?: PartialMessage<ZonesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ZonesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZonesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZonesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZonesServiceUpdateRequest;
    static equals(a: ZonesServiceUpdateRequest | PlainMessage<ZonesServiceUpdateRequest> | undefined, b: ZonesServiceUpdateRequest | PlainMessage<ZonesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each zone on the platform
 *
 * @generated from message tcube.Zone
 */
export declare class Zone extends Message<Zone> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 2;
     */
    entityUuid: string;
    /**
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * The name of the zone
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the zone
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the zone
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The type of the zone
     *
     * @generated from field: tcube.ZONE_TYPE type = 13;
     */
    type: ZONE_TYPE;
    constructor(data?: PartialMessage<Zone>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Zone";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Zone;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Zone;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Zone;
    static equals(a: Zone | PlainMessage<Zone> | undefined, b: Zone | PlainMessage<Zone> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of zones
 *
 * @generated from message tcube.ZonesList
 */
export declare class ZonesList extends Message<ZonesList> {
    /**
     * List of zones
     *
     * @generated from field: repeated tcube.Zone list = 1;
     */
    list: Zone[];
    constructor(data?: PartialMessage<ZonesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ZonesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZonesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZonesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZonesList;
    static equals(a: ZonesList | PlainMessage<ZonesList> | undefined, b: ZonesList | PlainMessage<ZonesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.ZonesServicePaginationReq
 */
export declare class ZonesServicePaginationReq extends Message<ZonesServicePaginationReq> {
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
     * @generated from field: tcube.ZONE_SORT_KEY sort_key = 5;
     */
    sortKey: ZONE_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ZonesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ZonesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZonesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZonesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZonesServicePaginationReq;
    static equals(a: ZonesServicePaginationReq | PlainMessage<ZonesServicePaginationReq> | undefined, b: ZonesServicePaginationReq | PlainMessage<ZonesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.ZonePaginationResp
 */
export declare class ZonePaginationResp extends Message<ZonePaginationResp> {
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
     * @generated from field: repeated tcube.Zone payload = 3;
     */
    payload: Zone[];
    constructor(data?: PartialMessage<ZonePaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ZonePaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZonePaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZonePaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZonePaginationResp;
    static equals(a: ZonePaginationResp | PlainMessage<ZonePaginationResp> | undefined, b: ZonePaginationResp | PlainMessage<ZonePaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.ZonesServiceFilterReq
 */
export declare class ZonesServiceFilterReq extends Message<ZonesServiceFilterReq> {
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
     * @generated from field: tcube.ZONE_SORT_KEY sort_key = 5;
     */
    sortKey: ZONE_SORT_KEY;
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
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * The name of the zone
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the zone
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The type of the zone
     *
     * @generated from field: tcube.ZONE_TYPE type = 22;
     */
    type: ZONE_TYPE;
    constructor(data?: PartialMessage<ZonesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ZonesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZonesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZonesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZonesServiceFilterReq;
    static equals(a: ZonesServiceFilterReq | PlainMessage<ZonesServiceFilterReq> | undefined, b: ZonesServiceFilterReq | PlainMessage<ZonesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.ZonesServiceSearchAllReq
 */
export declare class ZonesServiceSearchAllReq extends Message<ZonesServiceSearchAllReq> {
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
     * @generated from field: tcube.ZONE_SORT_KEY sort_key = 5;
     */
    sortKey: ZONE_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The type of the zone
     *
     * @generated from field: tcube.ZONE_TYPE type = 22;
     */
    type: ZONE_TYPE;
    constructor(data?: PartialMessage<ZonesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ZonesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZonesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZonesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZonesServiceSearchAllReq;
    static equals(a: ZonesServiceSearchAllReq | PlainMessage<ZonesServiceSearchAllReq> | undefined, b: ZonesServiceSearchAllReq | PlainMessage<ZonesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=zones_pb.d.ts.map