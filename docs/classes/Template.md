[scanswift-sdk](../README.md) / [Exports](../modules.md) / Template

# Class: Template

Describes the data structure of each template on the platform

**`Generated`**

from message scanswift.Template

## Hierarchy

- `Message`<[`Template`](Template.md)\>

  ↳ **`Template`**

## Table of contents

### Constructors

- [constructor](Template.md#constructor)

### Properties

- [code](Template.md#code)
- [description](Template.md#description)
- [metadata](Template.md#metadata)
- [name](Template.md#name)
- [type](Template.md#type)
- [fields](Template.md#fields)
- [runtime](Template.md#runtime)
- [typeName](Template.md#typename)

### Methods

- [clone](Template.md#clone)
- [equals](Template.md#equals)
- [fromBinary](Template.md#frombinary)
- [fromJson](Template.md#fromjson)
- [fromJsonString](Template.md#fromjsonstring)
- [getType](Template.md#gettype)
- [toBinary](Template.md#tobinary)
- [toJSON](Template.md#tojson)
- [toJson](Template.md#tojson-1)
- [toJsonString](Template.md#tojsonstring)
- [equals](Template.md#equals-1)
- [fromBinary](Template.md#frombinary-1)
- [fromJson](Template.md#fromjson-1)
- [fromJsonString](Template.md#fromjsonstring-1)

## Constructors

### constructor

• **new Template**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Template`](Template.md)\> |

#### Overrides

Message&lt;Template\&gt;.constructor

#### Defined in

src/templates_pb.ts:262

## Properties

### code

• **code**: `string` = `""`

Code of the template

**`Generated`**

from field: string code = 11;

#### Defined in

src/templates_pb.ts:246

___

### description

• **description**: `string` = `""`

Description of the template

**`Generated`**

from field: string description = 12;

#### Defined in

src/templates_pb.ts:253

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

src/templates_pb.ts:232

___

### name

• **name**: `string` = `""`

The name of the template

**`Generated`**

from field: string name = 10;

#### Defined in

src/templates_pb.ts:239

___

### type

• **type**: [`TEMPLATE_TYPE`](../enums/TEMPLATE_TYPE.md) = `TEMPLATE_TYPE.TEMPLATE_TYPE_ANY_UNSPECIFIED`

The template type

**`Generated`**

from field: scanswift.TEMPLATE_TYPE type = 13;

#### Defined in

src/templates_pb.ts:260

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:269

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:267

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.Template"``

#### Defined in

src/templates_pb.ts:268

## Methods

### clone

▸ **clone**(): [`Template`](Template.md)

Create a deep copy.

#### Returns

[`Template`](Template.md)

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
| `other` | `undefined` \| ``null`` \| [`Template`](Template.md) \| `PlainMessage`<[`Template`](Template.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Template`](Template.md)

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

[`Template`](Template.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Template`](Template.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Template`](Template.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Template`](Template.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Template`](Template.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Template`](Template.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Template`](Template.md)\>

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
| `a` | `undefined` \| [`Template`](Template.md) \| `PlainMessage`<[`Template`](Template.md)\> |
| `b` | `undefined` \| [`Template`](Template.md) \| `PlainMessage`<[`Template`](Template.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:289

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Template`](Template.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Template`](Template.md)

#### Defined in

src/templates_pb.ts:277

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Template`](Template.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Template`](Template.md)

#### Defined in

src/templates_pb.ts:281

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Template`](Template.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Template`](Template.md)

#### Defined in

src/templates_pb.ts:285
