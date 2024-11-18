browser.menus.create(
  {
    id: "search_in_youtube",
    title: `Search in Youtube`,
    contexts: ["selection"],
  },
  () => {
    browser.runtime.lastError
      ? console.log(`Error: ${browser.runtime.lastError}`)
      : console.log("Item created successfully");
  }
);

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "search_in_youtube":
      let creating = browser.tabs.create({
        url: `https://www.youtube.com/results?search_query=${info.selectionText}`,
      });
      break;
  }
});

browser.runtime.onMessage.addListener((message) => {
  browser.menus.update("search_in_youtube", {
    title: `Search "${message.selected_text}" in Youtube`,
  });
});
