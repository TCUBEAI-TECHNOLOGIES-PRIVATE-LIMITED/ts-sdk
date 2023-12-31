[scanswift-sdk](../README.md) / [Exports](../modules.md) / ShippingPaginationResp

# Class: ShippingPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message scanswift.ShippingPaginationResp

## Hierarchy

- `Message`<[`ShippingPaginationResp`](ShippingPaginationResp.md)\>

  ↳ **`ShippingPaginationResp`**

## Table of contents

### Constructors

- [constructor](ShippingPaginationResp.md#constructor)

### Properties

- [count](ShippingPaginationResp.md#count)
- [payload](ShippingPaginationResp.md#payload)
- [total](ShippingPaginationResp.md#total)
- [fields](ShippingPaginationResp.md#fields)
- [runtime](ShippingPaginationResp.md#runtime)
- [typeName](ShippingPaginationResp.md#typename)

### Methods

- [clone](ShippingPaginationResp.md#clone)
- [equals](ShippingPaginationResp.md#equals)
- [fromBinary](ShippingPaginationResp.md#frombinary)
- [fromJson](ShippingPaginationResp.md#fromjson)
- [fromJsonString](ShippingPaginationResp.md#fromjsonstring)
- [getType](ShippingPaginationResp.md#gettype)
- [toBinary](ShippingPaginationResp.md#tobinary)
- [toJSON](ShippingPaginationResp.md#tojson)
- [toJson](ShippingPaginationResp.md#tojson-1)
- [toJsonString](ShippingPaginationResp.md#tojsonstring)
- [equals](ShippingPaginationResp.md#equals-1)
- [fromBinary](ShippingPaginationResp.md#frombinary-1)
- [fromJson](ShippingPaginationResp.md#fromjson-1)
- [fromJsonString](ShippingPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingPaginationResp`](ShippingPaginationResp.md)\> |

#### Overrides

Message&lt;ShippingPaginationResp\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:899](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L899)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/shippings_pb.ts:883](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L883)

___

### payload

• **payload**: [`Shipping`](Shipping.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated scanswift.Shipping payload = 3;

#### Defined in

[src/shippings_pb.ts:897](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L897)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/shippings_pb.ts:890](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L890)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:906](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L906)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:904](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L904)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ShippingPaginationResp"``

#### Defined in

[src/shippings_pb.ts:905](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L905)

## Methods

### clone

▸ **clone**(): [`ShippingPaginationResp`](ShippingPaginationResp.md)

Create a deep copy.

#### Returns

[`ShippingPaginationResp`](ShippingPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingPaginationResp`](ShippingPaginationResp.md) \| `PlainMessage`<[`ShippingPaginationResp`](ShippingPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingPaginationResp`](ShippingPaginationResp.md)

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

[`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingPaginationResp`](ShippingPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingPaginationResp`](ShippingPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingPaginationResp`](ShippingPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingPaginationResp`](ShippingPaginationResp.md)\>

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
| `a` | `undefined` \| [`ShippingPaginationResp`](ShippingPaginationResp.md) \| `PlainMessage`<[`ShippingPaginationResp`](ShippingPaginationResp.md)\> |
| `b` | `undefined` \| [`ShippingPaginationResp`](ShippingPaginationResp.md) \| `PlainMessage`<[`ShippingPaginationResp`](ShippingPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:924](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L924)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Defined in

[src/shippings_pb.ts:912](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L912)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Defined in

[src/shippings_pb.ts:916](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L916)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPaginationResp`](ShippingPaginationResp.md)

#### Defined in

[src/shippings_pb.ts:920](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L920)
