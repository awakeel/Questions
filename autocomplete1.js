
<!DOCTYPE html>
<html>
<head>
    <title>jQuery Autocomplete</title>
    <style>
        #res {
            margin: 0px;
            padding-left: 0px;
            width: 150px;
        }
        
        #res li {
            list-style-type: none;
        }
        
        #res li:hover {
            background: #110D3B;
            color: #FFF;
            cursor: pointer;
        }
    </style>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            var people = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
            var cache = {};
            var drew = false;
            
            $("#search").on("keyup", function(event){
                var query = $("#search").val()
        
                if($("#search").val().length > 0){
                    
                    //Check if we've searched for this term before
                    if(query in cache){
                        results = cache[query];
                    }
                    else{
                        //Case insensitive search for our stats array
                        var results = $.grep(people, function(item){
                            return item.search(RegExp("^"+query, "i")) != -1;
                        });
                        
                        //Add results to cache
                        cache[query] = results;
                    }
                    
                    //First search
                    if(drew == false){
                        //Create list for results
                        $("#search").after('<ul id="res"></ul>');
                        
                        //Prevent redrawing/binding of list
                        drew = true;
                        
                        //Bind click event to list elements in results
                        $("#res").on("click", "li", function(){
                            $("#search").val($(this).text());
                            $("#res").empty();
                         });
                    }
                    //Clear old results
                    else{
                        $("#res").empty();
                    }
                    
                    //Add results to the list
                    for(term in results){
                        $("#res").append("<li>" + results[term] + "</li>");
                    }
                }
                //Handle backspace/delete so results don't remain
                else if(drew){
                    $("#res").empty();
                }
            });
        });
    </script>
</head>
 
<body>
    <input id="search" type="text">
</body>
</html>
