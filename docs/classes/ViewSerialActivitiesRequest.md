[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ViewSerialActivitiesRequest

# Class: ViewSerialActivitiesRequest

Describes the payload required to retrieve all the activities related to a serial

**`Generated`**

from message tcube.ViewSerialActivitiesRequest

## Hierarchy

- `Message`<[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)\>

  ↳ **`ViewSerialActivitiesRequest`**

## Table of contents

### Constructors

- [constructor](ViewSerialActivitiesRequest.md#constructor)

### Properties

- [entityUuid](ViewSerialActivitiesRequest.md#entityuuid)
- [isActive](ViewSerialActivitiesRequest.md#isactive)
- [serialUuid](ViewSerialActivitiesRequest.md#serialuuid)
- [fields](ViewSerialActivitiesRequest.md#fields)
- [runtime](ViewSerialActivitiesRequest.md#runtime)
- [typeName](ViewSerialActivitiesRequest.md#typename)

### Methods

- [clone](ViewSerialActivitiesRequest.md#clone)
- [equals](ViewSerialActivitiesRequest.md#equals)
- [fromBinary](ViewSerialActivitiesRequest.md#frombinary)
- [fromJson](ViewSerialActivitiesRequest.md#fromjson)
- [fromJsonString](ViewSerialActivitiesRequest.md#fromjsonstring)
- [getType](ViewSerialActivitiesRequest.md#gettype)
- [toBinary](ViewSerialActivitiesRequest.md#tobinary)
- [toJSON](ViewSerialActivitiesRequest.md#tojson)
- [toJson](ViewSerialActivitiesRequest.md#tojson-1)
- [toJsonString](ViewSerialActivitiesRequest.md#tojsonstring)
- [equals](ViewSerialActivitiesRequest.md#equals-1)
- [fromBinary](ViewSerialActivitiesRequest.md#frombinary-1)
- [fromJson](ViewSerialActivitiesRequest.md#fromjson-1)
- [fromJsonString](ViewSerialActivitiesRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ViewSerialActivitiesRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)\> |

#### Overrides

Message&lt;ViewSerialActivitiesRequest\&gt;.constructor

#### Defined in

[src/serials_pb.ts:763](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L763)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores the entity UUID and limits the query to the appropriate entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_pb.ts:754](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L754)

___

### isActive

• **isActive**: `boolean` = `false`

Denotes if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/serials_pb.ts:747](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L747)

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 10;

#### Defined in

[src/serials_pb.ts:761](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L761)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:770](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L770)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:768](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L768)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ViewSerialActivitiesRequest"``

#### Defined in

[src/serials_pb.ts:769](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L769)

## Methods

### clone

▸ **clone**(): [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

Create a deep copy.

#### Returns

[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md) \| `PlainMessage`<[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

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

[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)\>

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
| `a` | `undefined` \| [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md) \| `PlainMessage`<[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)\> |
| `b` | `undefined` \| [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md) \| `PlainMessage`<[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:788](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L788)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Defined in

[src/serials_pb.ts:776](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L776)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Defined in

[src/serials_pb.ts:780](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L780)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ViewSerialActivitiesRequest`](ViewSerialActivitiesRequest.md)

#### Defined in

[src/serials_pb.ts:784](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/serials_pb.ts#L784)
