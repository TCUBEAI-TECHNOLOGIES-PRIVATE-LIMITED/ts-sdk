import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, SORT_ORDER } from "./base_pb.js";
/**
 *
 * Describes the available printer types
 *
 * @generated from enum tcube.PRINTER_MODE
 */
export declare enum PRINTER_MODE {
    /**
     * Used only for filter requests
     *
     * @generated from enum value: PRINTER_MODE_ANY_UNSPECIFIED = 0;
     */
    PRINTER_MODE_ANY_UNSPECIFIED = 0,
    /**
     * ESC/POS (Epson) printer
     *
     * @generated from enum value: PRINTER_MODE_ESC_POS = 1;
     */
    PRINTER_MODE_ESC_POS = 1,
    /**
     * Zebra printer
     *
     * @generated from enum value: PRINTER_MODE_ZEBRA = 2;
     */
    PRINTER_MODE_ZEBRA = 2
}
/**
 *
 * Describes the available sort keys for retrieving printers
 *
 * @generated from enum tcube.PRINTER_SORT_KEY
 */
export declare enum PRINTER_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PRINTER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PRINTER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PRINTER_SORT_KEY_CREATED_AT = 1;
     */
    PRINTER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PRINTER_SORT_KEY_MODIFIED_AT = 2;
     */
    PRINTER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by name
     *
     * @generated from enum value: PRINTER_SORT_KEY_NAME = 10;
     */
    PRINTER_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by code
     *
     * @generated from enum value: PRINTER_SORT_KEY_CODE = 11;
     */
    PRINTER_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the necessary data structure during creation of a printer
 *
 * @generated from message tcube.PrintersServiceCreateRequest
 */
