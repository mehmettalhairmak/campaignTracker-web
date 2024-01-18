import { Item } from "@/models/TrackModel";
import { create } from "zustand";

type State = {
	track: string | null;
};

type Actions = {
	setTrack: (qty: string | null) => void;
};

const useTrackStore = create<State & Actions>((set) => ({
	track: null,
	setTrack: (qty: string | null) => set((state) => ({ track: qty })),
}));

export default useTrackStore;