[tcubesa-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceUpdateRequest

# Class: LocationsServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a location

**`Generated`**

from message tcube.LocationsServiceUpdateRequest

## Hierarchy

- `Message`<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

  ↳ **`LocationsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LocationsServiceUpdateRequest.md#constructor)

### Properties

- [code](LocationsServiceUpdateRequest.md#code)
- [description](LocationsServiceUpdateRequest.md#description)
- [name](LocationsServiceUpdateRequest.md#name)
- [userComment](LocationsServiceUpdateRequest.md#usercomment)
- [uuid](LocationsServiceUpdateRequest.md#uuid)
- [fields](LocationsServiceUpdateRequest.md#fields)
- [runtime](LocationsServiceUpdateRequest.md#runtime)
- [typeName](LocationsServiceUpdateRequest.md#typename)

### Methods

- [clone](LocationsServiceUpdateRequest.md#clone)
- [equals](LocationsServiceUpdateRequest.md#equals)
- [fromBinary](LocationsServiceUpdateRequest.md#frombinary)
- [fromJson](LocationsServiceUpdateRequest.md#fromjson)
- [fromJsonString](LocationsServiceUpdateRequest.md#fromjsonstring)
- [getType](LocationsServiceUpdateRequest.md#gettype)
- [toBinary](LocationsServiceUpdateRequest.md#tobinary)
- [toJSON](LocationsServiceUpdateRequest.md#tojson)
- [toJson](LocationsServiceUpdateRequest.md#tojson-1)
- [toJsonString](LocationsServiceUpdateRequest.md#tojsonstring)
- [equals](LocationsServiceUpdateRequest.md#equals-1)
- [fromBinary](LocationsServiceUpdateRequest.md#frombinary-1)
- [fromJson](LocationsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LocationsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;LocationsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/locations_pb.ts:177](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L177)

## Properties

### code

• **code**: `string` = `""`

Code of the location

**`Generated`**

from field: string code = 11;

#### Defined in

[src/locations_pb.ts:168](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L168)

___

### description

• **description**: `string` = `""`

Description of the location

**`Generated`**

from field: string description = 12;

#### Defined in

[src/locations_pb.ts:175](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L175)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 10;

#### Defined in

[src/locations_pb.ts:161](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L161)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/locations_pb.ts:147](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L147)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/locations_pb.ts:154](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L154)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:184](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L184)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:182](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L182)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.LocationsServiceUpdateRequest"``

#### Defined in

[src/locations_pb.ts:183](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L183)

## Methods

### clone

▸ **clone**(): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

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

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:204](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L204)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations_pb.ts:192](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L192)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations_pb.ts:196](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L196)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations_pb.ts:200](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L200)
