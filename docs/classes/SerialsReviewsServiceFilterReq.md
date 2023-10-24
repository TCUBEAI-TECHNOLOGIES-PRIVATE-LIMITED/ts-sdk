[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsReviewsServiceFilterReq

# Class: SerialsReviewsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.SerialsReviewsServiceFilterReq

## Hierarchy

- `Message`<[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)\>

  ↳ **`SerialsReviewsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SerialsReviewsServiceFilterReq.md#constructor)

### Properties

- [count](SerialsReviewsServiceFilterReq.md#count)
- [creationTimestampEnd](SerialsReviewsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SerialsReviewsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](SerialsReviewsServiceFilterReq.md#entityuuid)
- [isActive](SerialsReviewsServiceFilterReq.md#isactive)
- [name](SerialsReviewsServiceFilterReq.md#name)
- [offset](SerialsReviewsServiceFilterReq.md#offset)
- [productUuid](SerialsReviewsServiceFilterReq.md#productuuid)
- [serialUuid](SerialsReviewsServiceFilterReq.md#serialuuid)
- [sortKey](SerialsReviewsServiceFilterReq.md#sortkey)
- [sortOrder](SerialsReviewsServiceFilterReq.md#sortorder)
- [fields](SerialsReviewsServiceFilterReq.md#fields)
- [runtime](SerialsReviewsServiceFilterReq.md#runtime)
- [typeName](SerialsReviewsServiceFilterReq.md#typename)

### Methods

- [clone](SerialsReviewsServiceFilterReq.md#clone)
- [equals](SerialsReviewsServiceFilterReq.md#equals)
- [fromBinary](SerialsReviewsServiceFilterReq.md#frombinary)
- [fromJson](SerialsReviewsServiceFilterReq.md#fromjson)
- [fromJsonString](SerialsReviewsServiceFilterReq.md#fromjsonstring)
- [getType](SerialsReviewsServiceFilterReq.md#gettype)
- [toBinary](SerialsReviewsServiceFilterReq.md#tobinary)
- [toJSON](SerialsReviewsServiceFilterReq.md#tojson)
- [toJson](SerialsReviewsServiceFilterReq.md#tojson-1)
- [toJsonString](SerialsReviewsServiceFilterReq.md#tojsonstring)
- [equals](SerialsReviewsServiceFilterReq.md#equals-1)
- [fromBinary](SerialsReviewsServiceFilterReq.md#frombinary-1)
- [fromJson](SerialsReviewsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SerialsReviewsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsReviewsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)\> |

#### Overrides

Message&lt;SerialsReviewsServiceFilterReq\&gt;.constructor

#### Defined in

[src/serials_reviews_pb.ts:598](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L598)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/serials_reviews_pb.ts:533](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L533)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/serials_reviews_pb.ts:568](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L568)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/serials_reviews_pb.ts:561](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L561)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/serials_reviews_pb.ts:575](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L575)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/serials_reviews_pb.ts:526](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L526)

___

### name

• **name**: `string` = `""`

The name of the serial review

**`Generated`**

from field: string name = 20;

#### Defined in

[src/serials_reviews_pb.ts:596](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L596)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/serials_reviews_pb.ts:540](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L540)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/serials_reviews_pb.ts:589](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L589)

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 9;

#### Defined in

[src/serials_reviews_pb.ts:582](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L582)

___

### sortKey

• **sortKey**: [`SERIAL_REVIEW_SORT_KEY`](../enums/SERIAL_REVIEW_SORT_KEY.md) = `SERIAL_REVIEW_SORT_KEY.SERIAL_REVIEW_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SERIAL_REVIEW_SORT_KEY sort_key = 5;

#### Defined in

[src/serials_reviews_pb.ts:554](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L554)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/serials_reviews_pb.ts:547](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L547)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_reviews_pb.ts:605](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L605)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_reviews_pb.ts:603](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L603)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsReviewsServiceFilterReq"``

#### Defined in

[src/serials_reviews_pb.ts:604](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L604)

## Methods

### clone

▸ **clone**(): [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md) \| `PlainMessage`<[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

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

[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md) \| `PlainMessage`<[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md) \| `PlainMessage`<[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_reviews_pb.ts:631](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L631)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Defined in

[src/serials_reviews_pb.ts:619](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L619)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Defined in

[src/serials_reviews_pb.ts:623](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L623)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceFilterReq`](SerialsReviewsServiceFilterReq.md)

#### Defined in

[src/serials_reviews_pb.ts:627](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L627)
