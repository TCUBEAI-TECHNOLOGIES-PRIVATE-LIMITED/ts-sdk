[scanswift-sdk](../README.md) / [Exports](../modules.md) / EntitiesServicePaginationReq

# Class: EntitiesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message scanswift.EntitiesServicePaginationReq

## Hierarchy

- `Message`<[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)\>

  ↳ **`EntitiesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](EntitiesServicePaginationReq.md#constructor)

### Properties

- [count](EntitiesServicePaginationReq.md#count)
- [isActive](EntitiesServicePaginationReq.md#isactive)
- [offset](EntitiesServicePaginationReq.md#offset)
- [sortKey](EntitiesServicePaginationReq.md#sortkey)
- [sortOrder](EntitiesServicePaginationReq.md#sortorder)
- [fields](EntitiesServicePaginationReq.md#fields)
- [runtime](EntitiesServicePaginationReq.md#runtime)
- [typeName](EntitiesServicePaginationReq.md#typename)

### Methods

- [clone](EntitiesServicePaginationReq.md#clone)
- [equals](EntitiesServicePaginationReq.md#equals)
- [fromBinary](EntitiesServicePaginationReq.md#frombinary)
- [fromJson](EntitiesServicePaginationReq.md#fromjson)
- [fromJsonString](EntitiesServicePaginationReq.md#fromjsonstring)
- [getType](EntitiesServicePaginationReq.md#gettype)
- [toBinary](EntitiesServicePaginationReq.md#tobinary)
- [toJSON](EntitiesServicePaginationReq.md#tojson)
- [toJson](EntitiesServicePaginationReq.md#tojson-1)
- [toJsonString](EntitiesServicePaginationReq.md#tojsonstring)
- [equals](EntitiesServicePaginationReq.md#equals-1)
- [fromBinary](EntitiesServicePaginationReq.md#frombinary-1)
- [fromJson](EntitiesServicePaginationReq.md#fromjson-1)
- [fromJsonString](EntitiesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)\> |

#### Overrides

Message&lt;EntitiesServicePaginationReq\&gt;.constructor

#### Defined in

[src/entities_pb.ts:565](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L565)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/entities_pb.ts:542](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L542)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/entities_pb.ts:535](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L535)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/entities_pb.ts:549](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L549)

___

### sortKey

• **sortKey**: [`ENTITY_SORT_KEY`](../enums/ENTITY_SORT_KEY.md) = `ENTITY_SORT_KEY.ENTITY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.ENTITY_SORT_KEY sort_key = 5;

#### Defined in

[src/entities_pb.ts:563](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L563)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/entities_pb.ts:556](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L556)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:572](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L572)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:570](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L570)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.EntitiesServicePaginationReq"``

#### Defined in

[src/entities_pb.ts:571](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L571)

## Methods

### clone

▸ **clone**(): [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md) \| `PlainMessage`<[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

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

[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md) \| `PlainMessage`<[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md) \| `PlainMessage`<[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:592](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L592)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Defined in

[src/entities_pb.ts:580](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L580)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Defined in

[src/entities_pb.ts:584](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L584)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServicePaginationReq`](EntitiesServicePaginationReq.md)

#### Defined in

[src/entities_pb.ts:588](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L588)
