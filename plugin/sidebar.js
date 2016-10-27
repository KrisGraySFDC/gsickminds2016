document.addEventListener("DOMContentLoaded", () => {
   var target = document.getElementById("target");
   var list = document.getElementById("options");
   var previous = "";

   list.addEventListener("click", function Options_OnClick(e) {
        var item = e.srcElement;
        var className = item.textContent;
        const command = `
                if(this.$0 && $0.nodeType === 1) {
                        if(!document.querySelector("link#animationcss")) {
                                var link = document.createElement("link");
                                link.setAttribute("rel", "stylesheet");
                                link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
                                link.id = "animationcss";
                                document.body.appendChild(link);
                        }
                        if("${previous}") {
                                $0.classList.remove("${previous}");
                        }
                        $0.classList.add("animated", "${className}");
                }
        `;
        
        chrome.devtools.inspectedWindow.eval(command); 
        previous = className;
   });

});