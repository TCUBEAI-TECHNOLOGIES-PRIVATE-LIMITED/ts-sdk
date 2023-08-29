[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesUsersServiceFilterReq

# Class: EntitiesUsersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.EntitiesUsersServiceFilterReq

## Hierarchy

- `Message`<[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)\>

  ↳ **`EntitiesUsersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EntitiesUsersServiceFilterReq.md#constructor)

### Properties

- [count](EntitiesUsersServiceFilterReq.md#count)
- [creationTimestampEnd](EntitiesUsersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EntitiesUsersServiceFilterReq.md#creationtimestampstart)
- [entityUuid](EntitiesUsersServiceFilterReq.md#entityuuid)
- [isActive](EntitiesUsersServiceFilterReq.md#isactive)
- [offset](EntitiesUsersServiceFilterReq.md#offset)
- [roleUuid](EntitiesUsersServiceFilterReq.md#roleuuid)
- [sortKey](EntitiesUsersServiceFilterReq.md#sortkey)
- [sortOrder](EntitiesUsersServiceFilterReq.md#sortorder)
- [userUuid](EntitiesUsersServiceFilterReq.md#useruuid)
- [fields](EntitiesUsersServiceFilterReq.md#fields)
- [runtime](EntitiesUsersServiceFilterReq.md#runtime)
- [typeName](EntitiesUsersServiceFilterReq.md#typename)

### Methods

- [clone](EntitiesUsersServiceFilterReq.md#clone)
- [equals](EntitiesUsersServiceFilterReq.md#equals)
- [fromBinary](EntitiesUsersServiceFilterReq.md#frombinary)
- [fromJson](EntitiesUsersServiceFilterReq.md#fromjson)
- [fromJsonString](EntitiesUsersServiceFilterReq.md#fromjsonstring)
- [getType](EntitiesUsersServiceFilterReq.md#gettype)
- [toBinary](EntitiesUsersServiceFilterReq.md#tobinary)
- [toJSON](EntitiesUsersServiceFilterReq.md#tojson)
- [toJson](EntitiesUsersServiceFilterReq.md#tojson-1)
- [toJsonString](EntitiesUsersServiceFilterReq.md#tojsonstring)
- [equals](EntitiesUsersServiceFilterReq.md#equals-1)
- [fromBinary](EntitiesUsersServiceFilterReq.md#frombinary-1)
- [fromJson](EntitiesUsersServiceFilterReq.md#fromjson-1)
- [fromJsonString](EntitiesUsersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesUsersServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)\> |

#### Overrides

Message&lt;EntitiesUsersServiceFilterReq\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:494](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L494)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/entities_users_pb.ts:436](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L436)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/entities_users_pb.ts:471](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L471)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/entities_users_pb.ts:464](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L464)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity (optional, since the consumer might need to fetch records on the basis of other records, irrespective of the entity)

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/entities_users_pb.ts:478](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L478)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/entities_users_pb.ts:429](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L429)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/entities_users_pb.ts:443](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L443)

___

### roleUuid

• **roleUuid**: `string` = `""`

UUID of the associated role

**`Generated`**

from field: string role_uuid = 21;

#### Defined in

[src/entities_users_pb.ts:492](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L492)

___

### sortKey

• **sortKey**: [`ENTITY_USER_SORT_KEY`](../enums/ENTITY_USER_SORT_KEY.md) = `ENTITY_USER_SORT_KEY.ENTITY_USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.ENTITY_USER_SORT_KEY sort_key = 5;

#### Defined in

[src/entities_users_pb.ts:457](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L457)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/entities_users_pb.ts:450](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L450)

___

### userUuid

• **userUuid**: `string` = `""`

UUID of the user registered as the entity user

**`Generated`**

from field: string user_uuid = 20;

#### Defined in

[src/entities_users_pb.ts:485](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L485)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:501](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L501)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:499](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L499)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesUsersServiceFilterReq"``

#### Defined in

[src/entities_users_pb.ts:500](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L500)

## Methods

### clone

▸ **clone**(): [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md) \| `PlainMessage`<[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

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

[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md) \| `PlainMessage`<[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md) \| `PlainMessage`<[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:526](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L526)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Defined in

[src/entities_users_pb.ts:514](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L514)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Defined in

[src/entities_users_pb.ts:518](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L518)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesUsersServiceFilterReq`](EntitiesUsersServiceFilterReq.md)

#### Defined in

[src/entities_users_pb.ts:522](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_users_pb.ts#L522)
