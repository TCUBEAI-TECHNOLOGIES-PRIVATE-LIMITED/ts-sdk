import { Customer, CustomerPaginationResp, CustomersList, CustomersServiceCreateRequest, CustomersServiceFilterReq, CustomersServicePaginationReq, CustomersServiceSearchAllReq, CustomersServiceUpdateRequest } from "./customers_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each customer
 *
 * @generated from service tcube.CustomersService
 */
export declare const CustomersService: {
    readonly typeName: "tcube.CustomersService";
    readonly methods: {
        /**
         * Create a customer
         *
         * @generated from rpc tcube.CustomersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof CustomersServiceCreateRequest;
            readonly O: typeof Customer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a customer
         *
         * @generated from rpc tcube.CustomersService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof CustomersServiceUpdateRequest;
            readonly O: typeof Customer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the customer
         *
         * @generated from rpc tcube.CustomersService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the customer
         *
         * @generated from rpc tcube.CustomersService.Restore
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
         * @generated from rpc tcube.CustomersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Customer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all customers
         *
         * @generated from rpc tcube.CustomersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof CustomersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View customers with pagination
         *
         * @generated from rpc tcube.CustomersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof CustomersServicePaginationReq;
            readonly O: typeof CustomerPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.CustomersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof CustomersServiceSearchAllReq;
            readonly O: typeof CustomersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.CustomersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof CustomersServiceFilterReq;
            readonly O: typeof CustomersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.CustomersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=customers_connect.d.ts.map