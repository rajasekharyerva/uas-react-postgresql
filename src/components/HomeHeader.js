import React, { Component } from 'react';
import DropdownItem from './DropdownItem';
import DownButtonDropdown from './DownButtonDropdown';
import ButtonDropdown from './ButtonDropdown';
import ButtonIcon from './ButtonIcon';
export default class HomeHeader extends Component {

    state = {
        newLabel: "New",
        icon: "account"
    }

    render() {

        let viewItems;
        if (this.props.viewOptions) {
            viewItems = this.props.viewOptions.map(item => <DropdownItem value={item.value} label={item.label} icon={item.icon} />);
        }
        let sortItems;
        if (this.props.sortOptions) {
            sortItems = this.props.sortOptions.map(item => <DropdownItem value={item.value} label={item.label} />);
        }
        return (
            <div className="slds-page-header">
                <div className="slds-grid">
                    <div className="slds-col slds-no-flex slds-has-flexi-truncate">
                        <p className="slds-text-heading--label">{this.props.type}</p>
                        <DownButtonDropdown data={this.props.views} value={this.props.viewId} onChange={this.props.onViewChange} />
                    </div>
                    <div className="slds-col">
                    </div>
                    <div className="slds-col slds-no-flex slds-align-bottom">
                        <div className="slds-grid">
                            {viewItems ?
                                <div className="slds-button-space-left">
                                    <ButtonDropdown header="Display as" iconMore={true} value={this.props.viewOptions[0].value} onChange={this.props.onViewChange}>
                                        {viewItems}
                                    </ButtonDropdown>
                                </div>
                                : ""}
                            {sortItems ?
                                <div className="slds-button-space-left">
                                    <ButtonDropdown header="Sort By" icon="sort" iconMore={true} onChange={this.props.onSort}>
                                        {sortItems}
                                    </ButtonDropdown>
                                </div>
                                : ""}
                            <div className="slds-button-group slds-button-space-left" role="group">
                                <button className="slds-button slds-button--neutral" onClick={this.props.onNew}>{this.props.newLabel}</button>
                                <div className="slds-button--last">
                                    <button className="slds-button slds-button--icon-border-filled">
                                        <ButtonIcon name="down" />
                                        <span className="slds-assistive-text">More Actions</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="slds-text-body--small slds-m-top--x-small">{this.props.itemCount} {this.props.type.toLowerCase()}</p>
            </div>
        );
    }
};