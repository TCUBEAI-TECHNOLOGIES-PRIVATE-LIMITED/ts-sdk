[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ScansServicePackagingScanCreateRequest

# Class: ScansServicePackagingScanCreateRequest

Describes the data structure to perform the create operation on a packaging scan

**`Generated`**

from message tcube.ScansServicePackagingScanCreateRequest

## Hierarchy

- `Message`<[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)\>

  ↳ **`ScansServicePackagingScanCreateRequest`**

## Table of contents

### Constructors

- [constructor](ScansServicePackagingScanCreateRequest.md#constructor)

### Properties

- [inferredFrom](ScansServicePackagingScanCreateRequest.md#inferredfrom)
- [latitude](ScansServicePackagingScanCreateRequest.md#latitude)
- [longitude](ScansServicePackagingScanCreateRequest.md#longitude)
- [packagingUuid](ScansServicePackagingScanCreateRequest.md#packaginguuid)
- [fields](ScansServicePackagingScanCreateRequest.md#fields)
- [runtime](ScansServicePackagingScanCreateRequest.md#runtime)
- [typeName](ScansServicePackagingScanCreateRequest.md#typename)

### Methods

- [clone](ScansServicePackagingScanCreateRequest.md#clone)
- [equals](ScansServicePackagingScanCreateRequest.md#equals)
- [fromBinary](ScansServicePackagingScanCreateRequest.md#frombinary)
- [fromJson](ScansServicePackagingScanCreateRequest.md#fromjson)
- [fromJsonString](ScansServicePackagingScanCreateRequest.md#fromjsonstring)
- [getType](ScansServicePackagingScanCreateRequest.md#gettype)
- [toBinary](ScansServicePackagingScanCreateRequest.md#tobinary)
- [toJSON](ScansServicePackagingScanCreateRequest.md#tojson)
- [toJson](ScansServicePackagingScanCreateRequest.md#tojson-1)
- [toJsonString](ScansServicePackagingScanCreateRequest.md#tojsonstring)
- [equals](ScansServicePackagingScanCreateRequest.md#equals-1)
- [fromBinary](ScansServicePackagingScanCreateRequest.md#frombinary-1)
- [fromJson](ScansServicePackagingScanCreateRequest.md#fromjson-1)
- [fromJsonString](ScansServicePackagingScanCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServicePackagingScanCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)\> |

#### Overrides

Message&lt;ScansServicePackagingScanCreateRequest\&gt;.constructor

#### Defined in

[src/scans_pb.ts:370](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L370)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: tcube.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:368](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L368)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:354](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L354)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:361](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L361)

___

### packagingUuid

• **packagingUuid**: `string` = `""`

The UUID of the packaging that needs to be updated

**`Generated`**

from field: string packaging_uuid = 10;

#### Defined in

[src/scans_pb.ts:347](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L347)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:377](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L377)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:375](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L375)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ScansServicePackagingScanCreateRequest"``

#### Defined in

[src/scans_pb.ts:376](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L376)

## Methods

### clone

▸ **clone**(): [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

Create a deep copy.

#### Returns

[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md) \| `PlainMessage`<[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

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

[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)\>

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
| `a` | `undefined` \| [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md) \| `PlainMessage`<[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)\> |
| `b` | `undefined` \| [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md) \| `PlainMessage`<[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:396](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L396)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:384](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L384)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:388](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L388)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanCreateRequest`](ScansServicePackagingScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:392](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L392)
