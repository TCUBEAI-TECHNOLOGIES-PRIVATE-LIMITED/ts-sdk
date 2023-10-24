import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
import { Product } from "./products_pb.js";
import { Location } from "./locations_pb.js";
import { Entity } from "./entities_pb.js";
/**
 *
 * Describes the possible states that a serial can be in
 *
 * @generated from enum scanswift.SERIAL_STATE
 */
export declare enum SERIAL_STATE {
    /**
     * Used only for filter & search requests
     *
     * @generated from enum value: SERIAL_STATE_ANY_UNSPECIFIED = 0;
     */
    SERIAL_STATE_ANY_UNSPECIFIED = 0,
    /**
     * The default state of a serial, which denotes that the serial is available to be commissioned
     *
     * @generated from enum value: SERIAL_STATE_AVAILABLE = 1;
     */
    SERIAL_STATE_AVAILABLE = 1,
    /**
     * Denotes that the serial has been commissioned
     *
     * @generated from enum value: SERIAL_STATE_COMMISSIONED = 2;
     */
    SERIAL_STATE_COMMISSIONED = 2,
    /**
     * Denotes that the serial has been decommissioned
     *
     * @generated from enum value: SERIAL_STATE_DECOMMISSIONED = 3;
     */
    SERIAL_STATE_DECOMMISSIONED = 3,
    /**
     * Denotes that the serial has been recalled
     *
     * @generated from enum value: SERIAL_STATE_RECALLED = 4;
     */
    SERIAL_STATE_RECALLED = 4
}
/**
 *
 * Describes the possible values of activity for a specific serial
 *
 * @generated from enum scanswift.SERIAL_ACTIVITY
 */
export declare enum SERIAL_ACTIVITY {
    /**
     * Used only for filter & search requests
     *
     * @generated from enum value: SERIAL_ACTIVITY_ANY_UNSPECIFIED = 0;
     */
    SERIAL_ACTIVITY_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the serial has been verified
     *
     * @generated from enum value: SERIAL_ACTIVITY_VERIFIED = 1;
     */
    SERIAL_ACTIVITY_VERIFIED = 1,
    /**
     * Denotes that the serial has been commissioned
     *
     * @generated from enum value: SERIAL_ACTIVITY_COMMISSIONED = 2;
     */
    SERIAL_ACTIVITY_COMMISSIONED = 2,
    /**
     * Denotes that the serial has been decommissioned
     *
     * @generated from enum value: SERIAL_ACTIVITY_DECOMMISSIONED = 3;
     */
    SERIAL_ACTIVITY_DECOMMISSIONED = 3,
    /**
     * Denotes that the serial has been recalled
     *
     * @generated from enum value: SERIAL_ACTIVITY_RECALLED = 4;
     */
    SERIAL_ACTIVITY_RECALLED = 4
}
/**
 *
 * Describes the available sort keys for retrieving serials
 *
 * @generated from enum scanswift.SERIAL_SORT_KEY
 */
export declare enum SERIAL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SERIAL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SERIAL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SERIAL_SORT_KEY_CREATED_AT = 1;
     */
    SERIAL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SERIAL_SORT_KEY_MODIFIED_AT = 2;
     */
    SERIAL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * // Fetch ordered results by batch number
     * SERIAL_SORT_KEY_BATCH_NUMBER = 10;
     * Fetch ordered results by code
     *
     * @generated from enum value: SERIAL_SORT_KEY_CODE = 11;
     */
    SERIAL_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the payload that is used to either commission, decommission or verify a serial
 *
 * @generated from message scanswift.SerialsServiceRegisterActivityRequest
 */
