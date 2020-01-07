import React from 'react'
import { connect } from 'react-redux'
import { loadIP } from './actions'

export class Info extends React.Component {

    componentDidMount() {
        this.props.loadIP()
    }
    render() {
        if (this.props.isFetching) {
            return <span>Searching IP...</span>
        }
        if (this.props.error) {
            return <span>Error...</span>
        }

        return <span>IP: {this.props.data['origin'] }</span>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error:state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadIP: () => dispatch(loadIP())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info)
