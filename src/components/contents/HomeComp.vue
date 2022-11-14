
<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li v-for="board in apiBoards" :key="board.id">
        <router-link to="board/1">{{board.id}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { board } from '../../api/index';

export default {
  data() {
    return {
      isLoading: false,
      apiBoards: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.isLoading = true
      board.fetch()
      .then(data => {
        this.board = data
      })
      .finally(()=>{
        this.isLoading = false
      })
    }
  }

}
</script>

<style>

</style>