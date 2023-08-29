// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file entities_users.proto (package tcube, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { EntitiesUsersList, EntitiesUsersServiceCreateRequest, EntitiesUsersServiceFilterReq, EntitiesUsersServicePaginationReq, EntitiesUsersServiceSearchAllReq, EntitiesUsersServiceUpdateRequest, EntityUser, EntityUserPaginationResp } from "./entities_users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";

/**
 *
 * Describes the methods applicable on each entity user
 *
 * @generated from service tcube.EntitiesUsersService
 */
export const EntitiesUsersService = {
  typeName: "tcube.EntitiesUsersService",
  methods: {
    /**
     * Create an entity user
     *
     * @generated from rpc tcube.EntitiesUsersService.Create
     */
    create: {
      name: "Create",
      I: EntitiesUsersServiceCreateRequest,
      O: EntityUser,
      kind: MethodKind.Unary,
    },
    /**
     * Update an entity user
     *
     * @generated from rpc tcube.EntitiesUsersService.Update
     */
    update: {
      name: "Update",
      I: EntitiesUsersServiceUpdateRequest,
      O: EntityUser,
      kind: MethodKind.Unary,
    },
    /**
     * Archive the entity user
     *
     * @generated from rpc tcube.EntitiesUsersService.Archive
     */
    archive: {
      name: "Archive",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * Restore the entity user
     *
     * @generated from rpc tcube.EntitiesUsersService.Restore
     */
    restore: {
      name: "Restore",
      I: IdentifierWithUserComment,
      O: Identifier,
      kind: MethodKind.Unary,
    },
    /**
     * View by UUID
     *
     * @generated from rpc tcube.EntitiesUsersService.ViewByUUID
     */
    viewByUUID: {
      name: "ViewByUUID",
      I: Identifier,
      O: EntityUser,
      kind: MethodKind.Unary,
    },
    /**
     * View all entities users
     *
     * @generated from rpc tcube.EntitiesUsersService.ViewAll
     */
    viewAll: {
      name: "ViewAll",
      I: ActiveInEntityRequest,
      O: EntitiesUsersList,
      kind: MethodKind.Unary,
    },
    /**
     * View entities users with pagination
     *
     * @generated from rpc tcube.EntitiesUsersService.ViewWithPagination
     */
    viewWithPagination: {
      name: "ViewWithPagination",
      I: EntitiesUsersServicePaginationReq,
      O: EntityUserPaginationResp,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given search key
     *
     * @generated from rpc tcube.EntitiesUsersService.SearchAll
     */
    searchAll: {
      name: "SearchAll",
      I: EntitiesUsersServiceSearchAllReq,
      O: EntitiesUsersList,
      kind: MethodKind.Unary,
    },
    /**
     * View all that match the given filter criteria
     *
     * @generated from rpc tcube.EntitiesUsersService.Filter
     */
    filter: {
      name: "Filter",
      I: EntitiesUsersServiceFilterReq,
      O: EntitiesUsersList,
      kind: MethodKind.Unary,
    },
    /**
     * Count
     *
     * @generated from rpc tcube.EntitiesUsersService.Count
     */
    count: {
      name: "Count",
      I: CountInEntityRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

