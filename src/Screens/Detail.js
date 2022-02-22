import React from "react";
import { View,Text,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detail(props){

    const {data_notify} =  props.route.params;

    return(
        <SafeAreaView>
            <View>
                <Image
                style={{width:"100%",height:400}}
                source={{uri : data_notify}}
                />
            </View>
            <View>
            </View>
        </SafeAreaView>
        );
} 