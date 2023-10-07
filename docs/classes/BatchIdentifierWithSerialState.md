[tcubesa-sdk](../README.md) / [Exports](../modules.md) / BatchIdentifierWithSerialState

# Class: BatchIdentifierWithSerialState

Describes the request payload that consists of the batch identifier along with the state of the serials

**`Generated`**

from message tcube.BatchIdentifierWithSerialState

## Hierarchy

- `Message`<[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)\>

  ↳ **`BatchIdentifierWithSerialState`**

## Table of contents

### Constructors

- [constructor](BatchIdentifierWithSerialState.md#constructor)

### Properties

- [batchUuid](BatchIdentifierWithSerialState.md#batchuuid)
- [serialState](BatchIdentifierWithSerialState.md#serialstate)
- [fields](BatchIdentifierWithSerialState.md#fields)
- [runtime](BatchIdentifierWithSerialState.md#runtime)
- [typeName](BatchIdentifierWithSerialState.md#typename)

### Methods

- [clone](BatchIdentifierWithSerialState.md#clone)
- [equals](BatchIdentifierWithSerialState.md#equals)
- [fromBinary](BatchIdentifierWithSerialState.md#frombinary)
- [fromJson](BatchIdentifierWithSerialState.md#fromjson)
- [fromJsonString](BatchIdentifierWithSerialState.md#fromjsonstring)
- [getType](BatchIdentifierWithSerialState.md#gettype)
- [toBinary](BatchIdentifierWithSerialState.md#tobinary)
- [toJSON](BatchIdentifierWithSerialState.md#tojson)
- [toJson](BatchIdentifierWithSerialState.md#tojson-1)
- [toJsonString](BatchIdentifierWithSerialState.md#tojsonstring)
- [equals](BatchIdentifierWithSerialState.md#equals-1)
- [fromBinary](BatchIdentifierWithSerialState.md#frombinary-1)
- [fromJson](BatchIdentifierWithSerialState.md#fromjson-1)
- [fromJsonString](BatchIdentifierWithSerialState.md#fromjsonstring-1)

## Constructors

### constructor

• **new BatchIdentifierWithSerialState**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)\> |

#### Overrides

Message&lt;BatchIdentifierWithSerialState\&gt;.constructor

#### Defined in

[src/batches_pb.ts:781](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L781)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

UUID of the batch

**`Generated`**

from field: string batch_uuid = 1;

#### Defined in

[src/batches_pb.ts:772](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L772)

___

### serialState

• **serialState**: [`SERIAL_STATE`](../enums/SERIAL_STATE.md) = `SERIAL_STATE.SERIAL_STATE_ANY_UNSPECIFIED`

State of the serials

**`Generated`**

from field: tcube.SERIAL_STATE serial_state = 2;

#### Defined in

[src/batches_pb.ts:779](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L779)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/batches_pb.ts:788](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L788)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/batches_pb.ts:786](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L786)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.BatchIdentifierWithSerialState"``

#### Defined in

[src/batches_pb.ts:787](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L787)

## Methods

### clone

▸ **clone**(): [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

Create a deep copy.

#### Returns

[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

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
| `other` | `undefined` \| ``null`` \| [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md) \| `PlainMessage`<[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

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

[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)\>

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
| `a` | `undefined` \| [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md) \| `PlainMessage`<[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)\> |
| `b` | `undefined` \| [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md) \| `PlainMessage`<[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)\> |

#### Returns

`boolean`

#### Defined in

[src/batches_pb.ts:805](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L805)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Defined in

[src/batches_pb.ts:793](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L793)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Defined in

[src/batches_pb.ts:797](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L797)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BatchIdentifierWithSerialState`](BatchIdentifierWithSerialState.md)

#### Defined in

[src/batches_pb.ts:801](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/batches_pb.ts#L801)
