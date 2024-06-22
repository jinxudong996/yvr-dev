import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    visitedViews: [],
    activeHealthTab:'1'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    ADD_VISITED_VIEWS: (state, view) => {
      let delIndex;
      if (state.visitedViews.some((v,i) => {
    	  if(v.path === view.fullPath){
    		  delIndex = i;
    		  return true;
    	  }
    	  return false;
    	  }))
      state.visitedViews.splice(delIndex,1);
      state.visitedViews.push({ name: view.name, path: view.fullPath })
    },
    DEL_VISITED_VIEWS: (state, view) => {
        let cludeId = false;
        if(view.path.indexOf("?id=")>=0){
            cludeId = true;
        }
        let index
        for (const [i, v] of state.visitedViews.entries()) {
          let tempVPath = '';
          if(v.path.indexOf("?id=")>=0){
              tempVPath = v.path.substring(0,v.path.indexOf("?id="));
          }else{
              tempVPath = v.path;
          }
          if ((!cludeId && (tempVPath === view.path))||(cludeId && (v.path === view.path))) {
          index = i
          break
        }
      }
      state.visitedViews.splice(index, 1)
    },
    ACTIVE_HEALTH_TAB:function(state,view){   //½¡¿µ½ÌÓýtabÇÐ»»
      state.activeHealthTab=view
    }
  },
  actions: {
    ToggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    addVisitedViews({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view)
    },
    delVisitedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    addActiveTabr({ commit },view) {
      commit('ACTIVE_HEALTH_TAB',view)
    },
  }
}

export default app
