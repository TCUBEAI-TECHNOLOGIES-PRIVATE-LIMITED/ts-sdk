[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingsServiceCreateRequest

# Class: ShippingsServiceCreateRequest

Describes the necessary data structure during creation of a shipping

**`Generated`**

from message tcube.ShippingsServiceCreateRequest

## Hierarchy

- `Message`<[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)\>

  ↳ **`ShippingsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ShippingsServiceCreateRequest.md#constructor)

### Properties

- [customerUuid](ShippingsServiceCreateRequest.md#customeruuid)
- [description](ShippingsServiceCreateRequest.md#description)
- [entityUuid](ShippingsServiceCreateRequest.md#entityuuid)
- [latitude](ShippingsServiceCreateRequest.md#latitude)
- [locationUuid](ShippingsServiceCreateRequest.md#locationuuid)
- [longitude](ShippingsServiceCreateRequest.md#longitude)
- [maxCount](ShippingsServiceCreateRequest.md#maxcount)
- [name](ShippingsServiceCreateRequest.md#name)
- [printEncodingType](ShippingsServiceCreateRequest.md#printencodingtype)
- [userComment](ShippingsServiceCreateRequest.md#usercomment)
- [zoneUuid](ShippingsServiceCreateRequest.md#zoneuuid)
- [fields](ShippingsServiceCreateRequest.md#fields)
- [runtime](ShippingsServiceCreateRequest.md#runtime)
- [typeName](ShippingsServiceCreateRequest.md#typename)

### Methods

- [clone](ShippingsServiceCreateRequest.md#clone)
- [equals](ShippingsServiceCreateRequest.md#equals)
- [fromBinary](ShippingsServiceCreateRequest.md#frombinary)
- [fromJson](ShippingsServiceCreateRequest.md#fromjson)
- [fromJsonString](ShippingsServiceCreateRequest.md#fromjsonstring)
- [getType](ShippingsServiceCreateRequest.md#gettype)
- [toBinary](ShippingsServiceCreateRequest.md#tobinary)
- [toJSON](ShippingsServiceCreateRequest.md#tojson)
- [toJson](ShippingsServiceCreateRequest.md#tojson-1)
- [toJsonString](ShippingsServiceCreateRequest.md#tojsonstring)
- [equals](ShippingsServiceCreateRequest.md#equals-1)
- [fromBinary](ShippingsServiceCreateRequest.md#frombinary-1)
- [fromJson](ShippingsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ShippingsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;ShippingsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/shippings_pb.ts:215](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L215)

## Properties

### customerUuid

• **customerUuid**: `string` = `""`

UUID of the customer

**`Generated`**

from field: string customer_uuid = 7;

#### Defined in

[src/shippings_pb.ts:157](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L157)

___

### description

• **description**: `string` = `""`

Description of the shipping

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shippings_pb.ts:185](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L185)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/shippings_pb.ts:150](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L150)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this shipping was created

**`Generated`**

from field: double latitude = 14;

#### Defined in

[src/shippings_pb.ts:199](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L199)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/shippings_pb.ts:164](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L164)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this shipping was created

**`Generated`**

from field: double longitude = 15;

#### Defined in

[src/shippings_pb.ts:206](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L206)

___

### maxCount

• **maxCount**: `bigint` = `protoInt64.zero`

The maximum number of items that can be added to a shipping record, with 0 denoting no limit

**`Generated`**

from field: int64 max_count = 13;

#### Defined in

[src/shippings_pb.ts:192](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L192)

___

### name

• **name**: `string` = `""`

The name of the shipping

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shippings_pb.ts:178](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L178)

___

### printEncodingType

• **printEncodingType**: [`PRINT_ENCODING_TYPE_FOR_SHIPPING`](../enums/PRINT_ENCODING_TYPE_FOR_SHIPPING.md) = `PRINT_ENCODING_TYPE_FOR_SHIPPING.PRINT_ENCODING_TYPE_FOR_SHIPPING_HRI_UNSPECIFIED`

The type of encoding

**`Generated`**

from field: tcube.PRINT_ENCODING_TYPE_FOR_SHIPPING print_encoding_type = 16;

#### Defined in

[src/shippings_pb.ts:213](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L213)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/shippings_pb.ts:143](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L143)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 9;

#### Defined in

[src/shippings_pb.ts:171](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L171)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shippings_pb.ts:222](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L222)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shippings_pb.ts:220](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L220)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingsServiceCreateRequest"``

#### Defined in

[src/shippings_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L221)

## Methods

### clone

▸ **clone**(): [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md) \| `PlainMessage`<[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

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

[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md) \| `PlainMessage`<[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md) \| `PlainMessage`<[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shippings_pb.ts:248](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L248)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Defined in

[src/shippings_pb.ts:236](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L236)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Defined in

[src/shippings_pb.ts:240](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L240)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsServiceCreateRequest`](ShippingsServiceCreateRequest.md)

#### Defined in

[src/shippings_pb.ts:244](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/shippings_pb.ts#L244)
