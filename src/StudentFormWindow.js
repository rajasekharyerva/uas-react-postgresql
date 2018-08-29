import React, {Component} from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions';

class StudentFormWindow extends Component{

    saveHandler = () => {
        this.refs.form.getWrappedInstance().save();
    }

    render() {
        return (
            <div>
                <div aria-hidden="false" role="dialog" className="slds-modal slds-fade-in-open">
                    <div className="slds-modal__container">
                        <div className="slds-modal__header">
                            <h2 className="slds-text-heading--medium">New Student</h2>
                            <button className="slds-button slds-modal__close">
                                <svg aria-hidden="true" className="slds-button__icon slds-button__icon--inverse slds-button__icon--large">
                                </svg>
                                <span className="slds-assistive-text">Close</span>
                            </button>
                        </div>
                        <div className="slds-modal__content">
                            {/*<StudentForm ref="form" onSaved={this.props.onSaved}/>*/}
                            <StudentForm ref="form" onSaved={this.props.onSaved}/>
                        </div>

                        <div className="slds-modal__footer">
                            <button className="slds-button slds-button--neutral" onClick={this.props.onCancel}>Cancel</button>
                            <button className="slds-button slds-button--neutral slds-button--brand" onClick={this.saveHandler}>Save</button>
                        </div>
                    </div>
                </div>
                <div className="slds-modal-backdrop slds-modal-backdrop--open"></div>
            </div>
        );
    }
};


const mapStateToProps = state => {
    console.log('[StudentForm](mapStateToProps)...')
    return {
        lredirect: state.dredirect,
        lstudent: state.student,
        lEditRedirect: state.eredirect
    };
}

const mapDispatchToProps = dispatch => {
    console.log('[StudentFormWindow](mapDispatchToProps)...')
    return {
        deleteHandler: (e) => dispatch(actionCreators.deleteStudent(e)),
        editHandler: (e) => dispatch(actionCreators.editStudent(e))
    };
}


export default connect(mapStateToProps, null, null, { withRef: true })(StudentFormWindow);