// ==================================================================================
// Project: PinnacleRacing.io - Professional Remote Control and Drone Racing Solutions
// Copyright: @2017 Pinnacle Racing, LLC
// License:   Property of Pinnacle Racing and Chad Eubanks
// Author: Chad Eubanks
// ==================================================================================

const STRING_DECAMELIZE_REGEXP = (/([a-z\d])([A-Z])/g);

const decamelize = (str) => {
    return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
};

export default decamelize;