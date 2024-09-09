import authBg from '@/assets/images/auth-background.png'
import googleLogo from '@/assets/logos/google.svg'
import { BigTitle } from '@/components/big-title'
import { LucideCrown } from '@/components/icons'
import { SubTitle } from '@/components/subtitle'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { AppInnerLayout } from '@/layouts/app-inner-layout'
import { AppOuterLayout } from '@/layouts/app-outer-layout'
import { Image, ImageBackground } from 'expo-image'
import React from 'react'
import { Dimensions, View } from 'react-native'

export default function Page() {
  const { height } = Dimensions.get('window')

  return (
    <AppOuterLayout>
      <ImageBackground
        alt='Car background image'
        source={authBg}
        contentFit='cover'
        transition={1000}
        style={{ position: 'absolute', height, width: '100%' }}
        allowDownscaling={false}
      >
        <AppInnerLayout className='justify-center px-12'>
          <View className='flex-row items-center justify-center gap-2'>
            <LucideCrown className='text-primary' size={32} />
            <BigTitle className='leading-tight text-primary'>Crown Fleet</BigTitle>
          </View>

          <SubTitle className='text-center'>Gestão de uso de veículos</SubTitle>

          <Button className='mt-5'>
            <View className='flex-row items-center justify-center gap-2'>
              <Image transition={1000} style={{ width: 20, height: 20 }} source={googleLogo} />

              <Text>Entrar com Google</Text>
            </View>
          </Button>
        </AppInnerLayout>
      </ImageBackground>
    </AppOuterLayout>
  )
}
