

const { pgTable, serial, varchar , uuid , text} = require("drizzle-orm/pg-core");
const { authortable } = require("./author.model");
const BOOKS = pgTable("books", {

    id: uuid("id").defaultRandom().primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    description: text("description"),
    authorId: uuid("author_id").references(() => authortable.id).notNull(),
});


module.exports = {
    BOOKS,
  
}