[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ActiveInLocationRequest

# Class: ActiveInLocationRequest

Describes the status of the records returned to a request specific to a locaation

**`Generated`**

from message tcube.ActiveInLocationRequest

## Hierarchy

- `Message`<[`ActiveInLocationRequest`](ActiveInLocationRequest.md)\>

  ↳ **`ActiveInLocationRequest`**

## Table of contents

### Constructors

- [constructor](ActiveInLocationRequest.md#constructor)

### Properties

- [isActive](ActiveInLocationRequest.md#isactive)
- [locationUuid](ActiveInLocationRequest.md#locationuuid)
- [fields](ActiveInLocationRequest.md#fields)
- [runtime](ActiveInLocationRequest.md#runtime)
- [typeName](ActiveInLocationRequest.md#typename)

### Methods

- [clone](ActiveInLocationRequest.md#clone)
- [equals](ActiveInLocationRequest.md#equals)
- [fromBinary](ActiveInLocationRequest.md#frombinary)
- [fromJson](ActiveInLocationRequest.md#fromjson)
- [fromJsonString](ActiveInLocationRequest.md#fromjsonstring)
- [getType](ActiveInLocationRequest.md#gettype)
- [toBinary](ActiveInLocationRequest.md#tobinary)
- [toJSON](ActiveInLocationRequest.md#tojson)
- [toJson](ActiveInLocationRequest.md#tojson-1)
- [toJsonString](ActiveInLocationRequest.md#tojsonstring)
- [equals](ActiveInLocationRequest.md#equals-1)
- [fromBinary](ActiveInLocationRequest.md#frombinary-1)
- [fromJson](ActiveInLocationRequest.md#fromjson-1)
- [fromJsonString](ActiveInLocationRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActiveInLocationRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ActiveInLocationRequest`](ActiveInLocationRequest.md)\> |

#### Overrides

Message&lt;ActiveInLocationRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:519](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L519)

## Properties

### isActive

• **isActive**: `boolean` = `false`

Denotes if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:510](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L510)

___

### locationUuid

• **locationUuid**: `string` = `""`

Stores the location UUID and limits the query to the appropriate location

**`Generated`**

from field: string location_uuid = 2;

#### Defined in

[src/base_pb.ts:517](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L517)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:526](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L526)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:524](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L524)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ActiveInLocationRequest"``

#### Defined in

[src/base_pb.ts:525](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L525)

## Methods

### clone

▸ **clone**(): [`ActiveInLocationRequest`](ActiveInLocationRequest.md)

Create a deep copy.

#### Returns

[`ActiveInLocationRequest`](ActiveInLocationRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActiveInLocationRequest`](ActiveInLocationRequest.md) \| `PlainMessage`<[`ActiveInLocationRequest`](ActiveInLocationRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActiveInLocationRequest`](ActiveInLocationRequest.md)

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

[`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActiveInLocationRequest`](ActiveInLocationRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActiveInLocationRequest`](ActiveInLocationRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ActiveInLocationRequest`](ActiveInLocationRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ActiveInLocationRequest`](ActiveInLocationRequest.md)\>

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
| `a` | `undefined` \| [`ActiveInLocationRequest`](ActiveInLocationRequest.md) \| `PlainMessage`<[`ActiveInLocationRequest`](ActiveInLocationRequest.md)\> |
| `b` | `undefined` \| [`ActiveInLocationRequest`](ActiveInLocationRequest.md) \| `PlainMessage`<[`ActiveInLocationRequest`](ActiveInLocationRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:543](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L543)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Defined in

[src/base_pb.ts:531](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L531)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Defined in

[src/base_pb.ts:535](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L535)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInLocationRequest`](ActiveInLocationRequest.md)

#### Defined in

[src/base_pb.ts:539](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L539)
