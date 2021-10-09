<!DOCTYPE html>
<html>
<head>
	<title>LOG IN</title>
	<link rel="stylesheet" type="text/css" href="loginstyle.css">
</head>
<body>
<div class="navbar">
    <img src="lovesl.png" class="logo" alt="logo" onclick="window.location.href='Main Page/HTML/Loading Home Page.html'">
    <ul id="nav-list">
        <li><a href="Main Page/HTML/Loading Home Page.html">Home</a></li>
        <li><a href="Main Page/HTML/LoadingGallery.html">Gallery</a></li>
        <li><a href="Main Page/HTML/LoadingQuiz.html">Quiz</a></li>
        <li><a href="Main Page/HTML/LoadingBuyProducts.html">Bookings</a></li>
        <li><a href="Main Page/HTML/LoadingSiteMap.html">Site Map</a></li>
        <li><a href="Main Page/HTML/LoadingStudentDetails.html">Our Team</a></li>
        <li><a href="Main Page/HTML/LoadingQuery.html">Contact Us</a></li>
    </ul>
</div>
     <form action="login.php" method="post">
     	<h2>LOG IN</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label>User Name</label>
     	<input type="text" name="uname" placeholder="User Name"><br>

     	<label>Password</label>
     	<input type="password" name="password" placeholder="Password"><br>

     	<button type="submit">Login</button>
          <a href="signup.php" class="ca">Create an account</a>
     </form>
</body>
</html>