---
heroImage: '/assets/img/191022-digitalocean.jpg'
title: Digital Ocean Tips
date: 2019-10-22 11:38:6
excerpt: 
type: post
blog: true
tags:
  - Dev
  - DigitalOcean
---

## Setting up SSL Certificates using Let's Encrypt & Certbot

To set up a free TLS/SSL certificate, we can use Certbot and Let's Encrypt to allow encrypted HTTPS on the web server. Certbot automates the process and makes registration and renewals effortless.

My current setup on Digital Ocean's droplet uses the following:

- Ubuntu 18.04.2 (check your OS version with `lsb_release -a`)
- Nginx (using server blocks)

You'll also need a fully registered domain name to certify, as well as having an A record pointing to your server's public IP address.

<div class="callout">
  <h3 class="callout__title">If you're looking to set up a LEMP stack, Digital Ocean provides great walkthroughs here:</h3>

  [How To Install Linux, Nginx, MySQL, PHP (LEMP stack) on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-ubuntu-18-04)

  [How To Install Nginx on Ubuntu 18.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)

</div>

### Step 1. Set up Certbot

Let's first add the repo, update the package list and install Certbot with: 
```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
```

Once installed, we're ready to move on to the next step of certifying your domain.

### Step 2. Set up nginx

We'll first need to see how your server name is configured by opening up the config file:

```
sudo nano /etc/nginx/sites-available/yoursite.com
```

Once the file is open, look for the `server_name` field, which should look something like:

```
server_name yoursite.com www.yoursite.com;
```

Save any changes you've made and exit out of the editor. Before we move onto the next step, we should check the syntax of our updated configuration file to make sure all is still under working order.

```
sudo nginx -t
```

If all looks good, then we'll need to restart nginx using `sudo systemctl reload nginx`.

---

## Frequently Used Commands

**Find the location of your php.ini file**
```
php -i | grep php.ini
```

**Restart php**
```
systemctl restart php7.2-fpm.service
``` 

**Restart a droplet from command line**
```
sudo shutdown -r now
```

**Reset permissions**
```
chown -R www-data:www-data [folder]/
chmod -R 744
``` 

