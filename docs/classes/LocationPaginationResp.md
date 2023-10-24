[scanswift-sdk](../README.md) / [Exports](../modules.md) / LocationPaginationResp

# Class: LocationPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message scanswift.LocationPaginationResp

## Hierarchy

- `Message`<[`LocationPaginationResp`](LocationPaginationResp.md)\>

  ↳ **`LocationPaginationResp`**

## Table of contents

### Constructors

- [constructor](LocationPaginationResp.md#constructor)

### Properties

- [count](LocationPaginationResp.md#count)
- [payload](LocationPaginationResp.md#payload)
- [total](LocationPaginationResp.md#total)
- [fields](LocationPaginationResp.md#fields)
- [runtime](LocationPaginationResp.md#runtime)
- [typeName](LocationPaginationResp.md#typename)

### Methods

- [clone](LocationPaginationResp.md#clone)
- [equals](LocationPaginationResp.md#equals)
- [fromBinary](LocationPaginationResp.md#frombinary)
- [fromJson](LocationPaginationResp.md#fromjson)
- [fromJsonString](LocationPaginationResp.md#fromjsonstring)
- [getType](LocationPaginationResp.md#gettype)
- [toBinary](LocationPaginationResp.md#tobinary)
- [toJSON](LocationPaginationResp.md#tojson)
- [toJson](LocationPaginationResp.md#tojson-1)
- [toJsonString](LocationPaginationResp.md#tojsonstring)
- [equals](LocationPaginationResp.md#equals-1)
- [fromBinary](LocationPaginationResp.md#frombinary-1)
- [fromJson](LocationPaginationResp.md#fromjson-1)
- [fromJsonString](LocationPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LocationPaginationResp`](LocationPaginationResp.md)\> |

#### Overrides

Message&lt;LocationPaginationResp\&gt;.constructor

#### Defined in

[src/locations_pb.ts:435](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L435)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/locations_pb.ts:419](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L419)

___

### payload

• **payload**: [`Location`](Location.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated scanswift.Location payload = 3;

#### Defined in

[src/locations_pb.ts:433](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L433)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/locations_pb.ts:426](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L426)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations_pb.ts:442](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L442)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations_pb.ts:440](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L440)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.LocationPaginationResp"``

#### Defined in

[src/locations_pb.ts:441](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L441)

## Methods

### clone

▸ **clone**(): [`LocationPaginationResp`](LocationPaginationResp.md)

Create a deep copy.

#### Returns

[`LocationPaginationResp`](LocationPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationPaginationResp`](LocationPaginationResp.md) \| `PlainMessage`<[`LocationPaginationResp`](LocationPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationPaginationResp`](LocationPaginationResp.md)

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

[`LocationPaginationResp`](LocationPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationPaginationResp`](LocationPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationPaginationResp`](LocationPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationPaginationResp`](LocationPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationPaginationResp`](LocationPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LocationPaginationResp`](LocationPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LocationPaginationResp`](LocationPaginationResp.md)\>

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
| `a` | `undefined` \| [`LocationPaginationResp`](LocationPaginationResp.md) \| `PlainMessage`<[`LocationPaginationResp`](LocationPaginationResp.md)\> |
| `b` | `undefined` \| [`LocationPaginationResp`](LocationPaginationResp.md) \| `PlainMessage`<[`LocationPaginationResp`](LocationPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations_pb.ts:460](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L460)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LocationPaginationResp`](LocationPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LocationPaginationResp`](LocationPaginationResp.md)

#### Defined in

[src/locations_pb.ts:448](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L448)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LocationPaginationResp`](LocationPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationPaginationResp`](LocationPaginationResp.md)

#### Defined in

[src/locations_pb.ts:452](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L452)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LocationPaginationResp`](LocationPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LocationPaginationResp`](LocationPaginationResp.md)

#### Defined in

[src/locations_pb.ts:456](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/locations_pb.ts#L456)
