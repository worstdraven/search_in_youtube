document.addEventListener("selectionchange", () => {
  const seletected_text = document.getSelection().toString();
  if (seletected_text.length > 50) {
    return;
  }
  console.log(seletected_text);
  browser.runtime.sendMessage({
    selected_text: seletected_text,
  });
});
