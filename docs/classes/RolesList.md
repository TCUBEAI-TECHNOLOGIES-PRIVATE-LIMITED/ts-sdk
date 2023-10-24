[scanswift-sdk](../README.md) / [Exports](../modules.md) / RolesList

# Class: RolesList

Describes the data structure that stores a list of roles

**`Generated`**

from message scanswift.RolesList

## Hierarchy

- `Message`<[`RolesList`](RolesList.md)\>

  ↳ **`RolesList`**

## Table of contents

### Constructors

- [constructor](RolesList.md#constructor)

### Properties

- [list](RolesList.md#list)
- [fields](RolesList.md#fields)
- [runtime](RolesList.md#runtime)
- [typeName](RolesList.md#typename)

### Methods

- [clone](RolesList.md#clone)
- [equals](RolesList.md#equals)
- [fromBinary](RolesList.md#frombinary)
- [fromJson](RolesList.md#fromjson)
- [fromJsonString](RolesList.md#fromjsonstring)
- [getType](RolesList.md#gettype)
- [toBinary](RolesList.md#tobinary)
- [toJSON](RolesList.md#tojson)
- [toJson](RolesList.md#tojson-1)
- [toJsonString](RolesList.md#tojsonstring)
- [equals](RolesList.md#equals-1)
- [fromBinary](RolesList.md#frombinary-1)
- [fromJson](RolesList.md#fromjson-1)
- [fromJsonString](RolesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesList`](RolesList.md)\> |

#### Overrides

Message&lt;RolesList\&gt;.constructor

#### Defined in

[src/roles_pb.ts:215](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L215)

## Properties

### list

• **list**: [`Role`](Role.md)[] = `[]`

List of roles

**`Generated`**

from field: repeated scanswift.Role list = 1;

#### Defined in

[src/roles_pb.ts:213](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L213)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:222](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L222)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:220](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L220)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.RolesList"``

#### Defined in

[src/roles_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L221)

## Methods

### clone

▸ **clone**(): [`RolesList`](RolesList.md)

Create a deep copy.

#### Returns

[`RolesList`](RolesList.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesList`](RolesList.md) \| `PlainMessage`<[`RolesList`](RolesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesList`](RolesList.md)

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

[`RolesList`](RolesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesList`](RolesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesList`](RolesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesList`](RolesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesList`](RolesList.md)\>

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
| `a` | `undefined` \| [`RolesList`](RolesList.md) \| `PlainMessage`<[`RolesList`](RolesList.md)\> |
| `b` | `undefined` \| [`RolesList`](RolesList.md) \| `PlainMessage`<[`RolesList`](RolesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:238](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L238)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesList`](RolesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Defined in

[src/roles_pb.ts:226](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L226)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesList`](RolesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Defined in

[src/roles_pb.ts:230](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L230)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesList`](RolesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesList`](RolesList.md)

#### Defined in

[src/roles_pb.ts:234](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L234)
