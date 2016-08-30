import http from '../mixins/restutils';
import UI from '../mixins/ui';
import Utility from '../mixins/basicUtils';
import CONSTANTS from '../constants/app-constant';
import Authorization from './authorization';

const GIT_BASE_URL = 'https://api.github.com/';

const API = {
  users: 'users'
};

const GithubService = {
  typeCount: 2,
  getUsers: (text, pageIndex) {
    return http.performGet(GIT_BASE_URL + API.users);
  }

};

export default GithubService;
