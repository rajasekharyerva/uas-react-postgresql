import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions';
import { Redirect } from 'react-router';
import * as StudentService from './services/StudentService';
import RecordHeader from './components/RecordHeader';
import HeaderField from './components/HeaderField';
//import {RecordHeader, HeaderField} from './components/PageHeader';
import axios from 'axios';

class StudentRecord extends Component {

    state = {
        student: {},
        redirect: false
    }

    componentDidMount() {
        //this.getStudent(this.props.lstudent.id);
    }

    componentWillReceiveProps = (props) => {
        //this.getStudent(this.props.lstudent.id);
    }

    getStudent = (id) => {
        StudentService.findById(id).then(student => this.setState({ student }));
    }

    formatDOB = (dob) => {
        return dob ? moment(dob).format("l") + ' (' + moment(dob).fromNow() + ')' : "";
    }

    deleteHandlerX = () => {
        console.log('[StudentRecord](deleteHandler)...')
        //StudentService.deleteItem(this.state.student.id).then(() => window.location.hash = "students");
        StudentService.deleteItem(this.state.student.id).then(() => {this.setState({redirect: true})});
        console.log('[StudentRecord](deleteHandler)......')
    }

    editHandler = () => {
        window.location.hash = "#student/" + this.state.student.id + "/edit";
    }

    render() {
        console.log('[StudentRecord](render)...')
        {console.log(this.state.redirect)}
        return (
            <div>
                {console.log('this.props.lredirect',this.props.lredirect)}
                {this.props.lredirect ? <Redirect push to={"/"} /> : null}
                {this.props.lEditRedirect ? <Redirect push to={`/student/${this.props.lstudent.id}/edit`} /> : null}
                <RecordHeader type="Student" icon="lead"
                    title={this.props.lstudent.first_name + ' ' + this.props.lstudent.last_name}
                    onEdit={this.props.editHandler}
                    onDelete={(e)=>this.props.deleteHandler(e)}
                    onClone={this.cloneHandler}>
                    <HeaderField label="Date of Birth" value={this.props.lstudent.dob} format={this.formatDOB} />
                    <HeaderField label="Mobile Phone" value={this.props.lstudent.mobile_phone} />
                    <HeaderField label="Home Phone" value={this.props.lstudent.phone} />
                    <HeaderField label="Email" value={this.props.lstudent.email} />
                </RecordHeader>

                {/*{React.cloneElement(this.props.children, {student: this.state.student})}*/}

            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log('[StudentRecord](mapStateToProps)...')
    return {
        lredirect: state.dredirect,
        lstudent: state.student,
        lEditRedirect: state.eredirect
    };
}

const mapDispatchToProps = dispatch => {
    console.log('[StudentRecord](mapDispatchToProps)...')
    return {
        deleteHandler: (e) => dispatch(actionCreators.deleteStudent(e)),
        editHandler: (e) => dispatch(actionCreators.editStudent(e))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentRecord);