import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Stores the possible values for the code type
 *
 * @generated from enum tcube.PRINT_CODE_TYPE
 */
export declare enum PRINT_CODE_TYPE {
    /**
     * Print the code as a QR code
     *
     * @generated from enum value: QR_UNSPECIFIED = 0;
     */
    QR_UNSPECIFIED = 0,
    /**
     * Print the code as a DataMatrix code
     *
     * @generated from enum value: DATAMATRIX = 1;
     */
    DATAMATRIX = 1
}
/**
 *
 * Stores the possible values for encoding type
 *
 * @generated from enum tcube.PRINT_ENCODING_TYPE_FOR_PRODUCT
 */
export declare enum PRINT_ENCODING_TYPE_FOR_PRODUCT {
    /**
     * Generate the code as HRI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PRODUCT_HRI_UNSPECIFIED = 0;
     */
    PRINT_ENCODING_TYPE_FOR_PRODUCT_HRI_UNSPECIFIED = 0,
    /**
     * Generate the code as URI
     *
     * @generated from enum value: PRINT_ENCODING_TYPE_FOR_PRODUCT_URI = 1;
     */
    PRINT_ENCODING_TYPE_FOR_PRODUCT_URI = 1
}
/**
 *
 * Stores the possible values of paper sizes
 *
 * @generated from enum tcube.PRINT_PAPER_SIZE
 */
export declare enum PRINT_PAPER_SIZE {
    /**
     * Print the batch on an A4 sheet
     *
     * @generated from enum value: A4_UNSPECIFIED = 0;
     */
    A4_UNSPECIFIED = 0
}
/**
 *
 * Describes the available sort keys for retrieving products
 *
 * @generated from enum tcube.PRODUCT_SORT_KEY
 */
export declare enum PRODUCT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PRODUCT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PRODUCT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PRODUCT_SORT_KEY_CREATED_AT = 1;
     */
    PRODUCT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PRODUCT_SORT_KEY_MODIFIED_AT = 2;
     */
    PRODUCT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: PRODUCT_SORT_KEY_NAME = 10;
     */
    PRODUCT_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: PRODUCT_SORT_KEY_CODE = 11;
     */
    PRODUCT_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a product
 *
 * @generated from message tcube.ProductsServiceCreateRequest
 */
