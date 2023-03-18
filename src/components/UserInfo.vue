<template>
  <div class="container">
    <div class="flex">
      <div class="owner">
        <img :src="user?.avatar_url" class="owner-image" />
      </div>
      <div class="info">
        <table>
          <tr>
            <td style="color: rebeccapurple">Name</td>
            <td>{{ user?.name }}</td>
          </tr>
          <tr>
            <td style="color: rebeccapurple">Username</td>
            <td>{{ user?.bio }}</td>
          </tr>
          <tr>
            <td style="color: rebeccapurple">Company</td>
            <td>{{ user?.company }}</td>
          </tr>

          <tr>
            <td style="color: rebeccapurple">Location</td>
            <td>{{ user?.location }}</td>
          </tr>

          <tr>
            <td style="color: rebeccapurple">Number of Public Repo</td>
            <td>{{ user?.public_repos }}</td>
          </tr>

          <tr>
            <td style="color: rebeccapurple">Number of Followers</td>
            <td>{{ user?.followers }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfo",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const { data } = await axios.get(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${process.env.VUE_APP_GITHUB_PAT}`,
        },
      });

      this.user = data;
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
    

.owner {
  width: 20%;
}
.owner-image {
  width: 100%;
}

.info {
  width: 70%;
}
.container{
    margin: auto auto 50px auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
</style>
