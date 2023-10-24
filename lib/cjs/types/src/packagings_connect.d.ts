import { Packaging, PackagingMetadata, PackagingPaginationResp, PackagingsList, PackagingsSerialsList, PackagingsServiceAddSerialsRequest, PackagingsServiceCreateRequest, PackagingsServiceFilterReq, PackagingsServicePaginationReq, PackagingsServiceSearchAllReq } from "./packagings_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, FileResponse, Identifier, IdentifierWithUserComment, ImageResponse, SearchKeyRequest, StringResponse, URLResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each packaging
 *
 * @generated from service scanswift.PackagingsService
 */
export declare const PackagingsService: {
    readonly typeName: "scanswift.PackagingsService";
    readonly methods: {
        /**
         * Create a packaging
         *
         * // Update a packaging
         * rpc Update (PackagingsServiceUpdateRequest) returns (Packaging);
         *
         * @generated from rpc scanswift.PackagingsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PackagingsServiceCreateRequest;
            readonly O: typeof Packaging;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Close the packaging
         *
         * @generated from rpc scanswift.PackagingsService.Close
         */
        readonly close: {
            readonly name: "Close";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the packaging
         *
         * @generated from rpc scanswift.PackagingsService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the packaging
         *
         * @generated from rpc scanswift.PackagingsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Recall the packaging
         *
         * @generated from rpc scanswift.PackagingsService.Recall
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
         * @generated from rpc scanswift.PackagingsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Packaging;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Code
         *
         * @generated from rpc scanswift.PackagingsService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof Packaging;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the metadata using the packaging code
         *
         * @generated from rpc scanswift.PackagingsService.ViewMetadataByCode
         */
        readonly viewMetadataByCode: {
            readonly name: "ViewMetadataByCode";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof PackagingMetadata;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all packagings
         *
         * @generated from rpc scanswift.PackagingsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof PackagingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View packagings with pagination
         *
         * @generated from rpc scanswift.PackagingsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PackagingsServicePaginationReq;
            readonly O: typeof PackagingPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View as QR code
         *
         * @generated from rpc scanswift.PackagingsService.ViewAsQR
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
         * @generated from rpc scanswift.PackagingsService.ViewAsDataMatrix
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
         * @generated from rpc scanswift.PackagingsService.ViewAsImage
         */
        readonly viewAsImage: {
            readonly name: "ViewAsImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the packaging's URI
         *
         * @generated from rpc scanswift.PackagingsService.ViewAsURI
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
         * @generated from rpc scanswift.PackagingsService.ViewPrintableString
         */
        readonly viewPrintableString: {
            readonly name: "ViewPrintableString";
            readonly I: typeof Identifier;
            readonly O: typeof StringResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the packaging as a PDF
         *
         * @generated from rpc scanswift.PackagingsService.DownloadAsPDF
         */
        readonly downloadAsPDF: {
            readonly name: "DownloadAsPDF";
            readonly I: typeof Identifier;
            readonly O: typeof FileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the packaging as an image
         *
         * @generated from rpc scanswift.PackagingsService.DownloadAsImage
         */
        readonly downloadAsImage: {
            readonly name: "DownloadAsImage";
            readonly I: typeof Identifier;
            readonly O: typeof FileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.PackagingsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PackagingsServiceSearchAllReq;
            readonly O: typeof PackagingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.PackagingsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PackagingsServiceFilterReq;
            readonly O: typeof PackagingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.PackagingsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add list of serials to a packaging
         *
         * @generated from rpc scanswift.PackagingsService.AddSerials
         */
        readonly addSerials: {
            readonly name: "AddSerials";
            readonly I: typeof PackagingsServiceAddSerialsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Remove serial (represented by the UUID of the associated packaging serial) from packaging and return the removed identifier
         *
         * @generated from rpc scanswift.PackagingsService.RemoveSerial
         */
        readonly removeSerial: {
            readonly name: "RemoveSerial";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all serials associated with the packaging represented by the Identifier
         *
         * @generated from rpc scanswift.PackagingsService.ViewSerials
         */
        readonly viewSerials: {
            readonly name: "ViewSerials";
            readonly I: typeof Identifier;
            readonly O: typeof PackagingsSerialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all serials within a packaging
         *
         * @generated from rpc scanswift.PackagingsService.CountSerials
         */
        readonly countSerials: {
            readonly name: "CountSerials";
            readonly I: typeof Identifier;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=packagings_connect.d.ts.map