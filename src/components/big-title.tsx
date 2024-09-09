import { cn } from '@/lib/cn'
import { Text } from './ui/text'

export const BigTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <Text className={cn('text-4xl font-bold leading-tight', className)}>{children}</Text>
}
