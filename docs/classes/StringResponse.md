[tcubesa-sdk](../README.md) / [Exports](../modules.md) / StringResponse

# Class: StringResponse

Describes a string response

**`Generated`**

from message tcube.StringResponse

## Hierarchy

- `Message`<[`StringResponse`](StringResponse.md)\>

  ↳ **`StringResponse`**

## Table of contents

### Constructors

- [constructor](StringResponse.md#constructor)

### Properties

- [value](StringResponse.md#value)
- [fields](StringResponse.md#fields)
- [runtime](StringResponse.md#runtime)
- [typeName](StringResponse.md#typename)

### Methods

- [clone](StringResponse.md#clone)
- [equals](StringResponse.md#equals)
- [fromBinary](StringResponse.md#frombinary)
- [fromJson](StringResponse.md#fromjson)
- [fromJsonString](StringResponse.md#fromjsonstring)
- [getType](StringResponse.md#gettype)
- [toBinary](StringResponse.md#tobinary)
- [toJSON](StringResponse.md#tojson)
- [toJson](StringResponse.md#tojson-1)
- [toJsonString](StringResponse.md#tojsonstring)
- [equals](StringResponse.md#equals-1)
- [fromBinary](StringResponse.md#frombinary-1)
- [fromJson](StringResponse.md#fromjson-1)
- [fromJsonString](StringResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StringResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StringResponse`](StringResponse.md)\> |

#### Overrides

Message&lt;StringResponse\&gt;.constructor

#### Defined in

[src/base_pb.ts:846](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L846)

## Properties

### value

• **value**: `string` = `""`

Stores the message

**`Generated`**

from field: string value = 1;

#### Defined in

[src/base_pb.ts:844](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L844)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:853](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L853)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:851](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L851)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.StringResponse"``

#### Defined in

[src/base_pb.ts:852](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L852)

## Methods

### clone

▸ **clone**(): [`StringResponse`](StringResponse.md)

Create a deep copy.

#### Returns

[`StringResponse`](StringResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StringResponse`](StringResponse.md) \| `PlainMessage`<[`StringResponse`](StringResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StringResponse`](StringResponse.md)

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

[`StringResponse`](StringResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StringResponse`](StringResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StringResponse`](StringResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StringResponse`](StringResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StringResponse`](StringResponse.md)\>

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
| `a` | `undefined` \| [`StringResponse`](StringResponse.md) \| `PlainMessage`<[`StringResponse`](StringResponse.md)\> |
| `b` | `undefined` \| [`StringResponse`](StringResponse.md) \| `PlainMessage`<[`StringResponse`](StringResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:869](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L869)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StringResponse`](StringResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Defined in

[src/base_pb.ts:857](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L857)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StringResponse`](StringResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Defined in

[src/base_pb.ts:861](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L861)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StringResponse`](StringResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringResponse`](StringResponse.md)

#### Defined in

[src/base_pb.ts:865](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L865)
