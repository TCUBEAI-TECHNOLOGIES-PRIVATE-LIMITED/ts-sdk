[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ActiveForProductRequest

# Class: ActiveForProductRequest

Describes the status of the records returned to a request specific to a product

**`Generated`**

from message tcube.ActiveForProductRequest

## Hierarchy

- `Message`<[`ActiveForProductRequest`](ActiveForProductRequest.md)\>

  ↳ **`ActiveForProductRequest`**

## Table of contents

### Constructors

- [constructor](ActiveForProductRequest.md#constructor)

### Properties

- [isActive](ActiveForProductRequest.md#isactive)
- [productUuid](ActiveForProductRequest.md#productuuid)
- [fields](ActiveForProductRequest.md#fields)
- [runtime](ActiveForProductRequest.md#runtime)
- [typeName](ActiveForProductRequest.md#typename)

### Methods

- [clone](ActiveForProductRequest.md#clone)
- [equals](ActiveForProductRequest.md#equals)
- [fromBinary](ActiveForProductRequest.md#frombinary)
- [fromJson](ActiveForProductRequest.md#fromjson)
- [fromJsonString](ActiveForProductRequest.md#fromjsonstring)
- [getType](ActiveForProductRequest.md#gettype)
- [toBinary](ActiveForProductRequest.md#tobinary)
- [toJSON](ActiveForProductRequest.md#tojson)
- [toJson](ActiveForProductRequest.md#tojson-1)
- [toJsonString](ActiveForProductRequest.md#tojsonstring)
- [equals](ActiveForProductRequest.md#equals-1)
- [fromBinary](ActiveForProductRequest.md#frombinary-1)
- [fromJson](ActiveForProductRequest.md#fromjson-1)
- [fromJsonString](ActiveForProductRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActiveForProductRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ActiveForProductRequest`](ActiveForProductRequest.md)\> |

#### Overrides

Message&lt;ActiveForProductRequest\&gt;.constructor

#### Defined in

[src/base_pb.ts:569](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L569)

## Properties

### isActive

• **isActive**: `boolean` = `false`

Denotes if only active records need to be returned

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/base_pb.ts:560](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L560)

___

### productUuid

• **productUuid**: `string` = `""`

Stores the product UUID and limits the query to the appropriate product

**`Generated`**

from field: string product_uuid = 2;

#### Defined in

[src/base_pb.ts:567](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L567)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base_pb.ts:576](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L576)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base_pb.ts:574](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L574)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ActiveForProductRequest"``

#### Defined in

[src/base_pb.ts:575](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L575)

## Methods

### clone

▸ **clone**(): [`ActiveForProductRequest`](ActiveForProductRequest.md)

Create a deep copy.

#### Returns

[`ActiveForProductRequest`](ActiveForProductRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActiveForProductRequest`](ActiveForProductRequest.md) \| `PlainMessage`<[`ActiveForProductRequest`](ActiveForProductRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActiveForProductRequest`](ActiveForProductRequest.md)

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

[`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActiveForProductRequest`](ActiveForProductRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActiveForProductRequest`](ActiveForProductRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ActiveForProductRequest`](ActiveForProductRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ActiveForProductRequest`](ActiveForProductRequest.md)\>

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
| `a` | `undefined` \| [`ActiveForProductRequest`](ActiveForProductRequest.md) \| `PlainMessage`<[`ActiveForProductRequest`](ActiveForProductRequest.md)\> |
| `b` | `undefined` \| [`ActiveForProductRequest`](ActiveForProductRequest.md) \| `PlainMessage`<[`ActiveForProductRequest`](ActiveForProductRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base_pb.ts:593](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L593)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Defined in

[src/base_pb.ts:581](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L581)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Defined in

[src/base_pb.ts:585](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L585)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ActiveForProductRequest`](ActiveForProductRequest.md)

#### Defined in

[src/base_pb.ts:589](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/base_pb.ts#L589)
