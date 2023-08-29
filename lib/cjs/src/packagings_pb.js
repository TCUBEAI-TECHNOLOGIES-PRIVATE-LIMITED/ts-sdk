"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file packagings.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagingsServiceSearchAllReq = exports.PackagingsServiceFilterReq = exports.PackagingPaginationResp = exports.PackagingsServicePaginationReq = exports.PackagingsSerialsList = exports.PackagingSerial = exports.PackagingsServiceAddSerialsRequest = exports.PackagingsList = exports.Packaging = exports.PackagingsServiceCreateRequest = exports.PACKAGING_SORT_KEY = exports.PRINT_ENCODING_TYPE_FOR_PACKAGING = exports.PACKAGING_STATE = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
const serials_pb_js_1 = require("./serials_pb.js");
/**
 *
 * Describes the available states for a packaging
 *
 * @generated from enum tcube.PACKAGING_STATE
 */
var PACKAGING_STATE;
(function (PACKAGING_STATE) {
    /**
     * Packaging is any (only useful for filter requests)
     *
     * @generated from enum value: PACKAGING_STATE_ANY_UNSPECIFIED = 0;
     */
    PACKAGING_STATE[PACKAGING_STATE["PACKAGING_STATE_ANY_UNSPECIFIED"] = 0] = "PACKAGING_STATE_ANY_UNSPECIFIED";
    /**
     * Packaging is open
     *
     * @generated from enum value: PACKAGING_STATE_OPEN = 1;
     */
    PACKAGING_STATE[PACKAGING_STATE["PACKAGING_STATE_OPEN"] = 1] = "PACKAGING_STATE_OPEN";
    /**
     * Packaging is closed
     *
     * @generated from enum value: PACKAGING_STATE_CLOSED = 2;
     */
    PACKAGING_STATE[PACKAGING_STATE["PACKAGING_STATE_CLOSED"] = 2] = "PACKAGING_STATE_CLOSED";
})(PACKAGING_STATE || (exports.PACKAGING_STATE = PACKAGING_STATE = {}));
// Retrieve enum metadata with: proto3.getEnumType(PACKAGING_STATE)
protobuf_1.proto3.util.setEnumType(PACKAGING_STATE, "tcube.PACKAGING_STATE", [
    { no: 0, name: "PACKAGING_STATE_ANY_UNSPECIFIED" },
    { no: 1, name: "PACKAGING_STATE_OPEN" },
    { no: 2, name: "PACKAGING_STATE_CLOSED" },
]);
/**
 *
 * Stores the possible values for encoding type
 *
 * @generated from enum tcube.PRINT_ENCODING_TYPE_FOR_PACKAGING
 */
var PRINT_ENCODING_TYPE_FOR_PACKAGING;
(function (PRINT_ENCODING_TYPE_FOR_PACKAGING) {
    /**
     * Generate the code as HRI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED = 0;
     */
    PRINT_ENCODING_TYPE_FOR_PACKAGING[PRINT_ENCODING_TYPE_FOR_PACKAGING["PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED"] = 0] = "PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED";
    /**
     * Generate the code as URI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PACKAGING_URI = 1;
     */
    PRINT_ENCODING_TYPE_FOR_PACKAGING[PRINT_ENCODING_TYPE_FOR_PACKAGING["PRINT_ENCODING_TYPE_FOR_PACKAGING_URI"] = 1] = "PRINT_ENCODING_TYPE_FOR_PACKAGING_URI";
    /**
     * Generate the code in all the available forms
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PACKAGING_ALL = 2;
     */
    PRINT_ENCODING_TYPE_FOR_PACKAGING[PRINT_ENCODING_TYPE_FOR_PACKAGING["PRINT_ENCODING_TYPE_FOR_PACKAGING_ALL"] = 2] = "PRINT_ENCODING_TYPE_FOR_PACKAGING_ALL";
})(PRINT_ENCODING_TYPE_FOR_PACKAGING || (exports.PRINT_ENCODING_TYPE_FOR_PACKAGING = PRINT_ENCODING_TYPE_FOR_PACKAGING = {}));
// Retrieve enum metadata with: proto3.getEnumType(PRINT_ENCODING_TYPE_FOR_PACKAGING)
protobuf_1.proto3.util.setEnumType(PRINT_ENCODING_TYPE_FOR_PACKAGING, "tcube.PRINT_ENCODING_TYPE_FOR_PACKAGING", [
    { no: 0, name: "PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED" },
    { no: 1, name: "PRINT_ENCODING_TYPE_FOR_PACKAGING_URI" },
    { no: 2, name: "PRINT_ENCODING_TYPE_FOR_PACKAGING_ALL" },
]);
/**
 *
 * Describes the available sort keys for retrieving packagings
 *
 * @generated from enum tcube.PACKAGING_SORT_KEY
 */
