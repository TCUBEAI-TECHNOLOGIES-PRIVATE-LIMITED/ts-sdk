[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceFilterReq

# Class: SerialsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.SerialsServiceFilterReq

## Hierarchy

- `Message`<[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)\>

  ↳ **`SerialsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SerialsServiceFilterReq.md#constructor)

### Properties

- [batchUuid](SerialsServiceFilterReq.md#batchuuid)
- [code](SerialsServiceFilterReq.md#code)
- [count](SerialsServiceFilterReq.md#count)
- [creationTimestampEnd](SerialsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SerialsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](SerialsServiceFilterReq.md#entityuuid)
- [isActive](SerialsServiceFilterReq.md#isactive)
- [locationUuid](SerialsServiceFilterReq.md#locationuuid)
- [offset](SerialsServiceFilterReq.md#offset)
- [productUuid](SerialsServiceFilterReq.md#productuuid)
- [sortKey](SerialsServiceFilterReq.md#sortkey)
- [sortOrder](SerialsServiceFilterReq.md#sortorder)
- [state](SerialsServiceFilterReq.md#state)
- [fields](SerialsServiceFilterReq.md#fields)
- [runtime](SerialsServiceFilterReq.md#runtime)
- [typeName](SerialsServiceFilterReq.md#typename)

### Methods

- [clone](SerialsServiceFilterReq.md#clone)
- [equals](SerialsServiceFilterReq.md#equals)
- [fromBinary](SerialsServiceFilterReq.md#frombinary)
- [fromJson](SerialsServiceFilterReq.md#fromjson)
- [fromJsonString](SerialsServiceFilterReq.md#fromjsonstring)
- [getType](SerialsServiceFilterReq.md#gettype)
- [toBinary](SerialsServiceFilterReq.md#tobinary)
- [toJSON](SerialsServiceFilterReq.md#tojson)
- [toJson](SerialsServiceFilterReq.md#tojson-1)
- [toJsonString](SerialsServiceFilterReq.md#tojsonstring)
- [equals](SerialsServiceFilterReq.md#equals-1)
- [fromBinary](SerialsServiceFilterReq.md#frombinary-1)
- [fromJson](SerialsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SerialsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)\> |

#### Overrides

Message&lt;SerialsServiceFilterReq\&gt;.constructor

#### Defined in

[src/serials_pb.ts:1031](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1031)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

UUID of the batch

**`Generated`**

from field: string batch_uuid = 11;

#### Defined in

[src/serials_pb.ts:1015](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1015)

___

### code

• **code**: `string` = `""`

Code of the serial

**`Generated`**

from field: string code = 21;

#### Defined in

[src/serials_pb.ts:1022](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1022)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/serials_pb.ts:952](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L952)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/serials_pb.ts:987](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L987)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/serials_pb.ts:980](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L980)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/serials_pb.ts:994](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L994)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/serials_pb.ts:945](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L945)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:1001](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1001)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/serials_pb.ts:959](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L959)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/serials_pb.ts:1008](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1008)

___

### sortKey

• **sortKey**: [`SERIAL_SORT_KEY`](../enums/SERIAL_SORT_KEY.md) = `SERIAL_SORT_KEY.SERIAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SERIAL_SORT_KEY sort_key = 5;

#### Defined in

[src/serials_pb.ts:973](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L973)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/serials_pb.ts:966](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L966)

___

### state

• **state**: [`SERIAL_STATE`](../enums/SERIAL_STATE.md) = `SERIAL_STATE.SERIAL_STATE_ANY_UNSPECIFIED`

The state of the serial

**`Generated`**

from field: tcube.SERIAL_STATE state = 30;

#### Defined in

[src/serials_pb.ts:1029](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1029)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:1038](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1038)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:1036](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1036)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsServiceFilterReq"``

#### Defined in

[src/serials_pb.ts:1037](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1037)

## Methods

### clone

▸ **clone**(): [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md) \| `PlainMessage`<[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

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

[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md) \| `PlainMessage`<[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md) \| `PlainMessage`<[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:1066](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1066)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Defined in

[src/serials_pb.ts:1054](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1054)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Defined in

[src/serials_pb.ts:1058](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1058)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceFilterReq`](SerialsServiceFilterReq.md)

#### Defined in

[src/serials_pb.ts:1062](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L1062)
