import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'
import { SafeAreaView, View } from 'react-native'

export const AppInnerLayout = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'var(--background)',
      }}
    >
      <View className={cn('h-full w-full max-w-4xl flex-1 px-3 py-2', className)}>{children}</View>
    </SafeAreaView>
  )
}
