[tcubesa-sdk](../README.md) / [Exports](../modules.md) / Location

# Class: Location

Describes the data structure of each location on the platform

**`Generated`**

from message tcube.Location

## Hierarchy

- `Message`<[`Location`](Location.md)\>

  ↳ **`Location`**

## Table of contents

### Constructors

- [constructor](Location.md#constructor)

### Properties

- [code](Location.md#code)
- [description](Location.md#description)
- [entityUuid](Location.md#entityuuid)
- [metadata](Location.md#metadata)
- [name](Location.md#name)
- [fields](Location.md#fields)
- [runtime](Location.md#runtime)
- [typeName](Location.md#typename)

### Methods

- [clone](Location.md#clone)
- [equals](Location.md#equals)
- [fromBinary](Location.md#frombinary)
- [fromJson](Location.md#fromjson)
- [fromJsonString](Location.md#fromjsonstring)
- [getType](Location.md#gettype)
- [toBinary](Location.md#tobinary)
- [toJSON](Location.md#tojson)
- [toJson](Location.md#tojson-1)
- [toJsonString](Location.md#tojsonstring)
- [equals](Location.md#equals-1)
- [fromBinary](Location.md#frombinary-1)
- [fromJson](Location.md#fromjson-1)
- [fromJsonString](Location.md#fromjsonstring-1)

## Constructors

### constructor

• **new Location**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Location`](Location.md)\> |

#### Overrides

Message&lt;Location\&gt;.constructor

#### Defined in

[src/locations_pb.ts:251](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L251)

## Properties

### code

• **code**: `string` = `""`

Code of the location

**`Generated`**

from field: string code = 11;

#### Defined in

[src/locations_pb.ts:242](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L242)

___

### description

• **description**: `string` = `""`

Description of the location

**`Generated`**

from field: string description = 12;

#### Defined in

[src/locations_pb.ts:249](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L249)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/locations_pb.ts:228](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L228)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/locations_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L221)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 10;

#### Defined in

[src/locations_pb.ts:235](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L235)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:258](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L258)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:256](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L256)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.Location"``

#### Defined in

[src/locations_pb.ts:257](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L257)

## Methods

### clone

▸ **clone**(): [`Location`](Location.md)

Create a deep copy.

#### Returns

[`Location`](Location.md)

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
| `other` | `undefined` \| ``null`` \| [`Location`](Location.md) \| `PlainMessage`<[`Location`](Location.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Location`](Location.md)

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

[`Location`](Location.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Location`](Location.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Location`](Location.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Location`](Location.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Location`](Location.md)\>

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
| `a` | `undefined` \| [`Location`](Location.md) \| `PlainMessage`<[`Location`](Location.md)\> |
| `b` | `undefined` \| [`Location`](Location.md) \| `PlainMessage`<[`Location`](Location.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:278](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L278)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Defined in

[src/locations_pb.ts:266](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L266)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Defined in

[src/locations_pb.ts:270](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L270)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Defined in

[src/locations_pb.ts:274](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/locations_pb.ts#L274)
