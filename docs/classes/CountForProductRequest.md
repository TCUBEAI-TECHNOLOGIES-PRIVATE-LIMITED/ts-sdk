[scanswift-sdk](../README.md) / [Exports](../modules.md) / CountForProductRequest

# Class: CountForProductRequest

Describes the payload for a request to determine the count of records within a specific product

**`Generated`**

from message scanswift.CountForProductRequest

## Hierarchy

- `Message`<[`CountForProductRequest`](CountForProductRequest.md)\>

  ↳ **`CountForProductRequest`**

## Table of contents

### Constructors

- [constructor](CountForProductRequest.md#constructor)

### Properties

- [isActive](CountForProductRequest.md#isactive)
- [productUuid](CountForProductRequest.md#productuuid)
- [fields](CountForProductRequest.md#fields)
- [runtime](CountForProductRequest.md#runtime)
- [typeName](CountForProductRequest.md#typename)

### Methods

- [clone](CountForProductRequest.md#clone)
- [equals](CountForProductRequest.md#equals)
- [fromBinary](CountForProductRequest.md#frombinary)
- [fromJson](CountForProductRequest.md#fromjson)
- [fromJsonString](CountForProductRequest.md#fromjsonstring)
- [getType](CountForProductRequest.md#gettype)
- [toBinary](CountForProductRequest.md#tobinary)
- [toJSON](CountForProductRequest.md#tojson)
- [toJson](CountForProductRequest.md#tojson-1)
- [toJsonString](CountForProductRequest.md#tojsonstring)
- [equals](CountForProductRequest.md#equals-1)
- [fromBinary](CountForProductRequest.md#frombinary-1)
- [fromJson](CountForProductRequest.md#fromjson-1)
- [fromJsonString](CountForProductRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CountForProductRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`CountForProductRequest`](CountForProductRequest.md)\> |

#### Overrides

Message&lt;CountForProductRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:838](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L838)

## Properties

### isActive

• **isActive**: `boolean` = `false`

Denotes if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:829](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L829)

___

### productUuid

• **productUuid**: `string` = `""`

Stores the product UUID and limits the query to the appropriate product

**`Generated`**

from field: string product_uuid = 2;

#### Defined in

[src/base_pb.ts:836](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L836)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:845](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L845)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:843](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L843)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.CountForProductRequest"``

#### Defined in

[src/base_pb.ts:844](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L844)

## Methods

### clone

▸ **clone**(): [`CountForProductRequest`](CountForProductRequest.md)

Create a deep copy.

#### Returns

[`CountForProductRequest`](CountForProductRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CountForProductRequest`](CountForProductRequest.md) \| `PlainMessage`<[`CountForProductRequest`](CountForProductRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CountForProductRequest`](CountForProductRequest.md)

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

[`CountForProductRequest`](CountForProductRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CountForProductRequest`](CountForProductRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountForProductRequest`](CountForProductRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CountForProductRequest`](CountForProductRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountForProductRequest`](CountForProductRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CountForProductRequest`](CountForProductRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CountForProductRequest`](CountForProductRequest.md)\>

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
| `a` | `undefined` \| [`CountForProductRequest`](CountForProductRequest.md) \| `PlainMessage`<[`CountForProductRequest`](CountForProductRequest.md)\> |
| `b` | `undefined` \| [`CountForProductRequest`](CountForProductRequest.md) \| `PlainMessage`<[`CountForProductRequest`](CountForProductRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:862](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L862)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CountForProductRequest`](CountForProductRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CountForProductRequest`](CountForProductRequest.md)

#### Defined in

[src/base_pb.ts:850](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L850)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CountForProductRequest`](CountForProductRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountForProductRequest`](CountForProductRequest.md)

#### Defined in

[src/base_pb.ts:854](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L854)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CountForProductRequest`](CountForProductRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CountForProductRequest`](CountForProductRequest.md)

#### Defined in

[src/base_pb.ts:858](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/base_pb.ts#L858)
