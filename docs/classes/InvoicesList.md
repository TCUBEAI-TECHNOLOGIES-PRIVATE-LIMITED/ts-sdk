[scanswift-sdk](../README.md) / [Exports](../modules.md) / InvoicesList

# Class: InvoicesList

Describes the data structure that stores a list of invoices

**`Generated`**

from message scanswift.InvoicesList

## Hierarchy

- `Message`<[`InvoicesList`](InvoicesList.md)\>

  ↳ **`InvoicesList`**

## Table of contents

### Constructors

- [constructor](InvoicesList.md#constructor)

### Properties

- [list](InvoicesList.md#list)
- [fields](InvoicesList.md#fields)
- [runtime](InvoicesList.md#runtime)
- [typeName](InvoicesList.md#typename)

### Methods

- [clone](InvoicesList.md#clone)
- [equals](InvoicesList.md#equals)
- [fromBinary](InvoicesList.md#frombinary)
- [fromJson](InvoicesList.md#fromjson)
- [fromJsonString](InvoicesList.md#fromjsonstring)
- [getType](InvoicesList.md#gettype)
- [toBinary](InvoicesList.md#tobinary)
- [toJSON](InvoicesList.md#tojson)
- [toJson](InvoicesList.md#tojson-1)
- [toJsonString](InvoicesList.md#tojsonstring)
- [equals](InvoicesList.md#equals-1)
- [fromBinary](InvoicesList.md#frombinary-1)
- [fromJson](InvoicesList.md#fromjson-1)
- [fromJsonString](InvoicesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InvoicesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`InvoicesList`](InvoicesList.md)\> |

#### Overrides

Message&lt;InvoicesList\&gt;.constructor

#### Defined in

src/invoices_pb.ts:454

## Properties

### list

• **list**: [`Invoice`](Invoice.md)[] = `[]`

List of invoices

**`Generated`**

from field: repeated scanswift.Invoice list = 1;

#### Defined in

src/invoices_pb.ts:452

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/invoices_pb.ts:461

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/invoices_pb.ts:459

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.InvoicesList"``

#### Defined in

src/invoices_pb.ts:460

## Methods

### clone

▸ **clone**(): [`InvoicesList`](InvoicesList.md)

Create a deep copy.

#### Returns

[`InvoicesList`](InvoicesList.md)

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
| `other` | `undefined` \| ``null`` \| [`InvoicesList`](InvoicesList.md) \| `PlainMessage`<[`InvoicesList`](InvoicesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InvoicesList`](InvoicesList.md)

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

[`InvoicesList`](InvoicesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InvoicesList`](InvoicesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesList`](InvoicesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InvoicesList`](InvoicesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesList`](InvoicesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`InvoicesList`](InvoicesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`InvoicesList`](InvoicesList.md)\>

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
| `a` | `undefined` \| [`InvoicesList`](InvoicesList.md) \| `PlainMessage`<[`InvoicesList`](InvoicesList.md)\> |
| `b` | `undefined` \| [`InvoicesList`](InvoicesList.md) \| `PlainMessage`<[`InvoicesList`](InvoicesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/invoices_pb.ts:477

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`InvoicesList`](InvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`InvoicesList`](InvoicesList.md)

#### Defined in

src/invoices_pb.ts:465

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`InvoicesList`](InvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesList`](InvoicesList.md)

#### Defined in

src/invoices_pb.ts:469

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`InvoicesList`](InvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesList`](InvoicesList.md)

#### Defined in

src/invoices_pb.ts:473
