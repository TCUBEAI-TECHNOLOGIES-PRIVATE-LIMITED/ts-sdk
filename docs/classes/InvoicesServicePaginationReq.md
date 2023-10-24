[scanswift-sdk](../README.md) / [Exports](../modules.md) / InvoicesServicePaginationReq

# Class: InvoicesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message scanswift.InvoicesServicePaginationReq

## Hierarchy

- `Message`<[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)\>

  ↳ **`InvoicesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](InvoicesServicePaginationReq.md#constructor)

### Properties

- [count](InvoicesServicePaginationReq.md#count)
- [entityUuid](InvoicesServicePaginationReq.md#entityuuid)
- [isActive](InvoicesServicePaginationReq.md#isactive)
- [offset](InvoicesServicePaginationReq.md#offset)
- [sortKey](InvoicesServicePaginationReq.md#sortkey)
- [sortOrder](InvoicesServicePaginationReq.md#sortorder)
- [fields](InvoicesServicePaginationReq.md#fields)
- [runtime](InvoicesServicePaginationReq.md#runtime)
- [typeName](InvoicesServicePaginationReq.md#typename)

### Methods

- [clone](InvoicesServicePaginationReq.md#clone)
- [equals](InvoicesServicePaginationReq.md#equals)
- [fromBinary](InvoicesServicePaginationReq.md#frombinary)
- [fromJson](InvoicesServicePaginationReq.md#fromjson)
- [fromJsonString](InvoicesServicePaginationReq.md#fromjsonstring)
- [getType](InvoicesServicePaginationReq.md#gettype)
- [toBinary](InvoicesServicePaginationReq.md#tobinary)
- [toJSON](InvoicesServicePaginationReq.md#tojson)
- [toJson](InvoicesServicePaginationReq.md#tojson-1)
- [toJsonString](InvoicesServicePaginationReq.md#tojsonstring)
- [equals](InvoicesServicePaginationReq.md#equals-1)
- [fromBinary](InvoicesServicePaginationReq.md#frombinary-1)
- [fromJson](InvoicesServicePaginationReq.md#fromjson-1)
- [fromJsonString](InvoicesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InvoicesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)\> |

#### Overrides

Message&lt;InvoicesServicePaginationReq\&gt;.constructor

#### Defined in

src/invoices_pb.ts:531

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/invoices_pb.ts:501

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/invoices_pb.ts:529

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/invoices_pb.ts:494

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/invoices_pb.ts:508

___

### sortKey

• **sortKey**: [`INVOICE_SORT_KEY`](../enums/INVOICE_SORT_KEY.md) = `INVOICE_SORT_KEY.INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/invoices_pb.ts:522

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

src/invoices_pb.ts:515

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/invoices_pb.ts:538

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/invoices_pb.ts:536

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.InvoicesServicePaginationReq"``

#### Defined in

src/invoices_pb.ts:537

## Methods

### clone

▸ **clone**(): [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md) \| `PlainMessage`<[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

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

[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md) \| `PlainMessage`<[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md) \| `PlainMessage`<[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/invoices_pb.ts:559

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Defined in

src/invoices_pb.ts:547

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Defined in

src/invoices_pb.ts:551

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServicePaginationReq`](InvoicesServicePaginationReq.md)

#### Defined in

src/invoices_pb.ts:555
