[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UnitsServiceSearchAllReq

# Class: UnitsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.UnitsServiceSearchAllReq

## Hierarchy

- `Message`<[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)\>

  ↳ **`UnitsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](UnitsServiceSearchAllReq.md#constructor)

### Properties

- [count](UnitsServiceSearchAllReq.md#count)
- [isActive](UnitsServiceSearchAllReq.md#isactive)
- [offset](UnitsServiceSearchAllReq.md#offset)
- [searchKey](UnitsServiceSearchAllReq.md#searchkey)
- [sortKey](UnitsServiceSearchAllReq.md#sortkey)
- [sortOrder](UnitsServiceSearchAllReq.md#sortorder)
- [fields](UnitsServiceSearchAllReq.md#fields)
- [runtime](UnitsServiceSearchAllReq.md#runtime)
- [typeName](UnitsServiceSearchAllReq.md#typename)

### Methods

- [clone](UnitsServiceSearchAllReq.md#clone)
- [equals](UnitsServiceSearchAllReq.md#equals)
- [fromBinary](UnitsServiceSearchAllReq.md#frombinary)
- [fromJson](UnitsServiceSearchAllReq.md#fromjson)
- [fromJsonString](UnitsServiceSearchAllReq.md#fromjsonstring)
- [getType](UnitsServiceSearchAllReq.md#gettype)
- [toBinary](UnitsServiceSearchAllReq.md#tobinary)
- [toJSON](UnitsServiceSearchAllReq.md#tojson)
- [toJson](UnitsServiceSearchAllReq.md#tojson-1)
- [toJsonString](UnitsServiceSearchAllReq.md#tojsonstring)
- [equals](UnitsServiceSearchAllReq.md#equals-1)
- [fromBinary](UnitsServiceSearchAllReq.md#frombinary-1)
- [fromJson](UnitsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](UnitsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;UnitsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/units_pb.ts:596](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L596)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/units_pb.ts:566](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L566)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/units_pb.ts:559](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L559)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/units_pb.ts:573](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L573)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/units_pb.ts:594](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L594)

___

### sortKey

• **sortKey**: [`UNIT_SORT_KEY`](../enums/UNIT_SORT_KEY.md) = `UNIT_SORT_KEY.UNIT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.UNIT_SORT_KEY sort_key = 5;

#### Defined in

[src/units_pb.ts:587](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L587)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/units_pb.ts:580](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L580)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_pb.ts:603](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L603)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_pb.ts:601](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L601)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UnitsServiceSearchAllReq"``

#### Defined in

[src/units_pb.ts:602](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L602)

## Methods

### clone

▸ **clone**(): [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md) \| `PlainMessage`<[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

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

[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md) \| `PlainMessage`<[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md) \| `PlainMessage`<[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_pb.ts:624](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L624)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Defined in

[src/units_pb.ts:612](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L612)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Defined in

[src/units_pb.ts:616](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L616)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitsServiceSearchAllReq`](UnitsServiceSearchAllReq.md)

#### Defined in

[src/units_pb.ts:620](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/units_pb.ts#L620)
