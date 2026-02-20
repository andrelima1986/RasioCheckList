import { Button, Text } from "react-native-paper";
import { ButtonProps } from "react-native-paper";
import { rasioColors, rasioTipografiasThemesParagraphs } from "../themes";

type RasioButtonProps = ButtonProps & {
   
    onPress?: () => void;
    props?: ButtonProps;
}

const RasioMobileButton = ({ children, onPress , props}: RasioButtonProps) => {
  return (
    <Button
    style={{
        backgroundColor: rasioColors.preto ,
        width: "100%",
        padding: 10,
    }}
    {...props} 
    onPress={onPress}>
        <Text style={{
            fontFamily: rasioTipografiasThemesParagraphs.fontFamily,
            color: rasioColors.branco,
            fontSize: rasioTipografiasThemesParagraphs.p16.fontSize,
            }}>{children}</Text>
            
    </Button>
  );
}

export default RasioMobileButton;