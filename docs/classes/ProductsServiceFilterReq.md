[scanswift-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceFilterReq

# Class: ProductsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.ProductsServiceFilterReq

## Hierarchy

- `Message`<[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)\>

  ↳ **`ProductsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProductsServiceFilterReq.md#constructor)

### Properties

- [code](ProductsServiceFilterReq.md#code)
- [count](ProductsServiceFilterReq.md#count)
- [creationTimestampEnd](ProductsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProductsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ProductsServiceFilterReq.md#entityuuid)
- [globalIdentifier](ProductsServiceFilterReq.md#globalidentifier)
- [isActive](ProductsServiceFilterReq.md#isactive)
- [name](ProductsServiceFilterReq.md#name)
- [offset](ProductsServiceFilterReq.md#offset)
- [sortKey](ProductsServiceFilterReq.md#sortkey)
- [sortOrder](ProductsServiceFilterReq.md#sortorder)
- [fields](ProductsServiceFilterReq.md#fields)
- [runtime](ProductsServiceFilterReq.md#runtime)
- [typeName](ProductsServiceFilterReq.md#typename)

### Methods

- [clone](ProductsServiceFilterReq.md#clone)
- [equals](ProductsServiceFilterReq.md#equals)
- [fromBinary](ProductsServiceFilterReq.md#frombinary)
- [fromJson](ProductsServiceFilterReq.md#fromjson)
- [fromJsonString](ProductsServiceFilterReq.md#fromjsonstring)
- [getType](ProductsServiceFilterReq.md#gettype)
- [toBinary](ProductsServiceFilterReq.md#tobinary)
- [toJSON](ProductsServiceFilterReq.md#tojson)
- [toJson](ProductsServiceFilterReq.md#tojson-1)
- [toJsonString](ProductsServiceFilterReq.md#tojsonstring)
- [equals](ProductsServiceFilterReq.md#equals-1)
- [fromBinary](ProductsServiceFilterReq.md#frombinary-1)
- [fromJson](ProductsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProductsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ProductsServiceFilterReq\&gt;.constructor

#### Defined in

[src/products_pb.ts:803](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L803)

## Properties

### code

• **code**: `string` = `""`

Code of the product

**`Generated`**

from field: string code = 21;

#### Defined in

[src/products_pb.ts:794](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L794)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/products_pb.ts:738](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L738)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/products_pb.ts:773](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L773)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/products_pb.ts:766](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L766)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/products_pb.ts:780](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L780)

___

### globalIdentifier

• **globalIdentifier**: `string` = `""`

The global identifier of the product

**`Generated`**

from field: string global_identifier = 22;

#### Defined in

[src/products_pb.ts:801](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L801)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/products_pb.ts:731](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L731)

___

### name

• **name**: `string` = `""`

The name of the product

**`Generated`**

from field: string name = 20;

#### Defined in

[src/products_pb.ts:787](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L787)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/products_pb.ts:745](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L745)

___

### sortKey

• **sortKey**: [`PRODUCT_SORT_KEY`](../enums/PRODUCT_SORT_KEY.md) = `PRODUCT_SORT_KEY.PRODUCT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.PRODUCT_SORT_KEY sort_key = 5;

#### Defined in

[src/products_pb.ts:759](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L759)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/products_pb.ts:752](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L752)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products_pb.ts:810](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L810)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products_pb.ts:808](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L808)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ProductsServiceFilterReq"``

#### Defined in

[src/products_pb.ts:809](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L809)

## Methods

### clone

▸ **clone**(): [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md) \| `PlainMessage`<[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

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

[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md) \| `PlainMessage`<[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md) \| `PlainMessage`<[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products_pb.ts:836](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L836)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Defined in

[src/products_pb.ts:824](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L824)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Defined in

[src/products_pb.ts:828](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L828)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceFilterReq`](ProductsServiceFilterReq.md)

#### Defined in

[src/products_pb.ts:832](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L832)
