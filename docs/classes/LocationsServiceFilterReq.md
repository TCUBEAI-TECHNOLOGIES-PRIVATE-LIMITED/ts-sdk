[tcubesa-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceFilterReq

# Class: LocationsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.LocationsServiceFilterReq

## Hierarchy

- `Message`<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

  ↳ **`LocationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LocationsServiceFilterReq.md#constructor)

### Properties

- [code](LocationsServiceFilterReq.md#code)
- [count](LocationsServiceFilterReq.md#count)
- [creationTimestampEnd](LocationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LocationsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LocationsServiceFilterReq.md#entityuuid)
- [isActive](LocationsServiceFilterReq.md#isactive)
- [name](LocationsServiceFilterReq.md#name)
- [offset](LocationsServiceFilterReq.md#offset)
- [sortKey](LocationsServiceFilterReq.md#sortkey)
- [sortOrder](LocationsServiceFilterReq.md#sortorder)
- [fields](LocationsServiceFilterReq.md#fields)
- [runtime](LocationsServiceFilterReq.md#runtime)
- [typeName](LocationsServiceFilterReq.md#typename)

### Methods

- [clone](LocationsServiceFilterReq.md#clone)
- [equals](LocationsServiceFilterReq.md#equals)
- [fromBinary](LocationsServiceFilterReq.md#frombinary)
- [fromJson](LocationsServiceFilterReq.md#fromjson)
- [fromJsonString](LocationsServiceFilterReq.md#fromjsonstring)
- [getType](LocationsServiceFilterReq.md#gettype)
- [toBinary](LocationsServiceFilterReq.md#tobinary)
- [toJSON](LocationsServiceFilterReq.md#tojson)
- [toJson](LocationsServiceFilterReq.md#tojson-1)
- [toJsonString](LocationsServiceFilterReq.md#tojsonstring)
- [equals](LocationsServiceFilterReq.md#equals-1)
- [fromBinary](LocationsServiceFilterReq.md#frombinary-1)
- [fromJson](LocationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LocationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

#### Overrides

Message&lt;LocationsServiceFilterReq\&gt;.constructor

#### Defined in

[src/locations_pb.ts:542](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L542)

## Properties

### code

• **code**: `string` = `""`

Code of the location

**`Generated`**

from field: string code = 21;

#### Defined in

[src/locations_pb.ts:540](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L540)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/locations_pb.ts:484](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L484)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/locations_pb.ts:519](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L519)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/locations_pb.ts:512](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L512)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/locations_pb.ts:526](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L526)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/locations_pb.ts:477](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L477)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 20;

#### Defined in

[src/locations_pb.ts:533](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L533)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/locations_pb.ts:491](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L491)

___

### sortKey

• **sortKey**: [`LOCATION_SORT_KEY`](../enums/LOCATION_SORT_KEY.md) = `LOCATION_SORT_KEY.LOCATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.LOCATION_SORT_KEY sort_key = 5;

#### Defined in

[src/locations_pb.ts:505](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L505)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/locations_pb.ts:498](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L498)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:549](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L549)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:547](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L547)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.LocationsServiceFilterReq"``

#### Defined in

[src/locations_pb.ts:548](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L548)

## Methods

### clone

▸ **clone**(): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

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

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:574](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L574)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

[src/locations_pb.ts:562](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L562)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

[src/locations_pb.ts:566](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L566)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

[src/locations_pb.ts:570](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L570)