import {Redirect} from "expo-router";
import {isLoggedIn} from "@/constants/Auth";

export default function Screen() {
   return (<Redirect href={isLoggedIn ? '/(creator)' : '/(guest)'} />)
}