[scanswift-sdk](../README.md) / [Exports](../modules.md) / InvoicesServiceSearchAllReq

# Class: InvoicesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message scanswift.InvoicesServiceSearchAllReq

## Hierarchy

- `Message`<[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)\>

  ↳ **`InvoicesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](InvoicesServiceSearchAllReq.md#constructor)

### Properties

- [count](InvoicesServiceSearchAllReq.md#count)
- [entityUuid](InvoicesServiceSearchAllReq.md#entityuuid)
- [isActive](InvoicesServiceSearchAllReq.md#isactive)
- [offset](InvoicesServiceSearchAllReq.md#offset)
- [searchKey](InvoicesServiceSearchAllReq.md#searchkey)
- [sortKey](InvoicesServiceSearchAllReq.md#sortkey)
- [sortOrder](InvoicesServiceSearchAllReq.md#sortorder)
- [status](InvoicesServiceSearchAllReq.md#status)
- [fields](InvoicesServiceSearchAllReq.md#fields)
- [runtime](InvoicesServiceSearchAllReq.md#runtime)
- [typeName](InvoicesServiceSearchAllReq.md#typename)

### Methods

- [clone](InvoicesServiceSearchAllReq.md#clone)
- [equals](InvoicesServiceSearchAllReq.md#equals)
- [fromBinary](InvoicesServiceSearchAllReq.md#frombinary)
- [fromJson](InvoicesServiceSearchAllReq.md#fromjson)
- [fromJsonString](InvoicesServiceSearchAllReq.md#fromjsonstring)
- [getType](InvoicesServiceSearchAllReq.md#gettype)
- [toBinary](InvoicesServiceSearchAllReq.md#tobinary)
- [toJSON](InvoicesServiceSearchAllReq.md#tojson)
- [toJson](InvoicesServiceSearchAllReq.md#tojson-1)
- [toJsonString](InvoicesServiceSearchAllReq.md#tojsonstring)
- [equals](InvoicesServiceSearchAllReq.md#equals-1)
- [fromBinary](InvoicesServiceSearchAllReq.md#frombinary-1)
- [fromJson](InvoicesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](InvoicesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InvoicesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;InvoicesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/invoices_pb.ts:815

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/invoices_pb.ts:771

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/invoices_pb.ts:799

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/invoices_pb.ts:764

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/invoices_pb.ts:778

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/invoices_pb.ts:806

___

### sortKey

• **sortKey**: [`INVOICE_SORT_KEY`](../enums/INVOICE_SORT_KEY.md) = `INVOICE_SORT_KEY.INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/invoices_pb.ts:792

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

src/invoices_pb.ts:785

___

### status

• **status**: [`INVOICE_STATUS`](../enums/INVOICE_STATUS.md) = `INVOICE_STATUS.INVOICE_STATUS_ANY_UNSPECIFIED`

The status of the invoice

**`Generated`**

from field: scanswift.INVOICE_STATUS status = 20;

#### Defined in

src/invoices_pb.ts:813

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/invoices_pb.ts:822

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/invoices_pb.ts:820

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.InvoicesServiceSearchAllReq"``

#### Defined in

src/invoices_pb.ts:821

## Methods

### clone

▸ **clone**(): [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md) \| `PlainMessage`<[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

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

[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md) \| `PlainMessage`<[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md) \| `PlainMessage`<[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/invoices_pb.ts:845

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Defined in

src/invoices_pb.ts:833

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Defined in

src/invoices_pb.ts:837

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceSearchAllReq`](InvoicesServiceSearchAllReq.md)

#### Defined in

src/invoices_pb.ts:841
