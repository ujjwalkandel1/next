import { drizzle } from "drizzle-orm/singlestore/driver"
import postgress from "postgres"

const connectionString =" postgresql://postgres.aucxusdnyvsenxiutjkc:UJJWALKANDEL@aws-0-us-west-1.pooler.supabase.com:6543/postgres"

const connection = postgress(connectionString)
export const db = drizzle(connection)