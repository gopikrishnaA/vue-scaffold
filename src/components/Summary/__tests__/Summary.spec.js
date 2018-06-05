/* eslint-env jest */
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Summary from '../index.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const routes = [
  {
    path: '/',
    params: {
      id: 1
    },
    name: 'joke'
  }
]
const router = new VueRouter({
  routes
})

const item = {
  '1': {
    status: 'Like',
    joke: 'test'
  }
}

describe('Summary.vue', () => {
  let actions
  let store
  let getters

  beforeEach(() => {
    actions = {
      selectStatus: jest.fn(),
      sortOrder: jest.fn()
    }
    getters = {
      likeCount: () => 1,
      unlikeCount: () => 1,
      totalCount: () => 2,
      sortByTime: () => ({
        ...item
      }),
      isSort: () => true,
      filterItems: () => ({
        ...item
      })
    }
    store = new Vuex.Store({
      state: {
        summary: {
          items: {
            ...item
          }
        }
      },
      actions,
      getters
    })
  })
  it('should render header contents', () => {
    const wrapper = shallowMount(Summary, {
      store,
      router,
      localVue
    })
    expect(wrapper.find('.hello h1').text().trim()).toEqual('Summary')
    expect(wrapper.find('.hello h4').text()).toEqual('Likes(1) Unlikes(1)')
  })

  it('should render table header contents', () => {
    const wrapper = shallowMount(Summary, {
      store,
      router,
      localVue
    })
    expect(wrapper.find('.th1').text()).toEqual('S.no')
    expect(wrapper.find('.th2').text()).toEqual('JokeId')
    expect(wrapper.find('.th3').text()).toEqual('Joke')
    expect(wrapper.find('.th5').text()).toEqual('TimeStamp')
  })
  it('calls store action "selectStatus" when select options got changed', () => {
    const wrapper = shallowMount(Summary, {
      store,
      router,
      localVue
    })
    wrapper.findAll('select').trigger('change')
    expect(actions.selectStatus).toHaveBeenCalled()
  })
  it('calls store action "sortOrder" when click on timeStamp header', () => {
    const wrapper = shallowMount(Summary, {
      store,
      router,
      localVue
    })
    wrapper.find('.th5').trigger('click')
    expect(actions.sortOrder).toHaveBeenCalled()
  })

  it('should navigate to particular joke', () => {
    const wrapper = shallowMount(Summary, {
      store,
      router,
      localVue
    })
    wrapper.find('.td1').trigger('click')
    expect(wrapper.vm.$route.name).toEqual('joke')
  })
})
