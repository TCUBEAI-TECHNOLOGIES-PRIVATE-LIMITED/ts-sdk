[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingsServiceSearchAllReq

# Class: ShippingsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.ShippingsServiceSearchAllReq

## Hierarchy

- `Message`<[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)\>

  ↳ **`ShippingsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ShippingsServiceSearchAllReq.md#constructor)

### Properties

- [count](ShippingsServiceSearchAllReq.md#count)
- [customerUuid](ShippingsServiceSearchAllReq.md#customeruuid)
- [entityUuid](ShippingsServiceSearchAllReq.md#entityuuid)
- [isActive](ShippingsServiceSearchAllReq.md#isactive)
- [locationUuid](ShippingsServiceSearchAllReq.md#locationuuid)
- [offset](ShippingsServiceSearchAllReq.md#offset)
- [searchKey](ShippingsServiceSearchAllReq.md#searchkey)
- [sortKey](ShippingsServiceSearchAllReq.md#sortkey)
- [sortOrder](ShippingsServiceSearchAllReq.md#sortorder)
- [zoneUuid](ShippingsServiceSearchAllReq.md#zoneuuid)
- [fields](ShippingsServiceSearchAllReq.md#fields)
- [runtime](ShippingsServiceSearchAllReq.md#runtime)
- [typeName](ShippingsServiceSearchAllReq.md#typename)

### Methods

- [clone](ShippingsServiceSearchAllReq.md#clone)
- [equals](ShippingsServiceSearchAllReq.md#equals)
- [fromBinary](ShippingsServiceSearchAllReq.md#frombinary)
- [fromJson](ShippingsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ShippingsServiceSearchAllReq.md#fromjsonstring)
- [getType](ShippingsServiceSearchAllReq.md#gettype)
- [toBinary](ShippingsServiceSearchAllReq.md#tobinary)
- [toJSON](ShippingsServiceSearchAllReq.md#tojson)
- [toJson](ShippingsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ShippingsServiceSearchAllReq.md#tojsonstring)
- [equals](ShippingsServiceSearchAllReq.md#equals-1)
- [fromBinary](ShippingsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ShippingsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ShippingsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ShippingsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:1060](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1060)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shippings_pb.ts:1002](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1002)

___

### customerUuid

• **customerUuid**: `string` = `""`

UUID of the customer

**`Generated`**

from field: string customer_uuid = 9;

#### Defined in

[src/shippings_pb.ts:1051](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1051)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/shippings_pb.ts:1030](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1030)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shippings_pb.ts:995](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L995)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 7;

#### Defined in

[src/shippings_pb.ts:1037](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1037)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shippings_pb.ts:1009](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1009)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/shippings_pb.ts:1058](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1058)

___

### sortKey

• **sortKey**: [`SHIPPING_SORT_KEY`](../enums/SHIPPING_SORT_KEY.md) = `SHIPPING_SORT_KEY.SHIPPING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SHIPPING_SORT_KEY sort_key = 5;

#### Defined in

[src/shippings_pb.ts:1023](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1023)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/shippings_pb.ts:1016](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1016)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 8;

#### Defined in

[src/shippings_pb.ts:1044](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1044)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:1067](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1067)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:1065](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1065)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingsServiceSearchAllReq"``

#### Defined in

[src/shippings_pb.ts:1066](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1066)

## Methods

### clone

▸ **clone**(): [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md) \| `PlainMessage`<[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

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

[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md) \| `PlainMessage`<[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md) \| `PlainMessage`<[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:1092](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1092)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Defined in

[src/shippings_pb.ts:1080](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1080)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Defined in

[src/shippings_pb.ts:1084](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1084)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceSearchAllReq`](ShippingsServiceSearchAllReq.md)

#### Defined in

[src/shippings_pb.ts:1088](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L1088)
