[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CustomerPaginationResp

# Class: CustomerPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.CustomerPaginationResp

## Hierarchy

- `Message`<[`CustomerPaginationResp`](CustomerPaginationResp.md)\>

  ↳ **`CustomerPaginationResp`**

## Table of contents

### Constructors

- [constructor](CustomerPaginationResp.md#constructor)

### Properties

- [count](CustomerPaginationResp.md#count)
- [payload](CustomerPaginationResp.md#payload)
- [total](CustomerPaginationResp.md#total)
- [fields](CustomerPaginationResp.md#fields)
- [runtime](CustomerPaginationResp.md#runtime)
- [typeName](CustomerPaginationResp.md#typename)

### Methods

- [clone](CustomerPaginationResp.md#clone)
- [equals](CustomerPaginationResp.md#equals)
- [fromBinary](CustomerPaginationResp.md#frombinary)
- [fromJson](CustomerPaginationResp.md#fromjson)
- [fromJsonString](CustomerPaginationResp.md#fromjsonstring)
- [getType](CustomerPaginationResp.md#gettype)
- [toBinary](CustomerPaginationResp.md#tobinary)
- [toJSON](CustomerPaginationResp.md#tojson)
- [toJson](CustomerPaginationResp.md#tojson-1)
- [toJsonString](CustomerPaginationResp.md#tojsonstring)
- [equals](CustomerPaginationResp.md#equals-1)
- [fromBinary](CustomerPaginationResp.md#frombinary-1)
- [fromJson](CustomerPaginationResp.md#fromjson-1)
- [fromJsonString](CustomerPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new CustomerPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CustomerPaginationResp`](CustomerPaginationResp.md)\> |

#### Overrides

Message&lt;CustomerPaginationResp\&gt;.constructor

#### Defined in

src/customers_pb.ts:419

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

src/customers_pb.ts:403

___

### payload

• **payload**: [`Customer`](Customer.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.Customer payload = 3;

#### Defined in

src/customers_pb.ts:417

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

src/customers_pb.ts:410

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/customers_pb.ts:426

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/customers_pb.ts:424

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CustomerPaginationResp"``

#### Defined in

src/customers_pb.ts:425

## Methods

### clone

▸ **clone**(): [`CustomerPaginationResp`](CustomerPaginationResp.md)

Create a deep copy.

#### Returns

[`CustomerPaginationResp`](CustomerPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`CustomerPaginationResp`](CustomerPaginationResp.md) \| `PlainMessage`<[`CustomerPaginationResp`](CustomerPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CustomerPaginationResp`](CustomerPaginationResp.md)

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

[`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CustomerPaginationResp`](CustomerPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CustomerPaginationResp`](CustomerPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CustomerPaginationResp`](CustomerPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CustomerPaginationResp`](CustomerPaginationResp.md)\>

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
| `a` | `undefined` \| [`CustomerPaginationResp`](CustomerPaginationResp.md) \| `PlainMessage`<[`CustomerPaginationResp`](CustomerPaginationResp.md)\> |
| `b` | `undefined` \| [`CustomerPaginationResp`](CustomerPaginationResp.md) \| `PlainMessage`<[`CustomerPaginationResp`](CustomerPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/customers_pb.ts:444

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Defined in

src/customers_pb.ts:432

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Defined in

src/customers_pb.ts:436

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CustomerPaginationResp`](CustomerPaginationResp.md)

#### Defined in

src/customers_pb.ts:440
