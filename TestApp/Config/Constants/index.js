const BASE_API_URL = "https://api.nytimes.com/svc/";
const API_KEY = "Pve9ZAHlAwOPVEAU8ozPNhmOWEbEVcqs";

const apiPopularArticles = periodVal => {
  return `${BASE_API_URL}mostpopular/v2/viewed/${periodVal}.json?api-key=${API_KEY}`;
};

export const Constants = {
  API_POPULAR_ARTICLES: apiPopularArticles
};
