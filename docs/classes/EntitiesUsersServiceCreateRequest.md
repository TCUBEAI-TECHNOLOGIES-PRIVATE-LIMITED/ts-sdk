[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesUsersServiceCreateRequest

# Class: EntitiesUsersServiceCreateRequest

Describes the necessary data structure during creation of an entity user

**`Generated`**

from message tcube.EntitiesUsersServiceCreateRequest

## Hierarchy

- `Message`<[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)\>

  ↳ **`EntitiesUsersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EntitiesUsersServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](EntitiesUsersServiceCreateRequest.md#entityuuid)
- [roleUuid](EntitiesUsersServiceCreateRequest.md#roleuuid)
- [userComment](EntitiesUsersServiceCreateRequest.md#usercomment)
- [userUuid](EntitiesUsersServiceCreateRequest.md#useruuid)
- [fields](EntitiesUsersServiceCreateRequest.md#fields)
- [runtime](EntitiesUsersServiceCreateRequest.md#runtime)
- [typeName](EntitiesUsersServiceCreateRequest.md#typename)

### Methods

- [clone](EntitiesUsersServiceCreateRequest.md#clone)
- [equals](EntitiesUsersServiceCreateRequest.md#equals)
- [fromBinary](EntitiesUsersServiceCreateRequest.md#frombinary)
- [fromJson](EntitiesUsersServiceCreateRequest.md#fromjson)
- [fromJsonString](EntitiesUsersServiceCreateRequest.md#fromjsonstring)
- [getType](EntitiesUsersServiceCreateRequest.md#gettype)
- [toBinary](EntitiesUsersServiceCreateRequest.md#tobinary)
- [toJSON](EntitiesUsersServiceCreateRequest.md#tojson)
- [toJson](EntitiesUsersServiceCreateRequest.md#tojson-1)
- [toJsonString](EntitiesUsersServiceCreateRequest.md#tojsonstring)
- [equals](EntitiesUsersServiceCreateRequest.md#equals-1)
- [fromBinary](EntitiesUsersServiceCreateRequest.md#frombinary-1)
- [fromJson](EntitiesUsersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EntitiesUsersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesUsersServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)\> |

#### Overrides

Message&lt;EntitiesUsersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:80](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L80)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/entities_users_pb.ts:64](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L64)

___

### roleUuid

• **roleUuid**: `string` = `""`

UUID of the associated role

**`Generated`**

from field: string role_uuid = 11;

#### Defined in

[src/entities_users_pb.ts:78](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L78)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/entities_users_pb.ts:57](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L57)

___

### userUuid

• **userUuid**: `string` = `""`

UUID of the user registered as the entity user

**`Generated`**

from field: string user_uuid = 10;

#### Defined in

[src/entities_users_pb.ts:71](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L71)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:87](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L87)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:85](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L85)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesUsersServiceCreateRequest"``

#### Defined in

[src/entities_users_pb.ts:86](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L86)

## Methods

### clone

▸ **clone**(): [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md) \| `PlainMessage`<[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

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

[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md) \| `PlainMessage`<[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md) \| `PlainMessage`<[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:106](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L106)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Defined in

[src/entities_users_pb.ts:94](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L94)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Defined in

[src/entities_users_pb.ts:98](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L98)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceCreateRequest`](EntitiesUsersServiceCreateRequest.md)

#### Defined in

[src/entities_users_pb.ts:102](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L102)
