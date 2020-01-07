const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error:false
}

 const ip = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_IP_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error:false
        }
    } else if (action.type === 'LOAD_IP_SUCCESS') {
        return {
            isFetching: false,
            data: action.data,
            error:false
        }
    }else if (action.type === 'LOAD_IP_ERROR') {
        return {
            isFetching: false,
            data: action.data,
            error:true
        }
    }
    return state
}

export default ip
