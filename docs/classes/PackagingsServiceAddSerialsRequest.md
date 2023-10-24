[scanswift-sdk](../README.md) / [Exports](../modules.md) / PackagingsServiceAddSerialsRequest

# Class: PackagingsServiceAddSerialsRequest

Describes the necessary data structure during addition of multiple serials to a packaging

**`Generated`**

from message scanswift.PackagingsServiceAddSerialsRequest

## Hierarchy

- `Message`<[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)\>

  ↳ **`PackagingsServiceAddSerialsRequest`**

## Table of contents

### Constructors

- [constructor](PackagingsServiceAddSerialsRequest.md#constructor)

### Properties

- [entityUuid](PackagingsServiceAddSerialsRequest.md#entityuuid)
- [latitude](PackagingsServiceAddSerialsRequest.md#latitude)
- [list](PackagingsServiceAddSerialsRequest.md#list)
- [longitude](PackagingsServiceAddSerialsRequest.md#longitude)
- [packagingUuid](PackagingsServiceAddSerialsRequest.md#packaginguuid)
- [userComment](PackagingsServiceAddSerialsRequest.md#usercomment)
- [fields](PackagingsServiceAddSerialsRequest.md#fields)
- [runtime](PackagingsServiceAddSerialsRequest.md#runtime)
- [typeName](PackagingsServiceAddSerialsRequest.md#typename)

### Methods

- [clone](PackagingsServiceAddSerialsRequest.md#clone)
- [equals](PackagingsServiceAddSerialsRequest.md#equals)
- [fromBinary](PackagingsServiceAddSerialsRequest.md#frombinary)
- [fromJson](PackagingsServiceAddSerialsRequest.md#fromjson)
- [fromJsonString](PackagingsServiceAddSerialsRequest.md#fromjsonstring)
- [getType](PackagingsServiceAddSerialsRequest.md#gettype)
- [toBinary](PackagingsServiceAddSerialsRequest.md#tobinary)
- [toJSON](PackagingsServiceAddSerialsRequest.md#tojson)
- [toJson](PackagingsServiceAddSerialsRequest.md#tojson-1)
- [toJsonString](PackagingsServiceAddSerialsRequest.md#tojsonstring)
- [equals](PackagingsServiceAddSerialsRequest.md#equals-1)
- [fromBinary](PackagingsServiceAddSerialsRequest.md#frombinary-1)
- [fromJson](PackagingsServiceAddSerialsRequest.md#fromjson-1)
- [fromJsonString](PackagingsServiceAddSerialsRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PackagingsServiceAddSerialsRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)\> |

#### Overrides

Message&lt;PackagingsServiceAddSerialsRequest\&gt;.constructor

#### Defined in

[src/packagings_pb.ts:583](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L583)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/packagings_pb.ts:553](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L553)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this packaging was created

**`Generated`**

from field: double latitude = 11;

#### Defined in

[src/packagings_pb.ts:567](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L567)

___

### list

• **list**: [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)[] = `[]`

List of serial codes

**`Generated`**

from field: repeated scanswift.SerialsServiceSerialCodes list = 20;

#### Defined in

[src/packagings_pb.ts:581](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L581)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this packaging was created

**`Generated`**

from field: double longitude = 12;

#### Defined in

[src/packagings_pb.ts:574](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L574)

___

### packagingUuid

• **packagingUuid**: `string` = `""`

UUID of the packaging

**`Generated`**

from field: string packaging_uuid = 10;

#### Defined in

[src/packagings_pb.ts:560](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L560)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/packagings_pb.ts:546](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L546)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/packagings_pb.ts:590](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L590)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/packagings_pb.ts:588](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L588)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.PackagingsServiceAddSerialsRequest"``

#### Defined in

[src/packagings_pb.ts:589](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L589)

## Methods

### clone

▸ **clone**(): [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

Create a deep copy.

#### Returns

[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md) \| `PlainMessage`<[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

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

[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)\>

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
| `a` | `undefined` \| [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md) \| `PlainMessage`<[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)\> |
| `b` | `undefined` \| [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md) \| `PlainMessage`<[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/packagings_pb.ts:611](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L611)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Defined in

[src/packagings_pb.ts:599](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L599)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Defined in

[src/packagings_pb.ts:603](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L603)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PackagingsServiceAddSerialsRequest`](PackagingsServiceAddSerialsRequest.md)

#### Defined in

[src/packagings_pb.ts:607](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/packagings_pb.ts#L607)
