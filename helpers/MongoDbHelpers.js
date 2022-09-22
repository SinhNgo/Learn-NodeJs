"use strict";
// Khai báo thư viện MongoClient
const { MongoClient } = require("mongodb");
const { ObjectID } = require("mongodb");

// Chuỗi kết nối đến MongoDB
const DATABASE_NAME = "api-training";
const CONNECTION_STRING = "localhost:27017/" + DATABASE_NAME;
