# typescript

Richiesta:
Una classe carrello può essere inizializzata per poi poterci aggiungere, rimuovere o aggiornare, tramite appositi metodi, oggetti prodotto composti da:

* id, titolo, tag, prezzo,quantità

La classe carrello deve anche supportare metodi per

- lo svuotamento totale,

- il calcolo del costo totale di tutti i prodotti o anche solo di quelli con un tag passato come parametro opzionale,

- la possibilità di inviare un array di id e quantità dei prodotti inseriti verso una api esterna fittizia (messa in configurazione)

Motivazioni delle scelte:

Ho creato due interfacce:
- cart
- product

Per ogni interfaccia ho solamente indicato i metodi richiesti ed eventualmente le proprietà che poi ho implementato nella propria classe.
Ad esempio in modo che product potesse assumere diversi significati nelle varie classi che la estendono ( ad esempio un prodotto può essere di categoria cibo, oppure un libro etc)
Per il metodo con la richiesta all'endpoint ho creato una classe.

