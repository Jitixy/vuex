import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {  name: 'jitii' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    
    event:[
      

    ],
    count:0,



  }
,
  
  actions: {},
  getters:{
    catLength: state=>{
      return state.categories.length;
    },
   
    getEventById:state=>id=>{
      return state.event.find(event => event.id===id)
    },
    
    

    
  },
  mutations:{
    INCREMENT_COUNT(state,value){
      state.count+=value
    }

  }
})
