[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UnitPaginationResp

# Class: UnitPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message tcube.UnitPaginationResp

## Hierarchy

- `Message`<[`UnitPaginationResp`](UnitPaginationResp.md)\>

  ↳ **`UnitPaginationResp`**

## Table of contents

### Constructors

- [constructor](UnitPaginationResp.md#constructor)

### Properties

- [count](UnitPaginationResp.md#count)
- [payload](UnitPaginationResp.md#payload)
- [total](UnitPaginationResp.md#total)
- [fields](UnitPaginationResp.md#fields)
- [runtime](UnitPaginationResp.md#runtime)
- [typeName](UnitPaginationResp.md#typename)

### Methods

- [clone](UnitPaginationResp.md#clone)
- [equals](UnitPaginationResp.md#equals)
- [fromBinary](UnitPaginationResp.md#frombinary)
- [fromJson](UnitPaginationResp.md#fromjson)
- [fromJsonString](UnitPaginationResp.md#fromjsonstring)
- [getType](UnitPaginationResp.md#gettype)
- [toBinary](UnitPaginationResp.md#tobinary)
- [toJSON](UnitPaginationResp.md#tojson)
- [toJson](UnitPaginationResp.md#tojson-1)
- [toJsonString](UnitPaginationResp.md#tojsonstring)
- [equals](UnitPaginationResp.md#equals-1)
- [fromBinary](UnitPaginationResp.md#frombinary-1)
- [fromJson](UnitPaginationResp.md#fromjson-1)
- [fromJsonString](UnitPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UnitPaginationResp`](UnitPaginationResp.md)\> |

#### Overrides

Message&lt;UnitPaginationResp\&gt;.constructor

#### Defined in

[src/units_pb.ts:411](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L411)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/units_pb.ts:395](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L395)

___

### payload

• **payload**: [`Unit`](Unit.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated tcube.Unit payload = 3;

#### Defined in

[src/units_pb.ts:409](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L409)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/units_pb.ts:402](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L402)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_pb.ts:418](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L418)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_pb.ts:416](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L416)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UnitPaginationResp"``

#### Defined in

[src/units_pb.ts:417](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L417)

## Methods

### clone

▸ **clone**(): [`UnitPaginationResp`](UnitPaginationResp.md)

Create a deep copy.

#### Returns

[`UnitPaginationResp`](UnitPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitPaginationResp`](UnitPaginationResp.md) \| `PlainMessage`<[`UnitPaginationResp`](UnitPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitPaginationResp`](UnitPaginationResp.md)

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

[`UnitPaginationResp`](UnitPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitPaginationResp`](UnitPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitPaginationResp`](UnitPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitPaginationResp`](UnitPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitPaginationResp`](UnitPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UnitPaginationResp`](UnitPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UnitPaginationResp`](UnitPaginationResp.md)\>

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
| `a` | `undefined` \| [`UnitPaginationResp`](UnitPaginationResp.md) \| `PlainMessage`<[`UnitPaginationResp`](UnitPaginationResp.md)\> |
| `b` | `undefined` \| [`UnitPaginationResp`](UnitPaginationResp.md) \| `PlainMessage`<[`UnitPaginationResp`](UnitPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_pb.ts:436](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L436)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UnitPaginationResp`](UnitPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UnitPaginationResp`](UnitPaginationResp.md)

#### Defined in

[src/units_pb.ts:424](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L424)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UnitPaginationResp`](UnitPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitPaginationResp`](UnitPaginationResp.md)

#### Defined in

[src/units_pb.ts:428](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L428)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UnitPaginationResp`](UnitPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UnitPaginationResp`](UnitPaginationResp.md)

#### Defined in

[src/units_pb.ts:432](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/units_pb.ts#L432)
