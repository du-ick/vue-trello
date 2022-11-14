<template>
  <div>
    <div v-if="!isLoading">loading....</div>
    <div v-else>
        card Data
        <span>{{cardId}}</span>

    </div>
  </div>
</template>

<script>
export default {


    data() {
        return {
            cardId : 0,
            isLoading : false
        }
    },
    watch: {
        '$route' : {
            handler: 'fetchData',
            immediate : true

        }
    },
    methods : {
        fetchData() {
            this.isLoading = true
            this.cardId = this.$route.params.cardId
        }
    },

}
</script>
