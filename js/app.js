const fluid = document.getElementById('fluid')
const head = document.getElementById('head')
const dataRange = document.getElementById('dataRange')

head.addEventListener('click', changeFluid)

function changeFluid() {
  let width = 1

  let interval = setInterval(scene, 25)

  // fuction to change the fluid
  function scene() {
    if (width >= 85) {
      clearInterval(interval)
    } else {
      width++
      fluid.style.width = `${width}%`
      dataRange.innerHTML = `${width + 100}`
    }
  }
}

// get called when the page is loaded or refreshed
changeFluid()
