[scanswift-sdk](../README.md) / [Exports](../modules.md) / TemplatesServiceSearchAllReq

# Class: TemplatesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message scanswift.TemplatesServiceSearchAllReq

## Hierarchy

- `Message`<[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)\>

  ↳ **`TemplatesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](TemplatesServiceSearchAllReq.md#constructor)

### Properties

- [count](TemplatesServiceSearchAllReq.md#count)
- [isActive](TemplatesServiceSearchAllReq.md#isactive)
- [offset](TemplatesServiceSearchAllReq.md#offset)
- [searchKey](TemplatesServiceSearchAllReq.md#searchkey)
- [sortKey](TemplatesServiceSearchAllReq.md#sortkey)
- [sortOrder](TemplatesServiceSearchAllReq.md#sortorder)
- [fields](TemplatesServiceSearchAllReq.md#fields)
- [runtime](TemplatesServiceSearchAllReq.md#runtime)
- [typeName](TemplatesServiceSearchAllReq.md#typename)

### Methods

- [clone](TemplatesServiceSearchAllReq.md#clone)
- [equals](TemplatesServiceSearchAllReq.md#equals)
- [fromBinary](TemplatesServiceSearchAllReq.md#frombinary)
- [fromJson](TemplatesServiceSearchAllReq.md#fromjson)
- [fromJsonString](TemplatesServiceSearchAllReq.md#fromjsonstring)
- [getType](TemplatesServiceSearchAllReq.md#gettype)
- [toBinary](TemplatesServiceSearchAllReq.md#tobinary)
- [toJSON](TemplatesServiceSearchAllReq.md#tojson)
- [toJson](TemplatesServiceSearchAllReq.md#tojson-1)
- [toJsonString](TemplatesServiceSearchAllReq.md#tojsonstring)
- [equals](TemplatesServiceSearchAllReq.md#equals-1)
- [fromBinary](TemplatesServiceSearchAllReq.md#frombinary-1)
- [fromJson](TemplatesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](TemplatesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TemplatesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;TemplatesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/templates_pb.ts:623

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/templates_pb.ts:593

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/templates_pb.ts:586

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/templates_pb.ts:600

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/templates_pb.ts:621

___

### sortKey

• **sortKey**: [`TEMPLATE_SORT_KEY`](../enums/TEMPLATE_SORT_KEY.md) = `TEMPLATE_SORT_KEY.TEMPLATE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.TEMPLATE_SORT_KEY sort_key = 5;

#### Defined in

src/templates_pb.ts:614

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

src/templates_pb.ts:607

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/templates_pb.ts:630

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/templates_pb.ts:628

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.TemplatesServiceSearchAllReq"``

#### Defined in

src/templates_pb.ts:629

## Methods

### clone

▸ **clone**(): [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md) \| `PlainMessage`<[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

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

[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md) \| `PlainMessage`<[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md) \| `PlainMessage`<[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/templates_pb.ts:651

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Defined in

src/templates_pb.ts:639

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Defined in

src/templates_pb.ts:643

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TemplatesServiceSearchAllReq`](TemplatesServiceSearchAllReq.md)

#### Defined in

src/templates_pb.ts:647
