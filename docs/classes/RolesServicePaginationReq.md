[tcubesa-sdk](../README.md) / [Exports](../modules.md) / RolesServicePaginationReq

# Class: RolesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.RolesServicePaginationReq

## Hierarchy

- `Message`<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\>

  ↳ **`RolesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](RolesServicePaginationReq.md#constructor)

### Properties

- [count](RolesServicePaginationReq.md#count)
- [isActive](RolesServicePaginationReq.md#isactive)
- [offset](RolesServicePaginationReq.md#offset)
- [sortKey](RolesServicePaginationReq.md#sortkey)
- [sortOrder](RolesServicePaginationReq.md#sortorder)
- [fields](RolesServicePaginationReq.md#fields)
- [runtime](RolesServicePaginationReq.md#runtime)
- [typeName](RolesServicePaginationReq.md#typename)

### Methods

- [clone](RolesServicePaginationReq.md#clone)
- [equals](RolesServicePaginationReq.md#equals)
- [fromBinary](RolesServicePaginationReq.md#frombinary)
- [fromJson](RolesServicePaginationReq.md#fromjson)
- [fromJsonString](RolesServicePaginationReq.md#fromjsonstring)
- [getType](RolesServicePaginationReq.md#gettype)
- [toBinary](RolesServicePaginationReq.md#tobinary)
- [toJSON](RolesServicePaginationReq.md#tojson)
- [toJson](RolesServicePaginationReq.md#tojson-1)
- [toJsonString](RolesServicePaginationReq.md#tojsonstring)
- [equals](RolesServicePaginationReq.md#equals-1)
- [fromBinary](RolesServicePaginationReq.md#frombinary-1)
- [fromJson](RolesServicePaginationReq.md#fromjson-1)
- [fromJsonString](RolesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |

#### Overrides

Message&lt;RolesServicePaginationReq\&gt;.constructor

#### Defined in

[src/roles_pb.ts:549](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L549)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/roles_pb.ts:526](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L526)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/roles_pb.ts:519](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L519)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/roles_pb.ts:533](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L533)

___

### sortKey

• **sortKey**: [`ROLE_SORT_KEY`](../enums/ROLE_SORT_KEY.md) = `ROLE_SORT_KEY.ROLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.ROLE_SORT_KEY sort_key = 5;

#### Defined in

[src/roles_pb.ts:547](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L547)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/roles_pb.ts:540](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L540)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:556](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L556)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:554](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L554)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.RolesServicePaginationReq"``

#### Defined in

[src/roles_pb.ts:555](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L555)

## Methods

### clone

▸ **clone**(): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServicePaginationReq`](RolesServicePaginationReq.md) \| `PlainMessage`<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

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

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`RolesServicePaginationReq`](RolesServicePaginationReq.md) \| `PlainMessage`<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`RolesServicePaginationReq`](RolesServicePaginationReq.md) \| `PlainMessage`<[`RolesServicePaginationReq`](RolesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:576](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L576)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Defined in

[src/roles_pb.ts:564](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L564)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Defined in

[src/roles_pb.ts:568](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L568)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationReq`](RolesServicePaginationReq.md)

#### Defined in

[src/roles_pb.ts:572](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/roles_pb.ts#L572)
