import { Serial, SerialActivitiesList, SerialMetadata, SerialPaginationResp, SerialsList, SerialsServiceAnalyticsGroupByStateRequest, SerialsServiceCommissionBulkRequest, SerialsServiceFilterReq, SerialsServicePaginationReq, SerialsServiceRegisterActivityRequest, SerialsServiceSearchAllReq, SerialsServiceStateAndCountMessageList, ViewSerialActivitiesRequest } from "./serials_pb.js";
import { ActiveInEntityRequest, CountInEntityRequest, CountResponse, Identifier, IdentifierWithUserComment, ImageResponse, SearchKeyRequest, StringResponse, URLResponse } from "./base_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the methods applicable on each serial
 *
 * Create a list of serials and return the Identifiers
 * rpc Create (SerialsServiceCreateRequest) returns (IdentifierList);
 * // Update a serial
 * rpc Update (SerialsServiceUpdateRequest) returns (Serial);
 *
 * @generated from service scanswift.SerialsService
 */
export declare const SerialsService: {
    readonly typeName: "scanswift.SerialsService";
    readonly methods: {
        /**
         * Commission a serial
         *
         * @generated from rpc scanswift.SerialsService.Commission
         */
        readonly commission: {
            readonly name: "Commission";
            readonly I: typeof SerialsServiceRegisterActivityRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Decommission a serial
         *
         * @generated from rpc scanswift.SerialsService.Decommission
         */
        readonly decommission: {
            readonly name: "Decommission";
            readonly I: typeof SerialsServiceRegisterActivityRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Commission serials in bulk and return the count of the all the commissioned serials
         *
         * @generated from rpc scanswift.SerialsService.CommissionBulk
         */
        readonly commissionBulk: {
            readonly name: "CommissionBulk";
            readonly I: typeof SerialsServiceCommissionBulkRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Decommission serials in bulk and return the count of the all the decommissioned serials
         *
         * @generated from rpc scanswift.SerialsService.DecommissionBulk
         */
        readonly decommissionBulk: {
            readonly name: "DecommissionBulk";
            readonly I: typeof SerialsServiceCommissionBulkRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify a serial
         *
         * @generated from rpc scanswift.SerialsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof SerialsServiceRegisterActivityRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Archive the serial
         *
         * @generated from rpc scanswift.SerialsService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the serial
         *
         * @generated from rpc scanswift.SerialsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Recall the serial
         *
         * @generated from rpc scanswift.SerialsService.Recall
         */
        readonly recall: {
            readonly name: "Recall";
            readonly I: typeof SerialsServiceRegisterActivityRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc scanswift.SerialsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof Identifier;
            readonly O: typeof Serial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Code
         *
         * @generated from rpc scanswift.SerialsService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof Serial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the metadata using the serial code
         *
         * @generated from rpc scanswift.SerialsService.ViewMetadataByCode
         */
        readonly viewMetadataByCode: {
            readonly name: "ViewMetadataByCode";
            readonly I: typeof SearchKeyRequest;
            readonly O: typeof SerialMetadata;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all serials
         *
         * @generated from rpc scanswift.SerialsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveInEntityRequest;
            readonly O: typeof SerialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View serials with pagination
         *
         * @generated from rpc scanswift.SerialsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SerialsServicePaginationReq;
            readonly O: typeof SerialPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View as QR code
         *
         * @generated from rpc scanswift.SerialsService.ViewAsQR
         */
        readonly viewAsQR: {
            readonly name: "ViewAsQR";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View as DataMatrix
         *
         * @generated from rpc scanswift.SerialsService.ViewAsDataMatrix
         */
        readonly viewAsDataMatrix: {
            readonly name: "ViewAsDataMatrix";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View as Image on the basis of the product's configuration
         *
         * @generated from rpc scanswift.SerialsService.ViewAsImage
         */
        readonly viewAsImage: {
            readonly name: "ViewAsImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the serial's URI
         *
         * @generated from rpc scanswift.SerialsService.ViewAsURI
         */
        readonly viewAsURI: {
            readonly name: "ViewAsURI";
            readonly I: typeof Identifier;
            readonly O: typeof URLResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the string that can be used to render the QR code on POS machines
         *
         * @generated from rpc scanswift.SerialsService.ViewPrintableString
         */
        readonly viewPrintableString: {
            readonly name: "ViewPrintableString";
            readonly I: typeof Identifier;
            readonly O: typeof StringResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View serial activities
         *
         * @generated from rpc scanswift.SerialsService.ViewSerialActivities
         */
        readonly viewSerialActivities: {
            readonly name: "ViewSerialActivities";
            readonly I: typeof ViewSerialActivitiesRequest;
            readonly O: typeof SerialActivitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc scanswift.SerialsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SerialsServiceSearchAllReq;
            readonly O: typeof SerialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc scanswift.SerialsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SerialsServiceFilterReq;
            readonly O: typeof SerialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count
         *
         * @generated from rpc scanswift.SerialsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CountInEntityRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View counts of serials in various states
         *
         * @generated from rpc scanswift.SerialsService.CountsInStates
         */
        readonly countsInStates: {
            readonly name: "CountsInStates";
            readonly I: typeof SerialsServiceAnalyticsGroupByStateRequest;
            readonly O: typeof SerialsServiceStateAndCountMessageList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=serials_connect.d.ts.map