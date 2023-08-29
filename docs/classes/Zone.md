[tcubesa-sdk](../README.md) / [Exports](../modules.md) / Zone

# Class: Zone

Describes the data structure of each zone on the platform

**`Generated`**

from message tcube.Zone

## Hierarchy

- `Message`<[`Zone`](Zone.md)\>

  ↳ **`Zone`**

## Table of contents

### Constructors

- [constructor](Zone.md#constructor)

### Properties

- [code](Zone.md#code)
- [description](Zone.md#description)
- [entityUuid](Zone.md#entityuuid)
- [locationUuid](Zone.md#locationuuid)
- [metadata](Zone.md#metadata)
- [name](Zone.md#name)
- [type](Zone.md#type)
- [fields](Zone.md#fields)
- [runtime](Zone.md#runtime)
- [typeName](Zone.md#typename)

### Methods

- [clone](Zone.md#clone)
- [equals](Zone.md#equals)
- [fromBinary](Zone.md#frombinary)
- [fromJson](Zone.md#fromjson)
- [fromJsonString](Zone.md#fromjsonstring)
- [getType](Zone.md#gettype)
- [toBinary](Zone.md#tobinary)
- [toJSON](Zone.md#tojson)
- [toJson](Zone.md#tojson-1)
- [toJsonString](Zone.md#tojsonstring)
- [equals](Zone.md#equals-1)
- [fromBinary](Zone.md#frombinary-1)
- [fromJson](Zone.md#fromjson-1)
- [fromJsonString](Zone.md#fromjsonstring-1)

## Constructors

### constructor

• **new Zone**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Zone`](Zone.md)\> |

#### Overrides

Message&lt;Zone\&gt;.constructor

#### Defined in

[src/zones_pb.ts:332](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L332)

## Properties

### code

• **code**: `string` = `""`

Code of the zone

**`Generated`**

from field: string code = 11;

#### Defined in

[src/zones_pb.ts:316](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L316)

___

### description

• **description**: `string` = `""`

Description of the zone

**`Generated`**

from field: string description = 12;

#### Defined in

[src/zones_pb.ts:323](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L323)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/zones_pb.ts:295](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L295)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/zones_pb.ts:302](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L302)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/zones_pb.ts:288](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L288)

___

### name

• **name**: `string` = `""`

The name of the zone

**`Generated`**

from field: string name = 10;

#### Defined in

[src/zones_pb.ts:309](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L309)

___

### type

• **type**: [`ZONE_TYPE`](../enums/ZONE_TYPE.md) = `ZONE_TYPE.ZONE_TYPE_ANY_UNSPECIFIED`

The type of the zone

**`Generated`**

from field: tcube.ZONE_TYPE type = 13;

#### Defined in

[src/zones_pb.ts:330](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L330)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:339](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L339)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:337](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L337)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.Zone"``

#### Defined in

[src/zones_pb.ts:338](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L338)

## Methods

### clone

▸ **clone**(): [`Zone`](Zone.md)

Create a deep copy.

#### Returns

[`Zone`](Zone.md)

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
| `other` | `undefined` \| ``null`` \| [`Zone`](Zone.md) \| `PlainMessage`<[`Zone`](Zone.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Zone`](Zone.md)

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

[`Zone`](Zone.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Zone`](Zone.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Zone`](Zone.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Zone`](Zone.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Zone`](Zone.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Zone`](Zone.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Zone`](Zone.md)\>

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
| `a` | `undefined` \| [`Zone`](Zone.md) \| `PlainMessage`<[`Zone`](Zone.md)\> |
| `b` | `undefined` \| [`Zone`](Zone.md) \| `PlainMessage`<[`Zone`](Zone.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:361](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L361)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Zone`](Zone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Zone`](Zone.md)

#### Defined in

[src/zones_pb.ts:349](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L349)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Zone`](Zone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Zone`](Zone.md)

#### Defined in

[src/zones_pb.ts:353](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L353)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Zone`](Zone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Zone`](Zone.md)

#### Defined in

[src/zones_pb.ts:357](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L357)
