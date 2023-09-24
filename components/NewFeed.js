import { View, Image, Text } from 'react-native';
import { FONTS, COLORS, assets , SIZES} from "../constants";
import ThreeDotsMenu from './ThreeDotsMenu';

const NewFeed = ({data}) => {
    return (
        <View style={{  
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
        }}>
            <View 
                 style={{  
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 8,
                }}
            >
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
                    {data.name}
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
            {data.menu && <View  style={{  
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
            }}>
                <ThreeDotsMenu />
            </View>}
        </View>
    )
}

export default NewFeed