import { NOW, column, defineDb, defineTable } from 'astro:db';

const Document = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text({ optional: true }),
    authorIp: column.text(),
    content: column.text(),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Document },
});
