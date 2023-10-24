[scanswift-sdk](../README.md) / [Exports](../modules.md) / ActiveRequest

# Class: ActiveRequest

Describes the status of the records returned to a request

**`Generated`**

from message scanswift.ActiveRequest

## Hierarchy

- `Message`<[`ActiveRequest`](ActiveRequest.md)\>

  ↳ **`ActiveRequest`**

## Table of contents

### Constructors

- [constructor](ActiveRequest.md#constructor)

### Properties

- [isActive](ActiveRequest.md#isactive)
- [fields](ActiveRequest.md#fields)
- [runtime](ActiveRequest.md#runtime)
- [typeName](ActiveRequest.md#typename)

### Methods

- [clone](ActiveRequest.md#clone)
- [equals](ActiveRequest.md#equals)
- [fromBinary](ActiveRequest.md#frombinary)
- [fromJson](ActiveRequest.md#fromjson)
- [fromJsonString](ActiveRequest.md#fromjsonstring)
- [getType](ActiveRequest.md#gettype)
- [toBinary](ActiveRequest.md#tobinary)
- [toJSON](ActiveRequest.md#tojson)
- [toJson](ActiveRequest.md#tojson-1)
- [toJsonString](ActiveRequest.md#tojsonstring)
- [equals](ActiveRequest.md#equals-1)
- [fromBinary](ActiveRequest.md#frombinary-1)
- [fromJson](ActiveRequest.md#fromjson-1)
- [fromJsonString](ActiveRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActiveRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ActiveRequest`](ActiveRequest.md)\> |

#### Overrides

Message&lt;ActiveRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:497](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L497)

## Properties

### isActive

• **isActive**: `boolean` = `false`

Used in ViewAll procedural calls, to denote if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:495](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L495)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:504](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L504)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L502)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ActiveRequest"``

#### Defined in

[src/base_pb.ts:503](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L503)

## Methods

### clone

▸ **clone**(): [`ActiveRequest`](ActiveRequest.md)

Create a deep copy.

#### Returns

[`ActiveRequest`](ActiveRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActiveRequest`](ActiveRequest.md) \| `PlainMessage`<[`ActiveRequest`](ActiveRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActiveRequest`](ActiveRequest.md)

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

[`ActiveRequest`](ActiveRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActiveRequest`](ActiveRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveRequest`](ActiveRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActiveRequest`](ActiveRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveRequest`](ActiveRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ActiveRequest`](ActiveRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ActiveRequest`](ActiveRequest.md)\>

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
| `a` | `undefined` \| [`ActiveRequest`](ActiveRequest.md) \| `PlainMessage`<[`ActiveRequest`](ActiveRequest.md)\> |
| `b` | `undefined` \| [`ActiveRequest`](ActiveRequest.md) \| `PlainMessage`<[`ActiveRequest`](ActiveRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:520](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L520)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ActiveRequest`](ActiveRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ActiveRequest`](ActiveRequest.md)

#### Defined in

[src/base_pb.ts:508](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L508)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ActiveRequest`](ActiveRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveRequest`](ActiveRequest.md)

#### Defined in

[src/base_pb.ts:512](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L512)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ActiveRequest`](ActiveRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveRequest`](ActiveRequest.md)

#### Defined in

[src/base_pb.ts:516](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L516)
