// https://stackoverflow.com/questions/69945753/chrome-extension-declarativenetrequest-remove-requestheader-origin-not-worki
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(function (o) {
  console.log('rule matched:', o);
});