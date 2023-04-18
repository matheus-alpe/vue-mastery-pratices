import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/matheus-alpe/workspace/personal-projects/vue-mastery-pratices/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}