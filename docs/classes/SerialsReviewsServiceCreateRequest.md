[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsReviewsServiceCreateRequest

# Class: SerialsReviewsServiceCreateRequest

Describes the necessary data structure during creation of a serial review

**`Generated`**

from message tcube.SerialsReviewsServiceCreateRequest

## Hierarchy

- `Message`<[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)\>

  ↳ **`SerialsReviewsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SerialsReviewsServiceCreateRequest.md#constructor)

### Properties

- [content](SerialsReviewsServiceCreateRequest.md#content)
- [name](SerialsReviewsServiceCreateRequest.md#name)
- [rating](SerialsReviewsServiceCreateRequest.md#rating)
- [serialUuid](SerialsReviewsServiceCreateRequest.md#serialuuid)
- [userComment](SerialsReviewsServiceCreateRequest.md#usercomment)
- [fields](SerialsReviewsServiceCreateRequest.md#fields)
- [runtime](SerialsReviewsServiceCreateRequest.md#runtime)
- [typeName](SerialsReviewsServiceCreateRequest.md#typename)

### Methods

- [clone](SerialsReviewsServiceCreateRequest.md#clone)
- [equals](SerialsReviewsServiceCreateRequest.md#equals)
- [fromBinary](SerialsReviewsServiceCreateRequest.md#frombinary)
- [fromJson](SerialsReviewsServiceCreateRequest.md#fromjson)
- [fromJsonString](SerialsReviewsServiceCreateRequest.md#fromjsonstring)
- [getType](SerialsReviewsServiceCreateRequest.md#gettype)
- [toBinary](SerialsReviewsServiceCreateRequest.md#tobinary)
- [toJSON](SerialsReviewsServiceCreateRequest.md#tojson)
- [toJson](SerialsReviewsServiceCreateRequest.md#tojson-1)
- [toJsonString](SerialsReviewsServiceCreateRequest.md#tojsonstring)
- [equals](SerialsReviewsServiceCreateRequest.md#equals-1)
- [fromBinary](SerialsReviewsServiceCreateRequest.md#frombinary-1)
- [fromJson](SerialsReviewsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SerialsReviewsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsReviewsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;SerialsReviewsServiceCreateRequest\&gt;.constructor

#### Defined in

src/serials_reviews_pb.ts:104

## Properties

### content

• **content**: `string` = `""`

Optional content of the review

**`Generated`**

from field: string content = 14;

#### Defined in

src/serials_reviews_pb.ts:102

___

### name

• **name**: `string` = `""`

The name of the person

**`Generated`**

from field: string name = 12;

#### Defined in

src/serials_reviews_pb.ts:88

___

### rating

• **rating**: `bigint` = `protoInt64.zero`

The rating given by the customer (between 1 and 5)

**`Generated`**

from field: int64 rating = 13;

#### Defined in

src/serials_reviews_pb.ts:95

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 10;

#### Defined in

src/serials_reviews_pb.ts:81

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/serials_reviews_pb.ts:74

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/serials_reviews_pb.ts:111

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/serials_reviews_pb.ts:109

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsReviewsServiceCreateRequest"``

#### Defined in

src/serials_reviews_pb.ts:110

## Methods

### clone

▸ **clone**(): [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md) \| `PlainMessage`<[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

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

[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md) \| `PlainMessage`<[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md) \| `PlainMessage`<[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/serials_reviews_pb.ts:131

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Defined in

src/serials_reviews_pb.ts:119

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Defined in

src/serials_reviews_pb.ts:123

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceCreateRequest`](SerialsReviewsServiceCreateRequest.md)

#### Defined in

src/serials_reviews_pb.ts:127
