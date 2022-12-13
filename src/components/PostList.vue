<script setup>
import {usePosts} from '@/hooks/posts.js'
import Post from './Post.vue'

const { 
    posts,
    selected,
    setSelected
} = usePosts()

const onSelect = (value) => {
    setSelected(value)
}

</script>

<template>
    <div class='posts'>
        <Post v-for='post in posts'
            :key='post.id'
            :post='post'
            :class='{selected: post === selected}'
            @click='onSelect(post)'
        />
    </div>
</template>

<style lang="scss" scoped>
.posts {
    padding: 2em 0;
    max-width: 1024px;
    margin: 0 auto;
}
</style>