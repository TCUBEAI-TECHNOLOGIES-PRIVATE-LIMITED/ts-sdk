import { EntitiesList, EntitiesServiceCreateRequest, EntitiesServiceFilterReq, EntitiesServicePaginationReq, EntitiesServiceSearchAllReq, EntitiesServiceUpdateRequest, Entity, EntityPaginationResp } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveRequest, CountRequest, CountResponse, Identifier, IdentifierWithUserComment, ImageAssignRequest, ImageResponse, SearchKeyRequest } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each entity
 *
 * @generated from service scanswift.EntitiesService
 */
export declare const EntitiesService: {
    readonly typeName: "scanswift.EntitiesService";
    readonly methods: {
        /**
         * Create a entity
         *
         * @generated from rpc scanswift.EntitiesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EntitiesServiceCreateRequest;
            readonly O: typeof Entity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a entity
         *
         * @generated from rpc scanswift.EntitiesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof EntitiesServiceUpdateRequest;
            readonly O: typeof Entity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the entity
         *
         * @generated from rpc scanswift.EntitiesService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the entity
         *
         * @generated from rpc scanswift.EntitiesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Request Verification Email
         *
         * @generated from rpc scanswift.EntitiesService.RequestVerificationEmail
         */
        readonly requestVerificationEmail: {
            readonly name: "RequestVerificationEmail";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Assign image
         *
         * @generated from rpc scanswift.EntitiesService.AssignImage
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
         * @generated from rpc scanswift.EntitiesService.ViewImage
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
         * @generated from rpc scanswift.EntitiesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Entity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Global Identifier
         *
         * @generated from rpc scanswift.EntitiesService.ViewByGlobalIdentifier
         */
        readonly viewByGlobalIdentifier: {
            readonly name: "ViewByGlobalIdentifier";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof Entity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all entities
         *
         * @generated from rpc scanswift.EntitiesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveRequest;
            readonly O: typeof EntitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entities with pagination
         *
         * @generated from rpc scanswift.EntitiesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EntitiesServicePaginationReq;
            readonly O: typeof EntityPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.EntitiesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EntitiesServiceSearchAllReq;
            readonly O: typeof EntitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.EntitiesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EntitiesServiceFilterReq;
            readonly O: typeof EntitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.EntitiesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=entities_connect.d.ts.map