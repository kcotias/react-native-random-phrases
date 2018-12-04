// import libraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getPhrase } from '../../services/api';

// create a component
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: ''
        };
    }

    getNewPhrase = () => {
        getPhrase()
            .then((response) => {
                this.setState({ phrase: response });
            });
    }

    render() {
        const { phrase } = this.state;
        return (
            <View style={styles.container}>
                <Text>{phrase}</Text>

                <TouchableOpacity
                    onPress={this.getNewPhrase}
                    style={styles.button}>
                    <Text style={styles.buttonText}> Get a new joke! </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// make this component available to the app
export default HomeScreen;
