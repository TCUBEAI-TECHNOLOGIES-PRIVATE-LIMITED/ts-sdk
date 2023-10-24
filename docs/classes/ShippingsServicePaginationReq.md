[scanswift-sdk](../README.md) / [Exports](../modules.md) / ShippingsServicePaginationReq

# Class: ShippingsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message scanswift.ShippingsServicePaginationReq

## Hierarchy

- `Message`<[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)\>

  ↳ **`ShippingsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ShippingsServicePaginationReq.md#constructor)

### Properties

- [count](ShippingsServicePaginationReq.md#count)
- [entityUuid](ShippingsServicePaginationReq.md#entityuuid)
- [isActive](ShippingsServicePaginationReq.md#isactive)
- [offset](ShippingsServicePaginationReq.md#offset)
- [sortKey](ShippingsServicePaginationReq.md#sortkey)
- [sortOrder](ShippingsServicePaginationReq.md#sortorder)
- [fields](ShippingsServicePaginationReq.md#fields)
- [runtime](ShippingsServicePaginationReq.md#runtime)
- [typeName](ShippingsServicePaginationReq.md#typename)

### Methods

- [clone](ShippingsServicePaginationReq.md#clone)
- [equals](ShippingsServicePaginationReq.md#equals)
- [fromBinary](ShippingsServicePaginationReq.md#frombinary)
- [fromJson](ShippingsServicePaginationReq.md#fromjson)
- [fromJsonString](ShippingsServicePaginationReq.md#fromjsonstring)
- [getType](ShippingsServicePaginationReq.md#gettype)
- [toBinary](ShippingsServicePaginationReq.md#tobinary)
- [toJSON](ShippingsServicePaginationReq.md#tojson)
- [toJson](ShippingsServicePaginationReq.md#tojson-1)
- [toJsonString](ShippingsServicePaginationReq.md#tojsonstring)
- [equals](ShippingsServicePaginationReq.md#equals-1)
- [fromBinary](ShippingsServicePaginationReq.md#frombinary-1)
- [fromJson](ShippingsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ShippingsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)\> |

#### Overrides

Message&lt;ShippingsServicePaginationReq\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:838](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L838)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shippings_pb.ts:808](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L808)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/shippings_pb.ts:836](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L836)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/shippings_pb.ts:801](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L801)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/shippings_pb.ts:815](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L815)

___

### sortKey

• **sortKey**: [`SHIPPING_SORT_KEY`](../enums/SHIPPING_SORT_KEY.md) = `SHIPPING_SORT_KEY.SHIPPING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SHIPPING_SORT_KEY sort_key = 5;

#### Defined in

[src/shippings_pb.ts:829](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L829)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/shippings_pb.ts:822](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L822)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:845](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L845)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:843](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L843)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ShippingsServicePaginationReq"``

#### Defined in

[src/shippings_pb.ts:844](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L844)

## Methods

### clone

▸ **clone**(): [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md) \| `PlainMessage`<[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

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

[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md) \| `PlainMessage`<[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md) \| `PlainMessage`<[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:866](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L866)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Defined in

[src/shippings_pb.ts:854](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L854)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Defined in

[src/shippings_pb.ts:858](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L858)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServicePaginationReq`](ShippingsServicePaginationReq.md)

#### Defined in

[src/shippings_pb.ts:862](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L862)
