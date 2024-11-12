/**
 * Elrest eDesign Runtime IPC Typescript Model Access User Mode
 *
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

export class Resource{
    constructor(
        public id?:number,
        public name?:string,
        public path?:string,
        public createdDate?: number,
        public updatedDate?: number,
    ){
    }
}