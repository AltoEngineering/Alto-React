// ==================================================================================
// Project: PinnacleRacing.io - Professional Remote Control and Drone Racing Solutions
// Copyright: @2017 Pinnacle Racing, LLC
// License:   Property of Pinnacle Racing and Chad Eubanks
// Author: Chad Eubanks
// ==================================================================================

const STRING_CAMELIZE_REGEXP_1 = (/(\-|\_|\.|\s)+(.)?/g);
const STRING_CAMELIZE_REGEXP_2 = (/(^|\/)([A-Z])/g);

const camelize = (str) => {
    return str.replace(STRING_CAMELIZE_REGEXP_1, function(match, separator, chr) {
        return chr ? chr.toUpperCase() : '';
    }).replace(STRING_CAMELIZE_REGEXP_2, function(match, separator, chr) {
        return match.toLowerCase();
    });
};

export default camelize;