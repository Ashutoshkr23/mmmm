import { Text, View } from 'react-native';
import { theme } from '@/constants/theme';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={{ fontFamily: 'Outfit-Bold', color: theme.colors.light }}>
        Welcome to your app!
      </Text>
    </View>
  );
}