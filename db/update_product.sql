UPDATE inventory 
SET name=$2, price=$3, image_url=$4;
WHERE id = $1
SELECT * FROM inventory
ORDER BY id ASC;