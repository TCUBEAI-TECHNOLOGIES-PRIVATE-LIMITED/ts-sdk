[scanswift-sdk](../README.md) / [Exports](../modules.md) / Printer

# Class: Printer

Describes the data structure of each printer on the platform

**`Generated`**

from message scanswift.Printer

## Hierarchy

- `Message`<[`Printer`](Printer.md)\>

  ↳ **`Printer`**

## Table of contents

### Constructors

- [constructor](Printer.md#constructor)

### Properties

- [code](Printer.md#code)
- [description](Printer.md#description)
- [entityUuid](Printer.md#entityuuid)
- [ipAddress](Printer.md#ipaddress)
- [locationUuid](Printer.md#locationuuid)
- [metadata](Printer.md#metadata)
- [mode](Printer.md#mode)
- [name](Printer.md#name)
- [port](Printer.md#port)
- [fields](Printer.md#fields)
- [runtime](Printer.md#runtime)
- [typeName](Printer.md#typename)

### Methods

- [clone](Printer.md#clone)
- [equals](Printer.md#equals)
- [fromBinary](Printer.md#frombinary)
- [fromJson](Printer.md#fromjson)
- [fromJsonString](Printer.md#fromjsonstring)
- [getType](Printer.md#gettype)
- [toBinary](Printer.md#tobinary)
- [toJSON](Printer.md#tojson)
- [toJson](Printer.md#tojson-1)
- [toJsonString](Printer.md#tojsonstring)
- [equals](Printer.md#equals-1)
- [fromBinary](Printer.md#frombinary-1)
- [fromJson](Printer.md#fromjson-1)
- [fromJsonString](Printer.md#fromjsonstring-1)

## Constructors

### constructor

• **new Printer**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Printer`](Printer.md)\> |

#### Overrides

Message&lt;Printer\&gt;.constructor

#### Defined in

[src/printers_pb.ts:370](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L370)

## Properties

### code

• **code**: `string` = `""`

Code of the printer

**`Generated`**

from field: string code = 11;

#### Defined in

[src/printers_pb.ts:340](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L340)

___

### description

• **description**: `string` = `""`

Description of the printer

**`Generated`**

from field: string description = 15;

#### Defined in

[src/printers_pb.ts:368](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L368)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/printers_pb.ts:319](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L319)

___

### ipAddress

• **ipAddress**: `string` = `""`

The IP address of the printer

**`Generated`**

from field: string ip_address = 13;

#### Defined in

[src/printers_pb.ts:354](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L354)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/printers_pb.ts:326](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L326)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: scanswift.Metadata metadata = 1;

#### Defined in

[src/printers_pb.ts:312](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L312)

___

### mode

• **mode**: [`PRINTER_MODE`](../enums/PRINTER_MODE.md) = `PRINTER_MODE.PRINTER_MODE_ANY_UNSPECIFIED`

The printer mode

**`Generated`**

from field: scanswift.PRINTER_MODE mode = 12;

#### Defined in

[src/printers_pb.ts:347](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L347)

___

### name

• **name**: `string` = `""`

The name of the printer

**`Generated`**

from field: string name = 10;

#### Defined in

[src/printers_pb.ts:333](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L333)

___

### port

• **port**: `bigint` = `protoInt64.zero`

The port that the printer is configured on

**`Generated`**

from field: uint64 port = 14;

#### Defined in

[src/printers_pb.ts:361](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L361)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/printers_pb.ts:377](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L377)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/printers_pb.ts:375](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L375)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.Printer"``

#### Defined in

[src/printers_pb.ts:376](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L376)

## Methods

### clone

▸ **clone**(): [`Printer`](Printer.md)

Create a deep copy.

#### Returns

[`Printer`](Printer.md)

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
| `other` | `undefined` \| ``null`` \| [`Printer`](Printer.md) \| `PlainMessage`<[`Printer`](Printer.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Printer`](Printer.md)

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

[`Printer`](Printer.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Printer`](Printer.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Printer`](Printer.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Printer`](Printer.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Printer`](Printer.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Printer`](Printer.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Printer`](Printer.md)\>

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
| `a` | `undefined` \| [`Printer`](Printer.md) \| `PlainMessage`<[`Printer`](Printer.md)\> |
| `b` | `undefined` \| [`Printer`](Printer.md) \| `PlainMessage`<[`Printer`](Printer.md)\> |

#### Returns

`boolean`

#### Defined in

[src/printers_pb.ts:401](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L401)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Printer`](Printer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Printer`](Printer.md)

#### Defined in

[src/printers_pb.ts:389](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L389)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Printer`](Printer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Printer`](Printer.md)

#### Defined in

[src/printers_pb.ts:393](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L393)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Printer`](Printer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Printer`](Printer.md)

#### Defined in

[src/printers_pb.ts:397](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L397)
