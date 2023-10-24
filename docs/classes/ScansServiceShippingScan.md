[scanswift-sdk](../README.md) / [Exports](../modules.md) / ScansServiceShippingScan

# Class: ScansServiceShippingScan

Describes the shipping scan message

**`Generated`**

from message scanswift.ScansServiceShippingScan

## Hierarchy

- `Message`<[`ScansServiceShippingScan`](ScansServiceShippingScan.md)\>

  ↳ **`ScansServiceShippingScan`**

## Table of contents

### Constructors

- [constructor](ScansServiceShippingScan.md#constructor)

### Properties

- [inferredFrom](ScansServiceShippingScan.md#inferredfrom)
- [latitude](ScansServiceShippingScan.md#latitude)
- [longitude](ScansServiceShippingScan.md#longitude)
- [metadata](ScansServiceShippingScan.md#metadata)
- [shippingUuid](ScansServiceShippingScan.md#shippinguuid)
- [fields](ScansServiceShippingScan.md#fields)
- [runtime](ScansServiceShippingScan.md#runtime)
- [typeName](ScansServiceShippingScan.md#typename)

### Methods

- [clone](ScansServiceShippingScan.md#clone)
- [equals](ScansServiceShippingScan.md#equals)
- [fromBinary](ScansServiceShippingScan.md#frombinary)
- [fromJson](ScansServiceShippingScan.md#fromjson)
- [fromJsonString](ScansServiceShippingScan.md#fromjsonstring)
- [getType](ScansServiceShippingScan.md#gettype)
- [toBinary](ScansServiceShippingScan.md#tobinary)
- [toJSON](ScansServiceShippingScan.md#tojson)
- [toJson](ScansServiceShippingScan.md#tojson-1)
- [toJsonString](ScansServiceShippingScan.md#tojsonstring)
- [equals](ScansServiceShippingScan.md#equals-1)
- [fromBinary](ScansServiceShippingScan.md#frombinary-1)
- [fromJson](ScansServiceShippingScan.md#fromjson-1)
- [fromJsonString](ScansServiceShippingScan.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServiceShippingScan**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServiceShippingScan`](ScansServiceShippingScan.md)\> |

#### Overrides

Message&lt;ScansServiceShippingScan\&gt;.constructor

#### Defined in

[src/scans_pb.ts:757](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L757)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: scanswift.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:755](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L755)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:741](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L741)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:748](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L748)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/scans_pb.ts:727](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L727)

___

### shippingUuid

• **shippingUuid**: `string` = `""`

The UUID of the shipping

**`Generated`**

from field: string shipping_uuid = 10;

#### Defined in

[src/scans_pb.ts:734](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L734)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:764](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L764)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:762](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L762)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ScansServiceShippingScan"``

#### Defined in

[src/scans_pb.ts:763](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L763)

## Methods

### clone

▸ **clone**(): [`ScansServiceShippingScan`](ScansServiceShippingScan.md)

Create a deep copy.

#### Returns

[`ScansServiceShippingScan`](ScansServiceShippingScan.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServiceShippingScan`](ScansServiceShippingScan.md) \| `PlainMessage`<[`ScansServiceShippingScan`](ScansServiceShippingScan.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServiceShippingScan`](ScansServiceShippingScan.md)

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

[`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServiceShippingScan`](ScansServiceShippingScan.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServiceShippingScan`](ScansServiceShippingScan.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServiceShippingScan`](ScansServiceShippingScan.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServiceShippingScan`](ScansServiceShippingScan.md)\>

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
| `a` | `undefined` \| [`ScansServiceShippingScan`](ScansServiceShippingScan.md) \| `PlainMessage`<[`ScansServiceShippingScan`](ScansServiceShippingScan.md)\> |
| `b` | `undefined` \| [`ScansServiceShippingScan`](ScansServiceShippingScan.md) \| `PlainMessage`<[`ScansServiceShippingScan`](ScansServiceShippingScan.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:784](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L784)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Defined in

[src/scans_pb.ts:772](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L772)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Defined in

[src/scans_pb.ts:776](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L776)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScan`](ScansServiceShippingScan.md)

#### Defined in

[src/scans_pb.ts:780](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/scans_pb.ts#L780)
