[tcubesa-sdk](../README.md) / [Exports](../modules.md) / RolesServiceCreateRequest

# Class: RolesServiceCreateRequest

Describes the necessary data structure during creation of a role

**`Generated`**

from message tcube.RolesServiceCreateRequest

## Hierarchy

- `Message`<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

  ↳ **`RolesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](RolesServiceCreateRequest.md#constructor)

### Properties

- [accessList](RolesServiceCreateRequest.md#accesslist)
- [code](RolesServiceCreateRequest.md#code)
- [description](RolesServiceCreateRequest.md#description)
- [name](RolesServiceCreateRequest.md#name)
- [userComment](RolesServiceCreateRequest.md#usercomment)
- [fields](RolesServiceCreateRequest.md#fields)
- [runtime](RolesServiceCreateRequest.md#runtime)
- [typeName](RolesServiceCreateRequest.md#typename)

### Methods

- [clone](RolesServiceCreateRequest.md#clone)
- [equals](RolesServiceCreateRequest.md#equals)
- [fromBinary](RolesServiceCreateRequest.md#frombinary)
- [fromJson](RolesServiceCreateRequest.md#fromjson)
- [fromJsonString](RolesServiceCreateRequest.md#fromjsonstring)
- [getType](RolesServiceCreateRequest.md#gettype)
- [toBinary](RolesServiceCreateRequest.md#tobinary)
- [toJSON](RolesServiceCreateRequest.md#tojson)
- [toJson](RolesServiceCreateRequest.md#tojson-1)
- [toJsonString](RolesServiceCreateRequest.md#tojsonstring)
- [equals](RolesServiceCreateRequest.md#equals-1)
- [fromBinary](RolesServiceCreateRequest.md#frombinary-1)
- [fromJson](RolesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](RolesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;RolesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/roles_pb.ts:393](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L393)

## Properties

### accessList

• **accessList**: [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)[] = `[]`

The list of accessible menu UIDs

**`Generated`**

from field: repeated tcube.RolesServiceAccessCreateAndUpdateRequest access_list = 13;

#### Defined in

[src/roles_pb.ts:391](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L391)

___

### code

• **code**: `string` = `""`

Code of the role

**`Generated`**

from field: string code = 11;

#### Defined in

[src/roles_pb.ts:377](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L377)

___

### description

• **description**: `string` = `""`

Describe the role

**`Generated`**

from field: string description = 12;

#### Defined in

[src/roles_pb.ts:384](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L384)

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 10;

#### Defined in

[src/roles_pb.ts:370](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L370)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/roles_pb.ts:363](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L363)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:400](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L400)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:398](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L398)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.RolesServiceCreateRequest"``

#### Defined in

[src/roles_pb.ts:399](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L399)

## Methods

### clone

▸ **clone**(): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

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

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:420](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L420)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

[src/roles_pb.ts:408](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L408)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

[src/roles_pb.ts:412](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L412)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

[src/roles_pb.ts:416](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L416)
