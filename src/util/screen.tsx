const fullscreen = (element: HTMLElement, mark: 'request' | 'exit') => {
  if (!document.fullscreenEnabled) {
    return Promise.reject(new Error('全屏模式被禁用'))
  }
  let result = null
  if (mark === 'request' && element.requestFullscreen) {
    result = element.requestFullscreen()
  }
  if (mark === 'exit') {
    result = document.exitFullscreen()
  }
  return result || Promise.reject(new Error('不支持全屏'))
}

export { fullscreen }
