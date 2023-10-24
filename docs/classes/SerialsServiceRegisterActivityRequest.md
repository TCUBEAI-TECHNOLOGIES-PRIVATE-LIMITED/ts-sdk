[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceRegisterActivityRequest

# Class: SerialsServiceRegisterActivityRequest

Describes the payload that is used to either commission, decommission or verify a serial

**`Generated`**

from message scanswift.SerialsServiceRegisterActivityRequest

## Hierarchy

- `Message`<[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)\>

  ↳ **`SerialsServiceRegisterActivityRequest`**

## Table of contents

### Constructors

- [constructor](SerialsServiceRegisterActivityRequest.md#constructor)

### Properties

- [entityUuid](SerialsServiceRegisterActivityRequest.md#entityuuid)
- [latitude](SerialsServiceRegisterActivityRequest.md#latitude)
- [locationUuid](SerialsServiceRegisterActivityRequest.md#locationuuid)
- [longitude](SerialsServiceRegisterActivityRequest.md#longitude)
- [serialUuid](SerialsServiceRegisterActivityRequest.md#serialuuid)
- [userComment](SerialsServiceRegisterActivityRequest.md#usercomment)
- [zoneUuid](SerialsServiceRegisterActivityRequest.md#zoneuuid)
- [fields](SerialsServiceRegisterActivityRequest.md#fields)
- [runtime](SerialsServiceRegisterActivityRequest.md#runtime)
- [typeName](SerialsServiceRegisterActivityRequest.md#typename)

### Methods

- [clone](SerialsServiceRegisterActivityRequest.md#clone)
- [equals](SerialsServiceRegisterActivityRequest.md#equals)
- [fromBinary](SerialsServiceRegisterActivityRequest.md#frombinary)
- [fromJson](SerialsServiceRegisterActivityRequest.md#fromjson)
- [fromJsonString](SerialsServiceRegisterActivityRequest.md#fromjsonstring)
- [getType](SerialsServiceRegisterActivityRequest.md#gettype)
- [toBinary](SerialsServiceRegisterActivityRequest.md#tobinary)
- [toJSON](SerialsServiceRegisterActivityRequest.md#tojson)
- [toJson](SerialsServiceRegisterActivityRequest.md#tojson-1)
- [toJsonString](SerialsServiceRegisterActivityRequest.md#tojsonstring)
- [equals](SerialsServiceRegisterActivityRequest.md#equals-1)
- [fromBinary](SerialsServiceRegisterActivityRequest.md#frombinary-1)
- [fromJson](SerialsServiceRegisterActivityRequest.md#fromjson-1)
- [fromJsonString](SerialsServiceRegisterActivityRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceRegisterActivityRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)\> |

#### Overrides

Message&lt;SerialsServiceRegisterActivityRequest\&gt;.constructor

#### Defined in

[src/serials_pb.ts:216](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L216)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_pb.ts:179](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L179)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this activity was registered

**`Generated`**

from field: double latitude = 13;

#### Defined in

[src/serials_pb.ts:207](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L207)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:186](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L186)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this activity was registered

**`Generated`**

from field: double longitude = 14;

#### Defined in

[src/serials_pb.ts:214](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L214)

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 11;

#### Defined in

[src/serials_pb.ts:200](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L200)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/serials_pb.ts:172](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L172)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 10;

#### Defined in

[src/serials_pb.ts:193](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L193)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:223](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L223)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L221)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsServiceRegisterActivityRequest"``

#### Defined in

[src/serials_pb.ts:222](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L222)

## Methods

### clone

▸ **clone**(): [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

Create a deep copy.

#### Returns

[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md) \| `PlainMessage`<[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

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

[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)\>

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
| `a` | `undefined` \| [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md) \| `PlainMessage`<[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)\> |
| `b` | `undefined` \| [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md) \| `PlainMessage`<[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:245](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L245)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Defined in

[src/serials_pb.ts:233](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L233)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Defined in

[src/serials_pb.ts:237](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L237)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceRegisterActivityRequest`](SerialsServiceRegisterActivityRequest.md)

#### Defined in

[src/serials_pb.ts:241](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L241)
