import { TextInput, TextInputProps } from "react-native-paper";
import { rasioColors, rasioTipografiasThemesParagraphs } from "../themes";

type RasioMobileInputProps = TextInputProps & {
  onChangeText: (text: string) => void;
  onKeyPress?: (event: any) => void;
  keyboardType?: string;
  props?: TextInputProps;
  value: string;
};

const RasioMobileInput = ({ onChangeText, onKeyPress, keyboardType, props, value }: RasioMobileInputProps) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      mode="outlined"
      onChangeText={onChangeText}
      onKeyPress={onKeyPress}
      value={value}
      {...props}
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

export default RasioMobileInput;
