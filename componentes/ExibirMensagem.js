import { Text, View } from "react-native";

const ExibirMensagem = (props) => {
    return(
         <View>
            <Text> Autor: {props.msg.autor} </Text>
            <Text> Destinatário: {props.msg.dest} </Text>
            <Text> Mensagem: {props.msg.texto} </Text>
         </View>
    ); 
};

export default ExibirMensagem;