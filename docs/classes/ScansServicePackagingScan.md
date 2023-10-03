[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ScansServicePackagingScan

# Class: ScansServicePackagingScan

Describes the packaging scan message

**`Generated`**

from message tcube.ScansServicePackagingScan

## Hierarchy

- `Message`<[`ScansServicePackagingScan`](ScansServicePackagingScan.md)\>

  ↳ **`ScansServicePackagingScan`**

## Table of contents

### Constructors

- [constructor](ScansServicePackagingScan.md#constructor)

### Properties

- [inferredFrom](ScansServicePackagingScan.md#inferredfrom)
- [latitude](ScansServicePackagingScan.md#latitude)
- [longitude](ScansServicePackagingScan.md#longitude)
- [metadata](ScansServicePackagingScan.md#metadata)
- [packagingUuid](ScansServicePackagingScan.md#packaginguuid)
- [fields](ScansServicePackagingScan.md#fields)
- [runtime](ScansServicePackagingScan.md#runtime)
- [typeName](ScansServicePackagingScan.md#typename)

### Methods

- [clone](ScansServicePackagingScan.md#clone)
- [equals](ScansServicePackagingScan.md#equals)
- [fromBinary](ScansServicePackagingScan.md#frombinary)
- [fromJson](ScansServicePackagingScan.md#fromjson)
- [fromJsonString](ScansServicePackagingScan.md#fromjsonstring)
- [getType](ScansServicePackagingScan.md#gettype)
- [toBinary](ScansServicePackagingScan.md#tobinary)
- [toJSON](ScansServicePackagingScan.md#tojson)
- [toJson](ScansServicePackagingScan.md#tojson-1)
- [toJsonString](ScansServicePackagingScan.md#tojsonstring)
- [equals](ScansServicePackagingScan.md#equals-1)
- [fromBinary](ScansServicePackagingScan.md#frombinary-1)
- [fromJson](ScansServicePackagingScan.md#fromjson-1)
- [fromJsonString](ScansServicePackagingScan.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServicePackagingScan**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServicePackagingScan`](ScansServicePackagingScan.md)\> |

#### Overrides

Message&lt;ScansServicePackagingScan\&gt;.constructor

#### Defined in

[src/scans_pb.ts:509](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L509)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: tcube.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:507](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L507)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:493](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L493)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:500](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L500)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/scans_pb.ts:479](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L479)

___

### packagingUuid

• **packagingUuid**: `string` = `""`

The UUID of the packaging

**`Generated`**

from field: string packaging_uuid = 10;

#### Defined in

[src/scans_pb.ts:486](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L486)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:516](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L516)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:514](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L514)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ScansServicePackagingScan"``

#### Defined in

[src/scans_pb.ts:515](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L515)

## Methods

### clone

▸ **clone**(): [`ScansServicePackagingScan`](ScansServicePackagingScan.md)

Create a deep copy.

#### Returns

[`ScansServicePackagingScan`](ScansServicePackagingScan.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServicePackagingScan`](ScansServicePackagingScan.md) \| `PlainMessage`<[`ScansServicePackagingScan`](ScansServicePackagingScan.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServicePackagingScan`](ScansServicePackagingScan.md)

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

[`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServicePackagingScan`](ScansServicePackagingScan.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServicePackagingScan`](ScansServicePackagingScan.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServicePackagingScan`](ScansServicePackagingScan.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServicePackagingScan`](ScansServicePackagingScan.md)\>

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
| `a` | `undefined` \| [`ScansServicePackagingScan`](ScansServicePackagingScan.md) \| `PlainMessage`<[`ScansServicePackagingScan`](ScansServicePackagingScan.md)\> |
| `b` | `undefined` \| [`ScansServicePackagingScan`](ScansServicePackagingScan.md) \| `PlainMessage`<[`ScansServicePackagingScan`](ScansServicePackagingScan.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:536](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L536)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Defined in

[src/scans_pb.ts:524](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L524)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Defined in

[src/scans_pb.ts:528](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L528)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScan`](ScansServicePackagingScan.md)

#### Defined in

[src/scans_pb.ts:532](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L532)
