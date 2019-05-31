# Api U1 Oskar Olsson

## BongBong API
En applikation, byggd med en backend av Node/Express (Med en Mongo-databas) och en frontend med React, som hämtar studenter och visar dem i en tabell. Det går att ta bort (DELETE) en student och lägga till (POST) en student med hjälp av ett formulär.  

Klona hela repot.  

Kör kommandot inne i nodeserver-mappen

```
npm install
npm run dev
```
För att starta Mongo-databasen
```
mongo
use students
```

Kör kommandot inne i frontend-mappen
```
npm install
npm start
```

## Övningsfrågor

**Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar.**  
När man surfar in på en webbsida skickar klienten (webbläsaren) en HTTP-förfrågan (GET) till den externa datorn (webbservern). Webbservern tar emot förfrågan och kontrollerar den, sedan skickas en webbsida (som i det här fallet http://www.smp.se/kultur-noje, där /kultur-noje är "pathen" och HTML är response code) tillbaka till klienten. <br/>

**Beskriv HTTP-protokollets vanligaste metoder och vad de gör.**  
**GET**: Förfrågan till servern där man frågar efter den utpekade filen/filerna.  
**POST**: Skapar ett nytt objekt som matchar schemat (om det finns ett schema).   
**DELETE**: Raderar den specificerade användaren/inlägget eller vad det nu kan tänkas vara.  
**PUT**: Skickar förfrågan till servern med ett specifikt URI. Om detta URI redan finns på servern kommer det att modifieras. Om detta URI inte finns kan servern skapa en resurs på detta URI.  
**PATCH**: Skiljer sig från PUT genom att man kan ändra på delar av informationen i ett objekt. Om jag skickar endast skickar in ett nytt användarnamn (t.ex) kommer PATCH endast ändra på användarnamnet och låta övrig information vara som den var tidigare.  

**"http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.**  
"http" är *schemat*.  
"localhost:3000" är *authorityn*.  
"/users" är *pathen*.  
"?username=something" är en *queryn*.

**På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.**

Request med query-parameter:
```
curl "http://localhost:2000/students?name=Jonny" | jq
```

Request med path-parameter:
```
curl "http://localhost:2000/students" | jq
```
Request med header:
```
curl -X GET "http://localhost:2000/students?name=Jonny" -H "Content-Type: application/json" | jq
```
## Feedback
Tycker att det gick väldigt fort första två dagarna , där vi fick väldigt mycket information att ta in. Sedan har tempot mattats av och jag har haft lite svårt att veta vad jag ska göra. Gärna lite korta teori-pass och sedan någon mindre övning på det som vi gått genom. Så hinner man ta in informationen och bearbeta den innan vi går vidare på nästa sak. Jobba mer i små iterationer :wink:
