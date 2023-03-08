import type { App } from 'vue';
import Router from '@/router';

export function setupRouter(app: App<Element>): void {
  app.use(Router);
}
