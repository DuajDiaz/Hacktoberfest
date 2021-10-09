<!DOCTYPE html>
<html>
<head>
	<title>SIGN UP</title>
	<link rel="stylesheet" type="text/css" href="style.css">
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
     <form action="signup-check.php" method="post">
     	<h2>SIGN UP</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>

          <?php if (isset($_GET['success'])) { ?>
               <p class="success"><?php echo $_GET['success']; ?></p>
          <?php } ?>

          <label>Name</label>
          <?php if (isset($_GET['name'])) { ?>
               <input type="text" 
                      name="name" 
                      placeholder="Name"
                      value="<?php echo $_GET['name']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="name" 
                      placeholder="Name"><br>
          <?php }?>

          <label>User Name</label>
          <?php if (isset($_GET['uname'])) { ?>
               <input type="text" 
                      name="uname" 
                      placeholder="User Name"
                      value="<?php echo $_GET['uname']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="uname" 
                      placeholder="User Name"><br>
          <?php }?>


     	<label>Password</label>
     	<input type="password" 
                 name="password" 
                 placeholder="Password"><br>

          <label>Confirm Password</label>
          <input type="password" 
                 name="re_password" 
                 placeholder="Confirm Password"><br>

     	<button type="submit">Sign Up</button>
          <a href="index.php" class="ca">Already have an account?</a>
     </form>
</body>
</html>