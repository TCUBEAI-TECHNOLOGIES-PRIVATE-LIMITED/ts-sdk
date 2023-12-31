// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file invoices.proto (package scanswift, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";

/**
 *
 * Stores the possible values for an invoice
 *
 * @generated from enum scanswift.INVOICE_STATUS
 */
export enum INVOICE_STATUS {
  /**
   * Used only for filter operations
   *
   * @generated from enum value: INVOICE_STATUS_ANY_UNSPECIFIED = 0;
   */
  INVOICE_STATUS_ANY_UNSPECIFIED = 0,

  /**
   * Denotes that the invoice is open (and unpaid)
   *
   * @generated from enum value: INVOICE_STATUS_OPEN = 1;
   */
  INVOICE_STATUS_OPEN = 1,

  /**
   * Denotes that the invoice has been paid
   *
   * @generated from enum value: INVOICE_STATUS_PAID = 2;
   */
  INVOICE_STATUS_PAID = 2,

  /**
   * Denotes that the invoice has been cancelled
   *
   * @generated from enum value: INVOICE_STATUS_CANCELLED = 3;
   */
  INVOICE_STATUS_CANCELLED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(INVOICE_STATUS)
proto3.util.setEnumType(INVOICE_STATUS, "scanswift.INVOICE_STATUS", [
  { no: 0, name: "INVOICE_STATUS_ANY_UNSPECIFIED" },
  { no: 1, name: "INVOICE_STATUS_OPEN" },
  { no: 2, name: "INVOICE_STATUS_PAID" },
  { no: 3, name: "INVOICE_STATUS_CANCELLED" },
]);

/**
 *
 * Describes the available sort keys for retrieving invoices
 *
 * @generated from enum scanswift.INVOICE_SORT_KEY
 */
export enum INVOICE_SORT_KEY {
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: INVOICE_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  INVOICE_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: INVOICE_SORT_KEY_CREATED_AT = 1;
   */
  INVOICE_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: INVOICE_SORT_KEY_MODIFIED_AT = 2;
   */
  INVOICE_SORT_KEY_MODIFIED_AT = 2,

  /**
   * Fetch ordered results by name
   *
   * @generated from enum value: INVOICE_SORT_KEY_NAME = 10;
   */
  INVOICE_SORT_KEY_NAME = 10,

  /**
   * Fetch ordered results by code
   *
   * @generated from enum value: INVOICE_SORT_KEY_CODE = 11;
   */
  INVOICE_SORT_KEY_CODE = 11,

  /**
   * Fetch ordered results by amount
   *
   * @generated from enum value: INVOICE_SORT_KEY_AMOUNT = 12;
   */
  INVOICE_SORT_KEY_AMOUNT = 12,
}
// Retrieve enum metadata with: proto3.getEnumType(INVOICE_SORT_KEY)
proto3.util.setEnumType(INVOICE_SORT_KEY, "scanswift.INVOICE_SORT_KEY", [
  { no: 0, name: "INVOICE_SORT_KEY_ID_UNSPECIFIED" },
  { no: 1, name: "INVOICE_SORT_KEY_CREATED_AT" },
  { no: 2, name: "INVOICE_SORT_KEY_MODIFIED_AT" },
  { no: 10, name: "INVOICE_SORT_KEY_NAME" },
  { no: 11, name: "INVOICE_SORT_KEY_CODE" },
  { no: 12, name: "INVOICE_SORT_KEY_AMOUNT" },
]);

/**
 *
 * Describes the necessary data structure during creation of a invoice
 *
 * @generated from message scanswift.InvoicesServiceCreateRequest
 */
export class InvoicesServiceCreateRequest extends Message<InvoicesServiceCreateRequest> {
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
   * The name of the invoice
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * UUID of the currency
   *
   * @generated from field: string currency_uuid = 12;
   */
  currencyUuid = "";

  /**
   * The invoice amount (in cents)
   *
   * @generated from field: int64 amount = 13;
   */
  amount = protoInt64.zero;

