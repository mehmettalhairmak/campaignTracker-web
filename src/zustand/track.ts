import { TrackItem } from "@/models/TrackModel";
import { create } from "zustand";

type State = {
	track: TrackItem | null;
};

type Actions = {
	setTrack: (qty: TrackItem | null) => void;
};

const useTrackStore = create<State & Actions>((set) => ({
	track: null,
	setTrack: (qty: TrackItem | null) => set((state) => ({ track: qty })),
}));

export default useTrackStore;
