[tcubesa-sdk](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

Describes the data structure of each entity on the platform

**`Generated`**

from message tcube.Entity

## Hierarchy

- `Message`<[`Entity`](Entity.md)\>

  ↳ **`Entity`**

## Table of contents

### Constructors

- [constructor](Entity.md#constructor)

### Properties

- [address](Entity.md#address)
- [city](Entity.md#city)
- [code](Entity.md#code)
- [description](Entity.md#description)
- [domain](Entity.md#domain)
- [email](Entity.md#email)
- [globalIdentifier](Entity.md#globalidentifier)
- [isVerified](Entity.md#isverified)
- [metadata](Entity.md#metadata)
- [name](Entity.md#name)
- [phone](Entity.md#phone)
- [state](Entity.md#state)
- [zipCode](Entity.md#zipcode)
- [fields](Entity.md#fields)
- [runtime](Entity.md#runtime)
- [typeName](Entity.md#typename)

### Methods

- [clone](Entity.md#clone)
- [equals](Entity.md#equals)
- [fromBinary](Entity.md#frombinary)
- [fromJson](Entity.md#fromjson)
- [fromJsonString](Entity.md#fromjsonstring)
- [getType](Entity.md#gettype)
- [toBinary](Entity.md#tobinary)
- [toJSON](Entity.md#tojson)
- [toJson](Entity.md#tojson-1)
- [toJsonString](Entity.md#tojsonstring)
- [equals](Entity.md#equals-1)
- [fromBinary](Entity.md#frombinary-1)
- [fromJson](Entity.md#fromjson-1)
- [fromJsonString](Entity.md#fromjsonstring-1)

## Constructors

### constructor

• **new Entity**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Entity`](Entity.md)\> |

#### Overrides

Message&lt;Entity\&gt;.constructor

#### Defined in

[src/entities_pb.ts:441](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L441)

## Properties

### address

• **address**: `string` = `""`

The address of the entity

**`Generated`**

from field: string address = 16;

#### Defined in

[src/entities_pb.ts:404](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L404)

___

### city

• **city**: `string` = `""`

The city in which the entity is based out of

**`Generated`**

from field: string city = 17;

#### Defined in

[src/entities_pb.ts:411](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L411)

___

### code

• **code**: `string` = `""`

Code of the entity

**`Generated`**

from field: string code = 13;

#### Defined in

[src/entities_pb.ts:383](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L383)

___

### description

• **description**: `string` = `""`

Description of the entity

**`Generated`**

from field: string description = 12;

#### Defined in

[src/entities_pb.ts:376](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L376)

___

### domain

• **domain**: `string` = `""`

An optional custom domain name, which will be used to display info about serials, packagings and shippings

**`Generated`**

from field: string domain = 21;

#### Defined in

[src/entities_pb.ts:439](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L439)

___

### email

• **email**: `string` = `""`

The email address of the entity

**`Generated`**

from field: string email = 14;

#### Defined in

[src/entities_pb.ts:390](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L390)

___

### globalIdentifier

• **globalIdentifier**: `string` = `""`

The global identifier of the entity

**`Generated`**

from field: string global_identifier = 11;

#### Defined in

[src/entities_pb.ts:369](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L369)

___

### isVerified

• **isVerified**: `boolean` = `false`

Stores if the entity has been verified

**`Generated`**

from field: bool is_verified = 20;

#### Defined in

[src/entities_pb.ts:432](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L432)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/entities_pb.ts:355](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L355)

___

### name

• **name**: `string` = `""`

The name of the entity

**`Generated`**

from field: string name = 10;

#### Defined in

[src/entities_pb.ts:362](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L362)

___

### phone

• **phone**: `string` = `""`

The phone number of the entity

**`Generated`**

from field: string phone = 15;

#### Defined in

[src/entities_pb.ts:397](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L397)

___

### state

• **state**: `string` = `""`

The state in which the entity is based out of

**`Generated`**

from field: string state = 18;

#### Defined in

[src/entities_pb.ts:418](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L418)

___

### zipCode

• **zipCode**: `string` = `""`

The zipcode of the location in which the entity is based out of

**`Generated`**

from field: string zip_code = 19;

#### Defined in

[src/entities_pb.ts:425](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L425)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:448](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L448)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:446](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L446)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.Entity"``

#### Defined in

[src/entities_pb.ts:447](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L447)

## Methods

### clone

▸ **clone**(): [`Entity`](Entity.md)

Create a deep copy.

#### Returns

[`Entity`](Entity.md)

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
| `other` | `undefined` \| ``null`` \| [`Entity`](Entity.md) \| `PlainMessage`<[`Entity`](Entity.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Entity`](Entity.md)

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

[`Entity`](Entity.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Entity`](Entity.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Entity`](Entity.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Entity`](Entity.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Entity`](Entity.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Entity`](Entity.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Entity`](Entity.md)\>

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
| `a` | `undefined` \| [`Entity`](Entity.md) \| `PlainMessage`<[`Entity`](Entity.md)\> |
| `b` | `undefined` \| [`Entity`](Entity.md) \| `PlainMessage`<[`Entity`](Entity.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:476](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L476)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Entity`](Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Entity`](Entity.md)

#### Defined in

[src/entities_pb.ts:464](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L464)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Entity`](Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Entity`](Entity.md)

#### Defined in

[src/entities_pb.ts:468](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L468)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Entity`](Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Entity`](Entity.md)

#### Defined in

[src/entities_pb.ts:472](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L472)
