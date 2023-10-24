[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceSearchAllReq

# Class: SerialsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message scanswift.SerialsServiceSearchAllReq

## Hierarchy

- `Message`<[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)\>

  ↳ **`SerialsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SerialsServiceSearchAllReq.md#constructor)

### Properties

- [batchUuid](SerialsServiceSearchAllReq.md#batchuuid)
- [count](SerialsServiceSearchAllReq.md#count)
- [entityUuid](SerialsServiceSearchAllReq.md#entityuuid)
- [isActive](SerialsServiceSearchAllReq.md#isactive)
- [locationUuid](SerialsServiceSearchAllReq.md#locationuuid)
- [offset](SerialsServiceSearchAllReq.md#offset)
- [productUuid](SerialsServiceSearchAllReq.md#productuuid)
- [searchKey](SerialsServiceSearchAllReq.md#searchkey)
- [sortKey](SerialsServiceSearchAllReq.md#sortkey)
- [sortOrder](SerialsServiceSearchAllReq.md#sortorder)
- [state](SerialsServiceSearchAllReq.md#state)
- [fields](SerialsServiceSearchAllReq.md#fields)
- [runtime](SerialsServiceSearchAllReq.md#runtime)
- [typeName](SerialsServiceSearchAllReq.md#typename)

### Methods

- [clone](SerialsServiceSearchAllReq.md#clone)
- [equals](SerialsServiceSearchAllReq.md#equals)
- [fromBinary](SerialsServiceSearchAllReq.md#frombinary)
- [fromJson](SerialsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SerialsServiceSearchAllReq.md#fromjsonstring)
- [getType](SerialsServiceSearchAllReq.md#gettype)
- [toBinary](SerialsServiceSearchAllReq.md#tobinary)
- [toJSON](SerialsServiceSearchAllReq.md#tojson)
- [toJson](SerialsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SerialsServiceSearchAllReq.md#tojsonstring)
- [equals](SerialsServiceSearchAllReq.md#equals-1)
- [fromBinary](SerialsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SerialsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SerialsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;SerialsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/serials_pb.ts:1264](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1264)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

UUID of the batch

**`Generated`**

from field: string batch_uuid = 11;

#### Defined in

[src/serials_pb.ts:1248](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1248)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/serials_pb.ts:1199](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1199)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/serials_pb.ts:1227](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1227)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/serials_pb.ts:1192](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1192)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:1234](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1234)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/serials_pb.ts:1206](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1206)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/serials_pb.ts:1241](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1241)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 12;

#### Defined in

[src/serials_pb.ts:1255](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1255)

___

### sortKey

• **sortKey**: [`SERIAL_SORT_KEY`](../enums/SERIAL_SORT_KEY.md) = `SERIAL_SORT_KEY.SERIAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SERIAL_SORT_KEY sort_key = 5;

#### Defined in

[src/serials_pb.ts:1220](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1220)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/serials_pb.ts:1213](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1213)

___

### state

• **state**: [`SERIAL_STATE`](../enums/SERIAL_STATE.md) = `SERIAL_STATE.SERIAL_STATE_ANY_UNSPECIFIED`

The state of the serial

**`Generated`**

from field: scanswift.SERIAL_STATE state = 30;

#### Defined in

[src/serials_pb.ts:1262](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1262)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:1271](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1271)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:1269](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1269)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsServiceSearchAllReq"``

#### Defined in

[src/serials_pb.ts:1270](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1270)

## Methods

### clone

▸ **clone**(): [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md) \| `PlainMessage`<[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

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

[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md) \| `PlainMessage`<[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md) \| `PlainMessage`<[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:1297](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1297)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Defined in

[src/serials_pb.ts:1285](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1285)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Defined in

[src/serials_pb.ts:1289](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1289)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceSearchAllReq`](SerialsServiceSearchAllReq.md)

#### Defined in

[src/serials_pb.ts:1293](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L1293)
