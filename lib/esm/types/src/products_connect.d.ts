import { Product, ProductPaginationResp, ProductsList, ProductsServiceCreateRequest, ProductsServiceFilterReq, ProductsServicePaginationReq, ProductsServiceSearchAllReq, ProductsServiceUpdateRequest } from "./products_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment, ImageAssignRequest, ImageResponse, SearchKeyRequest } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each product
 *
 * @generated from service scanswift.ProductsService
 */
export declare const ProductsService: {
    readonly typeName: "scanswift.ProductsService";
    readonly methods: {
        /**
         * Create a product
         *
         * @generated from rpc scanswift.ProductsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProductsServiceCreateRequest;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a product
         *
         * @generated from rpc scanswift.ProductsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof ProductsServiceUpdateRequest;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the product
         *
         * @generated from rpc scanswift.ProductsService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the product
         *
         * @generated from rpc scanswift.ProductsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Assign image
         *
         * @generated from rpc scanswift.ProductsService.AssignImage
         */
        readonly assignImage: {
            readonly name: "AssignImage";
            readonly I: typeof ImageAssignRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View assigned image
         *
         * @generated from rpc scanswift.ProductsService.ViewImage
         */
        readonly viewImage: {
            readonly name: "ViewImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc scanswift.ProductsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Global Identifier
         *
         * @generated from rpc scanswift.ProductsService.ViewByGlobalIdentifier
         */
        readonly viewByGlobalIdentifier: {
            readonly name: "ViewByGlobalIdentifier";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all products
         *
         * @generated from rpc scanswift.ProductsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof ProductsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View products with pagination
         *
         * @generated from rpc scanswift.ProductsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductsServicePaginationReq;
            readonly O: typeof ProductPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.ProductsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProductsServiceSearchAllReq;
            readonly O: typeof ProductsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.ProductsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProductsServiceFilterReq;
            readonly O: typeof ProductsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.ProductsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=products_connect.d.ts.map