[scanswift-sdk](../README.md) / [Exports](../modules.md) / PrinterPaginationResp

# Class: PrinterPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message scanswift.PrinterPaginationResp

## Hierarchy

- `Message`<[`PrinterPaginationResp`](PrinterPaginationResp.md)\>

  ↳ **`PrinterPaginationResp`**

## Table of contents

### Constructors

- [constructor](PrinterPaginationResp.md#constructor)

### Properties

- [count](PrinterPaginationResp.md#count)
- [payload](PrinterPaginationResp.md#payload)
- [total](PrinterPaginationResp.md#total)
- [fields](PrinterPaginationResp.md#fields)
- [runtime](PrinterPaginationResp.md#runtime)
- [typeName](PrinterPaginationResp.md#typename)

### Methods

- [clone](PrinterPaginationResp.md#clone)
- [equals](PrinterPaginationResp.md#equals)
- [fromBinary](PrinterPaginationResp.md#frombinary)
- [fromJson](PrinterPaginationResp.md#fromjson)
- [fromJsonString](PrinterPaginationResp.md#fromjsonstring)
- [getType](PrinterPaginationResp.md#gettype)
- [toBinary](PrinterPaginationResp.md#tobinary)
- [toJSON](PrinterPaginationResp.md#tojson)
- [toJson](PrinterPaginationResp.md#tojson-1)
- [toJsonString](PrinterPaginationResp.md#tojsonstring)
- [equals](PrinterPaginationResp.md#equals-1)
- [fromBinary](PrinterPaginationResp.md#frombinary-1)
- [fromJson](PrinterPaginationResp.md#fromjson-1)
- [fromJsonString](PrinterPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new PrinterPaginationResp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PrinterPaginationResp`](PrinterPaginationResp.md)\> |

#### Overrides

Message&lt;PrinterPaginationResp\&gt;.constructor

#### Defined in

[src/printers_pb.ts:558](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L558)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/printers_pb.ts:542](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L542)

___

### payload

• **payload**: [`Printer`](Printer.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated scanswift.Printer payload = 3;

#### Defined in

[src/printers_pb.ts:556](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L556)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 2;

#### Defined in

[src/printers_pb.ts:549](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L549)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/printers_pb.ts:565](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L565)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/printers_pb.ts:563](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L563)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PrinterPaginationResp"``

#### Defined in

[src/printers_pb.ts:564](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L564)

## Methods

### clone

▸ **clone**(): [`PrinterPaginationResp`](PrinterPaginationResp.md)

Create a deep copy.

#### Returns

[`PrinterPaginationResp`](PrinterPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`PrinterPaginationResp`](PrinterPaginationResp.md) \| `PlainMessage`<[`PrinterPaginationResp`](PrinterPaginationResp.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PrinterPaginationResp`](PrinterPaginationResp.md)

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

[`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PrinterPaginationResp`](PrinterPaginationResp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PrinterPaginationResp`](PrinterPaginationResp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PrinterPaginationResp`](PrinterPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PrinterPaginationResp`](PrinterPaginationResp.md)\>

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
| `a` | `undefined` \| [`PrinterPaginationResp`](PrinterPaginationResp.md) \| `PlainMessage`<[`PrinterPaginationResp`](PrinterPaginationResp.md)\> |
| `b` | `undefined` \| [`PrinterPaginationResp`](PrinterPaginationResp.md) \| `PlainMessage`<[`PrinterPaginationResp`](PrinterPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/printers_pb.ts:583](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L583)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Defined in

[src/printers_pb.ts:571](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L571)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Defined in

[src/printers_pb.ts:575](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L575)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrinterPaginationResp`](PrinterPaginationResp.md)

#### Defined in

[src/printers_pb.ts:579](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L579)
