[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CustomersList

# Class: CustomersList

Describes the data structure that stores a list of customers

**`Generated`**

from message tcube.CustomersList

## Hierarchy

- `Message`<[`CustomersList`](CustomersList.md)\>

  ↳ **`CustomersList`**

## Table of contents

### Constructors

- [constructor](CustomersList.md#constructor)

### Properties

- [list](CustomersList.md#list)
- [fields](CustomersList.md#fields)
- [runtime](CustomersList.md#runtime)
- [typeName](CustomersList.md#typename)

### Methods

- [clone](CustomersList.md#clone)
- [equals](CustomersList.md#equals)
- [fromBinary](CustomersList.md#frombinary)
- [fromJson](CustomersList.md#fromjson)
- [fromJsonString](CustomersList.md#fromjsonstring)
- [getType](CustomersList.md#gettype)
- [toBinary](CustomersList.md#tobinary)
- [toJSON](CustomersList.md#tojson)
- [toJson](CustomersList.md#tojson-1)
- [toJsonString](CustomersList.md#tojsonstring)
- [equals](CustomersList.md#equals-1)
- [fromBinary](CustomersList.md#frombinary-1)
- [fromJson](CustomersList.md#fromjson-1)
- [fromJsonString](CustomersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new CustomersList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CustomersList`](CustomersList.md)\> |

#### Overrides

Message&lt;CustomersList\&gt;.constructor

#### Defined in

src/customers_pb.ts:281

## Properties

### list

• **list**: [`Customer`](Customer.md)[] = `[]`

List of customers

**`Generated`**

from field: repeated tcube.Customer list = 1;

#### Defined in

src/customers_pb.ts:279

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/customers_pb.ts:288

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/customers_pb.ts:286

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CustomersList"``

#### Defined in

src/customers_pb.ts:287

## Methods

### clone

▸ **clone**(): [`CustomersList`](CustomersList.md)

Create a deep copy.

#### Returns

[`CustomersList`](CustomersList.md)

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
| `other` | `undefined` \| ``null`` \| [`CustomersList`](CustomersList.md) \| `PlainMessage`<[`CustomersList`](CustomersList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CustomersList`](CustomersList.md)

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

[`CustomersList`](CustomersList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CustomersList`](CustomersList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersList`](CustomersList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CustomersList`](CustomersList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersList`](CustomersList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CustomersList`](CustomersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CustomersList`](CustomersList.md)\>

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
| `a` | `undefined` \| [`CustomersList`](CustomersList.md) \| `PlainMessage`<[`CustomersList`](CustomersList.md)\> |
| `b` | `undefined` \| [`CustomersList`](CustomersList.md) \| `PlainMessage`<[`CustomersList`](CustomersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/customers_pb.ts:304

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CustomersList`](CustomersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CustomersList`](CustomersList.md)

#### Defined in

src/customers_pb.ts:292

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CustomersList`](CustomersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersList`](CustomersList.md)

#### Defined in

src/customers_pb.ts:296

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CustomersList`](CustomersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersList`](CustomersList.md)

#### Defined in

src/customers_pb.ts:300
