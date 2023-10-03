[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesServiceUpdateRequest

# Class: EntitiesServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a entity

**`Generated`**

from message tcube.EntitiesServiceUpdateRequest

## Hierarchy

- `Message`<[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)\>

  ↳ **`EntitiesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EntitiesServiceUpdateRequest.md#constructor)

### Properties

- [address](EntitiesServiceUpdateRequest.md#address)
- [city](EntitiesServiceUpdateRequest.md#city)
- [description](EntitiesServiceUpdateRequest.md#description)
- [domain](EntitiesServiceUpdateRequest.md#domain)
- [email](EntitiesServiceUpdateRequest.md#email)
- [globalIdentifier](EntitiesServiceUpdateRequest.md#globalidentifier)
- [name](EntitiesServiceUpdateRequest.md#name)
- [phone](EntitiesServiceUpdateRequest.md#phone)
- [state](EntitiesServiceUpdateRequest.md#state)
- [userComment](EntitiesServiceUpdateRequest.md#usercomment)
- [uuid](EntitiesServiceUpdateRequest.md#uuid)
- [zipCode](EntitiesServiceUpdateRequest.md#zipcode)
- [fields](EntitiesServiceUpdateRequest.md#fields)
- [runtime](EntitiesServiceUpdateRequest.md#runtime)
- [typeName](EntitiesServiceUpdateRequest.md#typename)

### Methods

- [clone](EntitiesServiceUpdateRequest.md#clone)
- [equals](EntitiesServiceUpdateRequest.md#equals)
- [fromBinary](EntitiesServiceUpdateRequest.md#frombinary)
- [fromJson](EntitiesServiceUpdateRequest.md#fromjson)
- [fromJsonString](EntitiesServiceUpdateRequest.md#fromjsonstring)
- [getType](EntitiesServiceUpdateRequest.md#gettype)
- [toBinary](EntitiesServiceUpdateRequest.md#tobinary)
- [toJSON](EntitiesServiceUpdateRequest.md#tojson)
- [toJson](EntitiesServiceUpdateRequest.md#tojson-1)
- [toJsonString](EntitiesServiceUpdateRequest.md#tojsonstring)
- [equals](EntitiesServiceUpdateRequest.md#equals-1)
- [fromBinary](EntitiesServiceUpdateRequest.md#frombinary-1)
- [fromJson](EntitiesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](EntitiesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;EntitiesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/entities_pb.ts:304](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L304)

## Properties

### address

• **address**: `string` = `""`

The address of the entity

**`Generated`**

from field: string address = 17;

#### Defined in

[src/entities_pb.ts:274](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L274)

___

### city

• **city**: `string` = `""`

The city in which the entity is based out of

**`Generated`**

from field: string city = 18;

#### Defined in

[src/entities_pb.ts:281](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L281)

___

### description

• **description**: `string` = `""`

Description of the entity

**`Generated`**

from field: string description = 14;

#### Defined in

[src/entities_pb.ts:253](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L253)

___

### domain

• **domain**: `string` = `""`

An optional custom domain name, which will be used to display info about serials, packagings and shippings

**`Generated`**

from field: string domain = 21;

#### Defined in

[src/entities_pb.ts:302](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L302)

___

### email

• **email**: `string` = `""`

The email address of the entity

**`Generated`**

from field: string email = 15;

#### Defined in

[src/entities_pb.ts:260](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L260)

___

### globalIdentifier

• **globalIdentifier**: `string` = `""`

The global identifier of the entity

**`Generated`**

from field: string global_identifier = 11;

#### Defined in

[src/entities_pb.ts:246](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L246)

___

### name

• **name**: `string` = `""`

The name of the entity

**`Generated`**

from field: string name = 10;

#### Defined in

[src/entities_pb.ts:239](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L239)

___

### phone

• **phone**: `string` = `""`

The phone number of the entity

**`Generated`**

from field: string phone = 16;

#### Defined in

[src/entities_pb.ts:267](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L267)

___

### state

• **state**: `string` = `""`

The state in which the entity is based out of

**`Generated`**

from field: string state = 19;

#### Defined in

[src/entities_pb.ts:288](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L288)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/entities_pb.ts:225](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L225)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/entities_pb.ts:232](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L232)

___

### zipCode

• **zipCode**: `string` = `""`

The zipcode of the location in which the entity is based out of

**`Generated`**

from field: string zip_code = 20;

#### Defined in

[src/entities_pb.ts:295](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L295)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:311](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L311)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:309](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L309)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesServiceUpdateRequest"``

#### Defined in

[src/entities_pb.ts:310](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L310)

## Methods

### clone

▸ **clone**(): [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md) \| `PlainMessage`<[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

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

[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md) \| `PlainMessage`<[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md) \| `PlainMessage`<[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:338](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L338)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Defined in

[src/entities_pb.ts:326](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L326)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Defined in

[src/entities_pb.ts:330](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L330)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceUpdateRequest`](EntitiesServiceUpdateRequest.md)

#### Defined in

[src/entities_pb.ts:334](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/3c64799/src/entities_pb.ts#L334)
