[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ZonesServiceUpdateRequest

# Class: ZonesServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a zone

**`Generated`**

from message tcube.ZonesServiceUpdateRequest

## Hierarchy

- `Message`<[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)\>

  ↳ **`ZonesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ZonesServiceUpdateRequest.md#constructor)

### Properties

- [code](ZonesServiceUpdateRequest.md#code)
- [description](ZonesServiceUpdateRequest.md#description)
- [name](ZonesServiceUpdateRequest.md#name)
- [type](ZonesServiceUpdateRequest.md#type)
- [userComment](ZonesServiceUpdateRequest.md#usercomment)
- [uuid](ZonesServiceUpdateRequest.md#uuid)
- [fields](ZonesServiceUpdateRequest.md#fields)
- [runtime](ZonesServiceUpdateRequest.md#runtime)
- [typeName](ZonesServiceUpdateRequest.md#typename)

### Methods

- [clone](ZonesServiceUpdateRequest.md#clone)
- [equals](ZonesServiceUpdateRequest.md#equals)
- [fromBinary](ZonesServiceUpdateRequest.md#frombinary)
- [fromJson](ZonesServiceUpdateRequest.md#fromjson)
- [fromJsonString](ZonesServiceUpdateRequest.md#fromjsonstring)
- [getType](ZonesServiceUpdateRequest.md#gettype)
- [toBinary](ZonesServiceUpdateRequest.md#tobinary)
- [toJSON](ZonesServiceUpdateRequest.md#tojson)
- [toJson](ZonesServiceUpdateRequest.md#tojson-1)
- [toJsonString](ZonesServiceUpdateRequest.md#tojsonstring)
- [equals](ZonesServiceUpdateRequest.md#equals-1)
- [fromBinary](ZonesServiceUpdateRequest.md#frombinary-1)
- [fromJson](ZonesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ZonesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ZonesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;ZonesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/zones_pb.ts:243](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L243)

## Properties

### code

• **code**: `string` = `""`

Code of the zone

**`Generated`**

from field: string code = 11;

#### Defined in

[src/zones_pb.ts:227](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L227)

___

### description

• **description**: `string` = `""`

Description of the zone

**`Generated`**

from field: string description = 12;

#### Defined in

[src/zones_pb.ts:234](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L234)

___

### name

• **name**: `string` = `""`

The name of the zone

**`Generated`**

from field: string name = 10;

#### Defined in

[src/zones_pb.ts:220](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L220)

___

### type

• **type**: [`ZONE_TYPE`](../enums/ZONE_TYPE.md) = `ZONE_TYPE.ZONE_TYPE_ANY_UNSPECIFIED`

The type of the zone

**`Generated`**

from field: tcube.ZONE_TYPE type = 13;

#### Defined in

[src/zones_pb.ts:241](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L241)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/zones_pb.ts:206](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L206)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/zones_pb.ts:213](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L213)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:250](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L250)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:248](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L248)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ZonesServiceUpdateRequest"``

#### Defined in

[src/zones_pb.ts:249](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L249)

## Methods

### clone

▸ **clone**(): [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md) \| `PlainMessage`<[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

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

[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md) \| `PlainMessage`<[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md) \| `PlainMessage`<[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:271](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L271)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Defined in

[src/zones_pb.ts:259](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L259)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Defined in

[src/zones_pb.ts:263](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L263)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceUpdateRequest`](ZonesServiceUpdateRequest.md)

#### Defined in

[src/zones_pb.ts:267](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/zones_pb.ts#L267)
