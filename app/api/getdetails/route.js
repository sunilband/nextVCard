import { NextResponse } from "next/server";
import { UserModel } from "@/utils/backend/userModel";
import { connectDB } from "@/utils/backend/mongoDB";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";
import { useSearchParams } from "next/navigation";

export async function GET(req, res) {
  try {
    const userParams = new URL(req.url).searchParams.get("user");
    await connectDB();
    const user = await UserModel.findById(userParams);

    if (!user)
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: "no user found",
        }),
        {
          status: 400,
        },
      );

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Welcome back " + user.name + " ! ",
        user,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message.toString(),
      }),
      {
        status: 500,
      },
    );
  }
}
