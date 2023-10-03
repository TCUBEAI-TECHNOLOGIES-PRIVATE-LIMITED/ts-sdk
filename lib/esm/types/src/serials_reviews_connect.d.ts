import { SerialReview, SerialReviewPaginationResp, SerialsReviewsList, SerialsReviewsServiceCreateRequest, SerialsReviewsServiceFilterReq, SerialsReviewsServicePaginationReq, SerialsReviewsServiceSearchAllReq, SerialsReviewsServiceUpdateRequest } from "./serials_reviews_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveForProductRequest, CountForProductRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each serial review
 *
 * @generated from service tcube.SerialsReviewsService
 */
export declare const SerialsReviewsService: {
    readonly typeName: "tcube.SerialsReviewsService";
    readonly methods: {
        /**
         * Create a serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SerialsReviewsServiceCreateRequest;
            readonly O: typeof SerialReview;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof SerialsReviewsServiceUpdateRequest;
            readonly O: typeof SerialReview;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the serial review
         *
         * @generated from rpc tcube.SerialsReviewsService.Restore
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
         * @generated from rpc tcube.SerialsReviewsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof SerialReview;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all serials reviews
         *
         * @generated from rpc tcube.SerialsReviewsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveForProductRequest;
            readonly O: typeof SerialsReviewsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View serials reviews with pagination
         *
         * @generated from rpc tcube.SerialsReviewsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SerialsReviewsServicePaginationReq;
            readonly O: typeof SerialReviewPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc tcube.SerialsReviewsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SerialsReviewsServiceSearchAllReq;
            readonly O: typeof SerialsReviewsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc tcube.SerialsReviewsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SerialsReviewsServiceFilterReq;
            readonly O: typeof SerialsReviewsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc tcube.SerialsReviewsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountForProductRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=serials_reviews_connect.d.ts.map