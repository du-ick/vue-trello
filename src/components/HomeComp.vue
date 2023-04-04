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
    <AddBoard v-if="isAddBoard"/>
  </div>
</template>

<script>
import AddBoard from './AddBoard.vue';
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      error: '',
    }
  },
  computed: {
    ...mapState({
      isAddBoard: 'isAddBoard',
      boards: 'boards'
    })

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
    ...mapActions([
      'FETCH_BOARDS'
    ]),

    fetchData() {
      this.loading = true
      this.FETCH_BOARDS().finally(()=> {
        this.loading = false
      })
    },

  }
}
</script>

