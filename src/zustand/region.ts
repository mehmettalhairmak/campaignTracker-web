import { Item } from "@/models/TrackModel";
import { create } from "zustand";

type State = {
	region: string | null;
};

type Actions = {
	setRegion: (qty: string | null) => void;
};

const useRegionStore = create<State & Actions>((set) => ({
	region: null,
	setRegion: (qty: string | null) => set((state) => ({ region: qty })),
}));

export default useRegionStore;
