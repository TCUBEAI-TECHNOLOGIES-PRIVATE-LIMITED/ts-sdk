[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UnitsServiceUpdateRequest

# Class: UnitsServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a unit

**`Generated`**

from message tcube.UnitsServiceUpdateRequest

## Hierarchy

- `Message`<[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)\>

  ↳ **`UnitsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](UnitsServiceUpdateRequest.md#constructor)

### Properties

- [code](UnitsServiceUpdateRequest.md#code)
- [description](UnitsServiceUpdateRequest.md#description)
- [name](UnitsServiceUpdateRequest.md#name)
- [userComment](UnitsServiceUpdateRequest.md#usercomment)
- [uuid](UnitsServiceUpdateRequest.md#uuid)
- [fields](UnitsServiceUpdateRequest.md#fields)
- [runtime](UnitsServiceUpdateRequest.md#runtime)
- [typeName](UnitsServiceUpdateRequest.md#typename)

### Methods

- [clone](UnitsServiceUpdateRequest.md#clone)
- [equals](UnitsServiceUpdateRequest.md#equals)
- [fromBinary](UnitsServiceUpdateRequest.md#frombinary)
- [fromJson](UnitsServiceUpdateRequest.md#fromjson)
- [fromJsonString](UnitsServiceUpdateRequest.md#fromjsonstring)
- [getType](UnitsServiceUpdateRequest.md#gettype)
- [toBinary](UnitsServiceUpdateRequest.md#tobinary)
- [toJSON](UnitsServiceUpdateRequest.md#tojson)
- [toJson](UnitsServiceUpdateRequest.md#tojson-1)
- [toJsonString](UnitsServiceUpdateRequest.md#tojsonstring)
- [equals](UnitsServiceUpdateRequest.md#equals-1)
- [fromBinary](UnitsServiceUpdateRequest.md#frombinary-1)
- [fromJson](UnitsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](UnitsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;UnitsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/units_pb.ts:169](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L169)

## Properties

### code

• **code**: `string` = `""`

Code of the unit

**`Generated`**

from field: string code = 11;

#### Defined in

[src/units_pb.ts:160](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L160)

___

### description

• **description**: `string` = `""`

Description of the unit

**`Generated`**

from field: string description = 12;

#### Defined in

[src/units_pb.ts:167](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L167)

___

### name

• **name**: `string` = `""`

The name of the unit

**`Generated`**

from field: string name = 10;

#### Defined in

[src/units_pb.ts:153](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L153)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/units_pb.ts:139](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L139)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/units_pb.ts:146](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L146)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_pb.ts:176](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L176)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_pb.ts:174](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L174)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UnitsServiceUpdateRequest"``

#### Defined in

[src/units_pb.ts:175](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L175)

## Methods

### clone

▸ **clone**(): [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md) \| `PlainMessage`<[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

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

[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md) \| `PlainMessage`<[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md) \| `PlainMessage`<[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_pb.ts:196](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L196)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Defined in

[src/units_pb.ts:184](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L184)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Defined in

[src/units_pb.ts:188](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L188)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceUpdateRequest`](UnitsServiceUpdateRequest.md)

#### Defined in

[src/units_pb.ts:192](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L192)
