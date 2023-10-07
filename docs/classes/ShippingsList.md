[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingsList

# Class: ShippingsList

Describes the data structure that stores a list of shippings

**`Generated`**

from message tcube.ShippingsList

## Hierarchy

- `Message`<[`ShippingsList`](ShippingsList.md)\>

  ↳ **`ShippingsList`**

## Table of contents

### Constructors

- [constructor](ShippingsList.md#constructor)

### Properties

- [list](ShippingsList.md#list)
- [fields](ShippingsList.md#fields)
- [runtime](ShippingsList.md#runtime)
- [typeName](ShippingsList.md#typename)

### Methods

- [clone](ShippingsList.md#clone)
- [equals](ShippingsList.md#equals)
- [fromBinary](ShippingsList.md#frombinary)
- [fromJson](ShippingsList.md#fromjson)
- [fromJsonString](ShippingsList.md#fromjsonstring)
- [getType](ShippingsList.md#gettype)
- [toBinary](ShippingsList.md#tobinary)
- [toJSON](ShippingsList.md#tojson)
- [toJson](ShippingsList.md#tojson-1)
- [toJsonString](ShippingsList.md#tojsonstring)
- [equals](ShippingsList.md#equals-1)
- [fromBinary](ShippingsList.md#frombinary-1)
- [fromJson](ShippingsList.md#fromjson-1)
- [fromJsonString](ShippingsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsList`](ShippingsList.md)\> |

#### Overrides

Message&lt;ShippingsList\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:405](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L405)

## Properties

### list

• **list**: [`Shipping`](Shipping.md)[] = `[]`

List of shippings

**`Generated`**

from field: repeated tcube.Shipping list = 1;

#### Defined in

[src/shippings_pb.ts:403](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L403)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:412](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L412)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:410](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L410)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingsList"``

#### Defined in

[src/shippings_pb.ts:411](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L411)

## Methods

### clone

▸ **clone**(): [`ShippingsList`](ShippingsList.md)

Create a deep copy.

#### Returns

[`ShippingsList`](ShippingsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsList`](ShippingsList.md) \| `PlainMessage`<[`ShippingsList`](ShippingsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsList`](ShippingsList.md)

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

[`ShippingsList`](ShippingsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsList`](ShippingsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsList`](ShippingsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsList`](ShippingsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsList`](ShippingsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsList`](ShippingsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsList`](ShippingsList.md)\>

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
| `a` | `undefined` \| [`ShippingsList`](ShippingsList.md) \| `PlainMessage`<[`ShippingsList`](ShippingsList.md)\> |
| `b` | `undefined` \| [`ShippingsList`](ShippingsList.md) \| `PlainMessage`<[`ShippingsList`](ShippingsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:428](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L428)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsList`](ShippingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsList`](ShippingsList.md)

#### Defined in

[src/shippings_pb.ts:416](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L416)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsList`](ShippingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsList`](ShippingsList.md)

#### Defined in

[src/shippings_pb.ts:420](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L420)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsList`](ShippingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsList`](ShippingsList.md)

#### Defined in

[src/shippings_pb.ts:424](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L424)
