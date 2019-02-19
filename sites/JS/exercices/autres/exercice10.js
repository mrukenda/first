/*var size=3
document.write('<table>');
for (var i =0; i< size i++){
	document.write('<tr>');
}*/


	var table= parseFloat(window.prompt('Entrez un nombre'));
	var column;
	var line;

	document.write('<table>')
	for(var column = 1; column <= table; column++) {
		document.write('<tr>');
		for (var line =1; line <=table; line++) {
			//document.write('<td>');
			//document.write(column*line);
				if (column==line){
					document.write('<td class="color">');
					document.write(column*line);
				}else {
					document.write('<td>');
			        document.write(column*line);
				}

		document.write('</td>');
		}document.write('</tr>');
	}

	document.write('</table>')