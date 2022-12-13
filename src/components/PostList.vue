<script setup>
import {onMounted} from 'vue'
import {usePosts} from '@/hooks/posts.js'
import Post from './Post.vue'

const {
    selected,
    setSelected,
    fetchPosts,
    searchedPosts,
} = usePosts()

const onSelect = (value) => {
    setSelected(value)
}

onMounted(() => {
    fetchPosts()
})
</script>

<template>
    <div class='posts'>
        <Post v-for='post in searchedPosts'
            :key='post.id'
            :post='post'
            :class='{selected: post === selected}'
            @click='onSelect(post)'
        />
    </div>
</template>

<style lang="scss" scoped>
</style>