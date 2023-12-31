[scanswift-sdk](../README.md) / [Exports](../modules.md) / PrintersServiceUpdateRequest

# Class: PrintersServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a printer

**`Generated`**

from message scanswift.PrintersServiceUpdateRequest

## Hierarchy

- `Message`<[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)\>

  ↳ **`PrintersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PrintersServiceUpdateRequest.md#constructor)

### Properties

- [code](PrintersServiceUpdateRequest.md#code)
- [description](PrintersServiceUpdateRequest.md#description)
- [ipAddress](PrintersServiceUpdateRequest.md#ipaddress)
- [mode](PrintersServiceUpdateRequest.md#mode)
- [name](PrintersServiceUpdateRequest.md#name)
- [port](PrintersServiceUpdateRequest.md#port)
- [userComment](PrintersServiceUpdateRequest.md#usercomment)
- [uuid](PrintersServiceUpdateRequest.md#uuid)
- [fields](PrintersServiceUpdateRequest.md#fields)
- [runtime](PrintersServiceUpdateRequest.md#runtime)
- [typeName](PrintersServiceUpdateRequest.md#typename)

### Methods

- [clone](PrintersServiceUpdateRequest.md#clone)
- [equals](PrintersServiceUpdateRequest.md#equals)
- [fromBinary](PrintersServiceUpdateRequest.md#frombinary)
- [fromJson](PrintersServiceUpdateRequest.md#fromjson)
- [fromJsonString](PrintersServiceUpdateRequest.md#fromjsonstring)
- [getType](PrintersServiceUpdateRequest.md#gettype)
- [toBinary](PrintersServiceUpdateRequest.md#tobinary)
- [toJSON](PrintersServiceUpdateRequest.md#tojson)
- [toJson](PrintersServiceUpdateRequest.md#tojson-1)
- [toJsonString](PrintersServiceUpdateRequest.md#tojsonstring)
- [equals](PrintersServiceUpdateRequest.md#equals-1)
- [fromBinary](PrintersServiceUpdateRequest.md#frombinary-1)
- [fromJson](PrintersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PrintersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PrintersServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;PrintersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/printers_pb.ts:265](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L265)

## Properties

### code

• **code**: `string` = `""`

Code of the printer

**`Generated`**

from field: string code = 11;

#### Defined in

[src/printers_pb.ts:235](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L235)

___

### description

• **description**: `string` = `""`

Description of the printer

**`Generated`**

from field: string description = 15;

#### Defined in

[src/printers_pb.ts:263](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L263)

___

### ipAddress

• **ipAddress**: `string` = `""`

The IP address of the printer

**`Generated`**

from field: string ip_address = 13;

#### Defined in

[src/printers_pb.ts:249](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L249)

___

### mode

• **mode**: [`PRINTER_MODE`](../enums/PRINTER_MODE.md) = `PRINTER_MODE.PRINTER_MODE_ANY_UNSPECIFIED`

The printer mode

**`Generated`**

from field: scanswift.PRINTER_MODE mode = 12;

#### Defined in

[src/printers_pb.ts:242](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L242)

___

### name

• **name**: `string` = `""`

The name of the printer

**`Generated`**

from field: string name = 10;

#### Defined in

[src/printers_pb.ts:228](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L228)

___

### port

• **port**: `bigint` = `protoInt64.zero`

The port that the printer is configured on

**`Generated`**

from field: uint64 port = 14;

#### Defined in

[src/printers_pb.ts:256](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L256)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/printers_pb.ts:214](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L214)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/printers_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L221)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/printers_pb.ts:272](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L272)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/printers_pb.ts:270](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L270)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PrintersServiceUpdateRequest"``

#### Defined in

[src/printers_pb.ts:271](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L271)

## Methods

### clone

▸ **clone**(): [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md) \| `PlainMessage`<[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

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

[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md) \| `PlainMessage`<[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md) \| `PlainMessage`<[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/printers_pb.ts:295](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L295)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Defined in

[src/printers_pb.ts:283](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L283)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Defined in

[src/printers_pb.ts:287](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L287)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PrintersServiceUpdateRequest`](PrintersServiceUpdateRequest.md)

#### Defined in

[src/printers_pb.ts:291](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/printers_pb.ts#L291)
