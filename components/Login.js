import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar, 
    TextInput, SafeAreaView, Keyboard, TouchableOpacity, 
    KeyboardAvoidingView, Button, Alert } from 'react-native' 
import Screen1 from './Screen1';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            typedId: '',
            typedPass: '',
        };
    }
    render() {
        const ID = 'Admin';
        const PASS = 'Admin';
        const { navigation } = this.props;
        const onPress = () => {
            if(this.state.typedId==ID && this.state.typedPass==PASS) {
                console.log(this.state.typedId,this.state.typedPass);
                navigation.navigate(Screen1);
            }
            else {
                console.log('Id or Password incorrect');              
                Alert.alert('Id or Password incorrect')
            }
        }
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <View style={styles.container}>
                    <Text style={styles.title}>Account Information</Text> 
                    <View style={styles.inforContainer}>
                        <TextInput style={styles.input}
                            placeholder= "Nhập username/email"
                            placeholderTextColor='rgba(0,0,0,0.3)'
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorrect={false}
                            onChangeText={(text) => {this.setState(() => {
                                return {
                                    typedId: text
                                };
                            })}}
                            onSubmitEditing={()=> this.refs.txtPassword.focus()}
                         />
                        <TextInput style={styles.input}
                            placeholder= "Nhập password"
                            placeholderTextColor='rgba(0,0,0,0.3)'
                            returnKeyType='go'
                            keyboardType='default'
                            secureTextEntry={true}
                            autoCorrect={false}
                            ref={'txtPassword'}
                            onChangeText={(text) => {this.setState(() => {
                                return {
                                    typedPass: text
                                };
                            })}}
                        />
                        <View style={styles.buttonContainer}>
                            <Button 
                                onPress = {onPress}
                                title='SIGN IN'
                                color='gray'
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: 155,
    },
    inforContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        padding: 20,
//        backgroundColor: 'red',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.05)',
        color: 'black',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    notification: {
        marginTop: 15,
        textAlign: 'center',
        color: 'rgba(255,0,0,0.5)',
        fontStyle: 'italic',
        fontSize: 15,
    },
    buttonContainer: {
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})