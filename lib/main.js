import Pajax from './pajax';
import PajaxRequest from './request';
import PajaxResult from './result';
import PajaxJSON from './json';
import PajaxURLEncoded from './urlencoded';
import qs from './qs';
import {isURL, parseURL} from './url-parser';
import * as _ from './utils';

Pajax.Request = PajaxRequest;
Pajax.Result = PajaxResult;
Pajax.JSON = PajaxJSON;
Pajax.URLEncoded = PajaxURLEncoded;
Pajax.qsParse = qs.parse;
Pajax.qsStringify = qs.stringify;
Pajax.parseURL = parseURL;
Pajax.isURL = isURL;
Pajax.parseIRI = parseURL; // Alias
Pajax.isIRI = isURL; // Alias
Pajax.clone = _.clone;
Pajax.merge = _.merge;
Pajax.defaults = _.defaults;

export default Pajax;