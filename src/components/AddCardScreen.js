import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../store/actions'


class AddCardScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            text: ""
        }

    }
    render() {
        console.log("this.props", this.props);
        console.log(this.state)
        const { container, formWrapper, inputStyle, buttonWrapper, buttonStyle, buttonText } = styles;
        const { name, text } = this.state;
        return (
            <View style={container}>
                <Text>Add Card</Text>
                <View style={formWrapper}>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter card name"
                        onChangeText={(name) => this.setState({ name })}
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter card description"
                        onChangeText={(text) => this.setState({ text })}
                    />
                </View>
                <View style={buttonWrapper}>
                    <TouchableOpacity style={buttonStyle} onPress={() => this.props.addCard(name, text, this.props.listId)}>
                        <Text style={buttonText}>ADD CARD</Text>
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
    formWrapper: {
        flex: 1,
        marginTop: 30,
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
    buttonText: {
        fontSize: 22,
    }
}

const mapStateToProps = (state) => {
    console.log('ADD CARD STATE', state.add.listId)
    return {
        listId: state.add.listId

    }






}


export default connect(mapStateToProps, { addCard })(AddCardScreen)