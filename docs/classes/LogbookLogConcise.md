[scanswift-sdk](../README.md) / [Exports](../modules.md) / LogbookLogConcise

# Class: LogbookLogConcise

Describes each parameter that's part of the logbook (does not include historical data of the object)

**`Generated`**

from message scanswift.LogbookLogConcise

## Hierarchy

- `Message`<[`LogbookLogConcise`](LogbookLogConcise.md)\>

  ↳ **`LogbookLogConcise`**

## Table of contents

### Constructors

- [constructor](LogbookLogConcise.md#constructor)

### Properties

- [addedByUserUuid](LogbookLogConcise.md#addedbyuseruuid)
- [appComment](LogbookLogConcise.md#appcomment)
- [metadata](LogbookLogConcise.md#metadata)
- [operation](LogbookLogConcise.md#operation)
- [refUuid](LogbookLogConcise.md#refuuid)
- [userComment](LogbookLogConcise.md#usercomment)
- [fields](LogbookLogConcise.md#fields)
- [runtime](LogbookLogConcise.md#runtime)
- [typeName](LogbookLogConcise.md#typename)

### Methods

- [clone](LogbookLogConcise.md#clone)
- [equals](LogbookLogConcise.md#equals)
- [fromBinary](LogbookLogConcise.md#frombinary)
- [fromJson](LogbookLogConcise.md#fromjson)
- [fromJsonString](LogbookLogConcise.md#fromjsonstring)
- [getType](LogbookLogConcise.md#gettype)
- [toBinary](LogbookLogConcise.md#tobinary)
- [toJSON](LogbookLogConcise.md#tojson)
- [toJson](LogbookLogConcise.md#tojson-1)
- [toJsonString](LogbookLogConcise.md#tojsonstring)
- [equals](LogbookLogConcise.md#equals-1)
- [fromBinary](LogbookLogConcise.md#frombinary-1)
- [fromJson](LogbookLogConcise.md#fromjson-1)
- [fromJsonString](LogbookLogConcise.md#fromjsonstring-1)

## Constructors

### constructor

• **new LogbookLogConcise**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LogbookLogConcise`](LogbookLogConcise.md)\> |

#### Overrides

Message&lt;LogbookLogConcise\&gt;.constructor

#### Defined in

[src/base_pb.ts:1300](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1300)

## Properties

### addedByUserUuid

• **addedByUserUuid**: `string` = `""`

Stores the UUID of the user who performed this operation

**`Generated`**

from field: string added_by_user_uuid = 12;

#### Defined in

[src/base_pb.ts:1284](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1284)

___

### appComment

• **appComment**: `string` = `""`

The comment generated by the application

**`Generated`**

from field: string app_comment = 13;

#### Defined in

[src/base_pb.ts:1291](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1291)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metada of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/base_pb.ts:1263](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1263)

___

### operation

• **operation**: [`LOGBOOK_OPERATION`](../enums/LOGBOOK_OPERATION.md) = `LOGBOOK_OPERATION.CREATE_UNSPECIFIED`

The operation that was performed

**`Generated`**

from field: scanswift.LOGBOOK_OPERATION operation = 11;

#### Defined in

[src/base_pb.ts:1277](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1277)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the resource

**`Generated`**

from field: string ref_uuid = 10;

#### Defined in

[src/base_pb.ts:1270](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1270)

___

### userComment

• **userComment**: `string` = `""`

The comment entered by the user

**`Generated`**

from field: string user_comment = 14;

#### Defined in

[src/base_pb.ts:1298](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1298)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:1307](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1307)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:1305](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1305)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.LogbookLogConcise"``

#### Defined in

[src/base_pb.ts:1306](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1306)

## Methods

### clone

▸ **clone**(): [`LogbookLogConcise`](LogbookLogConcise.md)

Create a deep copy.

#### Returns

[`LogbookLogConcise`](LogbookLogConcise.md)

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
| `other` | `undefined` \| ``null`` \| [`LogbookLogConcise`](LogbookLogConcise.md) \| `PlainMessage`<[`LogbookLogConcise`](LogbookLogConcise.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LogbookLogConcise`](LogbookLogConcise.md)

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

[`LogbookLogConcise`](LogbookLogConcise.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LogbookLogConcise`](LogbookLogConcise.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConcise`](LogbookLogConcise.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LogbookLogConcise`](LogbookLogConcise.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConcise`](LogbookLogConcise.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LogbookLogConcise`](LogbookLogConcise.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LogbookLogConcise`](LogbookLogConcise.md)\>

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
| `a` | `undefined` \| [`LogbookLogConcise`](LogbookLogConcise.md) \| `PlainMessage`<[`LogbookLogConcise`](LogbookLogConcise.md)\> |
| `b` | `undefined` \| [`LogbookLogConcise`](LogbookLogConcise.md) \| `PlainMessage`<[`LogbookLogConcise`](LogbookLogConcise.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:1328](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1328)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LogbookLogConcise`](LogbookLogConcise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LogbookLogConcise`](LogbookLogConcise.md)

#### Defined in

[src/base_pb.ts:1316](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1316)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LogbookLogConcise`](LogbookLogConcise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConcise`](LogbookLogConcise.md)

#### Defined in

[src/base_pb.ts:1320](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1320)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LogbookLogConcise`](LogbookLogConcise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LogbookLogConcise`](LogbookLogConcise.md)

#### Defined in

[src/base_pb.ts:1324](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L1324)
