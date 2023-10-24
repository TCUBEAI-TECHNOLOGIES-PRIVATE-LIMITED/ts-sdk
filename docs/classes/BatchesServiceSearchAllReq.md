[scanswift-sdk](../README.md) / [Exports](../modules.md) / BatchesServiceSearchAllReq

# Class: BatchesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message scanswift.BatchesServiceSearchAllReq

## Hierarchy

- `Message`<[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)\>

  ↳ **`BatchesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](BatchesServiceSearchAllReq.md#constructor)

### Properties

- [count](BatchesServiceSearchAllReq.md#count)
- [entityUuid](BatchesServiceSearchAllReq.md#entityuuid)
- [isActive](BatchesServiceSearchAllReq.md#isactive)
- [isDownloaded](BatchesServiceSearchAllReq.md#isdownloaded)
- [locationUuid](BatchesServiceSearchAllReq.md#locationuuid)
- [offset](BatchesServiceSearchAllReq.md#offset)
- [productUuid](BatchesServiceSearchAllReq.md#productuuid)
- [searchKey](BatchesServiceSearchAllReq.md#searchkey)
- [sortKey](BatchesServiceSearchAllReq.md#sortkey)
- [sortOrder](BatchesServiceSearchAllReq.md#sortorder)
- [fields](BatchesServiceSearchAllReq.md#fields)
- [runtime](BatchesServiceSearchAllReq.md#runtime)
- [typeName](BatchesServiceSearchAllReq.md#typename)

### Methods

- [clone](BatchesServiceSearchAllReq.md#clone)
- [equals](BatchesServiceSearchAllReq.md#equals)
- [fromBinary](BatchesServiceSearchAllReq.md#frombinary)
- [fromJson](BatchesServiceSearchAllReq.md#fromjson)
- [fromJsonString](BatchesServiceSearchAllReq.md#fromjsonstring)
- [getType](BatchesServiceSearchAllReq.md#gettype)
- [toBinary](BatchesServiceSearchAllReq.md#tobinary)
- [toJSON](BatchesServiceSearchAllReq.md#tojson)
- [toJson](BatchesServiceSearchAllReq.md#tojson-1)
- [toJsonString](BatchesServiceSearchAllReq.md#tojsonstring)
- [equals](BatchesServiceSearchAllReq.md#equals-1)
- [fromBinary](BatchesServiceSearchAllReq.md#frombinary-1)
- [fromJson](BatchesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](BatchesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new BatchesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;BatchesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/batches_pb.ts:681](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L681)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/batches_pb.ts:623](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L623)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/batches_pb.ts:651](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L651)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/batches_pb.ts:616](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L616)

___

### isDownloaded

• **isDownloaded**: [`DOWNLOADED_STATUS`](../enums/DOWNLOADED_STATUS.md) = `DOWNLOADED_STATUS.DOWNLOADED_STATUS_ANY_UNSPECIFIED`

The downloaded status

**`Generated`**

from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;

#### Defined in

[src/batches_pb.ts:679](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L679)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/batches_pb.ts:658](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L658)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/batches_pb.ts:630](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L630)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/batches_pb.ts:665](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L665)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/batches_pb.ts:672](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L672)

___

### sortKey

• **sortKey**: [`BATCH_SORT_KEY`](../enums/BATCH_SORT_KEY.md) = `BATCH_SORT_KEY.BATCH_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.BATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/batches_pb.ts:644](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L644)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/batches_pb.ts:637](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L637)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:688](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L688)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:686](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L686)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.BatchesServiceSearchAllReq"``

#### Defined in

[src/batches_pb.ts:687](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L687)

## Methods

### clone

▸ **clone**(): [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md) \| `PlainMessage`<[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

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

[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md) \| `PlainMessage`<[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md) \| `PlainMessage`<[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:713](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L713)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Defined in

[src/batches_pb.ts:701](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L701)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Defined in

[src/batches_pb.ts:705](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L705)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceSearchAllReq`](BatchesServiceSearchAllReq.md)

#### Defined in

[src/batches_pb.ts:709](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L709)
