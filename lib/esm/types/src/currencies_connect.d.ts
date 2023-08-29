import { CurrenciesList, CurrenciesServiceCreateRequest, CurrenciesServiceFilterReq, CurrenciesServicePaginationReq, CurrenciesServiceSearchAllReq, CurrenciesServiceUpdateRequest, Currency, CurrencyPaginationResp } from "./currencies_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveRequest, CountRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each currency
 *
 * @generated from service tcube.CurrenciesService
 */
export declare const CurrenciesService: {
    readonly typeName: "tcube.CurrenciesService";
    readonly methods: {
        /**
         * Create a currency
         *
         * @generated from rpc tcube.CurrenciesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof CurrenciesServiceCreateRequest;
            readonly O: typeof Currency;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a currency
         *
         * @generated from rpc tcube.CurrenciesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof CurrenciesServiceUpdateRequest;
            readonly O: typeof Currency;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the currency
         *
         * @generated from rpc tcube.CurrenciesService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the currency
         *
         * @generated from rpc tcube.CurrenciesService.Restore
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
         * @generated from rpc tcube.CurrenciesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Currency;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all currencies
         *
         * @generated from rpc tcube.CurrenciesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveRequest;
            readonly O: typeof CurrenciesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View currencies with pagination
         *
         * @generated from rpc tcube.CurrenciesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof CurrenciesServicePaginationReq;
            readonly O: typeof CurrencyPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.CurrenciesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof CurrenciesServiceSearchAllReq;
            readonly O: typeof CurrenciesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.CurrenciesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof CurrenciesServiceFilterReq;
            readonly O: typeof CurrenciesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.CurrenciesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=currencies_connect.d.ts.map