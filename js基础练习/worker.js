console.log(this)
this.onmessage = function(event){
  console.log(event)
  this.postMessage({
    name: 'yes'
  })
}

this.onerror = function (event) {
  console.log('error: '+ event)
}
