<template>
  <ModalComp>
    <div slot="header">
        <h2>Create new board</h2>
        <a href="" class="modal-default-button" @click.prevent="SET_IS_ADD_BOARD(false)">&times;</a>
    </div>
    <div slot="body">
        <form id="add-board-form" @submit.prevent="addBoard">
            <input type="text" class="form-control" v-model="input" ref="input">
        </form>
    </div>
    <div slot="footer">
        <button class="btn" :class="{'btn-success': valid}" type="submit" form="add-board-form" :disabled="!valid">Create Board</button>
    </div>
  </ModalComp>
</template>

<script>
import ModalComp from './ModalComp.vue'
import {mapMutations, mapActions} from 'vuex';

export default {
    data() {
        return {
            input: '',
            valid: false
        }
    },
    components: {
        'ModalComp': ModalComp
    },
    watch: {
        input(v) {
            this.valid = v.trim().length > 0
        }
    },
    mounted() {
        this.$refs.input.focus()
    },
    methods: {
        ...mapMutations([
            'SET_IS_ADD_BOARD'
        ]),
        ...mapActions([
            'ADD_BOARD',
            'FETCH_BOARD'
        ]),
        addBoard() {
            this.ADD_BOARD({title: this.input}).then(()=> {
                this.SET_IS_ADD_BOARD(false)
                this.FETCH_BOARD()
            })
        }
    }

}
</script>

<style>

</style>