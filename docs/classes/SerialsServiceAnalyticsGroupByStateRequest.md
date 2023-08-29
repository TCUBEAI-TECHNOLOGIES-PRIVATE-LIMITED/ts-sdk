[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceAnalyticsGroupByStateRequest

# Class: SerialsServiceAnalyticsGroupByStateRequest

Describes the request payload for retrieving counts of serials in various states

**`Generated`**

from message tcube.SerialsServiceAnalyticsGroupByStateRequest

## Hierarchy

- `Message`<[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)\>

  ↳ **`SerialsServiceAnalyticsGroupByStateRequest`**

## Table of contents

### Constructors

- [constructor](SerialsServiceAnalyticsGroupByStateRequest.md#constructor)

### Properties

- [batchUuid](SerialsServiceAnalyticsGroupByStateRequest.md#batchuuid)
- [entityUuid](SerialsServiceAnalyticsGroupByStateRequest.md#entityuuid)
- [isActive](SerialsServiceAnalyticsGroupByStateRequest.md#isactive)
- [locationUuid](SerialsServiceAnalyticsGroupByStateRequest.md#locationuuid)
- [productUuid](SerialsServiceAnalyticsGroupByStateRequest.md#productuuid)
- [fields](SerialsServiceAnalyticsGroupByStateRequest.md#fields)
- [runtime](SerialsServiceAnalyticsGroupByStateRequest.md#runtime)
- [typeName](SerialsServiceAnalyticsGroupByStateRequest.md#typename)

### Methods

- [clone](SerialsServiceAnalyticsGroupByStateRequest.md#clone)
- [equals](SerialsServiceAnalyticsGroupByStateRequest.md#equals)
- [fromBinary](SerialsServiceAnalyticsGroupByStateRequest.md#frombinary)
- [fromJson](SerialsServiceAnalyticsGroupByStateRequest.md#fromjson)
- [fromJsonString](SerialsServiceAnalyticsGroupByStateRequest.md#fromjsonstring)
- [getType](SerialsServiceAnalyticsGroupByStateRequest.md#gettype)
- [toBinary](SerialsServiceAnalyticsGroupByStateRequest.md#tobinary)
- [toJSON](SerialsServiceAnalyticsGroupByStateRequest.md#tojson)
- [toJson](SerialsServiceAnalyticsGroupByStateRequest.md#tojson-1)
- [toJsonString](SerialsServiceAnalyticsGroupByStateRequest.md#tojsonstring)
- [equals](SerialsServiceAnalyticsGroupByStateRequest.md#equals-1)
- [fromBinary](SerialsServiceAnalyticsGroupByStateRequest.md#frombinary-1)
- [fromJson](SerialsServiceAnalyticsGroupByStateRequest.md#fromjson-1)
- [fromJsonString](SerialsServiceAnalyticsGroupByStateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceAnalyticsGroupByStateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)\> |

#### Overrides

Message&lt;SerialsServiceAnalyticsGroupByStateRequest\&gt;.constructor

#### Defined in

[src/serials_pb.ts:1235](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1235)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

UUID of the batch

**`Generated`**

from field: string batch_uuid = 11;

#### Defined in

[src/serials_pb.ts:1233](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1233)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/serials_pb.ts:1212](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1212)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/serials_pb.ts:1205](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1205)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:1219](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1219)

___

### productUuid

• **productUuid**: `string` = `""`

UUID of the product

**`Generated`**

from field: string product_uuid = 10;

#### Defined in

[src/serials_pb.ts:1226](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1226)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:1242](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1242)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:1240](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1240)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsServiceAnalyticsGroupByStateRequest"``

#### Defined in

[src/serials_pb.ts:1241](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1241)

## Methods

### clone

▸ **clone**(): [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

Create a deep copy.

#### Returns

[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md) \| `PlainMessage`<[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

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

[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)\>

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
| `a` | `undefined` \| [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md) \| `PlainMessage`<[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)\> |
| `b` | `undefined` \| [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md) \| `PlainMessage`<[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:1262](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1262)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Defined in

[src/serials_pb.ts:1250](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1250)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Defined in

[src/serials_pb.ts:1254](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1254)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceAnalyticsGroupByStateRequest`](SerialsServiceAnalyticsGroupByStateRequest.md)

#### Defined in

[src/serials_pb.ts:1258](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L1258)