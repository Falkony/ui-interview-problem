import {createStore} from 'vuex'
import Posts from './Posts.js'

export default createStore({
  modules: {
    post: Posts
  }
})
