import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Stores the possible values for an invoice
 *
 * @generated from enum scanswift.INVOICE_STATUS
 */
export declare enum INVOICE_STATUS {
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
    INVOICE_STATUS_CANCELLED = 3
}
/**
 *
 * Describes the available sort keys for retrieving invoices
 *
 * @generated from enum scanswift.INVOICE_SORT_KEY
 */
export declare enum INVOICE_SORT_KEY {
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
    INVOICE_SORT_KEY_AMOUNT = 12
}
/**
 *
 * Describes the necessary data structure during creation of a invoice
 *
 * @generated from message scanswift.InvoicesServiceCreateRequest
 */
export declare class InvoicesServiceCreateRequest extends Message<InvoicesServiceCreateRequest> {
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
     * The name of the invoice
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * UUID of the currency
     *
     * @generated from field: string currency_uuid = 12;
     */
    currencyUuid: string;
    /**
     * The invoice amount (in cents)
     *
     * @generated from field: int64 amount = 13;
     */
    amount: bigint;
    constructor(data?: PartialMessage<InvoicesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceCreateRequest;
    static equals(a: InvoicesServiceCreateRequest | PlainMessage<InvoicesServiceCreateRequest> | undefined, b: InvoicesServiceCreateRequest | PlainMessage<InvoicesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a invoice
 *
 * @generated from message scanswift.InvoicesServiceUpdateRequest
 */
export declare class InvoicesServiceUpdateRequest extends Message<InvoicesServiceUpdateRequest> {
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
     * The name of the invoice
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * UUID of the currency
     *
     * @generated from field: string currency_uuid = 12;
     */
    currencyUuid: string;
    /**
     * The invoice amount (in cents)
     *
     * @generated from field: int64 amount = 13;
     */
    amount: bigint;
    constructor(data?: PartialMessage<InvoicesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceUpdateRequest;
    static equals(a: InvoicesServiceUpdateRequest | PlainMessage<InvoicesServiceUpdateRequest> | undefined, b: InvoicesServiceUpdateRequest | PlainMessage<InvoicesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to mark the transaction as succeeded or failed
 *
 * @generated from message scanswift.InvoicesServicePaymentRequest
 */
export declare class InvoicesServicePaymentRequest extends Message<InvoicesServicePaymentRequest> {
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
     * Stores the tracking ID generated by the payment gateway
     *
     * @generated from field: string payment_gateway_tracking_id = 20;
     */
    paymentGatewayTrackingId: string;
    /**
     * Stores the bank reference number generated by the payment gateway
     *
     * @generated from field: string payment_gateway_bank_ref_no = 21;
     */
    paymentGatewayBankRefNo: string;
    /**
     * Stores the response from the payment gateway in its totality, as a JSON blob
     *
     * @generated from field: bytes payment_gateway_consolidated_resp = 30;
     */
    paymentGatewayConsolidatedResp: Uint8Array;
    constructor(data?: PartialMessage<InvoicesServicePaymentRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicesServicePaymentRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServicePaymentRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServicePaymentRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServicePaymentRequest;
    static equals(a: InvoicesServicePaymentRequest | PlainMessage<InvoicesServicePaymentRequest> | undefined, b: InvoicesServicePaymentRequest | PlainMessage<InvoicesServicePaymentRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each invoice on the platform
 *
 * @generated from message scanswift.Invoice
 */
export declare class Invoice extends Message<Invoice> {
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
     * The name of the invoice
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the invoice
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * UUID of the currency
     *
     * @generated from field: string currency_uuid = 12;
     */
    currencyUuid: string;
    /**
     * The invoice amount (in cents)
     *
     * @generated from field: int64 amount = 13;
     */
    amount: bigint;
    /**
     * The status of the invoice
     *
     * @generated from field: scanswift.INVOICE_STATUS status = 14;
     */
    status: INVOICE_STATUS;
    /**
     * Stores the tracking ID generated by the payment gateway
     *
     * @generated from field: string payment_gateway_tracking_id = 20;
     */
    paymentGatewayTrackingId: string;
    /**
     * Stores the bank reference number generated by the payment gateway
     *
     * @generated from field: string payment_gateway_bank_ref_no = 21;
     */
    paymentGatewayBankRefNo: string;
    constructor(data?: PartialMessage<Invoice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Invoice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Invoice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Invoice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Invoice;
    static equals(a: Invoice | PlainMessage<Invoice> | undefined, b: Invoice | PlainMessage<Invoice> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of invoices
 *
 * @generated from message scanswift.InvoicesList
 */
export declare class InvoicesList extends Message<InvoicesList> {
    /**
     * List of invoices
     *
     * @generated from field: repeated scanswift.Invoice list = 1;
     */
    list: Invoice[];
    constructor(data?: PartialMessage<InvoicesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesList;
    static equals(a: InvoicesList | PlainMessage<InvoicesList> | undefined, b: InvoicesList | PlainMessage<InvoicesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.InvoicesServicePaginationReq
 */
export declare class InvoicesServicePaginationReq extends Message<InvoicesServicePaginationReq> {
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
     * @generated from field: scanswift.INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: INVOICE_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<InvoicesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServicePaginationReq;
    static equals(a: InvoicesServicePaginationReq | PlainMessage<InvoicesServicePaginationReq> | undefined, b: InvoicesServicePaginationReq | PlainMessage<InvoicesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.InvoicePaginationResp
 */
export declare class InvoicePaginationResp extends Message<InvoicePaginationResp> {
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
     * @generated from field: repeated scanswift.Invoice payload = 3;
     */
    payload: Invoice[];
    constructor(data?: PartialMessage<InvoicePaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicePaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicePaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicePaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicePaginationResp;
    static equals(a: InvoicePaginationResp | PlainMessage<InvoicePaginationResp> | undefined, b: InvoicePaginationResp | PlainMessage<InvoicePaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.InvoicesServiceFilterReq
 */
export declare class InvoicesServiceFilterReq extends Message<InvoicesServiceFilterReq> {
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
     * @generated from field: scanswift.INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: INVOICE_SORT_KEY;
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
     * The name of the invoice
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the invoice
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * UUID of the currency
     *
     * @generated from field: string currency_uuid = 22;
     */
    currencyUuid: string;
    /**
     * The status of the invoice
     *
     * @generated from field: scanswift.INVOICE_STATUS status = 24;
     */
    status: INVOICE_STATUS;
    constructor(data?: PartialMessage<InvoicesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceFilterReq;
    static equals(a: InvoicesServiceFilterReq | PlainMessage<InvoicesServiceFilterReq> | undefined, b: InvoicesServiceFilterReq | PlainMessage<InvoicesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.InvoicesServiceSearchAllReq
 */
export declare class InvoicesServiceSearchAllReq extends Message<InvoicesServiceSearchAllReq> {
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
     * @generated from field: scanswift.INVOICE_SORT_KEY sort_key = 5;
     */
    sortKey: INVOICE_SORT_KEY;
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
    /**
     * The status of the invoice
     *
     * @generated from field: scanswift.INVOICE_STATUS status = 20;
     */
    status: INVOICE_STATUS;
    constructor(data?: PartialMessage<InvoicesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.InvoicesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoicesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoicesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoicesServiceSearchAllReq;
    static equals(a: InvoicesServiceSearchAllReq | PlainMessage<InvoicesServiceSearchAllReq> | undefined, b: InvoicesServiceSearchAllReq | PlainMessage<InvoicesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=invoices_pb.d.ts.map