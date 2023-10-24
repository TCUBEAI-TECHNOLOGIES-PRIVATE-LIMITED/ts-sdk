[scanswift-sdk](../README.md) / [Exports](../modules.md) / InvoicesServiceFilterReq

# Class: InvoicesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.InvoicesServiceFilterReq

## Hierarchy

- `Message`<[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)\>

  ↳ **`InvoicesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](InvoicesServiceFilterReq.md#constructor)

### Properties

- [code](InvoicesServiceFilterReq.md#code)
- [count](InvoicesServiceFilterReq.md#count)
- [creationTimestampEnd](InvoicesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](InvoicesServiceFilterReq.md#creationtimestampstart)
- [currencyUuid](InvoicesServiceFilterReq.md#currencyuuid)
- [entityUuid](InvoicesServiceFilterReq.md#entityuuid)
- [isActive](InvoicesServiceFilterReq.md#isactive)
- [name](InvoicesServiceFilterReq.md#name)
- [offset](InvoicesServiceFilterReq.md#offset)
- [sortKey](InvoicesServiceFilterReq.md#sortkey)
- [sortOrder](InvoicesServiceFilterReq.md#sortorder)
- [status](InvoicesServiceFilterReq.md#status)
- [fields](InvoicesServiceFilterReq.md#fields)
- [runtime](InvoicesServiceFilterReq.md#runtime)
- [typeName](InvoicesServiceFilterReq.md#typename)

### Methods

- [clone](InvoicesServiceFilterReq.md#clone)
- [equals](InvoicesServiceFilterReq.md#equals)
- [fromBinary](InvoicesServiceFilterReq.md#frombinary)
- [fromJson](InvoicesServiceFilterReq.md#fromjson)
- [fromJsonString](InvoicesServiceFilterReq.md#fromjsonstring)
- [getType](InvoicesServiceFilterReq.md#gettype)
- [toBinary](InvoicesServiceFilterReq.md#tobinary)
- [toJSON](InvoicesServiceFilterReq.md#tojson)
- [toJson](InvoicesServiceFilterReq.md#tojson-1)
- [toJsonString](InvoicesServiceFilterReq.md#tojsonstring)
- [equals](InvoicesServiceFilterReq.md#equals-1)
- [fromBinary](InvoicesServiceFilterReq.md#frombinary-1)
- [fromJson](InvoicesServiceFilterReq.md#fromjson-1)
- [fromJsonString](InvoicesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InvoicesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)\> |

#### Overrides

Message&lt;InvoicesServiceFilterReq\&gt;.constructor

#### Defined in

src/invoices_pb.ts:713

## Properties

### code

• **code**: `string` = `""`

Code of the invoice

**`Generated`**

from field: string code = 21;

#### Defined in

src/invoices_pb.ts:697

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/invoices_pb.ts:641

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

src/invoices_pb.ts:676

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

src/invoices_pb.ts:669

___

### currencyUuid

• **currencyUuid**: `string` = `""`

UUID of the currency

**`Generated`**

from field: string currency_uuid = 22;

#### Defined in

src/invoices_pb.ts:704

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/invoices_pb.ts:683

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/invoices_pb.ts:634

___

### name

• **name**: `string` = `""`

The name of the invoice

**`Generated`**

from field: string name = 20;

#### Defined in

src/invoices_pb.ts:690

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/invoices_pb.ts:648

___

### sortKey

• **sortKey**: [`INVOICE_SORT_KEY`](../enums/INVOICE_SORT_KEY.md) = `INVOICE_SORT_KEY.INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/invoices_pb.ts:662

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

src/invoices_pb.ts:655

___

### status

• **status**: [`INVOICE_STATUS`](../enums/INVOICE_STATUS.md) = `INVOICE_STATUS.INVOICE_STATUS_ANY_UNSPECIFIED`

The status of the invoice

**`Generated`**

from field: scanswift.INVOICE_STATUS status = 24;

#### Defined in

src/invoices_pb.ts:711

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/invoices_pb.ts:720

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/invoices_pb.ts:718

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.InvoicesServiceFilterReq"``

#### Defined in

src/invoices_pb.ts:719

## Methods

### clone

▸ **clone**(): [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md) \| `PlainMessage`<[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

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

[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md) \| `PlainMessage`<[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md) \| `PlainMessage`<[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/invoices_pb.ts:747

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Defined in

src/invoices_pb.ts:735

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Defined in

src/invoices_pb.ts:739

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceFilterReq`](InvoicesServiceFilterReq.md)

#### Defined in

src/invoices_pb.ts:743
