"use strict";
// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file scans.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScansService = void 0;
const scans_pb_js_1 = require("./scans_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
const base_pb_js_1 = require("./base_pb.js");
/**
 *
 * Describes the methods applicable on scans service
 *
 * @generated from service tcube.ScansService
 */
exports.ScansService = {
    typeName: "tcube.ScansService",
    methods: {
        /**
         * Create a serial scan
         *
         * @generated from rpc tcube.ScansService.CreateSerialScan
         */
        createSerialScan: {
            name: "CreateSerialScan",
            I: scans_pb_js_1.ScansServiceSerialScanCreateRequest,
            O: scans_pb_js_1.ScansServiceSerialScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Create a serial scan from the given IP address
         *
         * @generated from rpc tcube.ScansService.CreateSerialScanFromIP
         */
        createSerialScanFromIP: {
            name: "CreateSerialScanFromIP",
            I: scans_pb_js_1.ScansServiceCreateScanFromIPRequest,
            O: scans_pb_js_1.ScansServiceSerialScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update a serial scan
         *
         * @generated from rpc tcube.ScansService.UpdateSerialScan
         */
        updateSerialScan: {
            name: "UpdateSerialScan",
            I: scans_pb_js_1.ScansServiceSerialScanUpdateRequest,
            O: scans_pb_js_1.ScansServiceSerialScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all scans for serial
         *
         * @generated from rpc tcube.ScansService.ViewBySerialUUID
         */
        viewBySerialUUID: {
            name: "ViewBySerialUUID",
            I: base_pb_js_1.Identifier,
            O: scans_pb_js_1.SerialsScansList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Create a packaging scan
         *
         * @generated from rpc tcube.ScansService.CreatePackagingScan
         */
        createPackagingScan: {
            name: "CreatePackagingScan",
            I: scans_pb_js_1.ScansServicePackagingScanCreateRequest,
            O: scans_pb_js_1.ScansServicePackagingScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Create a packaging scan from the given IP address
         *
         * @generated from rpc tcube.ScansService.CreatePackagingScanFromIP
         */
        createPackagingScanFromIP: {
            name: "CreatePackagingScanFromIP",
            I: scans_pb_js_1.ScansServiceCreateScanFromIPRequest,
            O: scans_pb_js_1.ScansServicePackagingScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update a packaging scan
         *
         * @generated from rpc tcube.ScansService.UpdatePackagingScan
         */
        updatePackagingScan: {
            name: "UpdatePackagingScan",
            I: scans_pb_js_1.ScansServicePackagingScanUpdateRequest,
            O: scans_pb_js_1.ScansServicePackagingScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all scans for packaging
         *
         * @generated from rpc tcube.ScansService.ViewByPackagingUUID
         */
        viewByPackagingUUID: {
            name: "ViewByPackagingUUID",
            I: base_pb_js_1.Identifier,
            O: scans_pb_js_1.PackagingsScansList,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Create a shipping scan
         *
         * @generated from rpc tcube.ScansService.CreateShippingScan
         */
        createShippingScan: {
            name: "CreateShippingScan",
            I: scans_pb_js_1.ScansServiceShippingScanCreateRequest,
            O: scans_pb_js_1.ScansServiceShippingScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Create a shipping scan from the given IP address
         *
         * @generated from rpc tcube.ScansService.CreateShippingScanFromIP
         */
        createShippingScanFromIP: {
            name: "CreateShippingScanFromIP",
            I: scans_pb_js_1.ScansServiceCreateScanFromIPRequest,
            O: scans_pb_js_1.ScansServiceShippingScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update a shipping scan
         *
         * @generated from rpc tcube.ScansService.UpdateShippingScan
         */
        updateShippingScan: {
            name: "UpdateShippingScan",
            I: scans_pb_js_1.ScansServiceShippingScanUpdateRequest,
            O: scans_pb_js_1.ScansServiceShippingScan,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * View all scans for shipping
         *
         * @generated from rpc tcube.ScansService.ViewByShippingUUID
         */
        viewByShippingUUID: {
            name: "ViewByShippingUUID",
            I: base_pb_js_1.Identifier,
            O: scans_pb_js_1.ShippingsScansList,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};