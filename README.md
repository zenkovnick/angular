angular
=======


Add to vhost if Apache to make cross-domain request to Rails app running on 3000 port

        ProxyPass /angular/test/proxy http://127.0.0.1:3000
        ProxyPassReverse /angular/test/proxy http://127.0.0.1:3000

        <Proxy *>
          Order deny,allow
          Allow from all
        </Proxy>
