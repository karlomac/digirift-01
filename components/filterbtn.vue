<template>
    <v-row>
        <v-btn
            rounded
            :color="currentfilter == 'pending' ? 'primary' : 'gray'"
            class="mx-3"
            @click="showList('pending')"
        >
            Pending
        </v-btn>
        <v-btn
            rounded
            :color="currentfilter == 'completed' ? 'primary' : 'gray'"
            @click="showList('completed')"
        >
            Completed
        </v-btn>
    </v-row>
</template>

<script>
export default {
    props: {
        currentfilter: String
    },
    data() {
        return {

        }
    },

    methods: {
        showList(o) {
            this.$emit('processFilter', o)
        }
    }
}
</script>