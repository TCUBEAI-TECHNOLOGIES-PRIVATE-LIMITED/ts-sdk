import { Template, TemplatePaginationResp, TemplatesList, TemplatesServiceCreateRequest, TemplatesServiceFilterReq, TemplatesServicePaginationReq, TemplatesServiceSearchAllReq, TemplatesServiceUpdateRequest } from "./templates_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveRequest, CountRequest, CountResponse, Identifier, IdentifierWithUserComment } from "./base_pb.js";
/**
 *
 * Describes the methods applicable on each template
 *
 * @generated from service scanswift.TemplatesService
 */
export declare const TemplatesService: {
    readonly typeName: "scanswift.TemplatesService";
    readonly methods: {
        /**
         * Create a template
         *
         * @generated from rpc scanswift.TemplatesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TemplatesServiceCreateRequest;
            readonly O: typeof Template;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a template
         *
         * @generated from rpc scanswift.TemplatesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof TemplatesServiceUpdateRequest;
            readonly O: typeof Template;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the template
         *
         * @generated from rpc scanswift.TemplatesService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the template
         *
         * @generated from rpc scanswift.TemplatesService.Restore
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
         * @generated from rpc scanswift.TemplatesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Template;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all templates
         *
         * @generated from rpc scanswift.TemplatesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveRequest;
            readonly O: typeof TemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View templates with pagination
         *
         * @generated from rpc scanswift.TemplatesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof TemplatesServicePaginationReq;
            readonly O: typeof TemplatePaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.TemplatesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof TemplatesServiceSearchAllReq;
            readonly O: typeof TemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.TemplatesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof TemplatesServiceFilterReq;
            readonly O: typeof TemplatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.TemplatesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=templates_connect.d.ts.map