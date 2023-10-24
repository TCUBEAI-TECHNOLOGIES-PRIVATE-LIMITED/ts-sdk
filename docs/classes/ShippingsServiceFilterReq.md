[scanswift-sdk](../README.md) / [Exports](../modules.md) / ShippingsServiceFilterReq

# Class: ShippingsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.ShippingsServiceFilterReq

## Hierarchy

- `Message`<[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)\>

  ↳ **`ShippingsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ShippingsServiceFilterReq.md#constructor)

### Properties

- [code](ShippingsServiceFilterReq.md#code)
- [count](ShippingsServiceFilterReq.md#count)
- [creationTimestampEnd](ShippingsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ShippingsServiceFilterReq.md#creationtimestampstart)
- [customerUuid](ShippingsServiceFilterReq.md#customeruuid)
- [entityUuid](ShippingsServiceFilterReq.md#entityuuid)
- [isActive](ShippingsServiceFilterReq.md#isactive)
- [isDownloaded](ShippingsServiceFilterReq.md#isdownloaded)
- [locationUuid](ShippingsServiceFilterReq.md#locationuuid)
- [name](ShippingsServiceFilterReq.md#name)
- [offset](ShippingsServiceFilterReq.md#offset)
- [sortKey](ShippingsServiceFilterReq.md#sortkey)
- [sortOrder](ShippingsServiceFilterReq.md#sortorder)
- [state](ShippingsServiceFilterReq.md#state)
- [zoneUuid](ShippingsServiceFilterReq.md#zoneuuid)
- [fields](ShippingsServiceFilterReq.md#fields)
- [runtime](ShippingsServiceFilterReq.md#runtime)
- [typeName](ShippingsServiceFilterReq.md#typename)

### Methods

- [clone](ShippingsServiceFilterReq.md#clone)
- [equals](ShippingsServiceFilterReq.md#equals)
- [fromBinary](ShippingsServiceFilterReq.md#frombinary)
- [fromJson](ShippingsServiceFilterReq.md#fromjson)
- [fromJsonString](ShippingsServiceFilterReq.md#fromjsonstring)
- [getType](ShippingsServiceFilterReq.md#gettype)
- [toBinary](ShippingsServiceFilterReq.md#tobinary)
- [toJSON](ShippingsServiceFilterReq.md#tojson)
- [toJson](ShippingsServiceFilterReq.md#tojson-1)
- [toJsonString](ShippingsServiceFilterReq.md#tojsonstring)
- [equals](ShippingsServiceFilterReq.md#equals-1)
- [fromBinary](ShippingsServiceFilterReq.md#frombinary-1)
- [fromJson](ShippingsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ShippingsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ShippingsServiceFilterReq\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:1041](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1041)

## Properties

### code

• **code**: `string` = `""`

Code of the shipping

**`Generated`**

from field: string code = 21;

#### Defined in

[src/shippings_pb.ts:1025](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1025)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shippings_pb.ts:948](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L948)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/shippings_pb.ts:983](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L983)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/shippings_pb.ts:976](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L976)

___

### customerUuid

• **customerUuid**: `string` = `""`

UUID of the customer

**`Generated`**

from field: string customer_uuid = 11;

#### Defined in

[src/shippings_pb.ts:1011](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1011)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/shippings_pb.ts:990](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L990)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shippings_pb.ts:941](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L941)

___

### isDownloaded

• **isDownloaded**: [`DOWNLOADED_STATUS`](../enums/DOWNLOADED_STATUS.md) = `DOWNLOADED_STATUS.DOWNLOADED_STATUS_ANY_UNSPECIFIED`

The downloaded status

**`Generated`**

from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;

#### Defined in

[src/shippings_pb.ts:1039](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1039)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/shippings_pb.ts:997](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L997)

___

### name

• **name**: `string` = `""`

The name of the shipping

**`Generated`**

from field: string name = 20;

#### Defined in

[src/shippings_pb.ts:1018](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1018)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shippings_pb.ts:955](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L955)

___

### sortKey

• **sortKey**: [`SHIPPING_SORT_KEY`](../enums/SHIPPING_SORT_KEY.md) = `SHIPPING_SORT_KEY.SHIPPING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;

#### Defined in

[src/shippings_pb.ts:969](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L969)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/shippings_pb.ts:962](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L962)

___

### state

• **state**: [`SHIPPING_STATE`](../enums/SHIPPING_STATE.md) = `SHIPPING_STATE.SHIPPING_STATE_ANY_UNSPECIFIED`

The state of the shipping

**`Generated`**

from field: scanswift.SHIPPING_STATE state = 30;

#### Defined in

[src/shippings_pb.ts:1032](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1032)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 10;

#### Defined in

[src/shippings_pb.ts:1004](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1004)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:1048](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1048)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:1046](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1046)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ShippingsServiceFilterReq"``

#### Defined in

[src/shippings_pb.ts:1047](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1047)

## Methods

### clone

▸ **clone**(): [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md) \| `PlainMessage`<[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

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

[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md) \| `PlainMessage`<[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md) \| `PlainMessage`<[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:1078](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1078)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Defined in

[src/shippings_pb.ts:1066](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1066)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Defined in

[src/shippings_pb.ts:1070](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1070)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceFilterReq`](ShippingsServiceFilterReq.md)

#### Defined in

[src/shippings_pb.ts:1074](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L1074)
