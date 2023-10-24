[scanswift-sdk](../README.md) / [Exports](../modules.md) / ZonesServiceFilterReq

# Class: ZonesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.ZonesServiceFilterReq

## Hierarchy

- `Message`<[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)\>

  ↳ **`ZonesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ZonesServiceFilterReq.md#constructor)

### Properties

- [code](ZonesServiceFilterReq.md#code)
- [count](ZonesServiceFilterReq.md#count)
- [creationTimestampEnd](ZonesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ZonesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ZonesServiceFilterReq.md#entityuuid)
- [isActive](ZonesServiceFilterReq.md#isactive)
- [locationUuid](ZonesServiceFilterReq.md#locationuuid)
- [name](ZonesServiceFilterReq.md#name)
- [offset](ZonesServiceFilterReq.md#offset)
- [sortKey](ZonesServiceFilterReq.md#sortkey)
- [sortOrder](ZonesServiceFilterReq.md#sortorder)
- [type](ZonesServiceFilterReq.md#type)
- [fields](ZonesServiceFilterReq.md#fields)
- [runtime](ZonesServiceFilterReq.md#runtime)
- [typeName](ZonesServiceFilterReq.md#typename)

### Methods

- [clone](ZonesServiceFilterReq.md#clone)
- [equals](ZonesServiceFilterReq.md#equals)
- [fromBinary](ZonesServiceFilterReq.md#frombinary)
- [fromJson](ZonesServiceFilterReq.md#fromjson)
- [fromJsonString](ZonesServiceFilterReq.md#fromjsonstring)
- [getType](ZonesServiceFilterReq.md#gettype)
- [toBinary](ZonesServiceFilterReq.md#tobinary)
- [toJSON](ZonesServiceFilterReq.md#tojson)
- [toJson](ZonesServiceFilterReq.md#tojson-1)
- [toJsonString](ZonesServiceFilterReq.md#tojsonstring)
- [equals](ZonesServiceFilterReq.md#equals-1)
- [fromBinary](ZonesServiceFilterReq.md#frombinary-1)
- [fromJson](ZonesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ZonesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ZonesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)\> |

#### Overrides

Message&lt;ZonesServiceFilterReq\&gt;.constructor

#### Defined in

[src/zones_pb.ts:639](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L639)

## Properties

### code

• **code**: `string` = `""`

Code of the zone

**`Generated`**

from field: string code = 21;

#### Defined in

[src/zones_pb.ts:630](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L630)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/zones_pb.ts:567](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L567)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/zones_pb.ts:602](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L602)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/zones_pb.ts:595](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L595)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/zones_pb.ts:609](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L609)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/zones_pb.ts:560](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L560)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/zones_pb.ts:616](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L616)

___

### name

• **name**: `string` = `""`

The name of the zone

**`Generated`**

from field: string name = 20;

#### Defined in

[src/zones_pb.ts:623](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L623)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/zones_pb.ts:574](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L574)

___

### sortKey

• **sortKey**: [`ZONE_SORT_KEY`](../enums/ZONE_SORT_KEY.md) = `ZONE_SORT_KEY.ZONE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.ZONE_SORT_KEY sort_key = 5;

#### Defined in

[src/zones_pb.ts:588](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L588)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/zones_pb.ts:581](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L581)

___

### type

• **type**: [`ZONE_TYPE`](../enums/ZONE_TYPE.md) = `ZONE_TYPE.ZONE_TYPE_ANY_UNSPECIFIED`

The type of the zone

**`Generated`**

from field: scanswift.ZONE_TYPE type = 22;

#### Defined in

[src/zones_pb.ts:637](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L637)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:646](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L646)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:644](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L644)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ZonesServiceFilterReq"``

#### Defined in

[src/zones_pb.ts:645](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L645)

## Methods

### clone

▸ **clone**(): [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md) \| `PlainMessage`<[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

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

[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md) \| `PlainMessage`<[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md) \| `PlainMessage`<[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:673](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L673)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Defined in

[src/zones_pb.ts:661](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L661)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Defined in

[src/zones_pb.ts:665](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L665)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceFilterReq`](ZonesServiceFilterReq.md)

#### Defined in

[src/zones_pb.ts:669](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L669)
