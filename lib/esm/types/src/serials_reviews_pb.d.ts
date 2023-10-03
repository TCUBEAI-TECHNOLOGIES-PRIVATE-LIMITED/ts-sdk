import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
import { INFERRED_FROM } from "./scans_pb.js";
/**
 *
 * Describes the available sort keys for retrieving serials reviews
 *
 * @generated from enum tcube.SERIAL_REVIEW_SORT_KEY
 */
export declare enum SERIAL_REVIEW_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: SERIAL_REVIEW_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    SERIAL_REVIEW_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: SERIAL_REVIEW_SORT_KEY_CREATED_AT = 1;
     */
    SERIAL_REVIEW_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: SERIAL_REVIEW_SORT_KEY_MODIFIED_AT = 2;
     */
    SERIAL_REVIEW_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: SERIAL_REVIEW_SORT_KEY_NAME = 10;
     */
    SERIAL_REVIEW_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by rating
     *
     * @generated from enum value: SERIAL_REVIEW_SORT_KEY_RATING = 11;
     */
    SERIAL_REVIEW_SORT_KEY_RATING = 11
}
/**
 *
 * Describes the necessary data structure during creation of a serial review
 *
 * @generated from message tcube.SerialsReviewsServiceCreateRequest
 */
export declare class SerialsReviewsServiceCreateRequest extends Message<SerialsReviewsServiceCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 10;
     */
    serialUuid: string;
    /**
     * The name of the person
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The rating given by the customer (between 1 and 5)
     *
     * @generated from field: int64 rating = 13;
     */
    rating: bigint;
    /**
     * Optional content of the review
     *
     * @generated from field: string content = 14;
     */
    content: string;
    constructor(data?: PartialMessage<SerialsReviewsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialsReviewsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsReviewsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsReviewsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsReviewsServiceCreateRequest;
    static equals(a: SerialsReviewsServiceCreateRequest | PlainMessage<SerialsReviewsServiceCreateRequest> | undefined, b: SerialsReviewsServiceCreateRequest | PlainMessage<SerialsReviewsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a serial review
 *
 * @generated from message tcube.SerialsReviewsServiceUpdateRequest
 */
export declare class SerialsReviewsServiceUpdateRequest extends Message<SerialsReviewsServiceUpdateRequest> {
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
     * The name of the person
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The rating given by the customer (between 1 and 5)
     *
     * @generated from field: int64 rating = 13;
     */
    rating: bigint;
    /**
     * Optional content of the review
     *
     * @generated from field: string content = 14;
     */
    content: string;
    constructor(data?: PartialMessage<SerialsReviewsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialsReviewsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsReviewsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsReviewsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsReviewsServiceUpdateRequest;
    static equals(a: SerialsReviewsServiceUpdateRequest | PlainMessage<SerialsReviewsServiceUpdateRequest> | undefined, b: SerialsReviewsServiceUpdateRequest | PlainMessage<SerialsReviewsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each serial review on the platform
 *
 * @generated from message tcube.SerialReview
 */
export declare class SerialReview extends Message<SerialReview> {
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
    entityUuid: string;
    /**
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 10;
     */
    serialUuid: string;
    /**
     * UUID of the associated product
     *
     * @generated from field: string product_uuid = 11;
     */
    productUuid: string;
    /**
     * The name of the person
     *
     * @generated from field: string name = 12;
     */
    name: string;
    /**
     * The rating given by the customer (between 1 and 5)
     *
     * @generated from field: int64 rating = 13;
     */
    rating: bigint;
    /**
     * Optional content of the review
     *
     * @generated from field: string content = 14;
     */
    content: string;
    /**
     * The latitude of the location
     *
     * @generated from field: double latitude = 21;
     */
    latitude: number;
    /**
     * The longitude of the location
     *
     * @generated from field: double longitude = 22;
     */
    longitude: number;
    /**
     * Stores if the location has been inferred from IP or from user provided geocoordinates
     *
     * @generated from field: tcube.INFERRED_FROM inferred_from = 23;
     */
    inferredFrom: INFERRED_FROM;
    constructor(data?: PartialMessage<SerialReview>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialReview";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialReview;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialReview;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialReview;
    static equals(a: SerialReview | PlainMessage<SerialReview> | undefined, b: SerialReview | PlainMessage<SerialReview> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of serials reviews
 *
 * @generated from message tcube.SerialsReviewsList
 */
export declare class SerialsReviewsList extends Message<SerialsReviewsList> {
    /**
     * List of serials reviews
     *
     * @generated from field: repeated tcube.SerialReview list = 1;
     */
    list: SerialReview[];
    constructor(data?: PartialMessage<SerialsReviewsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialsReviewsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsReviewsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsReviewsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsReviewsList;
    static equals(a: SerialsReviewsList | PlainMessage<SerialsReviewsList> | undefined, b: SerialsReviewsList | PlainMessage<SerialsReviewsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.SerialsReviewsServicePaginationReq
 */
export declare class SerialsReviewsServicePaginationReq extends Message<SerialsReviewsServicePaginationReq> {
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
     * @generated from field: tcube.SERIAL_REVIEW_SORT_KEY sort_key = 5;
     */
    sortKey: SERIAL_REVIEW_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * UUID of the product
     *
     * @generated from field: string product_uuid = 7;
     */
    productUuid: string;
    constructor(data?: PartialMessage<SerialsReviewsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialsReviewsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsReviewsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsReviewsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsReviewsServicePaginationReq;
    static equals(a: SerialsReviewsServicePaginationReq | PlainMessage<SerialsReviewsServicePaginationReq> | undefined, b: SerialsReviewsServicePaginationReq | PlainMessage<SerialsReviewsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.SerialReviewPaginationResp
 */
export declare class SerialReviewPaginationResp extends Message<SerialReviewPaginationResp> {
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
     * @generated from field: repeated tcube.SerialReview payload = 3;
     */
    payload: SerialReview[];
    constructor(data?: PartialMessage<SerialReviewPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialReviewPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialReviewPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialReviewPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialReviewPaginationResp;
    static equals(a: SerialReviewPaginationResp | PlainMessage<SerialReviewPaginationResp> | undefined, b: SerialReviewPaginationResp | PlainMessage<SerialReviewPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.SerialsReviewsServiceFilterReq
 */
export declare class SerialsReviewsServiceFilterReq extends Message<SerialsReviewsServiceFilterReq> {
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
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SERIAL_REVIEW_SORT_KEY sort_key = 5;
     */
    sortKey: SERIAL_REVIEW_SORT_KEY;
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
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 9;
     */
    serialUuid: string;
    /**
     * UUID of the product
     *
     * @generated from field: string product_uuid = 10;
     */
    productUuid: string;
    /**
     * The name of the serial review
     *
     * @generated from field: string name = 20;
     */
    name: string;
    constructor(data?: PartialMessage<SerialsReviewsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialsReviewsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsReviewsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsReviewsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsReviewsServiceFilterReq;
    static equals(a: SerialsReviewsServiceFilterReq | PlainMessage<SerialsReviewsServiceFilterReq> | undefined, b: SerialsReviewsServiceFilterReq | PlainMessage<SerialsReviewsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.SerialsReviewsServiceSearchAllReq
 */
export declare class SerialsReviewsServiceSearchAllReq extends Message<SerialsReviewsServiceSearchAllReq> {
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
     * @generated from field: tcube.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: tcube.SERIAL_REVIEW_SORT_KEY sort_key = 5;
     */
    sortKey: SERIAL_REVIEW_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * UUID of the serial
     *
     * @generated from field: string serial_uuid = 7;
     */
    serialUuid: string;
    /**
     * UUID of the product
     *
     * @generated from field: string product_uuid = 8;
     */
    productUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<SerialsReviewsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.SerialsReviewsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SerialsReviewsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SerialsReviewsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SerialsReviewsServiceSearchAllReq;
    static equals(a: SerialsReviewsServiceSearchAllReq | PlainMessage<SerialsReviewsServiceSearchAllReq> | undefined, b: SerialsReviewsServiceSearchAllReq | PlainMessage<SerialsReviewsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=serials_reviews_pb.d.ts.map