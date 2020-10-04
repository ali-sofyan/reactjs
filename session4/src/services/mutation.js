export const mutations = {
    setToken: (_, variables, {cache}) => {
      cache.writeQuery({
        data: {token: variables.token},
      });
      return null;
    },
  };
  