[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingsPackagingsList

# Class: ShippingsPackagingsList

Describes the data structure that stores a list of shipping packagings

**`Generated`**

from message tcube.ShippingsPackagingsList

## Hierarchy

- `Message`<[`ShippingsPackagingsList`](ShippingsPackagingsList.md)\>

  ↳ **`ShippingsPackagingsList`**

## Table of contents

### Constructors

- [constructor](ShippingsPackagingsList.md#constructor)

### Properties

- [list](ShippingsPackagingsList.md#list)
- [fields](ShippingsPackagingsList.md#fields)
- [runtime](ShippingsPackagingsList.md#runtime)
- [typeName](ShippingsPackagingsList.md#typename)

### Methods

- [clone](ShippingsPackagingsList.md#clone)
- [equals](ShippingsPackagingsList.md#equals)
- [fromBinary](ShippingsPackagingsList.md#frombinary)
- [fromJson](ShippingsPackagingsList.md#fromjson)
- [fromJsonString](ShippingsPackagingsList.md#fromjsonstring)
- [getType](ShippingsPackagingsList.md#gettype)
- [toBinary](ShippingsPackagingsList.md#tobinary)
- [toJSON](ShippingsPackagingsList.md#tojson)
- [toJson](ShippingsPackagingsList.md#tojson-1)
- [toJsonString](ShippingsPackagingsList.md#tojsonstring)
- [equals](ShippingsPackagingsList.md#equals-1)
- [fromBinary](ShippingsPackagingsList.md#frombinary-1)
- [fromJson](ShippingsPackagingsList.md#fromjson-1)
- [fromJsonString](ShippingsPackagingsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsPackagingsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsPackagingsList`](ShippingsPackagingsList.md)\> |

#### Overrides

Message&lt;ShippingsPackagingsList\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:669](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L669)

## Properties

### list

• **list**: [`ShippingPackaging`](ShippingPackaging.md)[] = `[]`

List of packagings that are associated with the shipping

**`Generated`**

from field: repeated tcube.ShippingPackaging list = 1;

#### Defined in

[src/shippings_pb.ts:667](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L667)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:676](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L676)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:674](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L674)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingsPackagingsList"``

#### Defined in

[src/shippings_pb.ts:675](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L675)

## Methods

### clone

▸ **clone**(): [`ShippingsPackagingsList`](ShippingsPackagingsList.md)

Create a deep copy.

#### Returns

[`ShippingsPackagingsList`](ShippingsPackagingsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsPackagingsList`](ShippingsPackagingsList.md) \| `PlainMessage`<[`ShippingsPackagingsList`](ShippingsPackagingsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsPackagingsList`](ShippingsPackagingsList.md)

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

[`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsPackagingsList`](ShippingsPackagingsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsPackagingsList`](ShippingsPackagingsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsPackagingsList`](ShippingsPackagingsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsPackagingsList`](ShippingsPackagingsList.md)\>

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
| `a` | `undefined` \| [`ShippingsPackagingsList`](ShippingsPackagingsList.md) \| `PlainMessage`<[`ShippingsPackagingsList`](ShippingsPackagingsList.md)\> |
| `b` | `undefined` \| [`ShippingsPackagingsList`](ShippingsPackagingsList.md) \| `PlainMessage`<[`ShippingsPackagingsList`](ShippingsPackagingsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:692](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L692)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Defined in

[src/shippings_pb.ts:680](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L680)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Defined in

[src/shippings_pb.ts:684](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L684)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsPackagingsList`](ShippingsPackagingsList.md)

#### Defined in

[src/shippings_pb.ts:688](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L688)
