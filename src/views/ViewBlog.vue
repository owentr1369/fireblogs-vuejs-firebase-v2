<template>
  <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <h4>
        Posted on:
        {{
          new Date(this.currentBlog[0].blogDate).toLocaleDateString("en-GB", {
            dateStyle: "long",
          })
        }}
      </h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div
        class="post-content ql-editor"
        v-html="this.currentBlog[0].blogHTML"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBlog: null,
    };
  },
  async created() {
    this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
      console.log("post", post);
      return post.blogID === this.$route.params.blogid;
    });
  },
};
</script>

<style lang="scss" scoped>
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
  .container {
    min-width: 100%;
    padding: 60px 25px;
  }
  .ql-editor {
    padding: 0;
  }
  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }
  img {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>