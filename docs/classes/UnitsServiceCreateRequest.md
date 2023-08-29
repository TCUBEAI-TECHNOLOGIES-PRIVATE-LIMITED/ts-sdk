[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UnitsServiceCreateRequest

# Class: UnitsServiceCreateRequest

Describes the necessary data structure during creation of a unit

**`Generated`**

from message tcube.UnitsServiceCreateRequest

## Hierarchy

- `Message`<[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)\>

  ↳ **`UnitsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](UnitsServiceCreateRequest.md#constructor)

### Properties

- [code](UnitsServiceCreateRequest.md#code)
- [description](UnitsServiceCreateRequest.md#description)
- [name](UnitsServiceCreateRequest.md#name)
- [userComment](UnitsServiceCreateRequest.md#usercomment)
- [fields](UnitsServiceCreateRequest.md#fields)
- [runtime](UnitsServiceCreateRequest.md#runtime)
- [typeName](UnitsServiceCreateRequest.md#typename)

### Methods

- [clone](UnitsServiceCreateRequest.md#clone)
- [equals](UnitsServiceCreateRequest.md#equals)
- [fromBinary](UnitsServiceCreateRequest.md#frombinary)
- [fromJson](UnitsServiceCreateRequest.md#fromjson)
- [fromJsonString](UnitsServiceCreateRequest.md#fromjsonstring)
- [getType](UnitsServiceCreateRequest.md#gettype)
- [toBinary](UnitsServiceCreateRequest.md#tobinary)
- [toJSON](UnitsServiceCreateRequest.md#tojson)
- [toJson](UnitsServiceCreateRequest.md#tojson-1)
- [toJsonString](UnitsServiceCreateRequest.md#tojsonstring)
- [equals](UnitsServiceCreateRequest.md#equals-1)
- [fromBinary](UnitsServiceCreateRequest.md#frombinary-1)
- [fromJson](UnitsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](UnitsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;UnitsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/units_pb.ts:96](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L96)

## Properties

### code

• **code**: `string` = `""`

Code of the unit

**`Generated`**

from field: string code = 11;

#### Defined in

[src/units_pb.ts:87](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L87)

___

### description

• **description**: `string` = `""`

Description of the unit

**`Generated`**

from field: string description = 12;

#### Defined in

[src/units_pb.ts:94](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L94)

___

### name

• **name**: `string` = `""`

The name of the unit

**`Generated`**

from field: string name = 10;

#### Defined in

[src/units_pb.ts:80](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L80)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/units_pb.ts:73](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L73)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_pb.ts:103](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L103)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_pb.ts:101](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L101)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UnitsServiceCreateRequest"``

#### Defined in

[src/units_pb.ts:102](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L102)

## Methods

### clone

▸ **clone**(): [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md) \| `PlainMessage`<[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

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

[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md) \| `PlainMessage`<[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md) \| `PlainMessage`<[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_pb.ts:122](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L122)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Defined in

[src/units_pb.ts:110](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L110)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Defined in

[src/units_pb.ts:114](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L114)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceCreateRequest`](UnitsServiceCreateRequest.md)

#### Defined in

[src/units_pb.ts:118](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/units_pb.ts#L118)