export declare class SerialsServiceRegisterActivityRequest extends Message<SerialsServiceRegisterActivityRequest> {
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
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 10;
     */
    zoneUuid: string;
    /**
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 11;
     */
    serialUuid: string;
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
    constructor(data?: PartialMessage<SerialsServiceRegisterActivityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceRegisterActivityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceRegisterActivityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceRegisterActivityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceRegisterActivityRequest;
    static equals(a: SerialsServiceRegisterActivityRequest | PlainMessage<SerialsServiceRegisterActivityRequest> | undefined, b: SerialsServiceRegisterActivityRequest | PlainMessage<SerialsServiceRegisterActivityRequest> | undefined): boolean;
}
/**
 * @generated from message scanswift.SerialsServiceCommissionBulkRequest
 */
export declare class SerialsServiceCommissionBulkRequest extends Message<SerialsServiceCommissionBulkRequest> {
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
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 10;
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
    /**
     * List of serial codes
     *
     * @generated from field: repeated scanswift.SerialsServiceSerialCodes list = 20;
     */
    list: SerialsServiceSerialCodes[];
    constructor(data?: PartialMessage<SerialsServiceCommissionBulkRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceCommissionBulkRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceCommissionBulkRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceCommissionBulkRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceCommissionBulkRequest;
    static equals(a: SerialsServiceCommissionBulkRequest | PlainMessage<SerialsServiceCommissionBulkRequest> | undefined, b: SerialsServiceCommissionBulkRequest | PlainMessage<SerialsServiceCommissionBulkRequest> | undefined): boolean;
}
/**
 * @generated from message scanswift.SerialsServiceSerialCodes
 */
export declare class SerialsServiceSerialCodes extends Message<SerialsServiceSerialCodes> {
    /**
     * Serial code
     *
     * @generated from field: string serial_code = 11;
     */
    serialCode: string;
    constructor(data?: PartialMessage<SerialsServiceSerialCodes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceSerialCodes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceSerialCodes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceSerialCodes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceSerialCodes;
    static equals(a: SerialsServiceSerialCodes | PlainMessage<SerialsServiceSerialCodes> | undefined, b: SerialsServiceSerialCodes | PlainMessage<SerialsServiceSerialCodes> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a serial
 *
 * @generated from message scanswift.SerialsServiceCreateRequest
 */
export declare class SerialsServiceCreateRequest extends Message<SerialsServiceCreateRequest> {
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
     * UUID of the product
     *
     * @generated from field: string product_uuid = 10;
     */
    productUuid: string;
    /**
     * UUID of the batch
     *
     * @generated from field: string batch_uuid = 11;
     */
    batchUuid: string;
    /**
     * The number of serials that need to be created
     *
     * @generated from field: int64 quantity = 20;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<SerialsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceCreateRequest;
    static equals(a: SerialsServiceCreateRequest | PlainMessage<SerialsServiceCreateRequest> | undefined, b: SerialsServiceCreateRequest | PlainMessage<SerialsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each serial on the platform
 *
 * @generated from message scanswift.Serial
 */
export declare class Serial extends Message<Serial> {
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
     * UUID of the batch
     *
     * @generated from field: string batch_uuid = 11;
     */
    batchUuid: string;
    /**
     * Code of the serial
     *
     * @generated from field: string code = 12;
     */
    code: string;
    /**
     * Stores the number of times that this serial has already been downloaded
     *
     * @generated from field: int64 download_count = 13;
     */
    downloadCount: bigint;
    /**
     * Stores the timestamp of when the serial was commissioned
     *
     * @generated from field: int64 commissioned_at = 14;
     */
    commissionedAt: bigint;
    /**
     * The state of the serial
     *
     * @generated from field: scanswift.SERIAL_STATE state = 20;
     */
    state: SERIAL_STATE;
    constructor(data?: PartialMessage<Serial>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Serial";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Serial;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Serial;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Serial;
    static equals(a: Serial | PlainMessage<Serial> | undefined, b: Serial | PlainMessage<Serial> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each serial with its relevant metadata
 *
 * @generated from message scanswift.SerialMetadata
 */
export declare class SerialMetadata extends Message<SerialMetadata> {
    /**
     * Stores the serial info
     *
     * @generated from field: scanswift.Serial serial = 1;
     */
    serial?: Serial;
    /**
     * Stores the expiry timestamp of the serial
     *
     * @generated from field: int64 expiry_timestamp = 2;
     */
    expiryTimestamp: bigint;
    /**
     * Stores the string that will be used to generate the QR code
     *
     * @generated from field: string qr_string = 3;
     */
    qrString: string;
    /**
     * Stores the product info
     *
     * @generated from field: scanswift.Product product = 10;
     */
    product?: Product;
    /**
     * Stores the batch name
     *
     * @generated from field: string batch_name = 20;
     */
    batchName: string;
    /**
     * Stores the batch code
     *
     * @generated from field: string batch_code = 21;
     */
    batchCode: string;
    /**
     * Stores the location info
     *
     * @generated from field: scanswift.Location location = 30;
     */
    location?: Location;
    /**
     * Stores the entity info
     *
     * @generated from field: scanswift.Entity entity = 40;
     */
    entity?: Entity;
    constructor(data?: PartialMessage<SerialMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialMetadata;
    static equals(a: SerialMetadata | PlainMessage<SerialMetadata> | undefined, b: SerialMetadata | PlainMessage<SerialMetadata> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of serials
 *
 * @generated from message scanswift.SerialsList
 */
export declare class SerialsList extends Message<SerialsList> {
    /**
     * List of serials
     *
     * @generated from field: repeated scanswift.Serial list = 1;
     */
    list: Serial[];
    constructor(data?: PartialMessage<SerialsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsList;
    static equals(a: SerialsList | PlainMessage<SerialsList> | undefined, b: SerialsList | PlainMessage<SerialsList> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each serial activity
 *
 * @generated from message scanswift.SerialActivity
 */
export declare class SerialActivity extends Message<SerialActivity> {
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
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 10;
     */
    zoneUuid: string;
    /**
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 11;
     */
    serialUuid: string;
    /**
     * The registered activity
     *
     * @generated from field: scanswift.SERIAL_ACTIVITY activity = 12;
     */
    activity: SERIAL_ACTIVITY;
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
    constructor(data?: PartialMessage<SerialActivity>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialActivity";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialActivity;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialActivity;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialActivity;
    static equals(a: SerialActivity | PlainMessage<SerialActivity> | undefined, b: SerialActivity | PlainMessage<SerialActivity> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of serial activities
 *
 * @generated from message scanswift.SerialActivitiesList
 */
export declare class SerialActivitiesList extends Message<SerialActivitiesList> {
    /**
     * List of serial activities
     *
     * @generated from field: repeated scanswift.SerialActivity list = 1;
     */
    list: SerialActivity[];
    constructor(data?: PartialMessage<SerialActivitiesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialActivitiesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialActivitiesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialActivitiesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialActivitiesList;
    static equals(a: SerialActivitiesList | PlainMessage<SerialActivitiesList> | undefined, b: SerialActivitiesList | PlainMessage<SerialActivitiesList> | undefined): boolean;
}
/**
 *
 * Describes the payload required to retrieve all the activities related to a serial
 *
 * @generated from message scanswift.ViewSerialActivitiesRequest
 */
export declare class ViewSerialActivitiesRequest extends Message<ViewSerialActivitiesRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Stores the entity UUID and limits the query to the appropriate entity
     *
     * @generated from field: string entity_uuid = 2;
     */
    entityUuid: string;
    /**
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 10;
     */
    serialUuid: string;
    constructor(data?: PartialMessage<ViewSerialActivitiesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ViewSerialActivitiesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ViewSerialActivitiesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ViewSerialActivitiesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ViewSerialActivitiesRequest;
    static equals(a: ViewSerialActivitiesRequest | PlainMessage<ViewSerialActivitiesRequest> | undefined, b: ViewSerialActivitiesRequest | PlainMessage<ViewSerialActivitiesRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.SerialsServicePaginationReq
 */
export declare class SerialsServicePaginationReq extends Message<SerialsServicePaginationReq> {
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
     * @generated from field: scanswift.SERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: SERIAL_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<SerialsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServicePaginationReq;
    static equals(a: SerialsServicePaginationReq | PlainMessage<SerialsServicePaginationReq> | undefined, b: SerialsServicePaginationReq | PlainMessage<SerialsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.SerialPaginationResp
 */
export declare class SerialPaginationResp extends Message<SerialPaginationResp> {
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
     * @generated from field: repeated scanswift.Serial payload = 3;
     */
    payload: Serial[];
    constructor(data?: PartialMessage<SerialPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialPaginationResp;
    static equals(a: SerialPaginationResp | PlainMessage<SerialPaginationResp> | undefined, b: SerialPaginationResp | PlainMessage<SerialPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.SerialsServiceFilterReq
 */
export declare class SerialsServiceFilterReq extends Message<SerialsServiceFilterReq> {
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
     * @generated from field: scanswift.SERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: SERIAL_SORT_KEY;
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
     * UUID of the batch
     *
     * @generated from field: string batch_uuid = 11;
     */
    batchUuid: string;
    /**
     * Code of the serial
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The state of the serial
     *
     * @generated from field: scanswift.SERIAL_STATE state = 30;
     */
    state: SERIAL_STATE;
    constructor(data?: PartialMessage<SerialsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceFilterReq;
    static equals(a: SerialsServiceFilterReq | PlainMessage<SerialsServiceFilterReq> | undefined, b: SerialsServiceFilterReq | PlainMessage<SerialsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.SerialsServiceSearchAllReq
 */
export declare class SerialsServiceSearchAllReq extends Message<SerialsServiceSearchAllReq> {
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
     * @generated from field: scanswift.SERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: SERIAL_SORT_KEY;
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
     * UUID of the batch
     *
     * @generated from field: string batch_uuid = 11;
     */
    batchUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 12;
     */
    searchKey: string;
    /**
     * The state of the serial
     *
     * @generated from field: scanswift.SERIAL_STATE state = 30;
     */
    state: SERIAL_STATE;
    constructor(data?: PartialMessage<SerialsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceSearchAllReq;
    static equals(a: SerialsServiceSearchAllReq | PlainMessage<SerialsServiceSearchAllReq> | undefined, b: SerialsServiceSearchAllReq | PlainMessage<SerialsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for retrieving counts of serials in various states
 *
 * @generated from message scanswift.SerialsServiceAnalyticsGroupByStateRequest
 */
export declare class SerialsServiceAnalyticsGroupByStateRequest extends Message<SerialsServiceAnalyticsGroupByStateRequest> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
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
     * UUID of the batch
     *
     * @generated from field: string batch_uuid = 11;
     */
    batchUuid: string;
    constructor(data?: PartialMessage<SerialsServiceAnalyticsGroupByStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceAnalyticsGroupByStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceAnalyticsGroupByStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceAnalyticsGroupByStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceAnalyticsGroupByStateRequest;
    static equals(a: SerialsServiceAnalyticsGroupByStateRequest | PlainMessage<SerialsServiceAnalyticsGroupByStateRequest> | undefined, b: SerialsServiceAnalyticsGroupByStateRequest | PlainMessage<SerialsServiceAnalyticsGroupByStateRequest> | undefined): boolean;
}
/**
 *
 * Describes the response that consists of the list of all the states and the counts of serials in the respective states
 *
 * @generated from message scanswift.SerialsServiceStateAndCountMessageList
 */
export declare class SerialsServiceStateAndCountMessageList extends Message<SerialsServiceStateAndCountMessageList> {
    /**
     * The list of states and the counts
     *
     * @generated from field: repeated scanswift.SerialsServiceStateAndCountMessage list = 1;
     */
    list: SerialsServiceStateAndCountMessage[];
    constructor(data?: PartialMessage<SerialsServiceStateAndCountMessageList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceStateAndCountMessageList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceStateAndCountMessageList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceStateAndCountMessageList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceStateAndCountMessageList;
    static equals(a: SerialsServiceStateAndCountMessageList | PlainMessage<SerialsServiceStateAndCountMessageList> | undefined, b: SerialsServiceStateAndCountMessageList | PlainMessage<SerialsServiceStateAndCountMessageList> | undefined): boolean;
}
/**
 *
 * Describes the response that consists of a state and the count of serials within that state
 *
 * @generated from message scanswift.SerialsServiceStateAndCountMessage
 */
export declare class SerialsServiceStateAndCountMessage extends Message<SerialsServiceStateAndCountMessage> {
    /**
     * The state of the serial
     *
     * @generated from field: scanswift.SERIAL_STATE state = 10;
     */
    state: SERIAL_STATE;
    /**
     * The number of serials within this state
     *
     * @generated from field: int64 count = 11;
     */
    count: bigint;
    constructor(data?: PartialMessage<SerialsServiceStateAndCountMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.SerialsServiceStateAndCountMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsServiceStateAndCountMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsServiceStateAndCountMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsServiceStateAndCountMessage;
    static equals(a: SerialsServiceStateAndCountMessage | PlainMessage<SerialsServiceStateAndCountMessage> | undefined, b: SerialsServiceStateAndCountMessage | PlainMessage<SerialsServiceStateAndCountMessage> | undefined): boolean;
}
//# sourceMappingURL=serials_pb.d.ts.map