// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file shippings.proto (package scanswift, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Shipping, ShippingMetadata, ShippingPaginationResp, ShippingsList, ShippingsPackagingsList, ShippingsServiceAddPackagingsRequest, ShippingsServiceCreateRequest, ShippingsServiceFilterReq, ShippingsServicePaginationReq, ShippingsServiceSearchAllReq } from "./shippings_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, FileResponse, Identifier, IdentifierWithUserComment, ImageResponse, SearchKeyRequest, StringResponse, URLResponse } from "./base_pb.js";

/**
 *
 * Describes the methods applicable on each shipping
 *
 * @generated from service scanswift.ShippingsService
 */
export const ShippingsService = {
  typeName: "scanswift.ShippingsService",
  methods: {
    /**
     * Create a shipping
     *
     * // Update a shipping
     * rpc Update (ShippingsServiceUpdateRequest) returns (Shipping);
     *
     * @generated from rpc scanswift.ShippingsService.Create
     */
    create: {
      name: "Create",
      I: ShippingsServiceCreateRequest,
      O: Shipping,
      kind: MethodKind.Unary,
    },
    /**
     * Close the shipping
     *
     * @generated from rpc scanswift.ShippingsService.Close
     */
    close: {
      name: "Close",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Archive the shipping
     *
     * @generated from rpc scanswift.ShippingsService.Archive
     */
    archive: {
      name: "Archive",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Restore the shipping
     *
     * @generated from rpc scanswift.ShippingsService.Restore
     */
    restore: {
      name: "Restore",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Recall the shipping
     *
     * @generated from rpc scanswift.ShippingsService.Recall
     */
    recall: {
      name: "Recall",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View by UUID
     *
     * @generated from rpc scanswift.ShippingsService.ViewByUUID
     */
    viewByUUID: {
      name: "ViewByUUID",
      I: Identifier,
      O: Shipping,
      kind: MethodKind.Unary,
    },
    /**
     * View by Code
     *
     * @generated from rpc scanswift.ShippingsService.ViewByCode
     */
    viewByCode: {
      name: "ViewByCode",
      I: SearchKeyRequest,
      O: Shipping,
      kind: MethodKind.Unary,
    },
    /**
     * View the metadata using the shipping code
     *
     * @generated from rpc scanswift.ShippingsService.ViewMetadataByCode
     */
    viewMetadataByCode: {
      name: "ViewMetadataByCode",
      I: SearchKeyRequest,
      O: ShippingMetadata,
      kind: MethodKind.Unary,
    },
    /**
     * View all shippings
     *
     * @generated from rpc scanswift.ShippingsService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveInEntityRequest,
      O: ShippingsList,
      kind: MethodKind.Unary,
    },
    /**
     * View shippings with pagination
     *
     * @generated from rpc scanswift.ShippingsService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: ShippingsServicePaginationReq,
      O: ShippingPaginationResp,
      kind: MethodKind.Unary,
    },
    /**
     * View as QR code
     *
     * @generated from rpc scanswift.ShippingsService.ViewAsQR
     */
    viewAsQR: {
      name: "ViewAsQR",
      I: Identifier,
      O: ImageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View as DataMatrix
     *
     * @generated from rpc scanswift.ShippingsService.ViewAsDataMatrix
     */
    viewAsDataMatrix: {
      name: "ViewAsDataMatrix",
      I: Identifier,
      O: ImageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View as Image on the basis of the product's configuration
     *
     * @generated from rpc scanswift.ShippingsService.ViewAsImage
     */
    viewAsImage: {
      name: "ViewAsImage",
      I: Identifier,
      O: ImageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View the shipping's URI
     *
     * @generated from rpc scanswift.ShippingsService.ViewAsURI
     */
    viewAsURI: {
      name: "ViewAsURI",
      I: Identifier,
      O: URLResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View the string that can be used to render the QR code on POS machines
     *
     * @generated from rpc scanswift.ShippingsService.ViewPrintableString
     */
    viewPrintableString: {
      name: "ViewPrintableString",
      I: Identifier,
      O: StringResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Download the shipping as a PDF
     *
     * @generated from rpc scanswift.ShippingsService.DownloadAsPDF
     */
    downloadAsPDF: {
      name: "DownloadAsPDF",
      I: Identifier,
      O: FileResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Download the shipping as an image
     *
     * @generated from rpc scanswift.ShippingsService.DownloadAsImage
     */
    downloadAsImage: {
      name: "DownloadAsImage",
      I: Identifier,
      O: FileResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc scanswift.ShippingsService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: ShippingsServiceSearchAllReq,
      O: ShippingsList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc scanswift.ShippingsService.Filter
     */
    filter: {
      name: "Filter",
      I: ShippingsServiceFilterReq,
      O: ShippingsList,
      kind: MethodKind.Unary,
    },
    /**
     * Count
     *
     * @generated from rpc scanswift.ShippingsService.Count
     */
    count: {
      name: "Count",
      I: CountInEntityRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Add list of packagings to a shipping
     *
     * @generated from rpc scanswift.ShippingsService.AddPackagings
     */
    addPackagings: {
      name: "AddPackagings",
      I: ShippingsServiceAddPackagingsRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Remove packaging (represented by the UUID of the associated shipping packaging) from shipping and return the removed identifier
     *
     * @generated from rpc scanswift.ShippingsService.RemovePackaging
     */
    removePackaging: {
      name: "RemovePackaging",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View all packagings associated with the shipping represented by the Identifier
     *
     * @generated from rpc scanswift.ShippingsService.ViewPackagings
     */
    viewPackagings: {
      name: "ViewPackagings",
      I: Identifier,
      O: ShippingsPackagingsList,
      kind: MethodKind.Unary,
    },
    /**
     * Count all packagings within a shipping
     *
     * @generated from rpc scanswift.ShippingsService.CountPackagings
     */
    countPackagings: {
      name: "CountPackagings",
      I: Identifier,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

