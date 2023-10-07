[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ScansServiceShippingScanCreateRequest

# Class: ScansServiceShippingScanCreateRequest

Describes the data structure to perform the create operation on a shipping scan

**`Generated`**

from message tcube.ScansServiceShippingScanCreateRequest

## Hierarchy

- `Message`<[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)\>

  ↳ **`ScansServiceShippingScanCreateRequest`**

## Table of contents

### Constructors

- [constructor](ScansServiceShippingScanCreateRequest.md#constructor)

### Properties

- [inferredFrom](ScansServiceShippingScanCreateRequest.md#inferredfrom)
- [latitude](ScansServiceShippingScanCreateRequest.md#latitude)
- [longitude](ScansServiceShippingScanCreateRequest.md#longitude)
- [shippingUuid](ScansServiceShippingScanCreateRequest.md#shippinguuid)
- [fields](ScansServiceShippingScanCreateRequest.md#fields)
- [runtime](ScansServiceShippingScanCreateRequest.md#runtime)
- [typeName](ScansServiceShippingScanCreateRequest.md#typename)

### Methods

- [clone](ScansServiceShippingScanCreateRequest.md#clone)
- [equals](ScansServiceShippingScanCreateRequest.md#equals)
- [fromBinary](ScansServiceShippingScanCreateRequest.md#frombinary)
- [fromJson](ScansServiceShippingScanCreateRequest.md#fromjson)
- [fromJsonString](ScansServiceShippingScanCreateRequest.md#fromjsonstring)
- [getType](ScansServiceShippingScanCreateRequest.md#gettype)
- [toBinary](ScansServiceShippingScanCreateRequest.md#tobinary)
- [toJSON](ScansServiceShippingScanCreateRequest.md#tojson)
- [toJson](ScansServiceShippingScanCreateRequest.md#tojson-1)
- [toJsonString](ScansServiceShippingScanCreateRequest.md#tojsonstring)
- [equals](ScansServiceShippingScanCreateRequest.md#equals-1)
- [fromBinary](ScansServiceShippingScanCreateRequest.md#frombinary-1)
- [fromJson](ScansServiceShippingScanCreateRequest.md#fromjson-1)
- [fromJsonString](ScansServiceShippingScanCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ScansServiceShippingScanCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)\> |

#### Overrides

Message&lt;ScansServiceShippingScanCreateRequest\&gt;.constructor

#### Defined in

[src/scans_pb.ts:618](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L618)

## Properties

### inferredFrom

• **inferredFrom**: [`INFERRED_FROM`](../enums/INFERRED_FROM.md) = `INFERRED_FROM.INFERRED_FROM_IP_UNSPECIFIED`

Stores if the location has been inferred from IP or from user provided geocoordinates

**`Generated`**

from field: tcube.INFERRED_FROM inferred_from = 13;

#### Defined in

[src/scans_pb.ts:616](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L616)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/scans_pb.ts:602](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L602)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/scans_pb.ts:609](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L609)

___

### shippingUuid

• **shippingUuid**: `string` = `""`

The UUID of the shipping that needs to be updated

**`Generated`**

from field: string shipping_uuid = 10;

#### Defined in

[src/scans_pb.ts:595](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L595)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/scans_pb.ts:625](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L625)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/scans_pb.ts:623](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L623)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ScansServiceShippingScanCreateRequest"``

#### Defined in

[src/scans_pb.ts:624](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L624)

## Methods

### clone

▸ **clone**(): [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

Create a deep copy.

#### Returns

[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md) \| `PlainMessage`<[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

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

[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)\>

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
| `a` | `undefined` \| [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md) \| `PlainMessage`<[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)\> |
| `b` | `undefined` \| [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md) \| `PlainMessage`<[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/scans_pb.ts:644](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L644)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:632](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L632)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:636](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L636)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ScansServiceShippingScanCreateRequest`](ScansServiceShippingScanCreateRequest.md)

#### Defined in

[src/scans_pb.ts:640](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/scans_pb.ts#L640)
