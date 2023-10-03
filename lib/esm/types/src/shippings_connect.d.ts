import { Shipping, ShippingPaginationResp, ShippingsList, ShippingsPackagingsList, ShippingsServiceAddPackagingsRequest, ShippingsServiceCreateRequest, ShippingsServiceFilterReq, ShippingsServicePaginationReq, ShippingsServiceSearchAllReq } from "./shippings_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, FileResponse, Identifier, IdentifierWithUserComment, ImageResponse, SearchKeyRequest, StringResponse, URLResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each shipping
 *
 * @generated from service tcube.ShippingsService
 */
export declare const ShippingsService: {
    readonly typeName: "tcube.ShippingsService";
    readonly methods: {
        /**
         * Create a shipping
         *
         * // Update a shipping
         * rpc Update (ShippingsServiceUpdateRequest) returns (Shipping);
         *
         * @generated from rpc tcube.ShippingsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ShippingsServiceCreateRequest;
            readonly O: typeof Shipping;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Close the shipping
         *
         * @generated from rpc tcube.ShippingsService.Close
         */
        readonly close: {
            readonly name: "Close";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the shipping
         *
         * @generated from rpc tcube.ShippingsService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the shipping
         *
         * @generated from rpc tcube.ShippingsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Recall the shipping
         *
         * @generated from rpc tcube.ShippingsService.Recall
         */
        readonly recall: {
            readonly name: "Recall";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc tcube.ShippingsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Shipping;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Code
         *
         * @generated from rpc tcube.ShippingsService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof Shipping;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all shippings
         *
         * @generated from rpc tcube.ShippingsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof ShippingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View shippings with pagination
         *
         * @generated from rpc tcube.ShippingsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ShippingsServicePaginationReq;
            readonly O: typeof ShippingPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View as QR code
         *
         * @generated from rpc tcube.ShippingsService.ViewAsQR
         */
        readonly viewAsQR: {
            readonly name: "ViewAsQR";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View as DataMatrix
         *
         * @generated from rpc tcube.ShippingsService.ViewAsDataMatrix
         */
        readonly viewAsDataMatrix: {
            readonly name: "ViewAsDataMatrix";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View as Image on the basis of the product's configuration
         *
         * @generated from rpc tcube.ShippingsService.ViewAsImage
         */
        readonly viewAsImage: {
            readonly name: "ViewAsImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the shipping's URI
         *
         * @generated from rpc tcube.ShippingsService.ViewAsURI
         */
        readonly viewAsURI: {
            readonly name: "ViewAsURI";
            readonly I: typeof Identifier;
            readonly O: typeof URLResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the string that can be used to render the QR code on POS machines
         *
         * @generated from rpc tcube.ShippingsService.ViewPrintableString
         */
        readonly viewPrintableString: {
            readonly name: "ViewPrintableString";
            readonly I: typeof Identifier;
            readonly O: typeof StringResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the shipping as a PDF
         *
         * @generated from rpc tcube.ShippingsService.DownloadAsPDF
         */
        readonly downloadAsPDF: {
            readonly name: "DownloadAsPDF";
            readonly I: typeof Identifier;
            readonly O: typeof FileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.ShippingsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ShippingsServiceSearchAllReq;
            readonly O: typeof ShippingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.ShippingsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ShippingsServiceFilterReq;
            readonly O: typeof ShippingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.ShippingsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add list of packagings to a shipping
         *
         * @generated from rpc tcube.ShippingsService.AddPackagings
         */
        readonly addPackagings: {
            readonly name: "AddPackagings";
            readonly I: typeof ShippingsServiceAddPackagingsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Remove packaging (represented by the UUID of the associated shipping packaging) from shipping and return the removed identifier
         *
         * @generated from rpc tcube.ShippingsService.RemovePackaging
         */
        readonly removePackaging: {
            readonly name: "RemovePackaging";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all packagings associated with the shipping represented by the Identifier
         *
         * @generated from rpc tcube.ShippingsService.ViewPackagings
         */
        readonly viewPackagings: {
            readonly name: "ViewPackagings";
            readonly I: typeof Identifier;
            readonly O: typeof ShippingsPackagingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all packagings within a shipping
         *
         * @generated from rpc tcube.ShippingsService.CountPackagings
         */
        readonly countPackagings: {
            readonly name: "CountPackagings";
            readonly I: typeof Identifier;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=shippings_connect.d.ts.map