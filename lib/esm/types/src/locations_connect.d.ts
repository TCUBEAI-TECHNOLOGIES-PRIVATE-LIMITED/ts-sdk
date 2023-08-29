import { Location, LocationPaginationResp, LocationsList, LocationsServiceCreateRequest, LocationsServiceFilterReq, LocationsServicePaginationReq, LocationsServiceSearchAllReq, LocationsServiceUpdateRequest } from "./locations_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment, ImageAssignRequest, ImageResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each location
 *
 * @generated from service tcube.LocationsService
 */
export declare const LocationsService: {
    readonly typeName: "tcube.LocationsService";
    readonly methods: {
        /**
         * Create a location
         *
         * @generated from rpc tcube.LocationsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof LocationsServiceCreateRequest;
            readonly O: typeof Location;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a location
         *
         * @generated from rpc tcube.LocationsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof LocationsServiceUpdateRequest;
            readonly O: typeof Location;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the location
         *
         * @generated from rpc tcube.LocationsService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the location
         *
         * @generated from rpc tcube.LocationsService.Restore
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
         * @generated from rpc tcube.LocationsService.AssignImage
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
         * @generated from rpc tcube.LocationsService.ViewImage
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
         * @generated from rpc tcube.LocationsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Location;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all locations
         *
         * @generated from rpc tcube.LocationsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof LocationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View locations with pagination
         *
         * @generated from rpc tcube.LocationsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof LocationsServicePaginationReq;
            readonly O: typeof LocationPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.LocationsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof LocationsServiceSearchAllReq;
            readonly O: typeof LocationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.LocationsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof LocationsServiceFilterReq;
            readonly O: typeof LocationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.LocationsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=locations_connect.d.ts.map