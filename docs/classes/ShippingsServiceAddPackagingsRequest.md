[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingsServiceAddPackagingsRequest

# Class: ShippingsServiceAddPackagingsRequest

Describes the necessary data structure during addition of multiple packagings to a shipping

**`Generated`**

from message tcube.ShippingsServiceAddPackagingsRequest

## Hierarchy

- `Message`<[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)\>

  ↳ **`ShippingsServiceAddPackagingsRequest`**

## Table of contents

### Constructors

- [constructor](ShippingsServiceAddPackagingsRequest.md#constructor)

### Properties

- [latitude](ShippingsServiceAddPackagingsRequest.md#latitude)
- [list](ShippingsServiceAddPackagingsRequest.md#list)
- [longitude](ShippingsServiceAddPackagingsRequest.md#longitude)
- [shippingUuid](ShippingsServiceAddPackagingsRequest.md#shippinguuid)
- [userComment](ShippingsServiceAddPackagingsRequest.md#usercomment)
- [fields](ShippingsServiceAddPackagingsRequest.md#fields)
- [runtime](ShippingsServiceAddPackagingsRequest.md#runtime)
- [typeName](ShippingsServiceAddPackagingsRequest.md#typename)

### Methods

- [clone](ShippingsServiceAddPackagingsRequest.md#clone)
- [equals](ShippingsServiceAddPackagingsRequest.md#equals)
- [fromBinary](ShippingsServiceAddPackagingsRequest.md#frombinary)
- [fromJson](ShippingsServiceAddPackagingsRequest.md#fromjson)
- [fromJsonString](ShippingsServiceAddPackagingsRequest.md#fromjsonstring)
- [getType](ShippingsServiceAddPackagingsRequest.md#gettype)
- [toBinary](ShippingsServiceAddPackagingsRequest.md#tobinary)
- [toJSON](ShippingsServiceAddPackagingsRequest.md#tojson)
- [toJson](ShippingsServiceAddPackagingsRequest.md#tojson-1)
- [toJsonString](ShippingsServiceAddPackagingsRequest.md#tojsonstring)
- [equals](ShippingsServiceAddPackagingsRequest.md#equals-1)
- [fromBinary](ShippingsServiceAddPackagingsRequest.md#frombinary-1)
- [fromJson](ShippingsServiceAddPackagingsRequest.md#fromjson-1)
- [fromJsonString](ShippingsServiceAddPackagingsRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsServiceAddPackagingsRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)\> |

#### Overrides

Message&lt;ShippingsServiceAddPackagingsRequest\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:475](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L475)

## Properties

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this shipping was created

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/shippings_pb.ts:459](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L459)

___

### list

• **list**: [`ShippingsServiceAddPackagingRequest`](ShippingsServiceAddPackagingRequest.md)[] = `[]`

List of packagings

**`Generated`**

from field: repeated tcube.ShippingsServiceAddPackagingRequest list = 13;

#### Defined in

[src/shippings_pb.ts:473](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L473)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this shipping was created

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/shippings_pb.ts:466](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L466)

___

### shippingUuid

• **shippingUuid**: `string` = `""`

UUID of the shipping

**`Generated`**

from field: string shipping_uuid = 10;

#### Defined in

[src/shippings_pb.ts:452](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L452)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/shippings_pb.ts:445](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L445)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:482](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L482)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:480](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L480)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingsServiceAddPackagingsRequest"``

#### Defined in

[src/shippings_pb.ts:481](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L481)

## Methods

### clone

▸ **clone**(): [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

Create a deep copy.

#### Returns

[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md) \| `PlainMessage`<[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

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

[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)\>

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
| `a` | `undefined` \| [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md) \| `PlainMessage`<[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)\> |
| `b` | `undefined` \| [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md) \| `PlainMessage`<[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L502)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Defined in

[src/shippings_pb.ts:490](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L490)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Defined in

[src/shippings_pb.ts:494](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L494)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceAddPackagingsRequest`](ShippingsServiceAddPackagingsRequest.md)

#### Defined in

[src/shippings_pb.ts:498](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/shippings_pb.ts#L498)
