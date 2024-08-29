import { useContext } from "react";
import { ArtContext } from "../contexts/ArtContext";

export const useArtContext = () => {
    const context = useContext(ArtContext);

    if (context === undefined) {
        throw new Error("useArtContext must be used within an ArtProvider");
    }

    return context;
};
