import Vue from "vue";
import Vuex from "vuex";
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { name: "jitii" },
    categories: [ 
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],

    event: [],
    count: 0,
  },
  actions: {
    createEvent({commit},event){
      return EventService.postEvent(event).then(()=>{
        commit('ADD_EVENT',event)

      })
      
    }
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.event.find((event) => event.id === id);
    },
  },
  mutations: {
    ADD_EVENT(state,event){
        state.event.push(event)
    },
    SET_EVENTS(state,events){
      state.event = events
    }
  },
});
