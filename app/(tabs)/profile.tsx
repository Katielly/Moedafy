import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Avatar } from 'react-native-paper';
import { colorsTheme } from '@/constants/Colors';

import { Input } from '@/components/Input'

type Props = {
  name: string,
  company: string,
  mount: number
}

export default function Profile({ name, company, mount }: Props) {
  // const [text, onChangeText] = React.useState('Useless Text');
  const [isLodding, setLoggind] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Avatar.Image size={84} source={require('../../assets/images/perfil.jpg')} />
          <Text style={styles.name}>Usuario Admin</Text>
          <Text style={styles.company}>Company</Text>
        </View>
        <View>
          <Text style={styles.settings}>Configurações do Perfil</Text>
          <Input placeholder='Maria Pereira' label='Usuário' />
          <Input placeholder='maria.pereira@gmail.com' label='E-mail' />
          <Input placeholder='*******' label='Senha' textContentType='password' />
        </View>
      </View>

      <Button color={colorsTheme.black} title='Salvar Alterações' disabled={isLodding} onPress={() => {
        setLoggind(true) 
        setTimeout(() => {
          console.log('salvar alterações perfil.')
          setLoggind(false)
        }, 1600)
        
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: colorsTheme.ternary
  },
  user: {
    alignItems: 'center',
    width: '100%',
    gap: 6,
  },
  company: {
    fontSize: 16
  },
  name: {
    fontSize: 16,
    fontWeight: '700'
  },
  settings: {
    marginBottom: 8,
    marginTop: 15,
    fontSize: 16,
    fontWeight: '700'
  }
});