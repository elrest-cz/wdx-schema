@wago/wdx-schema / [Exports](modules.md)

# WDX - Schema

A TypeScript model Library library for handling class models as schema library distributed with exported classes, interfaces, and enumerations. This library allows you to use WDX Schema models using TypeScript classes and reference models in a structured manner.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Using Models](#using-models)
  - [Working with Enumerations](#working-with-enumerations)
- [API](docs/modules.md)
- [Requirements](#Requirements)
- [License](#license)

## Installation

To install the library, use npm or yarn:

```bash
npm install @wago/wdx-schema
```

or

```bash
yarn add @wago/wdx-schema
```

## Usage

### Using Models

You can use a model by using TypeScript classes and enumerations. 

Here's an example:

```typescript

import * as WDXSchema from '@wago/wdx-schema';

const dataSchema = new WDXSchema.WDX.Schema.Model.Data.DataSchema(
    `Virtual.virtual-store.test`,
    'test', // relative path
    'test', // name
    undefined, //children array or if its not expandable schema, then undefined
    new WDXSchema.WDX.Schema.Model.Data.MetaData.MetaDataVirtual(), // metadata of schema see WDXSchema.WDX.Schema.Model.Data.MetaData.MetaDataType enmuration
    false, //readonly
    true, //subscribeable
    true, //editable
    false, //extendable
    true, //removable
    false, //refreshable
);

const dataValue = new WDXSchema.WDX.Schema.Model.Data.DataValue(
    'Virtual.virtual-store.test', //data path
    10, //data value
);
```

## License

This library is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License). See the [LICENSE.md](LICENSE.md) file for more details.

© 2024 

This `README.md` provides a clear introduction to the TypeScript model schema library, with examples of how to use it, and includes the required copyright and licensing information under the MIT License.
