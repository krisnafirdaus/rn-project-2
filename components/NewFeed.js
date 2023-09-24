import { View, Image, Text } from 'react-native';
import { FONTS, COLORS, assets , SIZES} from "../constants";

const NewFeed = () => {
    return (
        <View style={{  
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
        }}>
            <View
                style={{
                    marginRight: 13,
                }}
            >
                <Image source={assets.ProfileUser} />
            </View>
            <View>
                <Text
                    style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.font,
                    }}
                >
                    UsupSuparma
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small,
                        color: COLORS.gray,
                        marginTop: 5,
                    }}
                >
                    Mar 24, 2022
                </Text>
            </View>
        </View>
    )
}

export default NewFeed