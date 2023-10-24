import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving locations
 *
 * @generated from enum scanswift.LOCATION_SORT_KEY
 */
export declare enum LOCATION_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LOCATION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LOCATION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LOCATION_SORT_KEY_CREATED_AT = 1;
     */
    LOCATION_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LOCATION_SORT_KEY_MODIFIED_AT = 2;
     */
    LOCATION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: LOCATION_SORT_KEY_NAME = 10;
     */
    LOCATION_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: LOCATION_SORT_KEY_CODE = 11;
     */
    LOCATION_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a location
 *
 * @generated from message scanswift.LocationsServiceCreateRequest
 */
export declare class LocationsServiceCreateRequest extends Message<LocationsServiceCreateRequest> {
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
     * The name of the location
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the location
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the location
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<LocationsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LocationsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceCreateRequest;
    static equals(a: LocationsServiceCreateRequest | PlainMessage<LocationsServiceCreateRequest> | undefined, b: LocationsServiceCreateRequest | PlainMessage<LocationsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a location
 *
 * @generated from message scanswift.LocationsServiceUpdateRequest
 */
export declare class LocationsServiceUpdateRequest extends Message<LocationsServiceUpdateRequest> {
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
     * The name of the location
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the location
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the location
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<LocationsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LocationsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceUpdateRequest;
    static equals(a: LocationsServiceUpdateRequest | PlainMessage<LocationsServiceUpdateRequest> | undefined, b: LocationsServiceUpdateRequest | PlainMessage<LocationsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each location on the platform
 *
 * @generated from message scanswift.Location
 */
export declare class Location extends Message<Location> {
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
     * The name of the location
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the location
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the location
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<Location>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Location";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Location;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Location;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Location;
    static equals(a: Location | PlainMessage<Location> | undefined, b: Location | PlainMessage<Location> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of locations
 *
 * @generated from message scanswift.LocationsList
 */
export declare class LocationsList extends Message<LocationsList> {
    /**
     * List of locations
     *
     * @generated from field: repeated scanswift.Location list = 1;
     */
    list: Location[];
    constructor(data?: PartialMessage<LocationsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LocationsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsList;
    static equals(a: LocationsList | PlainMessage<LocationsList> | undefined, b: LocationsList | PlainMessage<LocationsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.LocationsServicePaginationReq
 */
export declare class LocationsServicePaginationReq extends Message<LocationsServicePaginationReq> {
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
     * @generated from field: scanswift.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey: LOCATION_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<LocationsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LocationsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServicePaginationReq;
    static equals(a: LocationsServicePaginationReq | PlainMessage<LocationsServicePaginationReq> | undefined, b: LocationsServicePaginationReq | PlainMessage<LocationsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.LocationPaginationResp
 */
export declare class LocationPaginationResp extends Message<LocationPaginationResp> {
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
     * @generated from field: repeated scanswift.Location payload = 3;
     */
    payload: Location[];
    constructor(data?: PartialMessage<LocationPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LocationPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationPaginationResp;
    static equals(a: LocationPaginationResp | PlainMessage<LocationPaginationResp> | undefined, b: LocationPaginationResp | PlainMessage<LocationPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.LocationsServiceFilterReq
 */
export declare class LocationsServiceFilterReq extends Message<LocationsServiceFilterReq> {
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
     * @generated from field: scanswift.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey: LOCATION_SORT_KEY;
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
     * The name of the location
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the location
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<LocationsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LocationsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceFilterReq;
    static equals(a: LocationsServiceFilterReq | PlainMessage<LocationsServiceFilterReq> | undefined, b: LocationsServiceFilterReq | PlainMessage<LocationsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.LocationsServiceSearchAllReq
 */
export declare class LocationsServiceSearchAllReq extends Message<LocationsServiceSearchAllReq> {
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
     * @generated from field: scanswift.LOCATION_SORT_KEY sort_key = 5;
     */
    sortKey: LOCATION_SORT_KEY;
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
    constructor(data?: PartialMessage<LocationsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LocationsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationsServiceSearchAllReq;
    static equals(a: LocationsServiceSearchAllReq | PlainMessage<LocationsServiceSearchAllReq> | undefined, b: LocationsServiceSearchAllReq | PlainMessage<LocationsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=locations_pb.d.ts.map