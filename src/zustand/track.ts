import { TrackItem } from "@/models/TrackModel";
import { create } from "zustand";

type State = {
	track: { value: string; label: string } | "NULL" | null;
};

type Actions = {
	setTrack: (qty: { value: string; label: string } | "NULL" | null) => void;
};

const useTrackStore = create<State & Actions>((set) => ({
	track: null,
	setTrack: (qty: { value: string; label: string } | "NULL" | null) =>
		set((state) => ({ track: qty })),
}));

export default useTrackStore;
