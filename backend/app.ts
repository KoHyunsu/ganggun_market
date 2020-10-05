import createError from 'http-errors';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import timeout from "connect-timeout";
import moment from "moment-timezone";
import auth from "./config/authentication";
import session from "express-session";
// const MySQLStore = require('express-mysql-session')(session);
// import compression from 'compression';

const config = require("./config/config.ts")["default"][process.env.NODE_ENV || "development"];

class App {
       public application: express.Application;
       constructor() {
              this.application = express();
       }
}

class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

const app = new App().application;

// view engine setup
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'ejs');

// express 환경 셋업
app.use(timeout("30s"));
// morgan 설정
app.enable("trust proxy");

logger.token("User", (req: any, res) => {
  return !req.session ? "Source" : req.session.user == undefined ? "Guest" : req.session.user.name;
});
logger.token("Date", (req, res, tz: any) => {
  return moment()
    .tz(tz)
    .format("YYYY-MM-DD HH:mm:ss Z");
});
logger.format(
  "OSAM",
  ':User :remote-addr [:Date[Asia/Seoul]] ":method :url HTTP/:http-version" :status :res[content-length] ":user-agent" - :response-time ms'
);
app.use(logger('dev'));
app.use(logger(app.get("env") === "development" ? "dev" : "OSAM"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(compression());
app.use("/", express.static(path.join(__dirname, '../../frontend/public')));
app.use(/.*\/uploads\/thumbnail/, express.static(path.join(__dirname, "..", "uploads", "thumbnail")));
app.use(
  /.*\/uploads\/images/,
  (req, res, next) => auth(req, res, next, 1),
  express.static(path.join(__dirname, "..", "uploads", "images"))
); // file
app.use(
  "/uploads/file",
  (req, res, next) => auth(req, res, next, 2),
  (req, res, next) => { console.log('주소 :', req.url); next() },
  express.static(path.join(__dirname, "..", "uploads", "file")),
  (req, res, next) => res.sendFile(path.join(__dirname, "..", "src", "views", "404.html"))
); //file

// Session maintain time : 3 hours
/*const sessionStore = new MySQLStore({
  host: config.db.host,
  port: config.db.port,
  user: config.db.username,
  password: config.db.password,
  database: config.db.database
});*/
app.use(
  session({
    secret: "OSAM",
    proxy: true,
    // store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3 * 60 * 60 * 1000
    }
  })
);

// 백 라우팅 선언
// rest 주소를 /rest로
/*app.use(function (req: Request, res: Response, next: NextFunction) {
  if (req.url.match(/^\/rest/)) {
    req.url = "/" + req.url;
  }
  next();
});*/
app.use("/rest/admin", require("./routes/admin"));
app.use("/rest/board", require("./routes/board"));
app.use("/rest/trade", require("./routes/trade"));
app.use("/rest/user", require("./routes/user"));

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: HttpException, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;