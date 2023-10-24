[scanswift-sdk](../README.md) / [Exports](../modules.md) / EntitiesServiceSearchAllReq

# Class: EntitiesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message scanswift.EntitiesServiceSearchAllReq

## Hierarchy

- `Message`<[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)\>

  ↳ **`EntitiesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](EntitiesServiceSearchAllReq.md#constructor)

### Properties

- [count](EntitiesServiceSearchAllReq.md#count)
- [isActive](EntitiesServiceSearchAllReq.md#isactive)
- [offset](EntitiesServiceSearchAllReq.md#offset)
- [searchKey](EntitiesServiceSearchAllReq.md#searchkey)
- [sortKey](EntitiesServiceSearchAllReq.md#sortkey)
- [sortOrder](EntitiesServiceSearchAllReq.md#sortorder)
- [fields](EntitiesServiceSearchAllReq.md#fields)
- [runtime](EntitiesServiceSearchAllReq.md#runtime)
- [typeName](EntitiesServiceSearchAllReq.md#typename)

### Methods

- [clone](EntitiesServiceSearchAllReq.md#clone)
- [equals](EntitiesServiceSearchAllReq.md#equals)
- [fromBinary](EntitiesServiceSearchAllReq.md#frombinary)
- [fromJson](EntitiesServiceSearchAllReq.md#fromjson)
- [fromJsonString](EntitiesServiceSearchAllReq.md#fromjsonstring)
- [getType](EntitiesServiceSearchAllReq.md#gettype)
- [toBinary](EntitiesServiceSearchAllReq.md#tobinary)
- [toJSON](EntitiesServiceSearchAllReq.md#tojson)
- [toJson](EntitiesServiceSearchAllReq.md#tojson-1)
- [toJsonString](EntitiesServiceSearchAllReq.md#tojsonstring)
- [equals](EntitiesServiceSearchAllReq.md#equals-1)
- [fromBinary](EntitiesServiceSearchAllReq.md#frombinary-1)
- [fromJson](EntitiesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](EntitiesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;EntitiesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/entities_pb.ts:850](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L850)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/entities_pb.ts:820](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L820)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/entities_pb.ts:813](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L813)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/entities_pb.ts:827](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L827)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/entities_pb.ts:848](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L848)

___

### sortKey

• **sortKey**: [`ENTITY_SORT_KEY`](../enums/ENTITY_SORT_KEY.md) = `ENTITY_SORT_KEY.ENTITY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.ENTITY_SORT_KEY sort_key = 5;

#### Defined in

[src/entities_pb.ts:841](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L841)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/entities_pb.ts:834](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L834)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:857](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L857)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:855](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L855)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.EntitiesServiceSearchAllReq"``

#### Defined in

[src/entities_pb.ts:856](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L856)

## Methods

### clone

▸ **clone**(): [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md) \| `PlainMessage`<[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

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

[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md) \| `PlainMessage`<[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md) \| `PlainMessage`<[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:878](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L878)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Defined in

[src/entities_pb.ts:866](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L866)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Defined in

[src/entities_pb.ts:870](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L870)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceSearchAllReq`](EntitiesServiceSearchAllReq.md)

#### Defined in

[src/entities_pb.ts:874](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/entities_pb.ts#L874)
