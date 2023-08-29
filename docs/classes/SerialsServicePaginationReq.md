[tcubesa-sdk](../README.md) / [Exports](../modules.md) / SerialsServicePaginationReq

# Class: SerialsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.SerialsServicePaginationReq

## Hierarchy

- `Message`<[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)\>

  ↳ **`SerialsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](SerialsServicePaginationReq.md#constructor)

### Properties

- [count](SerialsServicePaginationReq.md#count)
- [entityUuid](SerialsServicePaginationReq.md#entityuuid)
- [isActive](SerialsServicePaginationReq.md#isactive)
- [offset](SerialsServicePaginationReq.md#offset)
- [sortKey](SerialsServicePaginationReq.md#sortkey)
- [sortOrder](SerialsServicePaginationReq.md#sortorder)
- [fields](SerialsServicePaginationReq.md#fields)
- [runtime](SerialsServicePaginationReq.md#runtime)
- [typeName](SerialsServicePaginationReq.md#typename)

### Methods

- [clone](SerialsServicePaginationReq.md#clone)
- [equals](SerialsServicePaginationReq.md#equals)
- [fromBinary](SerialsServicePaginationReq.md#frombinary)
- [fromJson](SerialsServicePaginationReq.md#fromjson)
- [fromJsonString](SerialsServicePaginationReq.md#fromjsonstring)
- [getType](SerialsServicePaginationReq.md#gettype)
- [toBinary](SerialsServicePaginationReq.md#tobinary)
- [toJSON](SerialsServicePaginationReq.md#tojson)
- [toJson](SerialsServicePaginationReq.md#tojson-1)
- [toJsonString](SerialsServicePaginationReq.md#tojsonstring)
- [equals](SerialsServicePaginationReq.md#equals-1)
- [fromBinary](SerialsServicePaginationReq.md#frombinary-1)
- [fromJson](SerialsServicePaginationReq.md#fromjson-1)
- [fromJsonString](SerialsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)\> |

#### Overrides

Message&lt;SerialsServicePaginationReq\&gt;.constructor

#### Defined in

[src/serials_pb.ts:842](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L842)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/serials_pb.ts:812](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L812)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/serials_pb.ts:840](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L840)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/serials_pb.ts:805](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L805)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/serials_pb.ts:819](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L819)

___

### sortKey

• **sortKey**: [`SERIAL_SORT_KEY`](../enums/SERIAL_SORT_KEY.md) = `SERIAL_SORT_KEY.SERIAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SERIAL_SORT_KEY sort_key = 5;

#### Defined in

[src/serials_pb.ts:833](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L833)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/serials_pb.ts:826](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L826)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:849](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L849)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:847](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L847)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.SerialsServicePaginationReq"``

#### Defined in

[src/serials_pb.ts:848](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L848)

## Methods

### clone

▸ **clone**(): [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md) \| `PlainMessage`<[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

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

[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md) \| `PlainMessage`<[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md) \| `PlainMessage`<[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:870](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L870)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Defined in

[src/serials_pb.ts:858](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L858)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Defined in

[src/serials_pb.ts:862](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L862)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServicePaginationReq`](SerialsServicePaginationReq.md)

#### Defined in

[src/serials_pb.ts:866](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/serials_pb.ts#L866)
