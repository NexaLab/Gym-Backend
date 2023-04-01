class ClientDto {
  id;
  firstName;
  lastName;
  email;
  phoneNo;
  address;
  Class;

  constructor(id, firstName,lastName,email,phoneNo, Class,address) {
    this.id = id;
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phoneNo = phoneNo;
    this.Class = Class;
    this.address = address;
    
  }


}


module.exports = ClientDto