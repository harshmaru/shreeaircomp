<?php

require('connect.php');
require('cors.php');

$product_data=array();
$result = $conn->query('select * from category');
while($row=$result->fetch_assoc()){
    array_push($product_data,$row);
}
echo json_encode($product_data);

?>