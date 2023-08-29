[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServicePaginationReq

# Class: CurrenciesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.CurrenciesServicePaginationReq

## Hierarchy

- `Message`<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\>

  ↳ **`CurrenciesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServicePaginationReq.md#constructor)

### Properties

- [count](CurrenciesServicePaginationReq.md#count)
- [isActive](CurrenciesServicePaginationReq.md#isactive)
- [offset](CurrenciesServicePaginationReq.md#offset)
- [sortKey](CurrenciesServicePaginationReq.md#sortkey)
- [sortOrder](CurrenciesServicePaginationReq.md#sortorder)
- [fields](CurrenciesServicePaginationReq.md#fields)
- [runtime](CurrenciesServicePaginationReq.md#runtime)
- [typeName](CurrenciesServicePaginationReq.md#typename)

### Methods

- [clone](CurrenciesServicePaginationReq.md#clone)
- [equals](CurrenciesServicePaginationReq.md#equals)
- [fromBinary](CurrenciesServicePaginationReq.md#frombinary)
- [fromJson](CurrenciesServicePaginationReq.md#fromjson)
- [fromJsonString](CurrenciesServicePaginationReq.md#fromjsonstring)
- [getType](CurrenciesServicePaginationReq.md#gettype)
- [toBinary](CurrenciesServicePaginationReq.md#tobinary)
- [toJSON](CurrenciesServicePaginationReq.md#tojson)
- [toJson](CurrenciesServicePaginationReq.md#tojson-1)
- [toJsonString](CurrenciesServicePaginationReq.md#tojsonstring)
- [equals](CurrenciesServicePaginationReq.md#equals-1)
- [fromBinary](CurrenciesServicePaginationReq.md#frombinary-1)
- [fromJson](CurrenciesServicePaginationReq.md#fromjson-1)
- [fromJsonString](CurrenciesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |

#### Overrides

Message&lt;CurrenciesServicePaginationReq\&gt;.constructor

#### Defined in

[src/currencies_pb.ts:351](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L351)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/currencies_pb.ts:328](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L328)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/currencies_pb.ts:321](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L321)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/currencies_pb.ts:335](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L335)

___

### sortKey

• **sortKey**: [`CURRENCY_SORT_KEY`](../enums/CURRENCY_SORT_KEY.md) = `CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.CURRENCY_SORT_KEY sort_key = 5;

#### Defined in

[src/currencies_pb.ts:349](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L349)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/currencies_pb.ts:342](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L342)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies_pb.ts:358](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L358)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies_pb.ts:356](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L356)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CurrenciesServicePaginationReq"``

#### Defined in

[src/currencies_pb.ts:357](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L357)

## Methods

### clone

▸ **clone**(): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md) \| `PlainMessage`<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

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

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md) \| `PlainMessage`<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md) \| `PlainMessage`<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies_pb.ts:378](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L378)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Defined in

[src/currencies_pb.ts:366](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L366)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Defined in

[src/currencies_pb.ts:370](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L370)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Defined in

[src/currencies_pb.ts:374](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/currencies_pb.ts#L374)
