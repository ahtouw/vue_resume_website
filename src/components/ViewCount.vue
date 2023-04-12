<template>
  <div id="viewCount">{{ viewCount }}</div>
</template>

<script>
export default {
  data() {
    return {
      viewCount: null,
    };
  },
  async beforeCreate() {
    fetch("https://api.williamahtou.com/dynamodb", {
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors", // Add this line to enable CORS
    })
      .then((response) => response.json())
      .then((data) => {
        this.viewCount = "Viewer Count: " + data.message.N;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#viewCount {
  font-weight: 300;
  font-size: 20px;
  top: 80px;
  text-align: center;
}
</style>
