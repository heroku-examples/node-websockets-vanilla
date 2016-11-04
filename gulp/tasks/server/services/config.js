module.exports = {
    get: function(name) {
        return new Promise(function(resolve, reject) {
            var Config = require('../models/config');
            Config.findOne({
                name: name
            }, function(err, record) {
                if (record) {
                    resolve(record.values); // errがなければ成功とみなしresolveを呼び出す
                } else if (err) {
                    reject(err); // errがあればrejectを呼び出す
                } else{
                    resolve(false); // errがなければ成功とみなしresolveを呼び出す
                }
            });
        });
    },
    update: function(name, value) {
        return new Promise(function(resolve, reject) {
            var Config = require('../models/config');
            Config.findOneAndUpdate({ name: name }, { values: { adminToken :value } }, function(err, record) {
                if (record) {
                    resolve(record); // errがなければ成功とみなしresolveを呼び出す
                } else if (err) {
                    reject(err); // errがあればrejectを呼び出す
                }else{
                    resolve(false);
                }
            });
        });
    }
};
