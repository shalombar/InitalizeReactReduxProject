export default (state = {}, action) => {
    state = {
        employeesList: [],
        ...state
    }
    switch (action.type) {
        case 'GET_EMPLOYEES_LIST':
            let employeesList = action.payload;

            return {
                ...state,
                employeesList: employeesList
            }

        default:
            return state
    }
    return state;
}