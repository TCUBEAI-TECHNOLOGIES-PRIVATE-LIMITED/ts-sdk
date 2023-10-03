[tcubesa-sdk](../README.md) / [Exports](../modules.md) / BatchesList

# Class: BatchesList

Describes the data structure that stores a list of batches

**`Generated`**

from message tcube.BatchesList

## Hierarchy

- `Message`<[`BatchesList`](BatchesList.md)\>

  ↳ **`BatchesList`**

## Table of contents

### Constructors

- [constructor](BatchesList.md#constructor)

### Properties

- [list](BatchesList.md#list)
- [fields](BatchesList.md#fields)
- [runtime](BatchesList.md#runtime)
- [typeName](BatchesList.md#typename)

### Methods

- [clone](BatchesList.md#clone)
- [equals](BatchesList.md#equals)
- [fromBinary](BatchesList.md#frombinary)
- [fromJson](BatchesList.md#fromjson)
- [fromJsonString](BatchesList.md#fromjsonstring)
- [getType](BatchesList.md#gettype)
- [toBinary](BatchesList.md#tobinary)
- [toJSON](BatchesList.md#tojson)
- [toJson](BatchesList.md#tojson-1)
- [toJsonString](BatchesList.md#tojsonstring)
- [equals](BatchesList.md#equals-1)
- [fromBinary](BatchesList.md#frombinary-1)
- [fromJson](BatchesList.md#fromjson-1)
- [fromJsonString](BatchesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new BatchesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BatchesList`](BatchesList.md)\> |

#### Overrides

Message&lt;BatchesList\&gt;.constructor

#### Defined in

[src/batches_pb.ts:274](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L274)

## Properties

### list

• **list**: [`Batch`](Batch.md)[] = `[]`

List of batches

**`Generated`**

from field: repeated tcube.Batch list = 1;

#### Defined in

[src/batches_pb.ts:272](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L272)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:281](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L281)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:279](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L279)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.BatchesList"``

#### Defined in

[src/batches_pb.ts:280](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L280)

## Methods

### clone

▸ **clone**(): [`BatchesList`](BatchesList.md)

Create a deep copy.

#### Returns

[`BatchesList`](BatchesList.md)

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
| `other` | `undefined` \| ``null`` \| [`BatchesList`](BatchesList.md) \| `PlainMessage`<[`BatchesList`](BatchesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BatchesList`](BatchesList.md)

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

[`BatchesList`](BatchesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BatchesList`](BatchesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesList`](BatchesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BatchesList`](BatchesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesList`](BatchesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BatchesList`](BatchesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BatchesList`](BatchesList.md)\>

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
| `a` | `undefined` \| [`BatchesList`](BatchesList.md) \| `PlainMessage`<[`BatchesList`](BatchesList.md)\> |
| `b` | `undefined` \| [`BatchesList`](BatchesList.md) \| `PlainMessage`<[`BatchesList`](BatchesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:297](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L297)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BatchesList`](BatchesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BatchesList`](BatchesList.md)

#### Defined in

[src/batches_pb.ts:285](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L285)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BatchesList`](BatchesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesList`](BatchesList.md)

#### Defined in

[src/batches_pb.ts:289](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L289)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BatchesList`](BatchesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesList`](BatchesList.md)

#### Defined in

[src/batches_pb.ts:293](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/batches_pb.ts#L293)
