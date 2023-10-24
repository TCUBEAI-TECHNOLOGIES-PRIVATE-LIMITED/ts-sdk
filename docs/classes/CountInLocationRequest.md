[scanswift-sdk](../README.md) / [Exports](../modules.md) / CountInLocationRequest

# Class: CountInLocationRequest

Describes the payload for a request to determine the count of records within a specific entity's location

**`Generated`**

from message scanswift.CountInLocationRequest

## Hierarchy

- `Message`<[`CountInLocationRequest`](CountInLocationRequest.md)\>

  ↳ **`CountInLocationRequest`**

## Table of contents

### Constructors

- [constructor](CountInLocationRequest.md#constructor)

### Properties

- [isActive](CountInLocationRequest.md#isactive)
- [locationUuid](CountInLocationRequest.md#locationuuid)
- [fields](CountInLocationRequest.md#fields)
- [runtime](CountInLocationRequest.md#runtime)
- [typeName](CountInLocationRequest.md#typename)

### Methods

- [clone](CountInLocationRequest.md#clone)
- [equals](CountInLocationRequest.md#equals)
- [fromBinary](CountInLocationRequest.md#frombinary)
- [fromJson](CountInLocationRequest.md#fromjson)
- [fromJsonString](CountInLocationRequest.md#fromjsonstring)
- [getType](CountInLocationRequest.md#gettype)
- [toBinary](CountInLocationRequest.md#tobinary)
- [toJSON](CountInLocationRequest.md#tojson)
- [toJson](CountInLocationRequest.md#tojson-1)
- [toJsonString](CountInLocationRequest.md#tojsonstring)
- [equals](CountInLocationRequest.md#equals-1)
- [fromBinary](CountInLocationRequest.md#frombinary-1)
- [fromJson](CountInLocationRequest.md#fromjson-1)
- [fromJsonString](CountInLocationRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CountInLocationRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CountInLocationRequest`](CountInLocationRequest.md)\> |

#### Overrides

Message&lt;CountInLocationRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:788](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L788)

## Properties

### isActive

• **isActive**: `boolean` = `false`

Denotes if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:779](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L779)

___

### locationUuid

• **locationUuid**: `string` = `""`

Stores the location UUID and limits the query to the appropriate location

**`Generated`**

from field: string location_uuid = 2;

#### Defined in

[src/base_pb.ts:786](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L786)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:795](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L795)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:793](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L793)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.CountInLocationRequest"``

#### Defined in

[src/base_pb.ts:794](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L794)

## Methods

### clone

▸ **clone**(): [`CountInLocationRequest`](CountInLocationRequest.md)

Create a deep copy.

#### Returns

[`CountInLocationRequest`](CountInLocationRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CountInLocationRequest`](CountInLocationRequest.md) \| `PlainMessage`<[`CountInLocationRequest`](CountInLocationRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CountInLocationRequest`](CountInLocationRequest.md)

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

[`CountInLocationRequest`](CountInLocationRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CountInLocationRequest`](CountInLocationRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInLocationRequest`](CountInLocationRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CountInLocationRequest`](CountInLocationRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInLocationRequest`](CountInLocationRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CountInLocationRequest`](CountInLocationRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CountInLocationRequest`](CountInLocationRequest.md)\>

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
| `a` | `undefined` \| [`CountInLocationRequest`](CountInLocationRequest.md) \| `PlainMessage`<[`CountInLocationRequest`](CountInLocationRequest.md)\> |
| `b` | `undefined` \| [`CountInLocationRequest`](CountInLocationRequest.md) \| `PlainMessage`<[`CountInLocationRequest`](CountInLocationRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:812](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L812)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CountInLocationRequest`](CountInLocationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CountInLocationRequest`](CountInLocationRequest.md)

#### Defined in

[src/base_pb.ts:800](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L800)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CountInLocationRequest`](CountInLocationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInLocationRequest`](CountInLocationRequest.md)

#### Defined in

[src/base_pb.ts:804](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L804)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CountInLocationRequest`](CountInLocationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountInLocationRequest`](CountInLocationRequest.md)

#### Defined in

[src/base_pb.ts:808](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L808)
