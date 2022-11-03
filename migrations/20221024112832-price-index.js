'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  return db.addIndex('prices', 'ix_product_id', ['product_id'], [], callback);
};

exports.down = function(db, callback) {
  return db.removeIndex('prices', 'ix_product_id', callback);
};

exports._meta = {
  "version": 1
};
