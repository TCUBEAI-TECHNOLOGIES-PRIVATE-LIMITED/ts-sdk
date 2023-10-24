[scanswift-sdk](../README.md) / [Exports](../modules.md) / User

# Class: User

Describes the data structure of each user on the platform

**`Generated`**

from message scanswift.User

## Hierarchy

- `Message`<[`User`](User.md)\>

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Properties

- [address](User.md#address)
- [email](User.md#email)
- [firstName](User.md#firstname)
- [lastName](User.md#lastname)
- [metadata](User.md#metadata)
- [phone](User.md#phone)
- [username](User.md#username)
- [fields](User.md#fields)
- [runtime](User.md#runtime)
- [typeName](User.md#typename)

### Methods

- [clone](User.md#clone)
- [equals](User.md#equals)
- [fromBinary](User.md#frombinary)
- [fromJson](User.md#fromjson)
- [fromJsonString](User.md#fromjsonstring)
- [getType](User.md#gettype)
- [toBinary](User.md#tobinary)
- [toJSON](User.md#tojson)
- [toJson](User.md#tojson-1)
- [toJsonString](User.md#tojsonstring)
- [equals](User.md#equals-1)
- [fromBinary](User.md#frombinary-1)
- [fromJson](User.md#fromjson-1)
- [fromJsonString](User.md#fromjsonstring-1)

## Constructors

### constructor

• **new User**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`User`](User.md)\> |

#### Overrides

Message&lt;User\&gt;.constructor

#### Defined in

[src/users_pb.ts:525](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L525)

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 15;

#### Defined in

[src/users_pb.ts:523](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L523)

___

### email

• **email**: `string` = `""`

The email address of the user

**`Generated`**

from field: string email = 13;

#### Defined in

[src/users_pb.ts:509](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L509)

___

### firstName

• **firstName**: `string` = `""`

The first name of the user

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/users_pb.ts:488](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L488)

___

### lastName

• **lastName**: `string` = `""`

The last name of the user

**`Generated`**

from field: string last_name = 11;

#### Defined in

[src/users_pb.ts:495](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L495)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/users_pb.ts:481](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L481)

___

### phone

• **phone**: `string` = `""`

The phone number of the user

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/users_pb.ts:516](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L516)

___

### username

• **username**: `string` = `""`

Username of the user

**`Generated`**

from field: string username = 12;

#### Defined in

[src/users_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L502)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:532](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L532)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:530](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L530)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.User"``

#### Defined in

[src/users_pb.ts:531](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L531)

## Methods

### clone

▸ **clone**(): [`User`](User.md)

Create a deep copy.

#### Returns

[`User`](User.md)

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
| `other` | `undefined` \| ``null`` \| [`User`](User.md) \| `PlainMessage`<[`User`](User.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`User`](User.md)

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

[`User`](User.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`User`](User.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`User`](User.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`User`](User.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`User`](User.md)\>

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
| `a` | `undefined` \| [`User`](User.md) \| `PlainMessage`<[`User`](User.md)\> |
| `b` | `undefined` \| [`User`](User.md) \| `PlainMessage`<[`User`](User.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:554](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L554)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users_pb.ts:542](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L542)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users_pb.ts:546](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L546)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users_pb.ts:550](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L550)
