"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file currencies.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesServiceSearchAllReq = exports.CurrenciesServiceFilterReq = exports.CurrencyPaginationResp = exports.CurrenciesServicePaginationReq = exports.CurrenciesList = exports.Currency = exports.CurrenciesServiceUpdateRequest = exports.CurrenciesServiceCreateRequest = exports.CURRENCY_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the available sort keys for retrieving currencies
 *
 * @generated from enum tcube.CURRENCY_SORT_KEY
 */
var CURRENCY_SORT_KEY;
(function (CURRENCY_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CURRENCY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CURRENCY_SORT_KEY[CURRENCY_SORT_KEY["CURRENCY_SORT_KEY_ID_UNSPECIFIED"] = 0] = "CURRENCY_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CURRENCY_SORT_KEY_CREATED_AT = 1;
     */
    CURRENCY_SORT_KEY[CURRENCY_SORT_KEY["CURRENCY_SORT_KEY_CREATED_AT"] = 1] = "CURRENCY_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CURRENCY_SORT_KEY_MODIFIED_AT = 2;
     */
    CURRENCY_SORT_KEY[CURRENCY_SORT_KEY["CURRENCY_SORT_KEY_MODIFIED_AT"] = 2] = "CURRENCY_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: CURRENCY_SORT_KEY_NAME = 10;
     */
    CURRENCY_SORT_KEY[CURRENCY_SORT_KEY["CURRENCY_SORT_KEY_NAME"] = 10] = "CURRENCY_SORT_KEY_NAME";
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: CURRENCY_SORT_KEY_CODE = 11;
     */
    CURRENCY_SORT_KEY[CURRENCY_SORT_KEY["CURRENCY_SORT_KEY_CODE"] = 11] = "CURRENCY_SORT_KEY_CODE";
})(CURRENCY_SORT_KEY || (exports.CURRENCY_SORT_KEY = CURRENCY_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(CURRENCY_SORT_KEY)
protobuf_1.proto3.util.setEnumType(CURRENCY_SORT_KEY, "tcube.CURRENCY_SORT_KEY", [
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
class CurrenciesServiceCreateRequest extends protobuf_1.Message {
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
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.CurrenciesServiceCreateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new CurrenciesServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CurrenciesServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CurrenciesServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CurrenciesServiceCreateRequest, a, b);
    }
}
exports.CurrenciesServiceCreateRequest = CurrenciesServiceCreateRequest;
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a currency
 *
 * @generated from message tcube.CurrenciesServiceUpdateRequest
 */
class CurrenciesServiceUpdateRequest extends protobuf_1.Message {
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
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.CurrenciesServiceUpdateRequest";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new CurrenciesServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CurrenciesServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CurrenciesServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CurrenciesServiceUpdateRequest, a, b);
    }
}
exports.CurrenciesServiceUpdateRequest = CurrenciesServiceUpdateRequest;
/**
 *
 * Describes the data structure of each currency on the platform
 *
 * @generated from message tcube.Currency
 */
class Currency extends protobuf_1.Message {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata;
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
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.Currency";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "metadata", kind: "message", T: base_pb_js_1.Metadata },
        { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 11, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new Currency().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Currency().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Currency().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Currency, a, b);
    }
}
exports.Currency = Currency;
/**
 *
 * Describes the data structure that stores a list of currencies
 *
 * @generated from message tcube.CurrenciesList
 */
class CurrenciesList extends protobuf_1.Message {
    /**
     * List of currencies
     *
     * @generated from field: repeated tcube.Currency list = 1;
     */
    list = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.CurrenciesList";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "list", kind: "message", T: Currency, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new CurrenciesList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CurrenciesList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CurrenciesList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CurrenciesList, a, b);
    }
}
exports.CurrenciesList = CurrenciesList;
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.CurrenciesServicePaginationReq
 */
class CurrenciesServicePaginationReq extends protobuf_1.Message {
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
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey = CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED;
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.CurrenciesServicePaginationReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(CURRENCY_SORT_KEY) },
    ]);
    static fromBinary(bytes, options) {
        return new CurrenciesServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CurrenciesServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CurrenciesServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CurrenciesServicePaginationReq, a, b);
    }
}
exports.CurrenciesServicePaginationReq = CurrenciesServicePaginationReq;
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.CurrencyPaginationResp
 */
class CurrencyPaginationResp extends protobuf_1.Message {
    /**
     * The number of records in this payload
     *
     * @generated from field: int64 count = 1;
     */
    count = protobuf_1.protoInt64.zero;
    /**
     * The total number of records that are available
     *
     * @generated from field: int64 total = 2;
     */
    total = protobuf_1.protoInt64.zero;
    /**
     * The list of records
     *
     * @generated from field: repeated tcube.Currency payload = 3;
     */
    payload = [];
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.CurrencyPaginationResp";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "payload", kind: "message", T: Currency, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new CurrencyPaginationResp().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CurrencyPaginationResp().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CurrencyPaginationResp().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CurrencyPaginationResp, a, b);
    }
}
exports.CurrencyPaginationResp = CurrencyPaginationResp;
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.CurrenciesServiceFilterReq
 */
class CurrenciesServiceFilterReq extends protobuf_1.Message {
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
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
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
    creationTimestampStart = protobuf_1.protoInt64.zero;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: int64 creation_timestamp_end = 7;
     */
    creationTimestampEnd = protobuf_1.protoInt64.zero;
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
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.CurrenciesServiceFilterReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(CURRENCY_SORT_KEY) },
        { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new CurrenciesServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CurrenciesServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CurrenciesServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CurrenciesServiceFilterReq, a, b);
    }
}
exports.CurrenciesServiceFilterReq = CurrenciesServiceFilterReq;
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.CurrenciesServiceSearchAllReq
 */
class CurrenciesServiceSearchAllReq extends protobuf_1.Message {
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
    count = protobuf_1.protoInt64.zero;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: int64 offset = 3;
     */
    offset = protobuf_1.protoInt64.zero;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
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
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static runtime = protobuf_1.proto3;
    static typeName = "tcube.CurrenciesServiceSearchAllReq";
    static fields = protobuf_1.proto3.util.newFieldList(() => [
        { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
        { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
        { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
        { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(CURRENCY_SORT_KEY) },
        { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new CurrenciesServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CurrenciesServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CurrenciesServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CurrenciesServiceSearchAllReq, a, b);
    }
}
exports.CurrenciesServiceSearchAllReq = CurrenciesServiceSearchAllReq;