[tcubesa-sdk](../README.md) / [Exports](../modules.md) / LogbookComplete

# Class: LogbookComplete

Describes the complete list of logs from the logbook that's sent as a response to a logbook query

**`Generated`**

from message tcube.LogbookComplete

## Hierarchy

- `Message`<[`LogbookComplete`](LogbookComplete.md)\>

  ↳ **`LogbookComplete`**

## Table of contents

### Constructors

- [constructor](LogbookComplete.md#constructor)

### Properties

- [logs](LogbookComplete.md#logs)
- [fields](LogbookComplete.md#fields)
- [runtime](LogbookComplete.md#runtime)
- [typeName](LogbookComplete.md#typename)

### Methods

- [clone](LogbookComplete.md#clone)
- [equals](LogbookComplete.md#equals)
- [fromBinary](LogbookComplete.md#frombinary)
- [fromJson](LogbookComplete.md#fromjson)
- [fromJsonString](LogbookComplete.md#fromjsonstring)
- [getType](LogbookComplete.md#gettype)
- [toBinary](LogbookComplete.md#tobinary)
- [toJSON](LogbookComplete.md#tojson)
- [toJson](LogbookComplete.md#tojson-1)
- [toJsonString](LogbookComplete.md#tojsonstring)
- [equals](LogbookComplete.md#equals-1)
- [fromBinary](LogbookComplete.md#frombinary-1)
- [fromJson](LogbookComplete.md#fromjson-1)
- [fromJsonString](LogbookComplete.md#fromjsonstring-1)

## Constructors

### constructor

• **new LogbookComplete**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LogbookComplete`](LogbookComplete.md)\> |

#### Overrides

Message&lt;LogbookComplete\&gt;.constructor

#### Defined in

[src/base_pb.ts:1260](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1260)

## Properties

### logs

• **logs**: [`LogbookLogComplete`](LogbookLogComplete.md)[] = `[]`

List of logs

**`Generated`**

from field: repeated tcube.LogbookLogComplete logs = 1;

#### Defined in

[src/base_pb.ts:1258](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1258)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1267](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1267)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1265](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1265)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.LogbookComplete"``

#### Defined in

[src/base_pb.ts:1266](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1266)

## Methods

### clone

▸ **clone**(): [`LogbookComplete`](LogbookComplete.md)

Create a deep copy.

#### Returns

[`LogbookComplete`](LogbookComplete.md)

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
| `other` | `undefined` \| ``null`` \| [`LogbookComplete`](LogbookComplete.md) \| `PlainMessage`<[`LogbookComplete`](LogbookComplete.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LogbookComplete`](LogbookComplete.md)

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

[`LogbookComplete`](LogbookComplete.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LogbookComplete`](LogbookComplete.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookComplete`](LogbookComplete.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LogbookComplete`](LogbookComplete.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookComplete`](LogbookComplete.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LogbookComplete`](LogbookComplete.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LogbookComplete`](LogbookComplete.md)\>

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
| `a` | `undefined` \| [`LogbookComplete`](LogbookComplete.md) \| `PlainMessage`<[`LogbookComplete`](LogbookComplete.md)\> |
| `b` | `undefined` \| [`LogbookComplete`](LogbookComplete.md) \| `PlainMessage`<[`LogbookComplete`](LogbookComplete.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1283](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1283)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LogbookComplete`](LogbookComplete.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LogbookComplete`](LogbookComplete.md)

#### Defined in

[src/base_pb.ts:1271](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1271)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LogbookComplete`](LogbookComplete.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookComplete`](LogbookComplete.md)

#### Defined in

[src/base_pb.ts:1275](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1275)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LogbookComplete`](LogbookComplete.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookComplete`](LogbookComplete.md)

#### Defined in

[src/base_pb.ts:1279](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/base_pb.ts#L1279)
