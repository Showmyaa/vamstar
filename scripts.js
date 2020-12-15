// Vamstar Assignment

// Fetching the value of Object
objectValue = document.querySelectorAll(".views-field-nothing .field-content p font font")[0].innerHTML;
console.log(“Object Value : “, objectValue);

// Fetching the value of Publication Date
publicationDate = document.querySelectorAll(".lbl-licitacao font font")[1].innerHTML;
console.log(“Publication Date Value : “, publicationDate);

// Fetching the value of Bidding Date
biddingDate = document.querySelectorAll(".lbl-licitacao font font")[9].innerHTML;
console.log(“Bidding Date Value : “, biddingDate);

// Fetching the Links
links = document.querySelectorAll(".field .field__item a")[0].getAttribute("href”);
console.log(“Links : “, links);
