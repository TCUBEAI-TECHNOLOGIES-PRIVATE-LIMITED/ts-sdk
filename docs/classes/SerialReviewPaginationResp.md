[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialReviewPaginationResp

# Class: SerialReviewPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.SerialReviewPaginationResp

## Hierarchy

- `Message`<[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)\>

  ↳ **`SerialReviewPaginationResp`**

## Table of contents

### Constructors

- [constructor](SerialReviewPaginationResp.md#constructor)

### Properties

- [count](SerialReviewPaginationResp.md#count)
- [payload](SerialReviewPaginationResp.md#payload)
- [total](SerialReviewPaginationResp.md#total)
- [fields](SerialReviewPaginationResp.md#fields)
- [runtime](SerialReviewPaginationResp.md#runtime)
- [typeName](SerialReviewPaginationResp.md#typename)

### Methods

- [clone](SerialReviewPaginationResp.md#clone)
- [equals](SerialReviewPaginationResp.md#equals)
- [fromBinary](SerialReviewPaginationResp.md#frombinary)
- [fromJson](SerialReviewPaginationResp.md#fromjson)
- [fromJsonString](SerialReviewPaginationResp.md#fromjsonstring)
- [getType](SerialReviewPaginationResp.md#gettype)
- [toBinary](SerialReviewPaginationResp.md#tobinary)
- [toJSON](SerialReviewPaginationResp.md#tojson)
- [toJson](SerialReviewPaginationResp.md#tojson-1)
- [toJsonString](SerialReviewPaginationResp.md#tojsonstring)
- [equals](SerialReviewPaginationResp.md#equals-1)
- [fromBinary](SerialReviewPaginationResp.md#frombinary-1)
- [fromJson](SerialReviewPaginationResp.md#fromjson-1)
- [fromJsonString](SerialReviewPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialReviewPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)\> |

#### Overrides

Message&lt;SerialReviewPaginationResp\&gt;.constructor

#### Defined in

src/serials_reviews_pb.ts:484

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

src/serials_reviews_pb.ts:468

___

### payload

• **payload**: [`SerialReview`](SerialReview.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.SerialReview payload = 3;

#### Defined in

src/serials_reviews_pb.ts:482

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

src/serials_reviews_pb.ts:475

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/serials_reviews_pb.ts:491

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/serials_reviews_pb.ts:489

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialReviewPaginationResp"``

#### Defined in

src/serials_reviews_pb.ts:490

## Methods

### clone

▸ **clone**(): [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

Create a deep copy.

#### Returns

[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md) \| `PlainMessage`<[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

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

[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)\>

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
| `a` | `undefined` \| [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md) \| `PlainMessage`<[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)\> |
| `b` | `undefined` \| [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md) \| `PlainMessage`<[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/serials_reviews_pb.ts:509

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Defined in

src/serials_reviews_pb.ts:497

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Defined in

src/serials_reviews_pb.ts:501

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReviewPaginationResp`](SerialReviewPaginationResp.md)

#### Defined in

src/serials_reviews_pb.ts:505
