[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsReviewsList

# Class: SerialsReviewsList

Describes the data structure that stores a list of serials reviews

**`Generated`**

from message scanswift.SerialsReviewsList

## Hierarchy

- `Message`<[`SerialsReviewsList`](SerialsReviewsList.md)\>

  ↳ **`SerialsReviewsList`**

## Table of contents

### Constructors

- [constructor](SerialsReviewsList.md#constructor)

### Properties

- [list](SerialsReviewsList.md#list)
- [fields](SerialsReviewsList.md#fields)
- [runtime](SerialsReviewsList.md#runtime)
- [typeName](SerialsReviewsList.md#typename)

### Methods

- [clone](SerialsReviewsList.md#clone)
- [equals](SerialsReviewsList.md#equals)
- [fromBinary](SerialsReviewsList.md#frombinary)
- [fromJson](SerialsReviewsList.md#fromjson)
- [fromJsonString](SerialsReviewsList.md#fromjsonstring)
- [getType](SerialsReviewsList.md#gettype)
- [toBinary](SerialsReviewsList.md#tobinary)
- [toJSON](SerialsReviewsList.md#tojson)
- [toJson](SerialsReviewsList.md#tojson-1)
- [toJsonString](SerialsReviewsList.md#tojsonstring)
- [equals](SerialsReviewsList.md#equals-1)
- [fromBinary](SerialsReviewsList.md#frombinary-1)
- [fromJson](SerialsReviewsList.md#fromjson-1)
- [fromJsonString](SerialsReviewsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsReviewsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsReviewsList`](SerialsReviewsList.md)\> |

#### Overrides

Message&lt;SerialsReviewsList\&gt;.constructor

#### Defined in

[src/serials_reviews_pb.ts:338](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L338)

## Properties

### list

• **list**: [`SerialReview`](SerialReview.md)[] = `[]`

List of serials reviews

**`Generated`**

from field: repeated scanswift.SerialReview list = 1;

#### Defined in

[src/serials_reviews_pb.ts:336](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L336)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_reviews_pb.ts:345](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L345)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_reviews_pb.ts:343](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L343)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsReviewsList"``

#### Defined in

[src/serials_reviews_pb.ts:344](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L344)

## Methods

### clone

▸ **clone**(): [`SerialsReviewsList`](SerialsReviewsList.md)

Create a deep copy.

#### Returns

[`SerialsReviewsList`](SerialsReviewsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsReviewsList`](SerialsReviewsList.md) \| `PlainMessage`<[`SerialsReviewsList`](SerialsReviewsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsReviewsList`](SerialsReviewsList.md)

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

[`SerialsReviewsList`](SerialsReviewsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsList`](SerialsReviewsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsList`](SerialsReviewsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsList`](SerialsReviewsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsList`](SerialsReviewsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsReviewsList`](SerialsReviewsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsReviewsList`](SerialsReviewsList.md)\>

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
| `a` | `undefined` \| [`SerialsReviewsList`](SerialsReviewsList.md) \| `PlainMessage`<[`SerialsReviewsList`](SerialsReviewsList.md)\> |
| `b` | `undefined` \| [`SerialsReviewsList`](SerialsReviewsList.md) \| `PlainMessage`<[`SerialsReviewsList`](SerialsReviewsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_reviews_pb.ts:361](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L361)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsReviewsList`](SerialsReviewsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsReviewsList`](SerialsReviewsList.md)

#### Defined in

[src/serials_reviews_pb.ts:349](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L349)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsReviewsList`](SerialsReviewsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsList`](SerialsReviewsList.md)

#### Defined in

[src/serials_reviews_pb.ts:353](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L353)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsReviewsList`](SerialsReviewsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsReviewsList`](SerialsReviewsList.md)

#### Defined in

[src/serials_reviews_pb.ts:357](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_reviews_pb.ts#L357)
