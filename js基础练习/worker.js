this.onmessage = function(event){
  this.postMessage({
    name: 'yes'
  })
}

this.onerror = function (event) {
  console.log('error: '+ event)
}
