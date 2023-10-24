[scanswift-sdk](../README.md) / [Exports](../modules.md) / UsersServiceCreateRequest

# Class: UsersServiceCreateRequest

Describes the necessary data structure during creation of a user

**`Generated`**

from message scanswift.UsersServiceCreateRequest

## Hierarchy

- `Message`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

  ↳ **`UsersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceCreateRequest.md#constructor)

### Properties

- [address](UsersServiceCreateRequest.md#address)
- [email](UsersServiceCreateRequest.md#email)
- [entityUuid](UsersServiceCreateRequest.md#entityuuid)
- [firstName](UsersServiceCreateRequest.md#firstname)
- [lastName](UsersServiceCreateRequest.md#lastname)
- [phone](UsersServiceCreateRequest.md#phone)
- [roleUuid](UsersServiceCreateRequest.md#roleuuid)
- [userComment](UsersServiceCreateRequest.md#usercomment)
- [username](UsersServiceCreateRequest.md#username)
- [fields](UsersServiceCreateRequest.md#fields)
- [runtime](UsersServiceCreateRequest.md#runtime)
- [typeName](UsersServiceCreateRequest.md#typename)

### Methods

- [clone](UsersServiceCreateRequest.md#clone)
- [equals](UsersServiceCreateRequest.md#equals)
- [fromBinary](UsersServiceCreateRequest.md#frombinary)
- [fromJson](UsersServiceCreateRequest.md#fromjson)
- [fromJsonString](UsersServiceCreateRequest.md#fromjsonstring)
- [getType](UsersServiceCreateRequest.md#gettype)
- [toBinary](UsersServiceCreateRequest.md#tobinary)
- [toJSON](UsersServiceCreateRequest.md#tojson)
- [toJson](UsersServiceCreateRequest.md#tojson-1)
- [toJsonString](UsersServiceCreateRequest.md#tojsonstring)
- [equals](UsersServiceCreateRequest.md#equals-1)
- [fromBinary](UsersServiceCreateRequest.md#frombinary-1)
- [fromJson](UsersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](UsersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Overrides

Message&lt;UsersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/users_pb.ts:139](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L139)

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 15;

#### Defined in

[src/users_pb.ts:123](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L123)

___

### email

• **email**: `string` = `""`

The email address of the user

**`Generated`**

from field: string email = 13;

#### Defined in

[src/users_pb.ts:109](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L109)

___

### entityUuid

• **entityUuid**: `string` = `""`

Optional UUID of the entity (if present, then a corresponding entity user is also created)

**`Generated`**

from field: string entity_uuid = 30;

#### Defined in

[src/users_pb.ts:130](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L130)

___

### firstName

• **firstName**: `string` = `""`

The first name of the user

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/users_pb.ts:88](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L88)

___

### lastName

• **lastName**: `string` = `""`

The last name of the user

**`Generated`**

from field: string last_name = 11;

#### Defined in

[src/users_pb.ts:95](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L95)

___

### phone

• **phone**: `string` = `""`

The phone number of the user

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/users_pb.ts:116](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L116)

___

### roleUuid

• **roleUuid**: `string` = `""`

Optional UUID of the associated role (if present, then the corresponding entity user is created with the given role UUID)

**`Generated`**

from field: string role_uuid = 31;

#### Defined in

[src/users_pb.ts:137](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L137)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/users_pb.ts:81](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L81)

___

### username

• **username**: `string` = `""`

Username of the user

**`Generated`**

from field: string username = 12;

#### Defined in

[src/users_pb.ts:102](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L102)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:146](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L146)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:144](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L144)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.UsersServiceCreateRequest"``

#### Defined in

[src/users_pb.ts:145](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L145)

## Methods

### clone

▸ **clone**(): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:80

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:49

___

### toJSON

▸ `Protected` **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:74

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:54

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:170](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L170)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users_pb.ts:158](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L158)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users_pb.ts:162](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L162)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users_pb.ts:166](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L166)
