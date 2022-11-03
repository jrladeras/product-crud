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
    db.createTable('products', {
      id: { type:'int', primaryKey: true, autoIncrement: true },
      name: 'string',
      description: 'string',
      status: {type: 'boolean', defaultValue: true},
      type: 'string',
      visibility: {type: 'boolean', defaultValue: true},
      created_by: 'int',
      date_created: { type: 'datetime' },
      date_updated: { type: 'datetime'},
      modified_by: 'int',
      deleted_at: { type: 'datetime'},
    }, callback)
};

exports.down = function(db) {
  return db.dropTable('products');
};

exports._meta = {
  "version": 1
};
