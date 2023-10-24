[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsScansList

# Class: SerialsScansList

Describes the data structure that stores a list of serial scans

**`Generated`**

from message scanswift.SerialsScansList

## Hierarchy

- `Message`<[`SerialsScansList`](SerialsScansList.md)\>

  ↳ **`SerialsScansList`**

## Table of contents

### Constructors

- [constructor](SerialsScansList.md#constructor)

### Properties

- [list](SerialsScansList.md#list)
- [fields](SerialsScansList.md#fields)
- [runtime](SerialsScansList.md#runtime)
- [typeName](SerialsScansList.md#typename)

### Methods

- [clone](SerialsScansList.md#clone)
- [equals](SerialsScansList.md#equals)
- [fromBinary](SerialsScansList.md#frombinary)
- [fromJson](SerialsScansList.md#fromjson)
- [fromJsonString](SerialsScansList.md#fromjsonstring)
- [getType](SerialsScansList.md#gettype)
- [toBinary](SerialsScansList.md#tobinary)
- [toJSON](SerialsScansList.md#tojson)
- [toJson](SerialsScansList.md#tojson-1)
- [toJsonString](SerialsScansList.md#tojsonstring)
- [equals](SerialsScansList.md#equals-1)
- [fromBinary](SerialsScansList.md#frombinary-1)
- [fromJson](SerialsScansList.md#fromjson-1)
- [fromJsonString](SerialsScansList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsScansList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsScansList`](SerialsScansList.md)\> |

#### Overrides

Message&lt;SerialsScansList\&gt;.constructor

#### Defined in

[src/scans_pb.ts:307](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L307)

## Properties

### list

• **list**: [`ScansServiceSerialScan`](ScansServiceSerialScan.md)[] = `[]`

List of serial scans

**`Generated`**

from field: repeated scanswift.ScansServiceSerialScan list = 1;

#### Defined in

[src/scans_pb.ts:305](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L305)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:314](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L314)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:312](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L312)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsScansList"``

#### Defined in

[src/scans_pb.ts:313](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L313)

## Methods

### clone

▸ **clone**(): [`SerialsScansList`](SerialsScansList.md)

Create a deep copy.

#### Returns

[`SerialsScansList`](SerialsScansList.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsScansList`](SerialsScansList.md) \| `PlainMessage`<[`SerialsScansList`](SerialsScansList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsScansList`](SerialsScansList.md)

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

[`SerialsScansList`](SerialsScansList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsScansList`](SerialsScansList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsScansList`](SerialsScansList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsScansList`](SerialsScansList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsScansList`](SerialsScansList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsScansList`](SerialsScansList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsScansList`](SerialsScansList.md)\>

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
| `a` | `undefined` \| [`SerialsScansList`](SerialsScansList.md) \| `PlainMessage`<[`SerialsScansList`](SerialsScansList.md)\> |
| `b` | `undefined` \| [`SerialsScansList`](SerialsScansList.md) \| `PlainMessage`<[`SerialsScansList`](SerialsScansList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:330](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L330)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsScansList`](SerialsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsScansList`](SerialsScansList.md)

#### Defined in

[src/scans_pb.ts:318](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L318)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsScansList`](SerialsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsScansList`](SerialsScansList.md)

#### Defined in

[src/scans_pb.ts:322](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L322)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsScansList`](SerialsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsScansList`](SerialsScansList.md)

#### Defined in

[src/scans_pb.ts:326](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L326)
