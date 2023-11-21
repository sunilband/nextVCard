import { toast } from "react-toastify";

export const getuser = async (token: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GET_USER}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    return responseData;
  } catch (err: any) {
    toast.error(err);
  }
};
