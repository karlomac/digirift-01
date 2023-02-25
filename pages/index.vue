<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Checklist
        </v-card-title>
        <v-card-text>
            <v-row class="my-4 mx-2">
              <filterbtn :currentfilter="currentFilter" @processFilter="showList" />
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-checkbox
                    v-for="(item, i) in activeTodoList" :key="i"
                    v-model="item.completed"
                    :label="item.title"
                    @change="updateList(item)"
                    :class="item.completed ? updatedClass : baseClass"
                >
                </v-checkbox>
              </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-text-field
                v-model="task"
                placeholder="Add an Item here"
                @keyup.enter="addItem"
            ></v-text-field>
          <v-spacer />
          <v-btn
            color="primary"
            rounded
            @click="addItem"
          >
            Add Item
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
        todoList: [],
        activeTodoList: [],
        task: '',
        baseClass: 'ma-0',
        updatedClass: 'text-decoration-line-through ma-0',
        currentFilter: 'pending',
        completed: [],
        pending: [],
    }
  },

  methods: {

    addItem() {
        const taskObj = {
          completed: false,
          title: this.task
        }
        this.todoList.push(taskObj)
        this.task = ''
        this.updateList()
    },

    updateList(o) {
      this.pending = this.todoList.filter(e => !e.completed)
      this.completed = this.todoList.filter(e => e.completed)
      if(o) {
        const timeout = setTimeout(()=>{
            this.showList(this.currentFilter)
        }, 1000)
      } else {
        this.showList(this.currentFilter)
      }
    },

    showList(o) {
        if(o == 'pending') this.activeTodoList = this.pending
        if(o == 'completed') this.activeTodoList = this.completed
        this.currentFilter = o
        
    }
  }

}
</script>
