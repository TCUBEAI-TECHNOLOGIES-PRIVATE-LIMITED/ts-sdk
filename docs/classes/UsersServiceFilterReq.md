[tcubesa-sdk](../README.md) / [Exports](../modules.md) / UsersServiceFilterReq

# Class: UsersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message tcube.UsersServiceFilterReq

## Hierarchy

- `Message`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

  ↳ **`UsersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceFilterReq.md#constructor)

### Properties

- [count](UsersServiceFilterReq.md#count)
- [creationTimestampEnd](UsersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](UsersServiceFilterReq.md#creationtimestampstart)
- [email](UsersServiceFilterReq.md#email)
- [firstName](UsersServiceFilterReq.md#firstname)
- [isActive](UsersServiceFilterReq.md#isactive)
- [lastName](UsersServiceFilterReq.md#lastname)
- [offset](UsersServiceFilterReq.md#offset)
- [phone](UsersServiceFilterReq.md#phone)
- [sortKey](UsersServiceFilterReq.md#sortkey)
- [sortOrder](UsersServiceFilterReq.md#sortorder)
- [username](UsersServiceFilterReq.md#username)
- [fields](UsersServiceFilterReq.md#fields)
- [runtime](UsersServiceFilterReq.md#runtime)
- [typeName](UsersServiceFilterReq.md#typename)

### Methods

- [clone](UsersServiceFilterReq.md#clone)
- [equals](UsersServiceFilterReq.md#equals)
- [fromBinary](UsersServiceFilterReq.md#frombinary)
- [fromJson](UsersServiceFilterReq.md#fromjson)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring)
- [getType](UsersServiceFilterReq.md#gettype)
- [toBinary](UsersServiceFilterReq.md#tobinary)
- [toJSON](UsersServiceFilterReq.md#tojson)
- [toJson](UsersServiceFilterReq.md#tojson-1)
- [toJsonString](UsersServiceFilterReq.md#tojsonstring)
- [equals](UsersServiceFilterReq.md#equals-1)
- [fromBinary](UsersServiceFilterReq.md#frombinary-1)
- [fromJson](UsersServiceFilterReq.md#fromjson-1)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Overrides

Message&lt;UsersServiceFilterReq\&gt;.constructor

#### Defined in

[src/users_pb.ts:824](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L824)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/users_pb.ts:752](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L752)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/users_pb.ts:787](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L787)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/users_pb.ts:780](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L780)

___

### email

• **email**: `string` = `""`

The email address of the user

**`Generated`**

from field: string email = 23;

#### Defined in

[src/users_pb.ts:815](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L815)

___

### firstName

• **firstName**: `string` = `""`

The first name of the user

**`Generated`**

from field: string first_name = 20;

#### Defined in

[src/users_pb.ts:794](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L794)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/users_pb.ts:745](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L745)

___

### lastName

• **lastName**: `string` = `""`

The last name of the user

**`Generated`**

from field: string last_name = 21;

#### Defined in

[src/users_pb.ts:801](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L801)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/users_pb.ts:759](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L759)

___

### phone

• **phone**: `string` = `""`

The phone number of the user

**`Generated`**

from field: string phone = 24;

#### Defined in

[src/users_pb.ts:822](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L822)

___

### sortKey

• **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md) = `USER_SORT_KEY.USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users_pb.ts:773](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L773)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: tcube.SORT_ORDER sort_order = 4;

#### Defined in

[src/users_pb.ts:766](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L766)

___

### username

• **username**: `string` = `""`

Username of the user

**`Generated`**

from field: string username = 22;

#### Defined in

[src/users_pb.ts:808](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L808)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:831](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L831)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:829](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L829)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.UsersServiceFilterReq"``

#### Defined in

[src/users_pb.ts:830](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L830)

## Methods

### clone

▸ **clone**(): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

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

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:858](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L858)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users_pb.ts:846](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L846)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users_pb.ts:850](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L850)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users_pb.ts:854](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/users_pb.ts#L854)
