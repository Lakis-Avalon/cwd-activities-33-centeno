document.addEventListener('DOMContentLoaded', function() {
  // tabs
  var elems = document.querySelectorAll('.tabs');
  M.Tabs.init(elems);

  //dropdown
  $(document).ready(function(){
    $('.dropdown-trigger').dropdown();
  });

  //*css*/`
  var snav = document.querySelectorAll('.sidenav');
  var options = {
    edge: 'left',
    draggable: true,
    closeOnClick: true
  };
  var instances = M.Sidenav.init(snav, options);
});