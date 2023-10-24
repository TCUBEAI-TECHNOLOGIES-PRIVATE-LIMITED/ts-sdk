import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DOWNLOADED_STATUS, Metadata, SORT_ORDER } from "./base_pb.js";
import { Location } from "./locations_pb.js";
import { Entity } from "./entities_pb.js";
/**
 *
 * Describes the available states for a shipping
 *
 * @generated from enum scanswift.SHIPPING_STATE
 */
export declare enum SHIPPING_STATE {
    /**
     * Shipping is any (only useful for filter requests)
     *
     * @generated from enum value: SHIPPING_STATE_ANY_UNSPECIFIED = 0;
     */
    SHIPPING_STATE_ANY_UNSPECIFIED = 0,
    /**
     * Shipping is open
     *
     * @generated from enum value: SHIPPING_STATE_OPEN = 1;
     */
    SHIPPING_STATE_OPEN = 1,
    /**
     * Shipping is closed
     *
     * @generated from enum value: SHIPPING_STATE_CLOSED = 2;
     */
    SHIPPING_STATE_CLOSED = 2
}
/**
 *
 * Stores the possible values for encoding type
 *
 * @generated from enum scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING
 */
export declare enum PRINT_ENCODING_TYPE_FOR_SHIPPING {
    /**
     * Generate the code as HRI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_SHIPPING_HRI_UNSPECIFIED = 0;
     */
    PRINT_ENCODING_TYPE_FOR_SHIPPING_HRI_UNSPECIFIED = 0,
    /**
     * Generate the code as URI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_SHIPPING_URI = 1;
     */
    PRINT_ENCODING_TYPE_FOR_SHIPPING_URI = 1,
    /**
     * Generate the code in all the available forms
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_SHIPPING_ALL = 2;
     */
    PRINT_ENCODING_TYPE_FOR_SHIPPING_ALL = 2
}
/**
 *
 * Describes the available sort keys for retrieving shippings
 *
 * @generated from enum scanswift.SHIPPING_SORT_KEY
 */
export declare enum SHIPPING_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SHIPPING_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SHIPPING_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SHIPPING_SORT_KEY_CREATED_AT = 1;
     */
    SHIPPING_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SHIPPING_SORT_KEY_MODIFIED_AT = 2;
     */
    SHIPPING_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: SHIPPING_SORT_KEY_NAME = 10;
     */
    SHIPPING_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: SHIPPING_SORT_KEY_CODE = 11;
     */
    SHIPPING_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a shipping
 *
 * @generated from message scanswift.ShippingsServiceCreateRequest
 */
