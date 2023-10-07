[tcubesa-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceUpdateRequest

# Class: ProductsServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a product

**`Generated`**

from message tcube.ProductsServiceUpdateRequest

## Hierarchy

- `Message`<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\>

  ↳ **`ProductsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductsServiceUpdateRequest.md#constructor)

### Properties

- [currencyUuid](ProductsServiceUpdateRequest.md#currencyuuid)
- [description](ProductsServiceUpdateRequest.md#description)
- [name](ProductsServiceUpdateRequest.md#name)
- [printBatchPaperSize](ProductsServiceUpdateRequest.md#printbatchpapersize)
- [printCodeDimensionInMm](ProductsServiceUpdateRequest.md#printcodedimensioninmm)
- [printCodeType](ProductsServiceUpdateRequest.md#printcodetype)
- [printEncodingType](ProductsServiceUpdateRequest.md#printencodingtype)
- [printMarginInMm](ProductsServiceUpdateRequest.md#printmargininmm)
- [serializationSchema](ProductsServiceUpdateRequest.md#serializationschema)
- [shelfLifeDays](ProductsServiceUpdateRequest.md#shelflifedays)
- [unitPrice](ProductsServiceUpdateRequest.md#unitprice)
- [unitUuid](ProductsServiceUpdateRequest.md#unituuid)
- [userComment](ProductsServiceUpdateRequest.md#usercomment)
- [uuid](ProductsServiceUpdateRequest.md#uuid)
- [fields](ProductsServiceUpdateRequest.md#fields)
- [runtime](ProductsServiceUpdateRequest.md#runtime)
- [typeName](ProductsServiceUpdateRequest.md#typename)

### Methods

- [clone](ProductsServiceUpdateRequest.md#clone)
- [equals](ProductsServiceUpdateRequest.md#equals)
- [fromBinary](ProductsServiceUpdateRequest.md#frombinary)
- [fromJson](ProductsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProductsServiceUpdateRequest.md#fromjsonstring)
- [getType](ProductsServiceUpdateRequest.md#gettype)
- [toBinary](ProductsServiceUpdateRequest.md#tobinary)
- [toJSON](ProductsServiceUpdateRequest.md#tojson)
- [toJson](ProductsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProductsServiceUpdateRequest.md#tojsonstring)
- [equals](ProductsServiceUpdateRequest.md#equals-1)
- [fromBinary](ProductsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProductsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;ProductsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/products_pb.ts:417](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L417)

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

UUID of the associated currency

**`Generated`**

from field: string currency_uuid = 14;

#### Defined in

[src/products_pb.ts:359](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L359)

___

### description

• **description**: `string` = `""`

Description of the product

**`Generated`**

from field: string description = 12;

#### Defined in

[src/products_pb.ts:345](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L345)

___

### name

• **name**: `string` = `""`

The name of the product

**`Generated`**

from field: string name = 10;

#### Defined in

[src/products_pb.ts:338](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L338)

___

### printBatchPaperSize

• **printBatchPaperSize**: [`PRINT_PAPER_SIZE`](../enums/PRINT_PAPER_SIZE.md) = `PRINT_PAPER_SIZE.A4_UNSPECIFIED`

The size of the paper on which the codes are to be printed as a batch

**`Generated`**

from field: tcube.PRINT_PAPER_SIZE print_batch_paper_size = 33;

#### Defined in

[src/products_pb.ts:415](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L415)

___

### printCodeDimensionInMm

• **printCodeDimensionInMm**: `number` = `0`

The dimension of the code that needs to be printed (in mm)

**`Generated`**

from field: double print_code_dimension_in_mm = 31;

#### Defined in

[src/products_pb.ts:401](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L401)

___

### printCodeType

• **printCodeType**: [`PRINT_CODE_TYPE`](../enums/PRINT_CODE_TYPE.md) = `PRINT_CODE_TYPE.QR_UNSPECIFIED`

THe type of code that needs to be printed

**`Generated`**

from field: tcube.PRINT_CODE_TYPE print_code_type = 30;

#### Defined in

[src/products_pb.ts:394](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L394)

___

### printEncodingType

• **printEncodingType**: [`PRINT_ENCODING_TYPE_FOR_PRODUCT`](../enums/PRINT_ENCODING_TYPE_FOR_PRODUCT.md) = `PRINT_ENCODING_TYPE_FOR_PRODUCT.PRINT_ENCODING_TYPE_FOR_PRODUCT_HRI_UNSPECIFIED`

The type of encoding

**`Generated`**

from field: tcube.PRINT_ENCODING_TYPE_FOR_PRODUCT print_encoding_type = 21;

#### Defined in

[src/products_pb.ts:387](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L387)

___

### printMarginInMm

• **printMarginInMm**: `number` = `0`

The dimension of the margin in between codes within the print

**`Generated`**

from field: double print_margin_in_mm = 32;

#### Defined in

[src/products_pb.ts:408](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L408)

___

### serializationSchema

• **serializationSchema**: `string` = `""`

Schema of the product

**`Generated`**

from field: string serialization_schema = 20;

#### Defined in

[src/products_pb.ts:380](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L380)

___

### shelfLifeDays

• **shelfLifeDays**: `bigint` = `protoInt64.zero`

Shelf life of the product in days

**`Generated`**

from field: int64 shelf_life_days = 16;

#### Defined in

[src/products_pb.ts:373](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L373)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the product (in cents)

**`Generated`**

from field: int64 unit_price = 13;

#### Defined in

[src/products_pb.ts:352](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L352)

___

### unitUuid

• **unitUuid**: `string` = `""`

UUID of the associated unit

**`Generated`**

from field: string unit_uuid = 15;

#### Defined in

[src/products_pb.ts:366](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L366)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/products_pb.ts:324](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L324)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/products_pb.ts:331](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L331)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products_pb.ts:424](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L424)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products_pb.ts:422](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L422)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.ProductsServiceUpdateRequest"``

#### Defined in

[src/products_pb.ts:423](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L423)

## Methods

### clone

▸ **clone**(): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md) \| `PlainMessage`<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

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

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md) \| `PlainMessage`<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md) \| `PlainMessage`<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products_pb.ts:453](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L453)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Defined in

[src/products_pb.ts:441](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L441)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Defined in

[src/products_pb.ts:445](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L445)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Defined in

[src/products_pb.ts:449](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L449)
