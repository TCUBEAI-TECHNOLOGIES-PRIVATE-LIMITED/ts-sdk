[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingPackaging

# Class: ShippingPackaging

Describes the data structure of each shipping packaging

**`Generated`**

from message tcube.ShippingPackaging

## Hierarchy

- `Message`<[`ShippingPackaging`](ShippingPackaging.md)\>

  ↳ **`ShippingPackaging`**

## Table of contents

### Constructors

- [constructor](ShippingPackaging.md#constructor)

### Properties

- [entityUuid](ShippingPackaging.md#entityuuid)
- [latitude](ShippingPackaging.md#latitude)
- [locationUuid](ShippingPackaging.md#locationuuid)
- [longitude](ShippingPackaging.md#longitude)
- [metadata](ShippingPackaging.md#metadata)
- [packagingUuid](ShippingPackaging.md#packaginguuid)
- [shippingUuid](ShippingPackaging.md#shippinguuid)
- [zoneUuid](ShippingPackaging.md#zoneuuid)
- [fields](ShippingPackaging.md#fields)
- [runtime](ShippingPackaging.md#runtime)
- [typeName](ShippingPackaging.md#typename)

### Methods

- [clone](ShippingPackaging.md#clone)
- [equals](ShippingPackaging.md#equals)
- [fromBinary](ShippingPackaging.md#frombinary)
- [fromJson](ShippingPackaging.md#fromjson)
- [fromJsonString](ShippingPackaging.md#fromjsonstring)
- [getType](ShippingPackaging.md#gettype)
- [toBinary](ShippingPackaging.md#tobinary)
- [toJSON](ShippingPackaging.md#tojson)
- [toJson](ShippingPackaging.md#tojson-1)
- [toJsonString](ShippingPackaging.md#tojsonstring)
- [equals](ShippingPackaging.md#equals-1)
- [fromBinary](ShippingPackaging.md#frombinary-1)
- [fromJson](ShippingPackaging.md#fromjson-1)
- [fromJsonString](ShippingPackaging.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingPackaging**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingPackaging`](ShippingPackaging.md)\> |

#### Overrides

Message&lt;ShippingPackaging\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:596](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L596)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/shippings_pb.ts:552](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L552)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this shipping was created

**`Generated`**

from field: double latitude = 12;

#### Defined in

[src/shippings_pb.ts:587](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L587)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/shippings_pb.ts:559](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L559)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this shipping was created

**`Generated`**

from field: double longitude = 13;

#### Defined in

[src/shippings_pb.ts:594](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L594)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/shippings_pb.ts:545](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L545)

___

### packagingUuid

• **packagingUuid**: `string` = `""`

UUID of the packaging

**`Generated`**

from field: string packaging_uuid = 11;

#### Defined in

[src/shippings_pb.ts:580](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L580)

___

### shippingUuid

• **shippingUuid**: `string` = `""`

UUID of the shipping

**`Generated`**

from field: string shipping_uuid = 10;

#### Defined in

[src/shippings_pb.ts:573](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L573)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 9;

#### Defined in

[src/shippings_pb.ts:566](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L566)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:603](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L603)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:601](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L601)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingPackaging"``

#### Defined in

[src/shippings_pb.ts:602](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L602)

## Methods

### clone

▸ **clone**(): [`ShippingPackaging`](ShippingPackaging.md)

Create a deep copy.

#### Returns

[`ShippingPackaging`](ShippingPackaging.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingPackaging`](ShippingPackaging.md) \| `PlainMessage`<[`ShippingPackaging`](ShippingPackaging.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingPackaging`](ShippingPackaging.md)

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

[`ShippingPackaging`](ShippingPackaging.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingPackaging`](ShippingPackaging.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPackaging`](ShippingPackaging.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingPackaging`](ShippingPackaging.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPackaging`](ShippingPackaging.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingPackaging`](ShippingPackaging.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingPackaging`](ShippingPackaging.md)\>

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
| `a` | `undefined` \| [`ShippingPackaging`](ShippingPackaging.md) \| `PlainMessage`<[`ShippingPackaging`](ShippingPackaging.md)\> |
| `b` | `undefined` \| [`ShippingPackaging`](ShippingPackaging.md) \| `PlainMessage`<[`ShippingPackaging`](ShippingPackaging.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:626](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L626)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingPackaging`](ShippingPackaging.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingPackaging`](ShippingPackaging.md)

#### Defined in

[src/shippings_pb.ts:614](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L614)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingPackaging`](ShippingPackaging.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPackaging`](ShippingPackaging.md)

#### Defined in

[src/shippings_pb.ts:618](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L618)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingPackaging`](ShippingPackaging.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingPackaging`](ShippingPackaging.md)

#### Defined in

[src/shippings_pb.ts:622](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/shippings_pb.ts#L622)
