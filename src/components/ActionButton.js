import React, {Component} from 'react';
import ButtonIcon from './ButtonIcon';
import Dropdown from './Dropdown';
export default class ActionButton extends Component{

    changeHandler(index, value, label) {
        this.setState({value: value, label: label, opened: false});
        this.props.onChange(index, value, label);
    }

    render() {
        return (
            <div className="slds-dropdown-trigger" aria-haspopup="true">
                <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
                    <ButtonIcon name="down" size="small"/>
                    <span className="slds-assistive-text">More</span>
                </button>
                <Dropdown header={this.props.header}
                          valueField={this.props.valueField}
                          labelField={this.props.labelField}
                          data={this.props.actions}
                          onChange={this.changeHandler}/>
            </div>
        );
    }

};