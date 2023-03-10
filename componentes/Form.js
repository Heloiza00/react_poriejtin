import { StyleSheet, TextInput } from "react-native";
import { ScrollView, Text , View} from "react-native";

const Formulario = () => {
     return(
        <ScrollView>
            <Text
            style={{
                fontWeight:'bold',
                color: 'blue',
                borderBottomWidth: 0.5,
                borderColor: 'blue',
                marginBottom: 5,
              }}
              >SOBRE</Text>
            <View>
                <TextInput 
                style={styles.input}
                defaultValue="Nome:" />
                <TextInput 
                style={styles.input}
                  defaultValue="Mensagem:"/>
            </View>
        </ScrollView>
     );
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth:1,
        height:40,
        boderWidth: 1,
        fontSize: 15,
    }
});

export default Formulario;