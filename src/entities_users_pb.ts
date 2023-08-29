// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file entities_users.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";

/**
 *
 * Describes the available sort keys for retrieving entities users
 *
 * @generated from enum tcube.ENTITY_USER_SORT_KEY
 */
export enum ENTITY_USER_SORT_KEY {
  /**
   * Fetch ordered results by id
   *
   * @generated from enum value: ENTITY_USER_SORT_KEY_ID_UNSPECIFIED = 0;
   */
  ENTITY_USER_SORT_KEY_ID_UNSPECIFIED = 0,

  /**
   * Fetch ordered results by the creation timestamp
   *
   * @generated from enum value: ENTITY_USER_SORT_KEY_CREATED_AT = 1;
   */
  ENTITY_USER_SORT_KEY_CREATED_AT = 1,

  /**
   * Fetch ordered results by the modified timestamp
   *
   * @generated from enum value: ENTITY_USER_SORT_KEY_MODIFIED_AT = 2;
   */
  ENTITY_USER_SORT_KEY_MODIFIED_AT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ENTITY_USER_SORT_KEY)
proto3.util.setEnumType(ENTITY_USER_SORT_KEY, "tcube.ENTITY_USER_SORT_KEY", [
  { no: 0, name: "ENTITY_USER_SORT_KEY_ID_UNSPECIFIED" },
  { no: 1, name: "ENTITY_USER_SORT_KEY_CREATED_AT" },
  { no: 2, name: "ENTITY_USER_SORT_KEY_MODIFIED_AT" },
]);

/**
 *
 * Describes the necessary data structure during creation of an entity user
 *
 * @generated from message tcube.EntitiesUsersServiceCreateRequest
 */
export class EntitiesUsersServiceCreateRequest extends Message<EntitiesUsersServiceCreateRequest> {
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
   * UUID of the user registered as the entity user
   *
   * @generated from field: string user_uuid = 10;
   */
  userUuid = "";

  /**
   * UUID of the associated role
   *
   * @generated from field: string role_uuid = 11;
   */
  roleUuid = "";

