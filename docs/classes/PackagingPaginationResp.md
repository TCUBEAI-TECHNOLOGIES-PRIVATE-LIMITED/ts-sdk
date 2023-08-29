[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PackagingPaginationResp

# Class: PackagingPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.PackagingPaginationResp

## Hierarchy

- `Message`<[`PackagingPaginationResp`](PackagingPaginationResp.md)\>

  ↳ **`PackagingPaginationResp`**

## Table of contents

### Constructors

- [constructor](PackagingPaginationResp.md#constructor)

### Properties

- [count](PackagingPaginationResp.md#count)
- [payload](PackagingPaginationResp.md#payload)
- [total](PackagingPaginationResp.md#total)
- [fields](PackagingPaginationResp.md#fields)
- [runtime](PackagingPaginationResp.md#runtime)
- [typeName](PackagingPaginationResp.md#typename)

### Methods

- [clone](PackagingPaginationResp.md#clone)
- [equals](PackagingPaginationResp.md#equals)
- [fromBinary](PackagingPaginationResp.md#frombinary)
- [fromJson](PackagingPaginationResp.md#fromjson)
- [fromJsonString](PackagingPaginationResp.md#fromjsonstring)
- [getType](PackagingPaginationResp.md#gettype)
- [toBinary](PackagingPaginationResp.md#tobinary)
- [toJSON](PackagingPaginationResp.md#tojson)
- [toJson](PackagingPaginationResp.md#tojson-1)
- [toJsonString](PackagingPaginationResp.md#tojsonstring)
- [equals](PackagingPaginationResp.md#equals-1)
- [fromBinary](PackagingPaginationResp.md#frombinary-1)
- [fromJson](PackagingPaginationResp.md#fromjson-1)
- [fromJsonString](PackagingPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingPaginationResp`](PackagingPaginationResp.md)\> |

#### Overrides

Message&lt;PackagingPaginationResp\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:782](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L782)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/packagings_pb.ts:766](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L766)

___

### payload

• **payload**: [`Packaging`](Packaging.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.Packaging payload = 3;

#### Defined in

[src/packagings_pb.ts:780](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L780)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/packagings_pb.ts:773](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L773)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:789](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L789)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:787](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L787)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PackagingPaginationResp"``

#### Defined in

[src/packagings_pb.ts:788](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L788)

## Methods

### clone

▸ **clone**(): [`PackagingPaginationResp`](PackagingPaginationResp.md)

Create a deep copy.

#### Returns

[`PackagingPaginationResp`](PackagingPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingPaginationResp`](PackagingPaginationResp.md) \| `PlainMessage`<[`PackagingPaginationResp`](PackagingPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingPaginationResp`](PackagingPaginationResp.md)

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

[`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingPaginationResp`](PackagingPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingPaginationResp`](PackagingPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingPaginationResp`](PackagingPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingPaginationResp`](PackagingPaginationResp.md)\>

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
| `a` | `undefined` \| [`PackagingPaginationResp`](PackagingPaginationResp.md) \| `PlainMessage`<[`PackagingPaginationResp`](PackagingPaginationResp.md)\> |
| `b` | `undefined` \| [`PackagingPaginationResp`](PackagingPaginationResp.md) \| `PlainMessage`<[`PackagingPaginationResp`](PackagingPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:807](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L807)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Defined in

[src/packagings_pb.ts:795](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L795)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Defined in

[src/packagings_pb.ts:799](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L799)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingPaginationResp`](PackagingPaginationResp.md)

#### Defined in

[src/packagings_pb.ts:803](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L803)