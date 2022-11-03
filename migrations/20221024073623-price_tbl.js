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
    db.createTable('prices', {
      id: { type:'int', primaryKey: true, autoIncrement: true },
      product_id: 'int',
      price: {type: 'int', unsigned: true, defaultValue: 0.00},
      compare_price: {type: 'int', unsigned: true, defaultValue: 0.00},
      original_price: {type: 'int', unsigned: true, defaultValue: 0.00},
      discount_value: {type: 'int', defaultValue: 0},
      discount_type: 'string',
      name: 'string',
      description: 'string',
      status: {type: 'boolean', defaultValue: true},
      type: 'string',
      visibility: {type: 'boolean', defaultValue: true},
      created_by: 'string',
      date_created: { type: 'datetime' },
      date_updated: { type: 'datetime'},
      modified_by: 'int',
      deleted_at: { type: 'datetime'},
    }, callback)
};

exports.down = function(db) {
  return db.dropTable('prices');
};

exports._meta = {
  "version": 1
};
