var buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
document.getElementsByClassName("btn")[i].addEventListener("click", function() {
   this.classList.add("test_skill");
});
}
var overShadow = document.getElementById("overShadow");
var sectionFilter = document.getElementById("section-filter");
overShadow.style.display="none";
sectionFilter.style.display="none";
function openFilter(){
   overShadow.style.display="block";
   sectionFilter.style.display="block";
}
overShadow.addEventListener("click", function(event) {
   overShadow.style.display="none";
   sectionFilter.style.display="none";
});