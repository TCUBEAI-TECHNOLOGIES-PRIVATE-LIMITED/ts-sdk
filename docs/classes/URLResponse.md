[scanswift-sdk](../README.md) / [Exports](../modules.md) / URLResponse

# Class: URLResponse

Describes the response that contains a URL endpoint

**`Generated`**

from message scanswift.URLResponse

## Hierarchy

- `Message`<[`URLResponse`](URLResponse.md)\>

  ↳ **`URLResponse`**

## Table of contents

### Constructors

- [constructor](URLResponse.md#constructor)

### Properties

- [url](URLResponse.md#url)
- [fields](URLResponse.md#fields)
- [runtime](URLResponse.md#runtime)
- [typeName](URLResponse.md#typename)

### Methods

- [clone](URLResponse.md#clone)
- [equals](URLResponse.md#equals)
- [fromBinary](URLResponse.md#frombinary)
- [fromJson](URLResponse.md#fromjson)
- [fromJsonString](URLResponse.md#fromjsonstring)
- [getType](URLResponse.md#gettype)
- [toBinary](URLResponse.md#tobinary)
- [toJSON](URLResponse.md#tojson)
- [toJson](URLResponse.md#tojson-1)
- [toJsonString](URLResponse.md#tojsonstring)
- [equals](URLResponse.md#equals-1)
- [fromBinary](URLResponse.md#frombinary-1)
- [fromJson](URLResponse.md#fromjson-1)
- [fromJsonString](URLResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new URLResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`URLResponse`](URLResponse.md)\> |

#### Overrides

Message&lt;URLResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:239](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L239)

## Properties

### url

• **url**: `string` = `""`

Stores the url of the resource

**`Generated`**

from field: string url = 1;

#### Defined in

[src/base_pb.ts:237](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L237)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:246](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L246)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:244](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L244)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.URLResponse"``

#### Defined in

[src/base_pb.ts:245](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L245)

## Methods

### clone

▸ **clone**(): [`URLResponse`](URLResponse.md)

Create a deep copy.

#### Returns

[`URLResponse`](URLResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`URLResponse`](URLResponse.md) \| `PlainMessage`<[`URLResponse`](URLResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`URLResponse`](URLResponse.md)

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

[`URLResponse`](URLResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`URLResponse`](URLResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`URLResponse`](URLResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`URLResponse`](URLResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`URLResponse`](URLResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`URLResponse`](URLResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`URLResponse`](URLResponse.md)\>

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
| `a` | `undefined` \| [`URLResponse`](URLResponse.md) \| `PlainMessage`<[`URLResponse`](URLResponse.md)\> |
| `b` | `undefined` \| [`URLResponse`](URLResponse.md) \| `PlainMessage`<[`URLResponse`](URLResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:262](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L262)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`URLResponse`](URLResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`URLResponse`](URLResponse.md)

#### Defined in

[src/base_pb.ts:250](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L250)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`URLResponse`](URLResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`URLResponse`](URLResponse.md)

#### Defined in

[src/base_pb.ts:254](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L254)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`URLResponse`](URLResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`URLResponse`](URLResponse.md)

#### Defined in

[src/base_pb.ts:258](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L258)
