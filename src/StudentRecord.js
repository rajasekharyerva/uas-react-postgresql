import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

import * as StudentService from './services/StudentService';
import RecordHeader from './components/RecordHeader';
import HeaderField from './components/HeaderField';
//import {RecordHeader, HeaderField} from './components/PageHeader';
import axios from 'axios';

class StudentRecord extends Component {

    state = {
        student: {}
    }

    componentDidMount() {
        this.getStudent(this.props.lstudent.id);
    }

    componentWillReceiveProps = (props) => {
        this.getStudent(this.props.lstudent.id);
    }

    getStudent = (id) => {
        StudentService.findById(id).then(student => this.setState({ student }));
    }

    formatDOB = (dob) => {
        return dob ? moment(dob).format("l") + ' (' + moment(dob).fromNow() + ')' : "";
    }

    deleteHandler = () => {
        StudentService.deleteItem(this.state.student.id).then(() => window.location.hash = "students");
    }

    editHandler = () => {
        window.location.hash = "#student/" + this.state.student.id + "/edit";
    }

    render() {
        console.log('[StudentRecord](render)...')
        return (
            <div>
                <RecordHeader type="Student" icon="lead"
                    title={this.state.student.first_name + ' ' + this.state.student.last_name}
                    onEdit={this.editHandler}
                    onDelete={this.deleteHandler}
                    onClone={this.cloneHandler}>
                    <HeaderField label="Date of Birth" value={this.state.student.dob} format={this.formatDOB} />
                    <HeaderField label="Mobile Phone" value={this.state.student.mobile_phone} />
                    <HeaderField label="Home Phone" value={this.state.student.phone} />
                    <HeaderField label="Email" value={this.state.student.email} />
                </RecordHeader>

                {/*{React.cloneElement(this.props.children, {student: this.state.student})}*/}

            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log('[StudentRecord](mapStateToProps)...')
    return {
        lredirect: state.gredirect,
        lstudent: state.student
    };
}

const mapDispatchToProps = dispatch => {
    return {
        linkHandler: (e) => dispatch({ type: actionTypes.LINK_HANDLER, gStudent: e })
    };
}


export default connect(mapStateToProps, null)(StudentRecord);