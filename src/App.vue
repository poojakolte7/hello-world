<template>
  <div id="app">
    <div class="container mt-4">
      <div class="card">
        <div class="card-header">
          <h4>Customer Details</h4>
        </div>

        <div class="card-body">
          <div class="row mt-4">
            <div class="col-4">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                v-model="fname"
                class="form-control"
                required
              />
            </div>

            <div class="col-4">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                v-model="lname"
                class="form-control"
                required
              />
            </div>

            <div class="col-4">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                v-model="addr"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="m-auto text-center">
            <button class="btn btn-primary mt-4" @click="showdata">Add</button>
          </div>
        </div>
      </div>
      <h5 class="mt-4">List</h5>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in custdet" :key="index">
            <td :item="item">{{ index + 1 }}</td>
            <td :item="item">{{ item.fname }}</td>
            <td :item="item">{{ item.lname }}</td>
            <td :item="item">{{ item.addr }}</td>
            <td @click="deleteEvent(index)">
              <button class="btn btn-link">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "app",
  data() {
    return {
      fname: "",
      lname: "",
      addr: "",
      custdet: [],
    };
  },
  methods: {
    showdata: function() {
      if (this.fname == "" || this.lname == "" || this.addr == "") {
        alert("All fields are required");
      } else {
        this.custdet.push({
          fname: this.fname,
          lname: this.lname,
          addr: this.addr,
        });
        this.fname = "";
        this.lname = "";
        this.addr = "";
      }
    },
    deleteEvent: function(index) {
      this.custdet.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
.table td,
.table th {
  vertical-align: middle;
}
</style>
