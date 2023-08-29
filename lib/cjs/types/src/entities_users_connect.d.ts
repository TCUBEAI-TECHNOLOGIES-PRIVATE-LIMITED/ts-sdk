import { EntitiesUsersList, EntitiesUsersServiceCreateRequest, EntitiesUsersServiceFilterReq, EntitiesUsersServicePaginationReq, EntitiesUsersServiceSearchAllReq, EntitiesUsersServiceUpdateRequest, EntityUser, EntityUserPaginationResp } from "./entities_users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each entity user
 *
 * @generated from service tcube.EntitiesUsersService
 */
export declare const EntitiesUsersService: {
    readonly typeName: "tcube.EntitiesUsersService";
    readonly methods: {
        /**
         * Create an entity user
         *
         * @generated from rpc tcube.EntitiesUsersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EntitiesUsersServiceCreateRequest;
            readonly O: typeof EntityUser;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update an entity user
         *
         * @generated from rpc tcube.EntitiesUsersService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof EntitiesUsersServiceUpdateRequest;
            readonly O: typeof EntityUser;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the entity user
         *
         * @generated from rpc tcube.EntitiesUsersService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the entity user
         *
         * @generated from rpc tcube.EntitiesUsersService.Restore
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
         * @generated from rpc tcube.EntitiesUsersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof EntityUser;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all entities users
         *
         * @generated from rpc tcube.EntitiesUsersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof EntitiesUsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entities users with pagination
         *
         * @generated from rpc tcube.EntitiesUsersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EntitiesUsersServicePaginationReq;
            readonly O: typeof EntityUserPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.EntitiesUsersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EntitiesUsersServiceSearchAllReq;
            readonly O: typeof EntitiesUsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.EntitiesUsersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EntitiesUsersServiceFilterReq;
            readonly O: typeof EntitiesUsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.EntitiesUsersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=entities_users_connect.d.ts.map