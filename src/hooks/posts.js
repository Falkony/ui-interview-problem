import {useStore} from 'vuex'
import {computed} from 'vue'

export function usePosts() {
    const
        store = useStore(),
        // -- state -- //
        posts = computed(() => store.state.post.posts),
        selected = computed(() => store.state.post.selected),
        page = computed(() => store.state.post.page),
        total = computed(() => store.state.post.total),
        searchQuerry = computed(() => store.state.post.searchQuerry),
        searchHistory = computed(() => store.state.post.searchHistory),
        // -- getters -- //
        searchedPosts = computed(() => store.getters['post/searchedPosts']),
        // -- mutations -- //
        setPosts = (value) => store.commit('post/setPosts', value),
        setSelected = (value) => store.commit('post/setSelected', value),
        setPage = (value) => store.commit('post/setPage', value),
        setTotal = (value) => store.commit('post/setTotal', value),
        setSearchQuerry = (value) => store.commit('post/setSearchQuerry', value),
        setSearchHistory = (value) => store.commit('post/setSearchHistory', value),
        // -- actions -- //
        fetchPosts = () => store.dispatch('post/fetchPosts')

    return {
        posts,
        selected,
        page,
        total,
        searchQuerry,
        searchHistory,
        searchedPosts,
        setPosts,
        setSelected,
        setPage,
        setTotal,
        setSearchQuerry,
        setSearchHistory,
        fetchPosts
    }
}