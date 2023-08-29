// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file serials.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Serial, SerialActivitiesList, SerialPaginationResp, SerialsList, SerialsServiceAnalyticsGroupByStateRequest, SerialsServiceCommissionBulkRequest, SerialsServiceFilterReq, SerialsServicePaginationReq, SerialsServiceRegisterActivityRequest, SerialsServiceSearchAllReq, SerialsServiceStateAndCountMessageList, ViewSerialActivitiesRequest } from "./serials_pb.js";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment, ImageResponse, SearchKeyRequest, URLResponse } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 *
 * Describes the methods applicable on each serial
 *
 * Create a list of serials and return the Identifiers
 * rpc Create (SerialsServiceCreateRequest) returns (IdentifierList);
 * // Update a serial
 * rpc Update (SerialsServiceUpdateRequest) returns (Serial);
 *
 * @generated from service tcube.SerialsService
 */
export const SerialsService = {
  typeName: "tcube.SerialsService",
  methods: {
    /**
     * Commission a serial
     *
     * @generated from rpc tcube.SerialsService.Commission
     */
    commission: {
      name: "Commission",
      I: SerialsServiceRegisterActivityRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Decommission a serial
     *
     * @generated from rpc tcube.SerialsService.Decommission
     */
    decommission: {
      name: "Decommission",
      I: SerialsServiceRegisterActivityRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Commission serials in bulk and return the count of the all the commissioned serials
     *
     * @generated from rpc tcube.SerialsService.CommissionBulk
     */
    commissionBulk: {
      name: "CommissionBulk",
      I: SerialsServiceCommissionBulkRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Decommission serials in bulk and return the count of the all the decommissioned serials
     *
     * @generated from rpc tcube.SerialsService.DecommissionBulk
     */
    decommissionBulk: {
      name: "DecommissionBulk",
      I: SerialsServiceCommissionBulkRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Verify a serial
     *
     * @generated from rpc tcube.SerialsService.Verify
     */
    verify: {
      name: "Verify",
      I: SerialsServiceRegisterActivityRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Archive the serial
     *
     * @generated from rpc tcube.SerialsService.Archive
     */
    archive: {
      name: "Archive",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Restore the serial
     *
     * @generated from rpc tcube.SerialsService.Restore
     */
    restore: {
      name: "Restore",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Recall the serial
     *
     * @generated from rpc tcube.SerialsService.Recall
     */
    recall: {
      name: "Recall",
      I: SerialsServiceRegisterActivityRequest,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View by UUID
     *
     * @generated from rpc tcube.SerialsService.ViewByUUID
     */
    viewByUUID: {
      name: "ViewByUUID",
      I: Identifier,
      O: Serial,
      kind: MethodKind.Unary,
    },
    /**
     * View by Code
     *
     * @generated from rpc tcube.SerialsService.ViewByCode
     */
    viewByCode: {
      name: "ViewByCode",
      I: SearchKeyRequest,
      O: Serial,
      kind: MethodKind.Unary,
    },
    /**
     * View all serials
     *
     * @generated from rpc tcube.SerialsService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveInEntityRequest,
      O: SerialsList,
      kind: MethodKind.Unary,
    },
    /**
     * View serials with pagination
     *
     * @generated from rpc tcube.SerialsService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: SerialsServicePaginationReq,
      O: SerialPaginationResp,
      kind: MethodKind.Unary,
    },
    /**
     * View as QR code
     *
     * @generated from rpc tcube.SerialsService.ViewAsQR
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
     * @generated from rpc tcube.SerialsService.ViewAsDataMatrix
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
     * @generated from rpc tcube.SerialsService.ViewAsImage
     */
    viewAsImage: {
      name: "ViewAsImage",
      I: Identifier,
      O: ImageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View the serial's URI
     *
     * @generated from rpc tcube.SerialsService.ViewAsURI
     */
    viewAsURI: {
      name: "ViewAsURI",
      I: Identifier,
      O: URLResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View serial activities
     *
     * @generated from rpc tcube.SerialsService.ViewSerialActivities
     */
    viewSerialActivities: {
      name: "ViewSerialActivities",
      I: ViewSerialActivitiesRequest,
      O: SerialActivitiesList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc tcube.SerialsService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: SerialsServiceSearchAllReq,
      O: SerialsList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc tcube.SerialsService.Filter
     */
    filter: {
      name: "Filter",
      I: SerialsServiceFilterReq,
      O: SerialsList,
      kind: MethodKind.Unary,
    },
    /**
     * Count
     *
     * @generated from rpc tcube.SerialsService.Count
     */
    count: {
      name: "Count",
      I: CountInEntityRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * View counts of serials in various states
     *
     * @generated from rpc tcube.SerialsService.CountsInStates
     */
    countsInStates: {
      name: "CountsInStates",
      I: SerialsServiceAnalyticsGroupByStateRequest,
      O: SerialsServiceStateAndCountMessageList,
      kind: MethodKind.Unary,
    },
  }
} as const;
