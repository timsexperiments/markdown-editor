import {
  Request,
  Response,
  WebSocket,
  WebSocketPair,
  type DurableObject,
  type DurableObjectState,
} from '@cloudflare/workers-types';
import type { Env } from '../env';

export class CollaborationService implements DurableObject {
  constructor(
    private readonly ctx: DurableObjectState,
    private readonly env: Env,
  ) {}

  async fetch(request: Request) {
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);

    this.ctx.acceptWebSocket(server);

    return new Response(null, {
      status: 101,
      webSocket: client,
    });
  }

  async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer) {}

  broadcast(message: ClientMessage, ignore: Iterable<WebSocket>) {
    const ignoreSet = new Set(ignore);
    for (const socket of this.ctx.getWebSockets()) {
      if (!ignoreSet.has(socket)) {
        socket.send(JSON.stringify(message));
      }
    }
  }

  send(ws: WebSocket, message: ClientMessage) {
    ws.send(JSON.stringify(message));
  }

  async webSocketError(ws: WebSocket, error: unknown) {}

  async webSocketClose(
    ws: WebSocket,
    code: number,
    reason: string,
    wasClean: boolean,
  ) {}
}

type ClientMessage = {} | {};
