import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name : this.props.name,
            mobile : this.props.mobile
        };

        this._changeName = this._changeName.bind(this);
        this._changeMobile = this._changeMobile.bind(this);
        this._showInfo = this._showInfo.bind(this);
        this._hideInfo = this._hideInfo.bind(this);
    }

    _changeName (_event) {
        this.setState({
            name : _event.target.value
        })
    }

    _changeMobile (_event) {
        this.setState({
            mobile : _event.target.value
        })
    }

    _showInfo () {
        console.log("show");
        let info = {
            name : this.state.name,
            mobile : this.state.mobile
        }
        this.props.handleShowInfo(info);
    }

    _hideInfo () {
        console.log("hide");
        this.props.handleHideInfo();
    }

    render() {
        return (
            <div>
                <input onChange = {this._changeName}/>
                <input onChange = {this._changeMobile}/>
                <button onClick = {this._showInfo}>show</button>
                <button onClick = {this._hideInfo}>hide</button>
            </div>
        );
    }
}

const mapStateToProp = (_data) => {
    return {
        name : _data.info.name,
        mobile : _data.info.mobile
    }
}

const mapDispatchToProps = (_dispatch) => {
    return {
        handleShowInfo : (info) => {_dispatch (actions.showInfo( info ) ) },
        handleHideInfo : () => {_dispatch (actions.hideInfo() ) }
    }
}

export default connect (mapStateToProp, mapDispatchToProps)(LoginForm);