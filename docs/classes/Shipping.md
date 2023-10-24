[scanswift-sdk](../README.md) / [Exports](../modules.md) / Shipping

# Class: Shipping

Describes the data structure of each shipping on the platform

**`Generated`**

from message scanswift.Shipping

## Hierarchy

- `Message`<[`Shipping`](Shipping.md)\>

  ↳ **`Shipping`**

## Table of contents

### Constructors

- [constructor](Shipping.md#constructor)

### Properties

- [code](Shipping.md#code)
- [customerUuid](Shipping.md#customeruuid)
- [description](Shipping.md#description)
- [downloadCount](Shipping.md#downloadcount)
- [entityUuid](Shipping.md#entityuuid)
- [isDownloaded](Shipping.md#isdownloaded)
- [latitude](Shipping.md#latitude)
- [locationUuid](Shipping.md#locationuuid)
- [longitude](Shipping.md#longitude)
- [maxCount](Shipping.md#maxcount)
- [metadata](Shipping.md#metadata)
- [name](Shipping.md#name)
- [printEncodingType](Shipping.md#printencodingtype)
- [state](Shipping.md#state)
- [zoneUuid](Shipping.md#zoneuuid)
- [fields](Shipping.md#fields)
- [runtime](Shipping.md#runtime)
- [typeName](Shipping.md#typename)

### Methods

- [clone](Shipping.md#clone)
- [equals](Shipping.md#equals)
- [fromBinary](Shipping.md#frombinary)
- [fromJson](Shipping.md#fromjson)
- [fromJsonString](Shipping.md#fromjsonstring)
- [getType](Shipping.md#gettype)
- [toBinary](Shipping.md#tobinary)
- [toJSON](Shipping.md#tojson)
- [toJson](Shipping.md#tojson-1)
- [toJsonString](Shipping.md#tojsonstring)
- [equals](Shipping.md#equals-1)
- [fromBinary](Shipping.md#frombinary-1)
- [fromJson](Shipping.md#fromjson-1)
- [fromJsonString](Shipping.md#fromjsonstring-1)

## Constructors

### constructor

• **new Shipping**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Shipping`](Shipping.md)\> |

#### Overrides

Message&lt;Shipping\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:367](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L367)

## Properties

### code

• **code**: `string` = `""`

Code of the shipping

**`Generated`**

from field: string code = 11;

#### Defined in

[src/shippings_pb.ts:309](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L309)

___

### customerUuid

• **customerUuid**: `string` = `""`

UUID of the customer

**`Generated`**

from field: string customer_uuid = 7;

#### Defined in

[src/shippings_pb.ts:281](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L281)

___

### description

• **description**: `string` = `""`

Description of the shipping

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shippings_pb.ts:316](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L316)

___

### downloadCount

• **downloadCount**: `bigint` = `protoInt64.zero`

Stores the number of times that this shipping has already been downloaded

**`Generated`**

from field: int64 download_count = 31;

#### Defined in

[src/shippings_pb.ts:365](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L365)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/shippings_pb.ts:274](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L274)

___

### isDownloaded

• **isDownloaded**: `boolean` = `false`

Stores if the shipping has already been downloaded

**`Generated`**

from field: bool is_downloaded = 30;

#### Defined in

[src/shippings_pb.ts:358](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L358)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this shipping was created

**`Generated`**

from field: double latitude = 14;

#### Defined in

[src/shippings_pb.ts:330](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L330)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/shippings_pb.ts:288](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L288)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this shipping was created

**`Generated`**

from field: double longitude = 15;

#### Defined in

[src/shippings_pb.ts:337](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L337)

___

### maxCount

• **maxCount**: `bigint` = `protoInt64.zero`

The maximum number of items that can be added to a shipping record, with 0 denoting no limit

**`Generated`**

from field: int64 max_count = 13;

#### Defined in

[src/shippings_pb.ts:323](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L323)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/shippings_pb.ts:267](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L267)

___

### name

• **name**: `string` = `""`

The name of the shipping

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shippings_pb.ts:302](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L302)

___

### printEncodingType

• **printEncodingType**: [`PRINT_ENCODING_TYPE_FOR_SHIPPING`](../enums/PRINT_ENCODING_TYPE_FOR_SHIPPING.md) = `PRINT_ENCODING_TYPE_FOR_SHIPPING.PRINT_ENCODING_TYPE_FOR_SHIPPING_HRI_UNSPECIFIED`

The type of encoding

**`Generated`**

from field: scanswift.PRINT_ENCODING_TYPE_FOR_SHIPPING print_encoding_type = 16;

#### Defined in

[src/shippings_pb.ts:344](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L344)

___

### state

• **state**: [`SHIPPING_STATE`](../enums/SHIPPING_STATE.md) = `SHIPPING_STATE.SHIPPING_STATE_ANY_UNSPECIFIED`

The state of the shipping

**`Generated`**

from field: scanswift.SHIPPING_STATE state = 20;

#### Defined in

[src/shippings_pb.ts:351](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L351)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 9;

#### Defined in

[src/shippings_pb.ts:295](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L295)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:374](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L374)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:372](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L372)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.Shipping"``

#### Defined in

[src/shippings_pb.ts:373](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L373)

## Methods

### clone

▸ **clone**(): [`Shipping`](Shipping.md)

Create a deep copy.

#### Returns

[`Shipping`](Shipping.md)

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
| `other` | `undefined` \| ``null`` \| [`Shipping`](Shipping.md) \| `PlainMessage`<[`Shipping`](Shipping.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Shipping`](Shipping.md)

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

[`Shipping`](Shipping.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Shipping`](Shipping.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Shipping`](Shipping.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Shipping`](Shipping.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Shipping`](Shipping.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Shipping`](Shipping.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Shipping`](Shipping.md)\>

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
| `a` | `undefined` \| [`Shipping`](Shipping.md) \| `PlainMessage`<[`Shipping`](Shipping.md)\> |
| `b` | `undefined` \| [`Shipping`](Shipping.md) \| `PlainMessage`<[`Shipping`](Shipping.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:404](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L404)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Shipping`](Shipping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Shipping`](Shipping.md)

#### Defined in

[src/shippings_pb.ts:392](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L392)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Shipping`](Shipping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Shipping`](Shipping.md)

#### Defined in

[src/shippings_pb.ts:396](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L396)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Shipping`](Shipping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Shipping`](Shipping.md)

#### Defined in

[src/shippings_pb.ts:400](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/shippings_pb.ts#L400)
