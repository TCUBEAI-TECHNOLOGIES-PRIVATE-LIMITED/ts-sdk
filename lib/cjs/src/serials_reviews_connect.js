"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file serials_reviews.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialsReviewsService = void 0;
const serials_reviews_pb_js_1 = require("./serials_reviews_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the methods applicable on each serial review
 *
 * @generated from service tcube.SerialsReviewsService
 */
exports.SerialsReviewsService = {
    typeName: "tcube.SerialsReviewsService",
    methods: {
        /**
         * Create a serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Create
         */
        create: {
            name: "Create",
            I: serials_reviews_pb_js_1.SerialsReviewsServiceCreateRequest,
            O: serials_reviews_pb_js_1.SerialReview,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update a serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Update
         */
        update: {
            name: "Update",
            I: serials_reviews_pb_js_1.SerialsReviewsServiceUpdateRequest,
            O: serials_reviews_pb_js_1.SerialReview,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Archive the serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Archive
         */
        archive: {
            name: "Archive",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Restore the serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Restore
         */
        restore: {
            name: "Restore",
            I: base_pb_js_1.IdentifierWithUserComment,
            O: base_pb_js_1.Identifier,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View by UUID
         *
         * @generated from rpc tcube.SerialsReviewsService.ViewByUUID
         */
        viewByUUID: {
            name: "ViewByUUID",
            I: base_pb_js_1.Identifier,
            O: serials_reviews_pb_js_1.SerialReview,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all serials reviews
         *
         * @generated from rpc tcube.SerialsReviewsService.ViewAll
         */
        viewAll: {
            name: "ViewAll",
            I: base_pb_js_1.ActiveForProductRequest,
            O: serials_reviews_pb_js_1.SerialsReviewsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View serials reviews with pagination
         *
         * @generated from rpc tcube.SerialsReviewsService.ViewWithPagination
         */
        viewWithPagination: {
            name: "ViewWithPagination",
            I: serials_reviews_pb_js_1.SerialsReviewsServicePaginationReq,
            O: serials_reviews_pb_js_1.SerialReviewPaginationResp,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.SerialsReviewsService.SearchAll
         */
        searchAll: {
            name: "SearchAll",
            I: serials_reviews_pb_js_1.SerialsReviewsServiceSearchAllReq,
            O: serials_reviews_pb_js_1.SerialsReviewsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.SerialsReviewsService.Filter
         */
        filter: {
            name: "Filter",
            I: serials_reviews_pb_js_1.SerialsReviewsServiceFilterReq,
            O: serials_reviews_pb_js_1.SerialsReviewsList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Count
         *
         * @generated from rpc tcube.SerialsReviewsService.Count
         */
        count: {
            name: "Count",
            I: base_pb_js_1.CountForProductRequest,
            O: base_pb_js_1.CountResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};