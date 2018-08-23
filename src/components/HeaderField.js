import React, {Component} from 'react';
import moment from 'moment';


export default class HeaderField extends Component{

    render() {

        let value = this.props.value;

        if (this.props.format === "currency") {
            value = parseFloat(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        } else if (this.props.format === "date") {
            value = moment(value).format("YYYY/MM/DD");
        } else if (typeof this.props.format === "function") {
            value = this.props.format(value);
        }

        return (
                <div className="slds-col--padded">
                    <dl>
                        <dt>
                            <p className="slds-text-heading--label slds-truncate" title="City">{this.props.label}</p>
                        </dt>
                        <dd>
                            <p className="slds-text-body--regular slds-truncate" title={value}>{value}</p>
                        </dd>
                    </dl>
                </div>
            );
        }

};