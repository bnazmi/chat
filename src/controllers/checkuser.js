const select = require('../model/queries/select');

const checkUserExistance = (username, email, password, cb)=>{
  select.selectUserData(username, email, password, (err, result)=>{
    if(err) console.log(err);
    else{
      cb(result.rowCount > 0);
    }
  })
};

module.exports = checkUserExistance;