export declare class ProductsServiceCreateRequest extends Message<ProductsServiceCreateRequest> {
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
     * The name of the product
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the product
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * Description of the product
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The unit price of the product (in cents)
     *
     * @generated from field: int64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * UUID of the associated currency
     *
     * @generated from field: string currency_uuid = 15;
     */
    currencyUuid: string;
    /**
     * UUID of the associated unit
     *
     * @generated from field: string unit_uuid = 16;
     */
    unitUuid: string;
    /**
     * Shelf life of the product in days
     *
     * @generated from field: int64 shelf_life_days = 17;
     */
    shelfLifeDays: bigint;
    /**
     * Schema of the product
     *
     * @generated from field: string serialization_schema = 20;
     */
    serializationSchema: string;
    /**
     * The type of encoding
     *
     * @generated from field: tcube.PRINT_ENCODING_TYPE_FOR_PRODUCT print_encoding_type = 21;
     */
    printEncodingType: PRINT_ENCODING_TYPE_FOR_PRODUCT;
    /**
     * THe type of code that needs to be printed
     *
     * @generated from field: tcube.PRINT_CODE_TYPE print_code_type = 30;
     */
    printCodeType: PRINT_CODE_TYPE;
    /**
     * The dimension of the code that needs to be printed (in mm)
     *
     * @generated from field: double print_code_dimension_in_mm = 31;
     */
    printCodeDimensionInMm: number;
    /**
     * The dimension of the margin in between codes within the print
     *
     * @generated from field: double print_margin_in_mm = 32;
     */
    printMarginInMm: number;
    /**
     * The size of the paper on which the codes are to be printed as a batch
     *
     * @generated from field: tcube.PRINT_PAPER_SIZE print_batch_paper_size = 33;
     */
    printBatchPaperSize: PRINT_PAPER_SIZE;
    constructor(data?: PartialMessage<ProductsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ProductsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductsServiceCreateRequest;
    static equals(a: ProductsServiceCreateRequest | PlainMessage<ProductsServiceCreateRequest> | undefined, b: ProductsServiceCreateRequest | PlainMessage<ProductsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a product
 *
 * @generated from message tcube.ProductsServiceUpdateRequest
 */
export declare class ProductsServiceUpdateRequest extends Message<ProductsServiceUpdateRequest> {
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
     * The name of the product
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Description of the product
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The unit price of the product (in cents)
     *
     * @generated from field: int64 unit_price = 13;
     */
    unitPrice: bigint;
    /**
     * UUID of the associated currency
     *
     * @generated from field: string currency_uuid = 14;
     */
    currencyUuid: string;
    /**
     * UUID of the associated unit
     *
     * @generated from field: string unit_uuid = 15;
     */
    unitUuid: string;
    /**
     * Shelf life of the product in days
     *
     * @generated from field: int64 shelf_life_days = 16;
     */
    shelfLifeDays: bigint;
    /**
     * Schema of the product
     *
     * @generated from field: string serialization_schema = 20;
     */
    serializationSchema: string;
    /**
     * The type of encoding
     *
     * @generated from field: tcube.PRINT_ENCODING_TYPE_FOR_PRODUCT print_encoding_type = 21;
     */
    printEncodingType: PRINT_ENCODING_TYPE_FOR_PRODUCT;
    /**
     * THe type of code that needs to be printed
     *
     * @generated from field: tcube.PRINT_CODE_TYPE print_code_type = 30;
     */
    printCodeType: PRINT_CODE_TYPE;
    /**
     * The dimension of the code that needs to be printed (in mm)
     *
     * @generated from field: double print_code_dimension_in_mm = 31;
     */
    printCodeDimensionInMm: number;
    /**
     * The dimension of the margin in between codes within the print
     *
     * @generated from field: double print_margin_in_mm = 32;
     */
    printMarginInMm: number;
    /**
     * The size of the paper on which the codes are to be printed as a batch
     *
     * @generated from field: tcube.PRINT_PAPER_SIZE print_batch_paper_size = 33;
     */
    printBatchPaperSize: PRINT_PAPER_SIZE;
    constructor(data?: PartialMessage<ProductsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ProductsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductsServiceUpdateRequest;
    static equals(a: ProductsServiceUpdateRequest | PlainMessage<ProductsServiceUpdateRequest> | undefined, b: ProductsServiceUpdateRequest | PlainMessage<ProductsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each product on the platform
 *
 * @generated from message tcube.Product
 */
export declare class Product extends Message<Product> {
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
     * The name of the product
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the product
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The global identifier of the product
     *
     * @generated from field: string global_identifier = 12;
     */
    globalIdentifier: string;
    /**
     * Description of the product
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The unit price of the product (in cents)
     *
     * @generated from field: int64 unit_price = 14;
     */
    unitPrice: bigint;
    /**
     * UUID of the associated currency
     *
     * @generated from field: string currency_uuid = 15;
     */
    currencyUuid: string;
    /**
     * UUID of the associated unit
     *
     * @generated from field: string unit_uuid = 16;
     */
    unitUuid: string;
    /**
     * Shelf life of the product in days
     *
     * @generated from field: int64 shelf_life_days = 17;
     */
    shelfLifeDays: bigint;
    /**
     * Schema of the product
     *
     * @generated from field: string serialization_schema = 20;
     */
    serializationSchema: string;
    /**
     * The type of encoding
     *
     * @generated from field: tcube.PRINT_ENCODING_TYPE_FOR_PRODUCT print_encoding_type = 21;
     */
    printEncodingType: PRINT_ENCODING_TYPE_FOR_PRODUCT;
    /**
     * THe type of code that needs to be printed
     *
     * @generated from field: tcube.PRINT_CODE_TYPE print_code_type = 30;
     */
    printCodeType: PRINT_CODE_TYPE;
    /**
     * The dimension of the code that needs to be printed (in mm)
     *
     * @generated from field: double print_code_dimension_in_mm = 31;
     */
    printCodeDimensionInMm: number;
    /**
     * The dimension of the margin in between codes within the print
     *
     * @generated from field: double print_margin_in_mm = 32;
     */
    printMarginInMm: number;
    /**
     * The size of the paper on which the codes are to be printed as a batch
     *
     * @generated from field: tcube.PRINT_PAPER_SIZE print_batch_paper_size = 33;
     */
    printBatchPaperSize: PRINT_PAPER_SIZE;
    constructor(data?: PartialMessage<Product>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Product";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Product;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Product;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Product;
    static equals(a: Product | PlainMessage<Product> | undefined, b: Product | PlainMessage<Product> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of products
 *
 * @generated from message tcube.ProductsList
 */
export declare class ProductsList extends Message<ProductsList> {
    /**
     * List of products
     *
     * @generated from field: repeated tcube.Product list = 1;
     */
    list: Product[];
    constructor(data?: PartialMessage<ProductsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ProductsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductsList;
    static equals(a: ProductsList | PlainMessage<ProductsList> | undefined, b: ProductsList | PlainMessage<ProductsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.ProductsServicePaginationReq
 */
export declare class ProductsServicePaginationReq extends Message<ProductsServicePaginationReq> {
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
     * @generated from field: tcube.PRODUCT_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCT_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    constructor(data?: PartialMessage<ProductsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ProductsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductsServicePaginationReq;
    static equals(a: ProductsServicePaginationReq | PlainMessage<ProductsServicePaginationReq> | undefined, b: ProductsServicePaginationReq | PlainMessage<ProductsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.ProductPaginationResp
 */
export declare class ProductPaginationResp extends Message<ProductPaginationResp> {
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
     * @generated from field: repeated tcube.Product payload = 3;
     */
    payload: Product[];
    constructor(data?: PartialMessage<ProductPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ProductPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductPaginationResp;
    static equals(a: ProductPaginationResp | PlainMessage<ProductPaginationResp> | undefined, b: ProductPaginationResp | PlainMessage<ProductPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.ProductsServiceFilterReq
 */
export declare class ProductsServiceFilterReq extends Message<ProductsServiceFilterReq> {
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
     * @generated from field: tcube.PRODUCT_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCT_SORT_KEY;
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
     * The name of the product
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the product
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The global identifier of the product
     *
     * @generated from field: string global_identifier = 22;
     */
    globalIdentifier: string;
    constructor(data?: PartialMessage<ProductsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ProductsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductsServiceFilterReq;
    static equals(a: ProductsServiceFilterReq | PlainMessage<ProductsServiceFilterReq> | undefined, b: ProductsServiceFilterReq | PlainMessage<ProductsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.ProductsServiceSearchAllReq
 */
export declare class ProductsServiceSearchAllReq extends Message<ProductsServiceSearchAllReq> {
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
     * @generated from field: tcube.PRODUCT_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCT_SORT_KEY;
    /**
     * UUID of the entity
     *
     * UUID of the location
     * string location_uuid = 9;
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
    constructor(data?: PartialMessage<ProductsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.ProductsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductsServiceSearchAllReq;
    static equals(a: ProductsServiceSearchAllReq | PlainMessage<ProductsServiceSearchAllReq> | undefined, b: ProductsServiceSearchAllReq | PlainMessage<ProductsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=products_pb.d.ts.map