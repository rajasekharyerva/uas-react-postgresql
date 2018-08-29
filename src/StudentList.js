import React, { Component } from 'react';
import DataGrid from './components/DataGrid';
import StudentView from './StudentView';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions';


class StudentList extends Component {

    state = {
        redirect: false,
        student : {}
    }

    linkHandler = (student) => {
        //window.location.hash = "#student/" + student.id;
        this.setState({ redirect: true, student });
    }

    actionHandler = (data, value, label) => {
        if (label === "Delete") {
            this.props.onDelete(data);
        } else if (label === "Edit") {
            this.props.onEdit(data);
        }
    }

    render() {
        

        let redirect = this.state.redirect;

        return (
            <div>
                {this.props.lredirect ? <Redirect push to={`/student/${this.props.lstudent.id}`} /> : null}
                {/*{redirect ? <Redirect push to={`/student/1${lo}`} /> : null}*/}
                <DataGrid data={this.props.students}>
                    {/*<div header="First Name" field="first_name" onLink={(e) =>this.linkHandler(e)} />*/}
                    <div header="First Name" field="first_name" onLink={(e) => this.props.linkHandler(e)} />
                    <div header="Last Name" field="last_name" />
                    <div header="Address" field="address" />
                    <div header="City" field="city" />
                    <div header="State" field="state" />
                </DataGrid>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        lredirect: state.gredirect,
        lstudent: state.student
    };
}

const mapDispatchToProps = dispatch => {
    return {
        //linkHandler: (e) => dispatch({type:actionTypes.LINK_HANDLER, gStudent: e})
        linkHandler: (e) => dispatch(actionCreators.linkHandler(e))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);