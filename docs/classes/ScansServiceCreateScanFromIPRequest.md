[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ScansServiceCreateScanFromIPRequest

# Class: ScansServiceCreateScanFromIPRequest

Describes the data structure to perform the create scan operation using the given IP address for the serial/packaging/shipping denoted by resource_uuid

**`Generated`**

from message tcube.ScansServiceCreateScanFromIPRequest

## Hierarchy

- `Message`<[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)\>

  ↳ **`ScansServiceCreateScanFromIPRequest`**

## Table of contents

### Constructors

- [constructor](ScansServiceCreateScanFromIPRequest.md#constructor)

### Properties

- [ip](ScansServiceCreateScanFromIPRequest.md#ip)
- [resourceUuid](ScansServiceCreateScanFromIPRequest.md#resourceuuid)
- [fields](ScansServiceCreateScanFromIPRequest.md#fields)
- [runtime](ScansServiceCreateScanFromIPRequest.md#runtime)
- [typeName](ScansServiceCreateScanFromIPRequest.md#typename)

### Methods

- [clone](ScansServiceCreateScanFromIPRequest.md#clone)
- [equals](ScansServiceCreateScanFromIPRequest.md#equals)
- [fromBinary](ScansServiceCreateScanFromIPRequest.md#frombinary)
- [fromJson](ScansServiceCreateScanFromIPRequest.md#fromjson)
- [fromJsonString](ScansServiceCreateScanFromIPRequest.md#fromjsonstring)
- [getType](ScansServiceCreateScanFromIPRequest.md#gettype)
- [toBinary](ScansServiceCreateScanFromIPRequest.md#tobinary)
- [toJSON](ScansServiceCreateScanFromIPRequest.md#tojson)
- [toJson](ScansServiceCreateScanFromIPRequest.md#tojson-1)
- [toJsonString](ScansServiceCreateScanFromIPRequest.md#tojsonstring)
- [equals](ScansServiceCreateScanFromIPRequest.md#equals-1)
- [fromBinary](ScansServiceCreateScanFromIPRequest.md#frombinary-1)
- [fromJson](ScansServiceCreateScanFromIPRequest.md#fromjson-1)
- [fromJsonString](ScansServiceCreateScanFromIPRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServiceCreateScanFromIPRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)\> |

#### Overrides

Message&lt;ScansServiceCreateScanFromIPRequest\&gt;.constructor

#### Defined in

[src/scans_pb.ts:58](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L58)

## Properties

### ip

• **ip**: `string` = `""`

The IP address using which the location information needs to be determined

**`Generated`**

from field: string ip = 11;

#### Defined in

[src/scans_pb.ts:56](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L56)

___

### resourceUuid

• **resourceUuid**: `string` = `""`

The UUID of the serial or packaging or shipping record

**`Generated`**

from field: string resource_uuid = 10;

#### Defined in

[src/scans_pb.ts:49](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L49)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:65](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L65)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:63](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L63)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ScansServiceCreateScanFromIPRequest"``

#### Defined in

[src/scans_pb.ts:64](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L64)

## Methods

### clone

▸ **clone**(): [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

Create a deep copy.

#### Returns

[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md) \| `PlainMessage`<[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

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

[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)\>

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
| `a` | `undefined` \| [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md) \| `PlainMessage`<[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)\> |
| `b` | `undefined` \| [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md) \| `PlainMessage`<[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:82](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L82)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Defined in

[src/scans_pb.ts:70](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L70)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Defined in

[src/scans_pb.ts:74](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L74)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceCreateScanFromIPRequest`](ScansServiceCreateScanFromIPRequest.md)

#### Defined in

[src/scans_pb.ts:78](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/scans_pb.ts#L78)
