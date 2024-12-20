import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tab)"options={{headerShown:false}}/>
      <Stack.Screen name="signUp" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
