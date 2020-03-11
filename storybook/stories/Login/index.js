import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Images } from "@Utils";

const { width } = Dimensions.get("window");

export default class Login extends React.Component {
  styles = {
    container: {
      flex: 1,
      backgroundColor: "#005398",
      alignItems: 'center',
    },
    headerView: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
      marginHorizontal: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "#FFFFFF",
      marginLeft: 20,
    },
    imgMark: {
      width: 30,
      height: 30
    },
    welcomeView: {
      marginTop: 15,
      alignItems: 'center',
    },
    welcomeViewDivide: {
      width: width * 2 / 5,
      height: 4,
      backgroundColor: "#009ef9"
    },
    welcomeText: {
      fontSize: 22,
      color: "#009ef9",
      marginTop: 15,
      marginBottom: 20,
    },
    inputStyle: {
      marginTop: 10,
      width: width - 40,
      backgroundColor: "#FFF",
      padding: 20,
      fontSize: 20
    },
    signButton: {
      alignItems: 'center',
      marginTop: 10,
      width: width - 40,
      height: 60,
      justifyContent: 'center',
      backgroundColor: "#009ef9",
    },
    signButtonText: {
      color: "#FFF",
      fontSize: 22,
      fontWeight: 'bold',
    },
    forgotBtt: {
      marginVertical: 20,
      color: "#FFF",
      fontSize: 16,
      fontWeight: 'normal'
    },
    googleButton: {
      alignItems: 'center',
      marginTop: 30,
      width: width - 40,
      height: 60,
      justifyContent: 'center',
      backgroundColor: "#2f73ab",
      borderWidth: 2,
      borderColor: "#85adce",
    },
    socialHelpView: {
      width: width - 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    socialHelpViewDivide: {
      width: width / 2 - 70,
      height: 1.5,
      backgroundColor: "#5c91bd"
    },
    socialHelpViewText: {
      color: "#60c5ff",
      fontSize: 14,
      fontWeight: 'normal',
      width: 100,
      textAlign: 'center',
    },
    registerButton: {
      alignItems: 'center',
      width: width,
      height: 80,
      justifyContent: 'center',
      backgroundColor: "#009ef9"
    },
    signUpButtonText: {
      color: "#FFF",
      fontSize: 20,
      fontWeight: 'bold',
    },

  };

  showApp = event => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <SafeAreaView style={this.styles.container} forceInset={{ top: 'always' }}>
        <View style={this.styles.headerView}>
          <Image source={Images.mark1} style={this.styles.imgMark} />
          <Text style={this.styles.headerText}>COVERAGE PORTAL</Text>
        </View>
        <View style={this.styles.welcomeView}>
          <View style={this.styles.welcomeViewDivide} />
          <Text style={this.styles.welcomeText}>WELCOME</Text>
        </View>
        <TextInput
          style={this.styles.inputStyle}
          placeholder="Username"
        />
        <TextInput
          style={this.styles.inputStyle}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity activeOpacity={0.5}>
          <View style={this.styles.signButton}>
            <Text style={this.styles.signButtonText}>Sign in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={this.styles.forgotBtt}>Forgot your login details? Get help signing in.</Text>
        </TouchableOpacity>
        <View style={this.styles.socialHelpView}>
          <View style={this.styles.socialHelpViewDivide} />
          <Text style={this.styles.socialHelpViewText}>or sign in with</Text>
          <View style={this.styles.socialHelpViewDivide} />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={this.styles.googleButton}>
            <Text style={this.styles.signButtonText}>Google</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity activeOpacity={0.5}>
          <View style={this.styles.registerButton}>
            <Text style={this.styles.signUpButtonText}>REGISTER FOR AN ACCOUNT</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

Login.defaultProps = {
  showApp: null,
};

Login.propTypes = {
  showApp: PropTypes.func,
};
