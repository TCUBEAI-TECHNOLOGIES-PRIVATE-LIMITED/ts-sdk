[tcubesa-sdk](../README.md) / [Exports](../modules.md) / EntitiesServiceCreateRequest

# Class: EntitiesServiceCreateRequest

Describes the necessary data structure during creation of a entity

**`Generated`**

from message tcube.EntitiesServiceCreateRequest

## Hierarchy

- `Message`<[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)\>

  ↳ **`EntitiesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EntitiesServiceCreateRequest.md#constructor)

### Properties

- [address](EntitiesServiceCreateRequest.md#address)
- [city](EntitiesServiceCreateRequest.md#city)
- [description](EntitiesServiceCreateRequest.md#description)
- [domain](EntitiesServiceCreateRequest.md#domain)
- [email](EntitiesServiceCreateRequest.md#email)
- [firstName](EntitiesServiceCreateRequest.md#firstname)
- [globalIdentifier](EntitiesServiceCreateRequest.md#globalidentifier)
- [lastName](EntitiesServiceCreateRequest.md#lastname)
- [name](EntitiesServiceCreateRequest.md#name)
- [phone](EntitiesServiceCreateRequest.md#phone)
- [roleUuid](EntitiesServiceCreateRequest.md#roleuuid)
- [state](EntitiesServiceCreateRequest.md#state)
- [userComment](EntitiesServiceCreateRequest.md#usercomment)
- [zipCode](EntitiesServiceCreateRequest.md#zipcode)
- [fields](EntitiesServiceCreateRequest.md#fields)
- [runtime](EntitiesServiceCreateRequest.md#runtime)
- [typeName](EntitiesServiceCreateRequest.md#typename)

### Methods

- [clone](EntitiesServiceCreateRequest.md#clone)
- [equals](EntitiesServiceCreateRequest.md#equals)
- [fromBinary](EntitiesServiceCreateRequest.md#frombinary)
- [fromJson](EntitiesServiceCreateRequest.md#fromjson)
- [fromJsonString](EntitiesServiceCreateRequest.md#fromjsonstring)
- [getType](EntitiesServiceCreateRequest.md#gettype)
- [toBinary](EntitiesServiceCreateRequest.md#tobinary)
- [toJSON](EntitiesServiceCreateRequest.md#tojson)
- [toJson](EntitiesServiceCreateRequest.md#tojson-1)
- [toJsonString](EntitiesServiceCreateRequest.md#tojsonstring)
- [equals](EntitiesServiceCreateRequest.md#equals-1)
- [fromBinary](EntitiesServiceCreateRequest.md#frombinary-1)
- [fromJson](EntitiesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EntitiesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EntitiesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;EntitiesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/entities_pb.ts:172](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L172)

## Properties

### address

• **address**: `string` = `""`

The address of the entity

**`Generated`**

from field: string address = 17;

#### Defined in

[src/entities_pb.ts:115](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L115)

___

### city

• **city**: `string` = `""`

The city in which the entity is based out of

**`Generated`**

from field: string city = 18;

#### Defined in

[src/entities_pb.ts:122](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L122)

___

### description

• **description**: `string` = `""`

Description of the entity

**`Generated`**

from field: string description = 14;

#### Defined in

[src/entities_pb.ts:94](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L94)

___

### domain

• **domain**: `string` = `""`

An optional custom domain name, which will be used to display info about serials, packagings and shippings

**`Generated`**

from field: string domain = 21;

#### Defined in

[src/entities_pb.ts:143](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L143)

___

### email

• **email**: `string` = `""`

The email address of the entity

**`Generated`**

from field: string email = 15;

#### Defined in

[src/entities_pb.ts:101](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L101)

___

### firstName

• **firstName**: `string` = `""`

The first name of the entity administrator

**`Generated`**

from field: string first_name = 30;

#### Defined in

[src/entities_pb.ts:150](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L150)

___

### globalIdentifier

• **globalIdentifier**: `string` = `""`

The global identifier of the entity

**`Generated`**

from field: string global_identifier = 11;

#### Defined in

[src/entities_pb.ts:87](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L87)

___

### lastName

• **lastName**: `string` = `""`

The last name of the entity administrator

// The password with which the user can login for the first time
string plain_text_password = 32 [(validate.rules).string = {
    pattern:   "^[0-9A-Za-z_@\\-]+$", // No spaces
    max_bytes: 100,
}];

**`Generated`**

from field: string last_name = 31;

#### Defined in

[src/entities_pb.ts:163](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L163)

___

### name

• **name**: `string` = `""`

The name of the entity

**`Generated`**

from field: string name = 10;

#### Defined in

[src/entities_pb.ts:80](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L80)

___

### phone

• **phone**: `string` = `""`

The phone number of the entity

**`Generated`**

from field: string phone = 16;

#### Defined in

[src/entities_pb.ts:108](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L108)

___

### roleUuid

• **roleUuid**: `string` = `""`

The UUID of the role of the user that is creating this entity

**`Generated`**

from field: string role_uuid = 40;

#### Defined in

[src/entities_pb.ts:170](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L170)

___

### state

• **state**: `string` = `""`

The state in which the entity is based out of

**`Generated`**

from field: string state = 19;

#### Defined in

[src/entities_pb.ts:129](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L129)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/entities_pb.ts:73](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L73)

___

### zipCode

• **zipCode**: `string` = `""`

The zipcode of the location in which the entity is based out of

**`Generated`**

from field: string zip_code = 20;

#### Defined in

[src/entities_pb.ts:136](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L136)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/entities_pb.ts:179](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L179)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/entities_pb.ts:177](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L177)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.EntitiesServiceCreateRequest"``

#### Defined in

[src/entities_pb.ts:178](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L178)

## Methods

### clone

▸ **clone**(): [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md) \| `PlainMessage`<[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

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

[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md) \| `PlainMessage`<[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md) \| `PlainMessage`<[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/entities_pb.ts:208](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L208)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Defined in

[src/entities_pb.ts:196](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L196)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Defined in

[src/entities_pb.ts:200](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L200)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EntitiesServiceCreateRequest`](EntitiesServiceCreateRequest.md)

#### Defined in

[src/entities_pb.ts:204](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/entities_pb.ts#L204)
