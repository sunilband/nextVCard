import { toast } from "react-toastify";

export const getdetails = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GET_DETAILS}` + id,
      {
        method: "GET",
        // allow cross origin
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
    const responseData = await response.json();
    return responseData;
  } catch (err: any) {
    toast.error(err);
  }
};
