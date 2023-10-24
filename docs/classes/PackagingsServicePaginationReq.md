[scanswift-sdk](../README.md) / [Exports](../modules.md) / PackagingsServicePaginationReq

# Class: PackagingsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message scanswift.PackagingsServicePaginationReq

## Hierarchy

- `Message`<[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)\>

  ↳ **`PackagingsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PackagingsServicePaginationReq.md#constructor)

### Properties

- [count](PackagingsServicePaginationReq.md#count)
- [entityUuid](PackagingsServicePaginationReq.md#entityuuid)
- [isActive](PackagingsServicePaginationReq.md#isactive)
- [offset](PackagingsServicePaginationReq.md#offset)
- [sortKey](PackagingsServicePaginationReq.md#sortkey)
- [sortOrder](PackagingsServicePaginationReq.md#sortorder)
- [fields](PackagingsServicePaginationReq.md#fields)
- [runtime](PackagingsServicePaginationReq.md#runtime)
- [typeName](PackagingsServicePaginationReq.md#typename)

### Methods

- [clone](PackagingsServicePaginationReq.md#clone)
- [equals](PackagingsServicePaginationReq.md#equals)
- [fromBinary](PackagingsServicePaginationReq.md#frombinary)
- [fromJson](PackagingsServicePaginationReq.md#fromjson)
- [fromJsonString](PackagingsServicePaginationReq.md#fromjsonstring)
- [getType](PackagingsServicePaginationReq.md#gettype)
- [toBinary](PackagingsServicePaginationReq.md#tobinary)
- [toJSON](PackagingsServicePaginationReq.md#tojson)
- [toJson](PackagingsServicePaginationReq.md#tojson-1)
- [toJsonString](PackagingsServicePaginationReq.md#tojsonstring)
- [equals](PackagingsServicePaginationReq.md#equals-1)
- [fromBinary](PackagingsServicePaginationReq.md#frombinary-1)
- [fromJson](PackagingsServicePaginationReq.md#fromjson-1)
- [fromJsonString](PackagingsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)\> |

#### Overrides

Message&lt;PackagingsServicePaginationReq\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:805](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L805)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/packagings_pb.ts:775](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L775)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/packagings_pb.ts:803](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L803)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/packagings_pb.ts:768](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L768)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/packagings_pb.ts:782](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L782)

___

### sortKey

• **sortKey**: [`PACKAGING_SORT_KEY`](../enums/PACKAGING_SORT_KEY.md) = `PACKAGING_SORT_KEY.PACKAGING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.PACKAGING_SORT_KEY sort_key = 5;

#### Defined in

[src/packagings_pb.ts:796](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L796)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/packagings_pb.ts:789](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L789)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:812](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L812)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:810](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L810)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PackagingsServicePaginationReq"``

#### Defined in

[src/packagings_pb.ts:811](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L811)

## Methods

### clone

▸ **clone**(): [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md) \| `PlainMessage`<[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

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

[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md) \| `PlainMessage`<[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md) \| `PlainMessage`<[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:833](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L833)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Defined in

[src/packagings_pb.ts:821](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L821)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Defined in

[src/packagings_pb.ts:825](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L825)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServicePaginationReq`](PackagingsServicePaginationReq.md)

#### Defined in

[src/packagings_pb.ts:829](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L829)
