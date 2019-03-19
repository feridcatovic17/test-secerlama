import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loginUser } from '../store/actions'
import { connect } from 'react-redux';

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const { email, password } = this.state;

        const { loginUser } = this.props;
        loginUser(email, password);
    }

    goToAddCard = () => {
        Actions.card()
    }

    componentDidUpdate(prevProps) {
        if (this.props.isSuccess !== prevProps.isSuccess) {
            if (this.props.isSuccess) {
                Actions.card()
            }
        }
    }
    render() {
        const { container, inputWrapper, inputStyle, buttonWrapper, buttonStyle, buttonText, errorMsg } = styles;
        return (
            <View style={container}>
                <View style={inputWrapper}>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>
                {this.props.errors && <Text style={errorMsg}>Incorrect password or email. Please try again.</Text>}
                <TouchableOpacity onPress={this.goToAddCard}>
                    <Text style={{ fontSize: 20, color: '#fff', padding: 20 }}>Next</Text>
                </TouchableOpacity>
                <View style={buttonWrapper}>
                    <TouchableOpacity style={buttonStyle} onPress={this.onSubmit}>
                        <Text style={buttonText}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c19c7c'
    },
    inputWrapper: {
        margin: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: 300,
        justifyContent: "center",
        color: '#fff',
        fontSize: 21,
        margin: 10
    },
    buttonWrapper: {
        flex: 1,
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 30,
        width: 300,
        alignItems: 'center'
    },
    errorMsg: {
        textAlign: 'center',
        color: 'red',
        paddingBottom: 10,
        fontSize: 18
    },
    buttonText: {
        fontSize: 22,
    }
}

const mapStateToProps = (state) => {
    console.log("LOGIN STATE", state)
    return {
        isPending: state.auth.isPending,
        isSuccess: state.auth.isSuccess,
        errors: state.auth.errors,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);