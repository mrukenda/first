
/*$.event.trigger('coucou');


setTimeout(function(){ 

	$.event.trigger('coucou');


}, 3000);


 $(document).on('coucou', function() {
 
 	console.log('déclenchement du trigger');
 
 });*/

  
 var event = document.createEvent('Event');
 
 event.initEvent('coucou', true, true);
 
 
 document.addEventListener('coucou', function() {
 
 	console.log('déclenchement du trigger');
 
 });
 
 
document.dispatchEvent(event);
 
 
setTimeout(function(){ 

	document.dispatchEvent(event);

}, 3000);

 
 