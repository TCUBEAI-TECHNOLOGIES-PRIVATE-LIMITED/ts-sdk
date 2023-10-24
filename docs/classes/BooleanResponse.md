[scanswift-sdk](../README.md) / [Exports](../modules.md) / BooleanResponse

# Class: BooleanResponse

Describes the boolean response

**`Generated`**

from message scanswift.BooleanResponse

## Hierarchy

- `Message`<[`BooleanResponse`](BooleanResponse.md)\>

  ↳ **`BooleanResponse`**

## Table of contents

### Constructors

- [constructor](BooleanResponse.md#constructor)

### Properties

- [value](BooleanResponse.md#value)
- [fields](BooleanResponse.md#fields)
- [runtime](BooleanResponse.md#runtime)
- [typeName](BooleanResponse.md#typename)

### Methods

- [clone](BooleanResponse.md#clone)
- [equals](BooleanResponse.md#equals)
- [fromBinary](BooleanResponse.md#frombinary)
- [fromJson](BooleanResponse.md#fromjson)
- [fromJsonString](BooleanResponse.md#fromjsonstring)
- [getType](BooleanResponse.md#gettype)
- [toBinary](BooleanResponse.md#tobinary)
- [toJSON](BooleanResponse.md#tojson)
- [toJson](BooleanResponse.md#tojson-1)
- [toJsonString](BooleanResponse.md#tojsonstring)
- [equals](BooleanResponse.md#equals-1)
- [fromBinary](BooleanResponse.md#frombinary-1)
- [fromJson](BooleanResponse.md#fromjson-1)
- [fromJsonString](BooleanResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new BooleanResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BooleanResponse`](BooleanResponse.md)\> |

#### Overrides

Message&lt;BooleanResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:197](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L197)

## Properties

### value

• **value**: `boolean` = `false`

Stores if the value is true or false

**`Generated`**

from field: bool value = 1;

#### Defined in

[src/base_pb.ts:195](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L195)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:204](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L204)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:202](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L202)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.BooleanResponse"``

#### Defined in

[src/base_pb.ts:203](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L203)

## Methods

### clone

▸ **clone**(): [`BooleanResponse`](BooleanResponse.md)

Create a deep copy.

#### Returns

[`BooleanResponse`](BooleanResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`BooleanResponse`](BooleanResponse.md) \| `PlainMessage`<[`BooleanResponse`](BooleanResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BooleanResponse`](BooleanResponse.md)

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

[`BooleanResponse`](BooleanResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BooleanResponse`](BooleanResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BooleanResponse`](BooleanResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BooleanResponse`](BooleanResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BooleanResponse`](BooleanResponse.md)\>

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
| `a` | `undefined` \| [`BooleanResponse`](BooleanResponse.md) \| `PlainMessage`<[`BooleanResponse`](BooleanResponse.md)\> |
| `b` | `undefined` \| [`BooleanResponse`](BooleanResponse.md) \| `PlainMessage`<[`BooleanResponse`](BooleanResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:220](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L220)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BooleanResponse`](BooleanResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Defined in

[src/base_pb.ts:208](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L208)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BooleanResponse`](BooleanResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Defined in

[src/base_pb.ts:212](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L212)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BooleanResponse`](BooleanResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BooleanResponse`](BooleanResponse.md)

#### Defined in

[src/base_pb.ts:216](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L216)
