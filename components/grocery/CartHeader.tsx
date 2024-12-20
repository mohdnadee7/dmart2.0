import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View ,Text,StyleSheet} from "react-native";

const CartHeader=()=>{
return(
    <View style={styles.header}>
          <Text style={{ color: "#fff", fontSize: 20, fontStyle: "italic" }}>
            <Link href="/(home)/">
              <AntDesign name="arrowleft" size={22} color={"#fff"} /> Grocery
            </Link>
          </Text>
          <Link href="/(tab)/cart">
            <MaterialCommunityIcons
              size={22}
              color={"#fff"}
              name="shopping-outline"
            /></Link>
            {/* Circle with the number */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          
        </View>
);
}
const styles = StyleSheet.create({
header: {
    backgroundColor: "#018786",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
})
export default CartHeader