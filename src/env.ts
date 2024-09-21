import { z } from 'zod'

const envSchema = z.object({
  ANDROID_CLIENT_ID: z.string(),
  IOS_CLIENT_ID: z.string(),
})

export const env = envSchema.parse(process.env)
