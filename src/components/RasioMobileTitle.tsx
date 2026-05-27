import { TextProps } from "react-native";
import { Text } from "react-native-paper";
import { rasioColors, rasioTipografiasThemesTitle, theme } from "../themes";

type FontWeight = keyof typeof rasioTipografiasThemesTitle.fontWeight;
type TextAlign = "left" | "center" | "right" | "justify" | "auto" | undefined;

type RasioMobileTitleProps = TextProps & {
  title: string;
  size: number;
  weight: FontWeight;
  textAlign?: TextAlign;
  props?: TextProps;
  color: string;
};

const RasioMobileTitle = ({
  title,
  size,
  weight,
  textAlign,
  color,
  props,
}: RasioMobileTitleProps) => {
  return (
    <Text
      {...props}
      style={{
        fontFamily: theme.fonts.bodyMedium.fontFamily,
        color: color || rasioColors.preto,
        fontSize: size,
        fontWeight: rasioTipografiasThemesTitle.fontWeight[weight],
        marginBottom: 20,
        lineHeight: size * 1.2,
        textAlign: textAlign,
      }}
    >
      {title}
    </Text>
  );
};

export default RasioMobileTitle;
