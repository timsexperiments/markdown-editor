/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { DurableObject, KVNamespace } from '@cloudflare/workers-types';
import type { CollaborationService } from './utils/collaboration';

interface Env {
  COLLABORATION_SERVICE: DurableObject<CollaborationService>;
  USER_KV: KVNamespace;
}

// Depending on your adapter mode
// use `AdvancedRuntime<ENV>` for advance runtime mode
// use `DirectoryRuntime<ENV>` for directory runtime mode
type Runtime = import('@astrojs/cloudflare').AdvancedRuntime<ENV>;
declare namespace App {
  interface Locals extends Runtime {}
}
