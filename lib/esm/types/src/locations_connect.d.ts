import { Location, LocationPaginationResp, LocationsList, LocationsServiceCreateRequest, LocationsServiceFilterReq, LocationsServicePaginationReq, LocationsServiceSearchAllReq, LocationsServiceUpdateRequest } from "./locations_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment, ImageAssignRequest, ImageResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each location
 *
 * @generated from service scanswift.LocationsService
 */
export declare const LocationsService: {
    readonly typeName: "scanswift.LocationsService";
    readonly methods: {
        /**
         * Create a location
         *
         * @generated from rpc scanswift.LocationsService.Create
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
         * @generated from rpc scanswift.LocationsService.Update
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
         * @generated from rpc scanswift.LocationsService.Archive
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
         * @generated from rpc scanswift.LocationsService.Restore
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
         * @generated from rpc scanswift.LocationsService.AssignImage
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
         * @generated from rpc scanswift.LocationsService.ViewImage
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
         * @generated from rpc scanswift.LocationsService.ViewByUUID
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
         * @generated from rpc scanswift.LocationsService.ViewAll
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
         * @generated from rpc scanswift.LocationsService.ViewWithPagination
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
         * @generated from rpc scanswift.LocationsService.SearchAll
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
         * @generated from rpc scanswift.LocationsService.Filter
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
         * @generated from rpc scanswift.LocationsService.Count
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