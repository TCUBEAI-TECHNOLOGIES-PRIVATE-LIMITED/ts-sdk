[scanswift-sdk](../README.md) / [Exports](../modules.md) / UInt32Rules

# Class: UInt32Rules

UInt32Rules describes the constraints applied to `uint32` values

**`Generated`**

from message validate.UInt32Rules

## Hierarchy

- `Message`<[`UInt32Rules`](UInt32Rules.md)\>

  ↳ **`UInt32Rules`**

## Table of contents

### Constructors

- [constructor](UInt32Rules.md#constructor)

### Properties

- [const](UInt32Rules.md#const)
- [gt](UInt32Rules.md#gt)
- [gte](UInt32Rules.md#gte)
- [ignoreEmpty](UInt32Rules.md#ignoreempty)
- [in](UInt32Rules.md#in)
- [lt](UInt32Rules.md#lt)
- [lte](UInt32Rules.md#lte)
- [notIn](UInt32Rules.md#notin)
- [fields](UInt32Rules.md#fields)
- [runtime](UInt32Rules.md#runtime)
- [typeName](UInt32Rules.md#typename)

### Methods

- [clone](UInt32Rules.md#clone)
- [equals](UInt32Rules.md#equals)
- [fromBinary](UInt32Rules.md#frombinary)
- [fromJson](UInt32Rules.md#fromjson)
- [fromJsonString](UInt32Rules.md#fromjsonstring)
- [getType](UInt32Rules.md#gettype)
- [toBinary](UInt32Rules.md#tobinary)
- [toJSON](UInt32Rules.md#tojson)
- [toJson](UInt32Rules.md#tojson-1)
- [toJsonString](UInt32Rules.md#tojsonstring)
- [equals](UInt32Rules.md#equals-1)
- [fromBinary](UInt32Rules.md#frombinary-1)
- [fromJson](UInt32Rules.md#fromjson-1)
- [fromJsonString](UInt32Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new UInt32Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UInt32Rules`](UInt32Rules.md)\> |

#### Overrides

Message&lt;UInt32Rules\&gt;.constructor

#### Defined in

[src/validate_pb.ts:736](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L736)

## Properties

### const

• `Optional` **const**: `number`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional uint32 const = 1;

#### Defined in

[src/validate_pb.ts:676](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L676)

___

### gt

• `Optional` **gt**: `number`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional uint32 gt = 4;

#### Defined in

[src/validate_pb.ts:701](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L701)

___

### gte

• `Optional` **gte**: `number`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional uint32 gte = 5;

#### Defined in

[src/validate_pb.ts:710](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L710)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/validate_pb.ts:734](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L734)

___

### in

• **in**: `number`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated uint32 in = 6;

#### Defined in

[src/validate_pb.ts:718](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L718)

___

### lt

• `Optional` **lt**: `number`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional uint32 lt = 2;

#### Defined in

[src/validate_pb.ts:684](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L684)

___

### lte

• `Optional` **lte**: `number`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional uint32 lte = 3;

#### Defined in

[src/validate_pb.ts:692](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L692)

___

### notIn

• **notIn**: `number`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated uint32 not_in = 7;

#### Defined in

[src/validate_pb.ts:726](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L726)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/validate_pb.ts:743](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L743)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/validate_pb.ts:741](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L741)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"validate.UInt32Rules"``

#### Defined in

[src/validate_pb.ts:742](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L742)

## Methods

### clone

▸ **clone**(): [`UInt32Rules`](UInt32Rules.md)

Create a deep copy.

#### Returns

[`UInt32Rules`](UInt32Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`UInt32Rules`](UInt32Rules.md) \| `PlainMessage`<[`UInt32Rules`](UInt32Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UInt32Rules`](UInt32Rules.md)

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

[`UInt32Rules`](UInt32Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UInt32Rules`](UInt32Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt32Rules`](UInt32Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UInt32Rules`](UInt32Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt32Rules`](UInt32Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UInt32Rules`](UInt32Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UInt32Rules`](UInt32Rules.md)\>

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
| `a` | `undefined` \| [`UInt32Rules`](UInt32Rules.md) \| `PlainMessage`<[`UInt32Rules`](UInt32Rules.md)\> |
| `b` | `undefined` \| [`UInt32Rules`](UInt32Rules.md) \| `PlainMessage`<[`UInt32Rules`](UInt32Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/validate_pb.ts:766](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L766)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UInt32Rules`](UInt32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UInt32Rules`](UInt32Rules.md)

#### Defined in

[src/validate_pb.ts:754](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L754)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UInt32Rules`](UInt32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt32Rules`](UInt32Rules.md)

#### Defined in

[src/validate_pb.ts:758](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L758)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UInt32Rules`](UInt32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt32Rules`](UInt32Rules.md)

#### Defined in

[src/validate_pb.ts:762](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/validate_pb.ts#L762)
