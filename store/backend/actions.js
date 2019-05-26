export default {
  async updateQuotes({ commit, rootState }, data) {
    try {
      const quotes = await import('../../data/quotes.json')
      commit('updateQuotes', quotes)
    } catch (err) {
      console.error('Unable to load quotes: ' + err)
    }
  },
  async updateAmbassadors({ commit, rootState }, data) {
    try {
      const ambassadors = await import('../../data/ambassadors.json')
      commit('updateAmbassadors', ambassadors)
    } catch (err) {
      console.error('Unable to load ambassadors: ' + err)
    }
  }
}
