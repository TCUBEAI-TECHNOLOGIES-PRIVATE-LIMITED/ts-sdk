[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PackagingsServiceFilterReq

# Class: PackagingsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.PackagingsServiceFilterReq

## Hierarchy

- `Message`<[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)\>

  ↳ **`PackagingsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PackagingsServiceFilterReq.md#constructor)

### Properties

- [batchUuid](PackagingsServiceFilterReq.md#batchuuid)
- [code](PackagingsServiceFilterReq.md#code)
- [count](PackagingsServiceFilterReq.md#count)
- [creationTimestampEnd](PackagingsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PackagingsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PackagingsServiceFilterReq.md#entityuuid)
- [isActive](PackagingsServiceFilterReq.md#isactive)
- [locationUuid](PackagingsServiceFilterReq.md#locationuuid)
- [name](PackagingsServiceFilterReq.md#name)
- [offset](PackagingsServiceFilterReq.md#offset)
- [productUuid](PackagingsServiceFilterReq.md#productuuid)
- [sortKey](PackagingsServiceFilterReq.md#sortkey)
- [sortOrder](PackagingsServiceFilterReq.md#sortorder)
- [state](PackagingsServiceFilterReq.md#state)
- [zoneUuid](PackagingsServiceFilterReq.md#zoneuuid)
- [fields](PackagingsServiceFilterReq.md#fields)
- [runtime](PackagingsServiceFilterReq.md#runtime)
- [typeName](PackagingsServiceFilterReq.md#typename)

### Methods

- [clone](PackagingsServiceFilterReq.md#clone)
- [equals](PackagingsServiceFilterReq.md#equals)
- [fromBinary](PackagingsServiceFilterReq.md#frombinary)
- [fromJson](PackagingsServiceFilterReq.md#fromjson)
- [fromJsonString](PackagingsServiceFilterReq.md#fromjsonstring)
- [getType](PackagingsServiceFilterReq.md#gettype)
- [toBinary](PackagingsServiceFilterReq.md#tobinary)
- [toJSON](PackagingsServiceFilterReq.md#tojson)
- [toJson](PackagingsServiceFilterReq.md#tojson-1)
- [toJsonString](PackagingsServiceFilterReq.md#tojsonstring)
- [equals](PackagingsServiceFilterReq.md#equals-1)
- [fromBinary](PackagingsServiceFilterReq.md#frombinary-1)
- [fromJson](PackagingsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PackagingsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)\> |

#### Overrides

Message&lt;PackagingsServiceFilterReq\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:924](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L924)

## Properties

### batchUuid

• **batchUuid**: `string` = `""`

Optional UUID of the associated batch

**`Generated`**

from field: string batch_uuid = 12;

#### Defined in

[src/packagings_pb.ts:901](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L901)

___

### code

• **code**: `string` = `""`

Code of the packaging

**`Generated`**

from field: string code = 21;

#### Defined in

[src/packagings_pb.ts:915](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L915)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/packagings_pb.ts:831](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L831)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/packagings_pb.ts:866](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L866)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/packagings_pb.ts:859](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L859)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/packagings_pb.ts:873](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L873)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/packagings_pb.ts:824](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L824)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/packagings_pb.ts:880](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L880)

___

### name

• **name**: `string` = `""`

The name of the packaging

**`Generated`**

from field: string name = 20;

#### Defined in

[src/packagings_pb.ts:908](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L908)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/packagings_pb.ts:838](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L838)

___

### productUuid

• **productUuid**: `string` = `""`

Optional UUID of the associated product

**`Generated`**

from field: string product_uuid = 11;

#### Defined in

[src/packagings_pb.ts:894](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L894)

___

### sortKey

• **sortKey**: [`PACKAGING_SORT_KEY`](../enums/PACKAGING_SORT_KEY.md) = `PACKAGING_SORT_KEY.PACKAGING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.PACKAGING_SORT_KEY sort_key = 5;

#### Defined in

[src/packagings_pb.ts:852](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L852)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/packagings_pb.ts:845](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L845)

___

### state

• **state**: [`PACKAGING_STATE`](../enums/PACKAGING_STATE.md) = `PACKAGING_STATE.PACKAGING_STATE_ANY_UNSPECIFIED`

The state of the packaging

**`Generated`**

from field: tcube.PACKAGING_STATE state = 30;

#### Defined in

[src/packagings_pb.ts:922](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L922)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 10;

#### Defined in

[src/packagings_pb.ts:887](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L887)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:931](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L931)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:929](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L929)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PackagingsServiceFilterReq"``

#### Defined in

[src/packagings_pb.ts:930](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L930)

## Methods

### clone

▸ **clone**(): [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md) \| `PlainMessage`<[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

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

[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md) \| `PlainMessage`<[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md) \| `PlainMessage`<[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:961](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L961)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Defined in

[src/packagings_pb.ts:949](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L949)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Defined in

[src/packagings_pb.ts:953](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L953)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceFilterReq`](PackagingsServiceFilterReq.md)

#### Defined in

[src/packagings_pb.ts:957](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/packagings_pb.ts#L957)
