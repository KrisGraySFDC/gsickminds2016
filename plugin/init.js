chrome.devtools.panels.create("GSICKMINDS",
                                  "icon24.png",
                                  "main.html",
                                        function(/*ExtensionPanel*/ panel) {

});


chrome.devtools.panels.elements.createSidebarPane("GSICKMINDS", function(sidebar) {
   sidebar.setPage("sidebar.html");
});