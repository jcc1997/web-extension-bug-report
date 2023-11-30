const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLVideoElement) {
        console.log('发现一个新的 video 元素:')
        console.log(node)
      }
    })
  })
})

observer.observe(document, { childList: true, subtree: true })

console.log('content-script loaded')
