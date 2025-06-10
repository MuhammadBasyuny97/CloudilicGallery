// src/stores/useFreelancerStore.ts

import { create } from "zustand";

export type Freelancer = {
  id: number;
  name: string;
  photo: string;
  image: string;
  level: string;
  rate: number;
  Role: string;
  reviews: number;
  price: number;
};

export type SortKey =
  | "most-rated"
  | "lowest-rated"
  | "highest-price"
  | "lowest-price";

type FreelancerStore = {
  freelancers: Freelancer[];
  Category: string;
  setCategory: (category: string) => void;
  sortBy: SortKey;
  setSortBy: (key: SortKey) => void;
  setFreelancers: (data: Freelancer[]) => void;
};

export const useFreelancerStore = create<FreelancerStore>((set) => ({
  freelancers: [],
  Category: "UI/UX Designer",
  setCategory: (category: string) => set({ Category: category }),
  sortBy: "most-rated",
  setSortBy: (key) => set({ sortBy: key }),
  setFreelancers: (data) => set({ freelancers: data }),
}));
