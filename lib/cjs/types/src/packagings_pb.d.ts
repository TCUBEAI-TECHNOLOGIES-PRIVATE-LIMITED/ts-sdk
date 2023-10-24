import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DOWNLOADED_STATUS, Metadata, SORT_ORDER } from "./base_pb.js";
import { Location } from "./locations_pb.js";
import { Entity } from "./entities_pb.js";
import { SerialsServiceSerialCodes } from "./serials_pb.js";
/**
 *
 * Describes the available states for a packaging
 *
 * @generated from enum scanswift.PACKAGING_STATE
 */
export declare enum PACKAGING_STATE {
    /**
     * Packaging is any (only useful for filter requests)
     *
     * @generated from enum value: PACKAGING_STATE_ANY_UNSPECIFIED = 0;
     */
    PACKAGING_STATE_ANY_UNSPECIFIED = 0,
    /**
     * Packaging is open
     *
     * @generated from enum value: PACKAGING_STATE_OPEN = 1;
     */
    PACKAGING_STATE_OPEN = 1,
    /**
     * Packaging is closed
     *
     * @generated from enum value: PACKAGING_STATE_CLOSED = 2;
     */
    PACKAGING_STATE_CLOSED = 2
}
/**
 *
 * Stores the possible values for encoding type
 *
 * @generated from enum scanswift.PRINT_ENCODING_TYPE_FOR_PACKAGING
 */
export declare enum PRINT_ENCODING_TYPE_FOR_PACKAGING {
    /**
     * Generate the code as HRI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED = 0;
     */
    PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED = 0,
    /**
     * Generate the code as URI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PACKAGING_URI = 1;
     */
    PRINT_ENCODING_TYPE_FOR_PACKAGING_URI = 1,
    /**
     * Generate the code in all the available forms
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PACKAGING_ALL = 2;
     */
    PRINT_ENCODING_TYPE_FOR_PACKAGING_ALL = 2
}
/**
 *
 * Describes the available sort keys for retrieving packagings
 *
 * @generated from enum scanswift.PACKAGING_SORT_KEY
 */
export declare enum PACKAGING_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PACKAGING_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PACKAGING_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PACKAGING_SORT_KEY_CREATED_AT = 1;
     */
    PACKAGING_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PACKAGING_SORT_KEY_MODIFIED_AT = 2;
     */
    PACKAGING_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: PACKAGING_SORT_KEY_NAME = 10;
     */
    PACKAGING_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: PACKAGING_SORT_KEY_CODE = 11;
     */
    PACKAGING_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a packaging
 *
 * @generated from message scanswift.PackagingsServiceCreateRequest
 */
