import { create } from "zustand";

type State = {
	genres: { value: string; label: string }[] | null;
};

type Actions = {
	setGenres: (qty: { value: string; label: string }[] | null) => void;
};

const useGenreeStore = create<State & Actions>((set) => ({
	genres: null,
	setGenres: (qty: { value: string; label: string }[] | null) =>
		set((state) => ({ genres: qty })),
}));

export default useGenreeStore;
