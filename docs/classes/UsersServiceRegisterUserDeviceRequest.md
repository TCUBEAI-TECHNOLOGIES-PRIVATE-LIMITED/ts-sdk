[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UsersServiceRegisterUserDeviceRequest

# Class: UsersServiceRegisterUserDeviceRequest

Describes the data structure to register a device against a user to send push notifications

**`Generated`**

from message tcube.UsersServiceRegisterUserDeviceRequest

## Hierarchy

- `Message`<[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)\>

  ↳ **`UsersServiceRegisterUserDeviceRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceRegisterUserDeviceRequest.md#constructor)

### Properties

- [deviceId](UsersServiceRegisterUserDeviceRequest.md#deviceid)
- [deviceType](UsersServiceRegisterUserDeviceRequest.md#devicetype)
- [userComment](UsersServiceRegisterUserDeviceRequest.md#usercomment)
- [uuid](UsersServiceRegisterUserDeviceRequest.md#uuid)
- [fields](UsersServiceRegisterUserDeviceRequest.md#fields)
- [runtime](UsersServiceRegisterUserDeviceRequest.md#runtime)
- [typeName](UsersServiceRegisterUserDeviceRequest.md#typename)

### Methods

- [clone](UsersServiceRegisterUserDeviceRequest.md#clone)
- [equals](UsersServiceRegisterUserDeviceRequest.md#equals)
- [fromBinary](UsersServiceRegisterUserDeviceRequest.md#frombinary)
- [fromJson](UsersServiceRegisterUserDeviceRequest.md#fromjson)
- [fromJsonString](UsersServiceRegisterUserDeviceRequest.md#fromjsonstring)
- [getType](UsersServiceRegisterUserDeviceRequest.md#gettype)
- [toBinary](UsersServiceRegisterUserDeviceRequest.md#tobinary)
- [toJSON](UsersServiceRegisterUserDeviceRequest.md#tojson)
- [toJson](UsersServiceRegisterUserDeviceRequest.md#tojson-1)
- [toJsonString](UsersServiceRegisterUserDeviceRequest.md#tojsonstring)
- [equals](UsersServiceRegisterUserDeviceRequest.md#equals-1)
- [fromBinary](UsersServiceRegisterUserDeviceRequest.md#frombinary-1)
- [fromJson](UsersServiceRegisterUserDeviceRequest.md#fromjson-1)
- [fromJsonString](UsersServiceRegisterUserDeviceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceRegisterUserDeviceRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)\> |

#### Overrides

Message&lt;UsersServiceRegisterUserDeviceRequest\&gt;.constructor

#### Defined in

[src/users_pb.ts:438](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L438)

## Properties

### deviceId

• **deviceId**: `string` = `""`

The ID of the device

**`Generated`**

from field: string device_id = 11;

#### Defined in

[src/users_pb.ts:436](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L436)

___

### deviceType

• **deviceType**: [`DEVICE_TYPE`](../enums/DEVICE_TYPE.md) = `DEVICE_TYPE.WEB_UNSPECIFIED`

The device type

**`Generated`**

from field: tcube.DEVICE_TYPE device_type = 10;

#### Defined in

[src/users_pb.ts:429](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L429)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/users_pb.ts:415](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L415)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the user that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/users_pb.ts:422](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L422)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:445](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L445)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:443](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L443)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UsersServiceRegisterUserDeviceRequest"``

#### Defined in

[src/users_pb.ts:444](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L444)

## Methods

### clone

▸ **clone**(): [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md) \| `PlainMessage`<[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

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

[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)\>

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
| `a` | `undefined` \| [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md) \| `PlainMessage`<[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md) \| `PlainMessage`<[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:464](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L464)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Defined in

[src/users_pb.ts:452](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L452)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Defined in

[src/users_pb.ts:456](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L456)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceRegisterUserDeviceRequest`](UsersServiceRegisterUserDeviceRequest.md)

#### Defined in

[src/users_pb.ts:460](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/users_pb.ts#L460)
