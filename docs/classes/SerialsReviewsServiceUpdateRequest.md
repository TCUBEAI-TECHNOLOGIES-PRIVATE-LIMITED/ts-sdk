[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsReviewsServiceUpdateRequest

# Class: SerialsReviewsServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a serial review

**`Generated`**

from message tcube.SerialsReviewsServiceUpdateRequest

## Hierarchy

- `Message`<[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)\>

  ↳ **`SerialsReviewsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SerialsReviewsServiceUpdateRequest.md#constructor)

### Properties

- [content](SerialsReviewsServiceUpdateRequest.md#content)
- [name](SerialsReviewsServiceUpdateRequest.md#name)
- [rating](SerialsReviewsServiceUpdateRequest.md#rating)
- [userComment](SerialsReviewsServiceUpdateRequest.md#usercomment)
- [uuid](SerialsReviewsServiceUpdateRequest.md#uuid)
- [fields](SerialsReviewsServiceUpdateRequest.md#fields)
- [runtime](SerialsReviewsServiceUpdateRequest.md#runtime)
- [typeName](SerialsReviewsServiceUpdateRequest.md#typename)

### Methods

- [clone](SerialsReviewsServiceUpdateRequest.md#clone)
- [equals](SerialsReviewsServiceUpdateRequest.md#equals)
- [fromBinary](SerialsReviewsServiceUpdateRequest.md#frombinary)
- [fromJson](SerialsReviewsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SerialsReviewsServiceUpdateRequest.md#fromjsonstring)
- [getType](SerialsReviewsServiceUpdateRequest.md#gettype)
- [toBinary](SerialsReviewsServiceUpdateRequest.md#tobinary)
- [toJSON](SerialsReviewsServiceUpdateRequest.md#tojson)
- [toJson](SerialsReviewsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SerialsReviewsServiceUpdateRequest.md#tojsonstring)
- [equals](SerialsReviewsServiceUpdateRequest.md#equals-1)
- [fromBinary](SerialsReviewsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SerialsReviewsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SerialsReviewsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsReviewsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;SerialsReviewsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/serials_reviews_pb.ts:178](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L178)

## Properties

### content

• **content**: `string` = `""`

Optional content of the review

**`Generated`**

from field: string content = 14;

#### Defined in

[src/serials_reviews_pb.ts:176](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L176)

___

### name

• **name**: `string` = `""`

The name of the person

**`Generated`**

from field: string name = 12;

#### Defined in

[src/serials_reviews_pb.ts:162](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L162)

___

### rating

• **rating**: `bigint` = `protoInt64.zero`

The rating given by the customer (between 1 and 5)

**`Generated`**

from field: int64 rating = 13;

#### Defined in

[src/serials_reviews_pb.ts:169](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L169)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/serials_reviews_pb.ts:148](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L148)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/serials_reviews_pb.ts:155](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L155)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_reviews_pb.ts:185](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L185)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_reviews_pb.ts:183](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L183)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsReviewsServiceUpdateRequest"``

#### Defined in

[src/serials_reviews_pb.ts:184](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L184)

## Methods

### clone

▸ **clone**(): [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md) \| `PlainMessage`<[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

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

[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md) \| `PlainMessage`<[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md) \| `PlainMessage`<[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_reviews_pb.ts:205](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L205)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Defined in

[src/serials_reviews_pb.ts:193](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L193)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Defined in

[src/serials_reviews_pb.ts:197](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L197)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsServiceUpdateRequest`](SerialsReviewsServiceUpdateRequest.md)

#### Defined in

[src/serials_reviews_pb.ts:201](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L201)
