var express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

const validUrl = require("valid-url");
const { customAlphabet } = require("nanoid");

const Paste = require("../models/paste");
const SystemID = require("../models/systemid");

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvw", 7);
const base_url = "https://stagbin.tk/";
const check_system_id = async (system_id) => {
  if (ObjectId.isValid(system_id)) {
    const found = await SystemID.find({ _id: system_id });
    console.log(found);
    return found;
  }
  console.log(false);
  return false;
};

const check_url = async (url_code) => {
  const found = await Paste.find({ urlCode: url_code });
  return found;
};

const create_system_id = async () => {
  const newID = new SystemID();
  const err = await newID.save().catch((err) => err);
  return newID._id;
};

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", {
    title: 'Available routes: ["/new]',
  });
});

router.get("/newSystemID", async (req, res, next) => {
  const newID = await create_system_id();
  res.send({ status: "Success", system_id: newID });
});

router.post("/new", async (req, res, next) => {
  let system_id = req.body.system_id;
  let data = req.body.data;
  let url_code = req.body.custom_url_code;
  let isURL = false;
  if (!data) {
    return res.status(400).send("No data given");
  }
  data = data.trim();
  if (!(await check_system_id(system_id))) {
    system_id = await create_system_id();
    console.log(system_id);
    // Write logic to update all existing pastes of the id too
  }
  if (validUrl.isUri(data) || validUrl.isWebUri(data)) {
    isURL = true;
  }
  // Generate short URL if not provided
  if (!url_code) {
    url_code = await nanoid();
  }
  let check = await check_url(url_code);
  console.log(check);
  while (check.length >= 1) {
    url_code = await nanoid();
    check = await check_url(url_code);
    console.log(check);
  }

  console.log(await check_url(url_code));

  const paste = new Paste({
    data: data,
    urlCode: url_code,
    isUrl: isURL,
    createdSystemID: system_id,
    shortUrl: base_url + url_code,
  });
  paste
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      if (err.codeName === "BSONObjectTooLarge")
        res.status(400).send("Cannot Upload File larger than 16mb");
      else res.status(400).send(err);
    });
});

router.post("/get", (req, res, next) => {
  const url_code = req.body.custom_url_code;
  Paste.find({ urlCode: url_code })
    .then((result) => {
      if (result.length === 1) {
        res.status(200).send(result[0]);
      } else {
        res.status(400).send("Not Found");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;
