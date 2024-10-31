import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { colorsTheme } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorsTheme.primary,
        tabBarStyle: {
          backgroundColor: colorsTheme.black
        } ,
        headerShown: true,
        headerTitleAlign: 'left',
        headerTitle: 'Coins',
        headerTintColor: colorsTheme.primary,
        headerStyle: {
          backgroundColor: colorsTheme.black
        },
        headerLeft: () => (
          <Ionicons
            name="logo-bitcoin"
            size={25}
            color={colorsTheme.primary}            
          />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favors"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-sharp'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