export declare class PrintersServiceCreateRequest extends Message<PrintersServiceCreateRequest> {
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
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * The name of the printer
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the printer
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The printer mode
     *
     * @generated from field: tcube.PRINTER_MODE mode = 12;
     */
    mode: PRINTER_MODE;
    /**
     * The IP address of the printer
     *
     * @generated from field: string ip_address = 13;
     */
    ipAddress: string;
    /**
     * The port that the printer is configured on
     *
     * @generated from field: uint64 port = 14;
     */
    port: bigint;
    /**
     * Description of the printer
     *
     * @generated from field: string description = 15;
     */
    description: string;
    constructor(data?: PartialMessage<PrintersServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PrintersServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrintersServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrintersServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrintersServiceCreateRequest;
    static equals(a: PrintersServiceCreateRequest | PlainMessage<PrintersServiceCreateRequest> | undefined, b: PrintersServiceCreateRequest | PlainMessage<PrintersServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a printer
 *
 * @generated from message tcube.PrintersServiceUpdateRequest
 */
export declare class PrintersServiceUpdateRequest extends Message<PrintersServiceUpdateRequest> {
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
     * The name of the printer
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the printer
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The printer mode
     *
     * @generated from field: tcube.PRINTER_MODE mode = 12;
     */
    mode: PRINTER_MODE;
    /**
     * The IP address of the printer
     *
     * @generated from field: string ip_address = 13;
     */
    ipAddress: string;
    /**
     * The port that the printer is configured on
     *
     * @generated from field: uint64 port = 14;
     */
    port: bigint;
    /**
     * Description of the printer
     *
     * @generated from field: string description = 15;
     */
    description: string;
    constructor(data?: PartialMessage<PrintersServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PrintersServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrintersServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrintersServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrintersServiceUpdateRequest;
    static equals(a: PrintersServiceUpdateRequest | PlainMessage<PrintersServiceUpdateRequest> | undefined, b: PrintersServiceUpdateRequest | PlainMessage<PrintersServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure of each printer on the platform
 *
 * @generated from message tcube.Printer
 */
export declare class Printer extends Message<Printer> {
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
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * The name of the printer
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * Code of the printer
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The printer mode
     *
     * @generated from field: tcube.PRINTER_MODE mode = 12;
     */
    mode: PRINTER_MODE;
    /**
     * The IP address of the printer
     *
     * @generated from field: string ip_address = 13;
     */
    ipAddress: string;
    /**
     * The port that the printer is configured on
     *
     * @generated from field: uint64 port = 14;
     */
    port: bigint;
    /**
     * Description of the printer
     *
     * @generated from field: string description = 15;
     */
    description: string;
    constructor(data?: PartialMessage<Printer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.Printer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Printer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Printer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Printer;
    static equals(a: Printer | PlainMessage<Printer> | undefined, b: Printer | PlainMessage<Printer> | undefined): boolean;
}
/**
 *
 * Describes the data structure that stores a list of printers
 *
 * @generated from message tcube.PrintersList
 */
export declare class PrintersList extends Message<PrintersList> {
    /**
     * List of printers
     *
     * @generated from field: repeated tcube.Printer list = 1;
     */
    list: Printer[];
    constructor(data?: PartialMessage<PrintersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PrintersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrintersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrintersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrintersList;
    static equals(a: PrintersList | PlainMessage<PrintersList> | undefined, b: PrintersList | PlainMessage<PrintersList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message tcube.PrintersServicePaginationReq
 */
export declare class PrintersServicePaginationReq extends Message<PrintersServicePaginationReq> {
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
     * @generated from field: tcube.PRINTER_SORT_KEY sort_key = 5;
     */
    sortKey: PRINTER_SORT_KEY;
    /**
     * UUID of the location
     *
     * @generated from field: string location_uuid = 6;
     */
    locationUuid: string;
    constructor(data?: PartialMessage<PrintersServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PrintersServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrintersServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrintersServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrintersServicePaginationReq;
    static equals(a: PrintersServicePaginationReq | PlainMessage<PrintersServicePaginationReq> | undefined, b: PrintersServicePaginationReq | PlainMessage<PrintersServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the data structure that responds to a pagination request
 *
 * @generated from message tcube.PrinterPaginationResp
 */
export declare class PrinterPaginationResp extends Message<PrinterPaginationResp> {
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
     * @generated from field: repeated tcube.Printer payload = 3;
     */
    payload: Printer[];
    constructor(data?: PartialMessage<PrinterPaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PrinterPaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrinterPaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrinterPaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrinterPaginationResp;
    static equals(a: PrinterPaginationResp | PlainMessage<PrinterPaginationResp> | undefined, b: PrinterPaginationResp | PlainMessage<PrinterPaginationResp> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message tcube.PrintersServiceFilterReq
 */
export declare class PrintersServiceFilterReq extends Message<PrintersServiceFilterReq> {
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
     * @generated from field: tcube.PRINTER_SORT_KEY sort_key = 5;
     */
    sortKey: PRINTER_SORT_KEY;
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
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * The name of the printer
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * Code of the printer
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The printer mode
     *
     * @generated from field: tcube.PRINTER_MODE mode = 22;
     */
    mode: PRINTER_MODE;
    constructor(data?: PartialMessage<PrintersServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PrintersServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrintersServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrintersServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrintersServiceFilterReq;
    static equals(a: PrintersServiceFilterReq | PlainMessage<PrintersServiceFilterReq> | undefined, b: PrintersServiceFilterReq | PlainMessage<PrintersServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message tcube.PrintersServiceSearchAllReq
 */
export declare class PrintersServiceSearchAllReq extends Message<PrintersServiceSearchAllReq> {
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
     * @generated from field: tcube.PRINTER_SORT_KEY sort_key = 5;
     */
    sortKey: PRINTER_SORT_KEY;
    /**
     * UUID of the entity
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * UUID of the location
     *
     * @generated from field: string location_uuid = 9;
     */
    locationUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The printer mode
     *
     * @generated from field: tcube.PRINTER_MODE mode = 22;
     */
    mode: PRINTER_MODE;
    constructor(data?: PartialMessage<PrintersServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tcube.PrintersServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrintersServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrintersServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrintersServiceSearchAllReq;
    static equals(a: PrintersServiceSearchAllReq | PlainMessage<PrintersServiceSearchAllReq> | undefined, b: PrintersServiceSearchAllReq | PlainMessage<PrintersServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=printers_pb.d.ts.map