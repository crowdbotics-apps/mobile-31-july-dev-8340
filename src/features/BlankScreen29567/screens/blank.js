import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    Input_2: "fdgsdfgsf",
    Input_3: "76787687",
    Datepicker_4: new Date("07/31/2020"),
    Toggle_6: true,
    Radio_8: true,
    CheckBox_9: true
  }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 12,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontFamily: "Roboto-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <Input
        placeholder="Sample text input placeholder"
        editable={true}
        textStyle={{ fontSize: 12, color: "#000000", textAlign: "left" }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 2,
          borderRightWidth: 3,
          borderTopWidth: 4,
          borderBottomWidth: 1,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 10
        }}
        value={this.state.Input_2}
        onChangeText={nextValue => this.setState({ Input_2: nextValue })}
      />
      <Input
        placeholder="Number Input Placeholder"
        editable={true}
        keyboardType="numeric"
        textStyle={{ fontSize: 12, color: "#000000", textAlign: "left" }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 2,
          borderRightWidth: 3,
          borderTopWidth: 1,
          borderBottomWidth: 4,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 4
        }}
        value={this.state.Input_3}
        onChangeText={nextValue => this.setState({ Input_3: nextValue })}
      />
      <Datepicker
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 3,
          borderRightWidth: 3,
          borderTopWidth: 7,
          borderBottomWidth: 3,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 10
        }}
        date={this.state.Datepicker_4}
        onSelect={nextValue => this.setState({ Datepicker_4: nextValue })}
      />
      <Text
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 7,
          borderRightWidth: 8,
          borderTopWidth: 1,
          borderBottomWidth: 10,
          borderRadius: 8,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 10
        }}
      >
        Sample text content
      </Text>
      <Toggle
        text="switch ON/OFF"
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 3,
          borderRightWidth: 4,
          borderTopWidth: 2,
          borderBottomWidth: 1,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 10
        }}
        checked={this.state.Toggle_6}
        onChange={nextChecked => this.setState({ Toggle_6: nextChecked })}
      />
      <Radio
        text="Radio button"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 2,
          borderRightWidth: 5,
          borderTopWidth: 3,
          borderBottomWidth: 4,
          borderRadius: 5,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 10
        }}
        checked={this.state.Radio_8}
        onChange={nextChecked => this.setState({ Radio_8: nextChecked })}
      />
      <CheckBox
        text="Checkbox"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 1,
          borderRightWidth: 4,
          borderTopWidth: 3,
          borderBottomWidth: 6,
          borderRadius: 7,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 10
        }}
        checked={this.state.CheckBox_9}
        onChange={nextChecked => this.setState({ CheckBox_9: nextChecked })}
      />
      <Icon
        iconFont="Eva Design Icons"
        name="star"
        width={20}
        height={20}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderLeftWidth: 8,
          borderRightWidth: 4,
          borderTopWidth: 2,
          borderBottomWidth: 1,
          borderRadius: 5,
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 10
        }}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
