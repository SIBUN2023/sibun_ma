import * as React from 'react';
import { Text, FlatList, Pressable, View } from 'react-native'
import { MODALIDADES_QUERY } from "./gql/Query";
import { useQuery } from "@apollo/client";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

