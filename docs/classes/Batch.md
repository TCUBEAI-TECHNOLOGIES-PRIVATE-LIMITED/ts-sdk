[scanswift-sdk](../README.md) / [Exports](../modules.md) / Batch

# Class: Batch

Describes the data structure of each batch on the platform

**`Generated`**

from message scanswift.Batch

## Hierarchy

- `Message`<[`Batch`](Batch.md)\>

  ↳ **`Batch`**

## Table of contents

### Constructors

- [constructor](Batch.md#constructor)

### Properties

- [code](Batch.md#code)
- [downloadCount](Batch.md#downloadcount)
- [entityUuid](Batch.md#entityuuid)
- [internalCode](Batch.md#internalcode)
- [isDownloaded](Batch.md#isdownloaded)
- [locationUuid](Batch.md#locationuuid)
- [metadata](Batch.md#metadata)
- [name](Batch.md#name)
- [productUuid](Batch.md#productuuid)
- [quantity](Batch.md#quantity)
- [fields](Batch.md#fields)
- [runtime](Batch.md#runtime)
- [typeName](Batch.md#typename)

### Methods

- [clone](Batch.md#clone)
- [equals](Batch.md#equals)
- [fromBinary](Batch.md#frombinary)
- [fromJson](Batch.md#fromjson)
- [fromJsonString](Batch.md#fromjsonstring)
- [getType](Batch.md#gettype)
- [toBinary](Batch.md#tobinary)
- [toJSON](Batch.md#tojson)
- [toJson](Batch.md#tojson-1)
- [toJsonString](Batch.md#tojsonstring)
- [equals](Batch.md#equals-1)
- [fromBinary](Batch.md#frombinary-1)
- [fromJson](Batch.md#fromjson-1)
- [fromJsonString](Batch.md#fromjsonstring-1)

## Constructors

### constructor

• **new Batch**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Batch`](Batch.md)\> |

#### Overrides

Message&lt;Batch\&gt;.constructor

#### Defined in

[src/batches_pb.ts:239](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L239)

## Properties

### code

• **code**: `string` = `""`

Code of the batch

**`Generated`**

from field: string code = 11;

#### Defined in

[src/batches_pb.ts:209](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L209)

___

### downloadCount

• **downloadCount**: `bigint` = `protoInt64.zero`

Stores the number of times that this batch has already been downloaded

**`Generated`**

from field: int64 download_count = 21;

#### Defined in

[src/batches_pb.ts:237](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L237)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/batches_pb.ts:181](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L181)

___

### internalCode

• **internalCode**: `string` = `""`

Internal code as entered by the entity

**`Generated`**

from field: string internal_code = 13;

#### Defined in

[src/batches_pb.ts:223](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L223)

___

### isDownloaded

• **isDownloaded**: `boolean` = `false`

Stores if the batch has already been downloaded

**`Generated`**

from field: bool is_downloaded = 20;

#### Defined in

[src/batches_pb.ts:230](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L230)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/batches_pb.ts:188](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L188)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/batches_pb.ts:174](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L174)

___

### name

• **name**: `string` = `""`

The name of the batch

**`Generated`**

from field: string name = 10;

#### Defined in

[src/batches_pb.ts:202](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L202)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 9;

#### Defined in

[src/batches_pb.ts:195](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L195)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The number of serials that have been created

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/batches_pb.ts:216](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L216)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:246](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L246)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:244](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L244)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.Batch"``

#### Defined in

[src/batches_pb.ts:245](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L245)

## Methods

### clone

▸ **clone**(): [`Batch`](Batch.md)

Create a deep copy.

#### Returns

[`Batch`](Batch.md)

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
| `other` | `undefined` \| ``null`` \| [`Batch`](Batch.md) \| `PlainMessage`<[`Batch`](Batch.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Batch`](Batch.md)

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

[`Batch`](Batch.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Batch`](Batch.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Batch`](Batch.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Batch`](Batch.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Batch`](Batch.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Batch`](Batch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Batch`](Batch.md)\>

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
| `a` | `undefined` \| [`Batch`](Batch.md) \| `PlainMessage`<[`Batch`](Batch.md)\> |
| `b` | `undefined` \| [`Batch`](Batch.md) \| `PlainMessage`<[`Batch`](Batch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:271](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L271)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Batch`](Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Batch`](Batch.md)

#### Defined in

[src/batches_pb.ts:259](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L259)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Batch`](Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Batch`](Batch.md)

#### Defined in

[src/batches_pb.ts:263](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L263)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Batch`](Batch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Batch`](Batch.md)

#### Defined in

[src/batches_pb.ts:267](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L267)
