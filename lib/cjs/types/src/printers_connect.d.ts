import { Printer, PrinterPaginationResp, PrintersList, PrintersServiceCreateRequest, PrintersServiceFilterReq, PrintersServicePaginationReq, PrintersServiceSearchAllReq, PrintersServiceUpdateRequest } from "./printers_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInLocationRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each printer
 *
 * @generated from service scanswift.PrintersService
 */
export declare const PrintersService: {
    readonly typeName: "scanswift.PrintersService";
    readonly methods: {
        /**
         * Create a printer
         *
         * @generated from rpc scanswift.PrintersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PrintersServiceCreateRequest;
            readonly O: typeof Printer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a printer
         *
         * @generated from rpc scanswift.PrintersService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof PrintersServiceUpdateRequest;
            readonly O: typeof Printer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the printer
         *
         * @generated from rpc scanswift.PrintersService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the printer
         *
         * @generated from rpc scanswift.PrintersService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc scanswift.PrintersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Printer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all printers
         *
         * @generated from rpc scanswift.PrintersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof PrintersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View printers with pagination
         *
         * @generated from rpc scanswift.PrintersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PrintersServicePaginationReq;
            readonly O: typeof PrinterPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.PrintersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PrintersServiceSearchAllReq;
            readonly O: typeof PrintersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.PrintersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PrintersServiceFilterReq;
            readonly O: typeof PrintersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.PrintersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInLocationRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=printers_connect.d.ts.map