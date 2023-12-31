"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file entities.proto (package scanswift, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesServiceSearchAllReq = exports.EntitiesServiceFilterReq = exports.EntityPaginationResp = exports.EntitiesServicePaginationReq = exports.EntitiesList = exports.Entity = exports.EntitiesServiceUpdateRequest = exports.EntitiesServiceCreateRequest = exports.ENTITY_SORT_KEY = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the available sort keys for retrieving entities
 *
 * @generated from enum scanswift.ENTITY_SORT_KEY
 */
var ENTITY_SORT_KEY;
(function (ENTITY_SORT_KEY) {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ENTITY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ENTITY_SORT_KEY[ENTITY_SORT_KEY["ENTITY_SORT_KEY_ID_UNSPECIFIED"] = 0] = "ENTITY_SORT_KEY_ID_UNSPECIFIED";
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ENTITY_SORT_KEY_CREATED_AT = 1;
     */
    ENTITY_SORT_KEY[ENTITY_SORT_KEY["ENTITY_SORT_KEY_CREATED_AT"] = 1] = "ENTITY_SORT_KEY_CREATED_AT";
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ENTITY_SORT_KEY_MODIFIED_AT = 2;
     */
    ENTITY_SORT_KEY[ENTITY_SORT_KEY["ENTITY_SORT_KEY_MODIFIED_AT"] = 2] = "ENTITY_SORT_KEY_MODIFIED_AT";
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: ENTITY_SORT_KEY_NAME = 10;
     */
    ENTITY_SORT_KEY[ENTITY_SORT_KEY["ENTITY_SORT_KEY_NAME"] = 10] = "ENTITY_SORT_KEY_NAME";
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: ENTITY_SORT_KEY_CODE = 11;
     */
    ENTITY_SORT_KEY[ENTITY_SORT_KEY["ENTITY_SORT_KEY_CODE"] = 11] = "ENTITY_SORT_KEY_CODE";
})(ENTITY_SORT_KEY || (exports.ENTITY_SORT_KEY = ENTITY_SORT_KEY = {}));
// Retrieve enum metadata with: proto3.getEnumType(ENTITY_SORT_KEY)
protobuf_1.proto3.util.setEnumType(ENTITY_SORT_KEY, "scanswift.ENTITY_SORT_KEY", [
    { no: 0, name: "ENTITY_SORT_KEY_ID_UNSPECIFIED" },
    { no: 1, name: "ENTITY_SORT_KEY_CREATED_AT" },
    { no: 2, name: "ENTITY_SORT_KEY_MODIFIED_AT" },
    { no: 10, name: "ENTITY_SORT_KEY_NAME" },
    { no: 11, name: "ENTITY_SORT_KEY_CODE" },
]);
/**
 *
 * Describes the necessary data structure during creation of a entity
 *
 * @generated from message scanswift.EntitiesServiceCreateRequest
 */
class EntitiesServiceCreateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * The name of the entity
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The global identifier of the entity
         *
         * @generated from field: string global_identifier = 11;
         */
        this.globalIdentifier = "";
        /**
         * Description of the entity
         *
         * @generated from field: string description = 14;
         */
        this.description = "";
        /**
         * The email address of the entity
         *
         * @generated from field: string email = 15;
         */
        this.email = "";
        /**
         * The phone number of the entity
         *
         * @generated from field: string phone = 16;
         */
        this.phone = "";
        /**
         * The address of the entity
         *
         * @generated from field: string address = 17;
         */
        this.address = "";
        /**
         * The city in which the entity is based out of
         *
         * @generated from field: string city = 18;
         */
        this.city = "";
        /**
         * The state in which the entity is based out of
         *
         * @generated from field: string state = 19;
         */
        this.state = "";
        /**
         * The zipcode of the location in which the entity is based out of
         *
         * @generated from field: string zip_code = 20;
         */
        this.zipCode = "";
        /**
         * An optional custom domain name, which will be used to display info about serials, packagings and shippings
         *
         * @generated from field: string domain = 21;
         */
        this.domain = "";
        /**
         * The first name of the entity administrator
         *
         * @generated from field: string first_name = 30;
         */
        this.firstName = "";
        /**
         * The last name of the entity administrator
         *
         * // The password with which the user can login for the first time
         * string plain_text_password = 32 [(validate.rules).string = {
         *     pattern:   "^[0-9A-Za-z_@\\-]+$", // No spaces
         *     max_bytes: 100,
         * }];
         *
         * @generated from field: string last_name = 31;
         */
        this.lastName = "";
        /**
         * The UUID of the role of the user that is creating this entity
         *
         * @generated from field: string role_uuid = 40;
         */
        this.roleUuid = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EntitiesServiceCreateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EntitiesServiceCreateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EntitiesServiceCreateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EntitiesServiceCreateRequest, a, b);
    }
}
exports.EntitiesServiceCreateRequest = EntitiesServiceCreateRequest;
EntitiesServiceCreateRequest.runtime = protobuf_1.proto3;
EntitiesServiceCreateRequest.typeName = "scanswift.EntitiesServiceCreateRequest";
EntitiesServiceCreateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "global_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "zip_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 31, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 40, name: "role_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a entity
 *
 * @generated from message scanswift.EntitiesServiceUpdateRequest
 */
class EntitiesServiceUpdateRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Stores any comment that the user might add during this operation
         *
         * @generated from field: string user_comment = 1;
         */
        this.userComment = "";
        /**
         * The UUID of the resource that needs to be updated
         *
         * @generated from field: string uuid = 2;
         */
        this.uuid = "";
        /**
         * The name of the entity
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The global identifier of the entity
         *
         * @generated from field: string global_identifier = 11;
         */
        this.globalIdentifier = "";
        /**
         * Description of the entity
         *
         * @generated from field: string description = 14;
         */
        this.description = "";
        /**
         * The email address of the entity
         *
         * @generated from field: string email = 15;
         */
        this.email = "";
        /**
         * The phone number of the entity
         *
         * @generated from field: string phone = 16;
         */
        this.phone = "";
        /**
         * The address of the entity
         *
         * @generated from field: string address = 17;
         */
        this.address = "";
        /**
         * The city in which the entity is based out of
         *
         * @generated from field: string city = 18;
         */
        this.city = "";
        /**
         * The state in which the entity is based out of
         *
         * @generated from field: string state = 19;
         */
        this.state = "";
        /**
         * The zipcode of the location in which the entity is based out of
         *
         * @generated from field: string zip_code = 20;
         */
        this.zipCode = "";
        /**
         * An optional custom domain name, which will be used to display info about serials, packagings and shippings
         *
         * @generated from field: string domain = 21;
         */
        this.domain = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EntitiesServiceUpdateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EntitiesServiceUpdateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EntitiesServiceUpdateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EntitiesServiceUpdateRequest, a, b);
    }
}
exports.EntitiesServiceUpdateRequest = EntitiesServiceUpdateRequest;
EntitiesServiceUpdateRequest.runtime = protobuf_1.proto3;
EntitiesServiceUpdateRequest.typeName = "scanswift.EntitiesServiceUpdateRequest";
EntitiesServiceUpdateRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "global_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "zip_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the data structure of each entity on the platform
 *
 * @generated from message scanswift.Entity
 */
class Entity extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * The name of the entity
         *
         * @generated from field: string name = 10;
         */
        this.name = "";
        /**
         * The global identifier of the entity
         *
         * @generated from field: string global_identifier = 11;
         */
        this.globalIdentifier = "";
        /**
         * Description of the entity
         *
         * @generated from field: string description = 12;
         */
        this.description = "";
        /**
         * Code of the entity
         *
         * @generated from field: string code = 13;
         */
        this.code = "";
        /**
         * The email address of the entity
         *
         * @generated from field: string email = 14;
         */
        this.email = "";
        /**
         * The phone number of the entity
         *
         * @generated from field: string phone = 15;
         */
        this.phone = "";
        /**
         * The address of the entity
         *
         * @generated from field: string address = 16;
         */
        this.address = "";
        /**
         * The city in which the entity is based out of
         *
         * @generated from field: string city = 17;
         */
        this.city = "";
        /**
         * The state in which the entity is based out of
         *
         * @generated from field: string state = 18;
         */
        this.state = "";
        /**
         * The zipcode of the location in which the entity is based out of
         *
         * @generated from field: string zip_code = 19;
         */
        this.zipCode = "";
        /**
         * Stores if the entity has been verified
         *
         * @generated from field: bool is_verified = 20;
         */
        this.isVerified = false;
        /**
         * An optional custom domain name, which will be used to display info about serials, packagings and shippings
         *
         * @generated from field: string domain = 21;
         */
        this.domain = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Entity().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Entity().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Entity().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Entity, a, b);
    }
}
exports.Entity = Entity;
Entity.runtime = protobuf_1.proto3;
Entity.typeName = "scanswift.Entity";
Entity.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: base_pb_js_1.Metadata },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "global_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "zip_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "is_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the data structure that stores a list of entities
 *
 * @generated from message scanswift.EntitiesList
 */
class EntitiesList extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * List of entities
         *
         * @generated from field: repeated scanswift.Entity list = 1;
         */
        this.list = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EntitiesList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EntitiesList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EntitiesList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EntitiesList, a, b);
    }
}
exports.EntitiesList = EntitiesList;
EntitiesList.runtime = protobuf_1.proto3;
EntitiesList.typeName = "scanswift.EntitiesList";
EntitiesList.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: Entity, repeated: true },
]);
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.EntitiesServicePaginationReq
 */
