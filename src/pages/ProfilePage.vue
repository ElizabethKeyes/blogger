<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-8 m-3">
        <div class="d-flex">
          <img class="profile-pic" :src="profile?.picture" alt="">
          <h1 class="pe-2">{{ profile?.name }}</h1>
          <span v-if="profile?.id == account.id" class="mt-1"> <button class="btn btn-outline-dark"> <i
                class="mdi mdi-pen fs-4"></i> </button> </span>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="col-12 px-4" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </section>
  </div>
  <BlogModal>
    <BlogForm />
  </BlogModal>
</template>

<!-- TODO make sure conditional rendering works when logged in to proper account -->

<script lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';
import BlogForm from '../components/BlogForm.vue';
import BlogModal from '../components/BlogModal.vue';
import { router } from '../router';
import { blogsService } from '../services/BlogsService';
import { profilesService } from '../services/ProfilesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
  setup() {
    async function getProfileById() {
      try {
        const profileId = route.params.profileId;
        await profilesService.getProfileById(profileId);
      }
      catch (error) {
        Pop.error(error.message);
        logger.log(error.message);
      }
    }
    async function getBlogsByProfileId() {
      try {
        const profileId = route.params.profileId;
        await blogsService.getBlogsByProfileId({ creatorId: profileId });
      }
      catch (error) {
        Pop.error(error.message);
        logger.log(error.message);
      }
    }
    onMounted(() => {
      getProfileById();
      getBlogsByProfileId();
    });
    const route = useRoute();
    return {
      route,
      profile: computed(() => AppState.activeProfile),
      blogs: computed(() => AppState.blogs),
      account: computed(() => AppState.account)
    };
  },
  components: { BlogCard, BlogModal, BlogForm }
}
</script>


<style lang="scss" scoped>
.profile-pic {
  height: 20vh;
  width: 20vh;
  border-radius: 100%;
  margin: .5em
}
</style>