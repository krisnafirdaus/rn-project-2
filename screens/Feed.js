import { View, SafeAreaView, FlatList } from "react-native";
import CardFeed from '../components/CardFeed';
import { DataDummy } from '../constants';

const Feed = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={DataDummy}
            renderItem={({ item }) => <CardFeed data={item} />}
            keyExtractor={(item) => item.id}
            
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Feed;
