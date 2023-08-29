[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PackagingSerial

# Class: PackagingSerial

Describes the data structure of each packaging serial

**`Generated`**

from message tcube.PackagingSerial

## Hierarchy

- `Message`<[`PackagingSerial`](PackagingSerial.md)\>

  ↳ **`PackagingSerial`**

## Table of contents

### Constructors

- [constructor](PackagingSerial.md#constructor)

### Properties

- [entityUuid](PackagingSerial.md#entityuuid)
- [latitude](PackagingSerial.md#latitude)
- [locationUuid](PackagingSerial.md#locationuuid)
- [longitude](PackagingSerial.md#longitude)
- [metadata](PackagingSerial.md#metadata)
- [packagingUuid](PackagingSerial.md#packaginguuid)
- [serialUuid](PackagingSerial.md#serialuuid)
- [zoneUuid](PackagingSerial.md#zoneuuid)
- [fields](PackagingSerial.md#fields)
- [runtime](PackagingSerial.md#runtime)
- [typeName](PackagingSerial.md#typename)

### Methods

- [clone](PackagingSerial.md#clone)
- [equals](PackagingSerial.md#equals)
- [fromBinary](PackagingSerial.md#frombinary)
- [fromJson](PackagingSerial.md#fromjson)
- [fromJsonString](PackagingSerial.md#fromjsonstring)
- [getType](PackagingSerial.md#gettype)
- [toBinary](PackagingSerial.md#tobinary)
- [toJSON](PackagingSerial.md#tojson)
- [toJson](PackagingSerial.md#tojson-1)
- [toJsonString](PackagingSerial.md#tojsonstring)
- [equals](PackagingSerial.md#equals-1)
- [fromBinary](PackagingSerial.md#frombinary-1)
- [fromJson](PackagingSerial.md#fromjson-1)
- [fromJsonString](PackagingSerial.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingSerial**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingSerial`](PackagingSerial.md)\> |

#### Overrides

Message&lt;PackagingSerial\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:595](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L595)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/packagings_pb.ts:551](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L551)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this packaging was created

**`Generated`**

from field: double latitude = 12;

#### Defined in

[src/packagings_pb.ts:586](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L586)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/packagings_pb.ts:558](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L558)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this packaging was created

**`Generated`**

from field: double longitude = 13;

#### Defined in

[src/packagings_pb.ts:593](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L593)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/packagings_pb.ts:544](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L544)

___

### packagingUuid

• **packagingUuid**: `string` = `""`

UUID of the packaging

**`Generated`**

from field: string packaging_uuid = 10;

#### Defined in

[src/packagings_pb.ts:572](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L572)

___

### serialUuid

• **serialUuid**: `string` = `""`

UUID of the serial

**`Generated`**

from field: string serial_uuid = 11;

#### Defined in

[src/packagings_pb.ts:579](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L579)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 9;

#### Defined in

[src/packagings_pb.ts:565](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L565)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:602](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L602)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:600](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L600)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PackagingSerial"``

#### Defined in

[src/packagings_pb.ts:601](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L601)

## Methods

### clone

▸ **clone**(): [`PackagingSerial`](PackagingSerial.md)

Create a deep copy.

#### Returns

[`PackagingSerial`](PackagingSerial.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingSerial`](PackagingSerial.md) \| `PlainMessage`<[`PackagingSerial`](PackagingSerial.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingSerial`](PackagingSerial.md)

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

[`PackagingSerial`](PackagingSerial.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingSerial`](PackagingSerial.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingSerial`](PackagingSerial.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingSerial`](PackagingSerial.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingSerial`](PackagingSerial.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingSerial`](PackagingSerial.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingSerial`](PackagingSerial.md)\>

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
| `a` | `undefined` \| [`PackagingSerial`](PackagingSerial.md) \| `PlainMessage`<[`PackagingSerial`](PackagingSerial.md)\> |
| `b` | `undefined` \| [`PackagingSerial`](PackagingSerial.md) \| `PlainMessage`<[`PackagingSerial`](PackagingSerial.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:625](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L625)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingSerial`](PackagingSerial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingSerial`](PackagingSerial.md)

#### Defined in

[src/packagings_pb.ts:613](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L613)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingSerial`](PackagingSerial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingSerial`](PackagingSerial.md)

#### Defined in

[src/packagings_pb.ts:617](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L617)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingSerial`](PackagingSerial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingSerial`](PackagingSerial.md)

#### Defined in

[src/packagings_pb.ts:621](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/packagings_pb.ts#L621)
