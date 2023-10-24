[scanswift-sdk](../README.md) / [Exports](../modules.md) / ImageAssignRequest

# Class: ImageAssignRequest

Describes the request payload for assigning an image to a record

**`Generated`**

from message scanswift.ImageAssignRequest

## Hierarchy

- `Message`<[`ImageAssignRequest`](ImageAssignRequest.md)\>

  ↳ **`ImageAssignRequest`**

## Table of contents

### Constructors

- [constructor](ImageAssignRequest.md#constructor)

### Properties

- [image](ImageAssignRequest.md#image)
- [mimeType](ImageAssignRequest.md#mimetype)
- [userComment](ImageAssignRequest.md#usercomment)
- [uuid](ImageAssignRequest.md#uuid)
- [fields](ImageAssignRequest.md#fields)
- [runtime](ImageAssignRequest.md#runtime)
- [typeName](ImageAssignRequest.md#typename)

### Methods

- [clone](ImageAssignRequest.md#clone)
- [equals](ImageAssignRequest.md#equals)
- [fromBinary](ImageAssignRequest.md#frombinary)
- [fromJson](ImageAssignRequest.md#fromjson)
- [fromJsonString](ImageAssignRequest.md#fromjsonstring)
- [getType](ImageAssignRequest.md#gettype)
- [toBinary](ImageAssignRequest.md#tobinary)
- [toJSON](ImageAssignRequest.md#tojson)
- [toJson](ImageAssignRequest.md#tojson-1)
- [toJsonString](ImageAssignRequest.md#tojsonstring)
- [equals](ImageAssignRequest.md#equals-1)
- [fromBinary](ImageAssignRequest.md#frombinary-1)
- [fromJson](ImageAssignRequest.md#fromjson-1)
- [fromJsonString](ImageAssignRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ImageAssignRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ImageAssignRequest`](ImageAssignRequest.md)\> |

#### Overrides

Message&lt;ImageAssignRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:302](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L302)

## Properties

### image

• **image**: `Uint8Array`

The content of the image

**`Generated`**

from field: bytes image = 10;

#### Defined in

[src/base_pb.ts:293](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L293)

___

### mimeType

• **mimeType**: `string` = `""`

The MIME type of the image

**`Generated`**

from field: string mime_type = 11;

#### Defined in

[src/base_pb.ts:300](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L300)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/base_pb.ts:286](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L286)

___

### uuid

• **uuid**: `string` = `""`

UUID of the record

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/base_pb.ts:279](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L279)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:309](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L309)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:307](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L307)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ImageAssignRequest"``

#### Defined in

[src/base_pb.ts:308](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L308)

## Methods

### clone

▸ **clone**(): [`ImageAssignRequest`](ImageAssignRequest.md)

Create a deep copy.

#### Returns

[`ImageAssignRequest`](ImageAssignRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ImageAssignRequest`](ImageAssignRequest.md) \| `PlainMessage`<[`ImageAssignRequest`](ImageAssignRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ImageAssignRequest`](ImageAssignRequest.md)

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

[`ImageAssignRequest`](ImageAssignRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ImageAssignRequest`](ImageAssignRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageAssignRequest`](ImageAssignRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ImageAssignRequest`](ImageAssignRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageAssignRequest`](ImageAssignRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ImageAssignRequest`](ImageAssignRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ImageAssignRequest`](ImageAssignRequest.md)\>

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
| `a` | `undefined` \| [`ImageAssignRequest`](ImageAssignRequest.md) \| `PlainMessage`<[`ImageAssignRequest`](ImageAssignRequest.md)\> |
| `b` | `undefined` \| [`ImageAssignRequest`](ImageAssignRequest.md) \| `PlainMessage`<[`ImageAssignRequest`](ImageAssignRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:328](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L328)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ImageAssignRequest`](ImageAssignRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ImageAssignRequest`](ImageAssignRequest.md)

#### Defined in

[src/base_pb.ts:316](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L316)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ImageAssignRequest`](ImageAssignRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageAssignRequest`](ImageAssignRequest.md)

#### Defined in

[src/base_pb.ts:320](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L320)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ImageAssignRequest`](ImageAssignRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ImageAssignRequest`](ImageAssignRequest.md)

#### Defined in

[src/base_pb.ts:324](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L324)
