[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceSerialCodes

# Class: SerialsServiceSerialCodes

**`Generated`**

from message tcube.SerialsServiceSerialCodes

## Hierarchy

- `Message`<[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)\>

  ↳ **`SerialsServiceSerialCodes`**

## Table of contents

### Constructors

- [constructor](SerialsServiceSerialCodes.md#constructor)

### Properties

- [serialCode](SerialsServiceSerialCodes.md#serialcode)
- [fields](SerialsServiceSerialCodes.md#fields)
- [runtime](SerialsServiceSerialCodes.md#runtime)
- [typeName](SerialsServiceSerialCodes.md#typename)

### Methods

- [clone](SerialsServiceSerialCodes.md#clone)
- [equals](SerialsServiceSerialCodes.md#equals)
- [fromBinary](SerialsServiceSerialCodes.md#frombinary)
- [fromJson](SerialsServiceSerialCodes.md#fromjson)
- [fromJsonString](SerialsServiceSerialCodes.md#fromjsonstring)
- [getType](SerialsServiceSerialCodes.md#gettype)
- [toBinary](SerialsServiceSerialCodes.md#tobinary)
- [toJSON](SerialsServiceSerialCodes.md#tojson)
- [toJson](SerialsServiceSerialCodes.md#tojson-1)
- [toJsonString](SerialsServiceSerialCodes.md#tojsonstring)
- [equals](SerialsServiceSerialCodes.md#equals-1)
- [fromBinary](SerialsServiceSerialCodes.md#frombinary-1)
- [fromJson](SerialsServiceSerialCodes.md#fromjson-1)
- [fromJsonString](SerialsServiceSerialCodes.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceSerialCodes**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)\> |

#### Overrides

Message&lt;SerialsServiceSerialCodes\&gt;.constructor

#### Defined in

[src/serials_pb.ts:345](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L345)

## Properties

### serialCode

• **serialCode**: `string` = `""`

Serial code

**`Generated`**

from field: string serial_code = 11;

#### Defined in

[src/serials_pb.ts:343](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L343)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:352](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L352)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:350](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L350)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsServiceSerialCodes"``

#### Defined in

[src/serials_pb.ts:351](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L351)

## Methods

### clone

▸ **clone**(): [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

Create a deep copy.

#### Returns

[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md) \| `PlainMessage`<[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

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

[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)\>

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
| `a` | `undefined` \| [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md) \| `PlainMessage`<[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)\> |
| `b` | `undefined` \| [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md) \| `PlainMessage`<[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:368](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L368)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Defined in

[src/serials_pb.ts:356](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L356)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Defined in

[src/serials_pb.ts:360](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L360)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)

#### Defined in

[src/serials_pb.ts:364](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L364)
