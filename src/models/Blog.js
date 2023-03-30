import { Profile } from "./Account.js"

export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl || 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    this.published = data.published
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt).toLocaleDateString()
    this.creator = new Profile(data.creator)
  }
}

