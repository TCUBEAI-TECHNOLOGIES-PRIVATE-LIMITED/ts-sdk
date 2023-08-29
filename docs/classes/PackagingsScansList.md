[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PackagingsScansList

# Class: PackagingsScansList

Describes the data structure that stores a list of packaging scans

**`Generated`**

from message tcube.PackagingsScansList

## Hierarchy

- `Message`<[`PackagingsScansList`](PackagingsScansList.md)\>

  ↳ **`PackagingsScansList`**

## Table of contents

### Constructors

- [constructor](PackagingsScansList.md#constructor)

### Properties

- [list](PackagingsScansList.md#list)
- [fields](PackagingsScansList.md#fields)
- [runtime](PackagingsScansList.md#runtime)
- [typeName](PackagingsScansList.md#typename)

### Methods

- [clone](PackagingsScansList.md#clone)
- [equals](PackagingsScansList.md#equals)
- [fromBinary](PackagingsScansList.md#frombinary)
- [fromJson](PackagingsScansList.md#fromjson)
- [fromJsonString](PackagingsScansList.md#fromjsonstring)
- [getType](PackagingsScansList.md#gettype)
- [toBinary](PackagingsScansList.md#tobinary)
- [toJSON](PackagingsScansList.md#tojson)
- [toJson](PackagingsScansList.md#tojson-1)
- [toJsonString](PackagingsScansList.md#tojsonstring)
- [equals](PackagingsScansList.md#equals-1)
- [fromBinary](PackagingsScansList.md#frombinary-1)
- [fromJson](PackagingsScansList.md#fromjson-1)
- [fromJsonString](PackagingsScansList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsScansList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsScansList`](PackagingsScansList.md)\> |

#### Overrides

Message&lt;PackagingsScansList\&gt;.constructor

#### Defined in

[src/scans_pb.ts:555](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L555)

## Properties

### list

• **list**: [`ScansServicePackagingScan`](ScansServicePackagingScan.md)[] = `[]`

List of packaging scans

**`Generated`**

from field: repeated tcube.ScansServicePackagingScan list = 1;

#### Defined in

[src/scans_pb.ts:553](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L553)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:562](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L562)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:560](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L560)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PackagingsScansList"``

#### Defined in

[src/scans_pb.ts:561](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L561)

## Methods

### clone

▸ **clone**(): [`PackagingsScansList`](PackagingsScansList.md)

Create a deep copy.

#### Returns

[`PackagingsScansList`](PackagingsScansList.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsScansList`](PackagingsScansList.md) \| `PlainMessage`<[`PackagingsScansList`](PackagingsScansList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsScansList`](PackagingsScansList.md)

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

[`PackagingsScansList`](PackagingsScansList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsScansList`](PackagingsScansList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsScansList`](PackagingsScansList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsScansList`](PackagingsScansList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsScansList`](PackagingsScansList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsScansList`](PackagingsScansList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsScansList`](PackagingsScansList.md)\>

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
| `a` | `undefined` \| [`PackagingsScansList`](PackagingsScansList.md) \| `PlainMessage`<[`PackagingsScansList`](PackagingsScansList.md)\> |
| `b` | `undefined` \| [`PackagingsScansList`](PackagingsScansList.md) \| `PlainMessage`<[`PackagingsScansList`](PackagingsScansList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:578](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L578)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsScansList`](PackagingsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsScansList`](PackagingsScansList.md)

#### Defined in

[src/scans_pb.ts:566](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L566)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsScansList`](PackagingsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsScansList`](PackagingsScansList.md)

#### Defined in

[src/scans_pb.ts:570](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L570)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsScansList`](PackagingsScansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsScansList`](PackagingsScansList.md)

#### Defined in

[src/scans_pb.ts:574](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/scans_pb.ts#L574)
