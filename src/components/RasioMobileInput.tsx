import { TextInput, TextInputProps } from "react-native-paper";
import { rasioColors } from "../themes";


type RasioMobileInputProps = TextInputProps & {
    onChangeText?: () => void
    props?: TextInputProps;
}

const RasioMobileInput = ({onChangeText, props}: RasioMobileInputProps) => {
  return (
    <TextInput
    onChangeText={onChangeText}
    {...props}
          style={{
            width: "100%",
            marginBottom: 20,
            color: rasioColors.preto,
          }}
          underlineColorAndroid={rasioColors.preto}
          activeUnderlineColor={rasioColors.preto}
          outlineColor={rasioColors.branco}
          activeOutlineColor={rasioColors.preto}
        />
  )
};

export default RasioMobileInput;