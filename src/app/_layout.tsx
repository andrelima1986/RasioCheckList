import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack 
        screenOptions={{ 
            headerShown: false ,
            animation: "none"
            }} 
            initialRouteName="home"
            >
            <Stack.Screen 
            name="home" 
            options={{ 
                headerShown: false 
            }}
             />
            <Stack.Screen 
            name="login" 
            options={{ 
                headerShown: false}}
                />
            <Stack.Screen 
            name="checklist" 
            options={{ 
                headerShown: false}}
                />
            <Stack.Screen 
            name="confirm" 
            options={{ 
                headerShown: false}}
                />
            <Stack.Screen 
            name="success" 
            options={{ 
                headerShown: false}}
                />
        </Stack>
    );
}

export default Layout;