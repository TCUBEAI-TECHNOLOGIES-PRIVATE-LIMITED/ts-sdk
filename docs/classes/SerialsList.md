[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsList

# Class: SerialsList

Describes the data structure that stores a list of serials

**`Generated`**

from message tcube.SerialsList

## Hierarchy

- `Message`<[`SerialsList`](SerialsList.md)\>

  ↳ **`SerialsList`**

## Table of contents

### Constructors

- [constructor](SerialsList.md#constructor)

### Properties

- [list](SerialsList.md#list)
- [fields](SerialsList.md#fields)
- [runtime](SerialsList.md#runtime)
- [typeName](SerialsList.md#typename)

### Methods

- [clone](SerialsList.md#clone)
- [equals](SerialsList.md#equals)
- [fromBinary](SerialsList.md#frombinary)
- [fromJson](SerialsList.md#fromjson)
- [fromJsonString](SerialsList.md#fromjsonstring)
- [getType](SerialsList.md#gettype)
- [toBinary](SerialsList.md#tobinary)
- [toJSON](SerialsList.md#tojson)
- [toJson](SerialsList.md#tojson-1)
- [toJsonString](SerialsList.md#tojsonstring)
- [equals](SerialsList.md#equals-1)
- [fromBinary](SerialsList.md#frombinary-1)
- [fromJson](SerialsList.md#fromjson-1)
- [fromJsonString](SerialsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsList`](SerialsList.md)\> |

#### Overrides

Message&lt;SerialsList\&gt;.constructor

#### Defined in

[src/serials_pb.ts:567](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L567)

## Properties

### list

• **list**: [`Serial`](Serial.md)[] = `[]`

List of serials

**`Generated`**

from field: repeated tcube.Serial list = 1;

#### Defined in

[src/serials_pb.ts:565](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L565)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:574](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L574)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:572](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L572)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsList"``

#### Defined in

[src/serials_pb.ts:573](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L573)

## Methods

### clone

▸ **clone**(): [`SerialsList`](SerialsList.md)

Create a deep copy.

#### Returns

[`SerialsList`](SerialsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsList`](SerialsList.md) \| `PlainMessage`<[`SerialsList`](SerialsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsList`](SerialsList.md)

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

[`SerialsList`](SerialsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsList`](SerialsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsList`](SerialsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsList`](SerialsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsList`](SerialsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsList`](SerialsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsList`](SerialsList.md)\>

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
| `a` | `undefined` \| [`SerialsList`](SerialsList.md) \| `PlainMessage`<[`SerialsList`](SerialsList.md)\> |
| `b` | `undefined` \| [`SerialsList`](SerialsList.md) \| `PlainMessage`<[`SerialsList`](SerialsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:590](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L590)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsList`](SerialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsList`](SerialsList.md)

#### Defined in

[src/serials_pb.ts:578](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L578)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsList`](SerialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsList`](SerialsList.md)

#### Defined in

[src/serials_pb.ts:582](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L582)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsList`](SerialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsList`](SerialsList.md)

#### Defined in

[src/serials_pb.ts:586](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L586)