  constructor(data?: PartialMessage<InvoicesServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicesServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "currency_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "amount", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceCreateRequest {
    return new InvoicesServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceCreateRequest {
    return new InvoicesServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceCreateRequest {
    return new InvoicesServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicesServiceCreateRequest | PlainMessage<InvoicesServiceCreateRequest> | undefined, b: InvoicesServiceCreateRequest | PlainMessage<InvoicesServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(InvoicesServiceCreateRequest, a, b);
  }
}

/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a invoice
 *
 * @generated from message scanswift.InvoicesServiceUpdateRequest
 */
export class InvoicesServiceUpdateRequest extends Message<InvoicesServiceUpdateRequest> {
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
   * The name of the invoice
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * UUID of the currency
   *
   * @generated from field: string currency_uuid = 12;
   */
  currencyUuid = "";

  /**
   * The invoice amount (in cents)
   *
   * @generated from field: int64 amount = 13;
   */
  amount = protoInt64.zero;

  constructor(data?: PartialMessage<InvoicesServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicesServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "currency_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "amount", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceUpdateRequest {
    return new InvoicesServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceUpdateRequest {
    return new InvoicesServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceUpdateRequest {
    return new InvoicesServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicesServiceUpdateRequest | PlainMessage<InvoicesServiceUpdateRequest> | undefined, b: InvoicesServiceUpdateRequest | PlainMessage<InvoicesServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(InvoicesServiceUpdateRequest, a, b);
  }
}

/**
 *
 * Describes the data structure to mark the transaction as succeeded or failed
 *
 * @generated from message scanswift.InvoicesServicePaymentRequest
 */
export class InvoicesServicePaymentRequest extends Message<InvoicesServicePaymentRequest> {
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
   * Stores the tracking ID generated by the payment gateway
   *
   * @generated from field: string payment_gateway_tracking_id = 20;
   */
  paymentGatewayTrackingId = "";

  /**
   * Stores the bank reference number generated by the payment gateway
   *
   * @generated from field: string payment_gateway_bank_ref_no = 21;
   */
  paymentGatewayBankRefNo = "";

  /**
   * Stores the response from the payment gateway in its totality, as a JSON blob
   *
   * @generated from field: bytes payment_gateway_consolidated_resp = 30;
   */
  paymentGatewayConsolidatedResp = new Uint8Array(0);

  constructor(data?: PartialMessage<InvoicesServicePaymentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicesServicePaymentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "payment_gateway_tracking_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "payment_gateway_bank_ref_no", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "payment_gateway_consolidated_resp", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServicePaymentRequest {
    return new InvoicesServicePaymentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServicePaymentRequest {
    return new InvoicesServicePaymentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServicePaymentRequest {
    return new InvoicesServicePaymentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicesServicePaymentRequest | PlainMessage<InvoicesServicePaymentRequest> | undefined, b: InvoicesServicePaymentRequest | PlainMessage<InvoicesServicePaymentRequest> | undefined): boolean {
    return proto3.util.equals(InvoicesServicePaymentRequest, a, b);
  }
}

/**
 *
 * Describes the data structure of each invoice on the platform
 *
 * @generated from message scanswift.Invoice
 */
export class Invoice extends Message<Invoice> {
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
   * The name of the invoice
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * Code of the invoice
   *
   * @generated from field: string code = 11;
   */
  code = "";

  /**
   * UUID of the currency
   *
   * @generated from field: string currency_uuid = 12;
   */
  currencyUuid = "";

  /**
   * The invoice amount (in cents)
   *
   * @generated from field: int64 amount = 13;
   */
  amount = protoInt64.zero;

  /**
   * The status of the invoice
   *
   * @generated from field: scanswift.INVOICE_STATUS status = 14;
   */
  status = INVOICE_STATUS.INVOICE_STATUS_ANY_UNSPECIFIED;

  /**
   * Stores the tracking ID generated by the payment gateway
   *
   * @generated from field: string payment_gateway_tracking_id = 20;
   */
  paymentGatewayTrackingId = "";

  /**
   * Stores the bank reference number generated by the payment gateway
   *
   * @generated from field: string payment_gateway_bank_ref_no = 21;
   */
  paymentGatewayBankRefNo = "";

  constructor(data?: PartialMessage<Invoice>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.Invoice";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "currency_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "amount", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "status", kind: "enum", T: proto3.getEnumType(INVOICE_STATUS) },
    { no: 20, name: "payment_gateway_tracking_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "payment_gateway_bank_ref_no", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Invoice {
    return new Invoice().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Invoice {
    return new Invoice().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Invoice {
    return new Invoice().fromJsonString(jsonString, options);
  }

  static equals(a: Invoice | PlainMessage<Invoice> | undefined, b: Invoice | PlainMessage<Invoice> | undefined): boolean {
    return proto3.util.equals(Invoice, a, b);
  }
}

/**
 *
 * Describes the data structure that stores a list of invoices
 *
 * @generated from message scanswift.InvoicesList
 */
export class InvoicesList extends Message<InvoicesList> {
  /**
   * List of invoices
   *
   * @generated from field: repeated scanswift.Invoice list = 1;
   */
  list: Invoice[] = [];

  constructor(data?: PartialMessage<InvoicesList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicesList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Invoice, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesList {
    return new InvoicesList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesList {
    return new InvoicesList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesList {
    return new InvoicesList().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicesList | PlainMessage<InvoicesList> | undefined, b: InvoicesList | PlainMessage<InvoicesList> | undefined): boolean {
    return proto3.util.equals(InvoicesList, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.InvoicesServicePaginationReq
 */
export class InvoicesServicePaginationReq extends Message<InvoicesServicePaginationReq> {
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
   * @generated from field: scanswift.INVOICE_SORT_KEY sort_key = 5;
   */
  sortKey = INVOICE_SORT_KEY.INVOICE_SORT_KEY_ID_UNSPECIFIED;

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<InvoicesServicePaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicesServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(INVOICE_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServicePaginationReq {
    return new InvoicesServicePaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServicePaginationReq {
    return new InvoicesServicePaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServicePaginationReq {
    return new InvoicesServicePaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicesServicePaginationReq | PlainMessage<InvoicesServicePaginationReq> | undefined, b: InvoicesServicePaginationReq | PlainMessage<InvoicesServicePaginationReq> | undefined): boolean {
    return proto3.util.equals(InvoicesServicePaginationReq, a, b);
  }
}

/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.InvoicePaginationResp
 */
export class InvoicePaginationResp extends Message<InvoicePaginationResp> {
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
   * @generated from field: repeated scanswift.Invoice payload = 3;
   */
  payload: Invoice[] = [];

  constructor(data?: PartialMessage<InvoicePaginationResp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicePaginationResp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "payload", kind: "message", T: Invoice, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicePaginationResp {
    return new InvoicePaginationResp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicePaginationResp {
    return new InvoicePaginationResp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicePaginationResp {
    return new InvoicePaginationResp().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicePaginationResp | PlainMessage<InvoicePaginationResp> | undefined, b: InvoicePaginationResp | PlainMessage<InvoicePaginationResp> | undefined): boolean {
    return proto3.util.equals(InvoicePaginationResp, a, b);
  }
}

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.InvoicesServiceFilterReq
 */
export class InvoicesServiceFilterReq extends Message<InvoicesServiceFilterReq> {
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
   * @generated from field: scanswift.INVOICE_SORT_KEY sort_key = 5;
   */
  sortKey = INVOICE_SORT_KEY.INVOICE_SORT_KEY_ID_UNSPECIFIED;

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
   * The name of the invoice
   *
   * @generated from field: string name = 20;
   */
  name = "";

  /**
   * Code of the invoice
   *
   * @generated from field: string code = 21;
   */
  code = "";

  /**
   * UUID of the currency
   *
   * @generated from field: string currency_uuid = 22;
   */
  currencyUuid = "";

  /**
   * The status of the invoice
   *
   * @generated from field: scanswift.INVOICE_STATUS status = 24;
   */
  status = INVOICE_STATUS.INVOICE_STATUS_ANY_UNSPECIFIED;

  constructor(data?: PartialMessage<InvoicesServiceFilterReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicesServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(INVOICE_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "currency_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 24, name: "status", kind: "enum", T: proto3.getEnumType(INVOICE_STATUS) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceFilterReq {
    return new InvoicesServiceFilterReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceFilterReq {
    return new InvoicesServiceFilterReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceFilterReq {
    return new InvoicesServiceFilterReq().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicesServiceFilterReq | PlainMessage<InvoicesServiceFilterReq> | undefined, b: InvoicesServiceFilterReq | PlainMessage<InvoicesServiceFilterReq> | undefined): boolean {
    return proto3.util.equals(InvoicesServiceFilterReq, a, b);
  }
}

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.InvoicesServiceSearchAllReq
 */
export class InvoicesServiceSearchAllReq extends Message<InvoicesServiceSearchAllReq> {
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
   * @generated from field: scanswift.INVOICE_SORT_KEY sort_key = 5;
   */
  sortKey = INVOICE_SORT_KEY.INVOICE_SORT_KEY_ID_UNSPECIFIED;

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  /**
   * Describes the key with which the search operation needs to be performed
   *
   * @generated from field: string search_key = 11;
   */
  searchKey = "";

  /**
   * The status of the invoice
   *
   * @generated from field: scanswift.INVOICE_STATUS status = 20;
   */
  status = INVOICE_STATUS.INVOICE_STATUS_ANY_UNSPECIFIED;

  constructor(data?: PartialMessage<InvoicesServiceSearchAllReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scanswift.InvoicesServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(INVOICE_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "status", kind: "enum", T: proto3.getEnumType(INVOICE_STATUS) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceSearchAllReq {
    return new InvoicesServiceSearchAllReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceSearchAllReq {
    return new InvoicesServiceSearchAllReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceSearchAllReq {
    return new InvoicesServiceSearchAllReq().fromJsonString(jsonString, options);
  }

  static equals(a: InvoicesServiceSearchAllReq | PlainMessage<InvoicesServiceSearchAllReq> | undefined, b: InvoicesServiceSearchAllReq | PlainMessage<InvoicesServiceSearchAllReq> | undefined): boolean {
    return proto3.util.equals(InvoicesServiceSearchAllReq, a, b);
  }
}

