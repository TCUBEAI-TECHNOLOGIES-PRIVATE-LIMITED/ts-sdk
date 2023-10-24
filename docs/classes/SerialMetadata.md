[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialMetadata

# Class: SerialMetadata

Describes the data structure of each serial with its relevant metadata

**`Generated`**

from message scanswift.SerialMetadata

## Hierarchy

- `Message`<[`SerialMetadata`](SerialMetadata.md)\>

  ↳ **`SerialMetadata`**

## Table of contents

### Constructors

- [constructor](SerialMetadata.md#constructor)

### Properties

- [batchCode](SerialMetadata.md#batchcode)
- [batchName](SerialMetadata.md#batchname)
- [entity](SerialMetadata.md#entity)
- [expiryTimestamp](SerialMetadata.md#expirytimestamp)
- [location](SerialMetadata.md#location)
- [product](SerialMetadata.md#product)
- [qrString](SerialMetadata.md#qrstring)
- [serial](SerialMetadata.md#serial)
- [fields](SerialMetadata.md#fields)
- [runtime](SerialMetadata.md#runtime)
- [typeName](SerialMetadata.md#typename)

### Methods

- [clone](SerialMetadata.md#clone)
- [equals](SerialMetadata.md#equals)
- [fromBinary](SerialMetadata.md#frombinary)
- [fromJson](SerialMetadata.md#fromjson)
- [fromJsonString](SerialMetadata.md#fromjsonstring)
- [getType](SerialMetadata.md#gettype)
- [toBinary](SerialMetadata.md#tobinary)
- [toJSON](SerialMetadata.md#tojson)
- [toJson](SerialMetadata.md#tojson-1)
- [toJsonString](SerialMetadata.md#tojsonstring)
- [equals](SerialMetadata.md#equals-1)
- [fromBinary](SerialMetadata.md#frombinary-1)
- [fromJson](SerialMetadata.md#fromjson-1)
- [fromJsonString](SerialMetadata.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialMetadata**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialMetadata`](SerialMetadata.md)\> |

#### Overrides

Message&lt;SerialMetadata\&gt;.constructor

#### Defined in

[src/serials_pb.ts:627](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L627)

## Properties

### batchCode

• **batchCode**: `string` = `""`

Stores the batch code

**`Generated`**

from field: string batch_code = 21;

#### Defined in

[src/serials_pb.ts:611](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L611)

___

### batchName

• **batchName**: `string` = `""`

Stores the batch name

**`Generated`**

from field: string batch_name = 20;

#### Defined in

[src/serials_pb.ts:604](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L604)

___

### entity

• `Optional` **entity**: [`Entity`](Entity.md)

Stores the entity info

**`Generated`**

from field: scanswift.Entity entity = 40;

#### Defined in

[src/serials_pb.ts:625](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L625)

___

### expiryTimestamp

• **expiryTimestamp**: `bigint` = `protoInt64.zero`

Stores the expiry timestamp of the serial

**`Generated`**

from field: int64 expiry_timestamp = 2;

#### Defined in

[src/serials_pb.ts:583](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L583)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Stores the location info

**`Generated`**

from field: scanswift.Location location = 30;

#### Defined in

[src/serials_pb.ts:618](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L618)

___

### product

• `Optional` **product**: [`Product`](Product.md)

Stores the product info

**`Generated`**

from field: scanswift.Product product = 10;

#### Defined in

[src/serials_pb.ts:597](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L597)

___

### qrString

• **qrString**: `string` = `""`

Stores the string that will be used to generate the QR code

**`Generated`**

from field: string qr_string = 3;

#### Defined in

[src/serials_pb.ts:590](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L590)

___

### serial

• `Optional` **serial**: [`Serial`](Serial.md)

Stores the serial info

**`Generated`**

from field: scanswift.Serial serial = 1;

#### Defined in

[src/serials_pb.ts:576](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L576)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:634](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L634)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:632](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L632)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialMetadata"``

#### Defined in

[src/serials_pb.ts:633](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L633)

## Methods

### clone

▸ **clone**(): [`SerialMetadata`](SerialMetadata.md)

Create a deep copy.

#### Returns

[`SerialMetadata`](SerialMetadata.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialMetadata`](SerialMetadata.md) \| `PlainMessage`<[`SerialMetadata`](SerialMetadata.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialMetadata`](SerialMetadata.md)

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

[`SerialMetadata`](SerialMetadata.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialMetadata`](SerialMetadata.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialMetadata`](SerialMetadata.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialMetadata`](SerialMetadata.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialMetadata`](SerialMetadata.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialMetadata`](SerialMetadata.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialMetadata`](SerialMetadata.md)\>

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
| `a` | `undefined` \| [`SerialMetadata`](SerialMetadata.md) \| `PlainMessage`<[`SerialMetadata`](SerialMetadata.md)\> |
| `b` | `undefined` \| [`SerialMetadata`](SerialMetadata.md) \| `PlainMessage`<[`SerialMetadata`](SerialMetadata.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:657](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L657)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialMetadata`](SerialMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialMetadata`](SerialMetadata.md)

#### Defined in

[src/serials_pb.ts:645](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L645)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialMetadata`](SerialMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialMetadata`](SerialMetadata.md)

#### Defined in

[src/serials_pb.ts:649](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L649)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialMetadata`](SerialMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialMetadata`](SerialMetadata.md)

#### Defined in

[src/serials_pb.ts:653](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L653)
