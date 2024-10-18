'use strict';

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
    'Virtual.virtual-store.test',
    undefined,
);
