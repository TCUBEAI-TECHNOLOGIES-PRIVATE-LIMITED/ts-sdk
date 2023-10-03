[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UnitsServiceFilterReq

# Class: UnitsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.UnitsServiceFilterReq

## Hierarchy

- `Message`<[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)\>

  ↳ **`UnitsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](UnitsServiceFilterReq.md#constructor)

### Properties

- [code](UnitsServiceFilterReq.md#code)
- [count](UnitsServiceFilterReq.md#count)
- [creationTimestampEnd](UnitsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](UnitsServiceFilterReq.md#creationtimestampstart)
- [isActive](UnitsServiceFilterReq.md#isactive)
- [name](UnitsServiceFilterReq.md#name)
- [offset](UnitsServiceFilterReq.md#offset)
- [sortKey](UnitsServiceFilterReq.md#sortkey)
- [sortOrder](UnitsServiceFilterReq.md#sortorder)
- [fields](UnitsServiceFilterReq.md#fields)
- [runtime](UnitsServiceFilterReq.md#runtime)
- [typeName](UnitsServiceFilterReq.md#typename)

### Methods

- [clone](UnitsServiceFilterReq.md#clone)
- [equals](UnitsServiceFilterReq.md#equals)
- [fromBinary](UnitsServiceFilterReq.md#frombinary)
- [fromJson](UnitsServiceFilterReq.md#fromjson)
- [fromJsonString](UnitsServiceFilterReq.md#fromjsonstring)
- [getType](UnitsServiceFilterReq.md#gettype)
- [toBinary](UnitsServiceFilterReq.md#tobinary)
- [toJSON](UnitsServiceFilterReq.md#tojson)
- [toJson](UnitsServiceFilterReq.md#tojson-1)
- [toJsonString](UnitsServiceFilterReq.md#tojsonstring)
- [equals](UnitsServiceFilterReq.md#equals-1)
- [fromBinary](UnitsServiceFilterReq.md#frombinary-1)
- [fromJson](UnitsServiceFilterReq.md#fromjson-1)
- [fromJsonString](UnitsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)\> |

#### Overrides

Message&lt;UnitsServiceFilterReq\&gt;.constructor

#### Defined in

[src/units_pb.ts:511](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L511)

## Properties

### code

• **code**: `string` = `""`

Code of the unit

**`Generated`**

from field: string code = 21;

#### Defined in

[src/units_pb.ts:509](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L509)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/units_pb.ts:460](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L460)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/units_pb.ts:495](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L495)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/units_pb.ts:488](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L488)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/units_pb.ts:453](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L453)

___

### name

• **name**: `string` = `""`

The name of the unit

**`Generated`**

from field: string name = 20;

#### Defined in

[src/units_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L502)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/units_pb.ts:467](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L467)

___

### sortKey

• **sortKey**: [`UNIT_SORT_KEY`](../enums/UNIT_SORT_KEY.md) = `UNIT_SORT_KEY.UNIT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.UNIT_SORT_KEY sort_key = 5;

#### Defined in

[src/units_pb.ts:481](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L481)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/units_pb.ts:474](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L474)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_pb.ts:518](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L518)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_pb.ts:516](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L516)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UnitsServiceFilterReq"``

#### Defined in

[src/units_pb.ts:517](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L517)

## Methods

### clone

▸ **clone**(): [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md) \| `PlainMessage`<[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

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

[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md) \| `PlainMessage`<[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md) \| `PlainMessage`<[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_pb.ts:542](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L542)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Defined in

[src/units_pb.ts:530](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L530)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Defined in

[src/units_pb.ts:534](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L534)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceFilterReq`](UnitsServiceFilterReq.md)

#### Defined in

[src/units_pb.ts:538](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L538)
