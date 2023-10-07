[tcubesa-sdk](../README.md) / [Exports](../modules.md) / RolesServiceUpdateRequest

# Class: RolesServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a role

**`Generated`**

from message tcube.RolesServiceUpdateRequest

## Hierarchy

- `Message`<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

  ↳ **`RolesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](RolesServiceUpdateRequest.md#constructor)

### Properties

- [accessList](RolesServiceUpdateRequest.md#accesslist)
- [code](RolesServiceUpdateRequest.md#code)
- [description](RolesServiceUpdateRequest.md#description)
- [name](RolesServiceUpdateRequest.md#name)
- [userComment](RolesServiceUpdateRequest.md#usercomment)
- [uuid](RolesServiceUpdateRequest.md#uuid)
- [fields](RolesServiceUpdateRequest.md#fields)
- [runtime](RolesServiceUpdateRequest.md#runtime)
- [typeName](RolesServiceUpdateRequest.md#typename)

### Methods

- [clone](RolesServiceUpdateRequest.md#clone)
- [equals](RolesServiceUpdateRequest.md#equals)
- [fromBinary](RolesServiceUpdateRequest.md#frombinary)
- [fromJson](RolesServiceUpdateRequest.md#fromjson)
- [fromJsonString](RolesServiceUpdateRequest.md#fromjsonstring)
- [getType](RolesServiceUpdateRequest.md#gettype)
- [toBinary](RolesServiceUpdateRequest.md#tobinary)
- [toJSON](RolesServiceUpdateRequest.md#tojson)
- [toJson](RolesServiceUpdateRequest.md#tojson-1)
- [toJsonString](RolesServiceUpdateRequest.md#tojsonstring)
- [equals](RolesServiceUpdateRequest.md#equals-1)
- [fromBinary](RolesServiceUpdateRequest.md#frombinary-1)
- [fromJson](RolesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](RolesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;RolesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/roles_pb.ts:474](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L474)

## Properties

### accessList

• **accessList**: [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)[] = `[]`

The list of accessible menu UIDs

**`Generated`**

from field: repeated tcube.RolesServiceAccessCreateAndUpdateRequest access_list = 13;

#### Defined in

[src/roles_pb.ts:472](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L472)

___

### code

• **code**: `string` = `""`

Code of the role

**`Generated`**

from field: string code = 11;

#### Defined in

[src/roles_pb.ts:458](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L458)

___

### description

• **description**: `string` = `""`

Describe the role

**`Generated`**

from field: string description = 12;

#### Defined in

[src/roles_pb.ts:465](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L465)

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 10;

#### Defined in

[src/roles_pb.ts:451](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L451)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/roles_pb.ts:437](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L437)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/roles_pb.ts:444](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L444)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:481](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L481)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:479](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L479)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.RolesServiceUpdateRequest"``

#### Defined in

[src/roles_pb.ts:480](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L480)

## Methods

### clone

▸ **clone**(): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

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

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L502)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles_pb.ts:490](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L490)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles_pb.ts:494](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L494)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles_pb.ts:498](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/roles_pb.ts#L498)
