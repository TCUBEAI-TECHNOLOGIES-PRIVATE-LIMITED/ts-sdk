[scanswift-sdk](../README.md) / [Exports](../modules.md) / TemplatesServicePaginationReq

# Class: TemplatesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message scanswift.TemplatesServicePaginationReq

## Hierarchy

- `Message`<[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)\>

  ↳ **`TemplatesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](TemplatesServicePaginationReq.md#constructor)

### Properties

- [count](TemplatesServicePaginationReq.md#count)
- [isActive](TemplatesServicePaginationReq.md#isactive)
- [offset](TemplatesServicePaginationReq.md#offset)
- [sortKey](TemplatesServicePaginationReq.md#sortkey)
- [sortOrder](TemplatesServicePaginationReq.md#sortorder)
- [fields](TemplatesServicePaginationReq.md#fields)
- [runtime](TemplatesServicePaginationReq.md#runtime)
- [typeName](TemplatesServicePaginationReq.md#typename)

### Methods

- [clone](TemplatesServicePaginationReq.md#clone)
- [equals](TemplatesServicePaginationReq.md#equals)
- [fromBinary](TemplatesServicePaginationReq.md#frombinary)
- [fromJson](TemplatesServicePaginationReq.md#fromjson)
- [fromJsonString](TemplatesServicePaginationReq.md#fromjsonstring)
- [getType](TemplatesServicePaginationReq.md#gettype)
- [toBinary](TemplatesServicePaginationReq.md#tobinary)
- [toJSON](TemplatesServicePaginationReq.md#tojson)
- [toJson](TemplatesServicePaginationReq.md#tojson-1)
- [toJsonString](TemplatesServicePaginationReq.md#tojsonstring)
- [equals](TemplatesServicePaginationReq.md#equals-1)
- [fromBinary](TemplatesServicePaginationReq.md#frombinary-1)
- [fromJson](TemplatesServicePaginationReq.md#fromjson-1)
- [fromJsonString](TemplatesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TemplatesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)\> |

#### Overrides

Message&lt;TemplatesServicePaginationReq\&gt;.constructor

#### Defined in

src/templates_pb.ts:378

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/templates_pb.ts:355

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/templates_pb.ts:348

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/templates_pb.ts:362

___

### sortKey

• **sortKey**: [`TEMPLATE_SORT_KEY`](../enums/TEMPLATE_SORT_KEY.md) = `TEMPLATE_SORT_KEY.TEMPLATE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.TEMPLATE_SORT_KEY sort_key = 5;

#### Defined in

src/templates_pb.ts:376

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

src/templates_pb.ts:369

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:385

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:383

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.TemplatesServicePaginationReq"``

#### Defined in

src/templates_pb.ts:384

## Methods

### clone

▸ **clone**(): [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md) \| `PlainMessage`<[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

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

[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md) \| `PlainMessage`<[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md) \| `PlainMessage`<[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:405

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Defined in

src/templates_pb.ts:393

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Defined in

src/templates_pb.ts:397

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServicePaginationReq`](TemplatesServicePaginationReq.md)

#### Defined in

src/templates_pb.ts:401
