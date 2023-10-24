[scanswift-sdk](../README.md) / [Exports](../modules.md) / ZonePaginationResp

# Class: ZonePaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message scanswift.ZonePaginationResp

## Hierarchy

- `Message`<[`ZonePaginationResp`](ZonePaginationResp.md)\>

  ↳ **`ZonePaginationResp`**

## Table of contents

### Constructors

- [constructor](ZonePaginationResp.md#constructor)

### Properties

- [count](ZonePaginationResp.md#count)
- [payload](ZonePaginationResp.md#payload)
- [total](ZonePaginationResp.md#total)
- [fields](ZonePaginationResp.md#fields)
- [runtime](ZonePaginationResp.md#runtime)
- [typeName](ZonePaginationResp.md#typename)

### Methods

- [clone](ZonePaginationResp.md#clone)
- [equals](ZonePaginationResp.md#equals)
- [fromBinary](ZonePaginationResp.md#frombinary)
- [fromJson](ZonePaginationResp.md#fromjson)
- [fromJsonString](ZonePaginationResp.md#fromjsonstring)
- [getType](ZonePaginationResp.md#gettype)
- [toBinary](ZonePaginationResp.md#tobinary)
- [toJSON](ZonePaginationResp.md#tojson)
- [toJson](ZonePaginationResp.md#tojson-1)
- [toJsonString](ZonePaginationResp.md#tojsonstring)
- [equals](ZonePaginationResp.md#equals-1)
- [fromBinary](ZonePaginationResp.md#frombinary-1)
- [fromJson](ZonePaginationResp.md#fromjson-1)
- [fromJsonString](ZonePaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new ZonePaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ZonePaginationResp`](ZonePaginationResp.md)\> |

#### Overrides

Message&lt;ZonePaginationResp\&gt;.constructor

#### Defined in

[src/zones_pb.ts:518](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L518)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/zones_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L502)

___

### payload

• **payload**: [`Zone`](Zone.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated scanswift.Zone payload = 3;

#### Defined in

[src/zones_pb.ts:516](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L516)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/zones_pb.ts:509](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L509)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:525](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L525)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:523](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L523)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ZonePaginationResp"``

#### Defined in

[src/zones_pb.ts:524](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L524)

## Methods

### clone

▸ **clone**(): [`ZonePaginationResp`](ZonePaginationResp.md)

Create a deep copy.

#### Returns

[`ZonePaginationResp`](ZonePaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`ZonePaginationResp`](ZonePaginationResp.md) \| `PlainMessage`<[`ZonePaginationResp`](ZonePaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ZonePaginationResp`](ZonePaginationResp.md)

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

[`ZonePaginationResp`](ZonePaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ZonePaginationResp`](ZonePaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonePaginationResp`](ZonePaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ZonePaginationResp`](ZonePaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonePaginationResp`](ZonePaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ZonePaginationResp`](ZonePaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ZonePaginationResp`](ZonePaginationResp.md)\>

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
| `a` | `undefined` \| [`ZonePaginationResp`](ZonePaginationResp.md) \| `PlainMessage`<[`ZonePaginationResp`](ZonePaginationResp.md)\> |
| `b` | `undefined` \| [`ZonePaginationResp`](ZonePaginationResp.md) \| `PlainMessage`<[`ZonePaginationResp`](ZonePaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:543](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L543)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ZonePaginationResp`](ZonePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ZonePaginationResp`](ZonePaginationResp.md)

#### Defined in

[src/zones_pb.ts:531](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L531)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ZonePaginationResp`](ZonePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonePaginationResp`](ZonePaginationResp.md)

#### Defined in

[src/zones_pb.ts:535](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L535)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ZonePaginationResp`](ZonePaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonePaginationResp`](ZonePaginationResp.md)

#### Defined in

[src/zones_pb.ts:539](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/zones_pb.ts#L539)
