<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in boards" :key="b.id" :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{ b.title }}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="#" @click.prevent="SET_IS_ADD_BOARD(true)">Create new Board...</a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard" @submit="onAddBoard"/>
  </div>
</template>

<script>
import { board } from '../api'
import AddBoard from './AddBoard.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      boards: [],
      error: '',
    }
  },
  computed: {
    ...mapState(['isAddBoard'])
  },
  components: {
    'AddBoard' : AddBoard
  },
  created() {
    this.fetchData()
  },
  updated() {
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor
    })
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),

    fetchData() {
      this.loading = true
      board.fetch()
        .then(data => {
          this.boards = data.list
        })
        .finally(()=> {
          this.loading = false
        })
    },
    onAddBoard(title) {
      board.create(title).then(()=> this.fetchData())
    }
  }
}
</script>

