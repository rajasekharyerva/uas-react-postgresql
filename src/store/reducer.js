import * as actionTypes from './actions';


//Store
const initialState = {
    gredirect: false,
    dredirect: false,
    eredirect: false,
    student: {
        id: 1,
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        dob: '',
        phone: '',
        mobile_phone: '',
        email: '',
        pic: '',
        registration: '',
        last_update: ''
    }
}

//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DELETE_STUDENT:
        console.log('[reducer](DELETE_STUDENT)...');
            return {
                ...state,
                student: {
                    ...state.student,
                    //[action.objName]: state.student[action.objName]
                },
                dredirect: true,
                gredirect: false,
                eredirect: false
            };
        case actionTypes.LINK_HANDLER:
        console.log('[reducer](LINK_HANDLER)...');
        
            return {
                ...state,
                student: {
                    ...state.student = action.gStudent,
                    //...state.student.pic = "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/catherine_hansen.jpg"
                },
                gredirect: true,
                eredirect: false,
                dredirect: false
            };
            case actionTypes.EDIT_HANDLER:
            console.log('[reducer](EDIT_HANDLER)...');
            
                return {
                    ...state,
                    student: {
                        ...state.student = initialState.student,
                        //...state.student.pic = "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/catherine_hansen.jpg"
                    },
                    gredirect: false,
                    eredirect: true,
                    dredirect: false
                };
        default:
            return state;
    }

}


export default reducer;