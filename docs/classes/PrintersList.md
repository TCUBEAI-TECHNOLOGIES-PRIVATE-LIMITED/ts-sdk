[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PrintersList

# Class: PrintersList

Describes the data structure that stores a list of printers

**`Generated`**

from message tcube.PrintersList

## Hierarchy

- `Message`<[`PrintersList`](PrintersList.md)\>

  ↳ **`PrintersList`**

## Table of contents

### Constructors

- [constructor](PrintersList.md#constructor)

### Properties

- [list](PrintersList.md#list)
- [fields](PrintersList.md#fields)
- [runtime](PrintersList.md#runtime)
- [typeName](PrintersList.md#typename)

### Methods

- [clone](PrintersList.md#clone)
- [equals](PrintersList.md#equals)
- [fromBinary](PrintersList.md#frombinary)
- [fromJson](PrintersList.md#fromjson)
- [fromJsonString](PrintersList.md#fromjsonstring)
- [getType](PrintersList.md#gettype)
- [toBinary](PrintersList.md#tobinary)
- [toJSON](PrintersList.md#tojson)
- [toJson](PrintersList.md#tojson-1)
- [toJsonString](PrintersList.md#tojsonstring)
- [equals](PrintersList.md#equals-1)
- [fromBinary](PrintersList.md#frombinary-1)
- [fromJson](PrintersList.md#fromjson-1)
- [fromJsonString](PrintersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PrintersList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PrintersList`](PrintersList.md)\> |

#### Overrides

Message&lt;PrintersList\&gt;.constructor

#### Defined in

[src/printers_pb.ts:420](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L420)

## Properties

### list

• **list**: [`Printer`](Printer.md)[] = `[]`

List of printers

**`Generated`**

from field: repeated tcube.Printer list = 1;

#### Defined in

[src/printers_pb.ts:418](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L418)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/printers_pb.ts:427](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L427)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/printers_pb.ts:425](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L425)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PrintersList"``

#### Defined in

[src/printers_pb.ts:426](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L426)

## Methods

### clone

▸ **clone**(): [`PrintersList`](PrintersList.md)

Create a deep copy.

#### Returns

[`PrintersList`](PrintersList.md)

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
| `other` | `undefined` \| ``null`` \| [`PrintersList`](PrintersList.md) \| `PlainMessage`<[`PrintersList`](PrintersList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PrintersList`](PrintersList.md)

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

[`PrintersList`](PrintersList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PrintersList`](PrintersList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersList`](PrintersList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PrintersList`](PrintersList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersList`](PrintersList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PrintersList`](PrintersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PrintersList`](PrintersList.md)\>

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
| `a` | `undefined` \| [`PrintersList`](PrintersList.md) \| `PlainMessage`<[`PrintersList`](PrintersList.md)\> |
| `b` | `undefined` \| [`PrintersList`](PrintersList.md) \| `PlainMessage`<[`PrintersList`](PrintersList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/printers_pb.ts:443](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L443)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PrintersList`](PrintersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PrintersList`](PrintersList.md)

#### Defined in

[src/printers_pb.ts:431](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L431)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PrintersList`](PrintersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersList`](PrintersList.md)

#### Defined in

[src/printers_pb.ts:435](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L435)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PrintersList`](PrintersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersList`](PrintersList.md)

#### Defined in

[src/printers_pb.ts:439](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L439)
