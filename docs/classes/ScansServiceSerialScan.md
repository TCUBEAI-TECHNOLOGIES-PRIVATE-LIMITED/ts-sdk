[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ScansServiceSerialScan

# Class: ScansServiceSerialScan

Describes the serial scan message

**`Generated`**

from message tcube.ScansServiceSerialScan

## Hierarchy

- `Message`<[`ScansServiceSerialScan`](ScansServiceSerialScan.md)\>

  ↳ **`ScansServiceSerialScan`**

## Table of contents

### Constructors

- [constructor](ScansServiceSerialScan.md#constructor)

### Properties

- [inferredFrom](ScansServiceSerialScan.md#inferredfrom)
- [latitude](ScansServiceSerialScan.md#latitude)
- [longitude](ScansServiceSerialScan.md#longitude)
- [metadata](ScansServiceSerialScan.md#metadata)
- [serialUuid](ScansServiceSerialScan.md#serialuuid)
- [fields](ScansServiceSerialScan.md#fields)
- [runtime](ScansServiceSerialScan.md#runtime)
- [typeName](ScansServiceSerialScan.md#typename)

### Methods

- [clone](ScansServiceSerialScan.md#clone)
- [equals](ScansServiceSerialScan.md#equals)
- [fromBinary](ScansServiceSerialScan.md#frombinary)
- [fromJson](ScansServiceSerialScan.md#fromjson)
- [fromJsonString](ScansServiceSerialScan.md#fromjsonstring)
- [getType](ScansServiceSerialScan.md#gettype)
- [toBinary](ScansServiceSerialScan.md#tobinary)
- [toJSON](ScansServiceSerialScan.md#tojson)
- [toJson](ScansServiceSerialScan.md#tojson-1)
- [toJsonString](ScansServiceSerialScan.md#tojsonstring)
- [equals](ScansServiceSerialScan.md#equals-1)
- [fromBinary](ScansServiceSerialScan.md#frombinary-1)
- [fromJson](ScansServiceSerialScan.md#fromjson-1)
- [fromJsonString](ScansServiceSerialScan.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServiceSerialScan**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServiceSerialScan`](ScansServiceSerialScan.md)\> |

#### Overrides

Message&lt;ScansServiceSerialScan\&gt;.constructor

#### Defined in

[src/scans_pb.ts:261](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L261)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: tcube.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:259](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L259)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:245](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L245)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:252](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L252)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/scans_pb.ts:231](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L231)

___

### serialUuid

• **serialUuid**: `string` = `""`

The UUID of the serial

**`Generated`**

from field: string serial_uuid = 10;

#### Defined in

[src/scans_pb.ts:238](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L238)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:268](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L268)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:266](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L266)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ScansServiceSerialScan"``

#### Defined in

[src/scans_pb.ts:267](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L267)

## Methods

### clone

▸ **clone**(): [`ScansServiceSerialScan`](ScansServiceSerialScan.md)

Create a deep copy.

#### Returns

[`ScansServiceSerialScan`](ScansServiceSerialScan.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServiceSerialScan`](ScansServiceSerialScan.md) \| `PlainMessage`<[`ScansServiceSerialScan`](ScansServiceSerialScan.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServiceSerialScan`](ScansServiceSerialScan.md)

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

[`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServiceSerialScan`](ScansServiceSerialScan.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServiceSerialScan`](ScansServiceSerialScan.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServiceSerialScan`](ScansServiceSerialScan.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServiceSerialScan`](ScansServiceSerialScan.md)\>

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
| `a` | `undefined` \| [`ScansServiceSerialScan`](ScansServiceSerialScan.md) \| `PlainMessage`<[`ScansServiceSerialScan`](ScansServiceSerialScan.md)\> |
| `b` | `undefined` \| [`ScansServiceSerialScan`](ScansServiceSerialScan.md) \| `PlainMessage`<[`ScansServiceSerialScan`](ScansServiceSerialScan.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:288](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L288)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Defined in

[src/scans_pb.ts:276](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L276)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Defined in

[src/scans_pb.ts:280](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L280)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceSerialScan`](ScansServiceSerialScan.md)

#### Defined in

[src/scans_pb.ts:284](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L284)
