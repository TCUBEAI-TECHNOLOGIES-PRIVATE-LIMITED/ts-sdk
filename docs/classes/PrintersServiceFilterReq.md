[scanswift-sdk](../README.md) / [Exports](../modules.md) / PrintersServiceFilterReq

# Class: PrintersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message scanswift.PrintersServiceFilterReq

## Hierarchy

- `Message`<[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)\>

  ↳ **`PrintersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PrintersServiceFilterReq.md#constructor)

### Properties

- [code](PrintersServiceFilterReq.md#code)
- [count](PrintersServiceFilterReq.md#count)
- [creationTimestampEnd](PrintersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PrintersServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PrintersServiceFilterReq.md#entityuuid)
- [isActive](PrintersServiceFilterReq.md#isactive)
- [locationUuid](PrintersServiceFilterReq.md#locationuuid)
- [mode](PrintersServiceFilterReq.md#mode)
- [name](PrintersServiceFilterReq.md#name)
- [offset](PrintersServiceFilterReq.md#offset)
- [sortKey](PrintersServiceFilterReq.md#sortkey)
- [sortOrder](PrintersServiceFilterReq.md#sortorder)
- [fields](PrintersServiceFilterReq.md#fields)
- [runtime](PrintersServiceFilterReq.md#runtime)
- [typeName](PrintersServiceFilterReq.md#typename)

### Methods

- [clone](PrintersServiceFilterReq.md#clone)
- [equals](PrintersServiceFilterReq.md#equals)
- [fromBinary](PrintersServiceFilterReq.md#frombinary)
- [fromJson](PrintersServiceFilterReq.md#fromjson)
- [fromJsonString](PrintersServiceFilterReq.md#fromjsonstring)
- [getType](PrintersServiceFilterReq.md#gettype)
- [toBinary](PrintersServiceFilterReq.md#tobinary)
- [toJSON](PrintersServiceFilterReq.md#tojson)
- [toJson](PrintersServiceFilterReq.md#tojson-1)
- [toJsonString](PrintersServiceFilterReq.md#tojsonstring)
- [equals](PrintersServiceFilterReq.md#equals-1)
- [fromBinary](PrintersServiceFilterReq.md#frombinary-1)
- [fromJson](PrintersServiceFilterReq.md#fromjson-1)
- [fromJsonString](PrintersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PrintersServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)\> |

#### Overrides

Message&lt;PrintersServiceFilterReq\&gt;.constructor

#### Defined in

[src/printers_pb.ts:679](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L679)

## Properties

### code

• **code**: `string` = `""`

Code of the printer

**`Generated`**

from field: string code = 21;

#### Defined in

[src/printers_pb.ts:670](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L670)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/printers_pb.ts:607](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L607)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/printers_pb.ts:642](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L642)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/printers_pb.ts:635](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L635)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/printers_pb.ts:649](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L649)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/printers_pb.ts:600](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L600)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/printers_pb.ts:656](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L656)

___

### mode

• **mode**: [`PRINTER_MODE`](../enums/PRINTER_MODE.md) = `PRINTER_MODE.PRINTER_MODE_ANY_UNSPECIFIED`

The printer mode

**`Generated`**

from field: scanswift.PRINTER_MODE mode = 22;

#### Defined in

[src/printers_pb.ts:677](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L677)

___

### name

• **name**: `string` = `""`

The name of the printer

**`Generated`**

from field: string name = 20;

#### Defined in

[src/printers_pb.ts:663](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L663)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/printers_pb.ts:614](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L614)

___

### sortKey

• **sortKey**: [`PRINTER_SORT_KEY`](../enums/PRINTER_SORT_KEY.md) = `PRINTER_SORT_KEY.PRINTER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.PRINTER_SORT_KEY sort_key = 5;

#### Defined in

[src/printers_pb.ts:628](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L628)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: scanswift.SORT_ORDER sort_order = 4;

#### Defined in

[src/printers_pb.ts:621](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L621)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/printers_pb.ts:686](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L686)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/printers_pb.ts:684](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L684)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PrintersServiceFilterReq"``

#### Defined in

[src/printers_pb.ts:685](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L685)

## Methods

### clone

▸ **clone**(): [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md) \| `PlainMessage`<[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

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

[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md) \| `PlainMessage`<[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md) \| `PlainMessage`<[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/printers_pb.ts:713](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L713)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Defined in

[src/printers_pb.ts:701](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L701)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Defined in

[src/printers_pb.ts:705](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L705)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceFilterReq`](PrintersServiceFilterReq.md)

#### Defined in

[src/printers_pb.ts:709](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L709)
