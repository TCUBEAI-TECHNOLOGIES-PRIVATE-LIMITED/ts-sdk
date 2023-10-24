[scanswift-sdk](../README.md) / [Exports](../modules.md) / CurrenciesList

# Class: CurrenciesList

Describes the data structure that stores a list of currencies

**`Generated`**

from message scanswift.CurrenciesList

## Hierarchy

- `Message`<[`CurrenciesList`](CurrenciesList.md)\>

  ↳ **`CurrenciesList`**

## Table of contents

### Constructors

- [constructor](CurrenciesList.md#constructor)

### Properties

- [list](CurrenciesList.md#list)
- [fields](CurrenciesList.md#fields)
- [runtime](CurrenciesList.md#runtime)
- [typeName](CurrenciesList.md#typename)

### Methods

- [clone](CurrenciesList.md#clone)
- [equals](CurrenciesList.md#equals)
- [fromBinary](CurrenciesList.md#frombinary)
- [fromJson](CurrenciesList.md#fromjson)
- [fromJsonString](CurrenciesList.md#fromjsonstring)
- [getType](CurrenciesList.md#gettype)
- [toBinary](CurrenciesList.md#tobinary)
- [toJSON](CurrenciesList.md#tojson)
- [toJson](CurrenciesList.md#tojson-1)
- [toJsonString](CurrenciesList.md#tojsonstring)
- [equals](CurrenciesList.md#equals-1)
- [fromBinary](CurrenciesList.md#frombinary-1)
- [fromJson](CurrenciesList.md#fromjson-1)
- [fromJsonString](CurrenciesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CurrenciesList`](CurrenciesList.md)\> |

#### Overrides

Message&lt;CurrenciesList\&gt;.constructor

#### Defined in

[src/currencies_pb.ts:281](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L281)

## Properties

### list

• **list**: [`Currency`](Currency.md)[] = `[]`

List of currencies

**`Generated`**

from field: repeated scanswift.Currency list = 1;

#### Defined in

[src/currencies_pb.ts:279](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L279)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies_pb.ts:288](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L288)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies_pb.ts:286](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L286)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.CurrenciesList"``

#### Defined in

[src/currencies_pb.ts:287](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L287)

## Methods

### clone

▸ **clone**(): [`CurrenciesList`](CurrenciesList.md)

Create a deep copy.

#### Returns

[`CurrenciesList`](CurrenciesList.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesList`](CurrenciesList.md) \| `PlainMessage`<[`CurrenciesList`](CurrenciesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesList`](CurrenciesList.md)

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

[`CurrenciesList`](CurrenciesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesList`](CurrenciesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesList`](CurrenciesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CurrenciesList`](CurrenciesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CurrenciesList`](CurrenciesList.md)\>

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
| `a` | `undefined` \| [`CurrenciesList`](CurrenciesList.md) \| `PlainMessage`<[`CurrenciesList`](CurrenciesList.md)\> |
| `b` | `undefined` \| [`CurrenciesList`](CurrenciesList.md) \| `PlainMessage`<[`CurrenciesList`](CurrenciesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies_pb.ts:304](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L304)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CurrenciesList`](CurrenciesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Defined in

[src/currencies_pb.ts:292](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L292)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CurrenciesList`](CurrenciesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Defined in

[src/currencies_pb.ts:296](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L296)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CurrenciesList`](CurrenciesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesList`](CurrenciesList.md)

#### Defined in

[src/currencies_pb.ts:300](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L300)
