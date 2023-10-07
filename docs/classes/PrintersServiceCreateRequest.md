[tcubesa-sdk](../README.md) / [Exports](../modules.md) / PrintersServiceCreateRequest

# Class: PrintersServiceCreateRequest

Describes the necessary data structure during creation of a printer

**`Generated`**

from message tcube.PrintersServiceCreateRequest

## Hierarchy

- `Message`<[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)\>

  ↳ **`PrintersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PrintersServiceCreateRequest.md#constructor)

### Properties

- [code](PrintersServiceCreateRequest.md#code)
- [description](PrintersServiceCreateRequest.md#description)
- [entityUuid](PrintersServiceCreateRequest.md#entityuuid)
- [ipAddress](PrintersServiceCreateRequest.md#ipaddress)
- [locationUuid](PrintersServiceCreateRequest.md#locationuuid)
- [mode](PrintersServiceCreateRequest.md#mode)
- [name](PrintersServiceCreateRequest.md#name)
- [port](PrintersServiceCreateRequest.md#port)
- [userComment](PrintersServiceCreateRequest.md#usercomment)
- [fields](PrintersServiceCreateRequest.md#fields)
- [runtime](PrintersServiceCreateRequest.md#runtime)
- [typeName](PrintersServiceCreateRequest.md#typename)

### Methods

- [clone](PrintersServiceCreateRequest.md#clone)
- [equals](PrintersServiceCreateRequest.md#equals)
- [fromBinary](PrintersServiceCreateRequest.md#frombinary)
- [fromJson](PrintersServiceCreateRequest.md#fromjson)
- [fromJsonString](PrintersServiceCreateRequest.md#fromjsonstring)
- [getType](PrintersServiceCreateRequest.md#gettype)
- [toBinary](PrintersServiceCreateRequest.md#tobinary)
- [toJSON](PrintersServiceCreateRequest.md#tojson)
- [toJson](PrintersServiceCreateRequest.md#tojson-1)
- [toJsonString](PrintersServiceCreateRequest.md#tojsonstring)
- [equals](PrintersServiceCreateRequest.md#equals-1)
- [fromBinary](PrintersServiceCreateRequest.md#frombinary-1)
- [fromJson](PrintersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PrintersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PrintersServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)\> |

#### Overrides

Message&lt;PrintersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/printers_pb.ts:166](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L166)

## Properties

### code

• **code**: `string` = `""`

Code of the printer

**`Generated`**

from field: string code = 11;

#### Defined in

[src/printers_pb.ts:136](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L136)

___

### description

• **description**: `string` = `""`

Description of the printer

**`Generated`**

from field: string description = 15;

#### Defined in

[src/printers_pb.ts:164](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L164)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/printers_pb.ts:115](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L115)

___

### ipAddress

• **ipAddress**: `string` = `""`

The IP address of the printer

**`Generated`**

from field: string ip_address = 13;

#### Defined in

[src/printers_pb.ts:150](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L150)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/printers_pb.ts:122](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L122)

___

### mode

• **mode**: [`PRINTER_MODE`](../enums/PRINTER_MODE.md) = `PRINTER_MODE.PRINTER_MODE_ANY_UNSPECIFIED`

The printer mode

**`Generated`**

from field: tcube.PRINTER_MODE mode = 12;

#### Defined in

[src/printers_pb.ts:143](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L143)

___

### name

• **name**: `string` = `""`

The name of the printer

**`Generated`**

from field: string name = 10;

#### Defined in

[src/printers_pb.ts:129](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L129)

___

### port

• **port**: `bigint` = `protoInt64.zero`

The port that the printer is configured on

**`Generated`**

from field: uint64 port = 14;

#### Defined in

[src/printers_pb.ts:157](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L157)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/printers_pb.ts:108](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L108)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/printers_pb.ts:173](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L173)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/printers_pb.ts:171](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L171)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.PrintersServiceCreateRequest"``

#### Defined in

[src/printers_pb.ts:172](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L172)

## Methods

### clone

▸ **clone**(): [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md) \| `PlainMessage`<[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

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

[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md) \| `PlainMessage`<[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md) \| `PlainMessage`<[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/printers_pb.ts:197](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L197)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Defined in

[src/printers_pb.ts:185](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L185)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Defined in

[src/printers_pb.ts:189](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L189)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceCreateRequest`](PrintersServiceCreateRequest.md)

#### Defined in

[src/printers_pb.ts:193](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/printers_pb.ts#L193)
