# texoit.com
Texo's web site draft

## Running the site
```console
$ mvn clean install kikaha:run
```
## Packing the site
```console
$ mvn clean package
$ cd target/
$ unzip texoit-site*.zip
Archive:  texoit-site-1.0.0-SNAPSHOT.zip
   creating: texoit-site-1.0.0-SNAPSHOT/
   creating: texoit-site-1.0.0-SNAPSHOT/bin/
  inflating: texoit-site-1.0.0-SNAPSHOT/bin/kikaha.conf  
  inflating: texoit-site-1.0.0-SNAPSHOT/bin/kikaha.sh  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/kikaha-core.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/undertow-core.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/jboss-logging.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/xnio-api.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/xnio-nio.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/config.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/kikaha-urouting.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/jackson-databind.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/jackson-annotations.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/jackson-core.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/trip-core.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/lib/texoit-site-1.0.0-SNAPSHOT.jar  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/index.html  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/logo-navita.jpg  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/hexagon.png  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/Thumbs.db  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/zepto.min.js  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/logo-totvs.jpg  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/logo-ibratan.jpg  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/helden.min.js  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/logo-small.png  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/logo.png  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/helden.ui.min.js  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/logo-thomson-reuters.jpg  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/logo-white.png  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/assets/theme.css  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/images/Thumbs.db  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/images/insights-02b.jpg  
  inflating: texoit-site-1.0.0-SNAPSHOT/webapp/images/lights_by_julianmathis-d4tgdaw.jpg  
  inflating: texoit-site-1.0.0-SNAPSHOT/conf/application.conf
```
