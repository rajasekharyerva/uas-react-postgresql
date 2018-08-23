import React, { Component } from 'react';

class Icon extends Component {

    state = {
        category: "standard"
    }

    render() {
        //let useTag = '<use xlink:href="/assets/icons/' + this.props.category + '-sprite/svg/symbols.svg#' + this.props.name + '" />';
        let useTag = '<use xlink:href="/assets/icons/' + this.state.category + '-sprite/svg/symbols.svg#' + this.props.name + '" />';
        let className = "slds-icon";
        let theme = this.props.theme === undefined ? this.props.name : this.props.theme;
        if (this.props.stateful) {
            className += "--stateful";
        }
        if (this.props.inverse) {
            className = className + " slds-icon--inverse";
        }
        if (this.props.size) {
            className = className + " slds-icon--" + this.props.size;
        }
        if (this.props.position) {
            className = className + " slds-icon--" + this.props.position;
        }
        if (theme) {
            className = className + " slds-icon-" + this.props.category + "-" + theme;
        }
        return <svg aria-hidden="true" className={className} dangerouslySetInnerHTML={{ __html: useTag }} />;
    }
};

export default Icon;