import http from '../mixins/restutils';

const GIT_BASE_URL = 'https://api.github.com/';

const API = {
  users: 'users'
};

const PER_PAGE_RECORDS = 10;

const GithubService = {
  /**
  * method to fetch Github users from thier API.
  * @param {number} showSince: The integer ID of the last User that you've seen.
  * @param {number} perPageRecords: number of records wanted in one result-set.
  * @returns {Promise}
  */
  getUsers: (showSince, perPageRecords) => {
    return http.performGet(GIT_BASE_URL + API.users,
      { showSince: showSince,  per_page: perPageRecords || PER_PAGE_RECORDS})
  },
  /**
  * method to return default per page records count.
  * @returns {number}
  */
  getPerPageRecordCount: () => PER_PAGE_RECORDS
};

export default GithubService;
