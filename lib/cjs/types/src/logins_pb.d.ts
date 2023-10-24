import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 *
 * Describes the data structure for a user to login
 *
 * @generated from message scanswift.UserLoginRequest
 */
export declare class UserLoginRequest extends Message<UserLoginRequest> {
    /**
     * Username of the user
     *
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * The password of the user
     *
     * @generated from field: string plain_text_password = 12;
     */
    plainTextPassword: string;
    constructor(data?: PartialMessage<UserLoginRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UserLoginRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserLoginRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserLoginRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserLoginRequest;
    static equals(a: UserLoginRequest | PlainMessage<UserLoginRequest> | undefined, b: UserLoginRequest | PlainMessage<UserLoginRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a user login request
 *
 * @generated from message scanswift.UserLoginResponse
 */
export declare class UserLoginResponse extends Message<UserLoginResponse> {
    /**
     * Username of the user that just logged in
     *
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * The token that needs to be used as part of every request
     *
     * @generated from field: string auth_token = 2;
     */
    authToken: string;
    /**
     * The unix timestamp after which the auth_token is invalid
     *
     * @generated from field: int64 expires_at = 3;
     */
    expiresAt: bigint;
    constructor(data?: PartialMessage<UserLoginResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.UserLoginResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserLoginResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserLoginResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserLoginResponse;
    static equals(a: UserLoginResponse | PlainMessage<UserLoginResponse> | undefined, b: UserLoginResponse | PlainMessage<UserLoginResponse> | undefined): boolean;
}
/**
 *
 * Describes the data structure required to check if the login is still valid
 *
 * @generated from message scanswift.AuthTokenValidityRequest
 */
export declare class AuthTokenValidityRequest extends Message<AuthTokenValidityRequest> {
    /**
     * The token whose validity needs to be determined
     *
     * @generated from field: string auth_token = 1;
     */
    authToken: string;
    constructor(data?: PartialMessage<AuthTokenValidityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.AuthTokenValidityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthTokenValidityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthTokenValidityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthTokenValidityRequest;
    static equals(a: AuthTokenValidityRequest | PlainMessage<AuthTokenValidityRequest> | undefined, b: AuthTokenValidityRequest | PlainMessage<AuthTokenValidityRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure required to logout a user
 *
 * @generated from message scanswift.LogoutRequest
 */
export declare class LogoutRequest extends Message<LogoutRequest> {
    constructor(data?: PartialMessage<LogoutRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LogoutRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutRequest;
    static equals(a: LogoutRequest | PlainMessage<LogoutRequest> | undefined, b: LogoutRequest | PlainMessage<LogoutRequest> | undefined): boolean;
}
/**
 *
 * Describes the response data structure to a logout request
 *
 * @generated from message scanswift.LogoutResponse
 */
export declare class LogoutResponse extends Message<LogoutResponse> {
    constructor(data?: PartialMessage<LogoutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scanswift.LogoutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutResponse;
    static equals(a: LogoutResponse | PlainMessage<LogoutResponse> | undefined, b: LogoutResponse | PlainMessage<LogoutResponse> | undefined): boolean;
}
//# sourceMappingURL=logins_pb.d.ts.map