import React, { Component } from 'react';
import ButtonIcon from './ButtonIcon';
export default class ColumnHeader extends Component {

    state = {
        textAlign: "left",
        sortable: true
    }

    sortHandler() {
        this.props.onSort(this.props.field);
    }

    render() {
        return (
            <th className={this.props.sortable ? "slds-is-sortable" : ""} scope="col" style={{ textAlign: this.props.textAlign }}>
                <span className="slds-truncate">{this.props.label}</span>
                {this.props.sortable ?
                    <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler}>
                        <ButtonIcon name="arrowdown" size="--small" />
                        <span className="slds-assistive-text">Sort</span>
                    </button> : ""
                }
            </th>
        );
    }

};


