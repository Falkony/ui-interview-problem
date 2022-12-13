<script setup>
import Search from '@/components/Search.vue'
import PostList from '@/components/PostList.vue'
</script>

<template>
    <div class='root'>
        <Search />
        <PostList />
    </div>
</template>

<style lang="scss" scoped>
.root {
    padding: 1.8em 0;
    max-width: 1024px;
    margin: 0 auto;
}
</style>