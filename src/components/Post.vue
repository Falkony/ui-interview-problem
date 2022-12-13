<script setup>
import {ref} from 'vue'
import {usePosts} from '@/hooks/posts.js'

const { selected } = usePosts()

defineProps({
    post: {
        type: Object,
        required: true,
    },
})

const
    showExpand = ref(false),
    showBody = ref(false)

const
    onClick = () => showBody.value = !showBody.value

</script>

<template>
    <div
        :class='["post", { selected: post == selected }]'
        @mouseenter='showExpand = true'
        @mouseleave='showExpand = false'
    >
        <div class='title-group'>
            <span class='id'>{{ post.id }}</span>
            <span class='title'>{{ post.title }}</span>
            
            <div 
                class='expand'
            >
                <button v-if='showExpand'
                    :class='["button", { active: showBody }]'
                    @click='onClick'
                >
                    Expand
                </button>
            </div>
        </div>
        
        <div v-if='showBody'
            class='body'
        >
            {{ post.body }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.post {
    border: 1px solid #ccc;
    border-radius: .3em;
    padding: 1em;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: .7em;
    }

    &.selected {
        outline: 2px solid teal;

        & .body {
            margin-top: .5em;
        }
    }

    .title-group {
        font-weight: bold;
        display: flex;
        min-height: 2em;
        align-items: center;
        justify-content: center;

        .id {
            margin-right: .3em;

            &::after {
                content: '.';
            }
        }
        .title {
            text-transform: capitalize;
        }

        .expand {
            margin-left: auto;
            
            .button {
                cursor: pointer;
                background-color: teal;
                color: white;
                padding: .5em 3em;
                border-radius: .7em;
                outline: none;
                border: 1px solid teal;

                &:hover {
                    outline: 2px solid darkgreen;
                }

                &.active {
                    background-color: white;
                    color: teal;
                    border: 2px solid teal;
                }
            }
            
        }
    }
}
</style>