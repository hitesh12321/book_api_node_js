
const { pgTable, uuid, varchar , text } = require("drizzle-orm/pg-core");

const authortable = pgTable("authors", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
});

module.exports = {
    authortable

}