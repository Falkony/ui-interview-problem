<script setup>
import {onMounted} from 'vue'
import {usePosts} from '@/hooks/posts.js'
import Post from './Post.vue'

const {
    selected,
    searchedPosts,
    fetchPosts,
    setSelected
} = usePosts()

const
    onChange = (e) => {
        const
            key = e.key,
            keys = {
                'ArrowUp': selected.value.id > 0 ? selected.value.id -1 : 1,
                'ArrowDown': selected.value.id < 10 ? selected.value.id + 1 : 10
            },
            s = keys[key]

        if (!s) {
            return
        }
        
        const p = searchedPosts.value[s - 1]
        console.log(p);

        setSelected(p)
    }

onMounted(() => {
    fetchPosts()
})
</script>

<template>
    <div class='posts'>
        <Post v-for='(post, index) in searchedPosts'
            :tabindex='index'
            :key='post.id'
            :post='post'
            @keyup.up='onChange($event)'
            @keyup.down='onChange($event)'
        />
    </div>
</template>

<style lang="scss" scoped>
</style>