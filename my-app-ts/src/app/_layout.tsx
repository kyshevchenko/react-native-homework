import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
// import AppTabs from "@/components/app-tabs";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      {/* <AppTabs /> */}
      <View
        style={{
          backgroundColor: "black",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            // marginTop: 100,
            width: "60%",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <View style={{ gap: 40 }}>
            <View style={{ flexDirection: "row" }}>
              <Image src="../assets/images/icon.png" />
              <Text style={{ color: "white", fontWeight: 700 }}>
                PurpleSchool
              </Text>
            </View>
            <View style={{ gap: 8 }}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="grey"
                style={{ width: "100%" }}
              />
              <TextInput placeholder="Пароль" placeholderTextColor="grey" />
            </View>
          </View>
          <View style={{ gap: 8, marginTop: 10 }}>
            <Button
              title="Войти"
              color="grey"
            />
            <Button title="Восстановить пароль" color="grey" />
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
}
