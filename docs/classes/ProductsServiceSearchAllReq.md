[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceSearchAllReq

# Class: ProductsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.ProductsServiceSearchAllReq

## Hierarchy

- `Message`<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\>

  ↳ **`ProductsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProductsServiceSearchAllReq.md#constructor)

### Properties

- [count](ProductsServiceSearchAllReq.md#count)
- [entityUuid](ProductsServiceSearchAllReq.md#entityuuid)
- [isActive](ProductsServiceSearchAllReq.md#isactive)
- [offset](ProductsServiceSearchAllReq.md#offset)
- [searchKey](ProductsServiceSearchAllReq.md#searchkey)
- [sortKey](ProductsServiceSearchAllReq.md#sortkey)
- [sortOrder](ProductsServiceSearchAllReq.md#sortorder)
- [fields](ProductsServiceSearchAllReq.md#fields)
- [runtime](ProductsServiceSearchAllReq.md#runtime)
- [typeName](ProductsServiceSearchAllReq.md#typename)

### Methods

- [clone](ProductsServiceSearchAllReq.md#clone)
- [equals](ProductsServiceSearchAllReq.md#equals)
- [fromBinary](ProductsServiceSearchAllReq.md#frombinary)
- [fromJson](ProductsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProductsServiceSearchAllReq.md#fromjsonstring)
- [getType](ProductsServiceSearchAllReq.md#gettype)
- [toBinary](ProductsServiceSearchAllReq.md#tobinary)
- [toJSON](ProductsServiceSearchAllReq.md#tojson)
- [toJson](ProductsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProductsServiceSearchAllReq.md#tojsonstring)
- [equals](ProductsServiceSearchAllReq.md#equals-1)
- [fromBinary](ProductsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProductsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProductsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ProductsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/products_pb.ts:983](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L983)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/products_pb.ts:943](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L943)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

UUID of the location
string location_uuid = 9;

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/products_pb.ts:974](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L974)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/products_pb.ts:936](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L936)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/products_pb.ts:950](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L950)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/products_pb.ts:981](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L981)

___

### sortKey

• **sortKey**: [`PRODUCT_SORT_KEY`](../enums/PRODUCT_SORT_KEY.md) = `PRODUCT_SORT_KEY.PRODUCT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.PRODUCT_SORT_KEY sort_key = 5;

#### Defined in

[src/products_pb.ts:964](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L964)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/products_pb.ts:957](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L957)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products_pb.ts:990](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L990)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products_pb.ts:988](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L988)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ProductsServiceSearchAllReq"``

#### Defined in

[src/products_pb.ts:989](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L989)

## Methods

### clone

▸ **clone**(): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md) \| `PlainMessage`<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

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

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md) \| `PlainMessage`<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md) \| `PlainMessage`<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products_pb.ts:1012](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L1012)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Defined in

[src/products_pb.ts:1000](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L1000)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Defined in

[src/products_pb.ts:1004](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L1004)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Defined in

[src/products_pb.ts:1008](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L1008)
