[tcubesa-sdk](../README.md) / [Exports](../modules.md) / Serial

# Class: Serial

Describes the data structure of each serial on the platform

**`Generated`**

from message tcube.Serial

## Hierarchy

- `Message`<[`Serial`](Serial.md)\>

  ↳ **`Serial`**

## Table of contents

### Constructors

- [constructor](Serial.md#constructor)

### Properties

- [batchUuid](Serial.md#batchuuid)
- [code](Serial.md#code)
- [downloadCount](Serial.md#downloadcount)
- [entityUuid](Serial.md#entityuuid)
- [locationUuid](Serial.md#locationuuid)
- [metadata](Serial.md#metadata)
- [productUuid](Serial.md#productuuid)
- [state](Serial.md#state)
- [fields](Serial.md#fields)
- [runtime](Serial.md#runtime)
- [typeName](Serial.md#typename)

### Methods

- [clone](Serial.md#clone)
- [equals](Serial.md#equals)
- [fromBinary](Serial.md#frombinary)
- [fromJson](Serial.md#fromjson)
- [fromJsonString](Serial.md#fromjsonstring)
- [getType](Serial.md#gettype)
- [toBinary](Serial.md#tobinary)
- [toJSON](Serial.md#tojson)
- [toJson](Serial.md#tojson-1)
- [toJsonString](Serial.md#tojsonstring)
- [equals](Serial.md#equals-1)
- [fromBinary](Serial.md#frombinary-1)
- [fromJson](Serial.md#fromjson-1)
- [fromJsonString](Serial.md#fromjsonstring-1)

## Constructors

### constructor

• **new Serial**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Serial`](Serial.md)\> |

#### Overrides

Message&lt;Serial\&gt;.constructor

#### Defined in

[src/serials_pb.ts:518](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L518)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

UUID of the batch

**`Generated`**

from field: string batch_uuid = 11;

#### Defined in

[src/serials_pb.ts:495](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L495)

___

### code

• **code**: `string` = `""`

Code of the serial

**`Generated`**

from field: string code = 12;

#### Defined in

[src/serials_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L502)

___

### downloadCount

• **downloadCount**: `bigint` = `protoInt64.zero`

Stores the number of times that this serial has already been downloaded

**`Generated`**

from field: int64 download_count = 13;

#### Defined in

[src/serials_pb.ts:509](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L509)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_pb.ts:474](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L474)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:481](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L481)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/serials_pb.ts:467](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L467)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/serials_pb.ts:488](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L488)

___

### state

• **state**: [`SERIAL_STATE`](../enums/SERIAL_STATE.md) = `SERIAL_STATE.SERIAL_STATE_ANY_UNSPECIFIED`

The state of the serial

**`Generated`**

from field: tcube.SERIAL_STATE state = 20;

#### Defined in

[src/serials_pb.ts:516](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L516)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:525](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L525)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:523](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L523)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.Serial"``

#### Defined in

[src/serials_pb.ts:524](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L524)

## Methods

### clone

▸ **clone**(): [`Serial`](Serial.md)

Create a deep copy.

#### Returns

[`Serial`](Serial.md)

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
| `other` | `undefined` \| ``null`` \| [`Serial`](Serial.md) \| `PlainMessage`<[`Serial`](Serial.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Serial`](Serial.md)

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

[`Serial`](Serial.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Serial`](Serial.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Serial`](Serial.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Serial`](Serial.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Serial`](Serial.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Serial`](Serial.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Serial`](Serial.md)\>

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
| `a` | `undefined` \| [`Serial`](Serial.md) \| `PlainMessage`<[`Serial`](Serial.md)\> |
| `b` | `undefined` \| [`Serial`](Serial.md) \| `PlainMessage`<[`Serial`](Serial.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:548](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L548)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Serial`](Serial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Serial`](Serial.md)

#### Defined in

[src/serials_pb.ts:536](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L536)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Serial`](Serial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Serial`](Serial.md)

#### Defined in

[src/serials_pb.ts:540](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L540)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Serial`](Serial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Serial`](Serial.md)

#### Defined in

[src/serials_pb.ts:544](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/serials_pb.ts#L544)
