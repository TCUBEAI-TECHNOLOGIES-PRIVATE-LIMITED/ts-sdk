"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file invoices.proto (package scanswift, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesService = void 0;
const invoices_pb_js_1 = require("./invoices_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the methods applicable on each invoice
 *
 * @generated from service scanswift.InvoicesService
 */
exports.InvoicesService = {
    typeName: "scanswift.InvoicesService",
    methods: {
        /**
         * Create a invoice
         *
         * @generated from rpc scanswift.InvoicesService.Create
         */
        create: {
            name: "Create",
            I: invoices_pb_js_1.InvoicesServiceCreateRequest,
            O: invoices_pb_js_1.Invoice,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update a invoice
         *
         * @generated from rpc scanswift.InvoicesService.Update
         */
        update: {
            name: "Update",
            I: invoices_pb_js_1.InvoicesServiceUpdateRequest,
            O: invoices_pb_js_1.Invoice,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Archive the invoice
         *
         * @generated from rpc scanswift.InvoicesService.Archive
         */
        archive: {
            name: "Archive",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Restore the invoice
         *
         * @generated from rpc scanswift.InvoicesService.Restore
         */
        restore: {
            name: "Restore",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Cancel the invoice
         *
         * @generated from rpc scanswift.InvoicesService.Cancel
         */
        cancel: {
            name: "Cancel",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Mark the invoice as successfully paid
         *
         * @generated from rpc scanswift.InvoicesService.PaymentSuccess
         */
        paymentSuccess: {
            name: "PaymentSuccess",
            I: invoices_pb_js_1.InvoicesServicePaymentRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Transaction failed during payment
         *
         * @generated from rpc scanswift.InvoicesService.PaymentFailure
         */
        paymentFailure: {
            name: "PaymentFailure",
            I: invoices_pb_js_1.InvoicesServicePaymentRequest,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View by UUID
         *
         * @generated from rpc scanswift.InvoicesService.ViewByUUID
         */
        viewByUUID: {
            name: "ViewByUUID",
            I: base_pb_js_1.Identifier,
            O: invoices_pb_js_1.Invoice,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View by Code
         *
         * @generated from rpc scanswift.InvoicesService.ViewByCode
         */
        viewByCode: {
            name: "ViewByCode",
            I: base_pb_js_1.SearchKeyRequest,
            O: invoices_pb_js_1.Invoice,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all invoices
         *
         * @generated from rpc scanswift.InvoicesService.ViewAll
         */
        viewAll: {
            name: "ViewAll",
            I: base_pb_js_1.ActiveInEntityRequest,
            O: invoices_pb_js_1.InvoicesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View invoices with pagination
         *
         * @generated from rpc scanswift.InvoicesService.ViewWithPagination
         */
        viewWithPagination: {
            name: "ViewWithPagination",
            I: invoices_pb_js_1.InvoicesServicePaginationReq,
            O: invoices_pb_js_1.InvoicePaginationResp,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Retrieve the payment link
         *
         * @generated from rpc scanswift.InvoicesService.ViewPaymentLink
         */
        viewPaymentLink: {
            name: "ViewPaymentLink",
            I: base_pb_js_1.Identifier,
            O: base_pb_js_1.URLResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Download the invoice as a PDF
         *
         * @generated from rpc scanswift.InvoicesService.DownloadAsPDF
         */
        downloadAsPDF: {
            name: "DownloadAsPDF",
            I: base_pb_js_1.Identifier,
            O: base_pb_js_1.FileResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.InvoicesService.SearchAll
         */
        searchAll: {
            name: "SearchAll",
            I: invoices_pb_js_1.InvoicesServiceSearchAllReq,
            O: invoices_pb_js_1.InvoicesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.InvoicesService.Filter
         */
        filter: {
            name: "Filter",
            I: invoices_pb_js_1.InvoicesServiceFilterReq,
            O: invoices_pb_js_1.InvoicesList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Count
         *
         * @generated from rpc scanswift.InvoicesService.Count
         */
        count: {
            name: "Count",
            I: base_pb_js_1.CountInEntityRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
