[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceRegisterActivityRequest

# Class: SerialsServiceRegisterActivityRequest

Describes the payload that is used to either commission, decommission or verify a serial

**`Generated`**

from message tcube.SerialsServiceRegisterActivityRequest

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

[src/serials_pb.ts:213](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L213)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_pb.ts:176](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L176)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this activity was registered

**`Generated`**

from field: double latitude = 13;

#### Defined in

[src/serials_pb.ts:204](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L204)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:183](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L183)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this activity was registered

**`Generated`**

from field: double longitude = 14;

#### Defined in

[src/serials_pb.ts:211](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L211)

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 11;

#### Defined in

[src/serials_pb.ts:197](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L197)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/serials_pb.ts:169](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L169)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 10;

#### Defined in

[src/serials_pb.ts:190](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L190)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:220](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L220)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:218](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L218)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsServiceRegisterActivityRequest"``

#### Defined in

[src/serials_pb.ts:219](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L219)

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

[src/serials_pb.ts:242](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L242)

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

[src/serials_pb.ts:230](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L230)

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

[src/serials_pb.ts:234](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L234)

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

[src/serials_pb.ts:238](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L238)
