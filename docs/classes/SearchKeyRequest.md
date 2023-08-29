[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SearchKeyRequest

# Class: SearchKeyRequest

Describes a simple search key request

**`Generated`**

from message tcube.SearchKeyRequest

## Hierarchy

- `Message`<[`SearchKeyRequest`](SearchKeyRequest.md)\>

  ↳ **`SearchKeyRequest`**

## Table of contents

### Constructors

- [constructor](SearchKeyRequest.md#constructor)

### Properties

- [searchKey](SearchKeyRequest.md#searchkey)
- [fields](SearchKeyRequest.md#fields)
- [runtime](SearchKeyRequest.md#runtime)
- [typeName](SearchKeyRequest.md#typename)

### Methods

- [clone](SearchKeyRequest.md#clone)
- [equals](SearchKeyRequest.md#equals)
- [fromBinary](SearchKeyRequest.md#frombinary)
- [fromJson](SearchKeyRequest.md#fromjson)
- [fromJsonString](SearchKeyRequest.md#fromjsonstring)
- [getType](SearchKeyRequest.md#gettype)
- [toBinary](SearchKeyRequest.md#tobinary)
- [toJSON](SearchKeyRequest.md#tojson)
- [toJson](SearchKeyRequest.md#tojson-1)
- [toJsonString](SearchKeyRequest.md#tojsonstring)
- [equals](SearchKeyRequest.md#equals-1)
- [fromBinary](SearchKeyRequest.md#frombinary-1)
- [fromJson](SearchKeyRequest.md#fromjson-1)
- [fromJsonString](SearchKeyRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SearchKeyRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SearchKeyRequest`](SearchKeyRequest.md)\> |

#### Overrides

Message&lt;SearchKeyRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:912](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L912)

## Properties

### searchKey

• **searchKey**: `string` = `""`

The search key

**`Generated`**

from field: string search_key = 1;

#### Defined in

[src/base_pb.ts:910](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L910)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:919](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L919)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:917](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L917)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SearchKeyRequest"``

#### Defined in

[src/base_pb.ts:918](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L918)

## Methods

### clone

▸ **clone**(): [`SearchKeyRequest`](SearchKeyRequest.md)

Create a deep copy.

#### Returns

[`SearchKeyRequest`](SearchKeyRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SearchKeyRequest`](SearchKeyRequest.md) \| `PlainMessage`<[`SearchKeyRequest`](SearchKeyRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SearchKeyRequest`](SearchKeyRequest.md)

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

[`SearchKeyRequest`](SearchKeyRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SearchKeyRequest`](SearchKeyRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SearchKeyRequest`](SearchKeyRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SearchKeyRequest`](SearchKeyRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SearchKeyRequest`](SearchKeyRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SearchKeyRequest`](SearchKeyRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SearchKeyRequest`](SearchKeyRequest.md)\>

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
| `a` | `undefined` \| [`SearchKeyRequest`](SearchKeyRequest.md) \| `PlainMessage`<[`SearchKeyRequest`](SearchKeyRequest.md)\> |
| `b` | `undefined` \| [`SearchKeyRequest`](SearchKeyRequest.md) \| `PlainMessage`<[`SearchKeyRequest`](SearchKeyRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:935](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L935)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SearchKeyRequest`](SearchKeyRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SearchKeyRequest`](SearchKeyRequest.md)

#### Defined in

[src/base_pb.ts:923](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L923)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SearchKeyRequest`](SearchKeyRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SearchKeyRequest`](SearchKeyRequest.md)

#### Defined in

[src/base_pb.ts:927](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L927)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SearchKeyRequest`](SearchKeyRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SearchKeyRequest`](SearchKeyRequest.md)

#### Defined in

[src/base_pb.ts:931](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L931)
