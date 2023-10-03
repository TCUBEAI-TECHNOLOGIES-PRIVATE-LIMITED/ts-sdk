[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PackagingsServiceCreateRequest

# Class: PackagingsServiceCreateRequest

Describes the necessary data structure during creation of a packaging

**`Generated`**

from message tcube.PackagingsServiceCreateRequest

## Hierarchy

- `Message`<[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)\>

  ↳ **`PackagingsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PackagingsServiceCreateRequest.md#constructor)

### Properties

- [batchUuid](PackagingsServiceCreateRequest.md#batchuuid)
- [description](PackagingsServiceCreateRequest.md#description)
- [entityUuid](PackagingsServiceCreateRequest.md#entityuuid)
- [latitude](PackagingsServiceCreateRequest.md#latitude)
- [locationUuid](PackagingsServiceCreateRequest.md#locationuuid)
- [longitude](PackagingsServiceCreateRequest.md#longitude)
- [maxCount](PackagingsServiceCreateRequest.md#maxcount)
- [name](PackagingsServiceCreateRequest.md#name)
- [printEncodingType](PackagingsServiceCreateRequest.md#printencodingtype)
- [productUuid](PackagingsServiceCreateRequest.md#productuuid)
- [userComment](PackagingsServiceCreateRequest.md#usercomment)
- [zoneUuid](PackagingsServiceCreateRequest.md#zoneuuid)
- [fields](PackagingsServiceCreateRequest.md#fields)
- [runtime](PackagingsServiceCreateRequest.md#runtime)
- [typeName](PackagingsServiceCreateRequest.md#typename)

### Methods

- [clone](PackagingsServiceCreateRequest.md#clone)
- [equals](PackagingsServiceCreateRequest.md#equals)
- [fromBinary](PackagingsServiceCreateRequest.md#frombinary)
- [fromJson](PackagingsServiceCreateRequest.md#fromjson)
- [fromJsonString](PackagingsServiceCreateRequest.md#fromjsonstring)
- [getType](PackagingsServiceCreateRequest.md#gettype)
- [toBinary](PackagingsServiceCreateRequest.md#tobinary)
- [toJSON](PackagingsServiceCreateRequest.md#tojson)
- [toJson](PackagingsServiceCreateRequest.md#tojson-1)
- [toJsonString](PackagingsServiceCreateRequest.md#tojsonstring)
- [equals](PackagingsServiceCreateRequest.md#equals-1)
- [fromBinary](PackagingsServiceCreateRequest.md#frombinary-1)
- [fromJson](PackagingsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PackagingsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;PackagingsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:223](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L223)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

Optional UUID of the associated batch

**`Generated`**

from field: string batch_uuid = 11;

#### Defined in

[src/packagings_pb.ts:179](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L179)

___

### description

• **description**: `string` = `""`

Description of the packaging

**`Generated`**

from field: string description = 13;

#### Defined in

[src/packagings_pb.ts:193](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L193)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/packagings_pb.ts:151](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L151)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this packaging was created

**`Generated`**

from field: double latitude = 15;

#### Defined in

[src/packagings_pb.ts:207](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L207)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 8;

#### Defined in

[src/packagings_pb.ts:158](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L158)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this packaging was created

**`Generated`**

from field: double longitude = 16;

#### Defined in

[src/packagings_pb.ts:214](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L214)

___

### maxCount

• **maxCount**: `bigint` = `protoInt64.zero`

The maximum number of items that can be added to a packaging, with 0 denoting no limit

**`Generated`**

from field: int64 max_count = 14;

#### Defined in

[src/packagings_pb.ts:200](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L200)

___

### name

• **name**: `string` = `""`

The name of the packaging

**`Generated`**

from field: string name = 12;

#### Defined in

[src/packagings_pb.ts:186](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L186)

___

### printEncodingType

• **printEncodingType**: [`PRINT_ENCODING_TYPE_FOR_PACKAGING`](../enums/PRINT_ENCODING_TYPE_FOR_PACKAGING.md) = `PRINT_ENCODING_TYPE_FOR_PACKAGING.PRINT_ENCODING_TYPE_FOR_PACKAGING_HRI_UNSPECIFIED`

The type of encoding

**`Generated`**

from field: tcube.PRINT_ENCODING_TYPE_FOR_PACKAGING print_encoding_type = 18;

#### Defined in

[src/packagings_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L221)

___

### productUuid

• **productUuid**: `string` = `""`

Optional UUID of the associated product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/packagings_pb.ts:172](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L172)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/packagings_pb.ts:144](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L144)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 9;

#### Defined in

[src/packagings_pb.ts:165](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L165)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:230](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L230)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:228](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L228)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PackagingsServiceCreateRequest"``

#### Defined in

[src/packagings_pb.ts:229](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L229)

## Methods

### clone

▸ **clone**(): [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md) \| `PlainMessage`<[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

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

[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md) \| `PlainMessage`<[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md) \| `PlainMessage`<[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:257](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L257)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Defined in

[src/packagings_pb.ts:245](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L245)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Defined in

[src/packagings_pb.ts:249](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L249)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceCreateRequest`](PackagingsServiceCreateRequest.md)

#### Defined in

[src/packagings_pb.ts:253](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L253)
