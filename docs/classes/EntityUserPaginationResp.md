[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntityUserPaginationResp

# Class: EntityUserPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.EntityUserPaginationResp

## Hierarchy

- `Message`<[`EntityUserPaginationResp`](EntityUserPaginationResp.md)\>

  ↳ **`EntityUserPaginationResp`**

## Table of contents

### Constructors

- [constructor](EntityUserPaginationResp.md#constructor)

### Properties

- [count](EntityUserPaginationResp.md#count)
- [payload](EntityUserPaginationResp.md#payload)
- [total](EntityUserPaginationResp.md#total)
- [fields](EntityUserPaginationResp.md#fields)
- [runtime](EntityUserPaginationResp.md#runtime)
- [typeName](EntityUserPaginationResp.md#typename)

### Methods

- [clone](EntityUserPaginationResp.md#clone)
- [equals](EntityUserPaginationResp.md#equals)
- [fromBinary](EntityUserPaginationResp.md#frombinary)
- [fromJson](EntityUserPaginationResp.md#fromjson)
- [fromJsonString](EntityUserPaginationResp.md#fromjsonstring)
- [getType](EntityUserPaginationResp.md#gettype)
- [toBinary](EntityUserPaginationResp.md#tobinary)
- [toJSON](EntityUserPaginationResp.md#tojson)
- [toJson](EntityUserPaginationResp.md#tojson-1)
- [toJsonString](EntityUserPaginationResp.md#tojsonstring)
- [equals](EntityUserPaginationResp.md#equals-1)
- [fromBinary](EntityUserPaginationResp.md#frombinary-1)
- [fromJson](EntityUserPaginationResp.md#fromjson-1)
- [fromJsonString](EntityUserPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntityUserPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntityUserPaginationResp`](EntityUserPaginationResp.md)\> |

#### Overrides

Message&lt;EntityUserPaginationResp\&gt;.constructor

#### Defined in

[src/entities_users_pb.ts:387](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L387)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/entities_users_pb.ts:371](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L371)

___

### payload

• **payload**: [`EntityUser`](EntityUser.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.EntityUser payload = 3;

#### Defined in

[src/entities_users_pb.ts:385](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L385)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/entities_users_pb.ts:378](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L378)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_users_pb.ts:394](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L394)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_users_pb.ts:392](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L392)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntityUserPaginationResp"``

#### Defined in

[src/entities_users_pb.ts:393](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L393)

## Methods

### clone

▸ **clone**(): [`EntityUserPaginationResp`](EntityUserPaginationResp.md)

Create a deep copy.

#### Returns

[`EntityUserPaginationResp`](EntityUserPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`EntityUserPaginationResp`](EntityUserPaginationResp.md) \| `PlainMessage`<[`EntityUserPaginationResp`](EntityUserPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntityUserPaginationResp`](EntityUserPaginationResp.md)

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

[`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntityUserPaginationResp`](EntityUserPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntityUserPaginationResp`](EntityUserPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntityUserPaginationResp`](EntityUserPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntityUserPaginationResp`](EntityUserPaginationResp.md)\>

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
| `a` | `undefined` \| [`EntityUserPaginationResp`](EntityUserPaginationResp.md) \| `PlainMessage`<[`EntityUserPaginationResp`](EntityUserPaginationResp.md)\> |
| `b` | `undefined` \| [`EntityUserPaginationResp`](EntityUserPaginationResp.md) \| `PlainMessage`<[`EntityUserPaginationResp`](EntityUserPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_users_pb.ts:412](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L412)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Defined in

[src/entities_users_pb.ts:400](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L400)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Defined in

[src/entities_users_pb.ts:404](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L404)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityUserPaginationResp`](EntityUserPaginationResp.md)

#### Defined in

[src/entities_users_pb.ts:408](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_users_pb.ts#L408)
