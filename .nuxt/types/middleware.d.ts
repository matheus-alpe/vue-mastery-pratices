import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "profile"
declare module "/home/matheus-alpe/workspace/personal-projects/vue-mastery-pratices/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}