import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { rasioColors, rasioTipografiasThemesParagraphs } from "../themes";


type RasioMobilePasswordInputProps = {
  onChangeText: (text: string) => void;
  props?: TextInputProps;
  value: string;
    
};

const RasioMobilePasswordInput = ({ onChangeText, props, value }: RasioMobilePasswordInputProps) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <TextInput 
    mode="outlined"
    value={value}
    {...props} 
    onChangeText={onChangeText}
    secureTextEntry={!isPasswordVisible}
    right={
    <TextInput.Icon  
      icon={isPasswordVisible ? "eye-off" : "eye"} 
      onPress={() => setIsPasswordVisible(!isPasswordVisible)} 
      /> }
    style={{
            width: "100%",
            marginBottom: 20,
            color: rasioColors.preto,
            fontFamily: rasioTipografiasThemesParagraphs.fontFamily,
          }}
          activeOutlineColor={rasioColors.preto}
    />
    );
};

export default RasioMobilePasswordInput;