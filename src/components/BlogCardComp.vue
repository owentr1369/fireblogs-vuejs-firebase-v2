<template>
  <div class="blog-card">
    <div v-show="editPost" class="icons">
      <div class="icon">
        <Edit class="icon edit" />
      </div>
      <div class="icon">
        <Delete class="icon delete" />
      </div>
    </div>
    <img
      :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted on: {{ post.blogDate }}</h6>
      <router-link class="link" to="#">
        View the post <Arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";

export default {
  name: "blogCard",
  props: ["post"],
  components: { Arrow, Edit, Delete },
  computed: {
    editPost() {
      return this.$store.state.editPosts;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
      0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
  }
  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover {
        background-color: #303030;

        .edit,
        .delete {
          path {
            svg {
              fill: #fff;
            }
          }
        }
      }
      //   &:nth-child(1) {
      //     margin-right: 8px;
      //   }
      .edit,
      .delete {
        pointer-events: none;
        height: 14px;
        width: auto;
      }
    }
  }
  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 34px 16px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      padding-top: 20px;
      font-size: 12px;
      font-weight: 500;
      padding-bottom: 4px;
      transition: 0.5 ease-in all;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>