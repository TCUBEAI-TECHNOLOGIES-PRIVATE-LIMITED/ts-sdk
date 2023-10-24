[scanswift-sdk](../README.md) / [Exports](../modules.md) / PackagingsServiceSearchAllReq

# Class: PackagingsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message scanswift.PackagingsServiceSearchAllReq

## Hierarchy

- `Message`<[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)\>

  ↳ **`PackagingsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PackagingsServiceSearchAllReq.md#constructor)

### Properties

- [batchUuid](PackagingsServiceSearchAllReq.md#batchuuid)
- [count](PackagingsServiceSearchAllReq.md#count)
- [entityUuid](PackagingsServiceSearchAllReq.md#entityuuid)
- [isActive](PackagingsServiceSearchAllReq.md#isactive)
- [isDownloaded](PackagingsServiceSearchAllReq.md#isdownloaded)
- [locationUuid](PackagingsServiceSearchAllReq.md#locationuuid)
- [offset](PackagingsServiceSearchAllReq.md#offset)
- [productUuid](PackagingsServiceSearchAllReq.md#productuuid)
- [searchKey](PackagingsServiceSearchAllReq.md#searchkey)
- [sortKey](PackagingsServiceSearchAllReq.md#sortkey)
- [sortOrder](PackagingsServiceSearchAllReq.md#sortorder)
- [zoneUuid](PackagingsServiceSearchAllReq.md#zoneuuid)
- [fields](PackagingsServiceSearchAllReq.md#fields)
- [runtime](PackagingsServiceSearchAllReq.md#runtime)
- [typeName](PackagingsServiceSearchAllReq.md#typename)

### Methods

- [clone](PackagingsServiceSearchAllReq.md#clone)
- [equals](PackagingsServiceSearchAllReq.md#equals)
- [fromBinary](PackagingsServiceSearchAllReq.md#frombinary)
- [fromJson](PackagingsServiceSearchAllReq.md#fromjson)
- [fromJsonString](PackagingsServiceSearchAllReq.md#fromjsonstring)
- [getType](PackagingsServiceSearchAllReq.md#gettype)
- [toBinary](PackagingsServiceSearchAllReq.md#tobinary)
- [toJSON](PackagingsServiceSearchAllReq.md#tojson)
- [toJson](PackagingsServiceSearchAllReq.md#tojson-1)
- [toJsonString](PackagingsServiceSearchAllReq.md#tojsonstring)
- [equals](PackagingsServiceSearchAllReq.md#equals-1)
- [fromBinary](PackagingsServiceSearchAllReq.md#frombinary-1)
- [fromJson](PackagingsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PackagingsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;PackagingsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:1149](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1149)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

Optional UUID of the associated batch

**`Generated`**

from field: string batch_uuid = 10;

#### Defined in

[src/packagings_pb.ts:1133](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1133)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/packagings_pb.ts:1077](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1077)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/packagings_pb.ts:1105](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1105)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/packagings_pb.ts:1070](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1070)

___

### isDownloaded

• **isDownloaded**: [`DOWNLOADED_STATUS`](../enums/DOWNLOADED_STATUS.md) = `DOWNLOADED_STATUS.DOWNLOADED_STATUS_ANY_UNSPECIFIED`

The downloaded status

**`Generated`**

from field: scanswift.DOWNLOADED_STATUS is_downloaded = 40;

#### Defined in

[src/packagings_pb.ts:1147](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1147)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 7;

#### Defined in

[src/packagings_pb.ts:1112](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1112)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/packagings_pb.ts:1084](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1084)

___

### productUuid

• **productUuid**: `string` = `""`

Optional UUID of the associated product

**`Generated`**

from field: string product_uuid = 9;

#### Defined in

[src/packagings_pb.ts:1126](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1126)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/packagings_pb.ts:1140](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1140)

___

### sortKey

• **sortKey**: [`PACKAGING_SORT_KEY`](../enums/PACKAGING_SORT_KEY.md) = `PACKAGING_SORT_KEY.PACKAGING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.PACKAGING_SORT_KEY sort_key = 5;

#### Defined in

[src/packagings_pb.ts:1098](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1098)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/packagings_pb.ts:1091](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1091)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 8;

#### Defined in

[src/packagings_pb.ts:1119](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1119)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:1156](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1156)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:1154](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1154)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PackagingsServiceSearchAllReq"``

#### Defined in

[src/packagings_pb.ts:1155](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1155)

## Methods

### clone

▸ **clone**(): [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md) \| `PlainMessage`<[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

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

[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md) \| `PlainMessage`<[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md) \| `PlainMessage`<[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:1183](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1183)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Defined in

[src/packagings_pb.ts:1171](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1171)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Defined in

[src/packagings_pb.ts:1175](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1175)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceSearchAllReq`](PackagingsServiceSearchAllReq.md)

#### Defined in

[src/packagings_pb.ts:1179](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L1179)
