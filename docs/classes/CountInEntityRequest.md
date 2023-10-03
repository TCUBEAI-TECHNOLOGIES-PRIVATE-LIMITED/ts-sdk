[tcubesa-sdk](../README.md) / [Exports](../modules.md) / CountInEntityRequest

# Class: CountInEntityRequest

Describes the payload for a request to determine the count of records within a specific entity

**`Generated`**

from message tcube.CountInEntityRequest

## Hierarchy

- `Message`<[`CountInEntityRequest`](CountInEntityRequest.md)\>

  ↳ **`CountInEntityRequest`**

## Table of contents

### Constructors

- [constructor](CountInEntityRequest.md#constructor)

### Properties

- [entityUuid](CountInEntityRequest.md#entityuuid)
- [isActive](CountInEntityRequest.md#isactive)
- [fields](CountInEntityRequest.md#fields)
- [runtime](CountInEntityRequest.md#runtime)
- [typeName](CountInEntityRequest.md#typename)

### Methods

- [clone](CountInEntityRequest.md#clone)
- [equals](CountInEntityRequest.md#equals)
- [fromBinary](CountInEntityRequest.md#frombinary)
- [fromJson](CountInEntityRequest.md#fromjson)
- [fromJsonString](CountInEntityRequest.md#fromjsonstring)
- [getType](CountInEntityRequest.md#gettype)
- [toBinary](CountInEntityRequest.md#tobinary)
- [toJSON](CountInEntityRequest.md#tojson)
- [toJson](CountInEntityRequest.md#tojson-1)
- [toJsonString](CountInEntityRequest.md#tojsonstring)
- [equals](CountInEntityRequest.md#equals-1)
- [fromBinary](CountInEntityRequest.md#frombinary-1)
- [fromJson](CountInEntityRequest.md#fromjson-1)
- [fromJsonString](CountInEntityRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CountInEntityRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CountInEntityRequest`](CountInEntityRequest.md)\> |

#### Overrides

Message&lt;CountInEntityRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:661](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L661)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores the entity UUID and limits the query to the appropriate entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/base_pb.ts:659](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L659)

___

### isActive

• **isActive**: `boolean` = `false`

Denotes if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:652](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L652)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:668](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L668)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:666](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L666)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.CountInEntityRequest"``

#### Defined in

[src/base_pb.ts:667](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L667)

## Methods

### clone

▸ **clone**(): [`CountInEntityRequest`](CountInEntityRequest.md)

Create a deep copy.

#### Returns

[`CountInEntityRequest`](CountInEntityRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CountInEntityRequest`](CountInEntityRequest.md) \| `PlainMessage`<[`CountInEntityRequest`](CountInEntityRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CountInEntityRequest`](CountInEntityRequest.md)

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

[`CountInEntityRequest`](CountInEntityRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CountInEntityRequest`](CountInEntityRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInEntityRequest`](CountInEntityRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CountInEntityRequest`](CountInEntityRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInEntityRequest`](CountInEntityRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CountInEntityRequest`](CountInEntityRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CountInEntityRequest`](CountInEntityRequest.md)\>

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
| `a` | `undefined` \| [`CountInEntityRequest`](CountInEntityRequest.md) \| `PlainMessage`<[`CountInEntityRequest`](CountInEntityRequest.md)\> |
| `b` | `undefined` \| [`CountInEntityRequest`](CountInEntityRequest.md) \| `PlainMessage`<[`CountInEntityRequest`](CountInEntityRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:685](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L685)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CountInEntityRequest`](CountInEntityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CountInEntityRequest`](CountInEntityRequest.md)

#### Defined in

[src/base_pb.ts:673](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L673)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CountInEntityRequest`](CountInEntityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInEntityRequest`](CountInEntityRequest.md)

#### Defined in

[src/base_pb.ts:677](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L677)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CountInEntityRequest`](CountInEntityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInEntityRequest`](CountInEntityRequest.md)

#### Defined in

[src/base_pb.ts:681](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/base_pb.ts#L681)
