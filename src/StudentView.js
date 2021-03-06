import React, { Component } from 'react';
import moment from 'moment';
import StudentEnrollmentCard from './StudentEnrollmentCard';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import StudentRecord from './StudentRecord';

class StudentView extends Component {
    render() {
        //let student = this.props.student;

        console.log('[StudentView](render)....')
        return (
            <div>
                <StudentRecord />
                <div className="slds-m-around--medium">
                    <div className="slds-grid slds-wrap slds-m-bottom--large">
                        <div className="slds-col--padded slds-size--1-of-1 slds-m-bottom--small">
                            <span className="slds-avatar slds-avatar--large" style={{ height: "120px", width: "120px" }}>
                                <img src={this.props.lstudent.pic || "assets/images/avatar2.jpg"} alt="portrait" />
                            </span>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Address</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.lstudent.address}<br />
                                        {this.props.lstudent.city} {this.props.lstudent.state} {this.props.lstudent.zip}
                                    </p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Registration Date</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">
                                        {this.props.lstudent.registration ? moment(this.props.lstudent.registration).format("l") + ' (' + moment(this.props.lstudent.registration).fromNow() + ')' : ""}
                                    </p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <StudentEnrollmentCard student={this.props.lstudent} onNew={this.newCourseHandler} />
                </div>
            </div>
        );
    }

};



const mapStateToProps = state => {
    console.log('[StudentView](mapStateToProps)...')
    return {
        lstudent: state.student
    };
}

const mapDispatchToProps = dispatch => {
    return {
        linkHandler: (student) => dispatch({ type: actionTypes.DELETE_STUDENT, dstudent: student })
    };
}


export default connect(mapStateToProps, null)(StudentView);