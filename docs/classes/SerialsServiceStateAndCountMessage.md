[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceStateAndCountMessage

# Class: SerialsServiceStateAndCountMessage

Describes the response that consists of a state and the count of serials within that state

**`Generated`**

from message scanswift.SerialsServiceStateAndCountMessage

## Hierarchy

- `Message`<[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)\>

  ↳ **`SerialsServiceStateAndCountMessage`**

## Table of contents

### Constructors

- [constructor](SerialsServiceStateAndCountMessage.md#constructor)

### Properties

- [count](SerialsServiceStateAndCountMessage.md#count)
- [state](SerialsServiceStateAndCountMessage.md#state)
- [fields](SerialsServiceStateAndCountMessage.md#fields)
- [runtime](SerialsServiceStateAndCountMessage.md#runtime)
- [typeName](SerialsServiceStateAndCountMessage.md#typename)

### Methods

- [clone](SerialsServiceStateAndCountMessage.md#clone)
- [equals](SerialsServiceStateAndCountMessage.md#equals)
- [fromBinary](SerialsServiceStateAndCountMessage.md#frombinary)
- [fromJson](SerialsServiceStateAndCountMessage.md#fromjson)
- [fromJsonString](SerialsServiceStateAndCountMessage.md#fromjsonstring)
- [getType](SerialsServiceStateAndCountMessage.md#gettype)
- [toBinary](SerialsServiceStateAndCountMessage.md#tobinary)
- [toJSON](SerialsServiceStateAndCountMessage.md#tojson)
- [toJson](SerialsServiceStateAndCountMessage.md#tojson-1)
- [toJsonString](SerialsServiceStateAndCountMessage.md#tojsonstring)
- [equals](SerialsServiceStateAndCountMessage.md#equals-1)
- [fromBinary](SerialsServiceStateAndCountMessage.md#frombinary-1)
- [fromJson](SerialsServiceStateAndCountMessage.md#fromjson-1)
- [fromJsonString](SerialsServiceStateAndCountMessage.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceStateAndCountMessage**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)\> |

#### Overrides

Message&lt;SerialsServiceStateAndCountMessage\&gt;.constructor

#### Defined in

[src/serials_pb.ts:1439](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1439)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of serials within this state

**`Generated`**

from field: int64 count = 11;

#### Defined in

[src/serials_pb.ts:1437](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1437)

___

### state

• **state**: [`SERIAL_STATE`](../enums/SERIAL_STATE.md) = `SERIAL_STATE.SERIAL_STATE_ANY_UNSPECIFIED`

The state of the serial

**`Generated`**

from field: scanswift.SERIAL_STATE state = 10;

#### Defined in

[src/serials_pb.ts:1430](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1430)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:1446](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1446)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:1444](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1444)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsServiceStateAndCountMessage"``

#### Defined in

[src/serials_pb.ts:1445](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1445)

## Methods

### clone

▸ **clone**(): [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

Create a deep copy.

#### Returns

[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md) \| `PlainMessage`<[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

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

[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)\>

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
| `a` | `undefined` \| [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md) \| `PlainMessage`<[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)\> |
| `b` | `undefined` \| [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md) \| `PlainMessage`<[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:1463](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1463)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Defined in

[src/serials_pb.ts:1451](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1451)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Defined in

[src/serials_pb.ts:1455](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1455)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)

#### Defined in

[src/serials_pb.ts:1459](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1459)
