[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UsersList

# Class: UsersList

Describes the data structure that stores a list of users

**`Generated`**

from message tcube.UsersList

## Hierarchy

- `Message`<[`UsersList`](UsersList.md)\>

  ↳ **`UsersList`**

## Table of contents

### Constructors

- [constructor](UsersList.md#constructor)

### Properties

- [list](UsersList.md#list)
- [fields](UsersList.md#fields)
- [runtime](UsersList.md#runtime)
- [typeName](UsersList.md#typename)

### Methods

- [clone](UsersList.md#clone)
- [equals](UsersList.md#equals)
- [fromBinary](UsersList.md#frombinary)
- [fromJson](UsersList.md#fromjson)
- [fromJsonString](UsersList.md#fromjsonstring)
- [getType](UsersList.md#gettype)
- [toBinary](UsersList.md#tobinary)
- [toJSON](UsersList.md#tojson)
- [toJson](UsersList.md#tojson-1)
- [toJsonString](UsersList.md#tojsonstring)
- [equals](UsersList.md#equals-1)
- [fromBinary](UsersList.md#frombinary-1)
- [fromJson](UsersList.md#fromjson-1)
- [fromJsonString](UsersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersList`](UsersList.md)\> |

#### Overrides

Message&lt;UsersList\&gt;.constructor

#### Defined in

[src/users_pb.ts:573](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L573)

## Properties

### list

• **list**: [`User`](User.md)[] = `[]`

List of users

**`Generated`**

from field: repeated tcube.User list = 1;

#### Defined in

[src/users_pb.ts:571](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L571)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:580](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L580)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:578](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L578)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UsersList"``

#### Defined in

[src/users_pb.ts:579](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L579)

## Methods

### clone

▸ **clone**(): [`UsersList`](UsersList.md)

Create a deep copy.

#### Returns

[`UsersList`](UsersList.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersList`](UsersList.md) \| `PlainMessage`<[`UsersList`](UsersList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersList`](UsersList.md)

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

[`UsersList`](UsersList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersList`](UsersList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersList`](UsersList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersList`](UsersList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersList`](UsersList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersList`](UsersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersList`](UsersList.md)\>

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
| `a` | `undefined` \| [`UsersList`](UsersList.md) \| `PlainMessage`<[`UsersList`](UsersList.md)\> |
| `b` | `undefined` \| [`UsersList`](UsersList.md) \| `PlainMessage`<[`UsersList`](UsersList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:596](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L596)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersList`](UsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersList`](UsersList.md)

#### Defined in

[src/users_pb.ts:584](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L584)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersList`](UsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersList`](UsersList.md)

#### Defined in

[src/users_pb.ts:588](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L588)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersList`](UsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersList`](UsersList.md)

#### Defined in

[src/users_pb.ts:592](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/users_pb.ts#L592)
