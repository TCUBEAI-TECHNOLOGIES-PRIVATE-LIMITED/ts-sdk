[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingsServiceFilterReq

# Class: ShippingsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.ShippingsServiceFilterReq

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

[src/shippings_pb.ts:942](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L942)

## Properties

### code

• **code**: `string` = `""`

Code of the shipping

**`Generated`**

from field: string code = 21;

#### Defined in

[src/shippings_pb.ts:933](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L933)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shippings_pb.ts:856](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L856)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/shippings_pb.ts:891](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L891)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/shippings_pb.ts:884](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L884)

___

### customerUuid

• **customerUuid**: `string` = `""`

UUID of the customer

**`Generated`**

from field: string customer_uuid = 11;

#### Defined in

[src/shippings_pb.ts:919](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L919)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/shippings_pb.ts:898](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L898)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shippings_pb.ts:849](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L849)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/shippings_pb.ts:905](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L905)

___

### name

• **name**: `string` = `""`

The name of the shipping

**`Generated`**

from field: string name = 20;

#### Defined in

[src/shippings_pb.ts:926](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L926)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shippings_pb.ts:863](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L863)

___

### sortKey

• **sortKey**: [`SHIPPING_SORT_KEY`](../enums/SHIPPING_SORT_KEY.md) = `SHIPPING_SORT_KEY.SHIPPING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SHIPPING_SORT_KEY sort_key = 5;

#### Defined in

[src/shippings_pb.ts:877](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L877)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/shippings_pb.ts:870](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L870)

___

### state

• **state**: [`SHIPPING_STATE`](../enums/SHIPPING_STATE.md) = `SHIPPING_STATE.SHIPPING_STATE_ANY_UNSPECIFIED`

The state of the shipping

**`Generated`**

from field: tcube.SHIPPING_STATE state = 30;

#### Defined in

[src/shippings_pb.ts:940](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L940)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 10;

#### Defined in

[src/shippings_pb.ts:912](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L912)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:949](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L949)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:947](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L947)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingsServiceFilterReq"``

#### Defined in

[src/shippings_pb.ts:948](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L948)

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

[src/shippings_pb.ts:978](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L978)

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

[src/shippings_pb.ts:966](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L966)

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

[src/shippings_pb.ts:970](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L970)

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

[src/shippings_pb.ts:974](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L974)
