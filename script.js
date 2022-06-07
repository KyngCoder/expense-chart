const graph  = document.getElementById('graph');
import data from '/data.js'

const bars = data.map(d => {
  return document.createElement('div')
  
}).join('')

console.log(bars)



graph.append(bars)
console.log(data)