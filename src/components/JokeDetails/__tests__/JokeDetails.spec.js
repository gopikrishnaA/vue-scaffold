/* eslint-env jest */
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import JokeDetails from '../index.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const routes = [
  {
    path: '/summary',
    params: {
      id: 1
    },
    name: 'Summary'
  }
]
const router = new VueRouter({
  routes
})

describe('JokeDetails.vue', () => {
  let actions
  let store
  let getters

  beforeEach(() => {
    actions = {
      getJoke: jest.fn(),
      rateJoke: jest.fn()
    }
    getters = {
      currentJoke: () => 'test',
      items: () => ({
        '1': {
          joke: 'test'
        }
      }),
      info: () => {}
    }
    store = new Vuex.Store({
      state: {},
      actions,
      getters
    })
  })
  it('should render h1 contents', () => {
    const wrapper = shallowMount(JokeDetails, {
      store,
      router,
      localVue
    })
    expect(wrapper.find('.hello h1').text().trim()).toEqual('test')
  })
  it('calls store action "serviceCall" when button is clicked', () => {
    const wrapper = shallowMount(JokeDetails, {
      store,
      router,
      localVue
    })
    wrapper.findAll('button').at(1).trigger('click')
    expect(actions.rateJoke).toHaveBeenCalled()
    expect(actions.getJoke).toHaveBeenCalled()
  })
  it('should navigate to Summary', () => {
    const wrapper = shallowMount(JokeDetails, {
      store,
      router,
      localVue
    })
    wrapper.findAll('button').at(2).trigger('click')
    expect(wrapper.vm.$route.name).toEqual('Summary')
  })
})