export declare class ShippingsServiceCreateRequest extends Message<ShippingsServiceCreateRequest> {
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
     * UUID of the customer
     *
     * @generated from field: string customer_uuid = 7;
     */
    customerUuid: string;
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
     * The name of the shipping
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Description of the shipping
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The maximum number of items that can be added to a shipping record, with 0 denoting no limit
     *
     * @generated from field: int64 max_count = 13;
     */
    maxCount: bigint;
    /**
     * The latitude of the location where this shipping was created
     *
     * @generated from field: double latitude = 14;
     */
    latitude: number;
    /**
     * The longitude of the location where this shipping was created
     *
     * @generated from field: double longitude = 15;
     */
    longitude: number;
    /**
     * The type of encoding
     *
     * @generated from field: scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING print_encoding_type = 16;
     */
    printEncodingType: PRINT_ENCODING_TYPE_FOR_SHIPPING;
    constructor(data?: PartialMessage<ShippingsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceCreateRequest;
    static equals(a: ShippingsServiceCreateRequest | PlainMessage<ShippingsServiceCreateRequest> | undefined, b: ShippingsServiceCreateRequest | PlainMessage<ShippingsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each shipping on the platform
 *
 * @generated from message scanswift.Shipping
 */
export declare class Shipping extends Message<Shipping> {
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
     * UUID of the customer
     *
     * @generated from field: string customer_uuid = 7;
     */
    customerUuid: string;
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
     * The name of the shipping
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the shipping
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the shipping
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The maximum number of items that can be added to a shipping record, with 0 denoting no limit
     *
     * @generated from field: int64 max_count = 13;
     */
    maxCount: bigint;
    /**
     * The latitude of the location where this shipping was created
     *
     * @generated from field: double latitude = 14;
     */
    latitude: number;
    /**
     * The longitude of the location where this shipping was created
     *
     * @generated from field: double longitude = 15;
     */
    longitude: number;
    /**
     * The type of encoding
     *
     * @generated from field: scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING print_encoding_type = 16;
     */
    printEncodingType: PRINT_ENCODING_TYPE_FOR_SHIPPING;
    /**
     * The state of the shipping
     *
     * @generated from field: scanswift.SHIPPING_STATE state = 20;
     */
    state: SHIPPING_STATE;
    /**
     * Stores if the shipping has already been downloaded
     *
     * @generated from field: bool is_downloaded = 30;
     */
    isDownloaded: boolean;
    /**
     * Stores the number of times that this shipping has already been downloaded
     *
     * @generated from field: int64 download_count = 31;
     */
    downloadCount: bigint;
    constructor(data?: PartialMessage<Shipping>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Shipping";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shipping;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shipping;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shipping;
    static equals(a: Shipping | PlainMessage<Shipping> | undefined, b: Shipping | PlainMessage<Shipping> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each shipping with its relevant metadata
 *
 * @generated from message scanswift.ShippingMetadata
 */
export declare class ShippingMetadata extends Message<ShippingMetadata> {
    /**
     * Stores the shipping info
     *
     * @generated from field: scanswift.Shipping shipping = 1;
     */
    shipping?: Shipping;
    /**
     * Stores the string that will be used to generate the QR code
     *
     * @generated from field: string qr_string = 3;
     */
    qrString: string;
    /**
     * Stores the number of packagings that have already been added to the shipping
     *
     * @generated from field: int64 added_packagings_count = 10;
     */
    addedPackagingsCount: bigint;
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
    constructor(data?: PartialMessage<ShippingMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingMetadata;
    static equals(a: ShippingMetadata | PlainMessage<ShippingMetadata> | undefined, b: ShippingMetadata | PlainMessage<ShippingMetadata> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of shippings
 *
 * @generated from message scanswift.ShippingsList
 */
export declare class ShippingsList extends Message<ShippingsList> {
    /**
     * List of shippings
     *
     * @generated from field: repeated scanswift.Shipping list = 1;
     */
    list: Shipping[];
    constructor(data?: PartialMessage<ShippingsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsList;
    static equals(a: ShippingsList | PlainMessage<ShippingsList> | undefined, b: ShippingsList | PlainMessage<ShippingsList> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during addition of multiple packagings to a shipping
 *
 * @generated from message scanswift.ShippingsServiceAddPackagingsRequest
 */
export declare class ShippingsServiceAddPackagingsRequest extends Message<ShippingsServiceAddPackagingsRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * UUID of the shipping
     *
     * @generated from field: string shipping_uuid = 10;
     */
    shippingUuid: string;
    /**
     * The latitude of the location where this shipping was created
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location where this shipping was created
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * List of packagings
     *
     * @generated from field: repeated scanswift.ShippingsServiceAddPackagingRequest list = 13;
     */
    list: ShippingsServiceAddPackagingRequest[];
    constructor(data?: PartialMessage<ShippingsServiceAddPackagingsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsServiceAddPackagingsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceAddPackagingsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingsRequest;
    static equals(a: ShippingsServiceAddPackagingsRequest | PlainMessage<ShippingsServiceAddPackagingsRequest> | undefined, b: ShippingsServiceAddPackagingsRequest | PlainMessage<ShippingsServiceAddPackagingsRequest> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during addition of a packaging to a shipping
 *
 * @generated from message scanswift.ShippingsServiceAddPackagingRequest
 */
export declare class ShippingsServiceAddPackagingRequest extends Message<ShippingsServiceAddPackagingRequest> {
    /**
     * UUID of the packaging
     *
     * @generated from field: string packaging_uuid = 11;
     */
    packagingUuid: string;
    constructor(data?: PartialMessage<ShippingsServiceAddPackagingRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsServiceAddPackagingRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceAddPackagingRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingRequest;
    static equals(a: ShippingsServiceAddPackagingRequest | PlainMessage<ShippingsServiceAddPackagingRequest> | undefined, b: ShippingsServiceAddPackagingRequest | PlainMessage<ShippingsServiceAddPackagingRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each shipping packaging
 *
 * @generated from message scanswift.ShippingPackaging
 */
export declare class ShippingPackaging extends Message<ShippingPackaging> {
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
     * UUID of the customer
     *
     * @generated from field: string customer_uuid = 7;
     */
    customerUuid: string;
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
     * UUID of the shipping
     *
     * @generated from field: string shipping_uuid = 10;
     */
    shippingUuid: string;
    /**
     * UUID of the packaging
     *
     * @generated from field: string packaging_uuid = 11;
     */
    packagingUuid: string;
    /**
     * The latitude of the location where this shipping was created
     *
     * @generated from field: double latitude = 12;
     */
    latitude: number;
    /**
     * The longitude of the location where this shipping was created
     *
     * @generated from field: double longitude = 13;
     */
    longitude: number;
    constructor(data?: PartialMessage<ShippingPackaging>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingPackaging";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingPackaging;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingPackaging;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingPackaging;
    static equals(a: ShippingPackaging | PlainMessage<ShippingPackaging> | undefined, b: ShippingPackaging | PlainMessage<ShippingPackaging> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of shipping packagings
 *
 * @generated from message scanswift.ShippingsPackagingsList
 */
export declare class ShippingsPackagingsList extends Message<ShippingsPackagingsList> {
    /**
     * List of packagings that are associated with the shipping
     *
     * @generated from field: repeated scanswift.ShippingPackaging list = 1;
     */
    list: ShippingPackaging[];
    constructor(data?: PartialMessage<ShippingsPackagingsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsPackagingsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsPackagingsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsPackagingsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsPackagingsList;
    static equals(a: ShippingsPackagingsList | PlainMessage<ShippingsPackagingsList> | undefined, b: ShippingsPackagingsList | PlainMessage<ShippingsPackagingsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.ShippingsServicePaginationReq
 */
export declare class ShippingsServicePaginationReq extends Message<ShippingsServicePaginationReq> {
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
     * @generated from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;
     */
    sortKey: SHIPPING_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ShippingsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServicePaginationReq;
    static equals(a: ShippingsServicePaginationReq | PlainMessage<ShippingsServicePaginationReq> | undefined, b: ShippingsServicePaginationReq | PlainMessage<ShippingsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.ShippingPaginationResp
 */
export declare class ShippingPaginationResp extends Message<ShippingPaginationResp> {
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
     * @generated from field: repeated scanswift.Shipping payload = 3;
     */
    payload: Shipping[];
    constructor(data?: PartialMessage<ShippingPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingPaginationResp;
    static equals(a: ShippingPaginationResp | PlainMessage<ShippingPaginationResp> | undefined, b: ShippingPaginationResp | PlainMessage<ShippingPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.ShippingsServiceFilterReq
 */
export declare class ShippingsServiceFilterReq extends Message<ShippingsServiceFilterReq> {
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
     * @generated from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;
     */
    sortKey: SHIPPING_SORT_KEY;
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
     * UUID of the customer
     *
     * @generated from field: string customer_uuid = 11;
     */
    customerUuid: string;
    /**
     * The name of the shipping
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the shipping
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The state of the shipping
     *
     * @generated from field: scanswift.SHIPPING_STATE state = 30;
     */
    state: SHIPPING_STATE;
    /**
     * The downloaded status
     *
     * @generated from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;
     */
    isDownloaded: DOWNLOADED_STATUS;
    constructor(data?: PartialMessage<ShippingsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceFilterReq;
    static equals(a: ShippingsServiceFilterReq | PlainMessage<ShippingsServiceFilterReq> | undefined, b: ShippingsServiceFilterReq | PlainMessage<ShippingsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.ShippingsServiceSearchAllReq
 */
export declare class ShippingsServiceSearchAllReq extends Message<ShippingsServiceSearchAllReq> {
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
     * @generated from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;
     */
    sortKey: SHIPPING_SORT_KEY;
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
     * UUID of the customer
     *
     * @generated from field: string customer_uuid = 9;
     */
    customerUuid: string;
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
    constructor(data?: PartialMessage<ShippingsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.ShippingsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceSearchAllReq;
    static equals(a: ShippingsServiceSearchAllReq | PlainMessage<ShippingsServiceSearchAllReq> | undefined, b: ShippingsServiceSearchAllReq | PlainMessage<ShippingsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=shippings_pb.d.ts.map