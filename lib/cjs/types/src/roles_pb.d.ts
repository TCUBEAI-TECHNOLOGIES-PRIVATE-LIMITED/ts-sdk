import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving roles
 *
 * @generated from enum tcube.ROLE_SORT_KEY
 */
export declare enum ROLE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ROLE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ROLE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ROLE_SORT_KEY_CREATED_AT = 1;
     */
    ROLE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ROLE_SORT_KEY_MODIFIED_AT = 2;
     */
    ROLE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: ROLE_SORT_KEY_NAME = 10;
     */
    ROLE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: ROLE_SORT_KEY_CODE = 11;
     */
    ROLE_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the data structure of each role access on the platform
 *
 * @generated from message tcube.RoleAccess
 */
export declare class RoleAccess extends Message<RoleAccess> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The associated Role UUID
     *
     * @generated from field: string role_uuid = 10;
     */
    roleUuid: string;
    /**
     * The menu UID (or internal code)
     *
     * @generated from field: string menu_uid = 11;
     */
    menuUid: string;
    /**
     * Denotes if the menu is accessible
     *
     * @generated from field: bool is_accessible = 12;
     */
    isAccessible: boolean;
    constructor(data?: PartialMessage<RoleAccess>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.RoleAccess";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleAccess;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleAccess;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleAccess;
    static equals(a: RoleAccess | PlainMessage<RoleAccess> | undefined, b: RoleAccess | PlainMessage<RoleAccess> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each role on the platform
 *
 * @generated from message tcube.Role
 */
export declare class Role extends Message<Role> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The name of the role
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the role
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Describe the role
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * List of role accesss accesses
     *
     * @generated from field: repeated tcube.RoleAccess access_list = 13;
     */
    accessList: RoleAccess[];
    constructor(data?: PartialMessage<Role>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Role";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role;
    static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of roles
 *
 * @generated from message tcube.RolesList
 */
export declare class RolesList extends Message<RolesList> {
    /**
     * List of roles
     *
     * @generated from field: repeated tcube.Role list = 1;
     */
    list: Role[];
    constructor(data?: PartialMessage<RolesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.RolesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesList;
    static equals(a: RolesList | PlainMessage<RolesList> | undefined, b: RolesList | PlainMessage<RolesList> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.RolePaginationResp
 */
export declare class RolePaginationResp extends Message<RolePaginationResp> {
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
     * @generated from field: repeated tcube.Role payload = 3;
     */
    payload: Role[];
    constructor(data?: PartialMessage<RolePaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.RolePaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolePaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolePaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolePaginationResp;
    static equals(a: RolePaginationResp | PlainMessage<RolePaginationResp> | undefined, b: RolePaginationResp | PlainMessage<RolePaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation/updation of a role access
 *
 * @generated from message tcube.RolesServiceAccessCreateAndUpdateRequest
 */
export declare class RolesServiceAccessCreateAndUpdateRequest extends Message<RolesServiceAccessCreateAndUpdateRequest> {
    /**
     * The menu UID (or internal code)
     *
     * @generated from field: string menu_uid = 11;
     */
    menuUid: string;
    /**
     * Denotes if the menu is accessible
     *
     * @generated from field: bool is_accessible = 12;
     */
    isAccessible: boolean;
    constructor(data?: PartialMessage<RolesServiceAccessCreateAndUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.RolesServiceAccessCreateAndUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static equals(a: RolesServiceAccessCreateAndUpdateRequest | PlainMessage<RolesServiceAccessCreateAndUpdateRequest> | undefined, b: RolesServiceAccessCreateAndUpdateRequest | PlainMessage<RolesServiceAccessCreateAndUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a role
 *
 * @generated from message tcube.RolesServiceCreateRequest
 */
export declare class RolesServiceCreateRequest extends Message<RolesServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The name of the role
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the role
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Describe the role
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of accessible menu UIDs
     *
     * @generated from field: repeated tcube.RolesServiceAccessCreateAndUpdateRequest access_list = 13;
     */
    accessList: RolesServiceAccessCreateAndUpdateRequest[];
    constructor(data?: PartialMessage<RolesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.RolesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceCreateRequest;
    static equals(a: RolesServiceCreateRequest | PlainMessage<RolesServiceCreateRequest> | undefined, b: RolesServiceCreateRequest | PlainMessage<RolesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a role
 *
 * @generated from message tcube.RolesServiceUpdateRequest
 */
export declare class RolesServiceUpdateRequest extends Message<RolesServiceUpdateRequest> {
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
     * The name of the role
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the role
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Describe the role
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of accessible menu UIDs
     *
     * @generated from field: repeated tcube.RolesServiceAccessCreateAndUpdateRequest access_list = 13;
     */
    accessList: RolesServiceAccessCreateAndUpdateRequest[];
    constructor(data?: PartialMessage<RolesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.RolesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceUpdateRequest;
    static equals(a: RolesServiceUpdateRequest | PlainMessage<RolesServiceUpdateRequest> | undefined, b: RolesServiceUpdateRequest | PlainMessage<RolesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.RolesServicePaginationReq
 */
export declare class RolesServicePaginationReq extends Message<RolesServicePaginationReq> {
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
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey: ROLE_SORT_KEY;
    constructor(data?: PartialMessage<RolesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.RolesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServicePaginationReq;
    static equals(a: RolesServicePaginationReq | PlainMessage<RolesServicePaginationReq> | undefined, b: RolesServicePaginationReq | PlainMessage<RolesServicePaginationReq> | undefined): boolean;
}
//# sourceMappingURL=roles_pb.d.ts.map