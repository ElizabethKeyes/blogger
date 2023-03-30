<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 px-4" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </section>
  </div>
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { blogsService } from '../services/BlogsService.js'
import { onMounted, computed } from "vue";
import { AppState } from '../AppState.js'
import BlogCard from "../components/BlogCard.vue";

export default {
  setup() {
    async function getPosts() {
      try {
        await blogsService.getPosts()
      } catch (error) {
        logger.log(error)
        Pop.error(error.message)
      }
    }
    onMounted(() => getPosts())
    return {
      blogs: computed(() => AppState.blogs)
    }
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
