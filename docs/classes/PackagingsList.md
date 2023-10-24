[scanswift-sdk](../README.md) / [Exports](../modules.md) / PackagingsList

# Class: PackagingsList

Describes the data structure that stores a list of packagings

**`Generated`**

from message scanswift.PackagingsList

## Hierarchy

- `Message`<[`PackagingsList`](PackagingsList.md)\>

  ↳ **`PackagingsList`**

## Table of contents

### Constructors

- [constructor](PackagingsList.md#constructor)

### Properties

- [list](PackagingsList.md#list)
- [fields](PackagingsList.md#fields)
- [runtime](PackagingsList.md#runtime)
- [typeName](PackagingsList.md#typename)

### Methods

- [clone](PackagingsList.md#clone)
- [equals](PackagingsList.md#equals)
- [fromBinary](PackagingsList.md#frombinary)
- [fromJson](PackagingsList.md#fromjson)
- [fromJsonString](PackagingsList.md#fromjsonstring)
- [getType](PackagingsList.md#gettype)
- [toBinary](PackagingsList.md#tobinary)
- [toJSON](PackagingsList.md#tojson)
- [toJson](PackagingsList.md#tojson-1)
- [toJsonString](PackagingsList.md#tojsonstring)
- [equals](PackagingsList.md#equals-1)
- [fromBinary](PackagingsList.md#frombinary-1)
- [fromJson](PackagingsList.md#fromjson-1)
- [fromJsonString](PackagingsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsList`](PackagingsList.md)\> |

#### Overrides

Message&lt;PackagingsList\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:506](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L506)

## Properties

### list

• **list**: [`Packaging`](Packaging.md)[] = `[]`

List of packagings

**`Generated`**

from field: repeated scanswift.Packaging list = 1;

#### Defined in

[src/packagings_pb.ts:504](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L504)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:513](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L513)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:511](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L511)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PackagingsList"``

#### Defined in

[src/packagings_pb.ts:512](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L512)

## Methods

### clone

▸ **clone**(): [`PackagingsList`](PackagingsList.md)

Create a deep copy.

#### Returns

[`PackagingsList`](PackagingsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsList`](PackagingsList.md) \| `PlainMessage`<[`PackagingsList`](PackagingsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsList`](PackagingsList.md)

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

[`PackagingsList`](PackagingsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsList`](PackagingsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsList`](PackagingsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsList`](PackagingsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsList`](PackagingsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsList`](PackagingsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsList`](PackagingsList.md)\>

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
| `a` | `undefined` \| [`PackagingsList`](PackagingsList.md) \| `PlainMessage`<[`PackagingsList`](PackagingsList.md)\> |
| `b` | `undefined` \| [`PackagingsList`](PackagingsList.md) \| `PlainMessage`<[`PackagingsList`](PackagingsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:529](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L529)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsList`](PackagingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsList`](PackagingsList.md)

#### Defined in

[src/packagings_pb.ts:517](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L517)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsList`](PackagingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsList`](PackagingsList.md)

#### Defined in

[src/packagings_pb.ts:521](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L521)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsList`](PackagingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsList`](PackagingsList.md)

#### Defined in

[src/packagings_pb.ts:525](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L525)
