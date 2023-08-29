[tcubesa-sdk](../README.md) / [Exports](../modules.md) / IdentifierUsername

# Class: IdentifierUsername

Describes the username that could be used as an identifier

**`Generated`**

from message tcube.IdentifierUsername

## Hierarchy

- `Message`<[`IdentifierUsername`](IdentifierUsername.md)\>

  ↳ **`IdentifierUsername`**

## Table of contents

### Constructors

- [constructor](IdentifierUsername.md#constructor)

### Properties

- [username](IdentifierUsername.md#username)
- [fields](IdentifierUsername.md#fields)
- [runtime](IdentifierUsername.md#runtime)
- [typeName](IdentifierUsername.md#typename)

### Methods

- [clone](IdentifierUsername.md#clone)
- [equals](IdentifierUsername.md#equals)
- [fromBinary](IdentifierUsername.md#frombinary)
- [fromJson](IdentifierUsername.md#fromjson)
- [fromJsonString](IdentifierUsername.md#fromjsonstring)
- [getType](IdentifierUsername.md#gettype)
- [toBinary](IdentifierUsername.md#tobinary)
- [toJSON](IdentifierUsername.md#tojson)
- [toJson](IdentifierUsername.md#tojson-1)
- [toJsonString](IdentifierUsername.md#tojsonstring)
- [equals](IdentifierUsername.md#equals-1)
- [fromBinary](IdentifierUsername.md#frombinary-1)
- [fromJson](IdentifierUsername.md#fromjson-1)
- [fromJsonString](IdentifierUsername.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierUsername**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`IdentifierUsername`](IdentifierUsername.md)\> |

#### Overrides

Message&lt;IdentifierUsername\&gt;.constructor

#### Defined in

[src/base_pb.ts:1004](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1004)

## Properties

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 1;

#### Defined in

[src/base_pb.ts:1002](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1002)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1011](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1011)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1009](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1009)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.IdentifierUsername"``

#### Defined in

[src/base_pb.ts:1010](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1010)

## Methods

### clone

▸ **clone**(): [`IdentifierUsername`](IdentifierUsername.md)

Create a deep copy.

#### Returns

[`IdentifierUsername`](IdentifierUsername.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierUsername`](IdentifierUsername.md) \| `PlainMessage`<[`IdentifierUsername`](IdentifierUsername.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierUsername`](IdentifierUsername.md)

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

[`IdentifierUsername`](IdentifierUsername.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierUsername`](IdentifierUsername.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierUsername`](IdentifierUsername.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierUsername`](IdentifierUsername.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierUsername`](IdentifierUsername.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`IdentifierUsername`](IdentifierUsername.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`IdentifierUsername`](IdentifierUsername.md)\>

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
| `a` | `undefined` \| [`IdentifierUsername`](IdentifierUsername.md) \| `PlainMessage`<[`IdentifierUsername`](IdentifierUsername.md)\> |
| `b` | `undefined` \| [`IdentifierUsername`](IdentifierUsername.md) \| `PlainMessage`<[`IdentifierUsername`](IdentifierUsername.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1027](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1027)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`IdentifierUsername`](IdentifierUsername.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`IdentifierUsername`](IdentifierUsername.md)

#### Defined in

[src/base_pb.ts:1015](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1015)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`IdentifierUsername`](IdentifierUsername.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierUsername`](IdentifierUsername.md)

#### Defined in

[src/base_pb.ts:1019](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1019)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`IdentifierUsername`](IdentifierUsername.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierUsername`](IdentifierUsername.md)

#### Defined in

[src/base_pb.ts:1023](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1023)
