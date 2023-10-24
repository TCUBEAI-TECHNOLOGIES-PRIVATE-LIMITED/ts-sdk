[scanswift-sdk](../README.md) / [Exports](../modules.md) / ShippingMetadata

# Class: ShippingMetadata

Describes the data structure of each shipping with its relevant metadata

**`Generated`**

from message scanswift.ShippingMetadata

## Hierarchy

- `Message`<[`ShippingMetadata`](ShippingMetadata.md)\>

  ↳ **`ShippingMetadata`**

## Table of contents

### Constructors

- [constructor](ShippingMetadata.md#constructor)

### Properties

- [addedPackagingsCount](ShippingMetadata.md#addedpackagingscount)
- [entity](ShippingMetadata.md#entity)
- [location](ShippingMetadata.md#location)
- [qrString](ShippingMetadata.md#qrstring)
- [shipping](ShippingMetadata.md#shipping)
- [fields](ShippingMetadata.md#fields)
- [runtime](ShippingMetadata.md#runtime)
- [typeName](ShippingMetadata.md#typename)

### Methods

- [clone](ShippingMetadata.md#clone)
- [equals](ShippingMetadata.md#equals)
- [fromBinary](ShippingMetadata.md#frombinary)
- [fromJson](ShippingMetadata.md#fromjson)
- [fromJsonString](ShippingMetadata.md#fromjsonstring)
- [getType](ShippingMetadata.md#gettype)
- [toBinary](ShippingMetadata.md#tobinary)
- [toJSON](ShippingMetadata.md#tojson)
- [toJson](ShippingMetadata.md#tojson-1)
- [toJsonString](ShippingMetadata.md#tojsonstring)
- [equals](ShippingMetadata.md#equals-1)
- [fromBinary](ShippingMetadata.md#frombinary-1)
- [fromJson](ShippingMetadata.md#fromjson-1)
- [fromJsonString](ShippingMetadata.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingMetadata**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingMetadata`](ShippingMetadata.md)\> |

#### Overrides

Message&lt;ShippingMetadata\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:451](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L451)

## Properties

### addedPackagingsCount

• **addedPackagingsCount**: `bigint` = `protoInt64.zero`

Stores the number of packagings that have already been added to the shipping

**`Generated`**

from field: int64 added_packagings_count = 10;

#### Defined in

[src/shippings_pb.ts:435](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L435)

___

### entity

• `Optional` **entity**: [`Entity`](Entity.md)

Stores the entity info

**`Generated`**

from field: scanswift.Entity entity = 40;

#### Defined in

[src/shippings_pb.ts:449](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L449)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Stores the location info

**`Generated`**

from field: scanswift.Location location = 30;

#### Defined in

[src/shippings_pb.ts:442](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L442)

___

### qrString

• **qrString**: `string` = `""`

Stores the string that will be used to generate the QR code

**`Generated`**

from field: string qr_string = 3;

#### Defined in

[src/shippings_pb.ts:428](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L428)

___

### shipping

• `Optional` **shipping**: [`Shipping`](Shipping.md)

Stores the shipping info

**`Generated`**

from field: scanswift.Shipping shipping = 1;

#### Defined in

[src/shippings_pb.ts:421](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L421)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:458](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L458)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:456](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L456)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ShippingMetadata"``

#### Defined in

[src/shippings_pb.ts:457](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L457)

## Methods

### clone

▸ **clone**(): [`ShippingMetadata`](ShippingMetadata.md)

Create a deep copy.

#### Returns

[`ShippingMetadata`](ShippingMetadata.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingMetadata`](ShippingMetadata.md) \| `PlainMessage`<[`ShippingMetadata`](ShippingMetadata.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingMetadata`](ShippingMetadata.md)

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

[`ShippingMetadata`](ShippingMetadata.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingMetadata`](ShippingMetadata.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingMetadata`](ShippingMetadata.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingMetadata`](ShippingMetadata.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingMetadata`](ShippingMetadata.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingMetadata`](ShippingMetadata.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingMetadata`](ShippingMetadata.md)\>

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
| `a` | `undefined` \| [`ShippingMetadata`](ShippingMetadata.md) \| `PlainMessage`<[`ShippingMetadata`](ShippingMetadata.md)\> |
| `b` | `undefined` \| [`ShippingMetadata`](ShippingMetadata.md) \| `PlainMessage`<[`ShippingMetadata`](ShippingMetadata.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:478](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L478)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingMetadata`](ShippingMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingMetadata`](ShippingMetadata.md)

#### Defined in

[src/shippings_pb.ts:466](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L466)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingMetadata`](ShippingMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingMetadata`](ShippingMetadata.md)

#### Defined in

[src/shippings_pb.ts:470](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L470)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingMetadata`](ShippingMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingMetadata`](ShippingMetadata.md)

#### Defined in

[src/shippings_pb.ts:474](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L474)
