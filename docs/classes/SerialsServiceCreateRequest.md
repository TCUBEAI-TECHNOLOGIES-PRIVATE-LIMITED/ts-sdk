[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceCreateRequest

# Class: SerialsServiceCreateRequest

Describes the necessary data structure during creation of a serial

**`Generated`**

from message tcube.SerialsServiceCreateRequest

## Hierarchy

- `Message`<[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)\>

  ↳ **`SerialsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SerialsServiceCreateRequest.md#constructor)

### Properties

- [batchUuid](SerialsServiceCreateRequest.md#batchuuid)
- [entityUuid](SerialsServiceCreateRequest.md#entityuuid)
- [locationUuid](SerialsServiceCreateRequest.md#locationuuid)
- [productUuid](SerialsServiceCreateRequest.md#productuuid)
- [quantity](SerialsServiceCreateRequest.md#quantity)
- [userComment](SerialsServiceCreateRequest.md#usercomment)
- [fields](SerialsServiceCreateRequest.md#fields)
- [runtime](SerialsServiceCreateRequest.md#runtime)
- [typeName](SerialsServiceCreateRequest.md#typename)

### Methods

- [clone](SerialsServiceCreateRequest.md#clone)
- [equals](SerialsServiceCreateRequest.md#equals)
- [fromBinary](SerialsServiceCreateRequest.md#frombinary)
- [fromJson](SerialsServiceCreateRequest.md#fromjson)
- [fromJsonString](SerialsServiceCreateRequest.md#fromjsonstring)
- [getType](SerialsServiceCreateRequest.md#gettype)
- [toBinary](SerialsServiceCreateRequest.md#tobinary)
- [toJSON](SerialsServiceCreateRequest.md#tojson)
- [toJson](SerialsServiceCreateRequest.md#tojson-1)
- [toJsonString](SerialsServiceCreateRequest.md#tojsonstring)
- [equals](SerialsServiceCreateRequest.md#equals-1)
- [fromBinary](SerialsServiceCreateRequest.md#frombinary-1)
- [fromJson](SerialsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SerialsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;SerialsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/serials_pb.ts:422](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L422)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

UUID of the batch

**`Generated`**

from field: string batch_uuid = 11;

#### Defined in

[src/serials_pb.ts:413](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L413)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_pb.ts:392](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L392)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:399](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L399)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/serials_pb.ts:406](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L406)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The number of serials that need to be created

**`Generated`**

from field: int64 quantity = 20;

#### Defined in

[src/serials_pb.ts:420](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L420)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/serials_pb.ts:385](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L385)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:429](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L429)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:427](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L427)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsServiceCreateRequest"``

#### Defined in

[src/serials_pb.ts:428](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L428)

## Methods

### clone

▸ **clone**(): [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md) \| `PlainMessage`<[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

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

[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md) \| `PlainMessage`<[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md) \| `PlainMessage`<[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:450](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L450)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Defined in

[src/serials_pb.ts:438](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L438)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Defined in

[src/serials_pb.ts:442](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L442)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCreateRequest`](SerialsServiceCreateRequest.md)

#### Defined in

[src/serials_pb.ts:446](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L446)
