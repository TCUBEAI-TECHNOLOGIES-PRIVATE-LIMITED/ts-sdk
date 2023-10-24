[scanswift-sdk](../README.md) / [Exports](../modules.md) / TemplatesServiceFilterReq

# Class: TemplatesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.TemplatesServiceFilterReq

## Hierarchy

- `Message`<[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)\>

  ↳ **`TemplatesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](TemplatesServiceFilterReq.md#constructor)

### Properties

- [code](TemplatesServiceFilterReq.md#code)
- [count](TemplatesServiceFilterReq.md#count)
- [creationTimestampEnd](TemplatesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](TemplatesServiceFilterReq.md#creationtimestampstart)
- [isActive](TemplatesServiceFilterReq.md#isactive)
- [name](TemplatesServiceFilterReq.md#name)
- [offset](TemplatesServiceFilterReq.md#offset)
- [sortKey](TemplatesServiceFilterReq.md#sortkey)
- [sortOrder](TemplatesServiceFilterReq.md#sortorder)
- [fields](TemplatesServiceFilterReq.md#fields)
- [runtime](TemplatesServiceFilterReq.md#runtime)
- [typeName](TemplatesServiceFilterReq.md#typename)

### Methods

- [clone](TemplatesServiceFilterReq.md#clone)
- [equals](TemplatesServiceFilterReq.md#equals)
- [fromBinary](TemplatesServiceFilterReq.md#frombinary)
- [fromJson](TemplatesServiceFilterReq.md#fromjson)
- [fromJsonString](TemplatesServiceFilterReq.md#fromjsonstring)
- [getType](TemplatesServiceFilterReq.md#gettype)
- [toBinary](TemplatesServiceFilterReq.md#tobinary)
- [toJSON](TemplatesServiceFilterReq.md#tojson)
- [toJson](TemplatesServiceFilterReq.md#tojson-1)
- [toJsonString](TemplatesServiceFilterReq.md#tojsonstring)
- [equals](TemplatesServiceFilterReq.md#equals-1)
- [fromBinary](TemplatesServiceFilterReq.md#frombinary-1)
- [fromJson](TemplatesServiceFilterReq.md#fromjson-1)
- [fromJsonString](TemplatesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TemplatesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)\> |

#### Overrides

Message&lt;TemplatesServiceFilterReq\&gt;.constructor

#### Defined in

src/templates_pb.ts:538

## Properties

### code

• **code**: `string` = `""`

Code of the template

**`Generated`**

from field: string code = 21;

#### Defined in

src/templates_pb.ts:536

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/templates_pb.ts:487

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

src/templates_pb.ts:522

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

src/templates_pb.ts:515

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/templates_pb.ts:480

___

### name

• **name**: `string` = `""`

The name of the template

**`Generated`**

from field: string name = 20;

#### Defined in

src/templates_pb.ts:529

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/templates_pb.ts:494

___

### sortKey

• **sortKey**: [`TEMPLATE_SORT_KEY`](../enums/TEMPLATE_SORT_KEY.md) = `TEMPLATE_SORT_KEY.TEMPLATE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.TEMPLATE_SORT_KEY sort_key = 5;

#### Defined in

src/templates_pb.ts:508

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

src/templates_pb.ts:501

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:545

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:543

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.TemplatesServiceFilterReq"``

#### Defined in

src/templates_pb.ts:544

## Methods

### clone

▸ **clone**(): [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md) \| `PlainMessage`<[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

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

[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md) \| `PlainMessage`<[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md) \| `PlainMessage`<[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:569

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Defined in

src/templates_pb.ts:557

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Defined in

src/templates_pb.ts:561

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceFilterReq`](TemplatesServiceFilterReq.md)

#### Defined in

src/templates_pb.ts:565
