alert('hello wordl')
chrome.history.search({text: 'youtube.com', startTime: 0},function(historyItems){
  alert(JSON.stringify(historyItems));
});
