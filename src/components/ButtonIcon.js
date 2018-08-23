import React, {Component} from 'react';

class ButtonIcon extends Component{

    render() {
        let useTag = '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#' + this.props.name + '" />';
        let className  = "slds-button__icon";
        if (this.props.stateful) {
            className += "--stateful";
        }
        if (this.props.inverse) {
            className = className + " slds-button__icon--inverse";
        }
        if (this.props.position) {
            className = className + " slds-button__icon--" + this.props.position;
        }
        if (this.props.size) {
            className = className + " slds-button__icon--" + this.props.size;
        }
        if (this.props.hint) {
            className = className + " slds-button__icon--hint";
        }
        return <svg aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />;
    }

};

export default ButtonIcon;