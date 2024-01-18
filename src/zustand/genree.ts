import { Item } from "@/models/TrackModel";
import { create } from "zustand";

type State = {
	genres: string[] | null;
};

type Actions = {
	setGenres: (qty: string[] | null) => void;
};

const useGenreeStore = create<State & Actions>((set) => ({
	genres: null,
	setGenres: (qty: string[] | null) => set((state) => ({ genres: qty })),
}));

export default useGenreeStore;
