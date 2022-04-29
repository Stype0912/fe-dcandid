<template>
  <div class="user">
    <div>
      <h1 class="title">Login</h1>
    </div>
    <hr>
    <div>
      <b-container fluid>
        <b-row class="text-center">
          <b-col class="text-center"></b-col>
          <b-col class="text-center">
            <form>
              <div class="field">
                <label class="label">用户ID/凭证ID</label>
                <b-form-input name="userName" v-model="userId" class="input"
                              type="text" placeholder="输入ID"></b-form-input>
              </div>
              <br>
              <div>
                <b-button variant="primary" v-on:click="masterCred()">获取MasterCred</b-button>&nbsp;
                <b-button variant="primary" v-on:click="ctxCred()">获取ContextCred</b-button>
              </div>
            </form>
          </b-col>
          <b-col class="text-center"></b-col>
        </b-row>
        <br>
        <b-row class="text-center">
          <b-col cols="2" class="text-center"></b-col>
          <b-col class="text-center">
            <label class="label" v-if="credId">Credential Id:&nbsp;{{ credId }}</label>
            <label class="label" v-if="ctx">Context:&nbsp;{{ ctx }}</label>
            <label class="label" v-if="pkU">PkU:&nbsp;{{ pkU }}</label>
            <label class="label" v-if="claim">Claim:&nbsp;{{ claim }}</label>
            <label class="label" v-if="proof">Proof:&nbsp;{{ proof }}</label>
            <label class="label" v-if="signature">Signature:&nbsp;{{ signature }}</label>
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
  name: 'UserLogin',

  data: function () {
    return {
      userId: "", pkU: "", claim: "", signature: "", ctx: "", proof: "", credId: "",
    }
  },

  methods: {
    masterCred: function () {
      var data = {"id": this.userId}

      /*eslint-disable*/
      console.log(data)
      /*eslint-enable*/

      axios({
        method: "POST",
        url: "http://127.0.0.1:7890/master-cred",
        data: data,
        headers: {"content-type": "text/plain"},
      }).then(result => {
        this.proof = ''
        this.credId = result.data['id']
        this.ctx = result.data['ctx']
        this.pkU = result.data['pk_u']
        this.claim = result.data['claim']
        this.signature = result.data['signature']

        /*eslint-disable*/
        console.log(result.data)
        /*eslint-enable*/
      }).catch(error => {
        /*eslint-disable*/
        console.error(error);
        /*eslint-enable*/
      })
    },
    ctxCred: function () {
      var data = {"id": this.userId}

      /*eslint-disable*/
      console.log(data)
      /*eslint-enable*/

      axios({
        method: "POST",
        url: "http://127.0.0.1:7890/ctx-cred",
        data: data,
        headers: {"content-type": "text/plain"},
      }).then(result => {
        this.credId = result.data['id']
        this.ctx = result.data['ctx']
        this.claim = result.data['claim']
        this.proof = result.data['proof']
        this.signature = ''

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
  display: block;
}
</style>