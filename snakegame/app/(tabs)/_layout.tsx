import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Game from '@/components/Game';


export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Game />
    </GestureHandlerRootView>
  );
}
