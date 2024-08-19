Per avviare la Web App spostarsi col terminale nella cartella dove è contenuto il file docker-compose.yml, 
eseguire il comando: docker compose up -d.
  ATTENZIONE
  Le build delle immagini presenti su Docker Hub (reactclient e pythonserver) sono basate ARM-64. 
  Se si vuole eseguire il docker compose su processore diverso, è necessario eseguire la build delle immagini in locale, 
  quindi modificare il docker-compose.yml sostituendo le Dockerimage interessate.

Procedere sul browser digitando nella barra URL "localhost", 
prima di accedere alla Dashboard è richiesto l'accesso tramite credenziali, già presenti nel Db,
mariorossi@progettobul.com:password o darioverdi@progettobul.com:password (non c'è differenza tra i due, verranno visualizzate le stesse risorse).
