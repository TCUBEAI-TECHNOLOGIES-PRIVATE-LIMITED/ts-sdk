[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceStateAndCountMessageList

# Class: SerialsServiceStateAndCountMessageList

Describes the response that consists of the list of all the states and the counts of serials in the respective states

**`Generated`**

from message scanswift.SerialsServiceStateAndCountMessageList

## Hierarchy

- `Message`<[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)\>

  ↳ **`SerialsServiceStateAndCountMessageList`**

## Table of contents

### Constructors

- [constructor](SerialsServiceStateAndCountMessageList.md#constructor)

### Properties

- [list](SerialsServiceStateAndCountMessageList.md#list)
- [fields](SerialsServiceStateAndCountMessageList.md#fields)
- [runtime](SerialsServiceStateAndCountMessageList.md#runtime)
- [typeName](SerialsServiceStateAndCountMessageList.md#typename)

### Methods

- [clone](SerialsServiceStateAndCountMessageList.md#clone)
- [equals](SerialsServiceStateAndCountMessageList.md#equals)
- [fromBinary](SerialsServiceStateAndCountMessageList.md#frombinary)
- [fromJson](SerialsServiceStateAndCountMessageList.md#fromjson)
- [fromJsonString](SerialsServiceStateAndCountMessageList.md#fromjsonstring)
- [getType](SerialsServiceStateAndCountMessageList.md#gettype)
- [toBinary](SerialsServiceStateAndCountMessageList.md#tobinary)
- [toJSON](SerialsServiceStateAndCountMessageList.md#tojson)
- [toJson](SerialsServiceStateAndCountMessageList.md#tojson-1)
- [toJsonString](SerialsServiceStateAndCountMessageList.md#tojsonstring)
- [equals](SerialsServiceStateAndCountMessageList.md#equals-1)
- [fromBinary](SerialsServiceStateAndCountMessageList.md#frombinary-1)
- [fromJson](SerialsServiceStateAndCountMessageList.md#fromjson-1)
- [fromJsonString](SerialsServiceStateAndCountMessageList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceStateAndCountMessageList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)\> |

#### Overrides

Message&lt;SerialsServiceStateAndCountMessageList\&gt;.constructor

#### Defined in

[src/serials_pb.ts:1390](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1390)

## Properties

### list

• **list**: [`SerialsServiceStateAndCountMessage`](SerialsServiceStateAndCountMessage.md)[] = `[]`

The list of states and the counts

**`Generated`**

from field: repeated scanswift.SerialsServiceStateAndCountMessage list = 1;

#### Defined in

[src/serials_pb.ts:1388](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1388)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:1397](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1397)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:1395](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1395)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsServiceStateAndCountMessageList"``

#### Defined in

[src/serials_pb.ts:1396](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1396)

## Methods

### clone

▸ **clone**(): [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

Create a deep copy.

#### Returns

[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md) \| `PlainMessage`<[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

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

[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)\>

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
| `a` | `undefined` \| [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md) \| `PlainMessage`<[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)\> |
| `b` | `undefined` \| [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md) \| `PlainMessage`<[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:1413](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1413)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Defined in

[src/serials_pb.ts:1401](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1401)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Defined in

[src/serials_pb.ts:1405](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1405)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceStateAndCountMessageList`](SerialsServiceStateAndCountMessageList.md)

#### Defined in

[src/serials_pb.ts:1409](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1409)
