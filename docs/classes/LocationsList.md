[scanswift-sdk](../README.md) / [Exports](../modules.md) / LocationsList

# Class: LocationsList

Describes the data structure that stores a list of locations

**`Generated`**

from message scanswift.LocationsList

## Hierarchy

- `Message`<[`LocationsList`](LocationsList.md)\>

  ↳ **`LocationsList`**

## Table of contents

### Constructors

- [constructor](LocationsList.md#constructor)

### Properties

- [list](LocationsList.md#list)
- [fields](LocationsList.md#fields)
- [runtime](LocationsList.md#runtime)
- [typeName](LocationsList.md#typename)

### Methods

- [clone](LocationsList.md#clone)
- [equals](LocationsList.md#equals)
- [fromBinary](LocationsList.md#frombinary)
- [fromJson](LocationsList.md#fromjson)
- [fromJsonString](LocationsList.md#fromjsonstring)
- [getType](LocationsList.md#gettype)
- [toBinary](LocationsList.md#tobinary)
- [toJSON](LocationsList.md#tojson)
- [toJson](LocationsList.md#tojson-1)
- [toJsonString](LocationsList.md#tojsonstring)
- [equals](LocationsList.md#equals-1)
- [fromBinary](LocationsList.md#frombinary-1)
- [fromJson](LocationsList.md#fromjson-1)
- [fromJsonString](LocationsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LocationsList`](LocationsList.md)\> |

#### Overrides

Message&lt;LocationsList\&gt;.constructor

#### Defined in

[src/locations_pb.ts:297](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L297)

## Properties

### list

• **list**: [`Location`](Location.md)[] = `[]`

List of locations

**`Generated`**

from field: repeated scanswift.Location list = 1;

#### Defined in

[src/locations_pb.ts:295](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L295)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:304](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L304)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:302](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L302)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.LocationsList"``

#### Defined in

[src/locations_pb.ts:303](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L303)

## Methods

### clone

▸ **clone**(): [`LocationsList`](LocationsList.md)

Create a deep copy.

#### Returns

[`LocationsList`](LocationsList.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsList`](LocationsList.md) \| `PlainMessage`<[`LocationsList`](LocationsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsList`](LocationsList.md)

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

[`LocationsList`](LocationsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsList`](LocationsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsList`](LocationsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LocationsList`](LocationsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LocationsList`](LocationsList.md)\>

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
| `a` | `undefined` \| [`LocationsList`](LocationsList.md) \| `PlainMessage`<[`LocationsList`](LocationsList.md)\> |
| `b` | `undefined` \| [`LocationsList`](LocationsList.md) \| `PlainMessage`<[`LocationsList`](LocationsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:320](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L320)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LocationsList`](LocationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Defined in

[src/locations_pb.ts:308](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L308)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LocationsList`](LocationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Defined in

[src/locations_pb.ts:312](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L312)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LocationsList`](LocationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsList`](LocationsList.md)

#### Defined in

[src/locations_pb.ts:316](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L316)
