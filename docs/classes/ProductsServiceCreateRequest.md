[scanswift-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceCreateRequest

# Class: ProductsServiceCreateRequest

Describes the necessary data structure during creation of a product

**`Generated`**

from message scanswift.ProductsServiceCreateRequest

## Hierarchy

- `Message`<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\>

  ↳ **`ProductsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductsServiceCreateRequest.md#constructor)

### Properties

- [code](ProductsServiceCreateRequest.md#code)
- [currencyUuid](ProductsServiceCreateRequest.md#currencyuuid)
- [description](ProductsServiceCreateRequest.md#description)
- [entityUuid](ProductsServiceCreateRequest.md#entityuuid)
- [name](ProductsServiceCreateRequest.md#name)
- [printCodeType](ProductsServiceCreateRequest.md#printcodetype)
- [printEncodingType](ProductsServiceCreateRequest.md#printencodingtype)
- [serializationSchema](ProductsServiceCreateRequest.md#serializationschema)
- [shelfLifeDays](ProductsServiceCreateRequest.md#shelflifedays)
- [templateUuid](ProductsServiceCreateRequest.md#templateuuid)
- [unitPrice](ProductsServiceCreateRequest.md#unitprice)
- [unitUuid](ProductsServiceCreateRequest.md#unituuid)
- [userComment](ProductsServiceCreateRequest.md#usercomment)
- [fields](ProductsServiceCreateRequest.md#fields)
- [runtime](ProductsServiceCreateRequest.md#runtime)
- [typeName](ProductsServiceCreateRequest.md#typename)

### Methods

- [clone](ProductsServiceCreateRequest.md#clone)
- [equals](ProductsServiceCreateRequest.md#equals)
- [fromBinary](ProductsServiceCreateRequest.md#frombinary)
- [fromJson](ProductsServiceCreateRequest.md#fromjson)
- [fromJsonString](ProductsServiceCreateRequest.md#fromjsonstring)
- [getType](ProductsServiceCreateRequest.md#gettype)
- [toBinary](ProductsServiceCreateRequest.md#tobinary)
- [toJSON](ProductsServiceCreateRequest.md#tojson)
- [toJson](ProductsServiceCreateRequest.md#tojson-1)
- [toJsonString](ProductsServiceCreateRequest.md#tojsonstring)
- [equals](ProductsServiceCreateRequest.md#equals-1)
- [fromBinary](ProductsServiceCreateRequest.md#frombinary-1)
- [fromJson](ProductsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ProductsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;ProductsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/products_pb.ts:221](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L221)

## Properties

### code

• **code**: `string` = `""`

Code of the product

**`Generated`**

from field: string code = 11;

#### Defined in

[src/products_pb.ts:156](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L156)

___

### currencyUuid

• **currencyUuid**: `string` = `""`

UUID of the associated currency

**`Generated`**

from field: string currency_uuid = 15;

#### Defined in

[src/products_pb.ts:177](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L177)

___

### description

• **description**: `string` = `""`

Description of the product

**`Generated`**

from field: string description = 13;

#### Defined in

[src/products_pb.ts:163](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L163)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/products_pb.ts:142](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L142)

___

### name

• **name**: `string` = `""`

The name of the product

**`Generated`**

from field: string name = 10;

#### Defined in

[src/products_pb.ts:149](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L149)

___

### printCodeType

• **printCodeType**: [`PRINT_CODE_TYPE`](../enums/PRINT_CODE_TYPE.md) = `PRINT_CODE_TYPE.QR_UNSPECIFIED`

THe type of code that needs to be printed

**`Generated`**

from field: scanswift.PRINT_CODE_TYPE print_code_type = 30;

#### Defined in

[src/products_pb.ts:212](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L212)

___

### printEncodingType

• **printEncodingType**: [`PRINT_ENCODING_TYPE_FOR_PRODUCT`](../enums/PRINT_ENCODING_TYPE_FOR_PRODUCT.md) = `PRINT_ENCODING_TYPE_FOR_PRODUCT.PRINT_ENCODING_TYPE_FOR_PRODUCT_HRI_UNSPECIFIED`

The type of encoding

**`Generated`**

from field: scanswift.PRINT_ENCODING_TYPE_FOR_PRODUCT print_encoding_type = 21;

#### Defined in

[src/products_pb.ts:205](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L205)

___

### serializationSchema

• **serializationSchema**: `string` = `""`

Schema of the product

**`Generated`**

from field: string serialization_schema = 20;

#### Defined in

[src/products_pb.ts:198](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L198)

___

### shelfLifeDays

• **shelfLifeDays**: `bigint` = `protoInt64.zero`

Shelf life of the product in days

**`Generated`**

from field: int64 shelf_life_days = 17;

#### Defined in

[src/products_pb.ts:191](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L191)

___

### templateUuid

• **templateUuid**: `string` = `""`

UUID of the associated template

**`Generated`**

from field: string template_uuid = 31;

#### Defined in

[src/products_pb.ts:219](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L219)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the product (in cents)

**`Generated`**

from field: int64 unit_price = 14;

#### Defined in

[src/products_pb.ts:170](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L170)

___

### unitUuid

• **unitUuid**: `string` = `""`

UUID of the associated unit

**`Generated`**

from field: string unit_uuid = 16;

#### Defined in

[src/products_pb.ts:184](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L184)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/products_pb.ts:135](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L135)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products_pb.ts:228](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L228)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products_pb.ts:226](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L226)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"scanswift.ProductsServiceCreateRequest"``

#### Defined in

[src/products_pb.ts:227](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L227)

## Methods

### clone

▸ **clone**(): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md) \| `PlainMessage`<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

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

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md) \| `PlainMessage`<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md) \| `PlainMessage`<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products_pb.ts:256](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L256)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Defined in

[src/products_pb.ts:244](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L244)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Defined in

[src/products_pb.ts:248](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L248)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Defined in

[src/products_pb.ts:252](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/85a94f2/src/products_pb.ts#L252)
