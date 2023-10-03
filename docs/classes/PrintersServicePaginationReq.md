[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PrintersServicePaginationReq

# Class: PrintersServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message tcube.PrintersServicePaginationReq

## Hierarchy

- `Message`<[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)\>

  ↳ **`PrintersServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PrintersServicePaginationReq.md#constructor)

### Properties

- [count](PrintersServicePaginationReq.md#count)
- [isActive](PrintersServicePaginationReq.md#isactive)
- [locationUuid](PrintersServicePaginationReq.md#locationuuid)
- [offset](PrintersServicePaginationReq.md#offset)
- [sortKey](PrintersServicePaginationReq.md#sortkey)
- [sortOrder](PrintersServicePaginationReq.md#sortorder)
- [fields](PrintersServicePaginationReq.md#fields)
- [runtime](PrintersServicePaginationReq.md#runtime)
- [typeName](PrintersServicePaginationReq.md#typename)

### Methods

- [clone](PrintersServicePaginationReq.md#clone)
- [equals](PrintersServicePaginationReq.md#equals)
- [fromBinary](PrintersServicePaginationReq.md#frombinary)
- [fromJson](PrintersServicePaginationReq.md#fromjson)
- [fromJsonString](PrintersServicePaginationReq.md#fromjsonstring)
- [getType](PrintersServicePaginationReq.md#gettype)
- [toBinary](PrintersServicePaginationReq.md#tobinary)
- [toJSON](PrintersServicePaginationReq.md#tojson)
- [toJson](PrintersServicePaginationReq.md#tojson-1)
- [toJsonString](PrintersServicePaginationReq.md#tojsonstring)
- [equals](PrintersServicePaginationReq.md#equals-1)
- [fromBinary](PrintersServicePaginationReq.md#frombinary-1)
- [fromJson](PrintersServicePaginationReq.md#fromjson-1)
- [fromJsonString](PrintersServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PrintersServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)\> |

#### Overrides

Message&lt;PrintersServicePaginationReq\&gt;.constructor

#### Defined in

src/printers_pb.ts:497

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/printers_pb.ts:467

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

src/printers_pb.ts:460

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 6;

#### Defined in

src/printers_pb.ts:495

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

src/printers_pb.ts:474

___

### sortKey

• **sortKey**: [`PRINTER_SORT_KEY`](../enums/PRINTER_SORT_KEY.md) = `PRINTER_SORT_KEY.PRINTER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.PRINTER_SORT_KEY sort_key = 5;

#### Defined in

src/printers_pb.ts:488

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

src/printers_pb.ts:481

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/printers_pb.ts:504

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/printers_pb.ts:502

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PrintersServicePaginationReq"``

#### Defined in

src/printers_pb.ts:503

## Methods

### clone

▸ **clone**(): [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md) \| `PlainMessage`<[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

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

[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md) \| `PlainMessage`<[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md) \| `PlainMessage`<[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/printers_pb.ts:525

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Defined in

src/printers_pb.ts:513

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Defined in

src/printers_pb.ts:517

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServicePaginationReq`](PrintersServicePaginationReq.md)

#### Defined in

src/printers_pb.ts:521
