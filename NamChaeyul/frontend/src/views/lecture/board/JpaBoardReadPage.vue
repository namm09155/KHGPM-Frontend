<template>
    <v-container>
      <div align="center">
        <h2>Vue + Spring 게시판 읽기</h2>
        <jpa-board-read v-if="board" :board="board"/>
        <p v-else>로딩중 .......... </p>
        <button @click="onDelete">삭제</button>
        <router-link :to="{ name: 'JpaBoardListPage' }">
          돌아가기
        </router-link>
      </div>
    </v-container>
  </template>
  
  <script>
  
  import JpaBoardRead from '@/components/lecture/board/JpaBoardRead.vue'
  import { mapActions, mapState } from 'vuex'
  
  export default {
    components: { JpaBoardRead },
      name: "JpaBoardReadPage",
      props: {
          boardId: {
              type: String,
              required: true,
          }
      },
      computed: {
          ...mapState(['board'])
      },
      methods: {
          ...mapActions([
              'requestBoardToSpring',
          ]),
          onDelete () {
  
          }
      },
      created () {
          console.log('boardId: ' + this.boardId)
          this.requestBoardToSpring(this.boardId)
      }
  }
  
  </script>
  
  <style>
  
  </style>