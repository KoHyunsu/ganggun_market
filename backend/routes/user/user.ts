//import models from "../../models";
//import crypto from "crypto";

import { Response } from "express";
import path from "path";
import fs from "fs";
const config = require(path.join(__dirname, '/../../config/config'))['default'][process.env.NODE_ENV || 'development'];

/*const selectUser = async (req, res) => {
  // /:searchType?/:value? 에 맞춰 param 결정해서 조회
  let userList = null;
  try {
    userList = await models.User.findAll({
      attributes: ["id", "UserId", "name", "nth_member", "level"],
      where: {
        [req.params.searchType]: req.params.value
      }
    });
  } catch (err) {
    userList = await models.User.findAll({
      attributes: ["id", "UserId", "name", "nth_member", "level"],
      include: [{
        model: models.Application,
        attributes: ["path"], 
      }]
    });
  }
  res.send(userList);
};

const deleteUser = async (req, res) => {
  // Url param id : 제거할 User id
  await models.User.destroy({
    where: {
      id: req.params.id
    }
  });
  res.send({
    result: true
  });
};*/

const sayHello = (req: Request, res: Response) => {
  res.send("User");
}

const uploadTest = (req: any, res: Response) => {
  let file = null;
  if (req.files.length) {
    file = req.files[0];
  } else {
    res.send({
      result: false,
      error: "No file"
    });
    return;
  }
  let filePath = null;
  // 업로드 된 지원서 이름 변경후 저장될 위치로 이동
  const fileName = file.filename
  // `${path.extname(file.filename)}`;
  filePath = path.join(
    config.path.upload_path_images,
    fileName
  );
  try {
    fs.mkdirSync(
      path.join(config.path.upload_path_images),
      { recursive: true }
    );
    fs.renameSync(file.path, filePath);
  } catch (err) {
    throw err;
  }
  if (filePath) { res.send({ result: filePath }) } else { res.send({ result: false }) };
}

module.exports = {
  sayHello,
  uploadTest
};