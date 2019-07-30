<?php

require('connect.php');
require('cors.php');

$product_data=array();
// $product_data=array("3 HP"=>array("title"=>"9.79 CFM","description"=>"Type – Reciprocating Air Compressor Piston Size – 3” & 1.75″ Regulation – Automatic Start Stop Pressure Control Switch Drive Type – V Belt Drive Lubrication – Oil Lubrication Required HP – 3.0 No of Stage – Two No of Pistons – Two No of Cylinder – Two Piston Displacement – 14.0 CFM Maximum Working Pressure- 12.3 kg ( 175 PSIG)​​​​​​ Valve System – Finger Valve Type","image"=>"http://shreeaircomp.in/wp-content/uploads/2018/01/3-HP-1-1024x821-1.png"));
if(isset($_GET["category"])){
    $result = $conn->query('select * from category where LOWER(link) =LOWER("'.$_GET["category"].'")');
    $product_data=$result->fetch_assoc();
    // print_r($product_data);
    echo json_encode($product_data);
}

?>