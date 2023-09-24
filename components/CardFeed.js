import {View, Text, Image} from 'react-native';
import { FONTS, COLORS, assets , SIZES} from "../constants";
import { Divider } from 'react-native-paper';
import PostAction from './PostAction';
import NewFeed from './NewFeed';
import ContentFeed from './ContentFeed';

const CardFeed = ({data}) => {
    return (
        <View>
            <View 
                style={{ 
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                }}
            >
                <NewFeed />
                <Divider style={{marginHorizontal: -20}} />
                <ContentFeed />
            </View>
            <View>
                <Image source={assets.Media} style={{ width: "100%", marginTop: 24 }} />
            </View>
            <PostAction />
            <Divider style={{marginHorizontal: -20, height: 4, backgroundColor: '#F5F5F5'}} />
        </View>
    );
}

export default CardFeed;