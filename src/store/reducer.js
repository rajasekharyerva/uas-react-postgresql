import * as actionTypes from './actions';

//Store
const initialState = {
    gredirect: false,
    student: {
        id: 3,
        first_name: "Catrine",
        last_name: "Hansen",
        address: "52 Elm st",
        city: "Boston",
        state: "MA",
        zip: "01742",
        dob: "1993-01-01T18:30:00.000Z",
        phone: "404-986-356",
        mobile_phone: "857-584-654",
        email: "chansen@fakemail.com",
        pic: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/catherine_hansen.jpg",
        registration: "2012-07-13T18:30:00.000Z",
        last_update: "2018-08-23T05:57:56.844Z"
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
        console.log('[reducer](LINK_HANDLER)...')
            return {
                ...state,
                student: {
                    ...state.student = action.gStudent,
                    ...state.student.pic = "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/catherine_hansen.jpg"
                },
                gredirect: true
            };
        default:
            return state;
    }

}


export default reducer;