[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesList

# Class: EntitiesList

Describes the data structure that stores a list of entities

**`Generated`**

from message tcube.EntitiesList

## Hierarchy

- `Message`<[`EntitiesList`](EntitiesList.md)\>

  ↳ **`EntitiesList`**

## Table of contents

### Constructors

- [constructor](EntitiesList.md#constructor)

### Properties

- [list](EntitiesList.md#list)
- [fields](EntitiesList.md#fields)
- [runtime](EntitiesList.md#runtime)
- [typeName](EntitiesList.md#typename)

### Methods

- [clone](EntitiesList.md#clone)
- [equals](EntitiesList.md#equals)
- [fromBinary](EntitiesList.md#frombinary)
- [fromJson](EntitiesList.md#fromjson)
- [fromJsonString](EntitiesList.md#fromjsonstring)
- [getType](EntitiesList.md#gettype)
- [toBinary](EntitiesList.md#tobinary)
- [toJSON](EntitiesList.md#tojson)
- [toJson](EntitiesList.md#tojson-1)
- [toJsonString](EntitiesList.md#tojsonstring)
- [equals](EntitiesList.md#equals-1)
- [fromBinary](EntitiesList.md#frombinary-1)
- [fromJson](EntitiesList.md#fromjson-1)
- [fromJsonString](EntitiesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesList`](EntitiesList.md)\> |

#### Overrides

Message&lt;EntitiesList\&gt;.constructor

#### Defined in

[src/entities_pb.ts:495](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L495)

## Properties

### list

• **list**: [`Entity`](Entity.md)[] = `[]`

List of entities

**`Generated`**

from field: repeated tcube.Entity list = 1;

#### Defined in

[src/entities_pb.ts:493](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L493)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:502](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L502)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:500](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L500)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesList"``

#### Defined in

[src/entities_pb.ts:501](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L501)

## Methods

### clone

▸ **clone**(): [`EntitiesList`](EntitiesList.md)

Create a deep copy.

#### Returns

[`EntitiesList`](EntitiesList.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesList`](EntitiesList.md) \| `PlainMessage`<[`EntitiesList`](EntitiesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesList`](EntitiesList.md)

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

[`EntitiesList`](EntitiesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesList`](EntitiesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesList`](EntitiesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesList`](EntitiesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesList`](EntitiesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesList`](EntitiesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesList`](EntitiesList.md)\>

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
| `a` | `undefined` \| [`EntitiesList`](EntitiesList.md) \| `PlainMessage`<[`EntitiesList`](EntitiesList.md)\> |
| `b` | `undefined` \| [`EntitiesList`](EntitiesList.md) \| `PlainMessage`<[`EntitiesList`](EntitiesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:518](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L518)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesList`](EntitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesList`](EntitiesList.md)

#### Defined in

[src/entities_pb.ts:506](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L506)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesList`](EntitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesList`](EntitiesList.md)

#### Defined in

[src/entities_pb.ts:510](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L510)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesList`](EntitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesList`](EntitiesList.md)

#### Defined in

[src/entities_pb.ts:514](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L514)
