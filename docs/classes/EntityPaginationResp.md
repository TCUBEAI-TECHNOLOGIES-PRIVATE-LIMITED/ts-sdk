[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntityPaginationResp

# Class: EntityPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.EntityPaginationResp

## Hierarchy

- `Message`<[`EntityPaginationResp`](EntityPaginationResp.md)\>

  ↳ **`EntityPaginationResp`**

## Table of contents

### Constructors

- [constructor](EntityPaginationResp.md#constructor)

### Properties

- [count](EntityPaginationResp.md#count)
- [payload](EntityPaginationResp.md#payload)
- [total](EntityPaginationResp.md#total)
- [fields](EntityPaginationResp.md#fields)
- [runtime](EntityPaginationResp.md#runtime)
- [typeName](EntityPaginationResp.md#typename)

### Methods

- [clone](EntityPaginationResp.md#clone)
- [equals](EntityPaginationResp.md#equals)
- [fromBinary](EntityPaginationResp.md#frombinary)
- [fromJson](EntityPaginationResp.md#fromjson)
- [fromJsonString](EntityPaginationResp.md#fromjsonstring)
- [getType](EntityPaginationResp.md#gettype)
- [toBinary](EntityPaginationResp.md#tobinary)
- [toJSON](EntityPaginationResp.md#tojson)
- [toJson](EntityPaginationResp.md#tojson-1)
- [toJsonString](EntityPaginationResp.md#tojsonstring)
- [equals](EntityPaginationResp.md#equals-1)
- [fromBinary](EntityPaginationResp.md#frombinary-1)
- [fromJson](EntityPaginationResp.md#fromjson-1)
- [fromJsonString](EntityPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntityPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntityPaginationResp`](EntityPaginationResp.md)\> |

#### Overrides

Message&lt;EntityPaginationResp\&gt;.constructor

#### Defined in

[src/entities_pb.ts:625](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L625)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/entities_pb.ts:609](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L609)

___

### payload

• **payload**: [`Entity`](Entity.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.Entity payload = 3;

#### Defined in

[src/entities_pb.ts:623](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L623)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/entities_pb.ts:616](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L616)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:632](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L632)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:630](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L630)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntityPaginationResp"``

#### Defined in

[src/entities_pb.ts:631](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L631)

## Methods

### clone

▸ **clone**(): [`EntityPaginationResp`](EntityPaginationResp.md)

Create a deep copy.

#### Returns

[`EntityPaginationResp`](EntityPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`EntityPaginationResp`](EntityPaginationResp.md) \| `PlainMessage`<[`EntityPaginationResp`](EntityPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntityPaginationResp`](EntityPaginationResp.md)

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

[`EntityPaginationResp`](EntityPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntityPaginationResp`](EntityPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityPaginationResp`](EntityPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntityPaginationResp`](EntityPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityPaginationResp`](EntityPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntityPaginationResp`](EntityPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntityPaginationResp`](EntityPaginationResp.md)\>

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
| `a` | `undefined` \| [`EntityPaginationResp`](EntityPaginationResp.md) \| `PlainMessage`<[`EntityPaginationResp`](EntityPaginationResp.md)\> |
| `b` | `undefined` \| [`EntityPaginationResp`](EntityPaginationResp.md) \| `PlainMessage`<[`EntityPaginationResp`](EntityPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:650](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L650)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntityPaginationResp`](EntityPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntityPaginationResp`](EntityPaginationResp.md)

#### Defined in

[src/entities_pb.ts:638](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L638)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntityPaginationResp`](EntityPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityPaginationResp`](EntityPaginationResp.md)

#### Defined in

[src/entities_pb.ts:642](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L642)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntityPaginationResp`](EntityPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntityPaginationResp`](EntityPaginationResp.md)

#### Defined in

[src/entities_pb.ts:646](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L646)
