import {
  helper as buildHelper
} from '@ember/component/helper';
import {
  htmlSafe
} from '@ember/string';
import Ember from 'ember';

export function simpleFormat([val], namedArgs) {
  var string = '';
  let pTag = "<p>";

  if (namedArgs.pClass) {
    pTag = `<p class="${namedArgs.pClass}">`;
  }

  if (Array.isArray(val) && val.length > 0) {
    val.forEach((item) => {
      string += pTag + item + "</p>"
    });
    return htmlSafe(string);
  }

  string = Ember.Handlebars.Utils.escapeExpression(val);
  string = string.replace(/\r\n?/g, "\n").trim();
  if (string.length > 0) {
    string = string.replace(/\n/g, '<br />');
    string = string.replace(/\n\n+/g, '</p>' + pTag);
    return htmlSafe(pTag + string + "</p>");
  }
  return htmlSafe("");
}

export default buildHelper(simpleFormat);
