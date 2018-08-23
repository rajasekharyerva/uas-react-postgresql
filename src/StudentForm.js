import React, { Component } from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

import * as StudentService from './services/StudentService';

export default class StudentForm extends Component {

    //mixins: [LinkedStateMixin]

    state = {
        student: {
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            dob: '',
            phone: '',
            mobile_phone: '',
            email: '',
            pic: ''
        }
    }

    handleFirstNameChange =(evt)=> {
        this.setState({ first_name: evt.target.value });
    }

    handleLastNameChange =(evt) =>{
        this.setState({ last_name: evt.target.value });
    }
    handleAddressChange= (evt)=> {
        this.setState({ address: evt.target.value });
    }
    handleCityChange =(evt) =>{
        this.setState({ city: evt.target.value });
    }
    handleStateChange =(evt)=> {
        this.setState({ state: evt.target.value });
    }
    handleZIPChange= (evt)=> {
        this.setState({ zip: evt.target.value });
    }
    handleDOBChange =(evt)=> {
        this.setState({ dob: evt.target.value });
    }
    handlePhoneChange =(evt)=> {
        this.setState({ phone: evt.target.value });
    }
    handleMobilePhoneChange =(evt)=> {
        this.setState({ mobile_phone: evt.target.value });
    }
    handleEmailChange =(evt)=> {
        this.setState({ email: evt.target.value });
    }

    componentWillReceiveProps = (props) => {
        console.log('(componentWillReceiveProps)', props.student)
        let student = props.student;
        this.setState({ ...student });
    }

    

    save = () => {
        let saveItem = this.state.id ? StudentService.updateItem : StudentService.createItem;
        saveItem(this.state).then(savedStudent => {
            if (this.props.onSaved) this.props.onSaved(savedStudent);
        });
    }

    render() {
        return (
            <div className="slds-form--stacked slds-grid slds-wrap">
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">First Name</label>
                        <div className="slds-form-element__control">
                            {/*<input className="slds-input" type="text" valueLink={this.linkState('first_name')}/>*/}
                            <input className="slds-input" type="text" onChange = {this.handleFirstNameChange}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Last name</label>
                        <div className="slds-form-element__control">
                            {/*<input className="slds-input" type="text" valueLink={this.linkState('last_name')}/>*/}
                            <input className="slds-input" type="text" onChange = {this.handleLastNameChange}/>
                        </div>
                    </div>
                    <fieldset className="slds-form--compound slds-m-top--medium slds-m-bottom--medium">
                        <legend className="slds-form-element__label">Address</legend>
                        <div className="form-element__group">
                            <div className="slds-form-element__row">
                                <label className="slds-form-element__control slds-size--1-of-1">
                                    <small className="slds-form-element__helper">Street</small>
                                    {/*<input className="slds-input" type="text" valueLink={this.linkState('address')}/>*/}
                                    <input className="slds-input" type="text" />
                                </label>
                            </div>
                            <div className="slds-form-element__row">
                                <label className="slds-form-element__control slds-size--2-of-4">
                                    <small className="slds-form-element__helper">City</small>
                                    {/*<input className="slds-input" type="text" valueLink={this.linkState('city')}/>*/}
                                    <input className="slds-input" type="text" />
                                </label>
                                <label className="slds-form-element__control slds-size--1-of-4">
                                    <small className="slds-form-element__helper">State</small>
                                    {/*<input className="slds-input" type="text" valueLink={this.linkState('state')}/>*/}
                                    <input className="slds-input" type="text" />
                                </label>
                                <label className="slds-form-element__control slds-size--1-of-4">
                                    <small className="slds-form-element__helper">ZIP Code</small>
                                    {/*<input className="slds-input" type="text" valueLink={this.linkState('zip')}/>*/}
                                    <input className="slds-input" type="text" />
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Mobile Phone</label>
                        <div className="slds-form-element__control">
                            {/*<input className="slds-input" type="text" valueLink={this.linkState('mobile_phone')}/>*/}
                            <input className="slds-input" type="text" />
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample2">Home Phone</label>
                        <div className="slds-form-element__control">
                            {/*<input className="slds-input" type="text" valueLink={this.linkState('phone')}/>*/}
                            <input className="slds-input" type="text" />
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Email</label>
                        <div className="slds-form-element__control">
                            {/*<input className="slds-input" type="text" valueLink={this.linkState('email')}/>*/}
                            <input className="slds-input" type="text" />
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Date of Birth</label>
                        <div className="slds-form-element__control">
                            {/*<input className="slds-input" type="text" valueLink={this.linkState('dob')}/>*/}
                            <input className="slds-input" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};