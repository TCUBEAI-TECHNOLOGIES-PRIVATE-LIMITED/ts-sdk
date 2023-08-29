[tcubesa-sdk](../README.md) / [Exports](../modules.md) / Unit

# Class: Unit

Describes the data structure of each unit on the platform

**`Generated`**

from message tcube.Unit

## Hierarchy

- `Message`<[`Unit`](Unit.md)\>

  ↳ **`Unit`**

## Table of contents

### Constructors

- [constructor](Unit.md#constructor)

### Properties

- [code](Unit.md#code)
- [description](Unit.md#description)
- [metadata](Unit.md#metadata)
- [name](Unit.md#name)
- [fields](Unit.md#fields)
- [runtime](Unit.md#runtime)
- [typeName](Unit.md#typename)

### Methods

- [clone](Unit.md#clone)
- [equals](Unit.md#equals)
- [fromBinary](Unit.md#frombinary)
- [fromJson](Unit.md#fromjson)
- [fromJsonString](Unit.md#fromjsonstring)
- [getType](Unit.md#gettype)
- [toBinary](Unit.md#tobinary)
- [toJSON](Unit.md#tojson)
- [toJson](Unit.md#tojson-1)
- [toJsonString](Unit.md#tojsonstring)
- [equals](Unit.md#equals-1)
- [fromBinary](Unit.md#frombinary-1)
- [fromJson](Unit.md#fromjson-1)
- [fromJsonString](Unit.md#fromjsonstring-1)

## Constructors

### constructor

• **new Unit**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Unit`](Unit.md)\> |

#### Overrides

Message&lt;Unit\&gt;.constructor

#### Defined in

[src/units_pb.ts:236](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L236)

## Properties

### code

• **code**: `string` = `""`

Code of the unit

**`Generated`**

from field: string code = 11;

#### Defined in

[src/units_pb.ts:227](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L227)

___

### description

• **description**: `string` = `""`

Description of the unit

**`Generated`**

from field: string description = 12;

#### Defined in

[src/units_pb.ts:234](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L234)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/units_pb.ts:213](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L213)

___

### name

• **name**: `string` = `""`

The name of the unit

**`Generated`**

from field: string name = 10;

#### Defined in

[src/units_pb.ts:220](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L220)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_pb.ts:243](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L243)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_pb.ts:241](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L241)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.Unit"``

#### Defined in

[src/units_pb.ts:242](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L242)

## Methods

### clone

▸ **clone**(): [`Unit`](Unit.md)

Create a deep copy.

#### Returns

[`Unit`](Unit.md)

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
| `other` | `undefined` \| ``null`` \| [`Unit`](Unit.md) \| `PlainMessage`<[`Unit`](Unit.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Unit`](Unit.md)

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

[`Unit`](Unit.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Unit`](Unit.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Unit`](Unit.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Unit`](Unit.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Unit`](Unit.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Unit`](Unit.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Unit`](Unit.md)\>

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
| `a` | `undefined` \| [`Unit`](Unit.md) \| `PlainMessage`<[`Unit`](Unit.md)\> |
| `b` | `undefined` \| [`Unit`](Unit.md) \| `PlainMessage`<[`Unit`](Unit.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_pb.ts:262](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L262)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Unit`](Unit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Unit`](Unit.md)

#### Defined in

[src/units_pb.ts:250](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L250)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Unit`](Unit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Unit`](Unit.md)

#### Defined in

[src/units_pb.ts:254](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L254)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Unit`](Unit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Unit`](Unit.md)

#### Defined in

[src/units_pb.ts:258](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L258)
