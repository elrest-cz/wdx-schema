/**
 * Elrest eDesign Runtime IPC Typescript Model Access User Mode
 *
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { Role } from "../Role/Role";

export class User{
    constructor(
        public id?:number,
        public username?:string,
        public prename?:string,
        public surname?:string,
        public email?:string,
        public roles?:Array<Role>,
        public createdDate?: number,
        public updatedDate?: number,
    ){
    }
}