var temp_id;
var edit=0;
var valid1=true,valid2=true,valid3=true,valid4=true,valid5=true,valid6=true;
$(document).ready(function(){
	if(localStorage.getItem('id')){
		temp_id=localStorage.getItem('id');
		console.log('abf::'+temp_id);
		var i=0;
		for(i=0;i<=temp_id;i++){
			if(localStorage.getItem('f_name_'+i)){
				var content='<span style="float:left">'+localStorage.getItem('f_name_'+i)+' '+localStorage.getItem('l_name_'+i)+'</span>\n\
							<input type="button" value="Edit" onclick="edit_contact(this)">\n\
							<input type="button" value="Delete" onclick="delete_contact(this)">';
				$('#contact-list').append('<div id="contact_'+i+'" class="contact">'+content+'</div>');
			}
		}
	}else{
		localStorage.setItem('id',0);
		temp_id=0;
	}
	
	$('#save').click(function(){
		validateAll();
		if(valid1 && valid2 && valid3 && valid4 && valid5 && valid6){
			if($('#image').val()==''){
				alert('Please choose an Image!');
			}else{
				save_contact();
			}
		}else{
			alert('one or more fields are filled inappropriately!');
		}
	});
	
	$('#cancel').click(function(){
		formReset();
	});
	
	$('#new').click(function(){
		new_contact();
	});
	
	$('#contact-form').submit(function(event){
		event.preventDefault();
	});
	
	$('#bday').focusout(function(){
		validate(this);
	});
	
	$('#image').change(function(){
		var file = this.files[0];
		if (file.type.indexOf('image') < 0) {
			alert('This is not an image!');
			$('#image-prev').attr('src','image/def.jpg');
			return;
		}else{
			$('#file-label').text('Change Image');
		}
		var fReader = new FileReader();
		fReader.onload = function() {
			var img = document.getElementById('image-prev');
			img.src=fReader.result;
			localStorage.setItem("temp_image", "data:image/png;base64,"+getBase64Image(img));
		};
		fReader.readAsDataURL(file);
	});
});


function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, 150, 180);
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function save_contact(){
	var f_name= $('#firstname').val();
	var l_name= $('#lastname').val();
	var b_date= $('#bday').val();
	var company= $('#company').val();
	var email= $('#email').val();
	var contact= $('#contact').val();
	
	var link='save.php?f_name='+f_name+'&l_name='+l_name+'&b_date='+b_date+'&company='+company+'&email='+email+'&contact='+contact;
	
	var id=0;
	if(edit!=0){
		id=edit;
	}else{
		temp_id++;
		id=temp_id;
	}
	
	var content='<span style="float:left">'+f_name+' '+l_name+'</span>\n\
				<input type="button" value="Edit" onclick="edit_contact(this)">\n\
				<input type="button" value="Delete" onclick="delete_contact(this)">';
				
	localStorage.setItem('f_name_'+id, f_name);
	localStorage.setItem('l_name_'+id, l_name);
	localStorage.setItem('b_date_'+id, b_date);
	localStorage.setItem('company_'+id, company);
	localStorage.setItem('email_'+id, email);
	localStorage.setItem('con_'+id, contact);
	localStorage.setItem('id',id);
	localStorage.setItem("image_"+id, localStorage.getItem("temp_image"));
				
	if(edit!=0){
		$('#contact_'+edit).empty().append(content);
		edit=0;
	}else{
		$('#contact-list').append('<div id="contact_'+temp_id+'" class="contact">'+content+'</div>');
	}
	
	formReset();
}

function edit_contact(elmnt){
	var id=$(elmnt).parent().attr('id').split("_")[1];
	edit=id;
	$('#head').text('EDIT CONTACT ('+localStorage.getItem('f_name_'+id)+' '+localStorage.getItem('l_name_'+id)+')');
	$('#firstname').val(localStorage.getItem('f_name_'+id));
	$('#lastname').val(localStorage.getItem('l_name_'+id));
	$('#bday').val(localStorage.getItem('b_date_'+id));
	$('#company').val(localStorage.getItem('company_'+id));
	$('#email').val(localStorage.getItem('email_'+id));
	$('#contact').val(localStorage.getItem('con_'+id));
	
	$('#image-prev').attr('src',localStorage.getItem('image_'+id));
	
	$('#file-label').text('Change Image');
}

function delete_contact(elmnt){
	var id=$(elmnt).parent().attr('id').split("_")[1];
	var response=confirm('Clicking OK will delete all the contact details of '+$('#f_name_'+id).val()+' '+$('#l_name_'+id).val()+'.');
	if(response==true){
		$(elmnt).parent().remove();
		localStorage.removeItem('f_name_'+id);
		localStorage.removeItem('l_name_'+id);
		localStorage.removeItem('b_date_'+id);
		localStorage.removeItem('company_'+id);
		localStorage.removeItem('email_'+id);
		localStorage.removeItem('con_'+id);
		localStorage.removeItem("image_"+id);		
	}
}

function new_contact(){
	formReset();
}


function formReset(){
	$('#contact-form')[0].reset();
	$('#image-prev').attr('src','image/def.jpg');
	$('#head').text('ADD NEW CONTACT');
	$('#image').val('');
	$('#file-label').text('Upload Image');
	$('.indicator').attr('src','');
}

function validate(elmnt){
	var id=$(elmnt).attr('id');
	elmnt=$(elmnt);
	if(id=='firstname'){
		if(elmnt.val()==""){
			$('#img_1').attr('src','image/error.png');
			valid1=false;
		}else{
			$('#img_1').attr('src','');
			valid1=true;
		}
	}else if(id=='lastname'){
		if(elmnt.val()==""){
			$('#img_2').attr('src','image/error.png');
			valid2=false;
		}else{
			$('#img_2').attr('src','');
			valid2=true;
		}
	}else if(id=='bday'){
		if(elmnt.val()==""){
			$('#img_3').attr('src','image/error.png');
			valid3=false;
		}else{
			$('#img_3').attr('src','');
			valid3=true;
		}
	}else if(id=='company'){
		if(elmnt.val()==""){
			$('#img_4').attr('src','image/error.png');
			valid4=false;
		}else{
			$('#img_4').attr('src','');
			valid4=true;
		}
	}else if(id=='email'){
		var indx1=elmnt.val().indexOf('@');
		var array=elmnt.val().split('.');
		var indx2=elmnt.val().indexOf(array[array.length-1]);
		if(indx1>0 && indx2-indx1>2 ){
			$('#img_5').attr('src','');
			valid5=true;
		}else{
			$('#img_5').attr('src','image/error.png');
			valid5=false;
		}
	}else if(id=='contact'){
		if(elmnt.val().length==10 && elmnt.val()>0){
			$('#img_6').attr('src','');
			valid6=true;
		}else{
			$('#img_6').attr('src','image/error.png');
			valid6=false;
		}
	}
}

function validateAll(){
	validate('#firstname');
	validate('#lastname');
	validate('#bday');
	validate('#company');
	validate('#email');
	validate('#contact');
}