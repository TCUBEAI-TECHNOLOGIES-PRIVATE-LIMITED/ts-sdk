[scanswift-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceCreateRequest

# Class: CurrenciesServiceCreateRequest

Describes the necessary data structure during creation of a currency

**`Generated`**

from message scanswift.CurrenciesServiceCreateRequest

## Hierarchy

- `Message`<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\>

  ↳ **`CurrenciesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceCreateRequest.md#constructor)

### Properties

- [code](CurrenciesServiceCreateRequest.md#code)
- [description](CurrenciesServiceCreateRequest.md#description)
- [name](CurrenciesServiceCreateRequest.md#name)
- [userComment](CurrenciesServiceCreateRequest.md#usercomment)
- [fields](CurrenciesServiceCreateRequest.md#fields)
- [runtime](CurrenciesServiceCreateRequest.md#runtime)
- [typeName](CurrenciesServiceCreateRequest.md#typename)

### Methods

- [clone](CurrenciesServiceCreateRequest.md#clone)
- [equals](CurrenciesServiceCreateRequest.md#equals)
- [fromBinary](CurrenciesServiceCreateRequest.md#frombinary)
- [fromJson](CurrenciesServiceCreateRequest.md#fromjson)
- [fromJsonString](CurrenciesServiceCreateRequest.md#fromjsonstring)
- [getType](CurrenciesServiceCreateRequest.md#gettype)
- [toBinary](CurrenciesServiceCreateRequest.md#tobinary)
- [toJSON](CurrenciesServiceCreateRequest.md#tojson)
- [toJson](CurrenciesServiceCreateRequest.md#tojson-1)
- [toJsonString](CurrenciesServiceCreateRequest.md#tojsonstring)
- [equals](CurrenciesServiceCreateRequest.md#equals-1)
- [fromBinary](CurrenciesServiceCreateRequest.md#frombinary-1)
- [fromJson](CurrenciesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](CurrenciesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;CurrenciesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/currencies_pb.ts:96](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L96)

## Properties

### code

• **code**: `string` = `""`

Code of the currency

**`Generated`**

from field: string code = 11;

#### Defined in

[src/currencies_pb.ts:87](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L87)

___

### description

• **description**: `string` = `""`

Description of the currency

**`Generated`**

from field: string description = 12;

#### Defined in

[src/currencies_pb.ts:94](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L94)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 10;

#### Defined in

[src/currencies_pb.ts:80](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L80)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/currencies_pb.ts:73](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L73)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies_pb.ts:103](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L103)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies_pb.ts:101](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L101)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.CurrenciesServiceCreateRequest"``

#### Defined in

[src/currencies_pb.ts:102](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L102)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md) \| `PlainMessage`<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

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

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md) \| `PlainMessage`<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md) \| `PlainMessage`<[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies_pb.ts:122](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L122)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Defined in

[src/currencies_pb.ts:110](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L110)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Defined in

[src/currencies_pb.ts:114](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L114)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCreateRequest`](CurrenciesServiceCreateRequest.md)

#### Defined in

[src/currencies_pb.ts:118](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L118)
