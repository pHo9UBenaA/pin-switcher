/// <reference types="npm:@types/chrome" />

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;

    const { id: targetTabId, pinned } = tabs[0];

    if (targetTabId !== undefined) {
      chrome.tabs.update(targetTabId, { pinned: !pinned });
    }
  });
});
