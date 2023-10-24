[scanswift-sdk](../README.md) / [Exports](../modules.md) / ScansServiceSerialScanUpdateRequest

# Class: ScansServiceSerialScanUpdateRequest

Describes the data structure to perform the update operation on a serial scan

**`Generated`**

from message scanswift.ScansServiceSerialScanUpdateRequest

## Hierarchy

- `Message`<[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)\>

  ↳ **`ScansServiceSerialScanUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ScansServiceSerialScanUpdateRequest.md#constructor)

### Properties

- [inferredFrom](ScansServiceSerialScanUpdateRequest.md#inferredfrom)
- [latitude](ScansServiceSerialScanUpdateRequest.md#latitude)
- [longitude](ScansServiceSerialScanUpdateRequest.md#longitude)
- [uuid](ScansServiceSerialScanUpdateRequest.md#uuid)
- [fields](ScansServiceSerialScanUpdateRequest.md#fields)
- [runtime](ScansServiceSerialScanUpdateRequest.md#runtime)
- [typeName](ScansServiceSerialScanUpdateRequest.md#typename)

### Methods

- [clone](ScansServiceSerialScanUpdateRequest.md#clone)
- [equals](ScansServiceSerialScanUpdateRequest.md#equals)
- [fromBinary](ScansServiceSerialScanUpdateRequest.md#frombinary)
- [fromJson](ScansServiceSerialScanUpdateRequest.md#fromjson)
- [fromJsonString](ScansServiceSerialScanUpdateRequest.md#fromjsonstring)
- [getType](ScansServiceSerialScanUpdateRequest.md#gettype)
- [toBinary](ScansServiceSerialScanUpdateRequest.md#tobinary)
- [toJSON](ScansServiceSerialScanUpdateRequest.md#tojson)
- [toJson](ScansServiceSerialScanUpdateRequest.md#tojson-1)
- [toJsonString](ScansServiceSerialScanUpdateRequest.md#tojsonstring)
- [equals](ScansServiceSerialScanUpdateRequest.md#equals-1)
- [fromBinary](ScansServiceSerialScanUpdateRequest.md#frombinary-1)
- [fromJson](ScansServiceSerialScanUpdateRequest.md#fromjson-1)
- [fromJsonString](ScansServiceSerialScanUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServiceSerialScanUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)\> |

#### Overrides

Message&lt;ScansServiceSerialScanUpdateRequest\&gt;.constructor

#### Defined in

[src/scans_pb.ts:188](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L188)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: scanswift.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:186](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L186)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:172](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L172)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:179](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L179)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/scans_pb.ts:165](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L165)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:195](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L195)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:193](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L193)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ScansServiceSerialScanUpdateRequest"``

#### Defined in

[src/scans_pb.ts:194](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L194)

## Methods

### clone

▸ **clone**(): [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

Create a deep copy.

#### Returns

[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md) \| `PlainMessage`<[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

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

[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md) \| `PlainMessage`<[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)\> |
| `b` | `undefined` \| [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md) \| `PlainMessage`<[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:214](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L214)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:202](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L202)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:206](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L206)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanUpdateRequest`](ScansServiceSerialScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:210](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L210)
