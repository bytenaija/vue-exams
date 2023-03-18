<template>
  <div class="container">
    <div class="heading">
        <h1>Repositories</h1>
    </div>
    <table>
      <thead>
        <tr style="color: rebeccapurple; font-weight: 900">
          <td></td>
          <td>Name</td>
          <td>Description</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr class="card" v-for="(repo, index) in repos" :key="repo.name">
          <td>{{ index + 1 }}</td>
          <td>
            <b>{{ repo.name }}</b>
          </td>
          <td style="width: 50%">
            {{ repo.description || "None" }}
          </td>
          <td style="width: 20%">
            <div class="visit-action">
              <div
                class="visit-btn"
                @click="this.$router.push(`/${repo.name}`)"
              >
                Visit
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="load-action" v-show="canFetchMore">
      <div class="load-more" @click="loadMore()">Load More</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      repos: [],
      user: {},
      perPage: 10,
      page: 1,
      canFetchMore: true,
      loading: false,
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios
        .get(
          `https://api.github.com/users/${process.env.VUE_APP_GITHUB_USERNAME}/repos?per_page=${this.perPage}&page=${this.page}`,
          { headers: {
            Authorization: `token ${process.env.VUE_APP_GITHUB_PAT}`
          } }
        )
        .then((res) => {
          console.log(res.data[0]);
          if (Array.isArray(res.data) && res.data.length < this.perPage) {
            this.canFetchMore = false;
          }
          this.repos = this.repos.concat(res.data);
        });
    },

    loadMore() {
      if (this.canFetchMore) {
        this.page++;
      }
    },
  },

  watch: {
    page: function () {
      this.fetchData();
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}

td {
  border-left: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 20px;
}
.card {
  padding: 2px 16px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.load-action {
  margin-top: 2rem;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}

.load-more {
  width: 200px;
  border-radius: 10px;
  background-color: aqua;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.heading{
    display: flex;
    justify-content: center;
    align-items: center;
}
.visit-btn {
  width: 200px;
  border-radius: 10px;
  background-color: rebeccapurple;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
}
.visit-action{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.container{
    width: 90%;
    margin: 1rem auto;
}
</style>