  constructor(data?: PartialMessage<EntitiesUsersServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntitiesUsersServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "user_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "role_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceCreateRequest {
    return new EntitiesUsersServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceCreateRequest {
    return new EntitiesUsersServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceCreateRequest {
    return new EntitiesUsersServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EntitiesUsersServiceCreateRequest | PlainMessage<EntitiesUsersServiceCreateRequest> | undefined, b: EntitiesUsersServiceCreateRequest | PlainMessage<EntitiesUsersServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(EntitiesUsersServiceCreateRequest, a, b);
  }
}

/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on an entity user
 *
 * @generated from message tcube.EntitiesUsersServiceUpdateRequest
 */
export class EntitiesUsersServiceUpdateRequest extends Message<EntitiesUsersServiceUpdateRequest> {
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
   * UUID of the associated role
   *
   * @generated from field: string role_uuid = 11;
   */
  roleUuid = "";

  constructor(data?: PartialMessage<EntitiesUsersServiceUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntitiesUsersServiceUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "role_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceUpdateRequest {
    return new EntitiesUsersServiceUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceUpdateRequest {
    return new EntitiesUsersServiceUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceUpdateRequest {
    return new EntitiesUsersServiceUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EntitiesUsersServiceUpdateRequest | PlainMessage<EntitiesUsersServiceUpdateRequest> | undefined, b: EntitiesUsersServiceUpdateRequest | PlainMessage<EntitiesUsersServiceUpdateRequest> | undefined): boolean {
    return proto3.util.equals(EntitiesUsersServiceUpdateRequest, a, b);
  }
}

/**
 *
 * Describes the data structure of each entity user on the platform
 *
 * @generated from message tcube.EntityUser
 */
export class EntityUser extends Message<EntityUser> {
  /**
   * Stores the metadata of this resource
   *
   * @generated from field: tcube.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 2;
   */
  entityUuid = "";

  /**
   * UUID of the user registered as the entity user
   *
   * @generated from field: string user_uuid = 10;
   */
  userUuid = "";

  /**
   * UUID of the associated role
   *
   * @generated from field: string role_uuid = 11;
   */
  roleUuid = "";

  constructor(data?: PartialMessage<EntityUser>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntityUser";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "user_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "role_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityUser {
    return new EntityUser().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityUser {
    return new EntityUser().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityUser {
    return new EntityUser().fromJsonString(jsonString, options);
  }

  static equals(a: EntityUser | PlainMessage<EntityUser> | undefined, b: EntityUser | PlainMessage<EntityUser> | undefined): boolean {
    return proto3.util.equals(EntityUser, a, b);
  }
}

/**
 *
 * Describes the data structure that stores a list of entities users
 *
 * @generated from message tcube.EntitiesUsersList
 */
export class EntitiesUsersList extends Message<EntitiesUsersList> {
  /**
   * List of entities users
   *
   * @generated from field: repeated tcube.EntityUser list = 1;
   */
  list: EntityUser[] = [];

  constructor(data?: PartialMessage<EntitiesUsersList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntitiesUsersList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: EntityUser, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersList {
    return new EntitiesUsersList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersList {
    return new EntitiesUsersList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersList {
    return new EntitiesUsersList().fromJsonString(jsonString, options);
  }

  static equals(a: EntitiesUsersList | PlainMessage<EntitiesUsersList> | undefined, b: EntitiesUsersList | PlainMessage<EntitiesUsersList> | undefined): boolean {
    return proto3.util.equals(EntitiesUsersList, a, b);
  }
}

/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.EntitiesUsersServicePaginationReq
 */
export class EntitiesUsersServicePaginationReq extends Message<EntitiesUsersServicePaginationReq> {
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
   * @generated from field: tcube.ENTITY_USER_SORT_KEY sort_key = 5;
   */
  sortKey = ENTITY_USER_SORT_KEY.ENTITY_USER_SORT_KEY_ID_UNSPECIFIED;

  /**
   * UUID of the entity
   *
   * @generated from field: string entity_uuid = 6;
   */
  entityUuid = "";

  constructor(data?: PartialMessage<EntitiesUsersServicePaginationReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntitiesUsersServicePaginationReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(ENTITY_USER_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServicePaginationReq {
    return new EntitiesUsersServicePaginationReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServicePaginationReq {
    return new EntitiesUsersServicePaginationReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServicePaginationReq {
    return new EntitiesUsersServicePaginationReq().fromJsonString(jsonString, options);
  }

  static equals(a: EntitiesUsersServicePaginationReq | PlainMessage<EntitiesUsersServicePaginationReq> | undefined, b: EntitiesUsersServicePaginationReq | PlainMessage<EntitiesUsersServicePaginationReq> | undefined): boolean {
    return proto3.util.equals(EntitiesUsersServicePaginationReq, a, b);
  }
}

/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.EntityUserPaginationResp
 */
export class EntityUserPaginationResp extends Message<EntityUserPaginationResp> {
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
   * @generated from field: repeated tcube.EntityUser payload = 3;
   */
  payload: EntityUser[] = [];

  constructor(data?: PartialMessage<EntityUserPaginationResp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntityUserPaginationResp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "payload", kind: "message", T: EntityUser, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityUserPaginationResp {
    return new EntityUserPaginationResp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityUserPaginationResp {
    return new EntityUserPaginationResp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityUserPaginationResp {
    return new EntityUserPaginationResp().fromJsonString(jsonString, options);
  }

  static equals(a: EntityUserPaginationResp | PlainMessage<EntityUserPaginationResp> | undefined, b: EntityUserPaginationResp | PlainMessage<EntityUserPaginationResp> | undefined): boolean {
    return proto3.util.equals(EntityUserPaginationResp, a, b);
  }
}

/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.EntitiesUsersServiceFilterReq
 */
export class EntitiesUsersServiceFilterReq extends Message<EntitiesUsersServiceFilterReq> {
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
   * @generated from field: tcube.ENTITY_USER_SORT_KEY sort_key = 5;
   */
  sortKey = ENTITY_USER_SORT_KEY.ENTITY_USER_SORT_KEY_ID_UNSPECIFIED;

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
   * UUID of the entity (optional, since the consumer might need to fetch records on the basis of other records, irrespective of the entity)
   *
   * @generated from field: string entity_uuid = 8;
   */
  entityUuid = "";

  /**
   * UUID of the user registered as the entity user
   *
   * @generated from field: string user_uuid = 20;
   */
  userUuid = "";

  /**
   * UUID of the associated role
   *
   * @generated from field: string role_uuid = 21;
   */
  roleUuid = "";

  constructor(data?: PartialMessage<EntitiesUsersServiceFilterReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntitiesUsersServiceFilterReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(ENTITY_USER_SORT_KEY) },
    { no: 6, name: "creation_timestamp_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "creation_timestamp_end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "user_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "role_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceFilterReq {
    return new EntitiesUsersServiceFilterReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceFilterReq {
    return new EntitiesUsersServiceFilterReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceFilterReq {
    return new EntitiesUsersServiceFilterReq().fromJsonString(jsonString, options);
  }

  static equals(a: EntitiesUsersServiceFilterReq | PlainMessage<EntitiesUsersServiceFilterReq> | undefined, b: EntitiesUsersServiceFilterReq | PlainMessage<EntitiesUsersServiceFilterReq> | undefined): boolean {
    return proto3.util.equals(EntitiesUsersServiceFilterReq, a, b);
  }
}

/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.EntitiesUsersServiceSearchAllReq
 */
export class EntitiesUsersServiceSearchAllReq extends Message<EntitiesUsersServiceSearchAllReq> {
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
   * @generated from field: tcube.ENTITY_USER_SORT_KEY sort_key = 5;
   */
  sortKey = ENTITY_USER_SORT_KEY.ENTITY_USER_SORT_KEY_ID_UNSPECIFIED;

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

  constructor(data?: PartialMessage<EntitiesUsersServiceSearchAllReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tcube.EntitiesUsersServiceSearchAllReq";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sort_order", kind: "enum", T: proto3.getEnumType(SORT_ORDER) },
    { no: 5, name: "sort_key", kind: "enum", T: proto3.getEnumType(ENTITY_USER_SORT_KEY) },
    { no: 6, name: "entity_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "search_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntitiesUsersServiceSearchAllReq {
    return new EntitiesUsersServiceSearchAllReq().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntitiesUsersServiceSearchAllReq {
    return new EntitiesUsersServiceSearchAllReq().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntitiesUsersServiceSearchAllReq {
    return new EntitiesUsersServiceSearchAllReq().fromJsonString(jsonString, options);
  }

  static equals(a: EntitiesUsersServiceSearchAllReq | PlainMessage<EntitiesUsersServiceSearchAllReq> | undefined, b: EntitiesUsersServiceSearchAllReq | PlainMessage<EntitiesUsersServiceSearchAllReq> | undefined): boolean {
    return proto3.util.equals(EntitiesUsersServiceSearchAllReq, a, b);
  }
}
