self.onmessage = function(){
  console.log(caches)
}

console.log(self)


self.onfetch = function(fetchEvent) {
  fetchEvent.respondWith(
    caches.match(
      fetchEvent.request)
      .then(response => response || fetch(featchEvent.request)
     )
  )
}
