/**
 * This code is needed to provide type safety and autocompletion support for the useNavigation hook in a React Navigation 
 * project. 
 * 
 * The useNavigation hook is used to access the navigation prop in functional components, 
 * allowing them to navigate between screens. By defining a generic type T that extends NavigationProp, 
 * the function can return an object of the specific navigation prop type used in the application. 
 * 
 * This helps catch potential type errors and provides better code suggestions and autocompletion when using the 
 * useNavigation hook.
 */

import { NavigationProp, ParamListBase } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }
}

export function useNavigation<T extends NavigationProp>(): T;
