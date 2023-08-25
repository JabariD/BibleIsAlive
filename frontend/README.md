# Frontend


## Developer Notes

The frontend is developed using React Native https://reactnative.dev/docs/getting-started and TypeScript.

Run the command `npx create-expo-app christian-app` for the initial creation of the app!

To run your app: 
1. Make sure terminal in root directory of `project.json`.
1. Run `npx expo start`. 
2. Scan the QR code.
3. Open in Expo!

To stop your app:
1. Press `Ctrl+C`


Going from Figma design to frontend app.
This I found to be difficult at first but some patterns I kind of took up:
1. Start with structure first (NO styles)
   1. Start building outside in. (ex. when designing the section with "see all" to the right, design the outer box first, then the child elements)
   2. Extract out repeated elements (ex. the cards can be a component)
2. Then add styles.
   1. Always start generic then go more complex.