[scanswift-sdk](../README.md) / [Exports](../modules.md) / PackagingMetadata

# Class: PackagingMetadata

Describes the data structure of each packaging with its relevant metadata

**`Generated`**

from message scanswift.PackagingMetadata

## Hierarchy

- `Message`<[`PackagingMetadata`](PackagingMetadata.md)\>

  ↳ **`PackagingMetadata`**

## Table of contents

### Constructors

- [constructor](PackagingMetadata.md#constructor)

### Properties

- [entity](PackagingMetadata.md#entity)
- [location](PackagingMetadata.md#location)
- [packaging](PackagingMetadata.md#packaging)
- [qrString](PackagingMetadata.md#qrstring)
- [fields](PackagingMetadata.md#fields)
- [runtime](PackagingMetadata.md#runtime)
- [typeName](PackagingMetadata.md#typename)

### Methods

- [clone](PackagingMetadata.md#clone)
- [equals](PackagingMetadata.md#equals)
- [fromBinary](PackagingMetadata.md#frombinary)
- [fromJson](PackagingMetadata.md#fromjson)
- [fromJsonString](PackagingMetadata.md#fromjsonstring)
- [getType](PackagingMetadata.md#gettype)
- [toBinary](PackagingMetadata.md#tobinary)
- [toJSON](PackagingMetadata.md#tojson)
- [toJson](PackagingMetadata.md#tojson-1)
- [toJsonString](PackagingMetadata.md#tojsonstring)
- [equals](PackagingMetadata.md#equals-1)
- [fromBinary](PackagingMetadata.md#frombinary-1)
- [fromJson](PackagingMetadata.md#fromjson-1)
- [fromJsonString](PackagingMetadata.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingMetadata**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingMetadata`](PackagingMetadata.md)\> |

#### Overrides

Message&lt;PackagingMetadata\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:461](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L461)

## Properties

### entity

• `Optional` **entity**: [`Entity`](Entity.md)

Stores the entity info

**`Generated`**

from field: scanswift.Entity entity = 40;

#### Defined in

[src/packagings_pb.ts:459](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L459)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Stores the location info

**`Generated`**

from field: scanswift.Location location = 30;

#### Defined in

[src/packagings_pb.ts:452](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L452)

___

### packaging

• `Optional` **packaging**: [`Packaging`](Packaging.md)

Stores the packaging info

**`Generated`**

from field: scanswift.Packaging packaging = 1;

#### Defined in

[src/packagings_pb.ts:438](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L438)

___

### qrString

• **qrString**: `string` = `""`

Stores the string that will be used to generate the QR code

**`Generated`**

from field: string qr_string = 3;

#### Defined in

[src/packagings_pb.ts:445](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L445)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:468](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L468)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:466](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L466)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PackagingMetadata"``

#### Defined in

[src/packagings_pb.ts:467](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L467)

## Methods

### clone

▸ **clone**(): [`PackagingMetadata`](PackagingMetadata.md)

Create a deep copy.

#### Returns

[`PackagingMetadata`](PackagingMetadata.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingMetadata`](PackagingMetadata.md) \| `PlainMessage`<[`PackagingMetadata`](PackagingMetadata.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingMetadata`](PackagingMetadata.md)

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

[`PackagingMetadata`](PackagingMetadata.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingMetadata`](PackagingMetadata.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingMetadata`](PackagingMetadata.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingMetadata`](PackagingMetadata.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingMetadata`](PackagingMetadata.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingMetadata`](PackagingMetadata.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingMetadata`](PackagingMetadata.md)\>

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
| `a` | `undefined` \| [`PackagingMetadata`](PackagingMetadata.md) \| `PlainMessage`<[`PackagingMetadata`](PackagingMetadata.md)\> |
| `b` | `undefined` \| [`PackagingMetadata`](PackagingMetadata.md) \| `PlainMessage`<[`PackagingMetadata`](PackagingMetadata.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:487](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L487)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingMetadata`](PackagingMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingMetadata`](PackagingMetadata.md)

#### Defined in

[src/packagings_pb.ts:475](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L475)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingMetadata`](PackagingMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingMetadata`](PackagingMetadata.md)

#### Defined in

[src/packagings_pb.ts:479](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L479)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingMetadata`](PackagingMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingMetadata`](PackagingMetadata.md)

#### Defined in

[src/packagings_pb.ts:483](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L483)
