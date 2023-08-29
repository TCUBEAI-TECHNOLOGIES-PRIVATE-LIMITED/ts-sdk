import { PackagingsScansList, ScansServiceCreateScanFromIPRequest, ScansServicePackagingScan, ScansServicePackagingScanCreateRequest, ScansServicePackagingScanUpdateRequest, ScansServiceSerialScan, ScansServiceSerialScanCreateRequest, ScansServiceSerialScanUpdateRequest, ScansServiceShippingScan, ScansServiceShippingScanCreateRequest, ScansServiceShippingScanUpdateRequest, SerialsScansList, ShippingsScansList } from "./scans_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { Identifier } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on scans service
 *
 * @generated from service tcube.ScansService
 */
export declare const ScansService: {
    readonly typeName: "tcube.ScansService";
    readonly methods: {
        /**
         * Create a serial scan
         *
         * @generated from rpc tcube.ScansService.CreateSerialScan
         */
        readonly createSerialScan: {
            readonly name: "CreateSerialScan";
            readonly I: typeof ScansServiceSerialScanCreateRequest;
            readonly O: typeof ScansServiceSerialScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a serial scan from the given IP address
         *
         * @generated from rpc tcube.ScansService.CreateSerialScanFromIP
         */
        readonly createSerialScanFromIP: {
            readonly name: "CreateSerialScanFromIP";
            readonly I: typeof ScansServiceCreateScanFromIPRequest;
            readonly O: typeof ScansServiceSerialScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a serial scan
         *
         * @generated from rpc tcube.ScansService.UpdateSerialScan
         */
        readonly updateSerialScan: {
            readonly name: "UpdateSerialScan";
            readonly I: typeof ScansServiceSerialScanUpdateRequest;
            readonly O: typeof ScansServiceSerialScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all scans for serial
         *
         * @generated from rpc tcube.ScansService.ViewBySerialUUID
         */
        readonly viewBySerialUUID: {
            readonly name: "ViewBySerialUUID";
            readonly I: typeof Identifier;
            readonly O: typeof SerialsScansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a packaging scan
         *
         * @generated from rpc tcube.ScansService.CreatePackagingScan
         */
        readonly createPackagingScan: {
            readonly name: "CreatePackagingScan";
            readonly I: typeof ScansServicePackagingScanCreateRequest;
            readonly O: typeof ScansServicePackagingScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a packaging scan from the given IP address
         *
         * @generated from rpc tcube.ScansService.CreatePackagingScanFromIP
         */
        readonly createPackagingScanFromIP: {
            readonly name: "CreatePackagingScanFromIP";
            readonly I: typeof ScansServiceCreateScanFromIPRequest;
            readonly O: typeof ScansServicePackagingScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a packaging scan
         *
         * @generated from rpc tcube.ScansService.UpdatePackagingScan
         */
        readonly updatePackagingScan: {
            readonly name: "UpdatePackagingScan";
            readonly I: typeof ScansServicePackagingScanUpdateRequest;
            readonly O: typeof ScansServicePackagingScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all scans for packaging
         *
         * @generated from rpc tcube.ScansService.ViewByPackagingUUID
         */
        readonly viewByPackagingUUID: {
            readonly name: "ViewByPackagingUUID";
            readonly I: typeof Identifier;
            readonly O: typeof PackagingsScansList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a shipping scan
         *
         * @generated from rpc tcube.ScansService.CreateShippingScan
         */
        readonly createShippingScan: {
            readonly name: "CreateShippingScan";
            readonly I: typeof ScansServiceShippingScanCreateRequest;
            readonly O: typeof ScansServiceShippingScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a shipping scan from the given IP address
         *
         * @generated from rpc tcube.ScansService.CreateShippingScanFromIP
         */
        readonly createShippingScanFromIP: {
            readonly name: "CreateShippingScanFromIP";
            readonly I: typeof ScansServiceCreateScanFromIPRequest;
            readonly O: typeof ScansServiceShippingScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a shipping scan
         *
         * @generated from rpc tcube.ScansService.UpdateShippingScan
         */
        readonly updateShippingScan: {
            readonly name: "UpdateShippingScan";
            readonly I: typeof ScansServiceShippingScanUpdateRequest;
            readonly O: typeof ScansServiceShippingScan;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all scans for shipping
         *
         * @generated from rpc tcube.ScansService.ViewByShippingUUID
         */
        readonly viewByShippingUUID: {
            readonly name: "ViewByShippingUUID";
            readonly I: typeof Identifier;
            readonly O: typeof ShippingsScansList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=scans_connect.d.ts.map