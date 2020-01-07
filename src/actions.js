import axios from 'axios'

export const loadIPRequest = () => {
    return {
        type: 'LOAD_IP_REQUEST'
    }
}
export const loadIPError = () => {
    return {
        type: 'LOAD_IP_ERROR'
    }
}

export const loadIPSuccess = (data) => {
    return {
        type: 'LOAD_IP_SUCCESS',
        data
    } 
}
export const loadIP = () => {
    return dispatch => {
        dispatch(loadIPRequest())
        axios
        .get('http://httpbin.org/ip')
        .then(({data}) => {
            dispatch(loadIPSuccess(data))
        })
        .catch(() => dispatch(loadIPError()))
    }
}

export const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST'
    }
}

export const loadUAError = () => {
    return {
        type: 'LOAD_UA_ERROR'
    }
}

export const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data
    } 
}
export const loadUA = () => {
    return dispatch => {
        dispatch(loadUARequest())
        axios
        .get('http://httpbin.org/user-agent')
        .then(({data}) => {
            dispatch(loadUASuccess(data))
        })
        .catch(() => dispatch(loadUAError()))
    }
}

