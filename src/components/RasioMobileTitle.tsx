import { TextProps } from "react-native";
import { Text } from "react-native-paper";
import { rasioColors, rasioTipografiasThemesTitle, theme } from "../themes";


type FontWeight = keyof typeof rasioTipografiasThemesTitle.fontWeight;


type RasioMobileTitleProps = TextProps & {
    title: string;
    size : number;
    weight: FontWeight;
    props?: TextProps;
}

const RasioMobileTitle = ({ title, size, weight, props }: RasioMobileTitleProps) => {
    return (
        <Text
        {...props}

                  style={{
                    fontFamily: theme.fonts.bodyMedium.fontFamily,
                    color: rasioColors.preto,
                    fontSize: size,
                    fontWeight: rasioTipografiasThemesTitle.fontWeight[weight],
                    marginBottom: 20,
                    lineHeight: size * 1.2,
                  }}
                >
      {title}
    </Text>
  );

}

export default RasioMobileTitle;