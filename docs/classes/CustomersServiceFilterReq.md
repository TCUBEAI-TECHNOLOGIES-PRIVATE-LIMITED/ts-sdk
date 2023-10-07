[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CustomersServiceFilterReq

# Class: CustomersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.CustomersServiceFilterReq

## Hierarchy

- `Message`<[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)\>

  ↳ **`CustomersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](CustomersServiceFilterReq.md#constructor)

### Properties

- [code](CustomersServiceFilterReq.md#code)
- [count](CustomersServiceFilterReq.md#count)
- [creationTimestampEnd](CustomersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](CustomersServiceFilterReq.md#creationtimestampstart)
- [entityUuid](CustomersServiceFilterReq.md#entityuuid)
- [isActive](CustomersServiceFilterReq.md#isactive)
- [name](CustomersServiceFilterReq.md#name)
- [offset](CustomersServiceFilterReq.md#offset)
- [sortKey](CustomersServiceFilterReq.md#sortkey)
- [sortOrder](CustomersServiceFilterReq.md#sortorder)
- [fields](CustomersServiceFilterReq.md#fields)
- [runtime](CustomersServiceFilterReq.md#runtime)
- [typeName](CustomersServiceFilterReq.md#typename)

### Methods

- [clone](CustomersServiceFilterReq.md#clone)
- [equals](CustomersServiceFilterReq.md#equals)
- [fromBinary](CustomersServiceFilterReq.md#frombinary)
- [fromJson](CustomersServiceFilterReq.md#fromjson)
- [fromJsonString](CustomersServiceFilterReq.md#fromjsonstring)
- [getType](CustomersServiceFilterReq.md#gettype)
- [toBinary](CustomersServiceFilterReq.md#tobinary)
- [toJSON](CustomersServiceFilterReq.md#tojson)
- [toJson](CustomersServiceFilterReq.md#tojson-1)
- [toJsonString](CustomersServiceFilterReq.md#tojsonstring)
- [equals](CustomersServiceFilterReq.md#equals-1)
- [fromBinary](CustomersServiceFilterReq.md#frombinary-1)
- [fromJson](CustomersServiceFilterReq.md#fromjson-1)
- [fromJsonString](CustomersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CustomersServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)\> |

#### Overrides

Message&lt;CustomersServiceFilterReq\&gt;.constructor

#### Defined in

[src/customers_pb.ts:526](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L526)

## Properties

### code

• **code**: `string` = `""`

Code of the customer

**`Generated`**

from field: string code = 21;

#### Defined in

[src/customers_pb.ts:524](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L524)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/customers_pb.ts:468](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L468)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/customers_pb.ts:503](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L503)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/customers_pb.ts:496](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L496)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/customers_pb.ts:510](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L510)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/customers_pb.ts:461](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L461)

___

### name

• **name**: `string` = `""`

The name of the customer

**`Generated`**

from field: string name = 20;

#### Defined in

[src/customers_pb.ts:517](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L517)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/customers_pb.ts:475](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L475)

___

### sortKey

• **sortKey**: [`CUSTOMER_SORT_KEY`](../enums/CUSTOMER_SORT_KEY.md) = `CUSTOMER_SORT_KEY.CUSTOMER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.CUSTOMER_SORT_KEY sort_key = 5;

#### Defined in

[src/customers_pb.ts:489](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L489)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/customers_pb.ts:482](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L482)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/customers_pb.ts:533](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L533)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/customers_pb.ts:531](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L531)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CustomersServiceFilterReq"``

#### Defined in

[src/customers_pb.ts:532](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L532)

## Methods

### clone

▸ **clone**(): [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md) \| `PlainMessage`<[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

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

[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md) \| `PlainMessage`<[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md) \| `PlainMessage`<[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/customers_pb.ts:558](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L558)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Defined in

[src/customers_pb.ts:546](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L546)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Defined in

[src/customers_pb.ts:550](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L550)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceFilterReq`](CustomersServiceFilterReq.md)

#### Defined in

[src/customers_pb.ts:554](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L554)
