<?php

require('cors.php');

define("products",["tanks","stacks","duct","pipe","angle","beam"]);
echo json_encode(products);


?>