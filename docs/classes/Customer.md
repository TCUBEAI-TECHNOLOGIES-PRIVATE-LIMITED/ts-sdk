[scanswift-sdk](../README.md) / [Exports](../modules.md) / Customer

# Class: Customer

Describes the data structure of each customer on the platform

**`Generated`**

from message scanswift.Customer

## Hierarchy

- `Message`<[`Customer`](Customer.md)\>

  ↳ **`Customer`**

## Table of contents

### Constructors

- [constructor](Customer.md#constructor)

### Properties

- [code](Customer.md#code)
- [description](Customer.md#description)
- [entityUuid](Customer.md#entityuuid)
- [metadata](Customer.md#metadata)
- [name](Customer.md#name)
- [fields](Customer.md#fields)
- [runtime](Customer.md#runtime)
- [typeName](Customer.md#typename)

### Methods

- [clone](Customer.md#clone)
- [equals](Customer.md#equals)
- [fromBinary](Customer.md#frombinary)
- [fromJson](Customer.md#fromjson)
- [fromJsonString](Customer.md#fromjsonstring)
- [getType](Customer.md#gettype)
- [toBinary](Customer.md#tobinary)
- [toJSON](Customer.md#tojson)
- [toJson](Customer.md#tojson-1)
- [toJsonString](Customer.md#tojsonstring)
- [equals](Customer.md#equals-1)
- [fromBinary](Customer.md#frombinary-1)
- [fromJson](Customer.md#fromjson-1)
- [fromJsonString](Customer.md#fromjsonstring-1)

## Constructors

### constructor

• **new Customer**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Customer`](Customer.md)\> |

#### Overrides

Message&lt;Customer\&gt;.constructor

#### Defined in

[src/customers_pb.ts:235](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L235)

## Properties

### code

• **code**: `string` = `""`

Code of the customer

**`Generated`**

from field: string code = 11;

#### Defined in

[src/customers_pb.ts:226](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L226)

___

### description

• **description**: `string` = `""`

Description of the customer

**`Generated`**

from field: string description = 12;

#### Defined in

[src/customers_pb.ts:233](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L233)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/customers_pb.ts:212](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L212)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/customers_pb.ts:205](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L205)

___

### name

• **name**: `string` = `""`

The name of the customer

**`Generated`**

from field: string name = 10;

#### Defined in

[src/customers_pb.ts:219](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L219)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/customers_pb.ts:242](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L242)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/customers_pb.ts:240](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L240)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.Customer"``

#### Defined in

[src/customers_pb.ts:241](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L241)

## Methods

### clone

▸ **clone**(): [`Customer`](Customer.md)

Create a deep copy.

#### Returns

[`Customer`](Customer.md)

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
| `other` | `undefined` \| ``null`` \| [`Customer`](Customer.md) \| `PlainMessage`<[`Customer`](Customer.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Customer`](Customer.md)

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

[`Customer`](Customer.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Customer`](Customer.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Customer`](Customer.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Customer`](Customer.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Customer`](Customer.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Customer`](Customer.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Customer`](Customer.md)\>

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
| `a` | `undefined` \| [`Customer`](Customer.md) \| `PlainMessage`<[`Customer`](Customer.md)\> |
| `b` | `undefined` \| [`Customer`](Customer.md) \| `PlainMessage`<[`Customer`](Customer.md)\> |

#### Returns

`boolean`

#### Defined in

[src/customers_pb.ts:262](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L262)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Customer`](Customer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Customer`](Customer.md)

#### Defined in

[src/customers_pb.ts:250](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L250)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Customer`](Customer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Customer`](Customer.md)

#### Defined in

[src/customers_pb.ts:254](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L254)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Customer`](Customer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Customer`](Customer.md)

#### Defined in

[src/customers_pb.ts:258](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/customers_pb.ts#L258)
