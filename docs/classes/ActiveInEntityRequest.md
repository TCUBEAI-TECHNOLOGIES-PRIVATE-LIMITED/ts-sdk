[scanswift-sdk](../README.md) / [Exports](../modules.md) / ActiveInEntityRequest

# Class: ActiveInEntityRequest

Describes the status of the records returned to a request specific to an entity

**`Generated`**

from message scanswift.ActiveInEntityRequest

## Hierarchy

- `Message`<[`ActiveInEntityRequest`](ActiveInEntityRequest.md)\>

  ↳ **`ActiveInEntityRequest`**

## Table of contents

### Constructors

- [constructor](ActiveInEntityRequest.md#constructor)

### Properties

- [entityUuid](ActiveInEntityRequest.md#entityuuid)
- [isActive](ActiveInEntityRequest.md#isactive)
- [fields](ActiveInEntityRequest.md#fields)
- [runtime](ActiveInEntityRequest.md#runtime)
- [typeName](ActiveInEntityRequest.md#typename)

### Methods

- [clone](ActiveInEntityRequest.md#clone)
- [equals](ActiveInEntityRequest.md#equals)
- [fromBinary](ActiveInEntityRequest.md#frombinary)
- [fromJson](ActiveInEntityRequest.md#fromjson)
- [fromJsonString](ActiveInEntityRequest.md#fromjsonstring)
- [getType](ActiveInEntityRequest.md#gettype)
- [toBinary](ActiveInEntityRequest.md#tobinary)
- [toJSON](ActiveInEntityRequest.md#tojson)
- [toJson](ActiveInEntityRequest.md#tojson-1)
- [toJsonString](ActiveInEntityRequest.md#tojsonstring)
- [equals](ActiveInEntityRequest.md#equals-1)
- [fromBinary](ActiveInEntityRequest.md#frombinary-1)
- [fromJson](ActiveInEntityRequest.md#fromjson-1)
- [fromJsonString](ActiveInEntityRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActiveInEntityRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ActiveInEntityRequest`](ActiveInEntityRequest.md)\> |

#### Overrides

Message&lt;ActiveInEntityRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:546](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L546)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores the entity UUID and limits the query to the appropriate entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/base_pb.ts:544](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L544)

___

### isActive

• **isActive**: `boolean` = `false`

Denotes if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:537](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L537)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:553](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L553)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:551](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L551)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ActiveInEntityRequest"``

#### Defined in

[src/base_pb.ts:552](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L552)

## Methods

### clone

▸ **clone**(): [`ActiveInEntityRequest`](ActiveInEntityRequest.md)

Create a deep copy.

#### Returns

[`ActiveInEntityRequest`](ActiveInEntityRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActiveInEntityRequest`](ActiveInEntityRequest.md) \| `PlainMessage`<[`ActiveInEntityRequest`](ActiveInEntityRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActiveInEntityRequest`](ActiveInEntityRequest.md)

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

[`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActiveInEntityRequest`](ActiveInEntityRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActiveInEntityRequest`](ActiveInEntityRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ActiveInEntityRequest`](ActiveInEntityRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ActiveInEntityRequest`](ActiveInEntityRequest.md)\>

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
| `a` | `undefined` \| [`ActiveInEntityRequest`](ActiveInEntityRequest.md) \| `PlainMessage`<[`ActiveInEntityRequest`](ActiveInEntityRequest.md)\> |
| `b` | `undefined` \| [`ActiveInEntityRequest`](ActiveInEntityRequest.md) \| `PlainMessage`<[`ActiveInEntityRequest`](ActiveInEntityRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:570](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L570)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Defined in

[src/base_pb.ts:558](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L558)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Defined in

[src/base_pb.ts:562](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L562)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveInEntityRequest`](ActiveInEntityRequest.md)

#### Defined in

[src/base_pb.ts:566](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L566)
