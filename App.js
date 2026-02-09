import {Text, SafeAreaView} from 'react-native';
import Sobrenome from './src /Telas/Sobrenome';


export default function App() {
  return (
    <SafeAreaView>
      <Text>Guilherme Marinho</Text>
      <Sobrenome nome='nego trufa' />
    </SafeAreaView>
  );
}

