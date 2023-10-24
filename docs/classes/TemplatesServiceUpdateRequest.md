[scanswift-sdk](../README.md) / [Exports](../modules.md) / TemplatesServiceUpdateRequest

# Class: TemplatesServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a template

**`Generated`**

from message scanswift.TemplatesServiceUpdateRequest

## Hierarchy

- `Message`<[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)\>

  ↳ **`TemplatesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TemplatesServiceUpdateRequest.md#constructor)

### Properties

- [description](TemplatesServiceUpdateRequest.md#description)
- [name](TemplatesServiceUpdateRequest.md#name)
- [userComment](TemplatesServiceUpdateRequest.md#usercomment)
- [uuid](TemplatesServiceUpdateRequest.md#uuid)
- [fields](TemplatesServiceUpdateRequest.md#fields)
- [runtime](TemplatesServiceUpdateRequest.md#runtime)
- [typeName](TemplatesServiceUpdateRequest.md#typename)

### Methods

- [clone](TemplatesServiceUpdateRequest.md#clone)
- [equals](TemplatesServiceUpdateRequest.md#equals)
- [fromBinary](TemplatesServiceUpdateRequest.md#frombinary)
- [fromJson](TemplatesServiceUpdateRequest.md#fromjson)
- [fromJsonString](TemplatesServiceUpdateRequest.md#fromjsonstring)
- [getType](TemplatesServiceUpdateRequest.md#gettype)
- [toBinary](TemplatesServiceUpdateRequest.md#tobinary)
- [toJSON](TemplatesServiceUpdateRequest.md#tojson)
- [toJson](TemplatesServiceUpdateRequest.md#tojson-1)
- [toJsonString](TemplatesServiceUpdateRequest.md#tojsonstring)
- [equals](TemplatesServiceUpdateRequest.md#equals-1)
- [fromBinary](TemplatesServiceUpdateRequest.md#frombinary-1)
- [fromJson](TemplatesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](TemplatesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TemplatesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;TemplatesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/templates_pb.ts:189

## Properties

### description

• **description**: `string` = `""`

Description of the template

**`Generated`**

from field: string description = 12;

#### Defined in

src/templates_pb.ts:187

___

### name

• **name**: `string` = `""`

The name of the template

**`Generated`**

from field: string name = 10;

#### Defined in

src/templates_pb.ts:180

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/templates_pb.ts:166

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

src/templates_pb.ts:173

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:196

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:194

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.TemplatesServiceUpdateRequest"``

#### Defined in

src/templates_pb.ts:195

## Methods

### clone

▸ **clone**(): [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md) \| `PlainMessage`<[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

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

[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md) \| `PlainMessage`<[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md) \| `PlainMessage`<[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:215

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Defined in

src/templates_pb.ts:203

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Defined in

src/templates_pb.ts:207

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceUpdateRequest`](TemplatesServiceUpdateRequest.md)

#### Defined in

src/templates_pb.ts:211