var PACKAGING_SORT_KEY;
(function (PACKAGING_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PACKAGING_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PACKAGING_SORT_KEY[PACKAGING_SORT_KEY["PACKAGING_SORT_KEY_ID_UNSPECIFIED"] = 0] = "PACKAGING_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PACKAGING_SORT_KEY_CREATED_AT = 1;
     */
    PACKAGING_SORT_KEY[PACKAGING_SORT_KEY["PACKAGING_SORT_KEY_CREATED_AT"] = 1] = "PACKAGING_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PACKAGING_SORT_KEY_MODIFIED_AT = 2;
     */
    PACKAGING_SORT_KEY[PACKAGING_SORT_KEY["PACKAGING_SORT_KEY_MODIFIED_AT"] = 2] = "PACKAGING_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: PACKAGING_SORT_KEY_NAME = 10;
     */
    PACKAGING_SORT_KEY[PACKAGING_SORT_KEY["PACKAGING_SORT_KEY_NAME"] = 10] = "PACKAGING_SORT_KEY_NAME";
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: PACKAGING_SORT_KEY_CODE = 11;
     */
    PACKAGING_SORT_KEY[PACKAGING_SORT_KEY["PACKAGING_SORT_KEY_CODE"] = 11] = "PACKAGING_SORT_KEY_CODE";
})(PACKAGING_SORT_KEY || (exports.PACKAGING_SORT_KEY = PACKAGING_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(PACKAGING_SORT_KEY)
protobuf_1.proto3.util.setEnumType(PACKAGING_SORT_KEY, "tcube.PACKAGING_SORT_KEY", [
    { no: 0, name: "PACKAGING_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "PACKAGING_SORT_KEY_CREATED_AT" },
    { no: 2, name: "PACKAGING_SORT_KEY_MODIFIED_AT" },
    { no: 10, name: "PACKAGING_SORT_KEY_NAME" },
    { no: 11, name: "PACKAGING_SORT_KEY_CODE" },
]);
/**
 *
 * Describes the necessary data structure during creation of a packaging
 *
 * @generated from message tcube.PackagingsServiceCreateRequest
 */
class PackagingsServiceCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * UUID of the entity
         *
         * @generated from field: string entity_uuid = 2;
         */
        this.entityUuid = "";
        /**
         * UUID of the location
         *
         * @generated from field: string location_uuid = 8;
         */
        this.locationUuid = "";
        /**
         * UUID of the zone
         *
         * @generated from field: string zone_uuid = 9;
         */
        this.zoneUuid = "";
        /**
         * Optional UUID of the associated product
         *
         * @generated from field: string product_uuid = 10;
         */
        this.productUuid = "";
        /**
         * Optional UUID of the associated batch
         *
         * @generated from field: string batch_uuid = 11;
         */
        this.batchUuid = "";
        /**
         * The name of the packaging
         *
         * @generated from field: string name = 12;
         */
        this.name = "";
        /**
         * Description of the packaging
         *
         * @generated from field: string description = 13;
         */
        this.description = "";
        /**
         * The maximum number of items that can be added to a packaging, with 0 denoting no limit
         *
         * @generated from field: int64 max_count = 14;
         */
        this.maxCount = protobuf_1.protoInt64.zero;
        /**
         * The latitude of the location where this packaging was created
         *
         * @generated from field: double latitude = 15;
         */
        this.latitude = 0;
        /**
         * The longitude of the location where this packaging was created
         *
         * @generated from field: double longitude = 16;
         */
        this.longitude = 0;
        /**
         * The type of encoding
         *
         * @generated from field: tcube.PRINT_ENCODING_TYPE_FOR_PACKAGING print_encoding_type = 18;
         */
        this.printEncodingType = PRINT_ENCODING_TYPE_FOR_PACKAGING.PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingsServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingsServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingsServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingsServiceCreateRequest, a, b);
    }
}
exports.PackagingsServiceCreateRequest = PackagingsServiceCreateRequest;
PackagingsServiceCreateRequest.runtime = protobuf_1.proto3;
PackagingsServiceCreateRequest.typeName = "tcube.PackagingsServiceCreateRequest";
PackagingsServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "product_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "batch_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "max_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 16, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 18, name: "print_encoding_type", kind: "enum", T: protobuf_1.proto3.getEnumType(PRINT_ENCODING_TYPE_FOR_PACKAGING) },
]);
/**
 *
 * Describes the data structure of each packaging on the platform
 *
 * @generated from message tcube.Packaging
 */
