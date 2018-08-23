import React, {Component} from 'react';
import Column from './Column';
import ActionButton from './ActionButton';

export default class Row extends Component{

    actionHandler = (index, value, label) =>{
        this.props.onAction(this.props.data, index, value, label);
    }

    clickHandler = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.data);
        }
    }

    render() {
        let columns = [];
        for (let i=0; i<this.props.columns.length; i++) {
            let column = this.props.columns[i];
            if (column.props && column.props.field) {
                columns.push(<Column label={column.props.header}
                                     data={this.props.data}
                                     field={column.props.field}
                                     textAlign={column.props.textAlign} format={column.props.format}
                                     ignoreLinks={this.props.ignoreLinks}
                                     onLink={column.props.onLink}/>);
            }
        }

        if (this.props.actions) {
            let actions = this.props.actions.map((action, index) => ({id: index, name: action}));
            columns.push(
                <td style={{width:"50px"}}>
                    <ActionButton actions={actions} onChange={this.actionHandler}/>
                </td>
            );
        }

        return (
            <tr className="slds-hint-parent" onClick={this.clickHandler} style={{backgroundColor: this.props.selected?"#F4F6F9":"transparent"}}>
                {columns}
            </tr>
        );
    }

};