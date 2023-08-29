[tcubesa-sdk](../README.md) / [Exports](../modules.md) / LocationsServicePaginationReq

# Class: LocationsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.LocationsServicePaginationReq

## Hierarchy

- `Message`<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\>

  ↳ **`LocationsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](LocationsServicePaginationReq.md#constructor)

### Properties

- [count](LocationsServicePaginationReq.md#count)
- [entityUuid](LocationsServicePaginationReq.md#entityuuid)
- [isActive](LocationsServicePaginationReq.md#isactive)
- [offset](LocationsServicePaginationReq.md#offset)
- [sortKey](LocationsServicePaginationReq.md#sortkey)
- [sortOrder](LocationsServicePaginationReq.md#sortorder)
- [fields](LocationsServicePaginationReq.md#fields)
- [runtime](LocationsServicePaginationReq.md#runtime)
- [typeName](LocationsServicePaginationReq.md#typename)

### Methods

- [clone](LocationsServicePaginationReq.md#clone)
- [equals](LocationsServicePaginationReq.md#equals)
- [fromBinary](LocationsServicePaginationReq.md#frombinary)
- [fromJson](LocationsServicePaginationReq.md#fromjson)
- [fromJsonString](LocationsServicePaginationReq.md#fromjsonstring)
- [getType](LocationsServicePaginationReq.md#gettype)
- [toBinary](LocationsServicePaginationReq.md#tobinary)
- [toJSON](LocationsServicePaginationReq.md#tojson)
- [toJson](LocationsServicePaginationReq.md#tojson-1)
- [toJsonString](LocationsServicePaginationReq.md#tojsonstring)
- [equals](LocationsServicePaginationReq.md#equals-1)
- [fromBinary](LocationsServicePaginationReq.md#frombinary-1)
- [fromJson](LocationsServicePaginationReq.md#fromjson-1)
- [fromJsonString](LocationsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |

#### Overrides

Message&lt;LocationsServicePaginationReq\&gt;.constructor

#### Defined in

[src/locations_pb.ts:374](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L374)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/locations_pb.ts:344](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L344)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/locations_pb.ts:372](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L372)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/locations_pb.ts:337](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L337)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/locations_pb.ts:351](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L351)

___

### sortKey

• **sortKey**: [`LOCATION_SORT_KEY`](../enums/LOCATION_SORT_KEY.md) = `LOCATION_SORT_KEY.LOCATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.LOCATION_SORT_KEY sort_key = 5;

#### Defined in

[src/locations_pb.ts:365](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L365)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/locations_pb.ts:358](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L358)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:381](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L381)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:379](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L379)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.LocationsServicePaginationReq"``

#### Defined in

[src/locations_pb.ts:380](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L380)

## Methods

### clone

▸ **clone**(): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md) \| `PlainMessage`<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

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

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md) \| `PlainMessage`<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md) \| `PlainMessage`<[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:402](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L402)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Defined in

[src/locations_pb.ts:390](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L390)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Defined in

[src/locations_pb.ts:394](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L394)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationReq`](LocationsServicePaginationReq.md)

#### Defined in

[src/locations_pb.ts:398](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L398)
