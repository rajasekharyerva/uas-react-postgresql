import React, {Component} from 'react';
import moment from 'moment';
export default class Column extends Component{

    linkHandler = (event) => {
        if (this.props.onLink) {
            this.props.onLink(this.props.data);
        }
        event.preventDefault();
    }

    render() {
        let value = this.props.data[this.props.field];
        if (this.props.format === "currency") {
            value = parseFloat(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        } else if (this.props.format === "date") {
            value = moment(value).format("YYYY/MM/DD");
        }

        if (this.props.onLink && !this.props.ignoreLinks) {
            value = <a href="#" onClick={this.linkHandler}>{value}</a>
        }

        return (
            <td data-label={this.props.label} style={{textAlign: this.props.textAlign}}>
                <span className="slds-truncate">
                    {value}
                </span>
            </td>
        );
    }

};