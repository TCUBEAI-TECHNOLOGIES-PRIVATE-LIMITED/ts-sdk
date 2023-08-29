// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file currencies.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";

/**
 *
 * Describes the available sort keys for retrieving currencies
 *
 * @generated from enum tcube.CURRENCY_SORT_KEY
 */
export enum CURRENCY_SORT_KEY {
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: CURRENCY_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  CURRENCY_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: CURRENCY_SORT_KEY_CREATED_AT = 1;
   */
  CURRENCY_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: CURRENCY_SORT_KEY_MODIFIED_AT = 2;
   */
  CURRENCY_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by name
   *
   * @generated from enum value: CURRENCY_SORT_KEY_NAME = 10;
   */
  CURRENCY_SORT_KEY_NAME = 10,

  /**
   * Fetch ordered results by code
   *
   * @generated from enum value: CURRENCY_SORT_KEY_CODE = 11;
   */
  CURRENCY_SORT_KEY_CODE = 11,
}
// Retrieve enum metadata with: proto3.getEnumType(CURRENCY_SORT_KEY)
proto3.util.setEnumType(CURRENCY_SORT_KEY, "tcube.CURRENCY_SORT_KEY", [
  { no: 0, name: "CURRENCY_SORT_KEY_ID_UNSPECIFIED" },
  { no: 1, name: "CURRENCY_SORT_KEY_CREATED_AT" },
  { no: 2, name: "CURRENCY_SORT_KEY_MODIFIED_AT" },
  { no: 10, name: "CURRENCY_SORT_KEY_NAME" },
  { no: 11, name: "CURRENCY_SORT_KEY_CODE" },
]);

/**
 *
 * Describes the necessary data structure during creation of a currency
 *
 * @generated from message tcube.CurrenciesServiceCreateRequest
 */
export class CurrenciesServiceCreateRequest extends Message<CurrenciesServiceCreateRequest> {
  /**
   * Stores any comment that the user might add during this operation
   *
   * @generated from field: string user_comment = 1;
   */
  userComment = "";

  /**
   * The name of the currency
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * Code of the currency
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * Description of the currency
   *
   * @generated from field: string description = 12;
   */
  description = "";

