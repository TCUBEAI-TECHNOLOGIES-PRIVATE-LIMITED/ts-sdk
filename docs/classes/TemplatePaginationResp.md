[scanswift-sdk](../README.md) / [Exports](../modules.md) / TemplatePaginationResp

# Class: TemplatePaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message scanswift.TemplatePaginationResp

## Hierarchy

- `Message`<[`TemplatePaginationResp`](TemplatePaginationResp.md)\>

  ↳ **`TemplatePaginationResp`**

## Table of contents

### Constructors

- [constructor](TemplatePaginationResp.md#constructor)

### Properties

- [count](TemplatePaginationResp.md#count)
- [payload](TemplatePaginationResp.md#payload)
- [total](TemplatePaginationResp.md#total)
- [fields](TemplatePaginationResp.md#fields)
- [runtime](TemplatePaginationResp.md#runtime)
- [typeName](TemplatePaginationResp.md#typename)

### Methods

- [clone](TemplatePaginationResp.md#clone)
- [equals](TemplatePaginationResp.md#equals)
- [fromBinary](TemplatePaginationResp.md#frombinary)
- [fromJson](TemplatePaginationResp.md#fromjson)
- [fromJsonString](TemplatePaginationResp.md#fromjsonstring)
- [getType](TemplatePaginationResp.md#gettype)
- [toBinary](TemplatePaginationResp.md#tobinary)
- [toJSON](TemplatePaginationResp.md#tojson)
- [toJson](TemplatePaginationResp.md#tojson-1)
- [toJsonString](TemplatePaginationResp.md#tojsonstring)
- [equals](TemplatePaginationResp.md#equals-1)
- [fromBinary](TemplatePaginationResp.md#frombinary-1)
- [fromJson](TemplatePaginationResp.md#fromjson-1)
- [fromJsonString](TemplatePaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new TemplatePaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TemplatePaginationResp`](TemplatePaginationResp.md)\> |

#### Overrides

Message&lt;TemplatePaginationResp\&gt;.constructor

#### Defined in

src/templates_pb.ts:438

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

src/templates_pb.ts:422

___

### payload

• **payload**: [`Template`](Template.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated scanswift.Template payload = 3;

#### Defined in

src/templates_pb.ts:436

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

src/templates_pb.ts:429

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:445

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:443

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.TemplatePaginationResp"``

#### Defined in

src/templates_pb.ts:444

## Methods

### clone

▸ **clone**(): [`TemplatePaginationResp`](TemplatePaginationResp.md)

Create a deep copy.

#### Returns

[`TemplatePaginationResp`](TemplatePaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`TemplatePaginationResp`](TemplatePaginationResp.md) \| `PlainMessage`<[`TemplatePaginationResp`](TemplatePaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TemplatePaginationResp`](TemplatePaginationResp.md)

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

[`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TemplatePaginationResp`](TemplatePaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TemplatePaginationResp`](TemplatePaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TemplatePaginationResp`](TemplatePaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TemplatePaginationResp`](TemplatePaginationResp.md)\>

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
| `a` | `undefined` \| [`TemplatePaginationResp`](TemplatePaginationResp.md) \| `PlainMessage`<[`TemplatePaginationResp`](TemplatePaginationResp.md)\> |
| `b` | `undefined` \| [`TemplatePaginationResp`](TemplatePaginationResp.md) \| `PlainMessage`<[`TemplatePaginationResp`](TemplatePaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:463

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Defined in

src/templates_pb.ts:451

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Defined in

src/templates_pb.ts:455

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatePaginationResp`](TemplatePaginationResp.md)

#### Defined in

src/templates_pb.ts:459
