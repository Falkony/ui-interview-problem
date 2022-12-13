import axios from "axios"

export default {
    state: {
        posts: [],
        selected: null,
        page: 1,
        limit: 10,
        total: null,
        searchQuerry: '',
        searchHistory: [],
    },
    getters: {
        searchedPosts(state) {
            return state.posts.filter(post => post.title.toLowerCase().includes(state.searchQuerry.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setSelected(state, selected) {
            state.selected = selected
        },
        setPage(state, page) {
            state.page = page
        },
        setTotal(state, total) {
            state.total = total
        },
        setSearchQuerry(state, searchQuerry) {
            state.searchQuerry = searchQuerry
        },
        setSearchHistory(state, searchHistory) {
            state.searchHistory = searchHistory
        }
    },
    actions: {
        fetchPosts({state, commit}) {
            axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit,
                }
            })
            .then(response => {
                commit('setTotal', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            })
        }
    },
    namespaced: true
}