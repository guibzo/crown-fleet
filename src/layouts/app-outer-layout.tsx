import type { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const AppOuterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'var(--background)',
      }}
    >
      {children}
    </SafeAreaView>
  )
}
