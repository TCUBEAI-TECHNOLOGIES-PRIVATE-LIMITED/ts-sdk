[scanswift-sdk](../README.md) / [Exports](../modules.md) / Packaging

# Class: Packaging

Describes the data structure of each packaging on the platform

**`Generated`**

from message scanswift.Packaging

## Hierarchy

- `Message`<[`Packaging`](Packaging.md)\>

  ↳ **`Packaging`**

## Table of contents

### Constructors

- [constructor](Packaging.md#constructor)

### Properties

- [batchUuid](Packaging.md#batchuuid)
- [code](Packaging.md#code)
- [description](Packaging.md#description)
- [downloadCount](Packaging.md#downloadcount)
- [entityUuid](Packaging.md#entityuuid)
- [isDownloaded](Packaging.md#isdownloaded)
- [latitude](Packaging.md#latitude)
- [locationUuid](Packaging.md#locationuuid)
- [longitude](Packaging.md#longitude)
- [maxCount](Packaging.md#maxcount)
- [metadata](Packaging.md#metadata)
- [name](Packaging.md#name)
- [printEncodingType](Packaging.md#printencodingtype)
- [productUuid](Packaging.md#productuuid)
- [state](Packaging.md#state)
- [zoneUuid](Packaging.md#zoneuuid)
- [fields](Packaging.md#fields)
- [runtime](Packaging.md#runtime)
- [typeName](Packaging.md#typename)

### Methods

- [clone](Packaging.md#clone)
- [equals](Packaging.md#equals)
- [fromBinary](Packaging.md#frombinary)
- [fromJson](Packaging.md#fromjson)
- [fromJsonString](Packaging.md#fromjsonstring)
- [getType](Packaging.md#gettype)
- [toBinary](Packaging.md#tobinary)
- [toJSON](Packaging.md#tojson)
- [toJson](Packaging.md#tojson-1)
- [toJsonString](Packaging.md#tojsonstring)
- [equals](Packaging.md#equals-1)
- [fromBinary](Packaging.md#frombinary-1)
- [fromJson](Packaging.md#fromjson-1)
- [fromJsonString](Packaging.md#fromjsonstring-1)

## Constructors

### constructor

• **new Packaging**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Packaging`](Packaging.md)\> |

#### Overrides

Message&lt;Packaging\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:383](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L383)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

Optional UUID of the associated batch

**`Generated`**

from field: string batch_uuid = 11;

#### Defined in

[src/packagings_pb.ts:311](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L311)

___

### code

• **code**: `string` = `""`

Code of the packaging

**`Generated`**

from field: string code = 13;

#### Defined in

[src/packagings_pb.ts:325](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L325)

___

### description

• **description**: `string` = `""`

Description of the packaging

**`Generated`**

from field: string description = 14;

#### Defined in

[src/packagings_pb.ts:332](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L332)

___

### downloadCount

• **downloadCount**: `bigint` = `protoInt64.zero`

Stores the number of times that this packaging has already been downloaded

**`Generated`**

from field: int64 download_count = 31;

#### Defined in

[src/packagings_pb.ts:381](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L381)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/packagings_pb.ts:283](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L283)

___

### isDownloaded

• **isDownloaded**: `boolean` = `false`

Stores if the packaging has already been downloaded

**`Generated`**

from field: bool is_downloaded = 30;

#### Defined in

[src/packagings_pb.ts:374](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L374)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this packaging was created

**`Generated`**

from field: double latitude = 16;

#### Defined in

[src/packagings_pb.ts:346](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L346)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/packagings_pb.ts:290](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L290)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this packaging was created

**`Generated`**

from field: double longitude = 17;

#### Defined in

[src/packagings_pb.ts:353](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L353)

___

### maxCount

• **maxCount**: `bigint` = `protoInt64.zero`

The maximum number of items that can be added to a packaging, with 0 denoting no limit

**`Generated`**

from field: int64 max_count = 15;

#### Defined in

[src/packagings_pb.ts:339](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L339)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/packagings_pb.ts:276](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L276)

___

### name

• **name**: `string` = `""`

The name of the packaging

**`Generated`**

from field: string name = 12;

#### Defined in

[src/packagings_pb.ts:318](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L318)

___

### printEncodingType

• **printEncodingType**: [`PRINT_ENCODING_TYPE_FOR_PACKAGING`](../enums/PRINT_ENCODING_TYPE_FOR_PACKAGING.md) = `PRINT_ENCODING_TYPE_FOR_PACKAGING.PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED`

The type of encoding

**`Generated`**

from field: scanswift.PRINT_ENCODING_TYPE_FOR_PACKAGING print_encoding_type = 18;

#### Defined in

[src/packagings_pb.ts:360](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L360)

___

### productUuid

• **productUuid**: `string` = `""`

Optional UUID of the associated product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/packagings_pb.ts:304](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L304)

___

### state

• **state**: [`PACKAGING_STATE`](../enums/PACKAGING_STATE.md) = `PACKAGING_STATE.PACKAGING_STATE_ANY_UNSPECIFIED`

The state of the packaging

**`Generated`**

from field: scanswift.PACKAGING_STATE state = 20;

#### Defined in

[src/packagings_pb.ts:367](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L367)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 9;

#### Defined in

[src/packagings_pb.ts:297](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L297)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:390](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L390)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:388](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L388)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.Packaging"``

#### Defined in

[src/packagings_pb.ts:389](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L389)

## Methods

### clone

▸ **clone**(): [`Packaging`](Packaging.md)

Create a deep copy.

#### Returns

[`Packaging`](Packaging.md)

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
| `other` | `undefined` \| ``null`` \| [`Packaging`](Packaging.md) \| `PlainMessage`<[`Packaging`](Packaging.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Packaging`](Packaging.md)

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

[`Packaging`](Packaging.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Packaging`](Packaging.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Packaging`](Packaging.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Packaging`](Packaging.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Packaging`](Packaging.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Packaging`](Packaging.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Packaging`](Packaging.md)\>

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
| `a` | `undefined` \| [`Packaging`](Packaging.md) \| `PlainMessage`<[`Packaging`](Packaging.md)\> |
| `b` | `undefined` \| [`Packaging`](Packaging.md) \| `PlainMessage`<[`Packaging`](Packaging.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:421](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L421)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Packaging`](Packaging.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Packaging`](Packaging.md)

#### Defined in

[src/packagings_pb.ts:409](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L409)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Packaging`](Packaging.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Packaging`](Packaging.md)

#### Defined in

[src/packagings_pb.ts:413](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L413)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Packaging`](Packaging.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Packaging`](Packaging.md)

#### Defined in

[src/packagings_pb.ts:417](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L417)
