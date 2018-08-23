import React, {Component} from 'react';
//import Icon from './Icon';
import DropdownItem from './DropdownItem';
//import {Action} from "./Icons";

export default class Dropdown extends Component{

    getDefaultProps() {
        return {position: "right"};
    }

    render() {
        let items;
        if (this.props.data) {
            items = this.props.data.map((item, index) =>
                <DropdownItem
                    index={index}
                    key={item[this.props.valueField] || item.id}
                    value={item[this.props.valueField] || item.id}
                    label={item[this.props.labelField] || item.name}
                    onSelect={this.props.onChange}/>);
        }
        let className = "slds-dropdown slds-dropdown--menu";
        if (this.props.position) className = className + " slds-dropdown--" + this.props.position;
        if (this.props.size) className = className + " slds-dropdown--" + this.props.size;
        return (
            <div className={className} style={{maxHeight: "250px", minWidth: "200px", overflow: "scroll"}}>
                {this.props.header ?
                    <div className="slds-dropdown__header">
                        <span className="slds-text-heading--label">{this.props.header}</span>
                    </div> : null}
                <ul className="slds-dropdown__list" role="menu" style={{textAlign: "left"}}>
                    {items}
                </ul>
            </div>
        );
    }

};
