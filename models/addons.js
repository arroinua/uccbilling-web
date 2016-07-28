var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AddonsSchema = new Schema({
    // id: String,
    name: String,
    description: String,
    neverExpires: { type: Boolean, default: true },
    billingPeriod: Number,
    billingPeriodUnit: String,
    price: String,
    // quantity: Number,
    currency: String,
    createdAt: Number,
    updatedAt: Number
}, {collection: 'addons'});

AddonsSchema.pre('save', function(next) {
    var addon = this;
    if(!addon.createdAt){
        // addon.id = addon.name;
        addon.createdAt = Date.now();
    }

    addon.updatedAt = Date.now();

    next();
});

module.exports = mongoose.model('Addon', AddonsSchema);

