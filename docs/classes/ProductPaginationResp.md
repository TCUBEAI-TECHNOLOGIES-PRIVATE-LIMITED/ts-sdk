[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ProductPaginationResp

# Class: ProductPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.ProductPaginationResp

## Hierarchy

- `Message`<[`ProductPaginationResp`](ProductPaginationResp.md)\>

  ↳ **`ProductPaginationResp`**

## Table of contents

### Constructors

- [constructor](ProductPaginationResp.md#constructor)

### Properties

- [count](ProductPaginationResp.md#count)
- [payload](ProductPaginationResp.md#payload)
- [total](ProductPaginationResp.md#total)
- [fields](ProductPaginationResp.md#fields)
- [runtime](ProductPaginationResp.md#runtime)
- [typeName](ProductPaginationResp.md#typename)

### Methods

- [clone](ProductPaginationResp.md#clone)
- [equals](ProductPaginationResp.md#equals)
- [fromBinary](ProductPaginationResp.md#frombinary)
- [fromJson](ProductPaginationResp.md#fromjson)
- [fromJsonString](ProductPaginationResp.md#fromjsonstring)
- [getType](ProductPaginationResp.md#gettype)
- [toBinary](ProductPaginationResp.md#tobinary)
- [toJSON](ProductPaginationResp.md#tojson)
- [toJson](ProductPaginationResp.md#tojson-1)
- [toJsonString](ProductPaginationResp.md#tojsonstring)
- [equals](ProductPaginationResp.md#equals-1)
- [fromBinary](ProductPaginationResp.md#frombinary-1)
- [fromJson](ProductPaginationResp.md#fromjson-1)
- [fromJsonString](ProductPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductPaginationResp`](ProductPaginationResp.md)\> |

#### Overrides

Message&lt;ProductPaginationResp\&gt;.constructor

#### Defined in

[src/products_pb.ts:748](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L748)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/products_pb.ts:732](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L732)

___

### payload

• **payload**: [`Product`](Product.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.Product payload = 3;

#### Defined in

[src/products_pb.ts:746](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L746)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/products_pb.ts:739](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L739)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products_pb.ts:755](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L755)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products_pb.ts:753](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L753)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ProductPaginationResp"``

#### Defined in

[src/products_pb.ts:754](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L754)

## Methods

### clone

▸ **clone**(): [`ProductPaginationResp`](ProductPaginationResp.md)

Create a deep copy.

#### Returns

[`ProductPaginationResp`](ProductPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductPaginationResp`](ProductPaginationResp.md) \| `PlainMessage`<[`ProductPaginationResp`](ProductPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductPaginationResp`](ProductPaginationResp.md)

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

[`ProductPaginationResp`](ProductPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductPaginationResp`](ProductPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductPaginationResp`](ProductPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductPaginationResp`](ProductPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductPaginationResp`](ProductPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductPaginationResp`](ProductPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductPaginationResp`](ProductPaginationResp.md)\>

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
| `a` | `undefined` \| [`ProductPaginationResp`](ProductPaginationResp.md) \| `PlainMessage`<[`ProductPaginationResp`](ProductPaginationResp.md)\> |
| `b` | `undefined` \| [`ProductPaginationResp`](ProductPaginationResp.md) \| `PlainMessage`<[`ProductPaginationResp`](ProductPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products_pb.ts:773](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L773)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductPaginationResp`](ProductPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductPaginationResp`](ProductPaginationResp.md)

#### Defined in

[src/products_pb.ts:761](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L761)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductPaginationResp`](ProductPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductPaginationResp`](ProductPaginationResp.md)

#### Defined in

[src/products_pb.ts:765](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L765)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductPaginationResp`](ProductPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductPaginationResp`](ProductPaginationResp.md)

#### Defined in

[src/products_pb.ts:769](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/products_pb.ts#L769)
