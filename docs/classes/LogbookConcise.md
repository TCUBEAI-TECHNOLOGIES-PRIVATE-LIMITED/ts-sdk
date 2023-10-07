[tcubesa-sdk](../README.md) / [Exports](../modules.md) / LogbookConcise

# Class: LogbookConcise

Describes the list of logs from the logbook that's sent as a response to a logbook query

**`Generated`**

from message tcube.LogbookConcise

## Hierarchy

- `Message`<[`LogbookConcise`](LogbookConcise.md)\>

  ↳ **`LogbookConcise`**

## Table of contents

### Constructors

- [constructor](LogbookConcise.md#constructor)

### Properties

- [logs](LogbookConcise.md#logs)
- [fields](LogbookConcise.md#fields)
- [runtime](LogbookConcise.md#runtime)
- [typeName](LogbookConcise.md#typename)

### Methods

- [clone](LogbookConcise.md#clone)
- [equals](LogbookConcise.md#equals)
- [fromBinary](LogbookConcise.md#frombinary)
- [fromJson](LogbookConcise.md#fromjson)
- [fromJsonString](LogbookConcise.md#fromjsonstring)
- [getType](LogbookConcise.md#gettype)
- [toBinary](LogbookConcise.md#tobinary)
- [toJSON](LogbookConcise.md#tojson)
- [toJson](LogbookConcise.md#tojson-1)
- [toJsonString](LogbookConcise.md#tojsonstring)
- [equals](LogbookConcise.md#equals-1)
- [fromBinary](LogbookConcise.md#frombinary-1)
- [fromJson](LogbookConcise.md#fromjson-1)
- [fromJsonString](LogbookConcise.md#fromjsonstring-1)

## Constructors

### constructor

• **new LogbookConcise**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LogbookConcise`](LogbookConcise.md)\> |

#### Overrides

Message&lt;LogbookConcise\&gt;.constructor

#### Defined in

[src/base_pb.ts:1360](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1360)

## Properties

### logs

• **logs**: [`LogbookLogConcise`](LogbookLogConcise.md)[] = `[]`

List of logs

**`Generated`**

from field: repeated tcube.LogbookLogConcise logs = 1;

#### Defined in

[src/base_pb.ts:1358](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1358)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1367](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1367)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1365](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1365)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.LogbookConcise"``

#### Defined in

[src/base_pb.ts:1366](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1366)

## Methods

### clone

▸ **clone**(): [`LogbookConcise`](LogbookConcise.md)

Create a deep copy.

#### Returns

[`LogbookConcise`](LogbookConcise.md)

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
| `other` | `undefined` \| ``null`` \| [`LogbookConcise`](LogbookConcise.md) \| `PlainMessage`<[`LogbookConcise`](LogbookConcise.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LogbookConcise`](LogbookConcise.md)

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

[`LogbookConcise`](LogbookConcise.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LogbookConcise`](LogbookConcise.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookConcise`](LogbookConcise.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LogbookConcise`](LogbookConcise.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookConcise`](LogbookConcise.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LogbookConcise`](LogbookConcise.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LogbookConcise`](LogbookConcise.md)\>

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
| `a` | `undefined` \| [`LogbookConcise`](LogbookConcise.md) \| `PlainMessage`<[`LogbookConcise`](LogbookConcise.md)\> |
| `b` | `undefined` \| [`LogbookConcise`](LogbookConcise.md) \| `PlainMessage`<[`LogbookConcise`](LogbookConcise.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1383](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1383)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LogbookConcise`](LogbookConcise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LogbookConcise`](LogbookConcise.md)

#### Defined in

[src/base_pb.ts:1371](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1371)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LogbookConcise`](LogbookConcise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookConcise`](LogbookConcise.md)

#### Defined in

[src/base_pb.ts:1375](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1375)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LogbookConcise`](LogbookConcise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookConcise`](LogbookConcise.md)

#### Defined in

[src/base_pb.ts:1379](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L1379)
