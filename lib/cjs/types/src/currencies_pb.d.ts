import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving currencies
 *
 * @generated from enum scanswift.CURRENCY_SORT_KEY
 */
export declare enum CURRENCY_SORT_KEY {
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
    CURRENCY_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a currency
 *
 * @generated from message scanswift.CurrenciesServiceCreateRequest
 */
export declare class CurrenciesServiceCreateRequest extends Message<CurrenciesServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The name of the currency
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the currency
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the currency
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<CurrenciesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CurrenciesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest;
    static equals(a: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined, b: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a currency
 *
 * @generated from message scanswift.CurrenciesServiceUpdateRequest
 */
export declare class CurrenciesServiceUpdateRequest extends Message<CurrenciesServiceUpdateRequest> {
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
     * The name of the currency
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the currency
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the currency
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<CurrenciesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CurrenciesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest;
    static equals(a: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined, b: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each currency on the platform
 *
 * @generated from message scanswift.Currency
 */
export declare class Currency extends Message<Currency> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: scanswift.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The name of the currency
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the currency
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the currency
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<Currency>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Currency";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Currency;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Currency;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Currency;
    static equals(a: Currency | PlainMessage<Currency> | undefined, b: Currency | PlainMessage<Currency> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of currencies
 *
 * @generated from message scanswift.CurrenciesList
 */
export declare class CurrenciesList extends Message<CurrenciesList> {
    /**
     * List of currencies
     *
     * @generated from field: repeated scanswift.Currency list = 1;
     */
    list: Currency[];
    constructor(data?: PartialMessage<CurrenciesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CurrenciesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesList;
    static equals(a: CurrenciesList | PlainMessage<CurrenciesList> | undefined, b: CurrenciesList | PlainMessage<CurrenciesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.CurrenciesServicePaginationReq
 */
export declare class CurrenciesServicePaginationReq extends Message<CurrenciesServicePaginationReq> {
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
     * @generated from field: scanswift.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey: CURRENCY_SORT_KEY;
    constructor(data?: PartialMessage<CurrenciesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CurrenciesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq;
    static equals(a: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined, b: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.CurrencyPaginationResp
 */
export declare class CurrencyPaginationResp extends Message<CurrencyPaginationResp> {
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
     * @generated from field: repeated scanswift.Currency payload = 3;
     */
    payload: Currency[];
    constructor(data?: PartialMessage<CurrencyPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CurrencyPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrencyPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrencyPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrencyPaginationResp;
    static equals(a: CurrencyPaginationResp | PlainMessage<CurrencyPaginationResp> | undefined, b: CurrencyPaginationResp | PlainMessage<CurrencyPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.CurrenciesServiceFilterReq
 */
export declare class CurrenciesServiceFilterReq extends Message<CurrenciesServiceFilterReq> {
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
     * @generated from field: scanswift.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey: CURRENCY_SORT_KEY;
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
     * The name of the currency
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the currency
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<CurrenciesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CurrenciesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq;
    static equals(a: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined, b: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.CurrenciesServiceSearchAllReq
 */
export declare class CurrenciesServiceSearchAllReq extends Message<CurrenciesServiceSearchAllReq> {
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
     * @generated from field: scanswift.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey: CURRENCY_SORT_KEY;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<CurrenciesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CurrenciesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq;
    static equals(a: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined, b: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=currencies_pb.d.ts.map