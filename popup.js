var updateButton = document.getElementById('updateButton');
var headerKeyInput = document.getElementById('headerKeyInput');
var headerValueInput = document.getElementById('headerValueInput');
var makeGetRequestButton = document.getElementById('makeGetRequestButton');

function updateDynamicRules(headerKey, headerValue) {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            { 
              header: headerKey, 
              operation: 'set', 
              value: headerValue
            },
          ],
        },
        condition: {
          regexFilter: '|http*',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'script'
          ],
        },
      },
    ],
    removeRuleIds: [1]
  }, async (result) => {
    console.log('created', result);
  });
}

updateButton.addEventListener('click', () => {
  var headerKey = headerKeyInput.value;
  var headerValue = headerValueInput.value;
  updateDynamicRules(headerKey, headerValue);
})

makeGetRequestButton.addEventListener('click', () => {
  fetch('http://localhost:4000', {
    headers: {
      'h1': 'v1',
      'h2': 'v2'
    }
  }).then(response => {
    console.log(response);
  })
})