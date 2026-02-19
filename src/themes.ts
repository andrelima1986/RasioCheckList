import { MD3LightTheme, MD3Theme } from "react-native-paper";

export const rasioColors = {
  preto: "#000",
  cinzaQuasePreto: "#121212",
  cinzaGrafite: "#1E1E1E",
  cinzaEscuro: "#2C2C2C",
  cinzaMedio: "#4D4D4D",
  cinzaClaro: "#7A7A7A",
  cinzaMuitoClaro: "#B3B3B3",
  cinzaMuitoMaisClaro: "#D3D3D3",
  cinzaQuaseBranco: "#E2DEDE",
  branco: "#FFFFFF",
  vermelho: "#FF0000",
  verde: "#00A636",
};

export const theme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,

    primary: rasioColors.cinzaEscuro,
    secondary: rasioColors.verde,
    background: rasioColors.branco,
    surface: rasioColors.branco,
    error: rasioColors.vermelho,

    onPrimary: rasioColors.branco,
    onSecondary: rasioColors.branco,
    onBackground: rasioColors.preto,
    onSurface: rasioColors.preto,
  },

  fonts: {
    ...MD3LightTheme.fonts,
    bodyLarge: {
        fontFamily: "Lexend",
        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 0
    },
    bodyMedium: {
        fontFamily: "Lexend",
        fontWeight: "400",
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 0
    },
    titleLarge: {
        fontFamily: "Lexend",
        fontWeight: "700",
        fontSize: 24,
        letterSpacing: 0,
        lineHeight: 0
    },
    headlineLarge: {
        fontFamily: "Lexend",
        fontWeight: "700",
        fontSize: 32,
        letterSpacing: 0,
        lineHeight: 0
    },
  },
};

export const rasioTipografiasThemes = {
  h1: { fontSize: 32, fontWeight: "700" },
  h2: { fontSize: 30, fontWeight: "700" },
  h3: { fontSize: 28, fontWeight: "700" },
  h4: { fontSize: 24, fontWeight: "700" },
  h5: { fontSize: 22, fontWeight: "700" },

  p11: { fontSize: 11, fontWeight: "400" },
  p12: { fontSize: 12, fontWeight: "400" },
  p14: { fontSize: 14, fontWeight: "400" },
  p16: { fontSize: 16, fontWeight: "400" },
  p18: { fontSize: 18, fontWeight: "400" },
  p20: { fontSize: 20, fontWeight: "400" },

  fontFamily: "Lexend",

  fontWeight: {
    regular: "400" as const,
    medium: "500" as const,
    bold: "700" as const,
  },
};