export declare class PackagingsServiceCreateRequest extends Message<PackagingsServiceCreateRequest> {
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
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 9;
     */
    zoneUuid: string;
    /**
     * Optional UUID of the associated product
     *
     * @generated from field: string product_uuid = 10;
     */
    productUuid: string;
    /**
     * Optional UUID of the associated batch
     *
     * @generated from field: string batch_uuid = 11;
     */
    batchUuid: string;
    /**
     * The name of the packaging
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * Description of the packaging
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The maximum number of items that can be added to a packaging, with 0 denoting no limit
     *
     * @generated from field: int64 max_count = 14;
     */
    maxCount: bigint;
    /**
     * The latitude of the location where this packaging was created
     *
     * @generated from field: double latitude = 15;
     */
    latitude: number;
    /**
     * The longitude of the location where this packaging was created
     *
     * @generated from field: double longitude = 16;
     */
    longitude: number;
    /**
     * The type of encoding
     *
     * @generated from field: scanswift.PRINT_ENCODING_TYPE_FOR_PACKAGING print_encoding_type = 18;
     */
    printEncodingType: PRINT_ENCODING_TYPE_FOR_PACKAGING;
    constructor(data?: PartialMessage<PackagingsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsServiceCreateRequest;
    static equals(a: PackagingsServiceCreateRequest | PlainMessage<PackagingsServiceCreateRequest> | undefined, b: PackagingsServiceCreateRequest | PlainMessage<PackagingsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each packaging on the platform
 *
 * @generated from message scanswift.Packaging
 */
export declare class Packaging extends Message<Packaging> {
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
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 9;
     */
    zoneUuid: string;
    /**
     * Optional UUID of the associated product
     *
     * @generated from field: string product_uuid = 10;
     */
    productUuid: string;
    /**
     * Optional UUID of the associated batch
     *
     * @generated from field: string batch_uuid = 11;
     */
    batchUuid: string;
    /**
     * The name of the packaging
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * Code of the packaging
     *
     * @generated from field: string code = 13;
     */
    code: string;
    /**
     * Description of the packaging
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The maximum number of items that can be added to a packaging, with 0 denoting no limit
     *
     * @generated from field: int64 max_count = 15;
     */
    maxCount: bigint;
    /**
     * The latitude of the location where this packaging was created
     *
     * @generated from field: double latitude = 16;
     */
    latitude: number;
    /**
     * The longitude of the location where this packaging was created
     *
     * @generated from field: double longitude = 17;
     */
    longitude: number;
    /**
     * The type of encoding
     *
     * @generated from field: scanswift.PRINT_ENCODING_TYPE_FOR_PACKAGING print_encoding_type = 18;
     */
    printEncodingType: PRINT_ENCODING_TYPE_FOR_PACKAGING;
    /**
     * The state of the packaging
     *
     * @generated from field: scanswift.PACKAGING_STATE state = 20;
     */
    state: PACKAGING_STATE;
    /**
     * Stores if the packaging has already been downloaded
     *
     * @generated from field: bool is_downloaded = 30;
     */
    isDownloaded: boolean;
    /**
     * Stores the number of times that this packaging has already been downloaded
     *
     * @generated from field: int64 download_count = 31;
     */
    downloadCount: bigint;
    constructor(data?: PartialMessage<Packaging>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Packaging";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Packaging;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Packaging;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Packaging;
    static equals(a: Packaging | PlainMessage<Packaging> | undefined, b: Packaging | PlainMessage<Packaging> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each packaging with its relevant metadata
 *
 * @generated from message scanswift.PackagingMetadata
 */
export declare class PackagingMetadata extends Message<PackagingMetadata> {
    /**
     * Stores the packaging info
     *
     * @generated from field: scanswift.Packaging packaging = 1;
     */
    packaging?: Packaging;
    /**
     * Stores the string that will be used to generate the QR code
     *
     * @generated from field: string qr_string = 3;
     */
    qrString: string;
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
    constructor(data?: PartialMessage<PackagingMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingMetadata;
    static equals(a: PackagingMetadata | PlainMessage<PackagingMetadata> | undefined, b: PackagingMetadata | PlainMessage<PackagingMetadata> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of packagings
 *
 * @generated from message scanswift.PackagingsList
 */
export declare class PackagingsList extends Message<PackagingsList> {
    /**
     * List of packagings
     *
     * @generated from field: repeated scanswift.Packaging list = 1;
     */
    list: Packaging[];
    constructor(data?: PartialMessage<PackagingsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsList;
    static equals(a: PackagingsList | PlainMessage<PackagingsList> | undefined, b: PackagingsList | PlainMessage<PackagingsList> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during addition of multiple serials to a packaging
 *
 * @generated from message scanswift.PackagingsServiceAddSerialsRequest
 */
export declare class PackagingsServiceAddSerialsRequest extends Message<PackagingsServiceAddSerialsRequest> {
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
     * UUID of the packaging
     *
     * @generated from field: string packaging_uuid = 10;
     */
    packagingUuid: string;
    /**
     * The latitude of the location where this packaging was created
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location where this packaging was created
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * List of serial codes
     *
     * @generated from field: repeated scanswift.SerialsServiceSerialCodes list = 20;
     */
    list: SerialsServiceSerialCodes[];
    constructor(data?: PartialMessage<PackagingsServiceAddSerialsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingsServiceAddSerialsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsServiceAddSerialsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsServiceAddSerialsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsServiceAddSerialsRequest;
    static equals(a: PackagingsServiceAddSerialsRequest | PlainMessage<PackagingsServiceAddSerialsRequest> | undefined, b: PackagingsServiceAddSerialsRequest | PlainMessage<PackagingsServiceAddSerialsRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each packaging serial
 *
 * @generated from message scanswift.PackagingSerial
 */
export declare class PackagingSerial extends Message<PackagingSerial> {
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
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 9;
     */
    zoneUuid: string;
    /**
     * UUID of the packaging
     *
     * @generated from field: string packaging_uuid = 10;
     */
    packagingUuid: string;
    /**
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 11;
     */
    serialUuid: string;
    /**
     * The latitude of the location where this packaging was created
     *
     * @generated from field: double latitude = 12;
     */
    latitude: number;
    /**
     * The longitude of the location where this packaging was created
     *
     * @generated from field: double longitude = 13;
     */
    longitude: number;
    constructor(data?: PartialMessage<PackagingSerial>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingSerial";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingSerial;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingSerial;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingSerial;
    static equals(a: PackagingSerial | PlainMessage<PackagingSerial> | undefined, b: PackagingSerial | PlainMessage<PackagingSerial> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of packaging serials
 *
 * @generated from message scanswift.PackagingsSerialsList
 */
export declare class PackagingsSerialsList extends Message<PackagingsSerialsList> {
    /**
     * List of serials that are associated with the packaging
     *
     * @generated from field: repeated scanswift.PackagingSerial list = 1;
     */
    list: PackagingSerial[];
    constructor(data?: PartialMessage<PackagingsSerialsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingsSerialsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsSerialsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsSerialsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsSerialsList;
    static equals(a: PackagingsSerialsList | PlainMessage<PackagingsSerialsList> | undefined, b: PackagingsSerialsList | PlainMessage<PackagingsSerialsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.PackagingsServicePaginationReq
 */
export declare class PackagingsServicePaginationReq extends Message<PackagingsServicePaginationReq> {
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
     * @generated from field: scanswift.PACKAGING_SORT_KEY sort_key = 5;
     */
    sortKey: PACKAGING_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<PackagingsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsServicePaginationReq;
    static equals(a: PackagingsServicePaginationReq | PlainMessage<PackagingsServicePaginationReq> | undefined, b: PackagingsServicePaginationReq | PlainMessage<PackagingsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.PackagingPaginationResp
 */
export declare class PackagingPaginationResp extends Message<PackagingPaginationResp> {
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
     * @generated from field: repeated scanswift.Packaging payload = 3;
     */
    payload: Packaging[];
    constructor(data?: PartialMessage<PackagingPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingPaginationResp;
    static equals(a: PackagingPaginationResp | PlainMessage<PackagingPaginationResp> | undefined, b: PackagingPaginationResp | PlainMessage<PackagingPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.PackagingsServiceFilterReq
 */
export declare class PackagingsServiceFilterReq extends Message<PackagingsServiceFilterReq> {
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
     * @generated from field: scanswift.PACKAGING_SORT_KEY sort_key = 5;
     */
    sortKey: PACKAGING_SORT_KEY;
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
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 10;
     */
    zoneUuid: string;
    /**
     * Optional UUID of the associated product
     *
     * @generated from field: string product_uuid = 11;
     */
    productUuid: string;
    /**
     * Optional UUID of the associated batch
     *
     * @generated from field: string batch_uuid = 12;
     */
    batchUuid: string;
    /**
     * The name of the packaging
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the packaging
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The state of the packaging
     *
     * @generated from field: scanswift.PACKAGING_STATE state = 30;
     */
    state: PACKAGING_STATE;
    /**
     * The downloaded status
     *
     * @generated from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;
     */
    isDownloaded: DOWNLOADED_STATUS;
    constructor(data?: PartialMessage<PackagingsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsServiceFilterReq;
    static equals(a: PackagingsServiceFilterReq | PlainMessage<PackagingsServiceFilterReq> | undefined, b: PackagingsServiceFilterReq | PlainMessage<PackagingsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.PackagingsServiceSearchAllReq
 */
export declare class PackagingsServiceSearchAllReq extends Message<PackagingsServiceSearchAllReq> {
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
     * @generated from field: scanswift.PACKAGING_SORT_KEY sort_key = 5;
     */
    sortKey: PACKAGING_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * UUID of the location
     *
     * @generated from field: string location_uuid = 7;
     */
    locationUuid: string;
    /**
     * UUID of the zone
     *
     * @generated from field: string zone_uuid = 8;
     */
    zoneUuid: string;
    /**
     * Optional UUID of the associated product
     *
     * @generated from field: string product_uuid = 9;
     */
    productUuid: string;
    /**
     * Optional UUID of the associated batch
     *
     * @generated from field: string batch_uuid = 10;
     */
    batchUuid: string;
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
    constructor(data?: PartialMessage<PackagingsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.PackagingsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsServiceSearchAllReq;
    static equals(a: PackagingsServiceSearchAllReq | PlainMessage<PackagingsServiceSearchAllReq> | undefined, b: PackagingsServiceSearchAllReq | PlainMessage<PackagingsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=packagings_pb.d.ts.map