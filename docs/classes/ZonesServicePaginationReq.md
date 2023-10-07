[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ZonesServicePaginationReq

# Class: ZonesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.ZonesServicePaginationReq

## Hierarchy

- `Message`<[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)\>

  ↳ **`ZonesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ZonesServicePaginationReq.md#constructor)

### Properties

- [count](ZonesServicePaginationReq.md#count)
- [entityUuid](ZonesServicePaginationReq.md#entityuuid)
- [isActive](ZonesServicePaginationReq.md#isactive)
- [offset](ZonesServicePaginationReq.md#offset)
- [sortKey](ZonesServicePaginationReq.md#sortkey)
- [sortOrder](ZonesServicePaginationReq.md#sortorder)
- [fields](ZonesServicePaginationReq.md#fields)
- [runtime](ZonesServicePaginationReq.md#runtime)
- [typeName](ZonesServicePaginationReq.md#typename)

### Methods

- [clone](ZonesServicePaginationReq.md#clone)
- [equals](ZonesServicePaginationReq.md#equals)
- [fromBinary](ZonesServicePaginationReq.md#frombinary)
- [fromJson](ZonesServicePaginationReq.md#fromjson)
- [fromJsonString](ZonesServicePaginationReq.md#fromjsonstring)
- [getType](ZonesServicePaginationReq.md#gettype)
- [toBinary](ZonesServicePaginationReq.md#tobinary)
- [toJSON](ZonesServicePaginationReq.md#tojson)
- [toJson](ZonesServicePaginationReq.md#tojson-1)
- [toJsonString](ZonesServicePaginationReq.md#tojsonstring)
- [equals](ZonesServicePaginationReq.md#equals-1)
- [fromBinary](ZonesServicePaginationReq.md#frombinary-1)
- [fromJson](ZonesServicePaginationReq.md#fromjson-1)
- [fromJsonString](ZonesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ZonesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)\> |

#### Overrides

Message&lt;ZonesServicePaginationReq\&gt;.constructor

#### Defined in

[src/zones_pb.ts:457](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L457)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/zones_pb.ts:427](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L427)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/zones_pb.ts:455](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L455)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/zones_pb.ts:420](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L420)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/zones_pb.ts:434](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L434)

___

### sortKey

• **sortKey**: [`ZONE_SORT_KEY`](../enums/ZONE_SORT_KEY.md) = `ZONE_SORT_KEY.ZONE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.ZONE_SORT_KEY sort_key = 5;

#### Defined in

[src/zones_pb.ts:448](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L448)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/zones_pb.ts:441](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L441)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:464](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L464)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:462](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L462)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ZonesServicePaginationReq"``

#### Defined in

[src/zones_pb.ts:463](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L463)

## Methods

### clone

▸ **clone**(): [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md) \| `PlainMessage`<[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

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

[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md) \| `PlainMessage`<[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md) \| `PlainMessage`<[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:485](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L485)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Defined in

[src/zones_pb.ts:473](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L473)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Defined in

[src/zones_pb.ts:477](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L477)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServicePaginationReq`](ZonesServicePaginationReq.md)

#### Defined in

[src/zones_pb.ts:481](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L481)
