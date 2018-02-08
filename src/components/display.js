import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.mobile}</h1>
            </div>
        );
    }
}

//connect는 2개의 parameter를 필요로 한다.
const mapStateToProps = (_data) => { //여기서 _data는 store에 저장된 data
    return {
        name : _data._change.name,
        mobile : _data._change.mobile
    }
}

export default connect(mapStateToProps, null)(Display);