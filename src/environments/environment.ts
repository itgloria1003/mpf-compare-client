// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api_fund_type_list :'http://localhost:8080/rest/list',
  api_fund_type_action:'http://localhost:8080/rest/action?requestAction=',
  api_fund_type_stat: 'http://localhost:8080/rest/stat?asOfDate=',
  api_fund_detail: 'http://localhost:8080/rest/details',
  api_fund_type_filter: 'http://localhost:8080/rest/mpffilter',
  api_rss_to_json: 'https://rss2json.com/api.json?rss_url=',
  rss_mpfa_press:'http://www.mpfa.org.hk/eng/main/rss/xml/press_rss.xml'
};
