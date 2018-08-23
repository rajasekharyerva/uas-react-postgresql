import React, {Component} from 'react';
import ButtonIcon from './ButtonIcon';
import Dropdown from './Dropdown';

export default class ButtonDropdown extends Component{

    getDefaultProps() {
        return {
            valueField: "value",
            labelField: "label",
            iconField: "icon"
        };
    }

    getInitialState() {
        return {
            value: this.props.value,
            label: this.props.label || 'Select an option'
        };
    }

    changeHandler(value, label, icon) {
        this.setState({value: value, label: label, icon: icon, opened: false});
        this.props.onChange(value, label);
    }

    render() {
        let label;
        let icon;
        let items = this.props.children;
        for (let i=0; i<items.length; i++) {
            let item = items[i];
            if (item.props[this.props.valueField] === this.state.value) {
                label = item.props[this.props.labelField];
                icon = item.props[this.props.iconField];
                break;
            }
        }
        let className = "slds-button slds-button--icon-more";
        return (
            <div className="slds-dropdown-trigger" aria-haspopup="true">
                <button className={className} aria-haspopup="true">
                    <ButtonIcon name={icon || this.props.icon}/>
                    <span className="slds-assistive-text">Settings</span>
                    <ButtonIcon name="down" size="x-small"/>
                    <span className="slds-assistive-text">More</span>
                </button>
                <Dropdown header={this.props.header}
                          valueField={this.props.valueField}
                          labelField={this.props.labelField}
                          items={this.props.children}
                          size="small"
                          onChange={this.changeHandler}/>
            </div>
        );
    }

};

