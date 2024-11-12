/**
 * Elrest eDesign Runtime IPC Typescript Model Trend Graph
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { GraphData } from "./GraphData";
import { GraphOptions } from "./GraphOptions";
import { GraphType } from "./GraphType";


export class Graph {
  constructor(
    public type:GraphType = GraphType.line,
    public data: GraphData = new GraphData(),
    public options:GraphOptions = new GraphOptions(),
  ) {}
}