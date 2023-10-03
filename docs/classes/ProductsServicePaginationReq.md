[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ProductsServicePaginationReq

# Class: ProductsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.ProductsServicePaginationReq

## Hierarchy

- `Message`<[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)\>

  ↳ **`ProductsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProductsServicePaginationReq.md#constructor)

### Properties

- [count](ProductsServicePaginationReq.md#count)
- [entityUuid](ProductsServicePaginationReq.md#entityuuid)
- [isActive](ProductsServicePaginationReq.md#isactive)
- [offset](ProductsServicePaginationReq.md#offset)
- [sortKey](ProductsServicePaginationReq.md#sortkey)
- [sortOrder](ProductsServicePaginationReq.md#sortorder)
- [fields](ProductsServicePaginationReq.md#fields)
- [runtime](ProductsServicePaginationReq.md#runtime)
- [typeName](ProductsServicePaginationReq.md#typename)

### Methods

- [clone](ProductsServicePaginationReq.md#clone)
- [equals](ProductsServicePaginationReq.md#equals)
- [fromBinary](ProductsServicePaginationReq.md#frombinary)
- [fromJson](ProductsServicePaginationReq.md#fromjson)
- [fromJsonString](ProductsServicePaginationReq.md#fromjsonstring)
- [getType](ProductsServicePaginationReq.md#gettype)
- [toBinary](ProductsServicePaginationReq.md#tobinary)
- [toJSON](ProductsServicePaginationReq.md#tojson)
- [toJson](ProductsServicePaginationReq.md#tojson-1)
- [toJsonString](ProductsServicePaginationReq.md#tojsonstring)
- [equals](ProductsServicePaginationReq.md#equals-1)
- [fromBinary](ProductsServicePaginationReq.md#frombinary-1)
- [fromJson](ProductsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProductsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)\> |

#### Overrides

Message&lt;ProductsServicePaginationReq\&gt;.constructor

#### Defined in

[src/products_pb.ts:711](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L711)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/products_pb.ts:681](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L681)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/products_pb.ts:709](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L709)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/products_pb.ts:674](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L674)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/products_pb.ts:688](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L688)

___

### sortKey

• **sortKey**: [`PRODUCT_SORT_KEY`](../enums/PRODUCT_SORT_KEY.md) = `PRODUCT_SORT_KEY.PRODUCT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.PRODUCT_SORT_KEY sort_key = 5;

#### Defined in

[src/products_pb.ts:702](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L702)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/products_pb.ts:695](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L695)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products_pb.ts:718](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L718)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products_pb.ts:716](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L716)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ProductsServicePaginationReq"``

#### Defined in

[src/products_pb.ts:717](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L717)

## Methods

### clone

▸ **clone**(): [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md) \| `PlainMessage`<[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

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

[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md) \| `PlainMessage`<[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md) \| `PlainMessage`<[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products_pb.ts:739](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L739)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Defined in

[src/products_pb.ts:727](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L727)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Defined in

[src/products_pb.ts:731](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L731)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServicePaginationReq`](ProductsServicePaginationReq.md)

#### Defined in

[src/products_pb.ts:735](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/products_pb.ts#L735)
