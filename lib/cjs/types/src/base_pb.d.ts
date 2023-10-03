import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 *
 * Describes the order in which the records need to be returned
 *
 * @generated from enum tcube.SORT_ORDER
 */
export declare enum SORT_ORDER {
    /**
     * Fetch results in the ascending order of the provided sort key
     *
     * @generated from enum value: ASCENDING_UNSPECIFIED = 0;
     */
    ASCENDING_UNSPECIFIED = 0,
    /**
     * Fetch results in the descending order of the provided sort key
     *
     * @generated from enum value: DESCENDING = 1;
     */
    DESCENDING = 1
}
/**
 *
 * Describes the supported device types
 *
 * @generated from enum tcube.DEVICE_TYPE
 */
export declare enum DEVICE_TYPE {
    /**
     * Web browser
     *
     * @generated from enum value: WEB_UNSPECIFIED = 0;
     */
    WEB_UNSPECIFIED = 0,
    /**
     * Mobile device
     *
     * @generated from enum value: MOBILE = 1;
     */
    MOBILE = 1,
    /**
     * Desktop application
     *
     * @generated from enum value: DESKTOP = 2;
     */
    DESKTOP = 2
}
/**
 *
 * Describes all the possible values within a logbook operation
 *
 * @generated from enum tcube.LOGBOOK_OPERATION
 */
export declare enum LOGBOOK_OPERATION {
    /**
     * Create a resource
     *
     * @generated from enum value: CREATE_UNSPECIFIED = 0;
     */
    CREATE_UNSPECIFIED = 0,
    /**
     * Update a resource
     *
     * @generated from enum value: UPDATE = 1;
     */
    UPDATE = 1,
    /**
     * Archive a resource
     *
     * @generated from enum value: ARCHIVE = 2;
     */
    ARCHIVE = 2,
    /**
     * Restore a resource
     *
     * @generated from enum value: RESTORE = 3;
     */
    RESTORE = 3
}
/**
 *
 * Describes an empty object
 *
 * @generated from message tcube.Empty
 */
