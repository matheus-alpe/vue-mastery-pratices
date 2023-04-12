import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'

import EventService from '@/services/EventService.js'
import GStore from '@/stores'

import EventListView from '../views/EventListView.vue'
const EventLayoutView = () => import('../views/event/LayoutView.vue')
const EventDetailsView = () => import('../views/event/DetailsView.vue')
const EventRegisterView = () => import('../views/event/RegisterView.vue')
const EventEditView = () => import('../views/event/EditView.vue')
const AboutView = () => import('../views/AboutView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')
const NetworkErrorView = () => import('../views/NetworkErrorView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page) || 1,
      }),
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: EventLayoutView,
      beforeEnter: (to) => {
        return EventService.getEvent(to.params.id)
          .then((response) => {
            GStore.event = response.data
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: '404-resource',
                params: { resource: 'event' },
              }
            }

            return { name: 'network-error' }
          })
      },
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetailsView,
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView,
          meta: {
            requireAuth: true,
          },
        },
      ],
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: `/events/${to.params.afterEvent}` }
      },
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView,
    },
  ],
})

router.beforeEach((to, from) => {
  nProgress.start()

  const notAuthorized = true
  if (to.meta.requireAuth && notAuthorized) {
    GStore.flashMessage = 'Sorry, you are not authorized to view this page'

    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)

    if (from.href) {
      return false
    }

    return { path: '/' }
  }
})
router.afterEach(() => {
  nProgress.done()
})

export default router
