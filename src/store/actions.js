import * as StudentService from '../services/StudentService';

export const DELETE_STUDENT = 'DELETE_STUDENT';
export const LINK_HANDLER = 'LINK_HANDLER';
export const EDIT_HANDLER = 'EDIT_HANDLER';

export const linkHandler = (e) => {
    console.log('[actions](linkHandler)...',e)
    return (disptch, getState) => {
        let st={};
        //StudentService.findById(action.gStudent.id).then(student => this.setState({student}));
        //StudentService.findById(e.id).then(student => {st=student});
        StudentService.findById(e.id).then((student) => disptch(subLinkHandler(student)));
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

export const deleteStudent = (e) => {
    console.log('[actions](deleteStudent)...')
    return (disptch, getState) => {
        let st={};
        st = getState();
        StudentService.deleteItem(st.student.id).then(() => {disptch(subDeleteHandler())});
    }
};

export const subDeleteHandler = () => {
    console.log('actionCreators...')
    return {
        type: DELETE_STUDENT,
        gStudent: ""
    };
};

export const editStudent = (e) => {
    console.log('[actions](editStudent)...')
    return (disptch, getState) => {
        let st={};
        st = getState();
        StudentService.updateItem(st).then((st) => {disptch(subEditHandler(st))});
    }
};

export const subEditHandler = (st) => {
    console.log('actionCreators...')
    return {
        type: EDIT_HANDLER,
        gStudent: st
    };
};