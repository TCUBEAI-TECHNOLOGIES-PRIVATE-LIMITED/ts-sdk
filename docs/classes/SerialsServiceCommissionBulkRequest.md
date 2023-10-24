[scanswift-sdk](../README.md) / [Exports](../modules.md) / SerialsServiceCommissionBulkRequest

# Class: SerialsServiceCommissionBulkRequest

**`Generated`**

from message scanswift.SerialsServiceCommissionBulkRequest

## Hierarchy

- `Message`<[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)\>

  ↳ **`SerialsServiceCommissionBulkRequest`**

## Table of contents

### Constructors

- [constructor](SerialsServiceCommissionBulkRequest.md#constructor)

### Properties

- [entityUuid](SerialsServiceCommissionBulkRequest.md#entityuuid)
- [latitude](SerialsServiceCommissionBulkRequest.md#latitude)
- [list](SerialsServiceCommissionBulkRequest.md#list)
- [locationUuid](SerialsServiceCommissionBulkRequest.md#locationuuid)
- [longitude](SerialsServiceCommissionBulkRequest.md#longitude)
- [userComment](SerialsServiceCommissionBulkRequest.md#usercomment)
- [zoneUuid](SerialsServiceCommissionBulkRequest.md#zoneuuid)
- [fields](SerialsServiceCommissionBulkRequest.md#fields)
- [runtime](SerialsServiceCommissionBulkRequest.md#runtime)
- [typeName](SerialsServiceCommissionBulkRequest.md#typename)

### Methods

- [clone](SerialsServiceCommissionBulkRequest.md#clone)
- [equals](SerialsServiceCommissionBulkRequest.md#equals)
- [fromBinary](SerialsServiceCommissionBulkRequest.md#frombinary)
- [fromJson](SerialsServiceCommissionBulkRequest.md#fromjson)
- [fromJsonString](SerialsServiceCommissionBulkRequest.md#fromjsonstring)
- [getType](SerialsServiceCommissionBulkRequest.md#gettype)
- [toBinary](SerialsServiceCommissionBulkRequest.md#tobinary)
- [toJSON](SerialsServiceCommissionBulkRequest.md#tojson)
- [toJson](SerialsServiceCommissionBulkRequest.md#tojson-1)
- [toJsonString](SerialsServiceCommissionBulkRequest.md#tojsonstring)
- [equals](SerialsServiceCommissionBulkRequest.md#equals-1)
- [fromBinary](SerialsServiceCommissionBulkRequest.md#frombinary-1)
- [fromJson](SerialsServiceCommissionBulkRequest.md#fromjson-1)
- [fromJsonString](SerialsServiceCommissionBulkRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SerialsServiceCommissionBulkRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)\> |

#### Overrides

Message&lt;SerialsServiceCommissionBulkRequest\&gt;.constructor

#### Defined in

[src/serials_pb.ts:303](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L303)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/serials_pb.ts:266](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L266)

___

### latitude

• **latitude**: `number` = `0`

The latitude of the location where this activity was registered

**`Generated`**

from field: double latitude = 13;

#### Defined in

[src/serials_pb.ts:287](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L287)

___

### list

• **list**: [`SerialsServiceSerialCodes`](SerialsServiceSerialCodes.md)[] = `[]`

List of serial codes

**`Generated`**

from field: repeated scanswift.SerialsServiceSerialCodes list = 20;

#### Defined in

[src/serials_pb.ts:301](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L301)

___

### locationUuid

• **locationUuid**: `string` = `""`

UUID of the location

**`Generated`**

from field: string location_uuid = 9;

#### Defined in

[src/serials_pb.ts:273](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L273)

___

### longitude

• **longitude**: `number` = `0`

The longitude of the location where this activity was registered

**`Generated`**

from field: double longitude = 14;

#### Defined in

[src/serials_pb.ts:294](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L294)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/serials_pb.ts:259](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L259)

___

### zoneUuid

• **zoneUuid**: `string` = `""`

UUID of the zone

**`Generated`**

from field: string zone_uuid = 10;

#### Defined in

[src/serials_pb.ts:280](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L280)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/serials_pb.ts:310](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L310)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/serials_pb.ts:308](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L308)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.SerialsServiceCommissionBulkRequest"``

#### Defined in

[src/serials_pb.ts:309](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L309)

## Methods

### clone

▸ **clone**(): [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

Create a deep copy.

#### Returns

[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md) \| `PlainMessage`<[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

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

[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)\>

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
| `a` | `undefined` \| [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md) \| `PlainMessage`<[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)\> |
| `b` | `undefined` \| [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md) \| `PlainMessage`<[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/serials_pb.ts:332](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L332)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Defined in

[src/serials_pb.ts:320](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L320)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Defined in

[src/serials_pb.ts:324](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L324)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SerialsServiceCommissionBulkRequest`](SerialsServiceCommissionBulkRequest.md)

#### Defined in

[src/serials_pb.ts:328](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/serials_pb.ts#L328)
