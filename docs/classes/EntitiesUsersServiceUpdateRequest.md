[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesUsersServiceUpdateRequest

# Class: EntitiesUsersServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on an entity user

**`Generated`**

from message tcube.EntitiesUsersServiceUpdateRequest

## Hierarchy

- `Message`<[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)\>

  ↳ **`EntitiesUsersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EntitiesUsersServiceUpdateRequest.md#constructor)

### Properties

- [roleUuid](EntitiesUsersServiceUpdateRequest.md#roleuuid)
- [userComment](EntitiesUsersServiceUpdateRequest.md#usercomment)
- [uuid](EntitiesUsersServiceUpdateRequest.md#uuid)
- [fields](EntitiesUsersServiceUpdateRequest.md#fields)
- [runtime](EntitiesUsersServiceUpdateRequest.md#runtime)
- [typeName](EntitiesUsersServiceUpdateRequest.md#typename)

### Methods

- [clone](EntitiesUsersServiceUpdateRequest.md#clone)
- [equals](EntitiesUsersServiceUpdateRequest.md#equals)
- [fromBinary](EntitiesUsersServiceUpdateRequest.md#frombinary)
- [fromJson](EntitiesUsersServiceUpdateRequest.md#fromjson)
- [fromJsonString](EntitiesUsersServiceUpdateRequest.md#fromjsonstring)
- [getType](EntitiesUsersServiceUpdateRequest.md#gettype)
- [toBinary](EntitiesUsersServiceUpdateRequest.md#tobinary)
- [toJSON](EntitiesUsersServiceUpdateRequest.md#tojson)
- [toJson](EntitiesUsersServiceUpdateRequest.md#tojson-1)
- [toJsonString](EntitiesUsersServiceUpdateRequest.md#tojsonstring)
- [equals](EntitiesUsersServiceUpdateRequest.md#equals-1)
- [fromBinary](EntitiesUsersServiceUpdateRequest.md#frombinary-1)
- [fromJson](EntitiesUsersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](EntitiesUsersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesUsersServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;EntitiesUsersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:139](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L139)

## Properties

### roleUuid

• **roleUuid**: `string` = `""`

UUID of the associated role

**`Generated`**

from field: string role_uuid = 11;

#### Defined in

[src/entities_users_pb.ts:137](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L137)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/entities_users_pb.ts:123](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L123)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/entities_users_pb.ts:130](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L130)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:146](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L146)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:144](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L144)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesUsersServiceUpdateRequest"``

#### Defined in

[src/entities_users_pb.ts:145](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L145)

## Methods

### clone

▸ **clone**(): [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md) \| `PlainMessage`<[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

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

[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md) \| `PlainMessage`<[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md) \| `PlainMessage`<[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:164](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L164)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Defined in

[src/entities_users_pb.ts:152](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L152)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Defined in

[src/entities_users_pb.ts:156](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L156)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceUpdateRequest`](EntitiesUsersServiceUpdateRequest.md)

#### Defined in

[src/entities_users_pb.ts:160](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L160)
