import axios from "axios"

export default {
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        fetchPosts({commit}) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => commit('setPosts', response.data))
        }
    },
    getters: {},
    namespaced: true
}