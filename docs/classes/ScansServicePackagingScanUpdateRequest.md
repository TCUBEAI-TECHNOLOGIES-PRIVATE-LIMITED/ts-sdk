[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ScansServicePackagingScanUpdateRequest

# Class: ScansServicePackagingScanUpdateRequest

Describes the data structure to perform the update operation on a packaging scan

**`Generated`**

from message tcube.ScansServicePackagingScanUpdateRequest

## Hierarchy

- `Message`<[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)\>

  ↳ **`ScansServicePackagingScanUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ScansServicePackagingScanUpdateRequest.md#constructor)

### Properties

- [inferredFrom](ScansServicePackagingScanUpdateRequest.md#inferredfrom)
- [latitude](ScansServicePackagingScanUpdateRequest.md#latitude)
- [longitude](ScansServicePackagingScanUpdateRequest.md#longitude)
- [uuid](ScansServicePackagingScanUpdateRequest.md#uuid)
- [fields](ScansServicePackagingScanUpdateRequest.md#fields)
- [runtime](ScansServicePackagingScanUpdateRequest.md#runtime)
- [typeName](ScansServicePackagingScanUpdateRequest.md#typename)

### Methods

- [clone](ScansServicePackagingScanUpdateRequest.md#clone)
- [equals](ScansServicePackagingScanUpdateRequest.md#equals)
- [fromBinary](ScansServicePackagingScanUpdateRequest.md#frombinary)
- [fromJson](ScansServicePackagingScanUpdateRequest.md#fromjson)
- [fromJsonString](ScansServicePackagingScanUpdateRequest.md#fromjsonstring)
- [getType](ScansServicePackagingScanUpdateRequest.md#gettype)
- [toBinary](ScansServicePackagingScanUpdateRequest.md#tobinary)
- [toJSON](ScansServicePackagingScanUpdateRequest.md#tojson)
- [toJson](ScansServicePackagingScanUpdateRequest.md#tojson-1)
- [toJsonString](ScansServicePackagingScanUpdateRequest.md#tojsonstring)
- [equals](ScansServicePackagingScanUpdateRequest.md#equals-1)
- [fromBinary](ScansServicePackagingScanUpdateRequest.md#frombinary-1)
- [fromJson](ScansServicePackagingScanUpdateRequest.md#fromjson-1)
- [fromJsonString](ScansServicePackagingScanUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServicePackagingScanUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)\> |

#### Overrides

Message&lt;ScansServicePackagingScanUpdateRequest\&gt;.constructor

#### Defined in

[src/scans_pb.ts:436](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L436)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: tcube.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:434](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L434)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:420](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L420)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:427](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L427)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/scans_pb.ts:413](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L413)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:443](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L443)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:441](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L441)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ScansServicePackagingScanUpdateRequest"``

#### Defined in

[src/scans_pb.ts:442](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L442)

## Methods

### clone

▸ **clone**(): [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

Create a deep copy.

#### Returns

[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md) \| `PlainMessage`<[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

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

[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md) \| `PlainMessage`<[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)\> |
| `b` | `undefined` \| [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md) \| `PlainMessage`<[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:462](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L462)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:450](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L450)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:454](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L454)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServicePackagingScanUpdateRequest`](ScansServicePackagingScanUpdateRequest.md)

#### Defined in

[src/scans_pb.ts:458](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L458)
