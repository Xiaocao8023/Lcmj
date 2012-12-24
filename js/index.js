function code_type(n)
{
	var code = document.getElementById("menu");
	var code_li = menu.getElementsByTagName("li");
	for(var i = 0; i < code_li.length; i++)
	{
		code_li[i].className= "";
		code_li[n].className= "yes";
		document.getElementById("code"+ i).className = "code_nav2";
		document.getElementById("code"+ n).className = "code_nav";
	}
}