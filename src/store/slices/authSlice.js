const createAuthSlice = (set, get) => ({
  user: {},
  setUser: (obj) => {
    set(() => ({ user: obj }));
  },
});

export default createAuthSlice;
