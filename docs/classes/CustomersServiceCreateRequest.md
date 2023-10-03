[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CustomersServiceCreateRequest

# Class: CustomersServiceCreateRequest

Describes the necessary data structure during creation of a customer

**`Generated`**

from message tcube.CustomersServiceCreateRequest

## Hierarchy

- `Message`<[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)\>

  ↳ **`CustomersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](CustomersServiceCreateRequest.md#constructor)

### Properties

- [description](CustomersServiceCreateRequest.md#description)
- [entityUuid](CustomersServiceCreateRequest.md#entityuuid)
- [name](CustomersServiceCreateRequest.md#name)
- [userComment](CustomersServiceCreateRequest.md#usercomment)
- [fields](CustomersServiceCreateRequest.md#fields)
- [runtime](CustomersServiceCreateRequest.md#runtime)
- [typeName](CustomersServiceCreateRequest.md#typename)

### Methods

- [clone](CustomersServiceCreateRequest.md#clone)
- [equals](CustomersServiceCreateRequest.md#equals)
- [fromBinary](CustomersServiceCreateRequest.md#frombinary)
- [fromJson](CustomersServiceCreateRequest.md#fromjson)
- [fromJsonString](CustomersServiceCreateRequest.md#fromjsonstring)
- [getType](CustomersServiceCreateRequest.md#gettype)
- [toBinary](CustomersServiceCreateRequest.md#tobinary)
- [toJSON](CustomersServiceCreateRequest.md#tojson)
- [toJson](CustomersServiceCreateRequest.md#tojson-1)
- [toJsonString](CustomersServiceCreateRequest.md#tojsonstring)
- [equals](CustomersServiceCreateRequest.md#equals-1)
- [fromBinary](CustomersServiceCreateRequest.md#frombinary-1)
- [fromJson](CustomersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](CustomersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CustomersServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)\> |

#### Overrides

Message&lt;CustomersServiceCreateRequest\&gt;.constructor

#### Defined in

src/customers_pb.ts:96

## Properties

### description

• **description**: `string` = `""`

Description of the customer

**`Generated`**

from field: string description = 12;

#### Defined in

src/customers_pb.ts:94

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

src/customers_pb.ts:80

___

### name

• **name**: `string` = `""`

The name of the customer

**`Generated`**

from field: string name = 10;

#### Defined in

src/customers_pb.ts:87

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/customers_pb.ts:73

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/customers_pb.ts:103

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/customers_pb.ts:101

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CustomersServiceCreateRequest"``

#### Defined in

src/customers_pb.ts:102

## Methods

### clone

▸ **clone**(): [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md) \| `PlainMessage`<[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

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

[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md) \| `PlainMessage`<[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md) \| `PlainMessage`<[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/customers_pb.ts:122

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Defined in

src/customers_pb.ts:110

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Defined in

src/customers_pb.ts:114

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceCreateRequest`](CustomersServiceCreateRequest.md)

#### Defined in

src/customers_pb.ts:118
