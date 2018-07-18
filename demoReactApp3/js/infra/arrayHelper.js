'use strict';

import _ from 'lodash';

export function getDeepArray(obj, key) {
    if (_.has(obj, key))
    { 
        const result = [obj[key]]; 
        return result;
    }

    // // elegant:
    // return _.flatten(_.map(obj, function(v) {
    //     return typeof v == "object" ? fn(v, key) : [];
    // }), true);

    // or efficient:
    let res = [];
    _.forEach(obj, function(v) {
        if (typeof v == "object" && (v = getDeepArray(v, key)).length)
            res.push.apply(res, v);
    });
    return res;
}

export function getDeepObjects(obj, key) {
    if (_.has(obj, key)) 
        return [obj];

    // // elegant:
    // return _.flatten(_.map(obj, function(v) {
    //     return typeof v == "object" ? fn(v, key) : [];
    // }), true);

    // or efficient:
    let res = [];
    _.forEach(obj, function(v) {
        if (typeof v == "object" && (v = getDeepObjects(v, key)).length)
            res.push.apply(res, v);
    });
    return res;
}