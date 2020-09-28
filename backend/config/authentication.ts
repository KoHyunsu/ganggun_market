const auth = (req: any, res: any, next: any, level: any) => {
  if(!req.session.user) {
    res.send({
      result: false,
      error: 'No auth'
    });
  } else {
    if (req.session.user.level < level) {
      res.send({
        result: false,
        error: 'Under auth level',
      })
    } else {
      next();
    }
  }
}

export default auth;