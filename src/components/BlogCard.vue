<template>
  <div class="elevation-3 rounded selectable border border-dark border-2 p-2 my-3">
    <section class="row">
      <div class="col-9">
        <img class="profile-pic" :src="blog.creator.picture" :alt="blog.creator.name"> <span>{{ blog.creator.name
        }}</span>
        <h2>{{ blog.title }}</h2>
        <h5>{{ blog.body }}</h5>
      </div>
      <div class="col-3 d-flex align-items-center">
        <img class="img-fluid" :src="blog.imgUrl" :alt="'image for' + blog.title">
      </div>
    </section>
  </div>
</template>


<script>
import { Blog } from "../models/Blog.js";

export default {
  props: {
    blog: { type: Blog, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.profile-pic {
  height: 7vh;
  width: 7vh;
  border-radius: 100%;
  margin: .5em
}
</style>