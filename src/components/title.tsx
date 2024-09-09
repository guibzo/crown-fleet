import { cn } from '@/lib/cn'
import { Text } from './ui/text'

export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <Text className={cn('text-xl font-semibold  leading-tight', className)}>{children}</Text>
}
