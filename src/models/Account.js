export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
  }

}

export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
  }
}