class Packaging extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * UUID of the entity
         *
         * @generated from field: string entity_uuid = 2;
         */
        this.entityUuid = "";
        /**
         * UUID of the location
         *
         * @generated from field: string location_uuid = 8;
         */
        this.locationUuid = "";
        /**
         * UUID of the zone
         *
         * @generated from field: string zone_uuid = 9;
         */
        this.zoneUuid = "";
        /**
         * Optional UUID of the associated product
         *
         * @generated from field: string product_uuid = 10;
         */
        this.productUuid = "";
        /**
         * Optional UUID of the associated batch
         *
         * @generated from field: string batch_uuid = 11;
         */
        this.batchUuid = "";
        /**
         * The name of the packaging
         *
         * @generated from field: string name = 12;
         */
        this.name = "";
        /**
         * Code of the packaging
         *
         * @generated from field: string code = 13;
         */
        this.code = "";
        /**
         * Description of the packaging
         *
         * @generated from field: string description = 14;
         */
        this.description = "";
        /**
         * The maximum number of items that can be added to a packaging, with 0 denoting no limit
         *
         * @generated from field: int64 max_count = 15;
         */
        this.maxCount = protobuf_1.protoInt64.zero;
        /**
         * The latitude of the location where this packaging was created
         *
         * @generated from field: double latitude = 16;
         */
        this.latitude = 0;
        /**
         * The longitude of the location where this packaging was created
         *
         * @generated from field: double longitude = 17;
         */
        this.longitude = 0;
        /**
         * The type of encoding
         *
         * @generated from field: tcube.PRINT_ENCODING_TYPE_FOR_PACKAGING print_encoding_type = 18;
         */
        this.printEncodingType = PRINT_ENCODING_TYPE_FOR_PACKAGING.PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED;
        /**
         * The state of the packaging
         *
         * @generated from field: tcube.PACKAGING_STATE state = 20;
         */
        this.state = PACKAGING_STATE.PACKAGING_STATE_ANY_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Packaging().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Packaging().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Packaging().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Packaging, a, b);
    }
}
exports.Packaging = Packaging;
Packaging.runtime = protobuf_1.proto3;
Packaging.typeName = "tcube.Packaging";
Packaging.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: base_pb_js_1.Metadata },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "product_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "batch_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "max_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 17, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 18, name: "print_encoding_type", kind: "enum", T: protobuf_1.proto3.getEnumType(PRINT_ENCODING_TYPE_FOR_PACKAGING) },
    { no: 20, name: "state", kind: "enum", T: protobuf_1.proto3.getEnumType(PACKAGING_STATE) },
]);
/**
 *
 * Describes the data structure that stores a list of packagings
 *
 * @generated from message tcube.PackagingsList
 */
class PackagingsList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of packagings
         *
         * @generated from field: repeated tcube.Packaging list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingsList, a, b);
    }
}
exports.PackagingsList = PackagingsList;
PackagingsList.runtime = protobuf_1.proto3;
PackagingsList.typeName = "tcube.PackagingsList";
PackagingsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Packaging, repeated: true },
]);
/**
 *
 * Describes the necessary data structure during addition of multiple serials to a packaging
 *
 * @generated from message tcube.PackagingsServiceAddSerialsRequest
 */
class PackagingsServiceAddSerialsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * UUID of the entity
         *
         * @generated from field: string entity_uuid = 2;
         */
        this.entityUuid = "";
        /**
         * UUID of the packaging
         *
         * @generated from field: string packaging_uuid = 10;
         */
        this.packagingUuid = "";
        /**
         * The latitude of the location where this packaging was created
         *
         * @generated from field: double latitude = 11;
         */
        this.latitude = 0;
        /**
         * The longitude of the location where this packaging was created
         *
         * @generated from field: double longitude = 12;
         */
        this.longitude = 0;
        /**
         * List of serial codes
         *
         * @generated from field: repeated tcube.SerialsServiceSerialCodes list = 20;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingsServiceAddSerialsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingsServiceAddSerialsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingsServiceAddSerialsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingsServiceAddSerialsRequest, a, b);
    }
}
exports.PackagingsServiceAddSerialsRequest = PackagingsServiceAddSerialsRequest;
PackagingsServiceAddSerialsRequest.runtime = protobuf_1.proto3;
PackagingsServiceAddSerialsRequest.typeName = "tcube.PackagingsServiceAddSerialsRequest";
PackagingsServiceAddSerialsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "packaging_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 12, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 20, name: "list", kind: "message", T: serials_pb_js_1.SerialsServiceSerialCodes, repeated: true },
]);
/**
 *
 * Describes the data structure of each packaging serial
 *
 * @generated from message tcube.PackagingSerial
 */
