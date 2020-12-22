// Basic JavaScript: Profile LookupPassed
// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return "No such contact".

// If prop does not correspond to any valid properties of a contact found to match name then return "No such property".

function lookUpProfile(name, prop){
    var i=0;
    var NoContact = function (name) {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
          return name
        } else {
          return "No such contact"
        }
      }
    }
    
    var NoProperty = function (prop) {
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i][prop] !== undefined) {
          return "Si hay"
        } else {
          return "No such property"
        }
      }
    }
    
    
    while (i < contacts.length){
          if (contacts[i].firstName === name && typeof(contacts[i][prop]) != "undefined"){
            
             return  contacts[i][prop] 
          }
          else if (NoContact(name) !== name && i == contacts.length-1 ) {
            debugger
            return "No such contact"
          }
          else if (NoProperty(prop) === "No such property" && i == contacts.length-1 ) {
            return "No such property"
          }
          else i++
    }
  }