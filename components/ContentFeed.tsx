import { View, Text} from 'react-native';
import { FONTS, SIZES} from "../constants";


const NewFeed = () => {
    return (
        <View>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium,
                fontWeight: '400',
                lineHeight: 24,
                letterSpacing: 0.1,
                marginTop: 24
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci...More
            </Text>
           
        </View>
    )
}

export default NewFeed

