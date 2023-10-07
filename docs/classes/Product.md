[tcubesa-sdk](../README.md) / [Exports](../modules.md) / Product

# Class: Product

Describes the data structure of each product on the platform

**`Generated`**

from message tcube.Product

## Hierarchy

- `Message`<[`Product`](Product.md)\>

  ↳ **`Product`**

## Table of contents

### Constructors

- [constructor](Product.md#constructor)

### Properties

- [code](Product.md#code)
- [currencyUuid](Product.md#currencyuuid)
- [description](Product.md#description)
- [entityUuid](Product.md#entityuuid)
- [globalIdentifier](Product.md#globalidentifier)
- [metadata](Product.md#metadata)
- [name](Product.md#name)
- [printBatchPaperSize](Product.md#printbatchpapersize)
- [printCodeDimensionInMm](Product.md#printcodedimensioninmm)
- [printCodeType](Product.md#printcodetype)
- [printEncodingType](Product.md#printencodingtype)
- [printMarginInMm](Product.md#printmargininmm)
- [serializationSchema](Product.md#serializationschema)
- [shelfLifeDays](Product.md#shelflifedays)
- [unitPrice](Product.md#unitprice)
- [unitUuid](Product.md#unituuid)
- [fields](Product.md#fields)
- [runtime](Product.md#runtime)
- [typeName](Product.md#typename)

### Methods

- [clone](Product.md#clone)
- [equals](Product.md#equals)
- [fromBinary](Product.md#frombinary)
- [fromJson](Product.md#fromjson)
- [fromJsonString](Product.md#fromjsonstring)
- [getType](Product.md#gettype)
- [toBinary](Product.md#tobinary)
- [toJSON](Product.md#tojson)
- [toJson](Product.md#tojson-1)
- [toJsonString](Product.md#tojsonstring)
- [equals](Product.md#equals-1)
- [fromBinary](Product.md#frombinary-1)
- [fromJson](Product.md#fromjson-1)
- [fromJsonString](Product.md#fromjsonstring-1)

## Constructors

### constructor

• **new Product**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Product`](Product.md)\> |

#### Overrides

Message&lt;Product\&gt;.constructor

#### Defined in

[src/products_pb.ts:577](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L577)

## Properties

### code

• **code**: `string` = `""`

Code of the product

**`Generated`**

from field: string code = 11;

#### Defined in

[src/products_pb.ts:491](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L491)

___

### currencyUuid

• **currencyUuid**: `string` = `""`

UUID of the associated currency

**`Generated`**

from field: string currency_uuid = 15;

#### Defined in

[src/products_pb.ts:519](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L519)

___

### description

• **description**: `string` = `""`

Description of the product

**`Generated`**

from field: string description = 13;

#### Defined in

[src/products_pb.ts:505](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L505)

___

### entityUuid

• **entityUuid**: `string` = `""`

UUID of the entity

**`Generated`**

from field: string entity_uuid = 2;

#### Defined in

[src/products_pb.ts:477](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L477)

___

### globalIdentifier

• **globalIdentifier**: `string` = `""`

The global identifier of the product

**`Generated`**

from field: string global_identifier = 12;

#### Defined in

[src/products_pb.ts:498](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L498)

___

### metadata

• `Optional` **metadata**: [`Metadata`](Metadata.md)

Stores the metadata of this resource

**`Generated`**

from field: tcube.Metadata metadata = 1;

#### Defined in

[src/products_pb.ts:470](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L470)

___

### name

• **name**: `string` = `""`

The name of the product

**`Generated`**

from field: string name = 10;

#### Defined in

[src/products_pb.ts:484](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L484)

___

### printBatchPaperSize

• **printBatchPaperSize**: [`PRINT_PAPER_SIZE`](../enums/PRINT_PAPER_SIZE.md) = `PRINT_PAPER_SIZE.A4_UNSPECIFIED`

The size of the paper on which the codes are to be printed as a batch

**`Generated`**

from field: tcube.PRINT_PAPER_SIZE print_batch_paper_size = 33;

#### Defined in

[src/products_pb.ts:575](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L575)

___

### printCodeDimensionInMm

• **printCodeDimensionInMm**: `number` = `0`

The dimension of the code that needs to be printed (in mm)

**`Generated`**

from field: double print_code_dimension_in_mm = 31;

#### Defined in

[src/products_pb.ts:561](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L561)

___

### printCodeType

• **printCodeType**: [`PRINT_CODE_TYPE`](../enums/PRINT_CODE_TYPE.md) = `PRINT_CODE_TYPE.QR_UNSPECIFIED`

THe type of code that needs to be printed

**`Generated`**

from field: tcube.PRINT_CODE_TYPE print_code_type = 30;

#### Defined in

[src/products_pb.ts:554](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L554)

___

### printEncodingType

• **printEncodingType**: [`PRINT_ENCODING_TYPE_FOR_PRODUCT`](../enums/PRINT_ENCODING_TYPE_FOR_PRODUCT.md) = `PRINT_ENCODING_TYPE_FOR_PRODUCT.PRINT_ENCODING_TYPE_FOR_PRODUCT_HRI_UNSPECIFIED`

The type of encoding

**`Generated`**

from field: tcube.PRINT_ENCODING_TYPE_FOR_PRODUCT print_encoding_type = 21;

#### Defined in

[src/products_pb.ts:547](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L547)

___

### printMarginInMm

• **printMarginInMm**: `number` = `0`

The dimension of the margin in between codes within the print

**`Generated`**

from field: double print_margin_in_mm = 32;

#### Defined in

[src/products_pb.ts:568](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L568)

___

### serializationSchema

• **serializationSchema**: `string` = `""`

Schema of the product

**`Generated`**

from field: string serialization_schema = 20;

#### Defined in

[src/products_pb.ts:540](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L540)

___

### shelfLifeDays

• **shelfLifeDays**: `bigint` = `protoInt64.zero`

Shelf life of the product in days

**`Generated`**

from field: int64 shelf_life_days = 17;

#### Defined in

[src/products_pb.ts:533](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L533)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the product (in cents)

**`Generated`**

from field: int64 unit_price = 14;

#### Defined in

[src/products_pb.ts:512](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L512)

___

### unitUuid

• **unitUuid**: `string` = `""`

UUID of the associated unit

**`Generated`**

from field: string unit_uuid = 16;

#### Defined in

[src/products_pb.ts:526](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L526)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products_pb.ts:584](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L584)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products_pb.ts:582](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L582)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tcube.Product"``

#### Defined in

[src/products_pb.ts:583](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L583)

## Methods

### clone

▸ **clone**(): [`Product`](Product.md)

Create a deep copy.

#### Returns

[`Product`](Product.md)

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
| `other` | `undefined` \| ``null`` \| [`Product`](Product.md) \| `PlainMessage`<[`Product`](Product.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Product`](Product.md)

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

[`Product`](Product.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Product`](Product.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Product`](Product.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Product`](Product.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Product`](Product.md)\>

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
| `a` | `undefined` \| [`Product`](Product.md) \| `PlainMessage`<[`Product`](Product.md)\> |
| `b` | `undefined` \| [`Product`](Product.md) \| `PlainMessage`<[`Product`](Product.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products_pb.ts:615](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L615)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Product`](Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Defined in

[src/products_pb.ts:603](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L603)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Product`](Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Defined in

[src/products_pb.ts:607](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L607)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Product`](Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Defined in

[src/products_pb.ts:611](https://github.com/TCUBEAI-TECHNOLOGIES-PRIVATE-LIMITED/ts-sdk/blob/d89536e/src/products_pb.ts#L611)
