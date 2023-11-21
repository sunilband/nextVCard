import copy from "clipboard-copy";
import { toast } from "react-toastify";

export const copyClipboard = async (text: string) => {
  try {
    await copy(text || "");
    toast.success("Card Link copied to clipboard");
  } catch (error) {
    toast.error("Error copying to clipboard");
  }
};
