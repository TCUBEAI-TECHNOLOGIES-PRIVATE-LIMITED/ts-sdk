[tcubesa-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceCreateRequest

# Class: LocationsServiceCreateRequest

Describes the necessary data structure during creation of a location

**`Generated`**

from message tcube.LocationsServiceCreateRequest

## Hierarchy

- `Message`<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

  ↳ **`LocationsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LocationsServiceCreateRequest.md#constructor)

### Properties

- [code](LocationsServiceCreateRequest.md#code)
- [description](LocationsServiceCreateRequest.md#description)
- [entityUuid](LocationsServiceCreateRequest.md#entityuuid)
- [name](LocationsServiceCreateRequest.md#name)
- [userComment](LocationsServiceCreateRequest.md#usercomment)
- [fields](LocationsServiceCreateRequest.md#fields)
- [runtime](LocationsServiceCreateRequest.md#runtime)
- [typeName](LocationsServiceCreateRequest.md#typename)

### Methods

- [clone](LocationsServiceCreateRequest.md#clone)
- [equals](LocationsServiceCreateRequest.md#equals)
- [fromBinary](LocationsServiceCreateRequest.md#frombinary)
- [fromJson](LocationsServiceCreateRequest.md#fromjson)
- [fromJsonString](LocationsServiceCreateRequest.md#fromjsonstring)
- [getType](LocationsServiceCreateRequest.md#gettype)
- [toBinary](LocationsServiceCreateRequest.md#tobinary)
- [toJSON](LocationsServiceCreateRequest.md#tojson)
- [toJson](LocationsServiceCreateRequest.md#tojson-1)
- [toJsonString](LocationsServiceCreateRequest.md#tojsonstring)
- [equals](LocationsServiceCreateRequest.md#equals-1)
- [fromBinary](LocationsServiceCreateRequest.md#frombinary-1)
- [fromJson](LocationsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LocationsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;LocationsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/locations_pb.ts:103](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L103)

## Properties

### code

• **code**: `string` = `""`

Code of the location

**`Generated`**

from field: string code = 11;

#### Defined in

[src/locations_pb.ts:94](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L94)

___

### description

• **description**: `string` = `""`

Description of the location

**`Generated`**

from field: string description = 12;

#### Defined in

[src/locations_pb.ts:101](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L101)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/locations_pb.ts:80](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L80)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 10;

#### Defined in

[src/locations_pb.ts:87](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L87)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/locations_pb.ts:73](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L73)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:110](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L110)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:108](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L108)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.LocationsServiceCreateRequest"``

#### Defined in

[src/locations_pb.ts:109](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L109)

## Methods

### clone

▸ **clone**(): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

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

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:130](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L130)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

[src/locations_pb.ts:118](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L118)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

[src/locations_pb.ts:122](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L122)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

[src/locations_pb.ts:126](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/locations_pb.ts#L126)
