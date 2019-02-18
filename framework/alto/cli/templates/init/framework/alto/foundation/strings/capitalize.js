// ==================================================================================
// Project: PinnacleRacing.io - Professional Remote Control and Drone Racing Solutions
// Copyright: @2017 Pinnacle Racing, LLC
// License:   Property of Pinnacle Racing and Chad Eubanks
// Author: Chad Eubanks
// ==================================================================================

var STRING_CAPITALIZE_REGEXP = (/(^|\/)([a-z])/g);

const capitalize = (str) => {
    return str.replace(STRING_CAPITALIZE_REGEXP, function(match, separator, chr) {
        return match.toUpperCase();
    });
};

export default capitalize;