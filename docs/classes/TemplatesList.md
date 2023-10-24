[scanswift-sdk](../README.md) / [Exports](../modules.md) / TemplatesList

# Class: TemplatesList

Describes the data structure that stores a list of templates

**`Generated`**

from message scanswift.TemplatesList

## Hierarchy

- `Message`<[`TemplatesList`](TemplatesList.md)\>

  ↳ **`TemplatesList`**

## Table of contents

### Constructors

- [constructor](TemplatesList.md#constructor)

### Properties

- [list](TemplatesList.md#list)
- [fields](TemplatesList.md#fields)
- [runtime](TemplatesList.md#runtime)
- [typeName](TemplatesList.md#typename)

### Methods

- [clone](TemplatesList.md#clone)
- [equals](TemplatesList.md#equals)
- [fromBinary](TemplatesList.md#frombinary)
- [fromJson](TemplatesList.md#fromjson)
- [fromJsonString](TemplatesList.md#fromjsonstring)
- [getType](TemplatesList.md#gettype)
- [toBinary](TemplatesList.md#tobinary)
- [toJSON](TemplatesList.md#tojson)
- [toJson](TemplatesList.md#tojson-1)
- [toJsonString](TemplatesList.md#tojsonstring)
- [equals](TemplatesList.md#equals-1)
- [fromBinary](TemplatesList.md#frombinary-1)
- [fromJson](TemplatesList.md#fromjson-1)
- [fromJsonString](TemplatesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TemplatesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TemplatesList`](TemplatesList.md)\> |

#### Overrides

Message&lt;TemplatesList\&gt;.constructor

#### Defined in

src/templates_pb.ts:308

## Properties

### list

• **list**: [`Template`](Template.md)[] = `[]`

List of templates

**`Generated`**

from field: repeated scanswift.Template list = 1;

#### Defined in

src/templates_pb.ts:306

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:315

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:313

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.TemplatesList"``

#### Defined in

src/templates_pb.ts:314

## Methods

### clone

▸ **clone**(): [`TemplatesList`](TemplatesList.md)

Create a deep copy.

#### Returns

[`TemplatesList`](TemplatesList.md)

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
| `other` | `undefined` \| ``null`` \| [`TemplatesList`](TemplatesList.md) \| `PlainMessage`<[`TemplatesList`](TemplatesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TemplatesList`](TemplatesList.md)

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

[`TemplatesList`](TemplatesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TemplatesList`](TemplatesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesList`](TemplatesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TemplatesList`](TemplatesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesList`](TemplatesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TemplatesList`](TemplatesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TemplatesList`](TemplatesList.md)\>

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
| `a` | `undefined` \| [`TemplatesList`](TemplatesList.md) \| `PlainMessage`<[`TemplatesList`](TemplatesList.md)\> |
| `b` | `undefined` \| [`TemplatesList`](TemplatesList.md) \| `PlainMessage`<[`TemplatesList`](TemplatesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:331

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TemplatesList`](TemplatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TemplatesList`](TemplatesList.md)

#### Defined in

src/templates_pb.ts:319

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TemplatesList`](TemplatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesList`](TemplatesList.md)

#### Defined in

src/templates_pb.ts:323

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TemplatesList`](TemplatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesList`](TemplatesList.md)

#### Defined in

src/templates_pb.ts:327
