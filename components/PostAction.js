import { View, Image, Text } from "react-native"
import { assets, FONTS, SIZES, COLORS } from '../constants';

const PostAction = () => {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                paddingVertical: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 52
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Image source={assets.Interface} style={{ width: 24, height: 24}} />
                <View style={{ marginLeft: 23, flexDirection: 'row', alignItems: 'center'  }}>
                    <Image source={assets.Communication} style={{ width: 24, height: 24}}/>
                    <Text
                        style={{
                            marginLeft: 8,
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.font,
                            color: COLORS.gray,
                        }}
                    >37</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Image source={assets.Block} style={{ width: 24, height: 24}} />
                <View style={{ marginLeft: 18, flexDirection: 'row', alignItems: 'center'  }}>
                    <Image source={assets.VoteIconDown} style={{ width: 24, height: 24}}/>
                    <Text
                        style={{
                            marginLeft: 8,
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.font,
                            color: COLORS.tosca,
                        }}
                    >376</Text>
                </View>
                <Image source={assets.VoteIconUp} style={{ width: 24, height: 24, marginLeft: 8}}/>
            </View>
        </View>
    )
}

export default PostAction