[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UnitsList

# Class: UnitsList

Describes the data structure that stores a list of units

**`Generated`**

from message tcube.UnitsList

## Hierarchy

- `Message`<[`UnitsList`](UnitsList.md)\>

  ↳ **`UnitsList`**

## Table of contents

### Constructors

- [constructor](UnitsList.md#constructor)

### Properties

- [list](UnitsList.md#list)
- [fields](UnitsList.md#fields)
- [runtime](UnitsList.md#runtime)
- [typeName](UnitsList.md#typename)

### Methods

- [clone](UnitsList.md#clone)
- [equals](UnitsList.md#equals)
- [fromBinary](UnitsList.md#frombinary)
- [fromJson](UnitsList.md#fromjson)
- [fromJsonString](UnitsList.md#fromjsonstring)
- [getType](UnitsList.md#gettype)
- [toBinary](UnitsList.md#tobinary)
- [toJSON](UnitsList.md#tojson)
- [toJson](UnitsList.md#tojson-1)
- [toJsonString](UnitsList.md#tojsonstring)
- [equals](UnitsList.md#equals-1)
- [fromBinary](UnitsList.md#frombinary-1)
- [fromJson](UnitsList.md#fromjson-1)
- [fromJsonString](UnitsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UnitsList`](UnitsList.md)\> |

#### Overrides

Message&lt;UnitsList\&gt;.constructor

#### Defined in

[src/units_pb.ts:281](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L281)

## Properties

### list

• **list**: [`Unit`](Unit.md)[] = `[]`

List of units

**`Generated`**

from field: repeated tcube.Unit list = 1;

#### Defined in

[src/units_pb.ts:279](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L279)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_pb.ts:288](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L288)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_pb.ts:286](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L286)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UnitsList"``

#### Defined in

[src/units_pb.ts:287](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L287)

## Methods

### clone

▸ **clone**(): [`UnitsList`](UnitsList.md)

Create a deep copy.

#### Returns

[`UnitsList`](UnitsList.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsList`](UnitsList.md) \| `PlainMessage`<[`UnitsList`](UnitsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsList`](UnitsList.md)

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

[`UnitsList`](UnitsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsList`](UnitsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsList`](UnitsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsList`](UnitsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsList`](UnitsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UnitsList`](UnitsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UnitsList`](UnitsList.md)\>

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
| `a` | `undefined` \| [`UnitsList`](UnitsList.md) \| `PlainMessage`<[`UnitsList`](UnitsList.md)\> |
| `b` | `undefined` \| [`UnitsList`](UnitsList.md) \| `PlainMessage`<[`UnitsList`](UnitsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_pb.ts:304](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L304)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UnitsList`](UnitsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UnitsList`](UnitsList.md)

#### Defined in

[src/units_pb.ts:292](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L292)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UnitsList`](UnitsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsList`](UnitsList.md)

#### Defined in

[src/units_pb.ts:296](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L296)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UnitsList`](UnitsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsList`](UnitsList.md)

#### Defined in

[src/units_pb.ts:300](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L300)
