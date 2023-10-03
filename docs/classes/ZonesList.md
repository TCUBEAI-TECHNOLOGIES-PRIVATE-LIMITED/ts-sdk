[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ZonesList

# Class: ZonesList

Describes the data structure that stores a list of zones

**`Generated`**

from message tcube.ZonesList

## Hierarchy

- `Message`<[`ZonesList`](ZonesList.md)\>

  ↳ **`ZonesList`**

## Table of contents

### Constructors

- [constructor](ZonesList.md#constructor)

### Properties

- [list](ZonesList.md#list)
- [fields](ZonesList.md#fields)
- [runtime](ZonesList.md#runtime)
- [typeName](ZonesList.md#typename)

### Methods

- [clone](ZonesList.md#clone)
- [equals](ZonesList.md#equals)
- [fromBinary](ZonesList.md#frombinary)
- [fromJson](ZonesList.md#fromjson)
- [fromJsonString](ZonesList.md#fromjsonstring)
- [getType](ZonesList.md#gettype)
- [toBinary](ZonesList.md#tobinary)
- [toJSON](ZonesList.md#tojson)
- [toJson](ZonesList.md#tojson-1)
- [toJsonString](ZonesList.md#tojsonstring)
- [equals](ZonesList.md#equals-1)
- [fromBinary](ZonesList.md#frombinary-1)
- [fromJson](ZonesList.md#fromjson-1)
- [fromJsonString](ZonesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ZonesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ZonesList`](ZonesList.md)\> |

#### Overrides

Message&lt;ZonesList\&gt;.constructor

#### Defined in

[src/zones_pb.ts:380](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L380)

## Properties

### list

• **list**: [`Zone`](Zone.md)[] = `[]`

List of zones

**`Generated`**

from field: repeated tcube.Zone list = 1;

#### Defined in

[src/zones_pb.ts:378](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L378)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:387](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L387)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:385](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L385)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ZonesList"``

#### Defined in

[src/zones_pb.ts:386](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L386)

## Methods

### clone

▸ **clone**(): [`ZonesList`](ZonesList.md)

Create a deep copy.

#### Returns

[`ZonesList`](ZonesList.md)

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
| `other` | `undefined` \| ``null`` \| [`ZonesList`](ZonesList.md) \| `PlainMessage`<[`ZonesList`](ZonesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ZonesList`](ZonesList.md)

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

[`ZonesList`](ZonesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ZonesList`](ZonesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesList`](ZonesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ZonesList`](ZonesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesList`](ZonesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ZonesList`](ZonesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ZonesList`](ZonesList.md)\>

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
| `a` | `undefined` \| [`ZonesList`](ZonesList.md) \| `PlainMessage`<[`ZonesList`](ZonesList.md)\> |
| `b` | `undefined` \| [`ZonesList`](ZonesList.md) \| `PlainMessage`<[`ZonesList`](ZonesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:403](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L403)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ZonesList`](ZonesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ZonesList`](ZonesList.md)

#### Defined in

[src/zones_pb.ts:391](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L391)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ZonesList`](ZonesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesList`](ZonesList.md)

#### Defined in

[src/zones_pb.ts:395](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L395)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ZonesList`](ZonesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesList`](ZonesList.md)

#### Defined in

[src/zones_pb.ts:399](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L399)
