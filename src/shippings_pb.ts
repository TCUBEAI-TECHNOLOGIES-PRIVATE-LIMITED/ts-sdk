// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file shippings.proto (package scanswift, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { DOWNLOADED_STATUS, Metadata, SORT_ORDER } from "./base_pb.js";
import { Location } from "./locations_pb.js";
import { Entity } from "./entities_pb.js";

/**
 *
 * Describes the available states for a shipping
 *
 * @generated from enum scanswift.SHIPPING_STATE
 */
export enum SHIPPING_STATE {
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
  SHIPPING_STATE_CLOSED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SHIPPING_STATE)
proto3.util.setEnumType(SHIPPING_STATE, "scanswift.SHIPPING_STATE", [
  { no: 0, name: "SHIPPING_STATE_ANY_UNSPECIFIED" },
  { no: 1, name: "SHIPPING_STATE_OPEN" },
  { no: 2, name: "SHIPPING_STATE_CLOSED" },
]);

/**
 *
 * Stores the possible values for encoding type
 *
 * @generated from enum scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING
 */
export enum PRINT_ENCODING_TYPE_FOR_SHIPPING {
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
  PRINT_ENCODING_TYPE_FOR_SHIPPING_ALL = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PRINT_ENCODING_TYPE_FOR_SHIPPING)
proto3.util.setEnumType(PRINT_ENCODING_TYPE_FOR_SHIPPING, "scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING", [
  { no: 0, name: "PRINT_ENCODING_TYPE_FOR_SHIPPING_HRI_UNSPECIFIED" },
  { no: 1, name: "PRINT_ENCODING_TYPE_FOR_SHIPPING_URI" },
  { no: 2, name: "PRINT_ENCODING_TYPE_FOR_SHIPPING_ALL" },
]);

/**
 *
 * Describes the available sort keys for retrieving shippings
 *
 * @generated from enum scanswift.SHIPPING_SORT_KEY
 */
export enum SHIPPING_SORT_KEY {
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
  SHIPPING_SORT_KEY_CODE = 11,
}
// Retrieve enum metadata with: proto3.getEnumType(SHIPPING_SORT_KEY)
proto3.util.setEnumType(SHIPPING_SORT_KEY, "scanswift.SHIPPING_SORT_KEY", [
  { no: 0, name: "SHIPPING_SORT_KEY_ID_UNSPECIFIED" },
  { no: 1, name: "SHIPPING_SORT_KEY_CREATED_AT" },
  { no: 2, name: "SHIPPING_SORT_KEY_MODIFIED_AT" },
  { no: 10, name: "SHIPPING_SORT_KEY_NAME" },
  { no: 11, name: "SHIPPING_SORT_KEY_CODE" },
]);

/**
 *
 * Describes the necessary data structure during creation of a shipping
 *
 * @generated from message scanswift.ShippingsServiceCreateRequest
 */
export class ShippingsServiceCreateRequest extends Message<ShippingsServiceCreateRequest> {
  /**
   * Stores any comment that the user might add during this operation
   *
   * @generated from field: string user_comment = 1;
   */
  userComment = "";

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 2;
   */
  entityUuid = "";

  /**
   * UUID of the customer
   *
   * @generated from field: string customer_uuid = 7;
   */
  customerUuid = "";

  /**
   * UUID of the location
   *
   * @generated from field: string location_uuid = 8;
   */
  locationUuid = "";

  /**
   * UUID of the zone
   *
   * @generated from field: string zone_uuid = 9;
   */
  zoneUuid = "";

  /**
   * The name of the shipping
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * Description of the shipping
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The maximum number of items that can be added to a shipping record, with 0 denoting no limit
   *
   * @generated from field: int64 max_count = 13;
   */
  maxCount = protoInt64.zero;

  /**
   * The latitude of the location where this shipping was created
   *
   * @generated from field: double latitude = 14;
   */
  latitude = 0;

  /**
   * The longitude of the location where this shipping was created
   *
   * @generated from field: double longitude = 15;
   */
  longitude = 0;

  /**
   * The type of encoding
   *
   * @generated from field: scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING print_encoding_type = 16;
   */
  printEncodingType = PRINT_ENCODING_TYPE_FOR_SHIPPING.PRINT_ENCODING_TYPE_FOR_SHIPPING_HRI_UNSPECIFIED;

