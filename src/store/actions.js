import * as StudentService from '../services/StudentService';

export const ADD_STUDENT = 'ADD_STUDENT';
export const LINK_HANDLER = 'LINK_HANDLER';


export const linkHandler = (e) => {
    return (disptch, getState) => {
        let st={};
        //StudentService.findById(action.gStudent.id).then(student => this.setState({student}));
        //StudentService.findById(e.id).then(student => {st=student});
        StudentService.findById(e.id).then(student => disptch(subLinkHandler(student)));
        //disptch(subLinkHandler(st));
        {/*setTimeout(()=>{
            console.log('getState',getState().gredirect)
            console.log(st)
            disptch(subLinkHandler(st));
        }, 1000);*/}
    }
};

export const subLinkHandler = (e) => {
    console.log('actionCreators...',e)
    return {
        type: LINK_HANDLER,
        gStudent: e
    };
};