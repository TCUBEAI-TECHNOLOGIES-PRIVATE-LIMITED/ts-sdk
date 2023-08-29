import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata } from "./base_pb.js";
/**
 *
 * Stores the possible values for inferred from
 *
 * @generated from enum tcube.INFERRED_FROM
 */
export declare enum INFERRED_FROM {
    /**
     * Inferred from IP address
     *
     * @generated from enum value: INFERRED_FROM_IP_UNSPECIFIED = 0;
     */
    INFERRED_FROM_IP_UNSPECIFIED = 0,
    /**
     * Inferred from user provided location
     *
     * @generated from enum value: INFERRED_FROM_USER = 1;
     */
    INFERRED_FROM_USER = 1
}
/**
 *
 * Describes the data structure to perform the create scan operation using the given IP address for the serial/packaging/shipping denoted by resource_uuid
 *
 * @generated from message tcube.ScansServiceCreateScanFromIPRequest
 */
export declare class ScansServiceCreateScanFromIPRequest extends Message<ScansServiceCreateScanFromIPRequest> {
    /**
     * The UUID of the serial or packaging or shipping record
     *
     * @generated from field: string resource_uuid = 10;
     */
    resourceUuid: string;
    /**
     * The IP address using which the location information needs to be determined
     *
     * @generated from field: string ip = 11;
     */
    ip: string;
    constructor(data?: PartialMessage<ScansServiceCreateScanFromIPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServiceCreateScanFromIPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServiceCreateScanFromIPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServiceCreateScanFromIPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServiceCreateScanFromIPRequest;
    static equals(a: ScansServiceCreateScanFromIPRequest | PlainMessage<ScansServiceCreateScanFromIPRequest> | undefined, b: ScansServiceCreateScanFromIPRequest | PlainMessage<ScansServiceCreateScanFromIPRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the create operation on a serial scan
 *
 * @generated from message tcube.ScansServiceSerialScanCreateRequest
 */
export declare class ScansServiceSerialScanCreateRequest extends Message<ScansServiceSerialScanCreateRequest> {
    /**
     * The UUID of the serial that needs to be updated
     *
     * @generated from field: string serial_uuid = 10;
     */
    serialUuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServiceSerialScanCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServiceSerialScanCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServiceSerialScanCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServiceSerialScanCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServiceSerialScanCreateRequest;
    static equals(a: ScansServiceSerialScanCreateRequest | PlainMessage<ScansServiceSerialScanCreateRequest> | undefined, b: ScansServiceSerialScanCreateRequest | PlainMessage<ScansServiceSerialScanCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update operation on a serial scan
 *
 * @generated from message tcube.ScansServiceSerialScanUpdateRequest
 */
export declare class ScansServiceSerialScanUpdateRequest extends Message<ScansServiceSerialScanUpdateRequest> {
    /**
     * The UUID of the resource that needs to be updated
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServiceSerialScanUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServiceSerialScanUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServiceSerialScanUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServiceSerialScanUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServiceSerialScanUpdateRequest;
    static equals(a: ScansServiceSerialScanUpdateRequest | PlainMessage<ScansServiceSerialScanUpdateRequest> | undefined, b: ScansServiceSerialScanUpdateRequest | PlainMessage<ScansServiceSerialScanUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the serial scan message
 *
 * @generated from message tcube.ScansServiceSerialScan
 */
export declare class ScansServiceSerialScan extends Message<ScansServiceSerialScan> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The UUID of the serial
     *
     * @generated from field: string serial_uuid = 10;
     */
    serialUuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServiceSerialScan>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServiceSerialScan";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServiceSerialScan;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServiceSerialScan;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServiceSerialScan;
    static equals(a: ScansServiceSerialScan | PlainMessage<ScansServiceSerialScan> | undefined, b: ScansServiceSerialScan | PlainMessage<ScansServiceSerialScan> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of serial scans
 *
 * @generated from message tcube.SerialsScansList
 */
export declare class SerialsScansList extends Message<SerialsScansList> {
    /**
     * List of serial scans
     *
     * @generated from field: repeated tcube.ScansServiceSerialScan list = 1;
     */
    list: ScansServiceSerialScan[];
    constructor(data?: PartialMessage<SerialsScansList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialsScansList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsScansList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsScansList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsScansList;
    static equals(a: SerialsScansList | PlainMessage<SerialsScansList> | undefined, b: SerialsScansList | PlainMessage<SerialsScansList> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the create operation on a packaging scan
 *
 * @generated from message tcube.ScansServicePackagingScanCreateRequest
 */
export declare class ScansServicePackagingScanCreateRequest extends Message<ScansServicePackagingScanCreateRequest> {
    /**
     * The UUID of the packaging that needs to be updated
     *
     * @generated from field: string packaging_uuid = 10;
     */
    packagingUuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServicePackagingScanCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServicePackagingScanCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServicePackagingScanCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServicePackagingScanCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServicePackagingScanCreateRequest;
    static equals(a: ScansServicePackagingScanCreateRequest | PlainMessage<ScansServicePackagingScanCreateRequest> | undefined, b: ScansServicePackagingScanCreateRequest | PlainMessage<ScansServicePackagingScanCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update operation on a packaging scan
 *
 * @generated from message tcube.ScansServicePackagingScanUpdateRequest
 */
export declare class ScansServicePackagingScanUpdateRequest extends Message<ScansServicePackagingScanUpdateRequest> {
    /**
     * The UUID of the resource that needs to be updated
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServicePackagingScanUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServicePackagingScanUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServicePackagingScanUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServicePackagingScanUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServicePackagingScanUpdateRequest;
    static equals(a: ScansServicePackagingScanUpdateRequest | PlainMessage<ScansServicePackagingScanUpdateRequest> | undefined, b: ScansServicePackagingScanUpdateRequest | PlainMessage<ScansServicePackagingScanUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the packaging scan message
 *
 * @generated from message tcube.ScansServicePackagingScan
 */
export declare class ScansServicePackagingScan extends Message<ScansServicePackagingScan> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The UUID of the packaging
     *
     * @generated from field: string packaging_uuid = 10;
     */
    packagingUuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServicePackagingScan>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServicePackagingScan";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServicePackagingScan;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServicePackagingScan;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServicePackagingScan;
    static equals(a: ScansServicePackagingScan | PlainMessage<ScansServicePackagingScan> | undefined, b: ScansServicePackagingScan | PlainMessage<ScansServicePackagingScan> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of packaging scans
 *
 * @generated from message tcube.PackagingsScansList
 */
export declare class PackagingsScansList extends Message<PackagingsScansList> {
    /**
     * List of packaging scans
     *
     * @generated from field: repeated tcube.ScansServicePackagingScan list = 1;
     */
    list: ScansServicePackagingScan[];
    constructor(data?: PartialMessage<PackagingsScansList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PackagingsScansList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackagingsScansList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackagingsScansList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackagingsScansList;
    static equals(a: PackagingsScansList | PlainMessage<PackagingsScansList> | undefined, b: PackagingsScansList | PlainMessage<PackagingsScansList> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the create operation on a shipping scan
 *
 * @generated from message tcube.ScansServiceShippingScanCreateRequest
 */
export declare class ScansServiceShippingScanCreateRequest extends Message<ScansServiceShippingScanCreateRequest> {
    /**
     * The UUID of the shipping that needs to be updated
     *
     * @generated from field: string shipping_uuid = 10;
     */
    shippingUuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServiceShippingScanCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServiceShippingScanCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServiceShippingScanCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServiceShippingScanCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServiceShippingScanCreateRequest;
    static equals(a: ScansServiceShippingScanCreateRequest | PlainMessage<ScansServiceShippingScanCreateRequest> | undefined, b: ScansServiceShippingScanCreateRequest | PlainMessage<ScansServiceShippingScanCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update operation on a shipping scan
 *
 * @generated from message tcube.ScansServiceShippingScanUpdateRequest
 */
export declare class ScansServiceShippingScanUpdateRequest extends Message<ScansServiceShippingScanUpdateRequest> {
    /**
     * The UUID of the resource that needs to be updated
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServiceShippingScanUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServiceShippingScanUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServiceShippingScanUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServiceShippingScanUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServiceShippingScanUpdateRequest;
    static equals(a: ScansServiceShippingScanUpdateRequest | PlainMessage<ScansServiceShippingScanUpdateRequest> | undefined, b: ScansServiceShippingScanUpdateRequest | PlainMessage<ScansServiceShippingScanUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the shipping scan message
 *
 * @generated from message tcube.ScansServiceShippingScan
 */
export declare class ScansServiceShippingScan extends Message<ScansServiceShippingScan> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The UUID of the shipping
     *
     * @generated from field: string shipping_uuid = 10;
     */
    shippingUuid: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 11;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 12;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 13;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<ScansServiceShippingScan>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ScansServiceShippingScan";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScansServiceShippingScan;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScansServiceShippingScan;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScansServiceShippingScan;
    static equals(a: ScansServiceShippingScan | PlainMessage<ScansServiceShippingScan> | undefined, b: ScansServiceShippingScan | PlainMessage<ScansServiceShippingScan> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of shipping scans
 *
 * @generated from message tcube.ShippingsScansList
 */
export declare class ShippingsScansList extends Message<ShippingsScansList> {
    /**
     * List of shipping scans
     *
     * @generated from field: repeated tcube.ScansServiceShippingScan list = 1;
     */
    list: ScansServiceShippingScan[];
    constructor(data?: PartialMessage<ShippingsScansList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ShippingsScansList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsScansList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsScansList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsScansList;
    static equals(a: ShippingsScansList | PlainMessage<ShippingsScansList> | undefined, b: ShippingsScansList | PlainMessage<ShippingsScansList> | undefined): boolean;
}
//# sourceMappingURL=scans_pb.d.ts.map