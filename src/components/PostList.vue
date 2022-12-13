<script setup>
import {onMounted, computed} from 'vue'
import {useStore} from 'vuex'

const
    store = useStore(),
    posts = computed(() => store.state.post.posts)

console.log(posts);

onMounted(() => {
    store.dispatch('post/fetchPosts')
})
</script>

<template>
    <div>
        <pre>{{ posts }}</pre>
    </div>
</template>

<style lang="scss" scoped>

</style>