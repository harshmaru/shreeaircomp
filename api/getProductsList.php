<?php
if(isset($_GET["category"])){
    require('cors.php');
    require('connect.php');
    $products = array();
    $result = $conn -> query("select distinct(product) from products where LOWER(category)=LOWER('".$_GET["category"]."') order by pid asc");
    while($row = $result->fetch_assoc()){
        // echo $row["category"];
        array_push($products,$row["product"]);
    }
    echo json_encode($products);
}
?>