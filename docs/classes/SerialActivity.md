[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialActivity

# Class: SerialActivity

Describes the data structure of each serial activity

**`Generated`**

from message tcube.SerialActivity

## Hierarchy

- `Message`<[`SerialActivity`](SerialActivity.md)\>

  ↳ **`SerialActivity`**

## Table of contents

### Constructors

- [constructor](SerialActivity.md#constructor)

### Properties

- [activity](SerialActivity.md#activity)
- [entityUuid](SerialActivity.md#entityuuid)
- [latitude](SerialActivity.md#latitude)
- [locationUuid](SerialActivity.md#locationuuid)
- [longitude](SerialActivity.md#longitude)
- [metadata](SerialActivity.md#metadata)
- [serialUuid](SerialActivity.md#serialuuid)
- [zoneUuid](SerialActivity.md#zoneuuid)
- [fields](SerialActivity.md#fields)
- [runtime](SerialActivity.md#runtime)
- [typeName](SerialActivity.md#typename)

### Methods

- [clone](SerialActivity.md#clone)
- [equals](SerialActivity.md#equals)
- [fromBinary](SerialActivity.md#frombinary)
- [fromJson](SerialActivity.md#fromjson)
- [fromJsonString](SerialActivity.md#fromjsonstring)
- [getType](SerialActivity.md#gettype)
- [toBinary](SerialActivity.md#tobinary)
- [toJSON](SerialActivity.md#tojson)
- [toJson](SerialActivity.md#tojson-1)
- [toJsonString](SerialActivity.md#tojsonstring)
- [equals](SerialActivity.md#equals-1)
- [fromBinary](SerialActivity.md#frombinary-1)
- [fromJson](SerialActivity.md#fromjson-1)
- [fromJsonString](SerialActivity.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialActivity**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialActivity`](SerialActivity.md)\> |

#### Overrides

Message&lt;SerialActivity\&gt;.constructor

#### Defined in

[src/serials_pb.ts:658](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L658)

## Properties

### activity

• **activity**: [`SERIAL_ACTIVITY`](../enums/SERIAL_ACTIVITY.md) = `SERIAL_ACTIVITY.SERIAL_ACTIVITY_ANY_UNSPECIFIED`

The registered activity

**`Generated`**

from field: tcube.SERIAL_ACTIVITY activity = 12;

#### Defined in

[src/serials_pb.ts:642](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L642)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_pb.ts:614](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L614)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this activity was registered

**`Generated`**

from field: double latitude = 13;

#### Defined in

[src/serials_pb.ts:649](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L649)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:621](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L621)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this activity was registered

**`Generated`**

from field: double longitude = 14;

#### Defined in

[src/serials_pb.ts:656](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L656)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/serials_pb.ts:607](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L607)

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 11;

#### Defined in

[src/serials_pb.ts:635](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L635)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 10;

#### Defined in

[src/serials_pb.ts:628](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L628)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:665](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L665)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:663](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L663)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialActivity"``

#### Defined in

[src/serials_pb.ts:664](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L664)

## Methods

### clone

▸ **clone**(): [`SerialActivity`](SerialActivity.md)

Create a deep copy.

#### Returns

[`SerialActivity`](SerialActivity.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialActivity`](SerialActivity.md) \| `PlainMessage`<[`SerialActivity`](SerialActivity.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialActivity`](SerialActivity.md)

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

[`SerialActivity`](SerialActivity.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialActivity`](SerialActivity.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivity`](SerialActivity.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialActivity`](SerialActivity.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivity`](SerialActivity.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialActivity`](SerialActivity.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialActivity`](SerialActivity.md)\>

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
| `a` | `undefined` \| [`SerialActivity`](SerialActivity.md) \| `PlainMessage`<[`SerialActivity`](SerialActivity.md)\> |
| `b` | `undefined` \| [`SerialActivity`](SerialActivity.md) \| `PlainMessage`<[`SerialActivity`](SerialActivity.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:688](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L688)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialActivity`](SerialActivity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialActivity`](SerialActivity.md)

#### Defined in

[src/serials_pb.ts:676](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L676)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialActivity`](SerialActivity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivity`](SerialActivity.md)

#### Defined in

[src/serials_pb.ts:680](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L680)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialActivity`](SerialActivity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialActivity`](SerialActivity.md)

#### Defined in

[src/serials_pb.ts:684](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L684)
