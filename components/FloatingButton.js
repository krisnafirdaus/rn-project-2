import React from "react";
import { TouchableOpacity, Image } from "react-native";
import {assets} from '../constants';
  
const FloatingButton = () => {
    return (
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: '#00ADB5',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    position: 'absolute',
                    top: 737,
                    right: 20,
                    height: 50,
                    backgroundColor: '#00ADB5',
                    borderRadius: 100,
                    zIndex: 2,
                }}
                onPress={() => { alert('Button is pressed') }}
            >
                <Image source={assets.Edit} />
            </TouchableOpacity>
    );
};
  
export default FloatingButton;