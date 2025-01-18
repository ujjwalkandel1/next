
import { drizzle } from "drizzle-orm/postgres-js"
import postgress from "postgres"

const connectionString =" postgresql://postgres.aucxusdnyvsenxiutjkc:ujjwalkandel@aws-0-us-west-1.pooler.supabase.com:6543/postgres"

export const connection = postgress(connectionString)
export const db = drizzle(connection)