var coll = document.getElementsByClassName("coll");
// console.log(coll)
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // this.classList.toggle("bg-[#555]");
    var content = this.nextElementSibling; 
    content.classList.toggle("hidden");
  })	;
}