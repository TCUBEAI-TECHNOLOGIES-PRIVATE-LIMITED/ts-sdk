[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesUsersServicePaginationReq

# Class: EntitiesUsersServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.EntitiesUsersServicePaginationReq

## Hierarchy

- `Message`<[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)\>

  ↳ **`EntitiesUsersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](EntitiesUsersServicePaginationReq.md#constructor)

### Properties

- [count](EntitiesUsersServicePaginationReq.md#count)
- [entityUuid](EntitiesUsersServicePaginationReq.md#entityuuid)
- [isActive](EntitiesUsersServicePaginationReq.md#isactive)
- [offset](EntitiesUsersServicePaginationReq.md#offset)
- [sortKey](EntitiesUsersServicePaginationReq.md#sortkey)
- [sortOrder](EntitiesUsersServicePaginationReq.md#sortorder)
- [fields](EntitiesUsersServicePaginationReq.md#fields)
- [runtime](EntitiesUsersServicePaginationReq.md#runtime)
- [typeName](EntitiesUsersServicePaginationReq.md#typename)

### Methods

- [clone](EntitiesUsersServicePaginationReq.md#clone)
- [equals](EntitiesUsersServicePaginationReq.md#equals)
- [fromBinary](EntitiesUsersServicePaginationReq.md#frombinary)
- [fromJson](EntitiesUsersServicePaginationReq.md#fromjson)
- [fromJsonString](EntitiesUsersServicePaginationReq.md#fromjsonstring)
- [getType](EntitiesUsersServicePaginationReq.md#gettype)
- [toBinary](EntitiesUsersServicePaginationReq.md#tobinary)
- [toJSON](EntitiesUsersServicePaginationReq.md#tojson)
- [toJson](EntitiesUsersServicePaginationReq.md#tojson-1)
- [toJsonString](EntitiesUsersServicePaginationReq.md#tojsonstring)
- [equals](EntitiesUsersServicePaginationReq.md#equals-1)
- [fromBinary](EntitiesUsersServicePaginationReq.md#frombinary-1)
- [fromJson](EntitiesUsersServicePaginationReq.md#fromjson-1)
- [fromJsonString](EntitiesUsersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesUsersServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)\> |

#### Overrides

Message&lt;EntitiesUsersServicePaginationReq\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:326](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L326)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/entities_users_pb.ts:296](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L296)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/entities_users_pb.ts:324](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L324)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/entities_users_pb.ts:289](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L289)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/entities_users_pb.ts:303](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L303)

___

### sortKey

• **sortKey**: [`ENTITY_USER_SORT_KEY`](../enums/ENTITY_USER_SORT_KEY.md) = `ENTITY_USER_SORT_KEY.ENTITY_USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.ENTITY_USER_SORT_KEY sort_key = 5;

#### Defined in

[src/entities_users_pb.ts:317](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L317)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/entities_users_pb.ts:310](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L310)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:333](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L333)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:331](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L331)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesUsersServicePaginationReq"``

#### Defined in

[src/entities_users_pb.ts:332](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L332)

## Methods

### clone

▸ **clone**(): [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md) \| `PlainMessage`<[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

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

[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md) \| `PlainMessage`<[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md) \| `PlainMessage`<[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:354](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L354)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Defined in

[src/entities_users_pb.ts:342](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L342)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Defined in

[src/entities_users_pb.ts:346](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L346)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServicePaginationReq`](EntitiesUsersServicePaginationReq.md)

#### Defined in

[src/entities_users_pb.ts:350](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L350)