class PackagingSerial extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * UUID of the entity
         *
         * @generated from field: string entity_uuid = 2;
         */
        this.entityUuid = "";
        /**
         * UUID of the location
         *
         * @generated from field: string location_uuid = 8;
         */
        this.locationUuid = "";
        /**
         * UUID of the zone
         *
         * @generated from field: string zone_uuid = 9;
         */
        this.zoneUuid = "";
        /**
         * UUID of the packaging
         *
         * @generated from field: string packaging_uuid = 10;
         */
        this.packagingUuid = "";
        /**
         * UUID of the serial
         *
         * @generated from field: string serial_uuid = 11;
         */
        this.serialUuid = "";
        /**
         * The latitude of the location where this packaging was created
         *
         * @generated from field: double latitude = 12;
         */
        this.latitude = 0;
        /**
         * The longitude of the location where this packaging was created
         *
         * @generated from field: double longitude = 13;
         */
        this.longitude = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingSerial().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingSerial().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingSerial().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingSerial, a, b);
    }
}
exports.PackagingSerial = PackagingSerial;
PackagingSerial.runtime = protobuf_1.proto3;
PackagingSerial.typeName = "tcube.PackagingSerial";
PackagingSerial.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: base_pb_js_1.Metadata },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "packaging_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "serial_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 13, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
]);
/**
 *
 * Describes the data structure that stores a list of packaging serials
 *
 * @generated from message tcube.PackagingsSerialsList
 */
class PackagingsSerialsList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of serials that are associated with the packaging
         *
         * @generated from field: repeated tcube.PackagingSerial list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingsSerialsList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingsSerialsList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingsSerialsList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingsSerialsList, a, b);
    }
}
exports.PackagingsSerialsList = PackagingsSerialsList;
PackagingsSerialsList.runtime = protobuf_1.proto3;
PackagingsSerialsList.typeName = "tcube.PackagingsSerialsList";
PackagingsSerialsList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: PackagingSerial, repeated: true },
]);
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.PackagingsServicePaginationReq
 */
class PackagingsServicePaginationReq extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * If true, then returns only active records. If false, then returns only inactive records
         *
         * @generated from field: bool is_active = 1;
         */
        this.isActive = false;
        /**
         * The number of records that need to be sent in the response
         *
         * @generated from field: int64 count = 2;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that need to be offset by before fetching the records
         *
         * @generated from field: int64 offset = 3;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The sort order that is to be used to fetch the pagination response
         *
         * @generated from field: tcube.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: tcube.PACKAGING_SORT_KEY sort_key = 5;
         */
        this.sortKey = PACKAGING_SORT_KEY.PACKAGING_SORT_KEY_ID_UNSPECIFIED;
        /**
         * UUID of the entity
         *
         * @generated from field: string entity_uuid = 6;
         */
        this.entityUuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingsServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingsServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingsServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingsServicePaginationReq, a, b);
    }
}
exports.PackagingsServicePaginationReq = PackagingsServicePaginationReq;
PackagingsServicePaginationReq.runtime = protobuf_1.proto3;
PackagingsServicePaginationReq.typeName = "tcube.PackagingsServicePaginationReq";
PackagingsServicePaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(PACKAGING_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.PackagingPaginationResp
 */
class PackagingPaginationResp extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * The number of records in this payload
         *
         * @generated from field: int64 count = 1;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The total number of records that are available
         *
         * @generated from field: int64 total = 2;
         */
        this.total = protobuf_1.protoInt64.zero;
        /**
         * The list of records
         *
         * @generated from field: repeated tcube.Packaging payload = 3;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingPaginationResp().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingPaginationResp().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingPaginationResp().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingPaginationResp, a, b);
    }
}
exports.PackagingPaginationResp = PackagingPaginationResp;
PackagingPaginationResp.runtime = protobuf_1.proto3;
PackagingPaginationResp.typeName = "tcube.PackagingPaginationResp";
PackagingPaginationResp.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "payload", kind: "message", T: Packaging, repeated: true },
]);
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.PackagingsServiceFilterReq
 */
class PackagingsServiceFilterReq extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * If true, then returns only active records. If false, then returns only inactive records
         *
         * @generated from field: bool is_active = 1;
         */
        this.isActive = false;
        /**
         * The number of records that need to be sent in the response. Returns all records if it is set to -1
         *
         * @generated from field: int64 count = 2;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that need to be offset by before fetching the records
         *
         * @generated from field: int64 offset = 3;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The sort order that is to be used to fetch the pagination response
         *
         * @generated from field: tcube.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: tcube.PACKAGING_SORT_KEY sort_key = 5;
         */
        this.sortKey = PACKAGING_SORT_KEY.PACKAGING_SORT_KEY_ID_UNSPECIFIED;
        /**
         * The minimum timestamp that needs to be considered to filter by creation
         *
         * @generated from field: int64 creation_timestamp_start = 6;
         */
        this.creationTimestampStart = protobuf_1.protoInt64.zero;
        /**
         * The maximum timestamp that needs to be considered to filter by creation
         *
         * @generated from field: int64 creation_timestamp_end = 7;
         */
        this.creationTimestampEnd = protobuf_1.protoInt64.zero;
        /**
         * UUID of the entity
         *
         * @generated from field: string entity_uuid = 8;
         */
        this.entityUuid = "";
        /**
         * UUID of the location
         *
         * @generated from field: string location_uuid = 9;
         */
        this.locationUuid = "";
        /**
         * UUID of the zone
         *
         * @generated from field: string zone_uuid = 10;
         */
        this.zoneUuid = "";
        /**
         * Optional UUID of the associated product
         *
         * @generated from field: string product_uuid = 11;
         */
        this.productUuid = "";
        /**
         * Optional UUID of the associated batch
         *
         * @generated from field: string batch_uuid = 12;
         */
        this.batchUuid = "";
        /**
         * The name of the packaging
         *
         * @generated from field: string name = 20;
         */
        this.name = "";
        /**
         * Code of the packaging
         *
         * @generated from field: string code = 21;
         */
        this.code = "";
        /**
         * The state of the packaging
         *
         * @generated from field: tcube.PACKAGING_STATE state = 30;
         */
        this.state = PACKAGING_STATE.PACKAGING_STATE_ANY_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingsServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingsServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingsServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingsServiceFilterReq, a, b);
    }
}
exports.PackagingsServiceFilterReq = PackagingsServiceFilterReq;
PackagingsServiceFilterReq.runtime = protobuf_1.proto3;
PackagingsServiceFilterReq.typeName = "tcube.PackagingsServiceFilterReq";
PackagingsServiceFilterReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(PACKAGING_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "product_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "batch_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "state", kind: "enum", T: protobuf_1.proto3.getEnumType(PACKAGING_STATE) },
]);
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.PackagingsServiceSearchAllReq
 */
