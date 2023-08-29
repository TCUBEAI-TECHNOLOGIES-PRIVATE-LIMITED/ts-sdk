[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ZonesServiceCreateRequest

# Class: ZonesServiceCreateRequest

Describes the necessary data structure during creation of a zone

**`Generated`**

from message tcube.ZonesServiceCreateRequest

## Hierarchy

- `Message`<[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)\>

  ↳ **`ZonesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ZonesServiceCreateRequest.md#constructor)

### Properties

- [code](ZonesServiceCreateRequest.md#code)
- [description](ZonesServiceCreateRequest.md#description)
- [entityUuid](ZonesServiceCreateRequest.md#entityuuid)
- [locationUuid](ZonesServiceCreateRequest.md#locationuuid)
- [name](ZonesServiceCreateRequest.md#name)
- [type](ZonesServiceCreateRequest.md#type)
- [userComment](ZonesServiceCreateRequest.md#usercomment)
- [fields](ZonesServiceCreateRequest.md#fields)
- [runtime](ZonesServiceCreateRequest.md#runtime)
- [typeName](ZonesServiceCreateRequest.md#typename)

### Methods

- [clone](ZonesServiceCreateRequest.md#clone)
- [equals](ZonesServiceCreateRequest.md#equals)
- [fromBinary](ZonesServiceCreateRequest.md#frombinary)
- [fromJson](ZonesServiceCreateRequest.md#fromjson)
- [fromJsonString](ZonesServiceCreateRequest.md#fromjsonstring)
- [getType](ZonesServiceCreateRequest.md#gettype)
- [toBinary](ZonesServiceCreateRequest.md#tobinary)
- [toJSON](ZonesServiceCreateRequest.md#tojson)
- [toJson](ZonesServiceCreateRequest.md#tojson-1)
- [toJsonString](ZonesServiceCreateRequest.md#tojsonstring)
- [equals](ZonesServiceCreateRequest.md#equals-1)
- [fromBinary](ZonesServiceCreateRequest.md#frombinary-1)
- [fromJson](ZonesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ZonesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ZonesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;ZonesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/zones_pb.ts:160](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L160)

## Properties

### code

• **code**: `string` = `""`

Code of the zone

**`Generated`**

from field: string code = 11;

#### Defined in

[src/zones_pb.ts:144](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L144)

___

### description

• **description**: `string` = `""`

Description of the zone

**`Generated`**

from field: string description = 12;

#### Defined in

[src/zones_pb.ts:151](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L151)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/zones_pb.ts:123](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L123)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/zones_pb.ts:130](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L130)

___

### name

• **name**: `string` = `""`

The name of the zone

**`Generated`**

from field: string name = 10;

#### Defined in

[src/zones_pb.ts:137](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L137)

___

### type

• **type**: [`ZONE_TYPE`](../enums/ZONE_TYPE.md) = `ZONE_TYPE.ZONE_TYPE_ANY_UNSPECIFIED`

The type of the zone

**`Generated`**

from field: tcube.ZONE_TYPE type = 13;

#### Defined in

[src/zones_pb.ts:158](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L158)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/zones_pb.ts:116](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L116)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/zones_pb.ts:167](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L167)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/zones_pb.ts:165](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L165)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ZonesServiceCreateRequest"``

#### Defined in

[src/zones_pb.ts:166](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L166)

## Methods

### clone

▸ **clone**(): [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md) \| `PlainMessage`<[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

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

[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md) \| `PlainMessage`<[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md) \| `PlainMessage`<[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/zones_pb.ts:189](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L189)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Defined in

[src/zones_pb.ts:177](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L177)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Defined in

[src/zones_pb.ts:181](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L181)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ZonesServiceCreateRequest`](ZonesServiceCreateRequest.md)

#### Defined in

[src/zones_pb.ts:185](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/zones_pb.ts#L185)
