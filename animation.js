document.addEventListener("DOMContentLoaded", () => {
   var target = document.getElementById("target");
   var list = document.getElementById("options");
   list.addEventListener("click", function Options_OnClick(e) {
        var item = e.srcElement;

        target.className = "animated " + item.textContent;
   });

});


