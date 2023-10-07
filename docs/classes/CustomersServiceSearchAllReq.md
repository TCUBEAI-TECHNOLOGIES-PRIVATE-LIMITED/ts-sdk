[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CustomersServiceSearchAllReq

# Class: CustomersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.CustomersServiceSearchAllReq

## Hierarchy

- `Message`<[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)\>

  ↳ **`CustomersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](CustomersServiceSearchAllReq.md#constructor)

### Properties

- [count](CustomersServiceSearchAllReq.md#count)
- [entityUuid](CustomersServiceSearchAllReq.md#entityuuid)
- [isActive](CustomersServiceSearchAllReq.md#isactive)
- [offset](CustomersServiceSearchAllReq.md#offset)
- [searchKey](CustomersServiceSearchAllReq.md#searchkey)
- [sortKey](CustomersServiceSearchAllReq.md#sortkey)
- [sortOrder](CustomersServiceSearchAllReq.md#sortorder)
- [fields](CustomersServiceSearchAllReq.md#fields)
- [runtime](CustomersServiceSearchAllReq.md#runtime)
- [typeName](CustomersServiceSearchAllReq.md#typename)

### Methods

- [clone](CustomersServiceSearchAllReq.md#clone)
- [equals](CustomersServiceSearchAllReq.md#equals)
- [fromBinary](CustomersServiceSearchAllReq.md#frombinary)
- [fromJson](CustomersServiceSearchAllReq.md#fromjson)
- [fromJsonString](CustomersServiceSearchAllReq.md#fromjsonstring)
- [getType](CustomersServiceSearchAllReq.md#gettype)
- [toBinary](CustomersServiceSearchAllReq.md#tobinary)
- [toJSON](CustomersServiceSearchAllReq.md#tojson)
- [toJson](CustomersServiceSearchAllReq.md#tojson-1)
- [toJsonString](CustomersServiceSearchAllReq.md#tojsonstring)
- [equals](CustomersServiceSearchAllReq.md#equals-1)
- [fromBinary](CustomersServiceSearchAllReq.md#frombinary-1)
- [fromJson](CustomersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](CustomersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CustomersServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;CustomersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/customers_pb.ts:619](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L619)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/customers_pb.ts:582](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L582)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/customers_pb.ts:610](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L610)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/customers_pb.ts:575](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L575)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/customers_pb.ts:589](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L589)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/customers_pb.ts:617](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L617)

___

### sortKey

• **sortKey**: [`CUSTOMER_SORT_KEY`](../enums/CUSTOMER_SORT_KEY.md) = `CUSTOMER_SORT_KEY.CUSTOMER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.CUSTOMER_SORT_KEY sort_key = 5;

#### Defined in

[src/customers_pb.ts:603](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L603)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/customers_pb.ts:596](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L596)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/customers_pb.ts:626](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L626)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/customers_pb.ts:624](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L624)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CustomersServiceSearchAllReq"``

#### Defined in

[src/customers_pb.ts:625](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L625)

## Methods

### clone

▸ **clone**(): [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md) \| `PlainMessage`<[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

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

[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md) \| `PlainMessage`<[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md) \| `PlainMessage`<[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/customers_pb.ts:648](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L648)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Defined in

[src/customers_pb.ts:636](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L636)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Defined in

[src/customers_pb.ts:640](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L640)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomersServiceSearchAllReq`](CustomersServiceSearchAllReq.md)

#### Defined in

[src/customers_pb.ts:644](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/customers_pb.ts#L644)
