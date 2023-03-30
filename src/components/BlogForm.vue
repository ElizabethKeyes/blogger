<template>
  <div class="modal-header">
    <h5 class="modal-title" id="blogModalLabel">Post a Blog!</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <form @submit.prevent="createBlog()">
    <div class="modal-body">
      <section class="row">
        <div class="col-12 mb-3">
          <label>Title</label>
          <input type="text" class="form-control" required v-model="editable.title">
        </div>
        <div class="col-12 mb-3">
          <label>Image URL</label>
          <input type="url" class="form-control" required v-model="editable.imgUrl">
        </div>
        <div class="col-12 mb-3">
          <label>Body</label>
          <textarea cols="30" rows="10" required minlength="10" maxlength="200" class="form-control"
            v-model="editable.body"></textarea>
        </div>
      </section>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
    </div>
  </form>
</template>


<script>
import { ref } from "vue";
import { blogsService } from "../services/BlogsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createBlog() {
        try {
          const blogData = editable.value
          await blogsService.createBlog(blogData)
        } catch (error) {
          logger.log(error)
          Pop.error(error.message)
        }

      }
    }
  }
}
</script>


<style lang="scss" scoped></style>