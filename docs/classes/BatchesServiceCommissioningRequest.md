[tcubesa-sdk](../README.md) / [Exports](../modules.md) / BatchesServiceCommissioningRequest

# Class: BatchesServiceCommissioningRequest

Describes the payload that is used to decommission serials within a batch

**`Generated`**

from message tcube.BatchesServiceCommissioningRequest

## Hierarchy

- `Message`<[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)\>

  ↳ **`BatchesServiceCommissioningRequest`**

## Table of contents

### Constructors

- [constructor](BatchesServiceCommissioningRequest.md#constructor)

### Properties

- [batchUuid](BatchesServiceCommissioningRequest.md#batchuuid)
- [latitude](BatchesServiceCommissioningRequest.md#latitude)
- [longitude](BatchesServiceCommissioningRequest.md#longitude)
- [userComment](BatchesServiceCommissioningRequest.md#usercomment)
- [zoneUuid](BatchesServiceCommissioningRequest.md#zoneuuid)
- [fields](BatchesServiceCommissioningRequest.md#fields)
- [runtime](BatchesServiceCommissioningRequest.md#runtime)
- [typeName](BatchesServiceCommissioningRequest.md#typename)

### Methods

- [clone](BatchesServiceCommissioningRequest.md#clone)
- [equals](BatchesServiceCommissioningRequest.md#equals)
- [fromBinary](BatchesServiceCommissioningRequest.md#frombinary)
- [fromJson](BatchesServiceCommissioningRequest.md#fromjson)
- [fromJsonString](BatchesServiceCommissioningRequest.md#fromjsonstring)
- [getType](BatchesServiceCommissioningRequest.md#gettype)
- [toBinary](BatchesServiceCommissioningRequest.md#tobinary)
- [toJSON](BatchesServiceCommissioningRequest.md#tojson)
- [toJson](BatchesServiceCommissioningRequest.md#tojson-1)
- [toJsonString](BatchesServiceCommissioningRequest.md#tojsonstring)
- [equals](BatchesServiceCommissioningRequest.md#equals-1)
- [fromBinary](BatchesServiceCommissioningRequest.md#frombinary-1)
- [fromJson](BatchesServiceCommissioningRequest.md#fromjson-1)
- [fromJsonString](BatchesServiceCommissioningRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new BatchesServiceCommissioningRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)\> |

#### Overrides

Message&lt;BatchesServiceCommissioningRequest\&gt;.constructor

#### Defined in

[src/batches_pb.ts:728](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L728)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

The UUID of the batch that needs to be decommissioned

**`Generated`**

from field: string batch_uuid = 10;

#### Defined in

[src/batches_pb.ts:705](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L705)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this activity was registered

**`Generated`**

from field: double latitude = 13;

#### Defined in

[src/batches_pb.ts:719](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L719)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this activity was registered

**`Generated`**

from field: double longitude = 14;

#### Defined in

[src/batches_pb.ts:726](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L726)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/batches_pb.ts:698](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L698)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone (this will be autoselected at the API, but keeping it here for future extension)

**`Generated`**

from field: string zone_uuid = 12;

#### Defined in

[src/batches_pb.ts:712](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L712)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:735](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L735)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:733](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L733)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.BatchesServiceCommissioningRequest"``

#### Defined in

[src/batches_pb.ts:734](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L734)

## Methods

### clone

▸ **clone**(): [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

Create a deep copy.

#### Returns

[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md) \| `PlainMessage`<[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

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

[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)\>

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
| `a` | `undefined` \| [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md) \| `PlainMessage`<[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)\> |
| `b` | `undefined` \| [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md) \| `PlainMessage`<[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:755](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L755)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Defined in

[src/batches_pb.ts:743](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L743)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Defined in

[src/batches_pb.ts:747](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L747)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchesServiceCommissioningRequest`](BatchesServiceCommissioningRequest.md)

#### Defined in

[src/batches_pb.ts:751](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L751)
