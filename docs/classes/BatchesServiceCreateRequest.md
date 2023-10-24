[scanswift-sdk](../README.md) / [Exports](../modules.md) / BatchesServiceCreateRequest

# Class: BatchesServiceCreateRequest

Describes the necessary data structure during creation of a batch

**`Generated`**

from message scanswift.BatchesServiceCreateRequest

## Hierarchy

- `Message`<[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)\>

  ↳ **`BatchesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](BatchesServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](BatchesServiceCreateRequest.md#entityuuid)
- [internalCode](BatchesServiceCreateRequest.md#internalcode)
- [locationUuid](BatchesServiceCreateRequest.md#locationuuid)
- [name](BatchesServiceCreateRequest.md#name)
- [productUuid](BatchesServiceCreateRequest.md#productuuid)
- [quantity](BatchesServiceCreateRequest.md#quantity)
- [userComment](BatchesServiceCreateRequest.md#usercomment)
- [fields](BatchesServiceCreateRequest.md#fields)
- [runtime](BatchesServiceCreateRequest.md#runtime)
- [typeName](BatchesServiceCreateRequest.md#typename)

### Methods

- [clone](BatchesServiceCreateRequest.md#clone)
- [equals](BatchesServiceCreateRequest.md#equals)
- [fromBinary](BatchesServiceCreateRequest.md#frombinary)
- [fromJson](BatchesServiceCreateRequest.md#fromjson)
- [fromJsonString](BatchesServiceCreateRequest.md#fromjsonstring)
- [getType](BatchesServiceCreateRequest.md#gettype)
- [toBinary](BatchesServiceCreateRequest.md#tobinary)
- [toJSON](BatchesServiceCreateRequest.md#tojson)
- [toJson](BatchesServiceCreateRequest.md#tojson-1)
- [toJsonString](BatchesServiceCreateRequest.md#tojsonstring)
- [equals](BatchesServiceCreateRequest.md#equals-1)
- [fromBinary](BatchesServiceCreateRequest.md#frombinary-1)
- [fromJson](BatchesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](BatchesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new BatchesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;BatchesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/batches_pb.ts:128](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L128)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/batches_pb.ts:89](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L89)

___

### internalCode

• **internalCode**: `string` = `""`

Internal code as entered by the entity

**`Generated`**

from field: string internal_code = 13;

#### Defined in

[src/batches_pb.ts:126](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L126)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/batches_pb.ts:96](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L96)

___

### name

• **name**: `string` = `""`

The name of the batch

**`Generated`**

from field: string name = 10;

#### Defined in

[src/batches_pb.ts:110](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L110)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 9;

#### Defined in

[src/batches_pb.ts:103](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L103)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

// Code of the batch
string code = 11 [(validate.rules).string.min_len = 1];
The number of serials that need to be created

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/batches_pb.ts:119](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L119)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/batches_pb.ts:82](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L82)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:135](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L135)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:133](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L133)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.BatchesServiceCreateRequest"``

#### Defined in

[src/batches_pb.ts:134](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L134)

## Methods

### clone

▸ **clone**(): [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md) \| `PlainMessage`<[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

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

[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md) \| `PlainMessage`<[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md) \| `PlainMessage`<[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:157](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L157)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Defined in

[src/batches_pb.ts:145](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L145)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Defined in

[src/batches_pb.ts:149](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L149)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCreateRequest`](BatchesServiceCreateRequest.md)

#### Defined in

[src/batches_pb.ts:153](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/batches_pb.ts#L153)
