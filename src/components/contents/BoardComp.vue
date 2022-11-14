<template>
  <div class="base-page">
    board

    <div v-if="isLoading">
      wait.....
    </div>
    <div v-else>
      <router-link :to = "`/board/${this.boardId}/card/1`">card</router-link>
      <!-- <router-link :to = "`/board/${this.boradId}/card/2`">card2</router-link> -->
    </div>
      <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardId : 0,
      isLoading : false
    }
  },
  created() {
  },
  methods: {
    fetchData() {
      this.fetch();
      this.isLoading = true
      this.boardId = this.$route.params.boardId
    }
  }

}
</script>