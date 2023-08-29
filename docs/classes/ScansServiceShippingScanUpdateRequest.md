[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ScansServiceShippingScanUpdateRequest

# Class: ScansServiceShippingScanUpdateRequest

Describes the data structure to perform the update operation on a shipping scan

**`Generated`**

from message tcube.ScansServiceShippingScanUpdateRequest

## Hierarchy

- `Message`<[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)\>

  ↳ **`ScansServiceShippingScanUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ScansServiceShippingScanUpdateRequest.md#constructor)

### Properties

- [inferredFrom](ScansServiceShippingScanUpdateRequest.md#inferredfrom)
- [latitude](ScansServiceShippingScanUpdateRequest.md#latitude)
- [longitude](ScansServiceShippingScanUpdateRequest.md#longitude)
- [uuid](ScansServiceShippingScanUpdateRequest.md#uuid)
- [fields](ScansServiceShippingScanUpdateRequest.md#fields)
- [runtime](ScansServiceShippingScanUpdateRequest.md#runtime)
- [typeName](ScansServiceShippingScanUpdateRequest.md#typename)

### Methods

- [clone](ScansServiceShippingScanUpdateRequest.md#clone)
- [equals](ScansServiceShippingScanUpdateRequest.md#equals)
- [fromBinary](ScansServiceShippingScanUpdateRequest.md#frombinary)
- [fromJson](ScansServiceShippingScanUpdateRequest.md#fromjson)
- [fromJsonString](ScansServiceShippingScanUpdateRequest.md#fromjsonstring)
- [getType](ScansServiceShippingScanUpdateRequest.md#gettype)
- [toBinary](ScansServiceShippingScanUpdateRequest.md#tobinary)
- [toJSON](ScansServiceShippingScanUpdateRequest.md#tojson)
- [toJson](ScansServiceShippingScanUpdateRequest.md#tojson-1)
- [toJsonString](ScansServiceShippingScanUpdateRequest.md#tojsonstring)
- [equals](ScansServiceShippingScanUpdateRequest.md#equals-1)
- [fromBinary](ScansServiceShippingScanUpdateRequest.md#frombinary-1)
- [fromJson](ScansServiceShippingScanUpdateRequest.md#fromjson-1)
- [fromJsonString](ScansServiceShippingScanUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServiceShippingScanUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)\> |

#### Overrides

Message&lt;ScansServiceShippingScanUpdateRequest\&gt;.constructor

#### Defined in

[src/scans_pb.ts:684](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L684)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: tcube.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:682](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L682)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:668](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L668)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:675](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L675)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/scans_pb.ts:661](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L661)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:691](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L691)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:689](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L689)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ScansServiceShippingScanUpdateRequest"``

#### Defined in

[src/scans_pb.ts:690](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L690)

## Methods

### clone

▸ **clone**(): [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

Create a deep copy.

#### Returns

[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md) \| `PlainMessage`<[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

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

[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md) \| `PlainMessage`<[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)\> |
| `b` | `undefined` \| [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md) \| `PlainMessage`<[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:710](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L710)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:698](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L698)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:702](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L702)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanUpdateRequest`](ScansServiceShippingScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:706](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L706)
