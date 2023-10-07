[tcubesa-sdk](../README.md) / [Exports](../modules.md) / Metadata

# Class: Metadata

Describes the metadata of each resource

**`Generated`**

from message tcube.Metadata

## Hierarchy

- `Message`<[`Metadata`](Metadata.md)\>

  ↳ **`Metadata`**

## Table of contents

### Constructors

- [constructor](Metadata.md#constructor)

### Properties

- [addedByUserUuid](Metadata.md#addedbyuseruuid)
- [createdAt](Metadata.md#createdat)
- [id](Metadata.md#id)
- [isActive](Metadata.md#isactive)
- [modifiedAt](Metadata.md#modifiedat)
- [uuid](Metadata.md#uuid)
- [fields](Metadata.md#fields)
- [runtime](Metadata.md#runtime)
- [typeName](Metadata.md#typename)

### Methods

- [clone](Metadata.md#clone)
- [equals](Metadata.md#equals)
- [fromBinary](Metadata.md#frombinary)
- [fromJson](Metadata.md#fromjson)
- [fromJsonString](Metadata.md#fromjsonstring)
- [getType](Metadata.md#gettype)
- [toBinary](Metadata.md#tobinary)
- [toJSON](Metadata.md#tojson)
- [toJson](Metadata.md#tojson-1)
- [toJsonString](Metadata.md#tojsonstring)
- [equals](Metadata.md#equals-1)
- [fromBinary](Metadata.md#frombinary-1)
- [fromJson](Metadata.md#fromjson-1)
- [fromJsonString](Metadata.md#fromjsonstring-1)

## Constructors

### constructor

• **new Metadata**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Metadata`](Metadata.md)\> |

#### Overrides

Message&lt;Metadata\&gt;.constructor

#### Defined in

[src/base_pb.ts:923](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L923)

## Properties

### addedByUserUuid

• **addedByUserUuid**: `string` = `""`

Stores the UUID of the user who added this resource

**`Generated`**

from field: string added_by_user_uuid = 6;

#### Defined in

[src/base_pb.ts:900](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L900)

___

### createdAt

• **createdAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the resource was created

**`Generated`**

from field: int64 created_at = 8;

#### Defined in

[src/base_pb.ts:914](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L914)

___

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/base_pb.ts:886](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L886)

___

### isActive

• **isActive**: `boolean` = `false`

Represents if the resource is active

**`Generated`**

from field: bool is_active = 7;

#### Defined in

[src/base_pb.ts:907](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L907)

___

### modifiedAt

• **modifiedAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the resource was last modified

**`Generated`**

from field: int64 modified_at = 9;

#### Defined in

[src/base_pb.ts:921](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L921)

___

### uuid

• **uuid**: `string` = `""`

UUID of the resource

**`Generated`**

from field: string uuid = 5;

#### Defined in

[src/base_pb.ts:893](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L893)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:930](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L930)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:928](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L928)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.Metadata"``

#### Defined in

[src/base_pb.ts:929](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L929)

## Methods

### clone

▸ **clone**(): [`Metadata`](Metadata.md)

Create a deep copy.

#### Returns

[`Metadata`](Metadata.md)

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
| `other` | `undefined` \| ``null`` \| [`Metadata`](Metadata.md) \| `PlainMessage`<[`Metadata`](Metadata.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Metadata`](Metadata.md)

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

[`Metadata`](Metadata.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Metadata`](Metadata.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Metadata`](Metadata.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Metadata`](Metadata.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Metadata`](Metadata.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Metadata`](Metadata.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Metadata`](Metadata.md)\>

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
| `a` | `undefined` \| [`Metadata`](Metadata.md) \| `PlainMessage`<[`Metadata`](Metadata.md)\> |
| `b` | `undefined` \| [`Metadata`](Metadata.md) \| `PlainMessage`<[`Metadata`](Metadata.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:951](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L951)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Metadata`](Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Metadata`](Metadata.md)

#### Defined in

[src/base_pb.ts:939](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L939)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Metadata`](Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Metadata`](Metadata.md)

#### Defined in

[src/base_pb.ts:943](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L943)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Metadata`](Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Metadata`](Metadata.md)

#### Defined in

[src/base_pb.ts:947](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L947)
