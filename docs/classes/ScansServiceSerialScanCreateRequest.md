[scanswift-sdk](../README.md) / [Exports](../modules.md) / ScansServiceSerialScanCreateRequest

# Class: ScansServiceSerialScanCreateRequest

Describes the data structure to perform the create operation on a serial scan

**`Generated`**

from message scanswift.ScansServiceSerialScanCreateRequest

## Hierarchy

- `Message`<[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)\>

  ↳ **`ScansServiceSerialScanCreateRequest`**

## Table of contents

### Constructors

- [constructor](ScansServiceSerialScanCreateRequest.md#constructor)

### Properties

- [inferredFrom](ScansServiceSerialScanCreateRequest.md#inferredfrom)
- [latitude](ScansServiceSerialScanCreateRequest.md#latitude)
- [longitude](ScansServiceSerialScanCreateRequest.md#longitude)
- [serialUuid](ScansServiceSerialScanCreateRequest.md#serialuuid)
- [fields](ScansServiceSerialScanCreateRequest.md#fields)
- [runtime](ScansServiceSerialScanCreateRequest.md#runtime)
- [typeName](ScansServiceSerialScanCreateRequest.md#typename)

### Methods

- [clone](ScansServiceSerialScanCreateRequest.md#clone)
- [equals](ScansServiceSerialScanCreateRequest.md#equals)
- [fromBinary](ScansServiceSerialScanCreateRequest.md#frombinary)
- [fromJson](ScansServiceSerialScanCreateRequest.md#fromjson)
- [fromJsonString](ScansServiceSerialScanCreateRequest.md#fromjsonstring)
- [getType](ScansServiceSerialScanCreateRequest.md#gettype)
- [toBinary](ScansServiceSerialScanCreateRequest.md#tobinary)
- [toJSON](ScansServiceSerialScanCreateRequest.md#tojson)
- [toJson](ScansServiceSerialScanCreateRequest.md#tojson-1)
- [toJsonString](ScansServiceSerialScanCreateRequest.md#tojsonstring)
- [equals](ScansServiceSerialScanCreateRequest.md#equals-1)
- [fromBinary](ScansServiceSerialScanCreateRequest.md#frombinary-1)
- [fromJson](ScansServiceSerialScanCreateRequest.md#fromjson-1)
- [fromJsonString](ScansServiceSerialScanCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServiceSerialScanCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)\> |

#### Overrides

Message&lt;ScansServiceSerialScanCreateRequest\&gt;.constructor

#### Defined in

[src/scans_pb.ts:122](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L122)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: scanswift.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:120](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L120)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:106](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L106)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:113](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L113)

___

### serialUuid

• **serialUuid**: `string` = `""`

The UUID of the serial that needs to be updated

**`Generated`**

from field: string serial_uuid = 10;

#### Defined in

[src/scans_pb.ts:99](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L99)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:129](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L129)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:127](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L127)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ScansServiceSerialScanCreateRequest"``

#### Defined in

[src/scans_pb.ts:128](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L128)

## Methods

### clone

▸ **clone**(): [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

Create a deep copy.

#### Returns

[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md) \| `PlainMessage`<[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

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

[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)\>

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
| `a` | `undefined` \| [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md) \| `PlainMessage`<[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)\> |
| `b` | `undefined` \| [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md) \| `PlainMessage`<[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:148](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L148)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:136](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L136)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:140](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L140)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScanCreateRequest`](ScansServiceSerialScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:144](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L144)
