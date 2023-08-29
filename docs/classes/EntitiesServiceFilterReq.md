[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesServiceFilterReq

# Class: EntitiesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.EntitiesServiceFilterReq

## Hierarchy

- `Message`<[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)\>

  ↳ **`EntitiesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EntitiesServiceFilterReq.md#constructor)

### Properties

- [city](EntitiesServiceFilterReq.md#city)
- [code](EntitiesServiceFilterReq.md#code)
- [count](EntitiesServiceFilterReq.md#count)
- [creationTimestampEnd](EntitiesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EntitiesServiceFilterReq.md#creationtimestampstart)
- [email](EntitiesServiceFilterReq.md#email)
- [isActive](EntitiesServiceFilterReq.md#isactive)
- [name](EntitiesServiceFilterReq.md#name)
- [offset](EntitiesServiceFilterReq.md#offset)
- [phone](EntitiesServiceFilterReq.md#phone)
- [sortKey](EntitiesServiceFilterReq.md#sortkey)
- [sortOrder](EntitiesServiceFilterReq.md#sortorder)
- [state](EntitiesServiceFilterReq.md#state)
- [zipCode](EntitiesServiceFilterReq.md#zipcode)
- [fields](EntitiesServiceFilterReq.md#fields)
- [runtime](EntitiesServiceFilterReq.md#runtime)
- [typeName](EntitiesServiceFilterReq.md#typename)

### Methods

- [clone](EntitiesServiceFilterReq.md#clone)
- [equals](EntitiesServiceFilterReq.md#equals)
- [fromBinary](EntitiesServiceFilterReq.md#frombinary)
- [fromJson](EntitiesServiceFilterReq.md#fromjson)
- [fromJsonString](EntitiesServiceFilterReq.md#fromjsonstring)
- [getType](EntitiesServiceFilterReq.md#gettype)
- [toBinary](EntitiesServiceFilterReq.md#tobinary)
- [toJSON](EntitiesServiceFilterReq.md#tojson)
- [toJson](EntitiesServiceFilterReq.md#tojson-1)
- [toJsonString](EntitiesServiceFilterReq.md#tojsonstring)
- [equals](EntitiesServiceFilterReq.md#equals-1)
- [fromBinary](EntitiesServiceFilterReq.md#frombinary-1)
- [fromJson](EntitiesServiceFilterReq.md#fromjson-1)
- [fromJsonString](EntitiesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)\> |

#### Overrides

Message&lt;EntitiesServiceFilterReq\&gt;.constructor

#### Defined in

[src/entities_pb.ts:760](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L760)

## Properties

### city

• **city**: `string` = `""`

The city in which the entity is based out of

**`Generated`**

from field: string city = 26;

#### Defined in

[src/entities_pb.ts:744](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L744)

___

### code

• **code**: `string` = `""`

Code of the entity

**`Generated`**

from field: string code = 21;

#### Defined in

[src/entities_pb.ts:723](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L723)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/entities_pb.ts:674](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L674)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/entities_pb.ts:709](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L709)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/entities_pb.ts:702](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L702)

___

### email

• **email**: `string` = `""`

The email address of the entity

**`Generated`**

from field: string email = 23;

#### Defined in

[src/entities_pb.ts:730](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L730)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/entities_pb.ts:667](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L667)

___

### name

• **name**: `string` = `""`

The name of the entity

**`Generated`**

from field: string name = 20;

#### Defined in

[src/entities_pb.ts:716](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L716)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/entities_pb.ts:681](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L681)

___

### phone

• **phone**: `string` = `""`

The phone number of the entity

**`Generated`**

from field: string phone = 24;

#### Defined in

[src/entities_pb.ts:737](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L737)

___

### sortKey

• **sortKey**: [`ENTITY_SORT_KEY`](../enums/ENTITY_SORT_KEY.md) = `ENTITY_SORT_KEY.ENTITY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.ENTITY_SORT_KEY sort_key = 5;

#### Defined in

[src/entities_pb.ts:695](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L695)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/entities_pb.ts:688](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L688)

___

### state

• **state**: `string` = `""`

The state in which the entity is based out of

**`Generated`**

from field: string state = 27;

#### Defined in

[src/entities_pb.ts:751](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L751)

___

### zipCode

• **zipCode**: `string` = `""`

The zipcode of the location in which the entity is based out of

**`Generated`**

from field: string zip_code = 28;

#### Defined in

[src/entities_pb.ts:758](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L758)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:767](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L767)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:765](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L765)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesServiceFilterReq"``

#### Defined in

[src/entities_pb.ts:766](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L766)

## Methods

### clone

▸ **clone**(): [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md) \| `PlainMessage`<[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

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

[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md) \| `PlainMessage`<[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md) \| `PlainMessage`<[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:796](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L796)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Defined in

[src/entities_pb.ts:784](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L784)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Defined in

[src/entities_pb.ts:788](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L788)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceFilterReq`](EntitiesServiceFilterReq.md)

#### Defined in

[src/entities_pb.ts:792](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/b410bb1/src/entities_pb.ts#L792)
