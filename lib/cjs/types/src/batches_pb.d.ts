import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DOWNLOADED_STATUS, Metadata, SORT_ORDER } from "./base_pb.js";
import { SERIAL_STATE } from "./serials_pb.js";
/**
 *
 * Describes the available sort keys for retrieving batches
 *
 * @generated from enum scanswift.BATCH_SORT_KEY
 */
export declare enum BATCH_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: BATCH_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    BATCH_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: BATCH_SORT_KEY_CREATED_AT = 1;
     */
    BATCH_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: BATCH_SORT_KEY_MODIFIED_AT = 2;
     */
    BATCH_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: BATCH_SORT_KEY_NAME = 10;
     */
    BATCH_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: BATCH_SORT_KEY_CODE = 11;
     */
    BATCH_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the internal batch code
     *
     * @generated from enum value: BATCH_SORT_KEY_INTERNAL_CODE = 12;
     */
    BATCH_SORT_KEY_INTERNAL_CODE = 12
}
/**
 *
 * Describes the necessary data structure during creation of a batch
 *
 * @generated from message scanswift.BatchesServiceCreateRequest
 */
export declare class BatchesServiceCreateRequest extends Message<BatchesServiceCreateRequest> {
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
     * @generated from field: string location_uuid = 8;
     */
    locationUuid: string;
    /**
     * UUID of the product
     *
     * @generated from field: string product_uuid = 9;
     */
    productUuid: string;
    /**
     * The name of the batch
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * // Code of the batch
     * string code = 11 [(validate.rules).string.min_len = 1];
     * The number of serials that need to be created
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * Internal code as entered by the entity
     *
     * @generated from field: string internal_code = 13;
     */
    internalCode: string;
    constructor(data?: PartialMessage<BatchesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchesServiceCreateRequest;
    static equals(a: BatchesServiceCreateRequest | PlainMessage<BatchesServiceCreateRequest> | undefined, b: BatchesServiceCreateRequest | PlainMessage<BatchesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each batch on the platform
 *
 * @generated from message scanswift.Batch
 */
export declare class Batch extends Message<Batch> {
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
     * UUID of the location
     *
     * @generated from field: string location_uuid = 8;
     */
    locationUuid: string;
    /**
     * UUID of the product
     *
     * @generated from field: string product_uuid = 9;
     */
    productUuid: string;
    /**
     * The name of the batch
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the batch
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The number of serials that have been created
     *
     * @generated from field: int64 quantity = 12;
     */
    quantity: bigint;
    /**
     * Internal code as entered by the entity
     *
     * @generated from field: string internal_code = 13;
     */
    internalCode: string;
    /**
     * Stores if the batch has already been downloaded
     *
     * @generated from field: bool is_downloaded = 20;
     */
    isDownloaded: boolean;
    /**
     * Stores the number of times that this batch has already been downloaded
     *
     * @generated from field: int64 download_count = 21;
     */
    downloadCount: bigint;
    constructor(data?: PartialMessage<Batch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Batch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Batch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Batch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Batch;
    static equals(a: Batch | PlainMessage<Batch> | undefined, b: Batch | PlainMessage<Batch> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of batches
 *
 * @generated from message scanswift.BatchesList
 */
export declare class BatchesList extends Message<BatchesList> {
    /**
     * List of batches
     *
     * @generated from field: repeated scanswift.Batch list = 1;
     */
    list: Batch[];
    constructor(data?: PartialMessage<BatchesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchesList;
    static equals(a: BatchesList | PlainMessage<BatchesList> | undefined, b: BatchesList | PlainMessage<BatchesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.BatchesServicePaginationReq
 */
export declare class BatchesServicePaginationReq extends Message<BatchesServicePaginationReq> {
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
     * @generated from field: scanswift.BATCH_SORT_KEY sort_key = 5;
     */
    sortKey: BATCH_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<BatchesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchesServicePaginationReq;
    static equals(a: BatchesServicePaginationReq | PlainMessage<BatchesServicePaginationReq> | undefined, b: BatchesServicePaginationReq | PlainMessage<BatchesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.BatchPaginationResp
 */
export declare class BatchPaginationResp extends Message<BatchPaginationResp> {
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
     * @generated from field: repeated scanswift.Batch payload = 3;
     */
    payload: Batch[];
    constructor(data?: PartialMessage<BatchPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchPaginationResp;
    static equals(a: BatchPaginationResp | PlainMessage<BatchPaginationResp> | undefined, b: BatchPaginationResp | PlainMessage<BatchPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.BatchesServiceFilterReq
 */
export declare class BatchesServiceFilterReq extends Message<BatchesServiceFilterReq> {
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
     * @generated from field: scanswift.BATCH_SORT_KEY sort_key = 5;
     */
    sortKey: BATCH_SORT_KEY;
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
     * UUID of the product
     *
     * @generated from field: string product_uuid = 10;
     */
    productUuid: string;
    /**
     * The name of the batch
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the batch
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * Internal code as entered by the entity
     *
     * @generated from field: string internal_code = 22;
     */
    internalCode: string;
    /**
     * The downloaded status
     *
     * @generated from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;
     */
    isDownloaded: DOWNLOADED_STATUS;
    constructor(data?: PartialMessage<BatchesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchesServiceFilterReq;
    static equals(a: BatchesServiceFilterReq | PlainMessage<BatchesServiceFilterReq> | undefined, b: BatchesServiceFilterReq | PlainMessage<BatchesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.BatchesServiceSearchAllReq
 */
export declare class BatchesServiceSearchAllReq extends Message<BatchesServiceSearchAllReq> {
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
     * @generated from field: scanswift.BATCH_SORT_KEY sort_key = 5;
     */
    sortKey: BATCH_SORT_KEY;
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
     * UUID of the product
     *
     * @generated from field: string product_uuid = 10;
     */
    productUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The downloaded status
     *
     * @generated from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;
     */
    isDownloaded: DOWNLOADED_STATUS;
    constructor(data?: PartialMessage<BatchesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchesServiceSearchAllReq;
    static equals(a: BatchesServiceSearchAllReq | PlainMessage<BatchesServiceSearchAllReq> | undefined, b: BatchesServiceSearchAllReq | PlainMessage<BatchesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the payload that is used to decommission serials within a batch
 *
 * @generated from message scanswift.BatchesServiceCommissioningRequest
 */
export declare class BatchesServiceCommissioningRequest extends Message<BatchesServiceCommissioningRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the batch that needs to be decommissioned
     *
     * @generated from field: string batch_uuid = 10;
     */
    batchUuid: string;
    /**
     * UUID of the zone (this will be autoselected at the API, but keeping it here for future extension)
     *
     * @generated from field: string zone_uuid = 12;
     */
    zoneUuid: string;
    /**
     * The latitude of the location where this activity was registered
     *
     * @generated from field: double latitude = 13;
     */
    latitude: number;
    /**
     * The longitude of the location where this activity was registered
     *
     * @generated from field: double longitude = 14;
     */
    longitude: number;
    constructor(data?: PartialMessage<BatchesServiceCommissioningRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchesServiceCommissioningRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchesServiceCommissioningRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchesServiceCommissioningRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchesServiceCommissioningRequest;
    static equals(a: BatchesServiceCommissioningRequest | PlainMessage<BatchesServiceCommissioningRequest> | undefined, b: BatchesServiceCommissioningRequest | PlainMessage<BatchesServiceCommissioningRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload that consists of the batch identifier along with the state of the serials
 *
 * @generated from message scanswift.BatchIdentifierWithSerialState
 */
export declare class BatchIdentifierWithSerialState extends Message<BatchIdentifierWithSerialState> {
    /**
     * UUID of the batch
     *
     * @generated from field: string batch_uuid = 1;
     */
    batchUuid: string;
    /**
     * State of the serials
     *
     * @generated from field: scanswift.SERIAL_STATE serial_state = 2;
     */
    serialState: SERIAL_STATE;
    constructor(data?: PartialMessage<BatchIdentifierWithSerialState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.BatchIdentifierWithSerialState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchIdentifierWithSerialState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchIdentifierWithSerialState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchIdentifierWithSerialState;
    static equals(a: BatchIdentifierWithSerialState | PlainMessage<BatchIdentifierWithSerialState> | undefined, b: BatchIdentifierWithSerialState | PlainMessage<BatchIdentifierWithSerialState> | undefined): boolean;
}
//# sourceMappingURL=batches_pb.d.ts.map