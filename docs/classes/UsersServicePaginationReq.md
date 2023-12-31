[scanswift-sdk](../README.md) / [Exports](../modules.md) / UsersServicePaginationReq

# Class: UsersServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message scanswift.UsersServicePaginationReq

## Hierarchy

- `Message`<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\>

  ↳ **`UsersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](UsersServicePaginationReq.md#constructor)

### Properties

- [count](UsersServicePaginationReq.md#count)
- [isActive](UsersServicePaginationReq.md#isactive)
- [offset](UsersServicePaginationReq.md#offset)
- [sortKey](UsersServicePaginationReq.md#sortkey)
- [sortOrder](UsersServicePaginationReq.md#sortorder)
- [fields](UsersServicePaginationReq.md#fields)
- [runtime](UsersServicePaginationReq.md#runtime)
- [typeName](UsersServicePaginationReq.md#typename)

### Methods

- [clone](UsersServicePaginationReq.md#clone)
- [equals](UsersServicePaginationReq.md#equals)
- [fromBinary](UsersServicePaginationReq.md#frombinary)
- [fromJson](UsersServicePaginationReq.md#fromjson)
- [fromJsonString](UsersServicePaginationReq.md#fromjsonstring)
- [getType](UsersServicePaginationReq.md#gettype)
- [toBinary](UsersServicePaginationReq.md#tobinary)
- [toJSON](UsersServicePaginationReq.md#tojson)
- [toJson](UsersServicePaginationReq.md#tojson-1)
- [toJsonString](UsersServicePaginationReq.md#tojsonstring)
- [equals](UsersServicePaginationReq.md#equals-1)
- [fromBinary](UsersServicePaginationReq.md#frombinary-1)
- [fromJson](UsersServicePaginationReq.md#fromjson-1)
- [fromJsonString](UsersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |

#### Overrides

Message&lt;UsersServicePaginationReq\&gt;.constructor

#### Defined in

[src/users_pb.ts:643](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L643)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/users_pb.ts:620](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L620)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/users_pb.ts:613](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L613)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/users_pb.ts:627](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L627)

___

### sortKey

• **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md) = `USER_SORT_KEY.USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users_pb.ts:641](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L641)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/users_pb.ts:634](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L634)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:650](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L650)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:648](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L648)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.UsersServicePaginationReq"``

#### Defined in

[src/users_pb.ts:649](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L649)

## Methods

### clone

▸ **clone**(): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServicePaginationReq`](UsersServicePaginationReq.md) \| `PlainMessage`<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

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

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`UsersServicePaginationReq`](UsersServicePaginationReq.md) \| `PlainMessage`<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`UsersServicePaginationReq`](UsersServicePaginationReq.md) \| `PlainMessage`<[`UsersServicePaginationReq`](UsersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:670](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L670)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Defined in

[src/users_pb.ts:658](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L658)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Defined in

[src/users_pb.ts:662](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L662)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServicePaginationReq`](UsersServicePaginationReq.md)

#### Defined in

[src/users_pb.ts:666](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/users_pb.ts#L666)
