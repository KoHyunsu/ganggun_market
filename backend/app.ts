import createError from 'http-errors';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import history from "connect-history-api-fallback";

const PORT = process.env.PORT || 5000
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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, '../public')));

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

app.use(history({ index: "/index.html" }));

//app.use("/file", express.static(path.join(__dirname, viewPath.index)));
app.use("/", express.static(path.join(__dirname, "/../build")));


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