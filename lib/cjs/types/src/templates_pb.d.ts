import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Stores the available templates
 *
 * @generated from enum scanswift.TEMPLATE_TYPE
 */
export declare enum TEMPLATE_TYPE {
    /**
     * Stores an invalid template, which is the default template
     *
     * @generated from enum value: TEMPLATE_TYPE_ANY_UNSPECIFIED = 0;
     */
    TEMPLATE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Stores a template for A4 paper, with 0-0-0-0 TRBM margins, and 0mm X margin and 0mm Y margin between QR codes, and 53mm width and 30mm height, with 24mm QR code size, and 12 font size
     *
     * @generated from enum value: TEMPLATE_TYPE_A4_0T0R0B0L_0X0Y_53W_30H_16QR_7F = 1;
     */
    TEMPLATE_TYPE_A4_0T0R0B0L_0X0Y_53W_30H_16QR_7F = 1
}
/**
 *
 * Describes the available sort keys for retrieving templates
 *
 * @generated from enum scanswift.TEMPLATE_SORT_KEY
 */
export declare enum TEMPLATE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: TEMPLATE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TEMPLATE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: TEMPLATE_SORT_KEY_CREATED_AT = 1;
     */
    TEMPLATE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: TEMPLATE_SORT_KEY_MODIFIED_AT = 2;
     */
    TEMPLATE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: TEMPLATE_SORT_KEY_NAME = 10;
     */
    TEMPLATE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: TEMPLATE_SORT_KEY_CODE = 11;
     */
    TEMPLATE_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a template
 *
 * @generated from message scanswift.TemplatesServiceCreateRequest
 */
export declare class TemplatesServiceCreateRequest extends Message<TemplatesServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The name of the template
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Description of the template
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The template type
     *
     * @generated from field: scanswift.TEMPLATE_TYPE type = 13;
     */
    type: TEMPLATE_TYPE;
    constructor(data?: PartialMessage<TemplatesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.TemplatesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplatesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplatesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplatesServiceCreateRequest;
    static equals(a: TemplatesServiceCreateRequest | PlainMessage<TemplatesServiceCreateRequest> | undefined, b: TemplatesServiceCreateRequest | PlainMessage<TemplatesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a template
 *
 * @generated from message scanswift.TemplatesServiceUpdateRequest
 */
export declare class TemplatesServiceUpdateRequest extends Message<TemplatesServiceUpdateRequest> {
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
     * The name of the template
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Description of the template
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<TemplatesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.TemplatesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplatesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplatesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplatesServiceUpdateRequest;
    static equals(a: TemplatesServiceUpdateRequest | PlainMessage<TemplatesServiceUpdateRequest> | undefined, b: TemplatesServiceUpdateRequest | PlainMessage<TemplatesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each template on the platform
 *
 * @generated from message scanswift.Template
 */
export declare class Template extends Message<Template> {
    /**
     * Stores the metadata of this resource
     *
     * @generated from field: scanswift.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The name of the template
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the template
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the template
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The template type
     *
     * @generated from field: scanswift.TEMPLATE_TYPE type = 13;
     */
    type: TEMPLATE_TYPE;
    constructor(data?: PartialMessage<Template>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Template";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Template;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Template;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Template;
    static equals(a: Template | PlainMessage<Template> | undefined, b: Template | PlainMessage<Template> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of templates
 *
 * @generated from message scanswift.TemplatesList
 */
export declare class TemplatesList extends Message<TemplatesList> {
    /**
     * List of templates
     *
     * @generated from field: repeated scanswift.Template list = 1;
     */
    list: Template[];
    constructor(data?: PartialMessage<TemplatesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.TemplatesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplatesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplatesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplatesList;
    static equals(a: TemplatesList | PlainMessage<TemplatesList> | undefined, b: TemplatesList | PlainMessage<TemplatesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.TemplatesServicePaginationReq
 */
export declare class TemplatesServicePaginationReq extends Message<TemplatesServicePaginationReq> {
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
     * @generated from field: scanswift.TEMPLATE_SORT_KEY sort_key = 5;
     */
    sortKey: TEMPLATE_SORT_KEY;
    constructor(data?: PartialMessage<TemplatesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.TemplatesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplatesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplatesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplatesServicePaginationReq;
    static equals(a: TemplatesServicePaginationReq | PlainMessage<TemplatesServicePaginationReq> | undefined, b: TemplatesServicePaginationReq | PlainMessage<TemplatesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.TemplatePaginationResp
 */
export declare class TemplatePaginationResp extends Message<TemplatePaginationResp> {
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
     * @generated from field: repeated scanswift.Template payload = 3;
     */
    payload: Template[];
    constructor(data?: PartialMessage<TemplatePaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.TemplatePaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplatePaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplatePaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplatePaginationResp;
    static equals(a: TemplatePaginationResp | PlainMessage<TemplatePaginationResp> | undefined, b: TemplatePaginationResp | PlainMessage<TemplatePaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.TemplatesServiceFilterReq
 */
export declare class TemplatesServiceFilterReq extends Message<TemplatesServiceFilterReq> {
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
     * @generated from field: scanswift.TEMPLATE_SORT_KEY sort_key = 5;
     */
    sortKey: TEMPLATE_SORT_KEY;
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
     * The name of the template
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the template
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<TemplatesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.TemplatesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplatesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplatesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplatesServiceFilterReq;
    static equals(a: TemplatesServiceFilterReq | PlainMessage<TemplatesServiceFilterReq> | undefined, b: TemplatesServiceFilterReq | PlainMessage<TemplatesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.TemplatesServiceSearchAllReq
 */
export declare class TemplatesServiceSearchAllReq extends Message<TemplatesServiceSearchAllReq> {
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
     * @generated from field: scanswift.TEMPLATE_SORT_KEY sort_key = 5;
     */
    sortKey: TEMPLATE_SORT_KEY;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<TemplatesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.TemplatesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplatesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplatesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplatesServiceSearchAllReq;
    static equals(a: TemplatesServiceSearchAllReq | PlainMessage<TemplatesServiceSearchAllReq> | undefined, b: TemplatesServiceSearchAllReq | PlainMessage<TemplatesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=templates_pb.d.ts.map