[tcubesa-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceSearchAllReq

# Class: LocationsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.LocationsServiceSearchAllReq

## Hierarchy

- `Message`<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\>

  ↳ **`LocationsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](LocationsServiceSearchAllReq.md#constructor)

### Properties

- [count](LocationsServiceSearchAllReq.md#count)
- [entityUuid](LocationsServiceSearchAllReq.md#entityuuid)
- [isActive](LocationsServiceSearchAllReq.md#isactive)
- [offset](LocationsServiceSearchAllReq.md#offset)
- [searchKey](LocationsServiceSearchAllReq.md#searchkey)
- [sortKey](LocationsServiceSearchAllReq.md#sortkey)
- [sortOrder](LocationsServiceSearchAllReq.md#sortorder)
- [fields](LocationsServiceSearchAllReq.md#fields)
- [runtime](LocationsServiceSearchAllReq.md#runtime)
- [typeName](LocationsServiceSearchAllReq.md#typename)

### Methods

- [clone](LocationsServiceSearchAllReq.md#clone)
- [equals](LocationsServiceSearchAllReq.md#equals)
- [fromBinary](LocationsServiceSearchAllReq.md#frombinary)
- [fromJson](LocationsServiceSearchAllReq.md#fromjson)
- [fromJsonString](LocationsServiceSearchAllReq.md#fromjsonstring)
- [getType](LocationsServiceSearchAllReq.md#gettype)
- [toBinary](LocationsServiceSearchAllReq.md#tobinary)
- [toJSON](LocationsServiceSearchAllReq.md#tojson)
- [toJson](LocationsServiceSearchAllReq.md#tojson-1)
- [toJsonString](LocationsServiceSearchAllReq.md#tojsonstring)
- [equals](LocationsServiceSearchAllReq.md#equals-1)
- [fromBinary](LocationsServiceSearchAllReq.md#frombinary-1)
- [fromJson](LocationsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](LocationsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;LocationsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/locations_pb.ts:635](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L635)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/locations_pb.ts:598](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L598)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/locations_pb.ts:626](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L626)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/locations_pb.ts:591](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L591)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/locations_pb.ts:605](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L605)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/locations_pb.ts:633](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L633)

___

### sortKey

• **sortKey**: [`LOCATION_SORT_KEY`](../enums/LOCATION_SORT_KEY.md) = `LOCATION_SORT_KEY.LOCATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.LOCATION_SORT_KEY sort_key = 5;

#### Defined in

[src/locations_pb.ts:619](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L619)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/locations_pb.ts:612](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L612)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:642](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L642)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:640](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L640)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.LocationsServiceSearchAllReq"``

#### Defined in

[src/locations_pb.ts:641](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L641)

## Methods

### clone

▸ **clone**(): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md) \| `PlainMessage`<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

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

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md) \| `PlainMessage`<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md) \| `PlainMessage`<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:664](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L664)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Defined in

[src/locations_pb.ts:652](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L652)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Defined in

[src/locations_pb.ts:656](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L656)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Defined in

[src/locations_pb.ts:660](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/locations_pb.ts#L660)
