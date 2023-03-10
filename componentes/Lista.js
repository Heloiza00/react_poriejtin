import React from "react";
import { Text, View } from "react-native";

class Lista extends React.Component {
    render() {
        return(
             <View>
                 <Text>{this.props.lista[0]}</Text>
                 <Text>{this.props.lista[1]}</Text>
                 <Text>{this.props.lista[2]}</Text>
                 <Text>{this.props.lista[3]}</Text>
             </View>
        );
    }
}
export default Lista;