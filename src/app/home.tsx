import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-native-paper";
import { theme } from "../themes";
import RasioLogoWhite from "../components/RasioLogoWhite";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider theme={theme}>
      <RasioLogoWhite />
    </Provider>
  );
};

export default Home;
