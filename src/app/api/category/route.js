import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 디비에서 데이터 가져오기
export const GET = async () => {
    try {
        const category = await prisma.category.findMany();

        return new NextResponse(
            JSON.stringify(category, { status: 200 })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};