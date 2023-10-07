[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PrintersServiceSearchAllReq

# Class: PrintersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message tcube.PrintersServiceSearchAllReq

## Hierarchy

- `Message`<[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)\>

  ↳ **`PrintersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PrintersServiceSearchAllReq.md#constructor)

### Properties

- [count](PrintersServiceSearchAllReq.md#count)
- [entityUuid](PrintersServiceSearchAllReq.md#entityuuid)
- [isActive](PrintersServiceSearchAllReq.md#isactive)
- [locationUuid](PrintersServiceSearchAllReq.md#locationuuid)
- [mode](PrintersServiceSearchAllReq.md#mode)
- [offset](PrintersServiceSearchAllReq.md#offset)
- [searchKey](PrintersServiceSearchAllReq.md#searchkey)
- [sortKey](PrintersServiceSearchAllReq.md#sortkey)
- [sortOrder](PrintersServiceSearchAllReq.md#sortorder)
- [fields](PrintersServiceSearchAllReq.md#fields)
- [runtime](PrintersServiceSearchAllReq.md#runtime)
- [typeName](PrintersServiceSearchAllReq.md#typename)

### Methods

- [clone](PrintersServiceSearchAllReq.md#clone)
- [equals](PrintersServiceSearchAllReq.md#equals)
- [fromBinary](PrintersServiceSearchAllReq.md#frombinary)
- [fromJson](PrintersServiceSearchAllReq.md#fromjson)
- [fromJsonString](PrintersServiceSearchAllReq.md#fromjsonstring)
- [getType](PrintersServiceSearchAllReq.md#gettype)
- [toBinary](PrintersServiceSearchAllReq.md#tobinary)
- [toJSON](PrintersServiceSearchAllReq.md#tojson)
- [toJson](PrintersServiceSearchAllReq.md#tojson-1)
- [toJsonString](PrintersServiceSearchAllReq.md#tojsonstring)
- [equals](PrintersServiceSearchAllReq.md#equals-1)
- [fromBinary](PrintersServiceSearchAllReq.md#frombinary-1)
- [fromJson](PrintersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PrintersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PrintersServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;PrintersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/printers_pb.ts:788](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L788)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/printers_pb.ts:737](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L737)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/printers_pb.ts:765](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L765)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/printers_pb.ts:730](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L730)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/printers_pb.ts:772](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L772)

___

### mode

• **mode**: [`PRINTER_MODE`](../enums/PRINTER_MODE.md) = `PRINTER_MODE.PRINTER_MODE_ANY_UNSPECIFIED`

The printer mode

**`Generated`**

from field: tcube.PRINTER_MODE mode = 22;

#### Defined in

[src/printers_pb.ts:786](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L786)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/printers_pb.ts:744](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L744)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/printers_pb.ts:779](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L779)

___

### sortKey

• **sortKey**: [`PRINTER_SORT_KEY`](../enums/PRINTER_SORT_KEY.md) = `PRINTER_SORT_KEY.PRINTER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.PRINTER_SORT_KEY sort_key = 5;

#### Defined in

[src/printers_pb.ts:758](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L758)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/printers_pb.ts:751](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L751)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/printers_pb.ts:795](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L795)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/printers_pb.ts:793](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L793)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PrintersServiceSearchAllReq"``

#### Defined in

[src/printers_pb.ts:794](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L794)

## Methods

### clone

▸ **clone**(): [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md) \| `PlainMessage`<[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

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

[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md) \| `PlainMessage`<[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md) \| `PlainMessage`<[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/printers_pb.ts:819](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L819)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Defined in

[src/printers_pb.ts:807](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L807)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Defined in

[src/printers_pb.ts:811](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L811)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceSearchAllReq`](PrintersServiceSearchAllReq.md)

#### Defined in

[src/printers_pb.ts:815](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L815)
