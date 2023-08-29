[tcubesa-sdk](../README.md) / [Exports](../modules.md) / BatchPaginationResp

# Class: BatchPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.BatchPaginationResp

## Hierarchy

- `Message`<[`BatchPaginationResp`](BatchPaginationResp.md)\>

  ↳ **`BatchPaginationResp`**

## Table of contents

### Constructors

- [constructor](BatchPaginationResp.md#constructor)

### Properties

- [count](BatchPaginationResp.md#count)
- [payload](BatchPaginationResp.md#payload)
- [total](BatchPaginationResp.md#total)
- [fields](BatchPaginationResp.md#fields)
- [runtime](BatchPaginationResp.md#runtime)
- [typeName](BatchPaginationResp.md#typename)

### Methods

- [clone](BatchPaginationResp.md#clone)
- [equals](BatchPaginationResp.md#equals)
- [fromBinary](BatchPaginationResp.md#frombinary)
- [fromJson](BatchPaginationResp.md#fromjson)
- [fromJsonString](BatchPaginationResp.md#fromjsonstring)
- [getType](BatchPaginationResp.md#gettype)
- [toBinary](BatchPaginationResp.md#tobinary)
- [toJSON](BatchPaginationResp.md#tojson)
- [toJson](BatchPaginationResp.md#tojson-1)
- [toJsonString](BatchPaginationResp.md#tojsonstring)
- [equals](BatchPaginationResp.md#equals-1)
- [fromBinary](BatchPaginationResp.md#frombinary-1)
- [fromJson](BatchPaginationResp.md#fromjson-1)
- [fromJsonString](BatchPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BatchPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BatchPaginationResp`](BatchPaginationResp.md)\> |

#### Overrides

Message&lt;BatchPaginationResp\&gt;.constructor

#### Defined in

[src/batches_pb.ts:412](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L412)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/batches_pb.ts:396](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L396)

___

### payload

• **payload**: [`Batch`](Batch.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.Batch payload = 3;

#### Defined in

[src/batches_pb.ts:410](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L410)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/batches_pb.ts:403](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L403)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:419](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L419)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:417](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L417)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.BatchPaginationResp"``

#### Defined in

[src/batches_pb.ts:418](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L418)

## Methods

### clone

▸ **clone**(): [`BatchPaginationResp`](BatchPaginationResp.md)

Create a deep copy.

#### Returns

[`BatchPaginationResp`](BatchPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`BatchPaginationResp`](BatchPaginationResp.md) \| `PlainMessage`<[`BatchPaginationResp`](BatchPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BatchPaginationResp`](BatchPaginationResp.md)

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

[`BatchPaginationResp`](BatchPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BatchPaginationResp`](BatchPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchPaginationResp`](BatchPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BatchPaginationResp`](BatchPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchPaginationResp`](BatchPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BatchPaginationResp`](BatchPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BatchPaginationResp`](BatchPaginationResp.md)\>

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
| `a` | `undefined` \| [`BatchPaginationResp`](BatchPaginationResp.md) \| `PlainMessage`<[`BatchPaginationResp`](BatchPaginationResp.md)\> |
| `b` | `undefined` \| [`BatchPaginationResp`](BatchPaginationResp.md) \| `PlainMessage`<[`BatchPaginationResp`](BatchPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:437](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L437)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BatchPaginationResp`](BatchPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BatchPaginationResp`](BatchPaginationResp.md)

#### Defined in

[src/batches_pb.ts:425](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L425)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BatchPaginationResp`](BatchPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchPaginationResp`](BatchPaginationResp.md)

#### Defined in

[src/batches_pb.ts:429](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L429)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BatchPaginationResp`](BatchPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchPaginationResp`](BatchPaginationResp.md)

#### Defined in

[src/batches_pb.ts:433](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L433)
