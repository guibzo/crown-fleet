import { useColorScheme } from '@/hooks/use-color-scheme'
import { StatusBar } from 'expo-status-bar'

type ThemedStatusBarProps = {
  translucent?: boolean
  forceLightStyle?: boolean
}

export const ThemedStatusBar = ({ translucent, forceLightStyle }: ThemedStatusBarProps) => {
  const { isDarkColorScheme } = useColorScheme()

  return (
    <StatusBar
      style={forceLightStyle ? 'light' : isDarkColorScheme ? 'light' : 'dark'}
      backgroundColor={
        !translucent ? (isDarkColorScheme ? 'hsl(0 0% 98%)' : 'hsl(240 5.9% 10)') : undefined
      }
    />
  )
}
