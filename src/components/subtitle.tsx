import { cn } from '@/lib/cn'
import { Text } from './ui/text'

export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Text className={cn('font-medium text-lg text-muted-foreground', className)}>{children}</Text>
  )
}
