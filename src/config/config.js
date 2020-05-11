// import { EndPointConfig } from './EndPointConfig';

export const ENDPOINT_CONFIG = {
  endpointVersion: '/v1',
  endpointVersionV2: '/v2',
  rafaLaunchEndpoint: 'https://ci.rafa.moodysanalytics.net',
  folderManagementEndpoint: 'https://ci-api.rafa.moodysanalytics.net/fms/workspace',
  folderFilesManagementEndpoint: 'https://ci-api.rafa.moodysanalytics.net/fms/files/workspace',
  appRegistryEndpoint:'https://ci-api.cap.moodysanalytics.net/app-registry',
  redirectPage: 'https://ci.cap.moodysanalytics.net',
  dataDictionaryEnumsEndpoint: 'https://ci-api.rafa.moodysanalytics.net/dictionary/1.0/dictionaryenums',
  workflowEndpoint: 'https://ci-api.cap.moodysanalytics.net/cap-analytics/v1/workflows',
  workflowItemsEndpoint: 'https://ci-api.cap.moodysanalytics.net/cap-analytics/v1/workflows/items',
  analyticEndpoint: 'https://ci-api.cap.moodysanalytics.net/cap-analytics/v1/analytics',
  capUserEndpoint: 'https://ci-api.cap.moodysanalytics.net/cap-analytics/v1/users/uam',
  confluenceEndpoint: 'https://infostg.analytics.moodys.net',
  capUserGuides: {
    helpGuide: '/display/000000AMZURSBCYCJ/About+this+Document',
    setMinimumCutOffGuide: '/display/000000AMZASTBCYCJ/Enter+your+minimum+default+percentile+cutoff',
    setARValueGuide: '/display/000000AMZASTBCYCJ/Accuracy+Ratio'
  },
  appCenterEndpoint: 'https://ci.cap.moodysanalytics.net/app-center',
  projectWorkSpaceConfigEndpoint:'https://ci-api.rafa.moodysanalytics.net/tenant-infra/configs',
  userPermissions:'https://ci-api.impairmentstudio.moodysanalytics.net/uam/v1/users/userPermissions',

  ssoServiceEndpoint: 'https://ci-api.sso.moodysanalytics.net/sso-api',
  uamServiceEndpoint: 'https://ci-api.impairmentstudio.moodysanalytics.net/uam',
  dataDictionaryEndpoint:'https://ci-api.rafa.moodysanalytics.net/dictionary/2.0/datadictionaries?all=true',
  dataDictionaryAttributesEndpoint:'https://ci-api.rafa.moodysanalytics.net/dictionary/1.0/attributes',
  capEndpoint: 'https://ci-api.cap.moodysanalytics.net',
  modelsEndpoint: 'https://ci-api.cap.moodysanalytics.net/model',
  fileManagementEndpoint: 'https://ci-api.rafa.moodysanalytics.net/fms/{serviceMethod}?path={path}&key={key}',
  adjustmentsEndpoint: 'https://ci-api.impairmentstudio.moodysanalytics.net/adjustment',

  riskCalcUrl: 'https://rcp-ci.analytics.moodys.net',
  commercialMortgageMetricsUrl: 'https://rcp-ci.analytics.moodys.net/cmm/login.aspx',
  riskBenchUrl: 'https://rb-dev.analytics.moodys.net',
  capUrl: 'https://ci.cap.moodysanalytics.net',
  impairmentStudioUrl: 'https://ci.impairmentstudio.moodysanalytics.net',
  impairmentCalcUrl: '',
  capitalRiskAnalyzerUrl: 'https://ci.cra.moodysanalytics.net',
  rafaHomeUrl: 'https://ci.rafa.moodysanalytics.net'
};