class PackagingsServiceSearchAllReq extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * If true, then returns only active records. If false, then returns only inactive records
         *
         * @generated from field: bool is_active = 1;
         */
        this.isActive = false;
        /**
         * The number of records that need to be sent in the response. Returns all records if it is set to -1
         *
         * @generated from field: int64 count = 2;
         */
        this.count = protobuf_1.protoInt64.zero;
        /**
         * The number that need to be offset by before fetching the records
         *
         * @generated from field: int64 offset = 3;
         */
        this.offset = protobuf_1.protoInt64.zero;
        /**
         * The sort order that is to be used to fetch the pagination response
         *
         * @generated from field: tcube.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: tcube.PACKAGING_SORT_KEY sort_key = 5;
         */
        this.sortKey = PACKAGING_SORT_KEY.PACKAGING_SORT_KEY_ID_UNSPECIFIED;
        /**
         * UUID of the entity
         *
         * @generated from field: string entity_uuid = 6;
         */
        this.entityUuid = "";
        /**
         * UUID of the location
         *
         * @generated from field: string location_uuid = 7;
         */
        this.locationUuid = "";
        /**
         * UUID of the zone
         *
         * @generated from field: string zone_uuid = 8;
         */
        this.zoneUuid = "";
        /**
         * Optional UUID of the associated product
         *
         * @generated from field: string product_uuid = 9;
         */
        this.productUuid = "";
        /**
         * Optional UUID of the associated batch
         *
         * @generated from field: string batch_uuid = 10;
         */
        this.batchUuid = "";
        /**
         * Describes the key with which the search operation needs to be performed
         *
         * @generated from field: string search_key = 11;
         */
        this.searchKey = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackagingsServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackagingsServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackagingsServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PackagingsServiceSearchAllReq, a, b);
    }
}
exports.PackagingsServiceSearchAllReq = PackagingsServiceSearchAllReq;
PackagingsServiceSearchAllReq.runtime = protobuf_1.proto3;
PackagingsServiceSearchAllReq.typeName = "tcube.PackagingsServiceSearchAllReq";
PackagingsServiceSearchAllReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(PACKAGING_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "location_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "zone_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "product_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "batch_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);