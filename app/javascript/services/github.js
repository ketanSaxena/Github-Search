import http from '../mixins/restutils';
import UI from '../mixins/ui';
import Utility from '../mixins/basicUtils';
import CONSTANTS from '../constants/app-constant';
import Authorization from './authorization';

const GIT_BASE_URL = 'https://api.github.com/';

const API = {
  users: 'users'
};

const PER_PAGE_RECORDS = 10;

const GithubService = {
  getUsers: (showSince, perPageRecords) => {
    return http.performGet(GIT_BASE_URL + API.users,
      { showSince: showSince,  per_page: perPageRecords || PER_PAGE_RECORDS})
  },
  getPerPageRecordCount: () => PER_PAGE_RECORDS
};

export default GithubService;
