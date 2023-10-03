[tcubesa-sdk](../README.md) / [Exports](../modules.md) / FileResponse

# Class: FileResponse

Describes the response payload that consists of a file

**`Generated`**

from message tcube.FileResponse

## Hierarchy

- `Message`<[`FileResponse`](FileResponse.md)\>

  ↳ **`FileResponse`**

## Table of contents

### Constructors

- [constructor](FileResponse.md#constructor)

### Properties

- [content](FileResponse.md#content)
- [mimeType](FileResponse.md#mimetype)
- [fields](FileResponse.md#fields)
- [runtime](FileResponse.md#runtime)
- [typeName](FileResponse.md#typename)

### Methods

- [clone](FileResponse.md#clone)
- [equals](FileResponse.md#equals)
- [fromBinary](FileResponse.md#frombinary)
- [fromJson](FileResponse.md#fromjson)
- [fromJsonString](FileResponse.md#fromjsonstring)
- [getType](FileResponse.md#gettype)
- [toBinary](FileResponse.md#tobinary)
- [toJSON](FileResponse.md#tojson)
- [toJson](FileResponse.md#tojson-1)
- [toJsonString](FileResponse.md#tojsonstring)
- [equals](FileResponse.md#equals-1)
- [fromBinary](FileResponse.md#frombinary-1)
- [fromJson](FileResponse.md#fromjson-1)
- [fromJsonString](FileResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new FileResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`FileResponse`](FileResponse.md)\> |

#### Overrides

Message&lt;FileResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:377](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L377)

## Properties

### content

• **content**: `Uint8Array`

Stores the raw file content

**`Generated`**

from field: bytes content = 1;

#### Defined in

[src/base_pb.ts:368](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L368)

___

### mimeType

• **mimeType**: `string` = `""`

Stores the MIME type of the file

**`Generated`**

from field: string mime_type = 2;

#### Defined in

[src/base_pb.ts:375](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L375)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:384](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L384)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:382](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L382)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.FileResponse"``

#### Defined in

[src/base_pb.ts:383](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L383)

## Methods

### clone

▸ **clone**(): [`FileResponse`](FileResponse.md)

Create a deep copy.

#### Returns

[`FileResponse`](FileResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`FileResponse`](FileResponse.md) \| `PlainMessage`<[`FileResponse`](FileResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FileResponse`](FileResponse.md)

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

[`FileResponse`](FileResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FileResponse`](FileResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponse`](FileResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FileResponse`](FileResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponse`](FileResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`FileResponse`](FileResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`FileResponse`](FileResponse.md)\>

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
| `a` | `undefined` \| [`FileResponse`](FileResponse.md) \| `PlainMessage`<[`FileResponse`](FileResponse.md)\> |
| `b` | `undefined` \| [`FileResponse`](FileResponse.md) \| `PlainMessage`<[`FileResponse`](FileResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:401](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L401)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`FileResponse`](FileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`FileResponse`](FileResponse.md)

#### Defined in

[src/base_pb.ts:389](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L389)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`FileResponse`](FileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponse`](FileResponse.md)

#### Defined in

[src/base_pb.ts:393](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L393)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`FileResponse`](FileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FileResponse`](FileResponse.md)

#### Defined in

[src/base_pb.ts:397](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L397)
