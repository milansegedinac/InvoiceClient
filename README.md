# InvoiceClient
Ovo je primer AngularJS REST klijentske aplikacija rađen na predmetu <i>XML i Web servisi</i> na smeru Računarstvo i automatika na Fakultetu tehničkih nauka u Novom Sadu u letnjem semesteru 2014/2015 
## instalacija
<ol>
  <li>preuzeti aplikaciju sa git repozitorijuma: pozicionirati se u direktorijum u koji se preuzuma aplikacija u uraditi <pre>git clone https://github.com/milansegedinac/InvoiceClient.git</pre></li>
  <li>instalirati prateće alate sa <pre>npm install</pre></li>
  <li>instalirati js pakete sa <pre>bower install</pre></li>
  <li>u fajlu Gruntfile.js u dist atributu
  <pre>// Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
// the application will be deployed to Tomee server    
    dist: 'D:/nastava/2014-2015/letnjiSemestar/XMLiWebServisi/apache-tomee-plus-1.7.1/webapps/InvoiceClient'
  };</pre>
  postaviti putanju do InvoiceClient direktorijuma na tomee serveru</li>
  <li>aplikaciju postaviti na server pokretanjem komande
  <pre>grunt --force buildDev</pre></li>
</ol>
