[scanswift-sdk](../README.md) / [Exports](../modules.md) / Role

# Class: Role

Describes the data structure of each role on the platform

**`Generated`**

from message scanswift.Role

## Hierarchy

- `Message`<[`Role`](Role.md)\>

  ↳ **`Role`**

## Table of contents

### Constructors

- [constructor](Role.md#constructor)

### Properties

- [accessList](Role.md#accesslist)
- [code](Role.md#code)
- [description](Role.md#description)
- [metadata](Role.md#metadata)
- [name](Role.md#name)
- [fields](Role.md#fields)
- [runtime](Role.md#runtime)
- [typeName](Role.md#typename)

### Methods

- [clone](Role.md#clone)
- [equals](Role.md#equals)
- [fromBinary](Role.md#frombinary)
- [fromJson](Role.md#fromjson)
- [fromJsonString](Role.md#fromjsonstring)
- [getType](Role.md#gettype)
- [toBinary](Role.md#tobinary)
- [toJSON](Role.md#tojson)
- [toJson](Role.md#tojson-1)
- [toJsonString](Role.md#tojsonstring)
- [equals](Role.md#equals-1)
- [fromBinary](Role.md#frombinary-1)
- [fromJson](Role.md#fromjson-1)
- [fromJsonString](Role.md#fromjsonstring-1)

## Constructors

### constructor

• **new Role**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Role`](Role.md)\> |

#### Overrides

Message&lt;Role\&gt;.constructor

#### Defined in

[src/roles_pb.ts:169](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L169)

## Properties

### accessList

• **accessList**: [`RoleAccess`](RoleAccess.md)[] = `[]`

List of role accesss accesses

**`Generated`**

from field: repeated scanswift.RoleAccess access_list = 13;

#### Defined in

[src/roles_pb.ts:167](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L167)

___

### code

• **code**: `string` = `""`

Code of the role

**`Generated`**

from field: string code = 11;

#### Defined in

[src/roles_pb.ts:153](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L153)

___

### description

• **description**: `string` = `""`

Describe the role

**`Generated`**

from field: string description = 12;

#### Defined in

[src/roles_pb.ts:160](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L160)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/roles_pb.ts:139](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L139)

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 10;

#### Defined in

[src/roles_pb.ts:146](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L146)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:176](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L176)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:174](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L174)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.Role"``

#### Defined in

[src/roles_pb.ts:175](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L175)

## Methods

### clone

▸ **clone**(): [`Role`](Role.md)

Create a deep copy.

#### Returns

[`Role`](Role.md)

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
| `other` | `undefined` \| ``null`` \| [`Role`](Role.md) \| `PlainMessage`<[`Role`](Role.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Role`](Role.md)

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

[`Role`](Role.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Role`](Role.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Role`](Role.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Role`](Role.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Role`](Role.md)\>

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
| `a` | `undefined` \| [`Role`](Role.md) \| `PlainMessage`<[`Role`](Role.md)\> |
| `b` | `undefined` \| [`Role`](Role.md) \| `PlainMessage`<[`Role`](Role.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:196](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L196)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles_pb.ts:184](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L184)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles_pb.ts:188](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L188)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles_pb.ts:192](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/roles_pb.ts#L192)
