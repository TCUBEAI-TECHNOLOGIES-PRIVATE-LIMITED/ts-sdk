[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PackagingsSerialsList

# Class: PackagingsSerialsList

Describes the data structure that stores a list of packaging serials

**`Generated`**

from message tcube.PackagingsSerialsList

## Hierarchy

- `Message`<[`PackagingsSerialsList`](PackagingsSerialsList.md)\>

  ↳ **`PackagingsSerialsList`**

## Table of contents

### Constructors

- [constructor](PackagingsSerialsList.md#constructor)

### Properties

- [list](PackagingsSerialsList.md#list)
- [fields](PackagingsSerialsList.md#fields)
- [runtime](PackagingsSerialsList.md#runtime)
- [typeName](PackagingsSerialsList.md#typename)

### Methods

- [clone](PackagingsSerialsList.md#clone)
- [equals](PackagingsSerialsList.md#equals)
- [fromBinary](PackagingsSerialsList.md#frombinary)
- [fromJson](PackagingsSerialsList.md#fromjson)
- [fromJsonString](PackagingsSerialsList.md#fromjsonstring)
- [getType](PackagingsSerialsList.md#gettype)
- [toBinary](PackagingsSerialsList.md#tobinary)
- [toJSON](PackagingsSerialsList.md#tojson)
- [toJson](PackagingsSerialsList.md#tojson-1)
- [toJsonString](PackagingsSerialsList.md#tojsonstring)
- [equals](PackagingsSerialsList.md#equals-1)
- [fromBinary](PackagingsSerialsList.md#frombinary-1)
- [fromJson](PackagingsSerialsList.md#fromjson-1)
- [fromJsonString](PackagingsSerialsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsSerialsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsSerialsList`](PackagingsSerialsList.md)\> |

#### Overrides

Message&lt;PackagingsSerialsList\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:644](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L644)

## Properties

### list

• **list**: [`PackagingSerial`](PackagingSerial.md)[] = `[]`

List of serials that are associated with the packaging

**`Generated`**

from field: repeated tcube.PackagingSerial list = 1;

#### Defined in

[src/packagings_pb.ts:642](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L642)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:651](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L651)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:649](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L649)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PackagingsSerialsList"``

#### Defined in

[src/packagings_pb.ts:650](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L650)

## Methods

### clone

▸ **clone**(): [`PackagingsSerialsList`](PackagingsSerialsList.md)

Create a deep copy.

#### Returns

[`PackagingsSerialsList`](PackagingsSerialsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsSerialsList`](PackagingsSerialsList.md) \| `PlainMessage`<[`PackagingsSerialsList`](PackagingsSerialsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsSerialsList`](PackagingsSerialsList.md)

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

[`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsSerialsList`](PackagingsSerialsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsSerialsList`](PackagingsSerialsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsSerialsList`](PackagingsSerialsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsSerialsList`](PackagingsSerialsList.md)\>

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
| `a` | `undefined` \| [`PackagingsSerialsList`](PackagingsSerialsList.md) \| `PlainMessage`<[`PackagingsSerialsList`](PackagingsSerialsList.md)\> |
| `b` | `undefined` \| [`PackagingsSerialsList`](PackagingsSerialsList.md) \| `PlainMessage`<[`PackagingsSerialsList`](PackagingsSerialsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:667](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L667)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Defined in

[src/packagings_pb.ts:655](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L655)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Defined in

[src/packagings_pb.ts:659](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L659)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsSerialsList`](PackagingsSerialsList.md)

#### Defined in

[src/packagings_pb.ts:663](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L663)
