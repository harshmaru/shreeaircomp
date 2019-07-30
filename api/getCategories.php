<?php

require('connect.php');
require('cors.php');

$result = $conn->query("select distinct category from products");
// var_dump($result->fetch_all());
$categories = array();
while($row = $result->fetch_assoc()){
    // echo $row["category"];
    array_push($categories,$row["category"]);
}
echo json_encode($categories);

?>