class EntitiesServicePaginationReq extends protobuf_1.Message {
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
         * @generated from field: scanswift.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: scanswift.ENTITY_SORT_KEY sort_key = 5;
         */
        this.sortKey = ENTITY_SORT_KEY.ENTITY_SORT_KEY_ID_UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EntitiesServicePaginationReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EntitiesServicePaginationReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EntitiesServicePaginationReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EntitiesServicePaginationReq, a, b);
    }
}
exports.EntitiesServicePaginationReq = EntitiesServicePaginationReq;
EntitiesServicePaginationReq.runtime = protobuf_1.proto3;
EntitiesServicePaginationReq.typeName = "scanswift.EntitiesServicePaginationReq";
EntitiesServicePaginationReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(ENTITY_SORT_KEY) },
]);
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.EntityPaginationResp
 */
class EntityPaginationResp extends protobuf_1.Message {
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
         * @generated from field: repeated scanswift.Entity payload = 3;
         */
        this.payload = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EntityPaginationResp().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EntityPaginationResp().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EntityPaginationResp().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EntityPaginationResp, a, b);
    }
}
exports.EntityPaginationResp = EntityPaginationResp;
EntityPaginationResp.runtime = protobuf_1.proto3;
EntityPaginationResp.typeName = "scanswift.EntityPaginationResp";
EntityPaginationResp.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "payload", kind: "message", T: Entity, repeated: true },
]);
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.EntitiesServiceFilterReq
 */
class EntitiesServiceFilterReq extends protobuf_1.Message {
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
         * @generated from field: scanswift.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: scanswift.ENTITY_SORT_KEY sort_key = 5;
         */
        this.sortKey = ENTITY_SORT_KEY.ENTITY_SORT_KEY_ID_UNSPECIFIED;
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
         * The name of the entity
         *
         * @generated from field: string name = 20;
         */
        this.name = "";
        /**
         * Code of the entity
         *
         * @generated from field: string code = 21;
         */
        this.code = "";
        /**
         * The email address of the entity
         *
         * @generated from field: string email = 23;
         */
        this.email = "";
        /**
         * The phone number of the entity
         *
         * @generated from field: string phone = 24;
         */
        this.phone = "";
        /**
         * The city in which the entity is based out of
         *
         * @generated from field: string city = 26;
         */
        this.city = "";
        /**
         * The state in which the entity is based out of
         *
         * @generated from field: string state = 27;
         */
        this.state = "";
        /**
         * The zipcode of the location in which the entity is based out of
         *
         * @generated from field: string zip_code = 28;
         */
        this.zipCode = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EntitiesServiceFilterReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EntitiesServiceFilterReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EntitiesServiceFilterReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EntitiesServiceFilterReq, a, b);
    }
}
exports.EntitiesServiceFilterReq = EntitiesServiceFilterReq;
EntitiesServiceFilterReq.runtime = protobuf_1.proto3;
EntitiesServiceFilterReq.typeName = "scanswift.EntitiesServiceFilterReq";
EntitiesServiceFilterReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(ENTITY_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 23, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 24, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 26, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 27, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 28, name: "zip_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.EntitiesServiceSearchAllReq
 */
class EntitiesServiceSearchAllReq extends protobuf_1.Message {
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
         * @generated from field: scanswift.SORT_ORDER sort_order = 4;
         */
        this.sortOrder = base_pb_js_1.SORT_ORDER.ASCENDING_UNSPECIFIED;
        /**
         * The sort key that is to be used to fetch the pagination response
         *
         * @generated from field: scanswift.ENTITY_SORT_KEY sort_key = 5;
         */
        this.sortKey = ENTITY_SORT_KEY.ENTITY_SORT_KEY_ID_UNSPECIFIED;
        /**
         * Describes the key with which the search operation needs to be performed
         *
         * @generated from field: string search_key = 11;
         */
        this.searchKey = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EntitiesServiceSearchAllReq().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EntitiesServiceSearchAllReq().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EntitiesServiceSearchAllReq().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EntitiesServiceSearchAllReq, a, b);
    }
}
exports.EntitiesServiceSearchAllReq = EntitiesServiceSearchAllReq;
EntitiesServiceSearchAllReq.runtime = protobuf_1.proto3;
EntitiesServiceSearchAllReq.typeName = "scanswift.EntitiesServiceSearchAllReq";
EntitiesServiceSearchAllReq.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: protobuf_1.proto3.getEnumType(base_pb_js_1.SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: protobuf_1.proto3.getEnumType(ENTITY_SORT_KEY) },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
