// Javascript - jQuery

$.ajax({
  "url": "http://localhost:8087/isbnreport",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "data": {
    "language": "",
    "state": "",
    "author": ""
  },
  "success": function(response){
	//logic
  }
});

//react
const params = {
	"method": "POST",
	"headers": {
		"Content-Type": "application/x-www-form-urlencoded"
	},
	"data": JSON.stringify({'language':'',state:'','author':''})
}

functionName(()->fetch(url,params).then((reponse)=>{//logic}))