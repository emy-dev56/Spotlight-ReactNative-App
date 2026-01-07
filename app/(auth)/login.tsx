import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.style'
import { useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Login() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy: 'oauth_google' });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.push('/(tabs)');
      }
    } catch (error) {
      console.log("An Error Occured", error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name='leaf' size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Spotlight</Text>
        <Text style={styles.tagline}>donot miss anything</Text>
      </View>
      <View style={styles.illustrationContainer}>
        <Image source={require("../../assets/images/Tablet-login-bro.png")} style={styles.illustration} resizeMode="contain" />
      </View>
      <View style={styles.loginSection}>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
          <View style={styles.googleIconContainer}>
            <Ionicons name='logo-google' size={20} color={COLORS.primary} />
          </View>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>By signing in, you agree to our Terms of Service and Privacy Policy</Text>
      </View>
    </View>
  )
}