[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceUpdateRequest

# Class: CurrenciesServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a currency

**`Generated`**

from message tcube.CurrenciesServiceUpdateRequest

## Hierarchy

- `Message`<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\>

  ↳ **`CurrenciesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceUpdateRequest.md#constructor)

### Properties

- [code](CurrenciesServiceUpdateRequest.md#code)
- [description](CurrenciesServiceUpdateRequest.md#description)
- [name](CurrenciesServiceUpdateRequest.md#name)
- [userComment](CurrenciesServiceUpdateRequest.md#usercomment)
- [uuid](CurrenciesServiceUpdateRequest.md#uuid)
- [fields](CurrenciesServiceUpdateRequest.md#fields)
- [runtime](CurrenciesServiceUpdateRequest.md#runtime)
- [typeName](CurrenciesServiceUpdateRequest.md#typename)

### Methods

- [clone](CurrenciesServiceUpdateRequest.md#clone)
- [equals](CurrenciesServiceUpdateRequest.md#equals)
- [fromBinary](CurrenciesServiceUpdateRequest.md#frombinary)
- [fromJson](CurrenciesServiceUpdateRequest.md#fromjson)
- [fromJsonString](CurrenciesServiceUpdateRequest.md#fromjsonstring)
- [getType](CurrenciesServiceUpdateRequest.md#gettype)
- [toBinary](CurrenciesServiceUpdateRequest.md#tobinary)
- [toJSON](CurrenciesServiceUpdateRequest.md#tojson)
- [toJson](CurrenciesServiceUpdateRequest.md#tojson-1)
- [toJsonString](CurrenciesServiceUpdateRequest.md#tojsonstring)
- [equals](CurrenciesServiceUpdateRequest.md#equals-1)
- [fromBinary](CurrenciesServiceUpdateRequest.md#frombinary-1)
- [fromJson](CurrenciesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](CurrenciesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;CurrenciesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/currencies_pb.ts:169](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L169)

## Properties

### code

• **code**: `string` = `""`

Code of the currency

**`Generated`**

from field: string code = 11;

#### Defined in

[src/currencies_pb.ts:160](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L160)

___

### description

• **description**: `string` = `""`

Description of the currency

**`Generated`**

from field: string description = 12;

#### Defined in

[src/currencies_pb.ts:167](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L167)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 10;

#### Defined in

[src/currencies_pb.ts:153](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L153)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/currencies_pb.ts:139](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L139)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/currencies_pb.ts:146](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L146)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies_pb.ts:176](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L176)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies_pb.ts:174](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L174)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CurrenciesServiceUpdateRequest"``

#### Defined in

[src/currencies_pb.ts:175](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L175)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md) \| `PlainMessage`<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

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

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md) \| `PlainMessage`<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md) \| `PlainMessage`<[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies_pb.ts:196](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L196)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Defined in

[src/currencies_pb.ts:184](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L184)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Defined in

[src/currencies_pb.ts:188](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L188)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceUpdateRequest`](CurrenciesServiceUpdateRequest.md)

#### Defined in

[src/currencies_pb.ts:192](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L192)
