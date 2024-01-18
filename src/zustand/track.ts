import { TrackItem } from "@/models/TrackModel";
import { create } from "zustand";

type State = {
	track: TrackItem | "NULL" | null;
};

type Actions = {
	setTrack: (qty: TrackItem | "NULL" | null) => void;
};

const useTrackStore = create<State & Actions>((set) => ({
	track: null,
	setTrack: (qty: TrackItem | "NULL" | null) =>
		set((state) => ({ track: qty })),
}));

export default useTrackStore;