  constructor(data?: PartialMessage<CurrenciesServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.CurrenciesServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceCreateRequest {
    return new CurrenciesServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest {
    return new CurrenciesServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest {
    return new CurrenciesServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined, b: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(CurrenciesServiceCreateRequest, a, b);
  }
}

/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a currency
 *
 * @generated from message tcube.CurrenciesServiceUpdateRequest
 */
export class CurrenciesServiceUpdateRequest extends Message<CurrenciesServiceUpdateRequest> {
  /**
   * Stores any comment that the user might add during this operation
   *
   * @generated from field: string user_comment = 1;
   */
  userComment = "";

  /**
   * The UUID of the resource that needs to be updated
   *
   * @generated from field: string uuid = 2;
   */
  uuid = "";

  /**
   * The name of the currency
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * Code of the currency
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * Description of the currency
   *
   * @generated from field: string description = 12;
   */
  description = "";

  constructor(data?: PartialMessage<CurrenciesServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.CurrenciesServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceUpdateRequest {
    return new CurrenciesServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest {
    return new CurrenciesServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest {
    return new CurrenciesServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined, b: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(CurrenciesServiceUpdateRequest, a, b);
  }
}

/**
 *
 * Describes the data structure of each currency on the platform
 *
 * @generated from message tcube.Currency
 */
export class Currency extends Message<Currency> {
  /**
   * Stores the metadata of this resource
   *
   * @generated from field: tcube.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * The name of the currency
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * Code of the currency
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * Description of the currency
   *
   * @generated from field: string description = 12;
   */
  description = "";

  constructor(data?: PartialMessage<Currency>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.Currency";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Currency {
    return new Currency().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Currency {
    return new Currency().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Currency {
    return new Currency().fromJsonString(jsonString, options);
  }

  static equals(a: Currency | PlainMessage<Currency> | undefined, b: Currency | PlainMessage<Currency> | undefined): boolean {
    return proto3.util.equals(Currency, a, b);
  }
}

/**
 *
 * Describes the data structure that stores a list of currencies
 *
 * @generated from message tcube.CurrenciesList
 */
export class CurrenciesList extends Message<CurrenciesList> {
  /**
   * List of currencies
   *
   * @generated from field: repeated tcube.Currency list = 1;
   */
  list: Currency[] = [];

  constructor(data?: PartialMessage<CurrenciesList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.CurrenciesList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Currency, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesList {
    return new CurrenciesList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesList {
    return new CurrenciesList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesList {
    return new CurrenciesList().fromJsonString(jsonString, options);
  }

  static equals(a: CurrenciesList | PlainMessage<CurrenciesList> | undefined, b: CurrenciesList | PlainMessage<CurrenciesList> | undefined): boolean {
    return proto3.util.equals(CurrenciesList, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.CurrenciesServicePaginationReq
 */
export class CurrenciesServicePaginationReq extends Message<CurrenciesServicePaginationReq> {
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
   * @generated from field: tcube.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: tcube.CURRENCY_SORT_KEY sort_key = 5;
   */
  sortKey = CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED;

  constructor(data?: PartialMessage<CurrenciesServicePaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.CurrenciesServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(CURRENCY_SORT_KEY) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServicePaginationReq {
    return new CurrenciesServicePaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq {
    return new CurrenciesServicePaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq {
    return new CurrenciesServicePaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined, b: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined): boolean {
    return proto3.util.equals(CurrenciesServicePaginationReq, a, b);
  }
}

/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.CurrencyPaginationResp
 */
export class CurrencyPaginationResp extends Message<CurrencyPaginationResp> {
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
   * @generated from field: repeated tcube.Currency payload = 3;
   */
  payload: Currency[] = [];

  constructor(data?: PartialMessage<CurrencyPaginationResp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.CurrencyPaginationResp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "payload", kind: "message", T: Currency, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrencyPaginationResp {
    return new CurrencyPaginationResp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrencyPaginationResp {
    return new CurrencyPaginationResp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrencyPaginationResp {
    return new CurrencyPaginationResp().fromJsonString(jsonString, options);
  }

  static equals(a: CurrencyPaginationResp | PlainMessage<CurrencyPaginationResp> | undefined, b: CurrencyPaginationResp | PlainMessage<CurrencyPaginationResp> | undefined): boolean {
    return proto3.util.equals(CurrencyPaginationResp, a, b);
  }
}

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.CurrenciesServiceFilterReq
 */
export class CurrenciesServiceFilterReq extends Message<CurrenciesServiceFilterReq> {
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
   * @generated from field: tcube.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: tcube.CURRENCY_SORT_KEY sort_key = 5;
   */
  sortKey = CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED;

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
   * The name of the currency
   *
   * @generated from field: string name = 20;
   */
  name = "";

  /**
   * Code of the currency
   *
   * @generated from field: string code = 21;
   */
  code = "";

  constructor(data?: PartialMessage<CurrenciesServiceFilterReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.CurrenciesServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(CURRENCY_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceFilterReq {
    return new CurrenciesServiceFilterReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq {
    return new CurrenciesServiceFilterReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq {
    return new CurrenciesServiceFilterReq().fromJsonString(jsonString, options);
  }

  static equals(a: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined, b: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined): boolean {
    return proto3.util.equals(CurrenciesServiceFilterReq, a, b);
  }
}

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.CurrenciesServiceSearchAllReq
 */
export class CurrenciesServiceSearchAllReq extends Message<CurrenciesServiceSearchAllReq> {
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
   * @generated from field: tcube.SORT_ORDER sort_order = 4;
   */
  sortOrder = SORT_ORDER.ASCENDING_UNSPECIFIED;

  /**
   * The sort key that is to be used to fetch the pagination response
   *
   * @generated from field: tcube.CURRENCY_SORT_KEY sort_key = 5;
   */
  sortKey = CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED;

  /**
   * Describes the key with which the search operation needs to be performed
   *
   * @generated from field: string search_key = 11;
   */
  searchKey = "";

  constructor(data?: PartialMessage<CurrenciesServiceSearchAllReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.CurrenciesServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(CURRENCY_SORT_KEY) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceSearchAllReq {
    return new CurrenciesServiceSearchAllReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq {
    return new CurrenciesServiceSearchAllReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq {
    return new CurrenciesServiceSearchAllReq().fromJsonString(jsonString, options);
  }

  static equals(a: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined, b: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined): boolean {
    return proto3.util.equals(CurrenciesServiceSearchAllReq, a, b);
  }
}

