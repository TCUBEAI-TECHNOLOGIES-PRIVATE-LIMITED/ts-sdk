[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UsersServiceUpdateRequest

# Class: UsersServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a user

**`Generated`**

from message tcube.UsersServiceUpdateRequest

## Hierarchy

- `Message`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

  ↳ **`UsersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceUpdateRequest.md#constructor)

### Properties

- [address](UsersServiceUpdateRequest.md#address)
- [email](UsersServiceUpdateRequest.md#email)
- [entityUuid](UsersServiceUpdateRequest.md#entityuuid)
- [firstName](UsersServiceUpdateRequest.md#firstname)
- [lastName](UsersServiceUpdateRequest.md#lastname)
- [phone](UsersServiceUpdateRequest.md#phone)
- [roleUuid](UsersServiceUpdateRequest.md#roleuuid)
- [userComment](UsersServiceUpdateRequest.md#usercomment)
- [uuid](UsersServiceUpdateRequest.md#uuid)
- [fields](UsersServiceUpdateRequest.md#fields)
- [runtime](UsersServiceUpdateRequest.md#runtime)
- [typeName](UsersServiceUpdateRequest.md#typename)

### Methods

- [clone](UsersServiceUpdateRequest.md#clone)
- [equals](UsersServiceUpdateRequest.md#equals)
- [fromBinary](UsersServiceUpdateRequest.md#frombinary)
- [fromJson](UsersServiceUpdateRequest.md#fromjson)
- [fromJsonString](UsersServiceUpdateRequest.md#fromjsonstring)
- [getType](UsersServiceUpdateRequest.md#gettype)
- [toBinary](UsersServiceUpdateRequest.md#tobinary)
- [toJSON](UsersServiceUpdateRequest.md#tojson)
- [toJson](UsersServiceUpdateRequest.md#tojson-1)
- [toJsonString](UsersServiceUpdateRequest.md#tojsonstring)
- [equals](UsersServiceUpdateRequest.md#equals-1)
- [fromBinary](UsersServiceUpdateRequest.md#frombinary-1)
- [fromJson](UsersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](UsersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;UsersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/users_pb.ts:251](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L251)

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 15;

#### Defined in

[src/users_pb.ts:235](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L235)

___

### email

• **email**: `string` = `""`

The email address of the user

**`Generated`**

from field: string email = 13;

#### Defined in

[src/users_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L221)

___

### entityUuid

• **entityUuid**: `string` = `""`

Optional UUID of the entity (if present, then corresponding entity user is also updated)

**`Generated`**

from field: string entity_uuid = 30;

#### Defined in

[src/users_pb.ts:242](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L242)

___

### firstName

• **firstName**: `string` = `""`

The first name of the user

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/users_pb.ts:201](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L201)

___

### lastName

• **lastName**: `string` = `""`

The last name of the user

// Username of the user
string username = 12 [(validate.rules).string = {
    min_bytes: 1,
    max_bytes: 40,
}];

**`Generated`**

from field: string last_name = 11;

#### Defined in

[src/users_pb.ts:214](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L214)

___

### phone

• **phone**: `string` = `""`

The phone number of the user

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/users_pb.ts:228](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L228)

___

### roleUuid

• **roleUuid**: `string` = `""`

Optional UUID of the associated role (if present, then the corresponding entity user is updated with the given role UUID)

**`Generated`**

from field: string role_uuid = 31;

#### Defined in

[src/users_pb.ts:249](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L249)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/users_pb.ts:187](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L187)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the user that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/users_pb.ts:194](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L194)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:258](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L258)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:256](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L256)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UsersServiceUpdateRequest"``

#### Defined in

[src/users_pb.ts:257](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L257)

## Methods

### clone

▸ **clone**(): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

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

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:282](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L282)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users_pb.ts:270](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L270)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users_pb.ts:274](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L274)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users_pb.ts:278](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L278)
