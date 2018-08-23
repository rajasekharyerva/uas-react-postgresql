import React, { Component } from 'react';
import ButtonIcon from './ButtonIcon';
import Dropdown from './Dropdown';

export default class DownButtonDropdown extends Component {

    state = {
        open: false,
        label: ""
    }

    componentWillReceiveProps = (props) => {
        let label;
        let icon;
        let items = props.data;
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item[props.valueField || "id"] === props.value) {
                label = item[props.labelField || "name"];
                icon = item[props.iconField];
                break;
            }
        }
        this.setState({ value: this.props.value, label });
    }

    changeHandler = (index, value, label) => {
        this.setState({ value, label, open: false });
        if (this.props.onChange) {
            this.props.onChange(index, value, label);
        }
    }

    buttonClickHandler = () => {
        this.setState({ open: true });
    }

    render() {
        return (
            <div className="slds-grid slds-type-focus  slds-no-space">
                <h1 className="slds-text-heading--medium slds-truncate" title="{this.state.label}">{this.state.label}</h1>
                <div className="slds-dropdown-trigger" aria-haspopup="true">
                    <button className="slds-button slds-button--icon-bare slds-shrink-none slds-align-middle slds-m-left--x-small" onClick={this.buttonClickHandler}>
                        <ButtonIcon name="down" />
                        <span className="slds-assistive-text">View More</span>
                    </button>
                    {this.state.open ?
                        <Dropdown position="left" header={this.props.header}
                            valueField={this.props.valueField}
                            labelField={this.props.labelField}
                            data={this.props.data}
                            onChange={this.changeHandler} />
                        : null}
                </div>
            </div>
        );
    }

};