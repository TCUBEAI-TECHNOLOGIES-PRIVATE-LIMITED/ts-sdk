[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesUsersList

# Class: EntitiesUsersList

Describes the data structure that stores a list of entities users

**`Generated`**

from message tcube.EntitiesUsersList

## Hierarchy

- `Message`<[`EntitiesUsersList`](EntitiesUsersList.md)\>

  ↳ **`EntitiesUsersList`**

## Table of contents

### Constructors

- [constructor](EntitiesUsersList.md#constructor)

### Properties

- [list](EntitiesUsersList.md#list)
- [fields](EntitiesUsersList.md#fields)
- [runtime](EntitiesUsersList.md#runtime)
- [typeName](EntitiesUsersList.md#typename)

### Methods

- [clone](EntitiesUsersList.md#clone)
- [equals](EntitiesUsersList.md#equals)
- [fromBinary](EntitiesUsersList.md#frombinary)
- [fromJson](EntitiesUsersList.md#fromjson)
- [fromJsonString](EntitiesUsersList.md#fromjsonstring)
- [getType](EntitiesUsersList.md#gettype)
- [toBinary](EntitiesUsersList.md#tobinary)
- [toJSON](EntitiesUsersList.md#tojson)
- [toJson](EntitiesUsersList.md#tojson-1)
- [toJsonString](EntitiesUsersList.md#tojsonstring)
- [equals](EntitiesUsersList.md#equals-1)
- [fromBinary](EntitiesUsersList.md#frombinary-1)
- [fromJson](EntitiesUsersList.md#fromjson-1)
- [fromJsonString](EntitiesUsersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesUsersList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesUsersList`](EntitiesUsersList.md)\> |

#### Overrides

Message&lt;EntitiesUsersList\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:249](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L249)

## Properties

### list

• **list**: [`EntityUser`](EntityUser.md)[] = `[]`

List of entities users

**`Generated`**

from field: repeated tcube.EntityUser list = 1;

#### Defined in

[src/entities_users_pb.ts:247](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L247)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:256](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L256)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:254](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L254)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesUsersList"``

#### Defined in

[src/entities_users_pb.ts:255](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L255)

## Methods

### clone

▸ **clone**(): [`EntitiesUsersList`](EntitiesUsersList.md)

Create a deep copy.

#### Returns

[`EntitiesUsersList`](EntitiesUsersList.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesUsersList`](EntitiesUsersList.md) \| `PlainMessage`<[`EntitiesUsersList`](EntitiesUsersList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesUsersList`](EntitiesUsersList.md)

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

[`EntitiesUsersList`](EntitiesUsersList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersList`](EntitiesUsersList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersList`](EntitiesUsersList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersList`](EntitiesUsersList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersList`](EntitiesUsersList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesUsersList`](EntitiesUsersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesUsersList`](EntitiesUsersList.md)\>

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
| `a` | `undefined` \| [`EntitiesUsersList`](EntitiesUsersList.md) \| `PlainMessage`<[`EntitiesUsersList`](EntitiesUsersList.md)\> |
| `b` | `undefined` \| [`EntitiesUsersList`](EntitiesUsersList.md) \| `PlainMessage`<[`EntitiesUsersList`](EntitiesUsersList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:272](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L272)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesUsersList`](EntitiesUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesUsersList`](EntitiesUsersList.md)

#### Defined in

[src/entities_users_pb.ts:260](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L260)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersList`](EntitiesUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersList`](EntitiesUsersList.md)

#### Defined in

[src/entities_users_pb.ts:264](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L264)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersList`](EntitiesUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersList`](EntitiesUsersList.md)

#### Defined in

[src/entities_users_pb.ts:268](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L268)
