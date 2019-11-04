---
heroImage: '/images/191022-digitalocean.jpg'
title: Setting up LEMP and HTTPS/SSL on Digital Ocean
date: 2019-10-21 11:38:6
excerpt: Set up a LEMP stack on Digital Ocean, allow encrypted HTTPS on your web server using Certbot and Let's Encrypt, as well as a handful of commonly used commands.
type: post
blog: true
tags:
  - DigitalOcean
  - Dev
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
``` bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
```

Once installed, we're ready to move on to the next step of certifying your domain.

### Step 2. Set up nginx

We'll first need to see how your server name is configured by opening up the config file:

``` bash
sudo nano /etc/nginx/sites-available/yoursite.com
```

Once the file is open, look for the `server_name` field, which should look something like:

```
server_name yoursite.com www.yoursite.com;
```

Save any changes you've made and exit out of the editor. Before we move onto the next step, we should check the syntax of our updated configuration file to make sure all is still under working order.

``` bash
sudo nginx -t
```

If all looks good, then we'll need to restart nginx using `sudo systemctl reload nginx`.

### Step 3. Obtain a SSL certificate

To get your domain certified for SSL, we'll start with this command:
``` bash
sudo certbot --nginx -d yoursite.com -d www.yoursite.com
```

That command will run Certbot using the nginx plugin, specifying the names we're using to validate the certificate on. If you're running Certbot for the first time, it'll ask for your email and to agree to their terms of service. Once entered, Certbot will hit the Let's Encrypt server and ask how you'd like to configue your HTTPS settings.

``` 
Output
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
-------------------------------------------------------------------------------
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
-------------------------------------------------------------------------------
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
```

The options provided will be between automatic redirection to force HTTPS access vs keeping the current state without forced redirection.

Once a selection has been made, the configuration will be updated and nginx will reload. At this point, you can reload your site using `https://` which should reflect that the site is now secure through a green lock icon. Additionally, you can use [SSL Lab Server Test](https://www.ssllabs.com/ssltest/) to test your server settings which should have an <strong>A</strong> grade.

Next, we want to confirm Certbot will renew the default 90 day certification. The renewal process will ensure that your certificates will be automatically renewed for any certificate due to expire within 30 days. To test this process, do a dry run Certbot using:

``` bash
sudo certbot renew --dry-run
```

If there are no errors reported, you can rest assure that your certificate will automatically be renewed and nginx will reload to reflect the changes. Any failures will be reported to the email address that was originally provided.

---

## Frequently Used Commands

**Find the location of your php.ini file**
``` bash
php -i | grep php.ini
```

**Restart php**
``` bash
systemctl restart php7.2-fpm.service
``` 

**Restart a droplet from command line**
``` bash
sudo shutdown -r now
```

**Reset permissions**
``` bash
chown -R www-data:www-data folder_name/
chmod -R 744
``` 

<hr>

<CurrentlyReading 
  title="Nonviolent Communication"
  author="Marshall Rosenberg"
  cover="https://images-na.ssl-images-amazon.com/images/I/51MhjeI1bcL._SX332_BO1,204,203,200_.jpg"
  excerpt="A communication and conflict-resolution process developed by the psychologist Marshall Rosenberg. The book focuses on how to express ourselves in a way that inspires empathy in others, and how to listen to them empathically in turn."
/>