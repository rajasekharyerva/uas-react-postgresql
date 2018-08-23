import React, {Component} from 'react';
import Icon from './Icon';
import ButtonIcon from './ButtonIcon';


export default class Toast extends Component{


    state = {
        showNotification:false
    }

    closeHandler() {
        this.setState({showNotification:false});
    }

    render() {
        return (
            <div>
                {this.state.showNotification ?
                <div className="slds-notify-container">
                    <div className="slds-notify slds-notify--toast slds-theme--error slds-grid" role="alert">
                        <span className="slds-assistive-text">Info</span>
                        <button className="slds-button slds-notify__close" onClick={this.closeHandler}>
                            <ButtonIcon name="close" inverse={true}/>
                            <span className="slds-assistive-text">Close</span>
                        </button>
                        <div className="notify__content slds-grid">
                            <Icon category="utility" name="warning" size="small"/>
                            <h2 className="slds-text-heading--small slds-m-left--x-small">{this.state.message}</h2>
                        </div>
                    </div>
                </div>
                :null}
            </div>
        )
    }

};