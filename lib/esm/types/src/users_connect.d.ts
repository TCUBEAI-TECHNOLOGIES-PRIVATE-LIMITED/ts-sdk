import { User, UserPaginationResp, UsersList, UsersServiceCreateRequest, UsersServiceFilterReq, UsersServicePaginationReq, UsersServiceRegisterUserDeviceRequest, UsersServiceResetPasswordRequest, UsersServiceSearchAllReq, UsersServiceUpdatePasswordRequest, UsersServiceUpdateRequest } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveRequest, CountRequest, CountResponse, Identifier, IdentifierUsername, IdentifierWithUserComment, ImageAssignRequest, ImageResponse } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each user
 *
 * @generated from service tcube.UsersService
 */
export declare const UsersService: {
    readonly typeName: "tcube.UsersService";
    readonly methods: {
        /**
         * Create a user
         *
         * @generated from rpc tcube.UsersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof UsersServiceCreateRequest;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a user
         *
         * @generated from rpc tcube.UsersService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof UsersServiceUpdateRequest;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a user's password
         *
         * @generated from rpc tcube.UsersService.UpdatePassword
         */
        readonly updatePassword: {
            readonly name: "UpdatePassword";
            readonly I: typeof UsersServiceUpdatePasswordRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reset a user's password. This operation sets a random password and sends the same to the user's email address
         *
         * @generated from rpc tcube.UsersService.ResetPassword
         */
        readonly resetPassword: {
            readonly name: "ResetPassword";
            readonly I: typeof UsersServiceResetPasswordRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * ------------------------------------------------------
         * All Identifier operations are listed below
         * Archive the user
         *
         * @generated from rpc tcube.UsersService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the user
         *
         * @generated from rpc tcube.UsersService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Register user's device for push notifications
         *
         * @generated from rpc tcube.UsersService.RegisterUserDevice
         */
        readonly registerUserDevice: {
            readonly name: "RegisterUserDevice";
            readonly I: typeof UsersServiceRegisterUserDeviceRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Assign image
         *
         * @generated from rpc tcube.UsersService.AssignImage
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
         * @generated from rpc tcube.UsersService.ViewImage
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
         * @generated from rpc tcube.UsersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Username
         *
         * @generated from rpc tcube.UsersService.ViewByUsername
         */
        readonly viewByUsername: {
            readonly name: "ViewByUsername";
            readonly I: typeof IdentifierUsername;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users
         *
         * @generated from rpc tcube.UsersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveRequest;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View users with pagination
         *
         * @generated from rpc tcube.UsersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof UsersServicePaginationReq;
            readonly O: typeof UserPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.UsersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof UsersServiceSearchAllReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.UsersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof UsersServiceFilterReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.UsersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=users_connect.d.ts.map