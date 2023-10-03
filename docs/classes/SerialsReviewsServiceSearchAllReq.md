[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsReviewsServiceSearchAllReq

# Class: SerialsReviewsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.SerialsReviewsServiceSearchAllReq

## Hierarchy

- `Message`<[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)\>

  ↳ **`SerialsReviewsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SerialsReviewsServiceSearchAllReq.md#constructor)

### Properties

- [count](SerialsReviewsServiceSearchAllReq.md#count)
- [entityUuid](SerialsReviewsServiceSearchAllReq.md#entityuuid)
- [isActive](SerialsReviewsServiceSearchAllReq.md#isactive)
- [offset](SerialsReviewsServiceSearchAllReq.md#offset)
- [productUuid](SerialsReviewsServiceSearchAllReq.md#productuuid)
- [searchKey](SerialsReviewsServiceSearchAllReq.md#searchkey)
- [serialUuid](SerialsReviewsServiceSearchAllReq.md#serialuuid)
- [sortKey](SerialsReviewsServiceSearchAllReq.md#sortkey)
- [sortOrder](SerialsReviewsServiceSearchAllReq.md#sortorder)
- [fields](SerialsReviewsServiceSearchAllReq.md#fields)
- [runtime](SerialsReviewsServiceSearchAllReq.md#runtime)
- [typeName](SerialsReviewsServiceSearchAllReq.md#typename)

### Methods

- [clone](SerialsReviewsServiceSearchAllReq.md#clone)
- [equals](SerialsReviewsServiceSearchAllReq.md#equals)
- [fromBinary](SerialsReviewsServiceSearchAllReq.md#frombinary)
- [fromJson](SerialsReviewsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SerialsReviewsServiceSearchAllReq.md#fromjsonstring)
- [getType](SerialsReviewsServiceSearchAllReq.md#gettype)
- [toBinary](SerialsReviewsServiceSearchAllReq.md#tobinary)
- [toJSON](SerialsReviewsServiceSearchAllReq.md#tojson)
- [toJson](SerialsReviewsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SerialsReviewsServiceSearchAllReq.md#tojsonstring)
- [equals](SerialsReviewsServiceSearchAllReq.md#equals-1)
- [fromBinary](SerialsReviewsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SerialsReviewsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SerialsReviewsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsReviewsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;SerialsReviewsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/serials_reviews_pb.ts:706

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/serials_reviews_pb.ts:655

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/serials_reviews_pb.ts:683

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/serials_reviews_pb.ts:648

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/serials_reviews_pb.ts:662

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 8;

#### Defined in

src/serials_reviews_pb.ts:697

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/serials_reviews_pb.ts:704

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 7;

#### Defined in

src/serials_reviews_pb.ts:690

___

### sortKey

• **sortKey**: [`SERIAL_REVIEW_SORT_KEY`](../enums/SERIAL_REVIEW_SORT_KEY.md) = `SERIAL_REVIEW_SORT_KEY.SERIAL_REVIEW_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SERIAL_REVIEW_SORT_KEY sort_key = 5;

#### Defined in

src/serials_reviews_pb.ts:676

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

src/serials_reviews_pb.ts:669

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/serials_reviews_pb.ts:713

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/serials_reviews_pb.ts:711

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsReviewsServiceSearchAllReq"``

#### Defined in

src/serials_reviews_pb.ts:712

## Methods

### clone

▸ **clone**(): [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md) \| `PlainMessage`<[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

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

[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md) \| `PlainMessage`<[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md) \| `PlainMessage`<[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/serials_reviews_pb.ts:737

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Defined in

src/serials_reviews_pb.ts:725

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Defined in

src/serials_reviews_pb.ts:729

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceSearchAllReq`](SerialsReviewsServiceSearchAllReq.md)

#### Defined in

src/serials_reviews_pb.ts:733
