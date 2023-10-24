[scanswift-sdk](../README.md) / [Exports](../modules.md) / InvoicePaginationResp

# Class: InvoicePaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message scanswift.InvoicePaginationResp

## Hierarchy

- `Message`<[`InvoicePaginationResp`](InvoicePaginationResp.md)\>

  ↳ **`InvoicePaginationResp`**

## Table of contents

### Constructors

- [constructor](InvoicePaginationResp.md#constructor)

### Properties

- [count](InvoicePaginationResp.md#count)
- [payload](InvoicePaginationResp.md#payload)
- [total](InvoicePaginationResp.md#total)
- [fields](InvoicePaginationResp.md#fields)
- [runtime](InvoicePaginationResp.md#runtime)
- [typeName](InvoicePaginationResp.md#typename)

### Methods

- [clone](InvoicePaginationResp.md#clone)
- [equals](InvoicePaginationResp.md#equals)
- [fromBinary](InvoicePaginationResp.md#frombinary)
- [fromJson](InvoicePaginationResp.md#fromjson)
- [fromJsonString](InvoicePaginationResp.md#fromjsonstring)
- [getType](InvoicePaginationResp.md#gettype)
- [toBinary](InvoicePaginationResp.md#tobinary)
- [toJSON](InvoicePaginationResp.md#tojson)
- [toJson](InvoicePaginationResp.md#tojson-1)
- [toJsonString](InvoicePaginationResp.md#tojsonstring)
- [equals](InvoicePaginationResp.md#equals-1)
- [fromBinary](InvoicePaginationResp.md#frombinary-1)
- [fromJson](InvoicePaginationResp.md#fromjson-1)
- [fromJsonString](InvoicePaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new InvoicePaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`InvoicePaginationResp`](InvoicePaginationResp.md)\> |

#### Overrides

Message&lt;InvoicePaginationResp\&gt;.constructor

#### Defined in

src/invoices_pb.ts:592

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

src/invoices_pb.ts:576

___

### payload

• **payload**: [`Invoice`](Invoice.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated scanswift.Invoice payload = 3;

#### Defined in

src/invoices_pb.ts:590

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

src/invoices_pb.ts:583

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/invoices_pb.ts:599

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/invoices_pb.ts:597

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.InvoicePaginationResp"``

#### Defined in

src/invoices_pb.ts:598

## Methods

### clone

▸ **clone**(): [`InvoicePaginationResp`](InvoicePaginationResp.md)

Create a deep copy.

#### Returns

[`InvoicePaginationResp`](InvoicePaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`InvoicePaginationResp`](InvoicePaginationResp.md) \| `PlainMessage`<[`InvoicePaginationResp`](InvoicePaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InvoicePaginationResp`](InvoicePaginationResp.md)

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

[`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InvoicePaginationResp`](InvoicePaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InvoicePaginationResp`](InvoicePaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`InvoicePaginationResp`](InvoicePaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`InvoicePaginationResp`](InvoicePaginationResp.md)\>

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
| `a` | `undefined` \| [`InvoicePaginationResp`](InvoicePaginationResp.md) \| `PlainMessage`<[`InvoicePaginationResp`](InvoicePaginationResp.md)\> |
| `b` | `undefined` \| [`InvoicePaginationResp`](InvoicePaginationResp.md) \| `PlainMessage`<[`InvoicePaginationResp`](InvoicePaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/invoices_pb.ts:617

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Defined in

src/invoices_pb.ts:605

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Defined in

src/invoices_pb.ts:609

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicePaginationResp`](InvoicePaginationResp.md)

#### Defined in

src/invoices_pb.ts:613
