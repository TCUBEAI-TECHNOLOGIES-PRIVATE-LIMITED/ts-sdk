[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsReviewsServicePaginationReq

# Class: SerialsReviewsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message scanswift.SerialsReviewsServicePaginationReq

## Hierarchy

- `Message`<[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)\>

  ↳ **`SerialsReviewsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](SerialsReviewsServicePaginationReq.md#constructor)

### Properties

- [count](SerialsReviewsServicePaginationReq.md#count)
- [entityUuid](SerialsReviewsServicePaginationReq.md#entityuuid)
- [isActive](SerialsReviewsServicePaginationReq.md#isactive)
- [offset](SerialsReviewsServicePaginationReq.md#offset)
- [productUuid](SerialsReviewsServicePaginationReq.md#productuuid)
- [sortKey](SerialsReviewsServicePaginationReq.md#sortkey)
- [sortOrder](SerialsReviewsServicePaginationReq.md#sortorder)
- [fields](SerialsReviewsServicePaginationReq.md#fields)
- [runtime](SerialsReviewsServicePaginationReq.md#runtime)
- [typeName](SerialsReviewsServicePaginationReq.md#typename)

### Methods

- [clone](SerialsReviewsServicePaginationReq.md#clone)
- [equals](SerialsReviewsServicePaginationReq.md#equals)
- [fromBinary](SerialsReviewsServicePaginationReq.md#frombinary)
- [fromJson](SerialsReviewsServicePaginationReq.md#fromjson)
- [fromJsonString](SerialsReviewsServicePaginationReq.md#fromjsonstring)
- [getType](SerialsReviewsServicePaginationReq.md#gettype)
- [toBinary](SerialsReviewsServicePaginationReq.md#tobinary)
- [toJSON](SerialsReviewsServicePaginationReq.md#tojson)
- [toJson](SerialsReviewsServicePaginationReq.md#tojson-1)
- [toJsonString](SerialsReviewsServicePaginationReq.md#tojsonstring)
- [equals](SerialsReviewsServicePaginationReq.md#equals-1)
- [fromBinary](SerialsReviewsServicePaginationReq.md#frombinary-1)
- [fromJson](SerialsReviewsServicePaginationReq.md#fromjson-1)
- [fromJsonString](SerialsReviewsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsReviewsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)\> |

#### Overrides

Message&lt;SerialsReviewsServicePaginationReq\&gt;.constructor

#### Defined in

[src/serials_reviews_pb.ts:422](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L422)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/serials_reviews_pb.ts:385](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L385)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/serials_reviews_pb.ts:413](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L413)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/serials_reviews_pb.ts:378](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L378)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/serials_reviews_pb.ts:392](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L392)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 7;

#### Defined in

[src/serials_reviews_pb.ts:420](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L420)

___

### sortKey

• **sortKey**: [`SERIAL_REVIEW_SORT_KEY`](../enums/SERIAL_REVIEW_SORT_KEY.md) = `SERIAL_REVIEW_SORT_KEY.SERIAL_REVIEW_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SERIAL_REVIEW_SORT_KEY sort_key = 5;

#### Defined in

[src/serials_reviews_pb.ts:406](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L406)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/serials_reviews_pb.ts:399](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L399)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_reviews_pb.ts:429](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L429)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_reviews_pb.ts:427](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L427)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsReviewsServicePaginationReq"``

#### Defined in

[src/serials_reviews_pb.ts:428](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L428)

## Methods

### clone

▸ **clone**(): [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md) \| `PlainMessage`<[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

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

[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md) \| `PlainMessage`<[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md) \| `PlainMessage`<[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_reviews_pb.ts:451](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L451)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Defined in

[src/serials_reviews_pb.ts:439](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L439)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Defined in

[src/serials_reviews_pb.ts:443](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L443)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServicePaginationReq`](SerialsReviewsServicePaginationReq.md)

#### Defined in

[src/serials_reviews_pb.ts:447](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L447)
