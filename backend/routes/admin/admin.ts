//import models from "../../models";
//import crypto from "crypto";

import { Response } from "express";

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
    res.send("Admin");
}

module.exports = {
    sayHello
};