
export const state = () => ({
    todo: []
})

export const mutations = {
    ADD_TASK(state, item) {
        state.todo.push(item)
    },

    SET_TODOLIST(state, list) {
        state.todo = list
    }
}

export const actions = {
    addNewTask({commit}, item) {
        commit('ADD_TASK', item)
    },

    initTodoList({commit}, list) {
        commit('SET_TODOLIST', list)
    }
}