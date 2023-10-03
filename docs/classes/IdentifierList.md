[tcubesa-sdk](../README.md) / [Exports](../modules.md) / IdentifierList

# Class: IdentifierList

Describes the list of UUID identifiers

**`Generated`**

from message tcube.IdentifierList

## Hierarchy

- `Message`<[`IdentifierList`](IdentifierList.md)\>

  ↳ **`IdentifierList`**

## Table of contents

### Constructors

- [constructor](IdentifierList.md#constructor)

### Properties

- [list](IdentifierList.md#list)
- [fields](IdentifierList.md#fields)
- [runtime](IdentifierList.md#runtime)
- [typeName](IdentifierList.md#typename)

### Methods

- [clone](IdentifierList.md#clone)
- [equals](IdentifierList.md#equals)
- [fromBinary](IdentifierList.md#frombinary)
- [fromJson](IdentifierList.md#fromjson)
- [fromJsonString](IdentifierList.md#fromjsonstring)
- [getType](IdentifierList.md#gettype)
- [toBinary](IdentifierList.md#tobinary)
- [toJSON](IdentifierList.md#tojson)
- [toJson](IdentifierList.md#tojson-1)
- [toJsonString](IdentifierList.md#tojsonstring)
- [equals](IdentifierList.md#equals-1)
- [fromBinary](IdentifierList.md#frombinary-1)
- [fromJson](IdentifierList.md#fromjson-1)
- [fromJsonString](IdentifierList.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`IdentifierList`](IdentifierList.md)\> |

#### Overrides

Message&lt;IdentifierList\&gt;.constructor

#### Defined in

[src/base_pb.ts:1012](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1012)

## Properties

### list

• **list**: [`Identifier`](Identifier.md)[] = `[]`

List of UUIDs

**`Generated`**

from field: repeated tcube.Identifier list = 1;

#### Defined in

[src/base_pb.ts:1010](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1010)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1019](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1019)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1017](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1017)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.IdentifierList"``

#### Defined in

[src/base_pb.ts:1018](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1018)

## Methods

### clone

▸ **clone**(): [`IdentifierList`](IdentifierList.md)

Create a deep copy.

#### Returns

[`IdentifierList`](IdentifierList.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierList`](IdentifierList.md) \| `PlainMessage`<[`IdentifierList`](IdentifierList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierList`](IdentifierList.md)

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

[`IdentifierList`](IdentifierList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierList`](IdentifierList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierList`](IdentifierList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierList`](IdentifierList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierList`](IdentifierList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`IdentifierList`](IdentifierList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`IdentifierList`](IdentifierList.md)\>

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
| `a` | `undefined` \| [`IdentifierList`](IdentifierList.md) \| `PlainMessage`<[`IdentifierList`](IdentifierList.md)\> |
| `b` | `undefined` \| [`IdentifierList`](IdentifierList.md) \| `PlainMessage`<[`IdentifierList`](IdentifierList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1035](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1035)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`IdentifierList`](IdentifierList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`IdentifierList`](IdentifierList.md)

#### Defined in

[src/base_pb.ts:1023](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1023)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`IdentifierList`](IdentifierList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierList`](IdentifierList.md)

#### Defined in

[src/base_pb.ts:1027](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1027)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`IdentifierList`](IdentifierList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`IdentifierList`](IdentifierList.md)

#### Defined in

[src/base_pb.ts:1031](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L1031)
