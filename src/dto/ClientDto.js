class ClientDto {
  id;
  firstName;
  lastName;
  email;
  gender;
  address;

  constructor(id, firstName,lastName,email,gender,address) {
    this.id = id;
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.gender = gender
    this.address = address
  }


}


module.exports = ClientDto