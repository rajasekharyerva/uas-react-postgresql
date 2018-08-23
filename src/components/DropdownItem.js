import React, {Component} from 'react';
import Icon from './Icon';

export default class DropdownItem extends Component{

    clickHandler = (event) => {
        event.preventDefault();
        this.props.onSelect(this.props.index, this.props.value, this.props.label, this.props.icon);
    }

    render() {
        // slds-has-icon--left
        return (
            <li className="slds-dropdown__item" role="menuitem option" tabIndex="-1">
                <a href="#" tabIndex="-1" className="slds-truncate" onClick={this.clickHandler}>
                    {this.props.label}
                    {this.props.icon ?
                        <Icon category="utility" name={this.props.icon} size="small" position="right"/>
                        : ""}
                </a>
            </li>
        );
    }

};