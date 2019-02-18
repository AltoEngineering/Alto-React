// ==================================================================================
// Project: PinnacleRacing.io - Professional Remote Control and Drone Racing Solutions
// Copyright: @2017 Pinnacle Racing, LLC
// License:   Property of Pinnacle Racing and Chad Eubanks
// Author: Chad Eubanks
// ==================================================================================

const STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
const STRING_UNDERSCORE_REGEXP_2 = (/\-|\s+/g);

const underscore = (str) => {
    return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();
};

export default underscore;