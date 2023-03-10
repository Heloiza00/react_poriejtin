import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carrinho from './componentes/Carrinho';
import ExibirMensagem from './componentes/ExibirMensagem';
import Formulario from './componentes/Form';
import Lista from './componentes/lista';
import Pedido from './componentes/Pedido';
import Produto from './componentes/Produto';

// const msg = {
//    autor: 'João',
//    dest: 'Maria',
//    texto: 'Tá me devendo!'
// }

// const lista = ["Kotlin","Objective-C","Java","JavaScript"]

export default function App() {
  return (
    <View >
      <Carrinho styles={styles.container} />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: 'yellow', 
        backgroundColor: 'gray',
        width: '100%',
        textAlign: 'center',
        padding: 10,
    },
    view: {
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    borderColor: 'red',
    marginBottom: 5,
    width: 200,
    height: 150,
    backgroundColor: 'skyblue',
    padding: 18,} 
  
  });
