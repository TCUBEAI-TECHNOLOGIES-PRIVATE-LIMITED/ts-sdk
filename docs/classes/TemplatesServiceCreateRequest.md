[scanswift-sdk](../README.md) / [Exports](../modules.md) / TemplatesServiceCreateRequest

# Class: TemplatesServiceCreateRequest

Describes the necessary data structure during creation of a template

**`Generated`**

from message scanswift.TemplatesServiceCreateRequest

## Hierarchy

- `Message`<[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)\>

  ↳ **`TemplatesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](TemplatesServiceCreateRequest.md#constructor)

### Properties

- [description](TemplatesServiceCreateRequest.md#description)
- [name](TemplatesServiceCreateRequest.md#name)
- [type](TemplatesServiceCreateRequest.md#type)
- [userComment](TemplatesServiceCreateRequest.md#usercomment)
- [fields](TemplatesServiceCreateRequest.md#fields)
- [runtime](TemplatesServiceCreateRequest.md#runtime)
- [typeName](TemplatesServiceCreateRequest.md#typename)

### Methods

- [clone](TemplatesServiceCreateRequest.md#clone)
- [equals](TemplatesServiceCreateRequest.md#equals)
- [fromBinary](TemplatesServiceCreateRequest.md#frombinary)
- [fromJson](TemplatesServiceCreateRequest.md#fromjson)
- [fromJsonString](TemplatesServiceCreateRequest.md#fromjsonstring)
- [getType](TemplatesServiceCreateRequest.md#gettype)
- [toBinary](TemplatesServiceCreateRequest.md#tobinary)
- [toJSON](TemplatesServiceCreateRequest.md#tojson)
- [toJson](TemplatesServiceCreateRequest.md#tojson-1)
- [toJsonString](TemplatesServiceCreateRequest.md#tojsonstring)
- [equals](TemplatesServiceCreateRequest.md#equals-1)
- [fromBinary](TemplatesServiceCreateRequest.md#frombinary-1)
- [fromJson](TemplatesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](TemplatesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TemplatesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;TemplatesServiceCreateRequest\&gt;.constructor

#### Defined in

src/templates_pb.ts:123

## Properties

### description

• **description**: `string` = `""`

Description of the template

**`Generated`**

from field: string description = 12;

#### Defined in

src/templates_pb.ts:114

___

### name

• **name**: `string` = `""`

The name of the template

**`Generated`**

from field: string name = 10;

#### Defined in

src/templates_pb.ts:107

___

### type

• **type**: [`TEMPLATE_TYPE`](../enums/TEMPLATE_TYPE.md) = `TEMPLATE_TYPE.TEMPLATE_TYPE_ANY_UNSPECIFIED`

The template type

**`Generated`**

from field: scanswift.TEMPLATE_TYPE type = 13;

#### Defined in

src/templates_pb.ts:121

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/templates_pb.ts:100

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:130

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:128

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.TemplatesServiceCreateRequest"``

#### Defined in

src/templates_pb.ts:129

## Methods

### clone

▸ **clone**(): [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md) \| `PlainMessage`<[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

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

[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md) \| `PlainMessage`<[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md) \| `PlainMessage`<[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:149

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Defined in

src/templates_pb.ts:137

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Defined in

src/templates_pb.ts:141

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceCreateRequest`](TemplatesServiceCreateRequest.md)

#### Defined in

src/templates_pb.ts:145
