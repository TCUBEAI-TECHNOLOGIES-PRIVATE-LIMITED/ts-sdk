[tcubesa-sdk](../README.md) / [Exports](../modules.md) / RolePaginationResp

# Class: RolePaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.RolePaginationResp

## Hierarchy

- `Message`<[`RolePaginationResp`](RolePaginationResp.md)\>

  ↳ **`RolePaginationResp`**

## Table of contents

### Constructors

- [constructor](RolePaginationResp.md#constructor)

### Properties

- [count](RolePaginationResp.md#count)
- [payload](RolePaginationResp.md#payload)
- [total](RolePaginationResp.md#total)
- [fields](RolePaginationResp.md#fields)
- [runtime](RolePaginationResp.md#runtime)
- [typeName](RolePaginationResp.md#typename)

### Methods

- [clone](RolePaginationResp.md#clone)
- [equals](RolePaginationResp.md#equals)
- [fromBinary](RolePaginationResp.md#frombinary)
- [fromJson](RolePaginationResp.md#fromjson)
- [fromJsonString](RolePaginationResp.md#fromjsonstring)
- [getType](RolePaginationResp.md#gettype)
- [toBinary](RolePaginationResp.md#tobinary)
- [toJSON](RolePaginationResp.md#tojson)
- [toJson](RolePaginationResp.md#tojson-1)
- [toJsonString](RolePaginationResp.md#tojsonstring)
- [equals](RolePaginationResp.md#equals-1)
- [fromBinary](RolePaginationResp.md#frombinary-1)
- [fromJson](RolePaginationResp.md#fromjson-1)
- [fromJsonString](RolePaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolePaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolePaginationResp`](RolePaginationResp.md)\> |

#### Overrides

Message&lt;RolePaginationResp\&gt;.constructor

#### Defined in

[src/roles_pb.ts:271](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L271)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/roles_pb.ts:255](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L255)

___

### payload

• **payload**: [`Role`](Role.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.Role payload = 3;

#### Defined in

[src/roles_pb.ts:269](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L269)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/roles_pb.ts:262](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L262)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:278](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L278)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:276](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L276)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.RolePaginationResp"``

#### Defined in

[src/roles_pb.ts:277](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L277)

## Methods

### clone

▸ **clone**(): [`RolePaginationResp`](RolePaginationResp.md)

Create a deep copy.

#### Returns

[`RolePaginationResp`](RolePaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`RolePaginationResp`](RolePaginationResp.md) \| `PlainMessage`<[`RolePaginationResp`](RolePaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolePaginationResp`](RolePaginationResp.md)

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

[`RolePaginationResp`](RolePaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolePaginationResp`](RolePaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolePaginationResp`](RolePaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolePaginationResp`](RolePaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolePaginationResp`](RolePaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolePaginationResp`](RolePaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolePaginationResp`](RolePaginationResp.md)\>

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
| `a` | `undefined` \| [`RolePaginationResp`](RolePaginationResp.md) \| `PlainMessage`<[`RolePaginationResp`](RolePaginationResp.md)\> |
| `b` | `undefined` \| [`RolePaginationResp`](RolePaginationResp.md) \| `PlainMessage`<[`RolePaginationResp`](RolePaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:296](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L296)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolePaginationResp`](RolePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolePaginationResp`](RolePaginationResp.md)

#### Defined in

[src/roles_pb.ts:284](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L284)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolePaginationResp`](RolePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolePaginationResp`](RolePaginationResp.md)

#### Defined in

[src/roles_pb.ts:288](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L288)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolePaginationResp`](RolePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolePaginationResp`](RolePaginationResp.md)

#### Defined in

[src/roles_pb.ts:292](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/roles_pb.ts#L292)
