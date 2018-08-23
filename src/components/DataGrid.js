import React, {Component} from 'react';
//import moment from 'moment';
import ColumnHeader from './ColumnHeader';
import Row from './Row';
//import ButtonIcon from "./ButtonIcon";
//import Dropdown from "./Dropdown";
//import DropdownItem from "./DropdownItem";

export default class DataGrid extends Component{

    state = {
        data: this.props.data
    }

    //componentWillReceiveProps(props) {
      //  this.setState({data:props.data});
    //}

    sortHandler = (field) => {
        let data = this.state.data;
        data.sort((x,y) => {
            if (x[field] < y[field]) {
                return -1;
            } else if (x[field] === y[field]) {
                return 0;
            } else {
                return 1;
            }
        });
        this.setState({data});
    }

    rowClickHandler = (data) => {
        if (this.props.onRowClick) {
            this.setState({selectedItem: data});
            this.props.onRowClick(data);
        }
    }

    render() {
        let headers = [];
        for (let i=0; i<this.props.children.length; i++) {
            let column = this.props.children[i];
            if (column.props && column.props.field) {
                headers.push(<ColumnHeader field={column.props.field}
                                           label={column.props.header}
                                           sortable={column.props.sortable}
                                           textAlign={column.props.textAlign}
                                           onSort={this.sortHandler}/>);
            }
        }
        let rows;
        if (this.state.data) {
            rows = this.props.data.map(item => <Row data={item}
                                                    key={item[this.props.keyField || "id"]}
                                                    selected={item===this.state.selectedItem}
                                                    columns={this.props.children}
                                                    actions={this.props.actions}
                                                    ignoreLinks={this.props.ignoreLinks}
                                                    onAction={this.props.onAction}
                                                    onClick={this.rowClickHandler}/>);
        }
        return (
            <table className="slds-table slds-table--bordered slds-max-medium-table--stacked-horizontal slds-no-row-hover" style={{marginTop:"-1px"}}>
                <thead>
                <tr className="slds-text-heading--label">
                    {headers}
                    {this.props.onAction ?
                    <th></th>
                    :""}
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

};