  constructor(data?: PartialMessage<ShippingsServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "customer_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "max_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 15, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 16, name: "print_encoding_type", kind: "enum", T: proto3.getEnumType(PRINT_ENCODING_TYPE_FOR_SHIPPING) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceCreateRequest {
    return new ShippingsServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceCreateRequest {
    return new ShippingsServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceCreateRequest {
    return new ShippingsServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsServiceCreateRequest | PlainMessage<ShippingsServiceCreateRequest> | undefined, b: ShippingsServiceCreateRequest | PlainMessage<ShippingsServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(ShippingsServiceCreateRequest, a, b);
  }
}

/**
 *
 * Describes the data structure of each shipping on the platform
 *
 * @generated from message scanswift.Shipping
 */
export class Shipping extends Message<Shipping> {
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
  entityUuid = "";

  /**
   * UUID of the customer
   *
   * @generated from field: string customer_uuid = 7;
   */
  customerUuid = "";

  /**
   * UUID of the location
   *
   * @generated from field: string location_uuid = 8;
   */
  locationUuid = "";

  /**
   * UUID of the zone
   *
   * @generated from field: string zone_uuid = 9;
   */
  zoneUuid = "";

  /**
   * The name of the shipping
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * Code of the shipping
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * Description of the shipping
   *
   * @generated from field: string description = 12;
   */
  description = "";

  /**
   * The maximum number of items that can be added to a shipping record, with 0 denoting no limit
   *
   * @generated from field: int64 max_count = 13;
   */
  maxCount = protoInt64.zero;

  /**
   * The latitude of the location where this shipping was created
   *
   * @generated from field: double latitude = 14;
   */
  latitude = 0;

  /**
   * The longitude of the location where this shipping was created
   *
   * @generated from field: double longitude = 15;
   */
  longitude = 0;

  /**
   * The type of encoding
   *
   * @generated from field: scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING print_encoding_type = 16;
   */
  printEncodingType = PRINT_ENCODING_TYPE_FOR_SHIPPING.PRINT_ENCODING_TYPE_FOR_SHIPPING_HRI_UNSPECIFIED;

  /**
   * The state of the shipping
   *
   * @generated from field: scanswift.SHIPPING_STATE state = 20;
   */
  state = SHIPPING_STATE.SHIPPING_STATE_ANY_UNSPECIFIED;

  /**
   * Stores if the shipping has already been downloaded
   *
   * @generated from field: bool is_downloaded = 30;
   */
  isDownloaded = false;

  /**
   * Stores the number of times that this shipping has already been downloaded
   *
   * @generated from field: int64 download_count = 31;
   */
  downloadCount = protoInt64.zero;

  constructor(data?: PartialMessage<Shipping>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.Shipping";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "customer_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "max_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 15, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 16, name: "print_encoding_type", kind: "enum", T: proto3.getEnumType(PRINT_ENCODING_TYPE_FOR_SHIPPING) },
    { no: 20, name: "state", kind: "enum", T: proto3.getEnumType(SHIPPING_STATE) },
    { no: 30, name: "is_downloaded", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 31, name: "download_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shipping {
    return new Shipping().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shipping {
    return new Shipping().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shipping {
    return new Shipping().fromJsonString(jsonString, options);
  }

  static equals(a: Shipping | PlainMessage<Shipping> | undefined, b: Shipping | PlainMessage<Shipping> | undefined): boolean {
    return proto3.util.equals(Shipping, a, b);
  }
}

/**
 *
 * Describes the data structure of each shipping with its relevant metadata
 *
 * @generated from message scanswift.ShippingMetadata
 */
export class ShippingMetadata extends Message<ShippingMetadata> {
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
  qrString = "";

  /**
   * Stores the number of packagings that have already been added to the shipping
   *
   * @generated from field: int64 added_packagings_count = 10;
   */
  addedPackagingsCount = protoInt64.zero;

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

  constructor(data?: PartialMessage<ShippingMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shipping", kind: "message", T: Shipping },
    { no: 3, name: "qr_string", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "added_packagings_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 30, name: "location", kind: "message", T: Location },
    { no: 40, name: "entity", kind: "message", T: Entity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingMetadata {
    return new ShippingMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingMetadata {
    return new ShippingMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingMetadata {
    return new ShippingMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingMetadata | PlainMessage<ShippingMetadata> | undefined, b: ShippingMetadata | PlainMessage<ShippingMetadata> | undefined): boolean {
    return proto3.util.equals(ShippingMetadata, a, b);
  }
}

/**
 *
 * Describes the data structure that stores a list of shippings
 *
 * @generated from message scanswift.ShippingsList
 */
export class ShippingsList extends Message<ShippingsList> {
  /**
   * List of shippings
   *
   * @generated from field: repeated scanswift.Shipping list = 1;
   */
  list: Shipping[] = [];

  constructor(data?: PartialMessage<ShippingsList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Shipping, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsList {
    return new ShippingsList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsList {
    return new ShippingsList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsList {
    return new ShippingsList().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsList | PlainMessage<ShippingsList> | undefined, b: ShippingsList | PlainMessage<ShippingsList> | undefined): boolean {
    return proto3.util.equals(ShippingsList, a, b);
  }
}

/**
 *
 * Describes the necessary data structure during addition of multiple packagings to a shipping
 *
 * @generated from message scanswift.ShippingsServiceAddPackagingsRequest
 */
export class ShippingsServiceAddPackagingsRequest extends Message<ShippingsServiceAddPackagingsRequest> {
  /**
   * Stores any comment that the user might add during this operation
   *
   * @generated from field: string user_comment = 1;
   */
  userComment = "";

  /**
   * UUID of the shipping
   *
   * @generated from field: string shipping_uuid = 10;
   */
  shippingUuid = "";

  /**
   * The latitude of the location where this shipping was created
   *
   * @generated from field: double latitude = 11;
   */
  latitude = 0;

  /**
   * The longitude of the location where this shipping was created
   *
   * @generated from field: double longitude = 12;
   */
  longitude = 0;

  /**
   * List of packagings
   *
   * @generated from field: repeated scanswift.ShippingsServiceAddPackagingRequest list = 13;
   */
  list: ShippingsServiceAddPackagingRequest[] = [];

  constructor(data?: PartialMessage<ShippingsServiceAddPackagingsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsServiceAddPackagingsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "shipping_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 12, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 13, name: "list", kind: "message", T: ShippingsServiceAddPackagingRequest, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceAddPackagingsRequest {
    return new ShippingsServiceAddPackagingsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingsRequest {
    return new ShippingsServiceAddPackagingsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingsRequest {
    return new ShippingsServiceAddPackagingsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsServiceAddPackagingsRequest | PlainMessage<ShippingsServiceAddPackagingsRequest> | undefined, b: ShippingsServiceAddPackagingsRequest | PlainMessage<ShippingsServiceAddPackagingsRequest> | undefined): boolean {
    return proto3.util.equals(ShippingsServiceAddPackagingsRequest, a, b);
  }
}

/**
 *
 * Describes the necessary data structure during addition of a packaging to a shipping
 *
 * @generated from message scanswift.ShippingsServiceAddPackagingRequest
 */
export class ShippingsServiceAddPackagingRequest extends Message<ShippingsServiceAddPackagingRequest> {
  /**
   * UUID of the packaging
   *
   * @generated from field: string packaging_uuid = 11;
   */
  packagingUuid = "";

  constructor(data?: PartialMessage<ShippingsServiceAddPackagingRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsServiceAddPackagingRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 11, name: "packaging_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceAddPackagingRequest {
    return new ShippingsServiceAddPackagingRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingRequest {
    return new ShippingsServiceAddPackagingRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceAddPackagingRequest {
    return new ShippingsServiceAddPackagingRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsServiceAddPackagingRequest | PlainMessage<ShippingsServiceAddPackagingRequest> | undefined, b: ShippingsServiceAddPackagingRequest | PlainMessage<ShippingsServiceAddPackagingRequest> | undefined): boolean {
    return proto3.util.equals(ShippingsServiceAddPackagingRequest, a, b);
  }
}

/**
 *
 * Describes the data structure of each shipping packaging
 *
 * @generated from message scanswift.ShippingPackaging
 */
export class ShippingPackaging extends Message<ShippingPackaging> {
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
  entityUuid = "";

  /**
   * UUID of the customer
   *
   * @generated from field: string customer_uuid = 7;
   */
  customerUuid = "";

  /**
   * UUID of the location
   *
   * @generated from field: string location_uuid = 8;
   */
  locationUuid = "";

  /**
   * UUID of the zone
   *
   * @generated from field: string zone_uuid = 9;
   */
  zoneUuid = "";

  /**
   * UUID of the shipping
   *
   * @generated from field: string shipping_uuid = 10;
   */
  shippingUuid = "";

  /**
   * UUID of the packaging
   *
   * @generated from field: string packaging_uuid = 11;
   */
  packagingUuid = "";

  /**
   * The latitude of the location where this shipping was created
   *
   * @generated from field: double latitude = 12;
   */
  latitude = 0;

  /**
   * The longitude of the location where this shipping was created
   *
   * @generated from field: double longitude = 13;
   */
  longitude = 0;

  constructor(data?: PartialMessage<ShippingPackaging>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingPackaging";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "customer_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "shipping_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "packaging_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 13, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingPackaging {
    return new ShippingPackaging().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingPackaging {
    return new ShippingPackaging().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingPackaging {
    return new ShippingPackaging().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingPackaging | PlainMessage<ShippingPackaging> | undefined, b: ShippingPackaging | PlainMessage<ShippingPackaging> | undefined): boolean {
    return proto3.util.equals(ShippingPackaging, a, b);
  }
}

/**
 *
 * Describes the data structure that stores a list of shipping packagings
 *
 * @generated from message scanswift.ShippingsPackagingsList
 */
export class ShippingsPackagingsList extends Message<ShippingsPackagingsList> {
  /**
   * List of packagings that are associated with the shipping
   *
   * @generated from field: repeated scanswift.ShippingPackaging list = 1;
   */
  list: ShippingPackaging[] = [];

  constructor(data?: PartialMessage<ShippingsPackagingsList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsPackagingsList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: ShippingPackaging, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsPackagingsList {
    return new ShippingsPackagingsList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsPackagingsList {
    return new ShippingsPackagingsList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsPackagingsList {
    return new ShippingsPackagingsList().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsPackagingsList | PlainMessage<ShippingsPackagingsList> | undefined, b: ShippingsPackagingsList | PlainMessage<ShippingsPackagingsList> | undefined): boolean {
    return proto3.util.equals(ShippingsPackagingsList, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.ShippingsServicePaginationReq
 */
export class ShippingsServicePaginationReq extends Message<ShippingsServicePaginationReq> {
  /**
   * If true, then returns only active records. If false, then returns only inactive records
   *
   * @generated from field: bool is_active = 1;
   */
  isActive = false;

  /**
   * The number of records that need to be sent in the response
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * The number that need to be offset by before fetching the records
   *
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  /**
   * The sort order that is to be used to fetch the pagination response
   *
   * @generated from field: scanswift.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;
   */
  sortKey = SHIPPING_SORT_KEY.SHIPPING_SORT_KEY_ID_UNSPECIFIED;

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<ShippingsServicePaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SHIPPING_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServicePaginationReq {
    return new ShippingsServicePaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServicePaginationReq {
    return new ShippingsServicePaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServicePaginationReq {
    return new ShippingsServicePaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsServicePaginationReq | PlainMessage<ShippingsServicePaginationReq> | undefined, b: ShippingsServicePaginationReq | PlainMessage<ShippingsServicePaginationReq> | undefined): boolean {
    return proto3.util.equals(ShippingsServicePaginationReq, a, b);
  }
}

/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.ShippingPaginationResp
 */
export class ShippingPaginationResp extends Message<ShippingPaginationResp> {
  /**
   * The number of records in this payload
   *
   * @generated from field: int64 count = 1;
   */
  count = protoInt64.zero;

  /**
   * The total number of records that are available
   *
   * @generated from field: int64 total = 2;
   */
  total = protoInt64.zero;

  /**
   * The list of records
   *
   * @generated from field: repeated scanswift.Shipping payload = 3;
   */
  payload: Shipping[] = [];

  constructor(data?: PartialMessage<ShippingPaginationResp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingPaginationResp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "payload", kind: "message", T: Shipping, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingPaginationResp {
    return new ShippingPaginationResp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingPaginationResp {
    return new ShippingPaginationResp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingPaginationResp {
    return new ShippingPaginationResp().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingPaginationResp | PlainMessage<ShippingPaginationResp> | undefined, b: ShippingPaginationResp | PlainMessage<ShippingPaginationResp> | undefined): boolean {
    return proto3.util.equals(ShippingPaginationResp, a, b);
  }
}

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.ShippingsServiceFilterReq
 */
export class ShippingsServiceFilterReq extends Message<ShippingsServiceFilterReq> {
  /**
   * If true, then returns only active records. If false, then returns only inactive records
   *
   * @generated from field: bool is_active = 1;
   */
  isActive = false;

  /**
   * The number of records that need to be sent in the response. Returns all records if it is set to -1
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * The number that need to be offset by before fetching the records
   *
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  /**
   * The sort order that is to be used to fetch the pagination response
   *
   * @generated from field: scanswift.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;
   */
  sortKey = SHIPPING_SORT_KEY.SHIPPING_SORT_KEY_ID_UNSPECIFIED;

  /**
   * The minimum timestamp that needs to be considered to filter by creation
   *
   * @generated from field: int64 creation_timestamp_start = 6;
   */
  creationTimestampStart = protoInt64.zero;

  /**
   * The maximum timestamp that needs to be considered to filter by creation
   *
   * @generated from field: int64 creation_timestamp_end = 7;
   */
  creationTimestampEnd = protoInt64.zero;

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 8;
   */
  entityUuid = "";

  /**
   * UUID of the location
   *
   * @generated from field: string location_uuid = 9;
   */
  locationUuid = "";

  /**
   * UUID of the zone
   *
   * @generated from field: string zone_uuid = 10;
   */
  zoneUuid = "";

  /**
   * UUID of the customer
   *
   * @generated from field: string customer_uuid = 11;
   */
  customerUuid = "";

  /**
   * The name of the shipping
   *
   * @generated from field: string name = 20;
   */
  name = "";

  /**
   * Code of the shipping
   *
   * @generated from field: string code = 21;
   */
  code = "";

  /**
   * The state of the shipping
   *
   * @generated from field: scanswift.SHIPPING_STATE state = 30;
   */
  state = SHIPPING_STATE.SHIPPING_STATE_ANY_UNSPECIFIED;

  /**
   * The downloaded status
   *
   * @generated from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;
   */
  isDownloaded = DOWNLOADED_STATUS.DOWNLOADED_STATUS_ANY_UNSPECIFIED;

  constructor(data?: PartialMessage<ShippingsServiceFilterReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SHIPPING_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "customer_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "state", kind: "enum", T: proto3.getEnumType(SHIPPING_STATE) },
    { no: 40, name: "is_downloaded", kind: "enum", T: proto3.getEnumType(DOWNLOADED_STATUS) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceFilterReq {
    return new ShippingsServiceFilterReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceFilterReq {
    return new ShippingsServiceFilterReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceFilterReq {
    return new ShippingsServiceFilterReq().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsServiceFilterReq | PlainMessage<ShippingsServiceFilterReq> | undefined, b: ShippingsServiceFilterReq | PlainMessage<ShippingsServiceFilterReq> | undefined): boolean {
    return proto3.util.equals(ShippingsServiceFilterReq, a, b);
  }
}

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.ShippingsServiceSearchAllReq
 */
export class ShippingsServiceSearchAllReq extends Message<ShippingsServiceSearchAllReq> {
  /**
   * If true, then returns only active records. If false, then returns only inactive records
   *
   * @generated from field: bool is_active = 1;
   */
  isActive = false;

  /**
   * The number of records that need to be sent in the response. Returns all records if it is set to -1
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * The number that need to be offset by before fetching the records
   *
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  /**
   * The sort order that is to be used to fetch the pagination response
   *
   * @generated from field: scanswift.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;
   */
  sortKey = SHIPPING_SORT_KEY.SHIPPING_SORT_KEY_ID_UNSPECIFIED;

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  /**
   * UUID of the location
   *
   * @generated from field: string location_uuid = 7;
   */
  locationUuid = "";

  /**
   * UUID of the zone
   *
   * @generated from field: string zone_uuid = 8;
   */
  zoneUuid = "";

  /**
   * UUID of the customer
   *
   * @generated from field: string customer_uuid = 9;
   */
  customerUuid = "";

  /**
   * Describes the key with which the search operation needs to be performed
   *
   * @generated from field: string search_key = 11;
   */
  searchKey = "";

  /**
   * The downloaded status
   *
   * @generated from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;
   */
  isDownloaded = DOWNLOADED_STATUS.DOWNLOADED_STATUS_ANY_UNSPECIFIED;

  constructor(data?: PartialMessage<ShippingsServiceSearchAllReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.ShippingsServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(SHIPPING_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "customer_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 40, name: "is_downloaded", kind: "enum", T: proto3.getEnumType(DOWNLOADED_STATUS) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShippingsServiceSearchAllReq {
    return new ShippingsServiceSearchAllReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShippingsServiceSearchAllReq {
    return new ShippingsServiceSearchAllReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShippingsServiceSearchAllReq {
    return new ShippingsServiceSearchAllReq().fromJsonString(jsonString, options);
  }

  static equals(a: ShippingsServiceSearchAllReq | PlainMessage<ShippingsServiceSearchAllReq> | undefined, b: ShippingsServiceSearchAllReq | PlainMessage<ShippingsServiceSearchAllReq> | undefined): boolean {
    return proto3.util.equals(ShippingsServiceSearchAllReq, a, b);
  }
}

