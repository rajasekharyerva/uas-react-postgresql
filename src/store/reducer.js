import * as actionTypes from './actions';


//Store
const initialState = {
    gredirect: false,
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
        case actionTypes.ADD_STUDENT:
            return {
                ...state,
                student: {
                    ...state.student,
                    [action.objName]: state.student[action.objName]
                }
            };
        case actionTypes.LINK_HANDLER:
        console.log('[reducer](LINK_HANDLER)...');
        
            return {
                ...state,
                student: {
                    ...state.student = action.gStudent,
                    //...state.student.pic = "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/catherine_hansen.jpg"
                },
                gredirect: true
            };
        default:
            return state;
    }

}


export default reducer;