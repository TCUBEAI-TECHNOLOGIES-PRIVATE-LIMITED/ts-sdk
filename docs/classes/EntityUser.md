[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntityUser

# Class: EntityUser

Describes the data structure of each entity user on the platform

**`Generated`**

from message tcube.EntityUser

## Hierarchy

- `Message`<[`EntityUser`](EntityUser.md)\>

  ↳ **`EntityUser`**

## Table of contents

### Constructors

- [constructor](EntityUser.md#constructor)

### Properties

- [entityUuid](EntityUser.md#entityuuid)
- [metadata](EntityUser.md#metadata)
- [roleUuid](EntityUser.md#roleuuid)
- [userUuid](EntityUser.md#useruuid)
- [fields](EntityUser.md#fields)
- [runtime](EntityUser.md#runtime)
- [typeName](EntityUser.md#typename)

### Methods

- [clone](EntityUser.md#clone)
- [equals](EntityUser.md#equals)
- [fromBinary](EntityUser.md#frombinary)
- [fromJson](EntityUser.md#fromjson)
- [fromJsonString](EntityUser.md#fromjsonstring)
- [getType](EntityUser.md#gettype)
- [toBinary](EntityUser.md#tobinary)
- [toJSON](EntityUser.md#tojson)
- [toJson](EntityUser.md#tojson-1)
- [toJsonString](EntityUser.md#tojsonstring)
- [equals](EntityUser.md#equals-1)
- [fromBinary](EntityUser.md#frombinary-1)
- [fromJson](EntityUser.md#fromjson-1)
- [fromJsonString](EntityUser.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntityUser**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntityUser`](EntityUser.md)\> |

#### Overrides

Message&lt;EntityUser\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:204](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L204)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/entities_users_pb.ts:188](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L188)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/entities_users_pb.ts:181](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L181)

___

### roleUuid

• **roleUuid**: `string` = `""`

UUID of the associated role

**`Generated`**

from field: string role_uuid = 11;

#### Defined in

[src/entities_users_pb.ts:202](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L202)

___

### userUuid

• **userUuid**: `string` = `""`

UUID of the user registered as the entity user

**`Generated`**

from field: string user_uuid = 10;

#### Defined in

[src/entities_users_pb.ts:195](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L195)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:211](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L211)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:209](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L209)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntityUser"``

#### Defined in

[src/entities_users_pb.ts:210](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L210)

## Methods

### clone

▸ **clone**(): [`EntityUser`](EntityUser.md)

Create a deep copy.

#### Returns

[`EntityUser`](EntityUser.md)

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
| `other` | `undefined` \| ``null`` \| [`EntityUser`](EntityUser.md) \| `PlainMessage`<[`EntityUser`](EntityUser.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntityUser`](EntityUser.md)

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

[`EntityUser`](EntityUser.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntityUser`](EntityUser.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUser`](EntityUser.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntityUser`](EntityUser.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUser`](EntityUser.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntityUser`](EntityUser.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntityUser`](EntityUser.md)\>

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
| `a` | `undefined` \| [`EntityUser`](EntityUser.md) \| `PlainMessage`<[`EntityUser`](EntityUser.md)\> |
| `b` | `undefined` \| [`EntityUser`](EntityUser.md) \| `PlainMessage`<[`EntityUser`](EntityUser.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:230](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L230)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntityUser`](EntityUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntityUser`](EntityUser.md)

#### Defined in

[src/entities_users_pb.ts:218](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L218)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntityUser`](EntityUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUser`](EntityUser.md)

#### Defined in

[src/entities_users_pb.ts:222](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L222)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntityUser`](EntityUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUser`](EntityUser.md)

#### Defined in

[src/entities_users_pb.ts:226](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L226)
