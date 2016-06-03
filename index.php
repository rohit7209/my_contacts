<!Doctype HTML>
<html>
<head>
	<title>My Contacts</title>
	<link type="text/css" href="css/style.css" rel="stylesheet">
</head>
<body>
	<div id="header" class="def-back-col header def-font white-font" >My Contacts
	</div>
	
	<div id="contact-page">
		<div id="contact-list" class="right-line" style="">
			<div class="heading btm-line" style="text-align:right">
				<input type="submit" name="new" id="new" value="+ New">
			</div>
		</div>
		<div id="contact-edit" style="">
			<div id="head" class="heading agency-font black-font btm-line">ADD NEW CONTACT</div>
			
			<form id="contact-form">
				<div class="btm-line" style="padding-top:30px;padding-bottom:30px;">					
					<div id="info-sheet" style="">
						<table>
							<tr><td><label for="firstname">First Name:</label></td><td><input type="text" name="firstname" id="firstname" placeholder="Enter First Name" onkeyup="validate(this)"></td><td><img id="img_1" class="indicator" src=""/></td></tr>
							<tr><td><label for="lastname">Last Name:</label></td><td><input type="text" name="lastname" id="lastname" placeholder="Enter Last Name" onkeyup="validate(this)"></td><td><img id="img_2" class="indicator" src=""/></td></tr>
							<tr><td><label for="bday">Birth Date:</label></td><td><input type="date" name="bday" id="bday" placeholder="DD/MM/YYYY" onclick="validate(this)"></td><td><img id="img_3" class="indicator" src=""/></td></tr>
							<tr><td><label for="company">Company:</label></td><td><input type="text" name="company" id="company" placeholder="Enter Company" onkeyup="validate(this)"></td><td><img id="img_4" class="indicator" src=""/></td></tr>
							<tr><td><label for="email">Email Address:</label></td><td><input type="email" name="email" id="email" placeholder="example@domain.com" onkeyup="validate(this)"></td><td><img id="img_5" class="indicator" src=""/></td></tr>
							<tr><td><label for="contact">Contact:</label></td><td><input type="text" name="contact" id="contact" placeholder="000-000-0000" onkeyup="validate(this)"></td><td><img id="img_6" class="indicator" src=""/></td></tr>
						</table>
					</div>
					<div id="image-sheet" style="background:">
						<img class="image-prev" id="image-prev" style="" src="image/def.jpg"></img><br><br>
						<label for="image" id="file-label" class="input-label" style="margin:20px">Upload Image</label>
						<input type="file" accept="image/*" name="image" id="image"class="input-file">
					</div>
				</div>
				<div id="action-panel">
					<input type="submit" name="save" id="save" value="Save">
					<input type="submit" name="cancel" id="cancel" value="Cancel">
				</div>
			</form>
		</div>
	</div>
	
	<div id="footer" class="def-back-col def-font footer white-font" style="">Footer
	</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script type="text/javascript" src="js/contact.js"></script>
</html>