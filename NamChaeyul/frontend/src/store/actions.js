import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
} from './mutation-types'

import axios from 'axios'

export default {
    requestCreateBoardToSpring ({}, payload) {

        const { title, content, writer } = payload
        return axios.post('http://localhost:7777/board/register',
            { title, content, writer })
            .then(() => {
                alert('게시물 등록 성공!')
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestBoardListToSpring ({ commit }) {
        return axios.get('http://localhost:7777/board/list')
            .then((res) => {
                commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
            })
    },
    requestBoardToSpring ({ commit }, boardId) {
        return axios.get(`http://localhost:7777/board/${boardId}`)
            .then((res) => {
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
    }
}