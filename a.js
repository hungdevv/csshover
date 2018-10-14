

   

 var user =[
      {name : 'Tom' , gender : 'male'},
      {name : 'Maria' , gender : 'female'},
      {name : 'Jason' , gender : 'male'},
      {name : 'Sora' , gender : 'female'},
      {name : 'Tèo' , gender : 'male'},
  ]
  

  var userList = document.getElementById('userList');
  var genderFilter = document.getElementById('genderFilter');

  render(userList,user);
  

   genderFilter.onchange = function()
   {
      var selected = genderFilter.value;
      var userFilter = user.filter(function(item)
    {
          return item.gender === selected;
    });
    render(userList,userFilter);
   }

  
   function render(container,items){
       var htmlItem = items.map(function(item)
    {
        return '<li class="list-group-item">'+item.name+'</li>';
    });
    
    var html = htmlItem.join(' ');
    container.innerHTML = html ;
   }




   

  







