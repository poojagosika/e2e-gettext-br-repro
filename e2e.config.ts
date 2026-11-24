import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default {
  targets: [
    {
      name: 'web',
      engine: web(),
      app: { url: 'http://127.0.0.1:4300', command: { executable: 'node', args: ['server.mjs'], env: { PORT: '4300' } } },
    },
  ],
} satisfies E2EConfig;
