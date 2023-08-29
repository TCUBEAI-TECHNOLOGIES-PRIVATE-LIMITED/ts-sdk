[tcubesa-sdk](../README.md) / [Exports](../modules.md) / BatchesServiceFilterReq

# Class: BatchesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.BatchesServiceFilterReq

## Hierarchy

- `Message`<[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)\>

  ↳ **`BatchesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](BatchesServiceFilterReq.md#constructor)

### Properties

- [code](BatchesServiceFilterReq.md#code)
- [count](BatchesServiceFilterReq.md#count)
- [creationTimestampEnd](BatchesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](BatchesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](BatchesServiceFilterReq.md#entityuuid)
- [internalCode](BatchesServiceFilterReq.md#internalcode)
- [isActive](BatchesServiceFilterReq.md#isactive)
- [locationUuid](BatchesServiceFilterReq.md#locationuuid)
- [name](BatchesServiceFilterReq.md#name)
- [offset](BatchesServiceFilterReq.md#offset)
- [productUuid](BatchesServiceFilterReq.md#productuuid)
- [sortKey](BatchesServiceFilterReq.md#sortkey)
- [sortOrder](BatchesServiceFilterReq.md#sortorder)
- [fields](BatchesServiceFilterReq.md#fields)
- [runtime](BatchesServiceFilterReq.md#runtime)
- [typeName](BatchesServiceFilterReq.md#typename)

### Methods

- [clone](BatchesServiceFilterReq.md#clone)
- [equals](BatchesServiceFilterReq.md#equals)
- [fromBinary](BatchesServiceFilterReq.md#frombinary)
- [fromJson](BatchesServiceFilterReq.md#fromjson)
- [fromJsonString](BatchesServiceFilterReq.md#fromjsonstring)
- [getType](BatchesServiceFilterReq.md#gettype)
- [toBinary](BatchesServiceFilterReq.md#tobinary)
- [toJSON](BatchesServiceFilterReq.md#tojson)
- [toJson](BatchesServiceFilterReq.md#tojson-1)
- [toJsonString](BatchesServiceFilterReq.md#tojsonstring)
- [equals](BatchesServiceFilterReq.md#equals-1)
- [fromBinary](BatchesServiceFilterReq.md#frombinary-1)
- [fromJson](BatchesServiceFilterReq.md#fromjson-1)
- [fromJsonString](BatchesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new BatchesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)\> |

#### Overrides

Message&lt;BatchesServiceFilterReq\&gt;.constructor

#### Defined in

[src/batches_pb.ts:540](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L540)

## Properties

### code

• **code**: `string` = `""`

Code of the batch

**`Generated`**

from field: string code = 21;

#### Defined in

[src/batches_pb.ts:531](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L531)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/batches_pb.ts:461](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L461)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/batches_pb.ts:496](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L496)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/batches_pb.ts:489](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L489)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/batches_pb.ts:503](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L503)

___

### internalCode

• **internalCode**: `string` = `""`

Internal code as entered by the entity

**`Generated`**

from field: string internal_code = 22;

#### Defined in

[src/batches_pb.ts:538](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L538)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/batches_pb.ts:454](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L454)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/batches_pb.ts:510](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L510)

___

### name

• **name**: `string` = `""`

The name of the batch

**`Generated`**

from field: string name = 20;

#### Defined in

[src/batches_pb.ts:524](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L524)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/batches_pb.ts:468](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L468)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/batches_pb.ts:517](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L517)

___

### sortKey

• **sortKey**: [`BATCH_SORT_KEY`](../enums/BATCH_SORT_KEY.md) = `BATCH_SORT_KEY.BATCH_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.BATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/batches_pb.ts:482](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L482)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/batches_pb.ts:475](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L475)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:547](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L547)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:545](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L545)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.BatchesServiceFilterReq"``

#### Defined in

[src/batches_pb.ts:546](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L546)

## Methods

### clone

▸ **clone**(): [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md) \| `PlainMessage`<[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

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

[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md) \| `PlainMessage`<[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md) \| `PlainMessage`<[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:575](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L575)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Defined in

[src/batches_pb.ts:563](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L563)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Defined in

[src/batches_pb.ts:567](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L567)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceFilterReq`](BatchesServiceFilterReq.md)

#### Defined in

[src/batches_pb.ts:571](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/batches_pb.ts#L571)
