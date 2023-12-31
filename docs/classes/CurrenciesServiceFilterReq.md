[scanswift-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceFilterReq

# Class: CurrenciesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.CurrenciesServiceFilterReq

## Hierarchy

- `Message`<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

  ↳ **`CurrenciesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceFilterReq.md#constructor)

### Properties

- [code](CurrenciesServiceFilterReq.md#code)
- [count](CurrenciesServiceFilterReq.md#count)
- [creationTimestampEnd](CurrenciesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](CurrenciesServiceFilterReq.md#creationtimestampstart)
- [isActive](CurrenciesServiceFilterReq.md#isactive)
- [name](CurrenciesServiceFilterReq.md#name)
- [offset](CurrenciesServiceFilterReq.md#offset)
- [sortKey](CurrenciesServiceFilterReq.md#sortkey)
- [sortOrder](CurrenciesServiceFilterReq.md#sortorder)
- [fields](CurrenciesServiceFilterReq.md#fields)
- [runtime](CurrenciesServiceFilterReq.md#runtime)
- [typeName](CurrenciesServiceFilterReq.md#typename)

### Methods

- [clone](CurrenciesServiceFilterReq.md#clone)
- [equals](CurrenciesServiceFilterReq.md#equals)
- [fromBinary](CurrenciesServiceFilterReq.md#frombinary)
- [fromJson](CurrenciesServiceFilterReq.md#fromjson)
- [fromJsonString](CurrenciesServiceFilterReq.md#fromjsonstring)
- [getType](CurrenciesServiceFilterReq.md#gettype)
- [toBinary](CurrenciesServiceFilterReq.md#tobinary)
- [toJSON](CurrenciesServiceFilterReq.md#tojson)
- [toJson](CurrenciesServiceFilterReq.md#tojson-1)
- [toJsonString](CurrenciesServiceFilterReq.md#tojsonstring)
- [equals](CurrenciesServiceFilterReq.md#equals-1)
- [fromBinary](CurrenciesServiceFilterReq.md#frombinary-1)
- [fromJson](CurrenciesServiceFilterReq.md#fromjson-1)
- [fromJsonString](CurrenciesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

#### Overrides

Message&lt;CurrenciesServiceFilterReq\&gt;.constructor

#### Defined in

[src/currencies_pb.ts:511](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L511)

## Properties

### code

• **code**: `string` = `""`

Code of the currency

**`Generated`**

from field: string code = 21;

#### Defined in

[src/currencies_pb.ts:509](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L509)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/currencies_pb.ts:460](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L460)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/currencies_pb.ts:495](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L495)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/currencies_pb.ts:488](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L488)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/currencies_pb.ts:453](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L453)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 20;

#### Defined in

[src/currencies_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L502)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/currencies_pb.ts:467](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L467)

___

### sortKey

• **sortKey**: [`CURRENCY_SORT_KEY`](../enums/CURRENCY_SORT_KEY.md) = `CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.CURRENCY_SORT_KEY sort_key = 5;

#### Defined in

[src/currencies_pb.ts:481](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L481)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/currencies_pb.ts:474](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L474)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies_pb.ts:518](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L518)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies_pb.ts:516](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L516)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.CurrenciesServiceFilterReq"``

#### Defined in

[src/currencies_pb.ts:517](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L517)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

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

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies_pb.ts:542](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L542)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies_pb.ts:530](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L530)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies_pb.ts:534](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L534)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies_pb.ts:538](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/currencies_pb.ts#L538)