export declare class Empty extends Message<Empty> {
    constructor(data?: PartialMessage<Empty>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Empty";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty;
    static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean;
}
/**
 *
 * Describes the boolean response
 *
 * @generated from message tcube.BooleanResponse
 */
export declare class BooleanResponse extends Message<BooleanResponse> {
    /**
     * Stores if the value is true or false
     *
     * @generated from field: bool value = 1;
     */
    value: boolean;
    constructor(data?: PartialMessage<BooleanResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.BooleanResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BooleanResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BooleanResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BooleanResponse;
    static equals(a: BooleanResponse | PlainMessage<BooleanResponse> | undefined, b: BooleanResponse | PlainMessage<BooleanResponse> | undefined): boolean;
}
/**
 *
 * Describes the response that contains a URL endpoint
 *
 * @generated from message tcube.URLResponse
 */
export declare class URLResponse extends Message<URLResponse> {
    /**
     * Stores the url of the resource
     *
     * @generated from field: string url = 1;
     */
    url: string;
    constructor(data?: PartialMessage<URLResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.URLResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): URLResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): URLResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): URLResponse;
    static equals(a: URLResponse | PlainMessage<URLResponse> | undefined, b: URLResponse | PlainMessage<URLResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload for assigning an image to a record
 *
 * @generated from message tcube.ImageAssignRequest
 */
export declare class ImageAssignRequest extends Message<ImageAssignRequest> {
    /**
     * UUID of the record
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The content of the image
     *
     * @generated from field: bytes image = 10;
     */
    image: Uint8Array;
    /**
     * The MIME type of the image
     *
     * @generated from field: string mime_type = 11;
     */
    mimeType: string;
    constructor(data?: PartialMessage<ImageAssignRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ImageAssignRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAssignRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAssignRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAssignRequest;
    static equals(a: ImageAssignRequest | PlainMessage<ImageAssignRequest> | undefined, b: ImageAssignRequest | PlainMessage<ImageAssignRequest> | undefined): boolean;
}
/**
 *
 * Describes a generic response that consists of info of an image
 *
 * @generated from message tcube.ImageResponse
 */
export declare class ImageResponse extends Message<ImageResponse> {
    /**
     * Stores the raw image content
     *
     * @generated from field: bytes image = 1;
     */
    image: Uint8Array;
    /**
     * Stores the MIME type of the image
     *
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    /**
     * The timestamp of when the image was captured
     *
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<ImageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ImageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageResponse;
    static equals(a: ImageResponse | PlainMessage<ImageResponse> | undefined, b: ImageResponse | PlainMessage<ImageResponse> | undefined): boolean;
}
/**
 *
 * Describes the response payload that consists of a file
 *
 * @generated from message tcube.FileResponse
 */
export declare class FileResponse extends Message<FileResponse> {
    /**
     * Stores the raw file content
     *
     * @generated from field: bytes content = 1;
     */
    content: Uint8Array;
    /**
     * Stores the MIME type of the file
     *
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    constructor(data?: PartialMessage<FileResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.FileResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileResponse;
    static equals(a: FileResponse | PlainMessage<FileResponse> | undefined, b: FileResponse | PlainMessage<FileResponse> | undefined): boolean;
}
/**
 *
 * Describes the status of the records returned to a request
 *
 * @generated from message tcube.ActiveRequest
 */
export declare class ActiveRequest extends Message<ActiveRequest> {
    /**
     * Used in ViewAll procedural calls, to denote if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    constructor(data?: PartialMessage<ActiveRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ActiveRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveRequest;
    static equals(a: ActiveRequest | PlainMessage<ActiveRequest> | undefined, b: ActiveRequest | PlainMessage<ActiveRequest> | undefined): boolean;
}
/**
 *
 * Describes the status of the records returned to a request specific to an entity
 *
 * @generated from message tcube.ActiveInEntityRequest
 */
export declare class ActiveInEntityRequest extends Message<ActiveInEntityRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Stores the entity UUID and limits the query to the appropriate entity
     *
     * @generated from field: string entity_uuid = 2;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ActiveInEntityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ActiveInEntityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveInEntityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveInEntityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveInEntityRequest;
    static equals(a: ActiveInEntityRequest | PlainMessage<ActiveInEntityRequest> | undefined, b: ActiveInEntityRequest | PlainMessage<ActiveInEntityRequest> | undefined): boolean;
}
/**
 *
 * Describes the status of the records returned to a request specific to a locaation
 *
 * @generated from message tcube.ActiveInLocationRequest
 */
export declare class ActiveInLocationRequest extends Message<ActiveInLocationRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Stores the location UUID and limits the query to the appropriate location
     *
     * @generated from field: string location_uuid = 2;
     */
    locationUuid: string;
    constructor(data?: PartialMessage<ActiveInLocationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ActiveInLocationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveInLocationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveInLocationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveInLocationRequest;
    static equals(a: ActiveInLocationRequest | PlainMessage<ActiveInLocationRequest> | undefined, b: ActiveInLocationRequest | PlainMessage<ActiveInLocationRequest> | undefined): boolean;
}
/**
 *
 * Describes the status of the records returned to a request specific to a product
 *
 * @generated from message tcube.ActiveForProductRequest
 */
export declare class ActiveForProductRequest extends Message<ActiveForProductRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Stores the product UUID and limits the query to the appropriate product
     *
     * @generated from field: string product_uuid = 2;
     */
    productUuid: string;
    constructor(data?: PartialMessage<ActiveForProductRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ActiveForProductRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveForProductRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveForProductRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveForProductRequest;
    static equals(a: ActiveForProductRequest | PlainMessage<ActiveForProductRequest> | undefined, b: ActiveForProductRequest | PlainMessage<ActiveForProductRequest> | undefined): boolean;
}
/**
 *
 * Describes the payload for a request to determine the count of records
 *
 * @generated from message tcube.CountRequest
 */
export declare class CountRequest extends Message<CountRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    constructor(data?: PartialMessage<CountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.CountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountRequest;
    static equals(a: CountRequest | PlainMessage<CountRequest> | undefined, b: CountRequest | PlainMessage<CountRequest> | undefined): boolean;
}
/**
 *
 * Describes the payload for a request to determine the count of records within a specific entity
 *
 * @generated from message tcube.CountInEntityRequest
 */
export declare class CountInEntityRequest extends Message<CountInEntityRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Stores the entity UUID and limits the query to the appropriate entity
     *
     * @generated from field: string entity_uuid = 2;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<CountInEntityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.CountInEntityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountInEntityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountInEntityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountInEntityRequest;
    static equals(a: CountInEntityRequest | PlainMessage<CountInEntityRequest> | undefined, b: CountInEntityRequest | PlainMessage<CountInEntityRequest> | undefined): boolean;
}
/**
 *
 * Describes the payload for a request to determine the count of records within a specific entity's location
 *
 * @generated from message tcube.CountInLocationRequest
 */
export declare class CountInLocationRequest extends Message<CountInLocationRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Stores the location UUID and limits the query to the appropriate location
     *
     * @generated from field: string location_uuid = 2;
     */
    locationUuid: string;
    constructor(data?: PartialMessage<CountInLocationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.CountInLocationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountInLocationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountInLocationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountInLocationRequest;
    static equals(a: CountInLocationRequest | PlainMessage<CountInLocationRequest> | undefined, b: CountInLocationRequest | PlainMessage<CountInLocationRequest> | undefined): boolean;
}
/**
 *
 * Describes the payload for a request to determine the count of records within a specific product
 *
 * @generated from message tcube.CountForProductRequest
 */
export declare class CountForProductRequest extends Message<CountForProductRequest> {
    /**
     * Denotes if only active records need to be returned
     *
     * @generated from field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Stores the product UUID and limits the query to the appropriate product
     *
     * @generated from field: string product_uuid = 2;
     */
    productUuid: string;
    constructor(data?: PartialMessage<CountForProductRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.CountForProductRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountForProductRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountForProductRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountForProductRequest;
    static equals(a: CountForProductRequest | PlainMessage<CountForProductRequest> | undefined, b: CountForProductRequest | PlainMessage<CountForProductRequest> | undefined): boolean;
}
/**
 *
 * Describes the count response
 *
 * @generated from message tcube.CountResponse
 */
export declare class CountResponse extends Message<CountResponse> {
    /**
     * The number of records
     *
     * @generated from field: int64 count = 1;
     */
    count: bigint;
    constructor(data?: PartialMessage<CountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.CountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountResponse;
    static equals(a: CountResponse | PlainMessage<CountResponse> | undefined, b: CountResponse | PlainMessage<CountResponse> | undefined): boolean;
}
/**
 *
 * Describes a string response
 *
 * @generated from message tcube.StringResponse
 */
export declare class StringResponse extends Message<StringResponse> {
    /**
     * Stores the message
     *
     * @generated from field: string value = 1;
     */
    value: string;
    constructor(data?: PartialMessage<StringResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.StringResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringResponse;
    static equals(a: StringResponse | PlainMessage<StringResponse> | undefined, b: StringResponse | PlainMessage<StringResponse> | undefined): boolean;
}
/**
 *
 * Describes the metadata of each resource
 *
 * @generated from message tcube.Metadata
 */
export declare class Metadata extends Message<Metadata> {
    /**
     * ID of the resource
     *
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 5;
     */
    uuid: string;
    /**
     * Stores the UUID of the user who added this resource
     *
     * @generated from field: string added_by_user_uuid = 6;
     */
    addedByUserUuid: string;
    /**
     * Represents if the resource is active
     *
     * @generated from field: bool is_active = 7;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when the resource was created
     *
     * @generated from field: int64 created_at = 8;
     */
    createdAt: bigint;
    /**
     * Stores the timestamp of when the resource was last modified
     *
     * @generated from field: int64 modified_at = 9;
     */
    modifiedAt: bigint;
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
/**
 *
 * Describes the UUID identifier
 *
 * @generated from message tcube.Identifier
 */
export declare class Identifier extends Message<Identifier> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    constructor(data?: PartialMessage<Identifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Identifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Identifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Identifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Identifier;
    static equals(a: Identifier | PlainMessage<Identifier> | undefined, b: Identifier | PlainMessage<Identifier> | undefined): boolean;
}
/**
 *
 * Describes the list of UUID identifiers
 *
 * @generated from message tcube.IdentifierList
 */
export declare class IdentifierList extends Message<IdentifierList> {
    /**
     * List of UUIDs
     *
     * @generated from field: repeated tcube.Identifier list = 1;
     */
    list: Identifier[];
    constructor(data?: PartialMessage<IdentifierList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.IdentifierList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierList;
    static equals(a: IdentifierList | PlainMessage<IdentifierList> | undefined, b: IdentifierList | PlainMessage<IdentifierList> | undefined): boolean;
}
/**
 *
 * Describes a simple search key request
 *
 * @generated from message tcube.SearchKeyRequest
 */
export declare class SearchKeyRequest extends Message<SearchKeyRequest> {
    /**
     * The search key
     *
     * @generated from field: string search_key = 1;
     */
    searchKey: string;
    constructor(data?: PartialMessage<SearchKeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SearchKeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchKeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchKeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchKeyRequest;
    static equals(a: SearchKeyRequest | PlainMessage<SearchKeyRequest> | undefined, b: SearchKeyRequest | PlainMessage<SearchKeyRequest> | undefined): boolean;
}
/**
 *
 * Describes the UUID identifier with a user comment. Useful when an operation needs to be performed, and a user comment needs to be recorded
 *
 * @generated from message tcube.IdentifierWithUserComment
 */
export declare class IdentifierWithUserComment extends Message<IdentifierWithUserComment> {
    /**
     * UUID of the resource
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    constructor(data?: PartialMessage<IdentifierWithUserComment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.IdentifierWithUserComment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierWithUserComment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierWithUserComment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierWithUserComment;
    static equals(a: IdentifierWithUserComment | PlainMessage<IdentifierWithUserComment> | undefined, b: IdentifierWithUserComment | PlainMessage<IdentifierWithUserComment> | undefined): boolean;
}
/**
 *
 * Describes the username that could be used as an identifier
 *
 * @generated from message tcube.IdentifierUsername
 */
export declare class IdentifierUsername extends Message<IdentifierUsername> {
    /**
     * The username of the user
     *
     * @generated from field: string username = 1;
     */
    username: string;
    constructor(data?: PartialMessage<IdentifierUsername>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.IdentifierUsername";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifierUsername;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifierUsername;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifierUsername;
    static equals(a: IdentifierUsername | PlainMessage<IdentifierUsername> | undefined, b: IdentifierUsername | PlainMessage<IdentifierUsername> | undefined): boolean;
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object)
 *
 * @generated from message tcube.LogbookLogConcise
 */
export declare class LogbookLogConcise extends Message<LogbookLogConcise> {
    /**
     * Stores the metada of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: tcube.LOGBOOK_OPERATION operation = 11;
     */
    operation: LOGBOOK_OPERATION;
    /**
     * Stores the UUID of the user who performed this operation
     *
     * @generated from field: string added_by_user_uuid = 12;
     */
    addedByUserUuid: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogConcise>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.LogbookLogConcise";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogConcise;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogConcise;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogConcise;
    static equals(a: LogbookLogConcise | PlainMessage<LogbookLogConcise> | undefined, b: LogbookLogConcise | PlainMessage<LogbookLogConcise> | undefined): boolean;
}
/**
 *
 * Describes each parameter that's part of the logbook (includes historical data of the object)
 *
 * @generated from message tcube.LogbookLogComplete
 */
export declare class LogbookLogComplete extends Message<LogbookLogComplete> {
    /**
     * Stores the metada of this resource
     *
     * @generated from field: tcube.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: tcube.LOGBOOK_OPERATION operation = 11;
     */
    operation: LOGBOOK_OPERATION;
    /**
     * Stores the UUID of the user who performed this operation
     *
     * @generated from field: string added_by_user_uuid = 12;
     */
    addedByUserUuid: string;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 13;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 14;
     */
    userComment: string;
    /**
     * The marshalled object at the time the log was created
     *
     * @generated from field: bytes previous_data = 15;
     */
    previousData: Uint8Array;
    constructor(data?: PartialMessage<LogbookLogComplete>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.LogbookLogComplete";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogComplete;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogComplete;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogComplete;
    static equals(a: LogbookLogComplete | PlainMessage<LogbookLogComplete> | undefined, b: LogbookLogComplete | PlainMessage<LogbookLogComplete> | undefined): boolean;
}
/**
 *
 * Describes the list of logs from the logbook that's sent as a response to a logbook query
 *
 * @generated from message tcube.LogbookConcise
 */
export declare class LogbookConcise extends Message<LogbookConcise> {
    /**
     * List of logs
     *
     * @generated from field: repeated tcube.LogbookLogConcise logs = 1;
     */
    logs: LogbookLogConcise[];
    constructor(data?: PartialMessage<LogbookConcise>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.LogbookConcise";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookConcise;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookConcise;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookConcise;
    static equals(a: LogbookConcise | PlainMessage<LogbookConcise> | undefined, b: LogbookConcise | PlainMessage<LogbookConcise> | undefined): boolean;
}
/**
 *
 * Describes the complete list of logs from the logbook that's sent as a response to a logbook query
 *
 * @generated from message tcube.LogbookComplete
 */
export declare class LogbookComplete extends Message<LogbookComplete> {
    /**
     * List of logs
     *
     * @generated from field: repeated tcube.LogbookLogComplete logs = 1;
     */
    logs: LogbookLogComplete[];
    constructor(data?: PartialMessage<LogbookComplete>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.LogbookComplete";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookComplete;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookComplete;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookComplete;
    static equals(a: LogbookComplete | PlainMessage<LogbookComplete> | undefined, b: LogbookComplete | PlainMessage<LogbookComplete> | undefined): boolean;
}
//# sourceMappingURL=base_pb.d.ts.map