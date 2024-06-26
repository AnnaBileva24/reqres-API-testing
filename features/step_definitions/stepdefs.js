const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const axios = require("axios");
const {
  getUsersList,
  checkUserExists,
  createUser,
  updateUser,
  deleteUser,
} = require("../utils/reqres_client");

Given("check that the user with id {int} exists", async function (id) {
  const userExists = await checkUserExists(id);
  assert.ok(userExists);
});

When("a list of users is requested", async function () {
  this.listOfUsers = await getUsersList();
});

When("a list of users on page {int} is requested", async function (page) {
  this.listOfUsers = await getUsersList(page);
});

Then("a list of users on page {int} is returned", function (page) {
  assert.ok(Array.isArray(this.listOfUsers.data.data));
  assert.equal(this.listOfUsers.status, 200);
  assert.equal(this.listOfUsers.data.page, page);
});

When(
  "a user is created with the following details",
  async function (dataTable) {
    const data = dataTable.rowsHash();
    this.response = await createUser(data);
  }
);

Then("the user is successfully created", function () {
  assert.equal(this.response.status, 201);
});

Then("the response contains the following user details", function (dataTable) {
  const data = dataTable.rowsHash();
  assert.equal(this.response.data.name, data.name);
  assert.equal(this.response.data.job, data.job);
});

When(
  "user with id {int} is updated with the following details",
  async function (id, dataTable) {
    const data = dataTable.rowsHash();
    this.response = await updateUser(id, data);
  }
);

Then("the user is successfully updated", function () {
  assert.equal(this.response.status, 200);
});

When("the user with id {int} is deleted", async function (id) {
  this.response = await deleteUser(id);
});

Then("the user is successfully deleted", function () {
  assert.equal(this.response.status, 204);
});
