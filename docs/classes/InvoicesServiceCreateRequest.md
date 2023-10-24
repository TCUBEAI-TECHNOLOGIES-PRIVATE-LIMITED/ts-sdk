[scanswift-sdk](../README.md) / [Exports](../modules.md) / InvoicesServiceCreateRequest

# Class: InvoicesServiceCreateRequest

Describes the necessary data structure during creation of a invoice

**`Generated`**

from message scanswift.InvoicesServiceCreateRequest

## Hierarchy

- `Message`<[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)\>

  ↳ **`InvoicesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](InvoicesServiceCreateRequest.md#constructor)

### Properties

- [amount](InvoicesServiceCreateRequest.md#amount)
- [currencyUuid](InvoicesServiceCreateRequest.md#currencyuuid)
- [entityUuid](InvoicesServiceCreateRequest.md#entityuuid)
- [name](InvoicesServiceCreateRequest.md#name)
- [userComment](InvoicesServiceCreateRequest.md#usercomment)
- [fields](InvoicesServiceCreateRequest.md#fields)
- [runtime](InvoicesServiceCreateRequest.md#runtime)
- [typeName](InvoicesServiceCreateRequest.md#typename)

### Methods

- [clone](InvoicesServiceCreateRequest.md#clone)
- [equals](InvoicesServiceCreateRequest.md#equals)
- [fromBinary](InvoicesServiceCreateRequest.md#frombinary)
- [fromJson](InvoicesServiceCreateRequest.md#fromjson)
- [fromJsonString](InvoicesServiceCreateRequest.md#fromjsonstring)
- [getType](InvoicesServiceCreateRequest.md#gettype)
- [toBinary](InvoicesServiceCreateRequest.md#tobinary)
- [toJSON](InvoicesServiceCreateRequest.md#tojson)
- [toJson](InvoicesServiceCreateRequest.md#tojson-1)
- [toJsonString](InvoicesServiceCreateRequest.md#tojsonstring)
- [equals](InvoicesServiceCreateRequest.md#equals-1)
- [fromBinary](InvoicesServiceCreateRequest.md#frombinary-1)
- [fromJson](InvoicesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](InvoicesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InvoicesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;InvoicesServiceCreateRequest\&gt;.constructor

#### Defined in

src/invoices_pb.ts:154

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The invoice amount (in cents)

**`Generated`**

from field: int64 amount = 13;

#### Defined in

src/invoices_pb.ts:152

___

### currencyUuid

• **currencyUuid**: `string` = `""`

UUID of the currency

**`Generated`**

from field: string currency_uuid = 12;

#### Defined in

src/invoices_pb.ts:145

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

src/invoices_pb.ts:131

___

### name

• **name**: `string` = `""`

The name of the invoice

**`Generated`**

from field: string name = 10;

#### Defined in

src/invoices_pb.ts:138

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/invoices_pb.ts:124

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/invoices_pb.ts:161

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/invoices_pb.ts:159

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.InvoicesServiceCreateRequest"``

#### Defined in

src/invoices_pb.ts:160

## Methods

### clone

▸ **clone**(): [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md) \| `PlainMessage`<[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

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

[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md) \| `PlainMessage`<[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md) \| `PlainMessage`<[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/invoices_pb.ts:181

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Defined in

src/invoices_pb.ts:169

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Defined in

src/invoices_pb.ts:173

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceCreateRequest`](InvoicesServiceCreateRequest.md)

#### Defined in

src/invoices_pb.ts:177
