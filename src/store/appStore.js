import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import createAuthSlice from "./slices/authSlice";
import createTestSlice from "./slices/testSlice";

const useAppStore = create(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createTestSlice(...a),
    }),
    {
      name: "feedbackStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAppStore;
