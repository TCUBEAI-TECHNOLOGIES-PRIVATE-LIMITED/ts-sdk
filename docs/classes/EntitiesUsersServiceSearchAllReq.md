[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesUsersServiceSearchAllReq

# Class: EntitiesUsersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.EntitiesUsersServiceSearchAllReq

## Hierarchy

- `Message`<[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)\>

  ↳ **`EntitiesUsersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](EntitiesUsersServiceSearchAllReq.md#constructor)

### Properties

- [count](EntitiesUsersServiceSearchAllReq.md#count)
- [entityUuid](EntitiesUsersServiceSearchAllReq.md#entityuuid)
- [isActive](EntitiesUsersServiceSearchAllReq.md#isactive)
- [offset](EntitiesUsersServiceSearchAllReq.md#offset)
- [searchKey](EntitiesUsersServiceSearchAllReq.md#searchkey)
- [sortKey](EntitiesUsersServiceSearchAllReq.md#sortkey)
- [sortOrder](EntitiesUsersServiceSearchAllReq.md#sortorder)
- [fields](EntitiesUsersServiceSearchAllReq.md#fields)
- [runtime](EntitiesUsersServiceSearchAllReq.md#runtime)
- [typeName](EntitiesUsersServiceSearchAllReq.md#typename)

### Methods

- [clone](EntitiesUsersServiceSearchAllReq.md#clone)
- [equals](EntitiesUsersServiceSearchAllReq.md#equals)
- [fromBinary](EntitiesUsersServiceSearchAllReq.md#frombinary)
- [fromJson](EntitiesUsersServiceSearchAllReq.md#fromjson)
- [fromJsonString](EntitiesUsersServiceSearchAllReq.md#fromjsonstring)
- [getType](EntitiesUsersServiceSearchAllReq.md#gettype)
- [toBinary](EntitiesUsersServiceSearchAllReq.md#tobinary)
- [toJSON](EntitiesUsersServiceSearchAllReq.md#tojson)
- [toJson](EntitiesUsersServiceSearchAllReq.md#tojson-1)
- [toJsonString](EntitiesUsersServiceSearchAllReq.md#tojsonstring)
- [equals](EntitiesUsersServiceSearchAllReq.md#equals-1)
- [fromBinary](EntitiesUsersServiceSearchAllReq.md#frombinary-1)
- [fromJson](EntitiesUsersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](EntitiesUsersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesUsersServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;EntitiesUsersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:587](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L587)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/entities_users_pb.ts:550](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L550)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/entities_users_pb.ts:578](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L578)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/entities_users_pb.ts:543](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L543)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/entities_users_pb.ts:557](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L557)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/entities_users_pb.ts:585](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L585)

___

### sortKey

• **sortKey**: [`ENTITY_USER_SORT_KEY`](../enums/ENTITY_USER_SORT_KEY.md) = `ENTITY_USER_SORT_KEY.ENTITY_USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.ENTITY_USER_SORT_KEY sort_key = 5;

#### Defined in

[src/entities_users_pb.ts:571](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L571)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/entities_users_pb.ts:564](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L564)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:594](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L594)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:592](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L592)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesUsersServiceSearchAllReq"``

#### Defined in

[src/entities_users_pb.ts:593](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L593)

## Methods

### clone

▸ **clone**(): [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md) \| `PlainMessage`<[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

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

[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md) \| `PlainMessage`<[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md) \| `PlainMessage`<[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:616](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L616)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Defined in

[src/entities_users_pb.ts:604](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L604)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Defined in

[src/entities_users_pb.ts:608](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L608)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceSearchAllReq`](EntitiesUsersServiceSearchAllReq.md)

#### Defined in

[src/entities_users_pb.ts:612](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_users_pb.ts#L612)
