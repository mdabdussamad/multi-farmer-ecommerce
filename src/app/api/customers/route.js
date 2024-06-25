import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function GET(request) {
    try {
        const customers = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where: {
                role: 'USER',
            },
            include: {
                profile: true,
            },
        });
        return NextResponse.json(customers);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to Fetch Users",
            error
        }, { status: 500 })
    }
}