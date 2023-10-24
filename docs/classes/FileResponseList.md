[scanswift-sdk](../README.md) / [Exports](../modules.md) / FileResponseList

# Class: FileResponseList

Describes the response payload that consists of a file list

**`Generated`**

from message scanswift.FileResponseList

## Hierarchy

- `Message`<[`FileResponseList`](FileResponseList.md)\>

  ↳ **`FileResponseList`**

## Table of contents

### Constructors

- [constructor](FileResponseList.md#constructor)

### Properties

- [list](FileResponseList.md#list)
- [fields](FileResponseList.md#fields)
- [runtime](FileResponseList.md#runtime)
- [typeName](FileResponseList.md#typename)

### Methods

- [clone](FileResponseList.md#clone)
- [equals](FileResponseList.md#equals)
- [fromBinary](FileResponseList.md#frombinary)
- [fromJson](FileResponseList.md#fromjson)
- [fromJsonString](FileResponseList.md#fromjsonstring)
- [getType](FileResponseList.md#gettype)
- [toBinary](FileResponseList.md#tobinary)
- [toJSON](FileResponseList.md#tojson)
- [toJson](FileResponseList.md#tojson-1)
- [toJsonString](FileResponseList.md#tojsonstring)
- [equals](FileResponseList.md#equals-1)
- [fromBinary](FileResponseList.md#frombinary-1)
- [fromJson](FileResponseList.md#fromjson-1)
- [fromJsonString](FileResponseList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FileResponseList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`FileResponseList`](FileResponseList.md)\> |

#### Overrides

Message&lt;FileResponseList\&gt;.constructor

#### Defined in

[src/base_pb.ts:455](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L455)

## Properties

### list

• **list**: [`FileResponse`](FileResponse.md)[] = `[]`

List of files

**`Generated`**

from field: repeated scanswift.FileResponse list = 1;

#### Defined in

[src/base_pb.ts:453](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L453)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:462](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L462)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:460](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L460)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.FileResponseList"``

#### Defined in

[src/base_pb.ts:461](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L461)

## Methods

### clone

▸ **clone**(): [`FileResponseList`](FileResponseList.md)

Create a deep copy.

#### Returns

[`FileResponseList`](FileResponseList.md)

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
| `other` | `undefined` \| ``null`` \| [`FileResponseList`](FileResponseList.md) \| `PlainMessage`<[`FileResponseList`](FileResponseList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FileResponseList`](FileResponseList.md)

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

[`FileResponseList`](FileResponseList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FileResponseList`](FileResponseList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponseList`](FileResponseList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FileResponseList`](FileResponseList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponseList`](FileResponseList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`FileResponseList`](FileResponseList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`FileResponseList`](FileResponseList.md)\>

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
| `a` | `undefined` \| [`FileResponseList`](FileResponseList.md) \| `PlainMessage`<[`FileResponseList`](FileResponseList.md)\> |
| `b` | `undefined` \| [`FileResponseList`](FileResponseList.md) \| `PlainMessage`<[`FileResponseList`](FileResponseList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:478](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L478)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`FileResponseList`](FileResponseList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`FileResponseList`](FileResponseList.md)

#### Defined in

[src/base_pb.ts:466](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L466)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`FileResponseList`](FileResponseList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponseList`](FileResponseList.md)

#### Defined in

[src/base_pb.ts:470](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L470)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`FileResponseList`](FileResponseList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponseList`](FileResponseList.md)

#### Defined in

[src/base_pb.ts:474](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L474)
