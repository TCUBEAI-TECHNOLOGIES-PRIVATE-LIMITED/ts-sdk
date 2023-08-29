[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ShippingsScansList

# Class: ShippingsScansList

Describes the data structure that stores a list of shipping scans

**`Generated`**

from message tcube.ShippingsScansList

## Hierarchy

- `Message`<[`ShippingsScansList`](ShippingsScansList.md)\>

  ↳ **`ShippingsScansList`**

## Table of contents

### Constructors

- [constructor](ShippingsScansList.md#constructor)

### Properties

- [list](ShippingsScansList.md#list)
- [fields](ShippingsScansList.md#fields)
- [runtime](ShippingsScansList.md#runtime)
- [typeName](ShippingsScansList.md#typename)

### Methods

- [clone](ShippingsScansList.md#clone)
- [equals](ShippingsScansList.md#equals)
- [fromBinary](ShippingsScansList.md#frombinary)
- [fromJson](ShippingsScansList.md#fromjson)
- [fromJsonString](ShippingsScansList.md#fromjsonstring)
- [getType](ShippingsScansList.md#gettype)
- [toBinary](ShippingsScansList.md#tobinary)
- [toJSON](ShippingsScansList.md#tojson)
- [toJson](ShippingsScansList.md#tojson-1)
- [toJsonString](ShippingsScansList.md#tojsonstring)
- [equals](ShippingsScansList.md#equals-1)
- [fromBinary](ShippingsScansList.md#frombinary-1)
- [fromJson](ShippingsScansList.md#fromjson-1)
- [fromJsonString](ShippingsScansList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShippingsScansList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShippingsScansList`](ShippingsScansList.md)\> |

#### Overrides

Message&lt;ShippingsScansList\&gt;.constructor

#### Defined in

[src/scans_pb.ts:803](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L803)

## Properties

### list

• **list**: [`ScansServiceShippingScan`](ScansServiceShippingScan.md)[] = `[]`

List of shipping scans

**`Generated`**

from field: repeated tcube.ScansServiceShippingScan list = 1;

#### Defined in

[src/scans_pb.ts:801](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L801)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:810](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L810)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:808](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L808)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ShippingsScansList"``

#### Defined in

[src/scans_pb.ts:809](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L809)

## Methods

### clone

▸ **clone**(): [`ShippingsScansList`](ShippingsScansList.md)

Create a deep copy.

#### Returns

[`ShippingsScansList`](ShippingsScansList.md)

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
| `other` | `undefined` \| ``null`` \| [`ShippingsScansList`](ShippingsScansList.md) \| `PlainMessage`<[`ShippingsScansList`](ShippingsScansList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShippingsScansList`](ShippingsScansList.md)

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

[`ShippingsScansList`](ShippingsScansList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShippingsScansList`](ShippingsScansList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsScansList`](ShippingsScansList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShippingsScansList`](ShippingsScansList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsScansList`](ShippingsScansList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShippingsScansList`](ShippingsScansList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShippingsScansList`](ShippingsScansList.md)\>

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
| `a` | `undefined` \| [`ShippingsScansList`](ShippingsScansList.md) \| `PlainMessage`<[`ShippingsScansList`](ShippingsScansList.md)\> |
| `b` | `undefined` \| [`ShippingsScansList`](ShippingsScansList.md) \| `PlainMessage`<[`ShippingsScansList`](ShippingsScansList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:826](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L826)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShippingsScansList`](ShippingsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShippingsScansList`](ShippingsScansList.md)

#### Defined in

[src/scans_pb.ts:814](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L814)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShippingsScansList`](ShippingsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsScansList`](ShippingsScansList.md)

#### Defined in

[src/scans_pb.ts:818](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L818)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShippingsScansList`](ShippingsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShippingsScansList`](ShippingsScansList.md)

#### Defined in

[src/scans_pb.ts:822](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L822)
