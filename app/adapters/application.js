import AirtableAdapter from "ember-airtable/adapter";

export default AirtableAdapter.extend({

  // API Version + Base ID
  namespace: 'v0/appd4Nqi4RJHczPbu',

  headers: {
    'Accept': 'application/json',
    // API Token
    'Authorization': `Bearer keyWKn2JAVaS4Qg5r`
  }
});
