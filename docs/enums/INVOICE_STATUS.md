[scanswift-sdk](../README.md) / [Exports](../modules.md) / INVOICE\_STATUS

# Enumeration: INVOICE\_STATUS

Stores the possible values for an invoice

**`Generated`**

from enum scanswift.INVOICE_STATUS

## Table of contents

### Enumeration Members

- [INVOICE\_STATUS\_ANY\_UNSPECIFIED](INVOICE_STATUS.md#invoice_status_any_unspecified)
- [INVOICE\_STATUS\_CANCELLED](INVOICE_STATUS.md#invoice_status_cancelled)
- [INVOICE\_STATUS\_OPEN](INVOICE_STATUS.md#invoice_status_open)
- [INVOICE\_STATUS\_PAID](INVOICE_STATUS.md#invoice_status_paid)

## Enumeration Members

### INVOICE\_STATUS\_ANY\_UNSPECIFIED

• **INVOICE\_STATUS\_ANY\_UNSPECIFIED** = ``0``

Used only for filter operations

**`Generated`**

from enum value: INVOICE_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

src/invoices_pb.ts:22

___

### INVOICE\_STATUS\_CANCELLED

• **INVOICE\_STATUS\_CANCELLED** = ``3``

Denotes that the invoice has been cancelled

**`Generated`**

from enum value: INVOICE_STATUS_CANCELLED = 3;

#### Defined in

src/invoices_pb.ts:43

___

### INVOICE\_STATUS\_OPEN

• **INVOICE\_STATUS\_OPEN** = ``1``

Denotes that the invoice is open (and unpaid)

**`Generated`**

from enum value: INVOICE_STATUS_OPEN = 1;

#### Defined in

src/invoices_pb.ts:29

___

### INVOICE\_STATUS\_PAID

• **INVOICE\_STATUS\_PAID** = ``2``

Denotes that the invoice has been paid

**`Generated`**

from enum value: INVOICE_STATUS_PAID = 2;

#### Defined in

src/invoices_pb.ts:36
