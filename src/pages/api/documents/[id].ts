import type { APIRoute } from 'astro';
import { Document, db, sql } from 'astro:db';

export const prerender = false;

export const PUT: APIRoute = async ({ request, params }) => {
  const { id } = params;

  const contentType = request.headers.get('Content-Type');
  if (contentType?.toLowerCase() === 'application/json') {
    const { content, title } = await request.json();

    let document;
    try {
      document = await db
        .update(Document)
        .set({ content, title, updatedAt: sql`${new Date().toISOString()}` })
        .returning();
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to update document' }),
        { status: 500 },
      );
    }

    return new Response(JSON.stringify(document), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(
    JSON.stringify({
      error: `Content type [${contentType}] is not supported`,
    }),
    {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
