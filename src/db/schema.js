import { timestamp } from "drizzle-orm/mysql-core"
import {pgTable,serial} from "drizzle-orm/pg-core"
import { varchar } from "drizzle-orm/schema";





 export const recipes = pgTable("recipes",{
    id : serial("id").primaryKey(),
    name : varchar("name",{length : 50}).notNull().unique(),
    description: text("description").notNull(),
    subname: varchar("subname",{length: 100}),
    createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
    updatedat: timestamp("updated_at").default(sql`CURRENT_TUMESTAMP`)
 })

 recipes.insert