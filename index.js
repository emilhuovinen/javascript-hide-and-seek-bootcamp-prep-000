function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.getElementById("app").querySelector(" #nested .target")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll("ul.ranked-list li");

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
  
}

function deepestChild() {
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]
  }

