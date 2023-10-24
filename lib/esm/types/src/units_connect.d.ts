import { Unit, UnitPaginationResp, UnitsList, UnitsServiceCreateRequest, UnitsServiceFilterReq, UnitsServicePaginationReq, UnitsServiceSearchAllReq, UnitsServiceUpdateRequest } from "./units_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveRequest, CountRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each unit
 *
 * @generated from service scanswift.UnitsService
 */
export declare const UnitsService: {
    readonly typeName: "scanswift.UnitsService";
    readonly methods: {
        /**
         * Create a unit
         *
         * @generated from rpc scanswift.UnitsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof UnitsServiceCreateRequest;
            readonly O: typeof Unit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a unit
         *
         * @generated from rpc scanswift.UnitsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof UnitsServiceUpdateRequest;
            readonly O: typeof Unit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the unit
         *
         * @generated from rpc scanswift.UnitsService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the unit
         *
         * @generated from rpc scanswift.UnitsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc scanswift.UnitsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Unit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all units
         *
         * @generated from rpc scanswift.UnitsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveRequest;
            readonly O: typeof UnitsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View units with pagination
         *
         * @generated from rpc scanswift.UnitsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof UnitsServicePaginationReq;
            readonly O: typeof UnitPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.UnitsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof UnitsServiceSearchAllReq;
            readonly O: typeof UnitsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.UnitsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof UnitsServiceFilterReq;
            readonly O: typeof UnitsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.UnitsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=units_connect.d.ts.map