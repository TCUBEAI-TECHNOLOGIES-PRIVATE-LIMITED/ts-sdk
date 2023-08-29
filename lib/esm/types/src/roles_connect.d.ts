import { Role, RolePaginationResp, RolesList, RolesServiceCreateRequest, RolesServicePaginationReq, RolesServiceUpdateRequest } from "./roles_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveRequest, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each role
 *
 * @generated from service tcube.RolesService
 */
export declare const RolesService: {
    readonly typeName: "tcube.RolesService";
    readonly methods: {
        /**
         * Create a role
         *
         * @generated from rpc tcube.RolesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof RolesServiceCreateRequest;
            readonly O: typeof Role;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a role
         *
         * @generated from rpc tcube.RolesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof RolesServiceUpdateRequest;
            readonly O: typeof Role;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the role
         *
         * @generated from rpc tcube.RolesService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the role
         *
         * @generated from rpc tcube.RolesService.Restore
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
         * @generated from rpc tcube.RolesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Role;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all roles
         *
         * @generated from rpc tcube.RolesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveRequest;
            readonly O: typeof RolesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View roles with pagination
         *
         * @generated from rpc tcube.RolesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof RolesServicePaginationReq;
            readonly O: typeof RolePaginationResp;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=roles_connect.d.ts.map