const createTestSlice = (set) => ({
  count: 0,
  addCount: () => set((state) => ({ count: state.count + 1 })),
  reduceCount: () => set((state) => ({ count: state.count - 1 })),
});

export default createTestSlice;
