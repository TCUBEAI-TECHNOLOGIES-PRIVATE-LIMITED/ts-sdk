[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UsersServiceUpdatePasswordRequest

# Class: UsersServiceUpdatePasswordRequest

Describes the data structure to update a user's password

**`Generated`**

from message tcube.UsersServiceUpdatePasswordRequest

## Hierarchy

- `Message`<[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)\>

  ↳ **`UsersServiceUpdatePasswordRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceUpdatePasswordRequest.md#constructor)

### Properties

- [oldPlainTextPassword](UsersServiceUpdatePasswordRequest.md#oldplaintextpassword)
- [plainTextPassword](UsersServiceUpdatePasswordRequest.md#plaintextpassword)
- [userComment](UsersServiceUpdatePasswordRequest.md#usercomment)
- [uuid](UsersServiceUpdatePasswordRequest.md#uuid)
- [fields](UsersServiceUpdatePasswordRequest.md#fields)
- [runtime](UsersServiceUpdatePasswordRequest.md#runtime)
- [typeName](UsersServiceUpdatePasswordRequest.md#typename)

### Methods

- [clone](UsersServiceUpdatePasswordRequest.md#clone)
- [equals](UsersServiceUpdatePasswordRequest.md#equals)
- [fromBinary](UsersServiceUpdatePasswordRequest.md#frombinary)
- [fromJson](UsersServiceUpdatePasswordRequest.md#fromjson)
- [fromJsonString](UsersServiceUpdatePasswordRequest.md#fromjsonstring)
- [getType](UsersServiceUpdatePasswordRequest.md#gettype)
- [toBinary](UsersServiceUpdatePasswordRequest.md#tobinary)
- [toJSON](UsersServiceUpdatePasswordRequest.md#tojson)
- [toJson](UsersServiceUpdatePasswordRequest.md#tojson-1)
- [toJsonString](UsersServiceUpdatePasswordRequest.md#tojsonstring)
- [equals](UsersServiceUpdatePasswordRequest.md#equals-1)
- [fromBinary](UsersServiceUpdatePasswordRequest.md#frombinary-1)
- [fromJson](UsersServiceUpdatePasswordRequest.md#fromjson-1)
- [fromJsonString](UsersServiceUpdatePasswordRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceUpdatePasswordRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)\> |

#### Overrides

Message&lt;UsersServiceUpdatePasswordRequest\&gt;.constructor

#### Defined in

[src/users_pb.ts:322](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L322)

## Properties

### oldPlainTextPassword

• **oldPlainTextPassword**: `string` = `""`

The old login password

**`Generated`**

from field: string old_plain_text_password = 3;

#### Defined in

[src/users_pb.ts:313](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L313)

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

The new password

**`Generated`**

from field: string plain_text_password = 4;

#### Defined in

[src/users_pb.ts:320](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L320)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/users_pb.ts:299](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L299)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the user that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/users_pb.ts:306](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L306)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:329](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L329)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:327](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L327)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UsersServiceUpdatePasswordRequest"``

#### Defined in

[src/users_pb.ts:328](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L328)

## Methods

### clone

▸ **clone**(): [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md) \| `PlainMessage`<[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

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

[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)\>

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
| `a` | `undefined` \| [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md) \| `PlainMessage`<[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md) \| `PlainMessage`<[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:348](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L348)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Defined in

[src/users_pb.ts:336](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L336)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Defined in

[src/users_pb.ts:340](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L340)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdatePasswordRequest`](UsersServiceUpdatePasswordRequest.md)

#### Defined in

[src/users_pb.ts:344](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L344)
