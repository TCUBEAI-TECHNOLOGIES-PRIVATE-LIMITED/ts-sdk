import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available sort keys for retrieving customers
 *
 * @generated from enum scanswift.CUSTOMER_SORT_KEY
 */
export declare enum CUSTOMER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CUSTOMER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CUSTOMER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CUSTOMER_SORT_KEY_CREATED_AT = 1;
     */
    CUSTOMER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CUSTOMER_SORT_KEY_MODIFIED_AT = 2;
     */
    CUSTOMER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: CUSTOMER_SORT_KEY_NAME = 10;
     */
    CUSTOMER_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: CUSTOMER_SORT_KEY_CODE = 11;
     */
    CUSTOMER_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a customer
 *
 * @generated from message scanswift.CustomersServiceCreateRequest
 */
export declare class CustomersServiceCreateRequest extends Message<CustomersServiceCreateRequest> {
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
     * The name of the customer
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Description of the customer
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<CustomersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CustomersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomersServiceCreateRequest;
    static equals(a: CustomersServiceCreateRequest | PlainMessage<CustomersServiceCreateRequest> | undefined, b: CustomersServiceCreateRequest | PlainMessage<CustomersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a customer
 *
 * @generated from message scanswift.CustomersServiceUpdateRequest
 */
export declare class CustomersServiceUpdateRequest extends Message<CustomersServiceUpdateRequest> {
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
     * The name of the customer
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Description of the customer
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<CustomersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CustomersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomersServiceUpdateRequest;
    static equals(a: CustomersServiceUpdateRequest | PlainMessage<CustomersServiceUpdateRequest> | undefined, b: CustomersServiceUpdateRequest | PlainMessage<CustomersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each customer on the platform
 *
 * @generated from message scanswift.Customer
 */
export declare class Customer extends Message<Customer> {
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
     * The name of the customer
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the customer
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the customer
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<Customer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.Customer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Customer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Customer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Customer;
    static equals(a: Customer | PlainMessage<Customer> | undefined, b: Customer | PlainMessage<Customer> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of customers
 *
 * @generated from message scanswift.CustomersList
 */
export declare class CustomersList extends Message<CustomersList> {
    /**
     * List of customers
     *
     * @generated from field: repeated scanswift.Customer list = 1;
     */
    list: Customer[];
    constructor(data?: PartialMessage<CustomersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CustomersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomersList;
    static equals(a: CustomersList | PlainMessage<CustomersList> | undefined, b: CustomersList | PlainMessage<CustomersList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message scanswift.CustomersServicePaginationReq
 */
export declare class CustomersServicePaginationReq extends Message<CustomersServicePaginationReq> {
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
     * @generated from field: scanswift.CUSTOMER_SORT_KEY sort_key = 5;
     */
    sortKey: CUSTOMER_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<CustomersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CustomersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomersServicePaginationReq;
    static equals(a: CustomersServicePaginationReq | PlainMessage<CustomersServicePaginationReq> | undefined, b: CustomersServicePaginationReq | PlainMessage<CustomersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message scanswift.CustomerPaginationResp
 */
export declare class CustomerPaginationResp extends Message<CustomerPaginationResp> {
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
     * @generated from field: repeated scanswift.Customer payload = 3;
     */
    payload: Customer[];
    constructor(data?: PartialMessage<CustomerPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CustomerPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomerPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomerPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomerPaginationResp;
    static equals(a: CustomerPaginationResp | PlainMessage<CustomerPaginationResp> | undefined, b: CustomerPaginationResp | PlainMessage<CustomerPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message scanswift.CustomersServiceFilterReq
 */
export declare class CustomersServiceFilterReq extends Message<CustomersServiceFilterReq> {
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
     * @generated from field: scanswift.CUSTOMER_SORT_KEY sort_key = 5;
     */
    sortKey: CUSTOMER_SORT_KEY;
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
     * The name of the customer
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the customer
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<CustomersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CustomersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomersServiceFilterReq;
    static equals(a: CustomersServiceFilterReq | PlainMessage<CustomersServiceFilterReq> | undefined, b: CustomersServiceFilterReq | PlainMessage<CustomersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message scanswift.CustomersServiceSearchAllReq
 */
export declare class CustomersServiceSearchAllReq extends Message<CustomersServiceSearchAllReq> {
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
     * @generated from field: scanswift.CUSTOMER_SORT_KEY sort_key = 5;
     */
    sortKey: CUSTOMER_SORT_KEY;
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
    constructor(data?: PartialMessage<CustomersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.CustomersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomersServiceSearchAllReq;
    static equals(a: CustomersServiceSearchAllReq | PlainMessage<CustomersServiceSearchAllReq> | undefined, b: CustomersServiceSearchAllReq | PlainMessage<CustomersServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=customers_pb.d.ts.map