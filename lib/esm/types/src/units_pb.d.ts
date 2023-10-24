import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving units
 *
 * @generated from enum scanswift.UNIT_SORT_KEY
 */
export declare enum UNIT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: UNIT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    UNIT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: UNIT_SORT_KEY_CREATED_AT = 1;
     */
    UNIT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: UNIT_SORT_KEY_MODIFIED_AT = 2;
     */
    UNIT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: UNIT_SORT_KEY_NAME = 10;
     */
    UNIT_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: UNIT_SORT_KEY_CODE = 11;
     */
    UNIT_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a unit
 *
 * @generated from message scanswift.UnitsServiceCreateRequest
 */
export declare class UnitsServiceCreateRequest extends Message<UnitsServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The name of the unit
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the unit
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the unit
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<UnitsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UnitsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsServiceCreateRequest;
    static equals(a: UnitsServiceCreateRequest | PlainMessage<UnitsServiceCreateRequest> | undefined, b: UnitsServiceCreateRequest | PlainMessage<UnitsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a unit
 *
 * @generated from message scanswift.UnitsServiceUpdateRequest
 */
export declare class UnitsServiceUpdateRequest extends Message<UnitsServiceUpdateRequest> {
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
     * The name of the unit
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the unit
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the unit
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<UnitsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UnitsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsServiceUpdateRequest;
    static equals(a: UnitsServiceUpdateRequest | PlainMessage<UnitsServiceUpdateRequest> | undefined, b: UnitsServiceUpdateRequest | PlainMessage<UnitsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each unit on the platform
 *
 * @generated from message scanswift.Unit
 */
export declare class Unit extends Message<Unit> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: scanswift.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The name of the unit
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the unit
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the unit
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<Unit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Unit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Unit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Unit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Unit;
    static equals(a: Unit | PlainMessage<Unit> | undefined, b: Unit | PlainMessage<Unit> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of units
 *
 * @generated from message scanswift.UnitsList
 */
export declare class UnitsList extends Message<UnitsList> {
    /**
     * List of units
     *
     * @generated from field: repeated scanswift.Unit list = 1;
     */
    list: Unit[];
    constructor(data?: PartialMessage<UnitsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UnitsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsList;
    static equals(a: UnitsList | PlainMessage<UnitsList> | undefined, b: UnitsList | PlainMessage<UnitsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.UnitsServicePaginationReq
 */
export declare class UnitsServicePaginationReq extends Message<UnitsServicePaginationReq> {
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
     * @generated from field: scanswift.UNIT_SORT_KEY sort_key = 5;
     */
    sortKey: UNIT_SORT_KEY;
    constructor(data?: PartialMessage<UnitsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UnitsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsServicePaginationReq;
    static equals(a: UnitsServicePaginationReq | PlainMessage<UnitsServicePaginationReq> | undefined, b: UnitsServicePaginationReq | PlainMessage<UnitsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.UnitPaginationResp
 */
export declare class UnitPaginationResp extends Message<UnitPaginationResp> {
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
     * @generated from field: repeated scanswift.Unit payload = 3;
     */
    payload: Unit[];
    constructor(data?: PartialMessage<UnitPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UnitPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitPaginationResp;
    static equals(a: UnitPaginationResp | PlainMessage<UnitPaginationResp> | undefined, b: UnitPaginationResp | PlainMessage<UnitPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.UnitsServiceFilterReq
 */
export declare class UnitsServiceFilterReq extends Message<UnitsServiceFilterReq> {
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
     * @generated from field: scanswift.UNIT_SORT_KEY sort_key = 5;
     */
    sortKey: UNIT_SORT_KEY;
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
     * The name of the unit
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the unit
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<UnitsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UnitsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsServiceFilterReq;
    static equals(a: UnitsServiceFilterReq | PlainMessage<UnitsServiceFilterReq> | undefined, b: UnitsServiceFilterReq | PlainMessage<UnitsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.UnitsServiceSearchAllReq
 */
export declare class UnitsServiceSearchAllReq extends Message<UnitsServiceSearchAllReq> {
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
     * @generated from field: scanswift.UNIT_SORT_KEY sort_key = 5;
     */
    sortKey: UNIT_SORT_KEY;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<UnitsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UnitsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnitsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnitsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnitsServiceSearchAllReq;
    static equals(a: UnitsServiceSearchAllReq | PlainMessage<UnitsServiceSearchAllReq> | undefined, b: UnitsServiceSearchAllReq | PlainMessage<UnitsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=units_pb.d.ts.map