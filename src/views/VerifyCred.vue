<template>
  <div class="verifier">
    <div>
      <h1 class="title">Verify</h1>
    </div>
    <hr>
    <div>
      <b-container fluid>
        <b-row class="text-center">
          <b-col class="text-center"></b-col>
          <b-col class="text-center">
            <form>
              <div class="field">
                <label class="label">凭证ID</label>
                <b-form-input name="userName" v-model="credId" class="input"
                              type="text" placeholder="输入ID"></b-form-input>
              </div>
              <br>
              <div>
                <b-button variant="primary" v-on:click="verifyCred()">校验Cred</b-button>
              </div>
            </form>
          </b-col>
          <b-col class="text-center"></b-col>
        </b-row>
        <br>
        <b-row class="text-center">
          <b-col cols="2" class="text-center"></b-col>
          <b-col class="text-center">
            <label class="label" v-if="IsValid">IsValid:&nbsp;{{ IsValid }}</label>
          </b-col>
          <b-col cols="2" class="text-center"></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VerifyCred',

  data: function () {
    return {
      credId: "", IsValid: ""
    }
  },

  methods: {
    verifyCred: function () {
      var data = {"id": this.credId}

      /*eslint-disable*/
      console.log(data)
      /*eslint-enable*/

      axios({
        method: "POST",
        url: "http://127.0.0.1:7890/verify",
        data: data,
        headers: {"content-type": "text/plain"},
      }).then(result => {
        this.IsValid = result.data['is_valid']

        /*eslint-disable*/
        console.log(result.data)
        /*eslint-enable*/
      }).catch(error => {
        /*eslint-disable*/
        console.error(error);
        /*eslint-enable*/
      })
    }
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

.label {
  word-break: break-all;
  white-space: normal;
  text-align: center;
}
</style>