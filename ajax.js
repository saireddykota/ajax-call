//click 
 $("#search").click( function() {
    	var searchTerm = $("#searchTerm").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
		$.ajax({
			url: url,
			type: 'GET',
			async: false,
        	dataType: "json",
          
        	success: function(data, status, jqXHR) {
    	
               $("#output").html();
        		for(var i=0;i<data[1].length;i++){
        			$("#output").prepend("<a href="+data[3][i]+"><h3>" + data[1][i]+ "</h3>" + "<p>" + data[2][i] + "</p></a>");
        		}
            }
})
		 })