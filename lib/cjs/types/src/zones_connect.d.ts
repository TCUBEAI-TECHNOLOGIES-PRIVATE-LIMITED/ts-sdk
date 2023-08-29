import { Zone, ZonePaginationResp, ZonesList, ZonesServiceCreateRequest, ZonesServiceFilterReq, ZonesServicePaginationReq, ZonesServiceSearchAllReq, ZonesServiceUpdateRequest } from "./zones_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment, ImageAssignRequest, ImageResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each zone
 *
 * @generated from service tcube.ZonesService
 */
export declare const ZonesService: {
    readonly typeName: "tcube.ZonesService";
    readonly methods: {
        /**
         * Create a zone
         *
         * @generated from rpc tcube.ZonesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ZonesServiceCreateRequest;
            readonly O: typeof Zone;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a zone
         *
         * @generated from rpc tcube.ZonesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof ZonesServiceUpdateRequest;
            readonly O: typeof Zone;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the zone
         *
         * @generated from rpc tcube.ZonesService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the zone
         *
         * @generated from rpc tcube.ZonesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Assign image
         *
         * @generated from rpc tcube.ZonesService.AssignImage
         */
        readonly assignImage: {
            readonly name: "AssignImage";
            readonly I: typeof ImageAssignRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View assigned image
         *
         * @generated from rpc tcube.ZonesService.ViewImage
         */
        readonly viewImage: {
            readonly name: "ViewImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc tcube.ZonesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Zone;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all zones
         *
         * @generated from rpc tcube.ZonesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof ZonesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View zones with pagination
         *
         * @generated from rpc tcube.ZonesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ZonesServicePaginationReq;
            readonly O: typeof ZonePaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.ZonesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ZonesServiceSearchAllReq;
            readonly O: typeof ZonesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.ZonesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ZonesServiceFilterReq;
            readonly O: typeof ZonesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.ZonesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=zones_connect.d.ts.map