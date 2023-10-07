[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ZonesServiceSearchAllReq

# Class: ZonesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.ZonesServiceSearchAllReq

## Hierarchy

- `Message`<[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)\>

  ↳ **`ZonesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ZonesServiceSearchAllReq.md#constructor)

### Properties

- [count](ZonesServiceSearchAllReq.md#count)
- [entityUuid](ZonesServiceSearchAllReq.md#entityuuid)
- [isActive](ZonesServiceSearchAllReq.md#isactive)
- [locationUuid](ZonesServiceSearchAllReq.md#locationuuid)
- [offset](ZonesServiceSearchAllReq.md#offset)
- [searchKey](ZonesServiceSearchAllReq.md#searchkey)
- [sortKey](ZonesServiceSearchAllReq.md#sortkey)
- [sortOrder](ZonesServiceSearchAllReq.md#sortorder)
- [type](ZonesServiceSearchAllReq.md#type)
- [fields](ZonesServiceSearchAllReq.md#fields)
- [runtime](ZonesServiceSearchAllReq.md#runtime)
- [typeName](ZonesServiceSearchAllReq.md#typename)

### Methods

- [clone](ZonesServiceSearchAllReq.md#clone)
- [equals](ZonesServiceSearchAllReq.md#equals)
- [fromBinary](ZonesServiceSearchAllReq.md#frombinary)
- [fromJson](ZonesServiceSearchAllReq.md#fromjson)
- [fromJsonString](ZonesServiceSearchAllReq.md#fromjsonstring)
- [getType](ZonesServiceSearchAllReq.md#gettype)
- [toBinary](ZonesServiceSearchAllReq.md#tobinary)
- [toJSON](ZonesServiceSearchAllReq.md#tojson)
- [toJson](ZonesServiceSearchAllReq.md#tojson-1)
- [toJsonString](ZonesServiceSearchAllReq.md#tojsonstring)
- [equals](ZonesServiceSearchAllReq.md#equals-1)
- [fromBinary](ZonesServiceSearchAllReq.md#frombinary-1)
- [fromJson](ZonesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ZonesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ZonesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ZonesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/zones_pb.ts:748](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L748)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/zones_pb.ts:697](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L697)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/zones_pb.ts:725](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L725)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/zones_pb.ts:690](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L690)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/zones_pb.ts:732](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L732)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/zones_pb.ts:704](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L704)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/zones_pb.ts:739](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L739)

___

### sortKey

• **sortKey**: [`ZONE_SORT_KEY`](../enums/ZONE_SORT_KEY.md) = `ZONE_SORT_KEY.ZONE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.ZONE_SORT_KEY sort_key = 5;

#### Defined in

[src/zones_pb.ts:718](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L718)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/zones_pb.ts:711](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L711)

___

### type

• **type**: [`ZONE_TYPE`](../enums/ZONE_TYPE.md) = `ZONE_TYPE.ZONE_TYPE_ANY_UNSPECIFIED`

The type of the zone

**`Generated`**

from field: tcube.ZONE_TYPE type = 22;

#### Defined in

[src/zones_pb.ts:746](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L746)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:755](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L755)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:753](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L753)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ZonesServiceSearchAllReq"``

#### Defined in

[src/zones_pb.ts:754](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L754)

## Methods

### clone

▸ **clone**(): [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md) \| `PlainMessage`<[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

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

[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md) \| `PlainMessage`<[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md) \| `PlainMessage`<[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:779](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L779)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Defined in

[src/zones_pb.ts:767](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L767)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Defined in

[src/zones_pb.ts:771](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L771)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceSearchAllReq`](ZonesServiceSearchAllReq.md)

#### Defined in

[src/zones_pb.ts:775](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/zones_pb.ts#L775)
