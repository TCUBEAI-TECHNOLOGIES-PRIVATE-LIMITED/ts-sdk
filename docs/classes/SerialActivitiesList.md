[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialActivitiesList

# Class: SerialActivitiesList

Describes the data structure that stores a list of serial activities

**`Generated`**

from message tcube.SerialActivitiesList

## Hierarchy

- `Message`<[`SerialActivitiesList`](SerialActivitiesList.md)\>

  ↳ **`SerialActivitiesList`**

## Table of contents

### Constructors

- [constructor](SerialActivitiesList.md#constructor)

### Properties

- [list](SerialActivitiesList.md#list)
- [fields](SerialActivitiesList.md#fields)
- [runtime](SerialActivitiesList.md#runtime)
- [typeName](SerialActivitiesList.md#typename)

### Methods

- [clone](SerialActivitiesList.md#clone)
- [equals](SerialActivitiesList.md#equals)
- [fromBinary](SerialActivitiesList.md#frombinary)
- [fromJson](SerialActivitiesList.md#fromjson)
- [fromJsonString](SerialActivitiesList.md#fromjsonstring)
- [getType](SerialActivitiesList.md#gettype)
- [toBinary](SerialActivitiesList.md#tobinary)
- [toJSON](SerialActivitiesList.md#tojson)
- [toJson](SerialActivitiesList.md#tojson-1)
- [toJsonString](SerialActivitiesList.md#tojsonstring)
- [equals](SerialActivitiesList.md#equals-1)
- [fromBinary](SerialActivitiesList.md#frombinary-1)
- [fromJson](SerialActivitiesList.md#fromjson-1)
- [fromJsonString](SerialActivitiesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialActivitiesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialActivitiesList`](SerialActivitiesList.md)\> |

#### Overrides

Message&lt;SerialActivitiesList\&gt;.constructor

#### Defined in

[src/serials_pb.ts:707](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L707)

## Properties

### list

• **list**: [`SerialActivity`](SerialActivity.md)[] = `[]`

List of serial activities

**`Generated`**

from field: repeated tcube.SerialActivity list = 1;

#### Defined in

[src/serials_pb.ts:705](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L705)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:714](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L714)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:712](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L712)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialActivitiesList"``

#### Defined in

[src/serials_pb.ts:713](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L713)

## Methods

### clone

▸ **clone**(): [`SerialActivitiesList`](SerialActivitiesList.md)

Create a deep copy.

#### Returns

[`SerialActivitiesList`](SerialActivitiesList.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialActivitiesList`](SerialActivitiesList.md) \| `PlainMessage`<[`SerialActivitiesList`](SerialActivitiesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialActivitiesList`](SerialActivitiesList.md)

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

[`SerialActivitiesList`](SerialActivitiesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialActivitiesList`](SerialActivitiesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivitiesList`](SerialActivitiesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialActivitiesList`](SerialActivitiesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivitiesList`](SerialActivitiesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialActivitiesList`](SerialActivitiesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialActivitiesList`](SerialActivitiesList.md)\>

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
| `a` | `undefined` \| [`SerialActivitiesList`](SerialActivitiesList.md) \| `PlainMessage`<[`SerialActivitiesList`](SerialActivitiesList.md)\> |
| `b` | `undefined` \| [`SerialActivitiesList`](SerialActivitiesList.md) \| `PlainMessage`<[`SerialActivitiesList`](SerialActivitiesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:730](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L730)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialActivitiesList`](SerialActivitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialActivitiesList`](SerialActivitiesList.md)

#### Defined in

[src/serials_pb.ts:718](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L718)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialActivitiesList`](SerialActivitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivitiesList`](SerialActivitiesList.md)

#### Defined in

[src/serials_pb.ts:722](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L722)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialActivitiesList`](SerialActivitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivitiesList`](SerialActivitiesList.md)

#### Defined in

[src/serials_pb.ts:726](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L726)
