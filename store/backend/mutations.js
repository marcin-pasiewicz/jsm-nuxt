export default {
  updateQuotes(state, data) {
    state.quotes = data.quotes
  },
  updateAmbassadors(state, data) {
    state.ambassadors = data.ambassadors
  }
}
