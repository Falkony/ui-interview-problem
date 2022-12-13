<script setup>
import {usePosts} from '@/hooks/posts.js'

const {
    searchQuerry,
    setSearchQuerry
} = usePosts()

const
    onSearch = (val) => {
        setSearchQuerry(val)
    }
</script>

<template>
    <div class='search'>
        <input
            :value='searchQuerry'
            placeholder='Search...'
            @input='onSearch($event.target.value)'
        />
    </div>
</template>

<style lang="scss" scoped>
.search {
    margin-bottom: 1em;

    & input {
        width: 100%;
        padding: .5em;
        border-radius: .3em;
    }
}
</style>