INSERT INTO (name, price, image_url)
VALUES ($1, $2, $3);
SELECT * FROM inventory 
ORDER BY id ASC;
