import React, {Component} from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';

class StudentFormWrapper extends Component{

    

    saveHandler =()=> {
        this.refs.form.getWrappedInstance().save();
        //console.log(this.refs.form)
    }

    savedHandler = () => {
        //window.location.hash = "#student/" + this.props.student.id;
    }

    render() {
        return (
            <div className="slds-m-around--medium">
                <StudentForm ref="form" student={this.props.student} onSaved={this.savedHandler}/>
                <button className="slds-button slds-button--neutral slds-button--brand slds-m-around--small" onClick={this.saveHandler}>Save</button>
            </div>
        );
    }

};

const mapStateToProps = state => {
    console.log('[StudentFormWrapper](mapStateToProps)...')
    return {
        lredirect: state.dredirect,
        lstudent: state.student
    };
}

const mapDispatchToProps = dispatch => {
    console.log('[StudentFormWrapper](mapDispatchToProps)...')
    return {
        //deleteHandler: (e) => dispatch(actionCreators.deleteStudent(e)),
        //editHandler: (e) => dispatch(actionCreators.editStudent(e))
    };
}


export default connect(mapStateToProps, null, null, { withRef: true })(StudentFormWrapper);