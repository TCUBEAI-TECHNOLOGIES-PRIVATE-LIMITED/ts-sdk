[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialReview

# Class: SerialReview

Describes the data structure of each serial review on the platform

**`Generated`**

from message tcube.SerialReview

## Hierarchy

- `Message`<[`SerialReview`](SerialReview.md)\>

  ↳ **`SerialReview`**

## Table of contents

### Constructors

- [constructor](SerialReview.md#constructor)

### Properties

- [content](SerialReview.md#content)
- [entityUuid](SerialReview.md#entityuuid)
- [inferredFrom](SerialReview.md#inferredfrom)
- [latitude](SerialReview.md#latitude)
- [longitude](SerialReview.md#longitude)
- [metadata](SerialReview.md#metadata)
- [name](SerialReview.md#name)
- [productUuid](SerialReview.md#productuuid)
- [rating](SerialReview.md#rating)
- [serialUuid](SerialReview.md#serialuuid)
- [fields](SerialReview.md#fields)
- [runtime](SerialReview.md#runtime)
- [typeName](SerialReview.md#typename)

### Methods

- [clone](SerialReview.md#clone)
- [equals](SerialReview.md#equals)
- [fromBinary](SerialReview.md#frombinary)
- [fromJson](SerialReview.md#fromjson)
- [fromJsonString](SerialReview.md#fromjsonstring)
- [getType](SerialReview.md#gettype)
- [toBinary](SerialReview.md#tobinary)
- [toJSON](SerialReview.md#tojson)
- [toJson](SerialReview.md#tojson-1)
- [toJsonString](SerialReview.md#tojsonstring)
- [equals](SerialReview.md#equals-1)
- [fromBinary](SerialReview.md#frombinary-1)
- [fromJson](SerialReview.md#fromjson-1)
- [fromJsonString](SerialReview.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialReview**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialReview`](SerialReview.md)\> |

#### Overrides

Message&lt;SerialReview\&gt;.constructor

#### Defined in

[src/serials_reviews_pb.ts:287](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L287)

## Properties

### content

• **content**: `string` = `""`

Optional content of the review

**`Generated`**

from field: string content = 14;

#### Defined in

[src/serials_reviews_pb.ts:264](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L264)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_reviews_pb.ts:229](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L229)

___

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: tcube.INFERRED_FROM inferred_from = 23;

#### Defined in

[src/serials_reviews_pb.ts:285](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L285)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 21;

#### Defined in

[src/serials_reviews_pb.ts:271](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L271)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 22;

#### Defined in

[src/serials_reviews_pb.ts:278](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L278)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/serials_reviews_pb.ts:222](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L222)

___

### name

• **name**: `string` = `""`

The name of the person

**`Generated`**

from field: string name = 12;

#### Defined in

[src/serials_reviews_pb.ts:250](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L250)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the associated product

**`Generated`**

from field: string product_uuid = 11;

#### Defined in

[src/serials_reviews_pb.ts:243](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L243)

___

### rating

• **rating**: `bigint` = `protoInt64.zero`

The rating given by the customer (between 1 and 5)

**`Generated`**

from field: int64 rating = 13;

#### Defined in

[src/serials_reviews_pb.ts:257](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L257)

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 10;

#### Defined in

[src/serials_reviews_pb.ts:236](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L236)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_reviews_pb.ts:294](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L294)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_reviews_pb.ts:292](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L292)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialReview"``

#### Defined in

[src/serials_reviews_pb.ts:293](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L293)

## Methods

### clone

▸ **clone**(): [`SerialReview`](SerialReview.md)

Create a deep copy.

#### Returns

[`SerialReview`](SerialReview.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialReview`](SerialReview.md) \| `PlainMessage`<[`SerialReview`](SerialReview.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialReview`](SerialReview.md)

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

[`SerialReview`](SerialReview.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialReview`](SerialReview.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReview`](SerialReview.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialReview`](SerialReview.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReview`](SerialReview.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialReview`](SerialReview.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialReview`](SerialReview.md)\>

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
| `a` | `undefined` \| [`SerialReview`](SerialReview.md) \| `PlainMessage`<[`SerialReview`](SerialReview.md)\> |
| `b` | `undefined` \| [`SerialReview`](SerialReview.md) \| `PlainMessage`<[`SerialReview`](SerialReview.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_reviews_pb.ts:319](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L319)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialReview`](SerialReview.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialReview`](SerialReview.md)

#### Defined in

[src/serials_reviews_pb.ts:307](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L307)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialReview`](SerialReview.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReview`](SerialReview.md)

#### Defined in

[src/serials_reviews_pb.ts:311](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L311)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialReview`](SerialReview.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialReview`](SerialReview.md)

#### Defined in

[src/serials_reviews_pb.ts:315](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_reviews_pb.ts#L315)
