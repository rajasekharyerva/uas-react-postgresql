import React, {Component} from 'react';

class InputIcon extends Component{

    render() {
        let useTag = '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#' + this.props.name + '" />';
        let className  = "slds-input__icon slds-icon-text-default";
        return <svg aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />;
    }
};

export default InputIcon;