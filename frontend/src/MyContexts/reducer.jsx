export const initialState={
    token:null
}

const reducer = (state,action) => {
    switch(action.type){
        case 'INITIALIZE_TOKEN':
            const tokenFromStorage=sessionStorage.getItem('token');
            return {
                token:tokenFromStorage
            }
        case 'SET_TOKEN':
            sessionStorage.setItem('token',action.token);
            return {
                token:action.token
            }
        case 'REMOVE_TOKEN':
            sessionStorage.removeItem('token');
            return {
                token:null
            }
        default:
            return state;
    }
}

export default reducer;