[scanswift-sdk](../README.md) / [Exports](../modules.md) / InvoicesServiceUpdateRequest

# Class: InvoicesServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a invoice

**`Generated`**

from message scanswift.InvoicesServiceUpdateRequest

## Hierarchy

- `Message`<[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)\>

  ↳ **`InvoicesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](InvoicesServiceUpdateRequest.md#constructor)

### Properties

- [amount](InvoicesServiceUpdateRequest.md#amount)
- [currencyUuid](InvoicesServiceUpdateRequest.md#currencyuuid)
- [name](InvoicesServiceUpdateRequest.md#name)
- [userComment](InvoicesServiceUpdateRequest.md#usercomment)
- [uuid](InvoicesServiceUpdateRequest.md#uuid)
- [fields](InvoicesServiceUpdateRequest.md#fields)
- [runtime](InvoicesServiceUpdateRequest.md#runtime)
- [typeName](InvoicesServiceUpdateRequest.md#typename)

### Methods

- [clone](InvoicesServiceUpdateRequest.md#clone)
- [equals](InvoicesServiceUpdateRequest.md#equals)
- [fromBinary](InvoicesServiceUpdateRequest.md#frombinary)
- [fromJson](InvoicesServiceUpdateRequest.md#fromjson)
- [fromJsonString](InvoicesServiceUpdateRequest.md#fromjsonstring)
- [getType](InvoicesServiceUpdateRequest.md#gettype)
- [toBinary](InvoicesServiceUpdateRequest.md#tobinary)
- [toJSON](InvoicesServiceUpdateRequest.md#tojson)
- [toJson](InvoicesServiceUpdateRequest.md#tojson-1)
- [toJsonString](InvoicesServiceUpdateRequest.md#tojsonstring)
- [equals](InvoicesServiceUpdateRequest.md#equals-1)
- [fromBinary](InvoicesServiceUpdateRequest.md#frombinary-1)
- [fromJson](InvoicesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](InvoicesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InvoicesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;InvoicesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/invoices_pb.ts:228

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The invoice amount (in cents)

**`Generated`**

from field: int64 amount = 13;

#### Defined in

src/invoices_pb.ts:226

___

### currencyUuid

• **currencyUuid**: `string` = `""`

UUID of the currency

**`Generated`**

from field: string currency_uuid = 12;

#### Defined in

src/invoices_pb.ts:219

___

### name

• **name**: `string` = `""`

The name of the invoice

**`Generated`**

from field: string name = 10;

#### Defined in

src/invoices_pb.ts:212

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/invoices_pb.ts:198

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

src/invoices_pb.ts:205

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/invoices_pb.ts:235

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/invoices_pb.ts:233

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.InvoicesServiceUpdateRequest"``

#### Defined in

src/invoices_pb.ts:234

## Methods

### clone

▸ **clone**(): [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md) \| `PlainMessage`<[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

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

[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md) \| `PlainMessage`<[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md) \| `PlainMessage`<[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/invoices_pb.ts:255

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Defined in

src/invoices_pb.ts:243

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Defined in

src/invoices_pb.ts:247

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`InvoicesServiceUpdateRequest`](InvoicesServiceUpdateRequest.md)

#### Defined in

src/invoices_pb.ts:251
