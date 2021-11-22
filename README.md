# WordPress migration steps

Move Website Files in directory

Edit the wp-config.php File

define('DB_NAME', 'db_name');

define('DB_USER', 'db_user');

define('DB_PASSWORD', 'db_pass');

Import the WordPress Database


## Need replace all Old url with new url


```bash
UPDATE wp_options SET option_value = replace(option_value, 'http://localhost/badehotel', 'https://newurl.com') WHERE option_name = 'home' OR option_name = 'siteurl';

UPDATE wp_posts SET guid = replace(guid, 'http://localhost/badehotel','https://newurl.com');

UPDATE wp_posts SET post_content = replace(post_content, 'http://localhost/badehotel', 'https://newurl.com');

UPDATE wp_postmeta SET meta_value = replace(meta_value,'http://localhost/badehotel','https://newurl.com');
```



### **wp option my-framework  options value need to replace  old url with newurl for images.In previous  i used Better Search Replace plugin.

### **change httaccess file if needed

