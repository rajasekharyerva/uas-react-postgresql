import React, {Component} from 'react';

export default class Spinner extends Component {

    state = {
        spinning:false
    }

    
    render() {
        return (
            <div>
            {this.state.spinning ?
                <div className="slds-spinner--large" style={{position:"absolute", zIndex:"100000", top: "0", left: "0", bottom:"0", right:"0", margin:"auto"}}>
                    <img src="/assets/images/spinners/slds_spinner_brand.gif" alt="Loading..." />
                </div>
            :null}
            </div>
        );
    }

}
