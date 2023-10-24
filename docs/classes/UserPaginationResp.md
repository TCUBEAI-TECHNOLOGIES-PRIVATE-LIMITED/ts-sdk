[scanswift-sdk](../README.md) / [Exports](../modules.md) / UserPaginationResp

# Class: UserPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message scanswift.UserPaginationResp

## Hierarchy

- `Message`<[`UserPaginationResp`](UserPaginationResp.md)\>

  ↳ **`UserPaginationResp`**

## Table of contents

### Constructors

- [constructor](UserPaginationResp.md#constructor)

### Properties

- [count](UserPaginationResp.md#count)
- [payload](UserPaginationResp.md#payload)
- [total](UserPaginationResp.md#total)
- [fields](UserPaginationResp.md#fields)
- [runtime](UserPaginationResp.md#runtime)
- [typeName](UserPaginationResp.md#typename)

### Methods

- [clone](UserPaginationResp.md#clone)
- [equals](UserPaginationResp.md#equals)
- [fromBinary](UserPaginationResp.md#frombinary)
- [fromJson](UserPaginationResp.md#fromjson)
- [fromJsonString](UserPaginationResp.md#fromjsonstring)
- [getType](UserPaginationResp.md#gettype)
- [toBinary](UserPaginationResp.md#tobinary)
- [toJSON](UserPaginationResp.md#tojson)
- [toJson](UserPaginationResp.md#tojson-1)
- [toJsonString](UserPaginationResp.md#tojsonstring)
- [equals](UserPaginationResp.md#equals-1)
- [fromBinary](UserPaginationResp.md#frombinary-1)
- [fromJson](UserPaginationResp.md#fromjson-1)
- [fromJsonString](UserPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new UserPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UserPaginationResp`](UserPaginationResp.md)\> |

#### Overrides

Message&lt;UserPaginationResp\&gt;.constructor

#### Defined in

[src/users_pb.ts:703](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L703)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/users_pb.ts:687](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L687)

___

### payload

• **payload**: [`User`](User.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated scanswift.User payload = 3;

#### Defined in

[src/users_pb.ts:701](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L701)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/users_pb.ts:694](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L694)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:710](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L710)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:708](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L708)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.UserPaginationResp"``

#### Defined in

[src/users_pb.ts:709](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L709)

## Methods

### clone

▸ **clone**(): [`UserPaginationResp`](UserPaginationResp.md)

Create a deep copy.

#### Returns

[`UserPaginationResp`](UserPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`UserPaginationResp`](UserPaginationResp.md) \| `PlainMessage`<[`UserPaginationResp`](UserPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UserPaginationResp`](UserPaginationResp.md)

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

[`UserPaginationResp`](UserPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UserPaginationResp`](UserPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPaginationResp`](UserPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UserPaginationResp`](UserPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPaginationResp`](UserPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UserPaginationResp`](UserPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UserPaginationResp`](UserPaginationResp.md)\>

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
| `a` | `undefined` \| [`UserPaginationResp`](UserPaginationResp.md) \| `PlainMessage`<[`UserPaginationResp`](UserPaginationResp.md)\> |
| `b` | `undefined` \| [`UserPaginationResp`](UserPaginationResp.md) \| `PlainMessage`<[`UserPaginationResp`](UserPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:728](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L728)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UserPaginationResp`](UserPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UserPaginationResp`](UserPaginationResp.md)

#### Defined in

[src/users_pb.ts:716](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L716)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UserPaginationResp`](UserPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPaginationResp`](UserPaginationResp.md)

#### Defined in

[src/users_pb.ts:720](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L720)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UserPaginationResp`](UserPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UserPaginationResp`](UserPaginationResp.md)

#### Defined in

[src/users_pb.ts:724](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L724)
