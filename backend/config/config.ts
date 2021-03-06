export default {
    "development": {
      "port": 8080,
      "db": {
        "host": "",
        "username": "",
        "password": "",
        "database": "",
        "multipleStatements": true,
        "timezone": "+09:00",
        "operatorsAliases": 0,
        "dialect": "mysql",
        "port": "33306",
        "define": {
          "charset": "utf8",
          "collate": "utf8_general_ci"
        }
      },
      "path": {
        "index": "/../dist_dev",
        "upload_path_index": "uploads",
        "upload_path_assignment": "uploads/assignment",
        "upload_path_thumbnail": "uploads/thumbnail",
        "upload_path_lecture": "uploads/lecture",
        "upload_path_material": "uploads/material",
        "upload_path_application": "uploads/application",
        "upload_path_images": "uploads/images",
        "upload_path_other": "uploads/other"
      }
    },
    "production": {
      "port": 8282,
      "db": {
        "host": "",
        "username": "",
        "password": "",
        "database": "",
        "multipleStatements": true,
        "timezone": "+09:00",
        "operatorsAliases": 0,
        "dialect": "mysql",
        "port": "3306",
        "define": {
          "charset": "utf8",
          "collate": "utf8_general_ci"
        }
      },
      "path": {
        "index": "/../dist",
        "upload_path_index": "uploads",
        "upload_path_assignment": "uploads/assignment",
        "upload_path_thumbnail": "uploads/thumbnail",
        "upload_path_lecture": "uploads/lecture",
        "upload_path_material": "uploads/material",
        "upload_path_application": "uploads/application",
        "upload_path_images": "uploads/images",
        "upload_path_other": "uploads/other"
      }
    }
  }
  