import { Batch, BatchesList, BatchesServiceCommissioningRequest, BatchesServiceCreateRequest, BatchesServiceFilterReq, BatchesServicePaginationReq, BatchesServiceSearchAllReq, BatchIdentifierWithSerialState, BatchPaginationResp } from "./batches_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, FileResponse, FileResponseList, Identifier, IdentifierWithUserComment, SearchKeyRequest } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each batch
 *
 * @generated from service scanswift.BatchesService
 */
export declare const BatchesService: {
    readonly typeName: "scanswift.BatchesService";
    readonly methods: {
        /**
         * Create a batch
         *
         * // Update a batch
         * rpc Update (BatchesServiceUpdateRequest) returns (Batch);
         *
         * @generated from rpc scanswift.BatchesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof BatchesServiceCreateRequest;
            readonly O: typeof Batch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the batch
         *
         * @generated from rpc scanswift.BatchesService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the batch
         *
         * @generated from rpc scanswift.BatchesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Recall the batch
         *
         * @generated from rpc scanswift.BatchesService.Recall
         */
        readonly recall: {
            readonly name: "Recall";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Commission unused serials
         *
         * @generated from rpc scanswift.BatchesService.CommissionUnused
         */
        readonly commissionUnused: {
            readonly name: "CommissionUnused";
            readonly I: typeof BatchesServiceCommissioningRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Decommission unused serials
         *
         * @generated from rpc scanswift.BatchesService.DecommissionUnused
         */
        readonly decommissionUnused: {
            readonly name: "DecommissionUnused";
            readonly I: typeof BatchesServiceCommissioningRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc scanswift.BatchesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Batch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Code
         *
         * @generated from rpc scanswift.BatchesService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof Batch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all batches
         *
         * @generated from rpc scanswift.BatchesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof BatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View batches with pagination
         *
         * @generated from rpc scanswift.BatchesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof BatchesServicePaginationReq;
            readonly O: typeof BatchPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download all the serials (in the given state) within the batch as a PDF
         *
         * @generated from rpc scanswift.BatchesService.DownloadSerialsAsPDF
         */
        readonly downloadSerialsAsPDF: {
            readonly name: "DownloadSerialsAsPDF";
            readonly I: typeof BatchIdentifierWithSerialState;
            readonly O: typeof FileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download all the serials (in the given state) within the batch as a CSV file
         *
         * @generated from rpc scanswift.BatchesService.DownloadSerialsAsCSV
         */
        readonly downloadSerialsAsCSV: {
            readonly name: "DownloadSerialsAsCSV";
            readonly I: typeof BatchIdentifierWithSerialState;
            readonly O: typeof FileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download all the serials (in the given state) within the batch as a single image
         *
         * @generated from rpc scanswift.BatchesService.DownloadSerialsAsImage
         */
        readonly downloadSerialsAsImage: {
            readonly name: "DownloadSerialsAsImage";
            readonly I: typeof BatchIdentifierWithSerialState;
            readonly O: typeof FileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download all the serials (in the given state) within the batch as multiple images
         *
         * @generated from rpc scanswift.BatchesService.DownloadSerialsAsImagesWithDescriptions
         */
        readonly downloadSerialsAsImagesWithDescriptions: {
            readonly name: "DownloadSerialsAsImagesWithDescriptions";
            readonly I: typeof BatchIdentifierWithSerialState;
            readonly O: typeof FileResponseList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.BatchesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof BatchesServiceSearchAllReq;
            readonly O: typeof BatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.BatchesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof BatchesServiceFilterReq;
            readonly O: typeof BatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.BatchesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=batches_connect.d.ts.map