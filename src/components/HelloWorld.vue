<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For the backend code of this project, visit
      <a href="https://github.com/Stype0912/DCanDID" target="_blank" rel="noopener">backend repo</a>.
    </p>
    <p>
      For the frontend code of this project, visit
      <a href="https://github.com/Stype0912/fe-dcandid" target="_blank" rel="noopener">frontend repo</a>.
    </p>
    <p>
      For the origin framework of this project, visit
      <a href="https://eprint.iacr.org/2020/934.pdf" target="_blank" rel="noopener">CanDID document</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
