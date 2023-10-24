import { Invoice, InvoicePaginationResp, InvoicesList, InvoicesServiceCreateRequest, InvoicesServiceFilterReq, InvoicesServicePaginationReq, InvoicesServicePaymentRequest, InvoicesServiceSearchAllReq, InvoicesServiceUpdateRequest } from "./invoices_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, FileResponse, Identifier, IdentifierWithUserComment, SearchKeyRequest, URLResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each invoice
 *
 * @generated from service scanswift.InvoicesService
 */
export declare const InvoicesService: {
    readonly typeName: "scanswift.InvoicesService";
    readonly methods: {
        /**
         * Create a invoice
         *
         * @generated from rpc scanswift.InvoicesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InvoicesServiceCreateRequest;
            readonly O: typeof Invoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a invoice
         *
         * @generated from rpc scanswift.InvoicesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof InvoicesServiceUpdateRequest;
            readonly O: typeof Invoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the invoice
         *
         * @generated from rpc scanswift.InvoicesService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the invoice
         *
         * @generated from rpc scanswift.InvoicesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel the invoice
         *
         * @generated from rpc scanswift.InvoicesService.Cancel
         */
        readonly cancel: {
            readonly name: "Cancel";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Mark the invoice as successfully paid
         *
         * @generated from rpc scanswift.InvoicesService.PaymentSuccess
         */
        readonly paymentSuccess: {
            readonly name: "PaymentSuccess";
            readonly I: typeof InvoicesServicePaymentRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Transaction failed during payment
         *
         * @generated from rpc scanswift.InvoicesService.PaymentFailure
         */
        readonly paymentFailure: {
            readonly name: "PaymentFailure";
            readonly I: typeof InvoicesServicePaymentRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc scanswift.InvoicesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Invoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Code
         *
         * @generated from rpc scanswift.InvoicesService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof Invoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all invoices
         *
         * @generated from rpc scanswift.InvoicesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof InvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View invoices with pagination
         *
         * @generated from rpc scanswift.InvoicesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InvoicesServicePaginationReq;
            readonly O: typeof InvoicePaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieve the payment link
         *
         * @generated from rpc scanswift.InvoicesService.ViewPaymentLink
         */
        readonly viewPaymentLink: {
            readonly name: "ViewPaymentLink";
            readonly I: typeof Identifier;
            readonly O: typeof URLResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the invoice as a PDF
         *
         * @generated from rpc scanswift.InvoicesService.DownloadAsPDF
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
         * @generated from rpc scanswift.InvoicesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InvoicesServiceSearchAllReq;
            readonly O: typeof InvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.InvoicesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InvoicesServiceFilterReq;
            readonly O: typeof InvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.InvoicesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=invoices_connect.d.ts.map