import { LightningElement,api, track } from 'lwc';

export default class LwcRefChildComponent extends LightningElement {
    @track firstName;
    @track lastname;
    @track department;

    get getFirstName(){
        return this.firstName;
    }

    get getLastName(){
        return this.lastname;
    }

    get getDepartment(){
        return this.department;
    }

    /**
     * @param {any} value
     */
    @api
    set setFirstName(value){
        this.firstName = value;
    }

    /**
     * @param {any} value
     */
    @api
    set setLastName(value){
        this.lastname = value;
    }

    /**
     * @param {any} value
     */
    @api
    set setDepartment(value){
        this.department = value;
    }
}