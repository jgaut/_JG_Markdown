require([
	"/static/app/_JG_Markdown/showdown.js",
        "splunkjs/mvc",
        "splunkjs/mvc/simplexml/ready!"
        ], function(
	showdown,
	mvc
        ) {

    $(document).ready(function () {
        console.log("jg_markdown.js Ready!");
	console.log(showdown);
	var converter = new showdown.Converter();
	var text = "# hello\n## markdown!";
	var html = converter.makeHtml(text);
	document.getElementById("p_markdown").innerHTML = html;
     });
});
