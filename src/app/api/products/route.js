import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            barcode,
            categoryId,
            description,
            farmerId,
            isActive,
            isWholesale,
            productCode,
            productPrice,
            salePrice,
            sku,
            slug,
            tags,
            title,
            unit,
            wholeSalePrice,
            wholesaleQty,
            productStock,
            qty,
            productImages
        } = await request.json();
        // Check if this product already exists in the db 
        const existingProduct = await db.product.findUnique({
            where: {
                slug,
            },
        });
        if (existingProduct) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Product (${title}) already exists in the Database",
                },
                { status: 409 }
            );
        }
        const newProduct = await db.product.create({
            data: {
                barcode,
                categoryId,
                description,
                userId: farmerId,
                productImages,
                imageUrl: productImages[0],
                isActive,
                isWholesale,
                productCode,
                productPrice: parseFloat(productPrice),
                salePrice: parseFloat(salePrice),
                sku,
                slug,
                tags,
                title,
                unit,
                wholeSalePrice: parseFloat(wholeSalePrice),
                wholesaleQty: parseInt(wholesaleQty),
                productStock: parseInt(productStock),
                qty: parseInt(qty),
            }
        });
        console.log(newProduct);
        return NextResponse.json(newProduct);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Product",
            error,
        },
            { status: 500 }
        );
    }
}
export async function GET(request) {
    const categoryId = request.nextUrl.searchParams.get("catId");
    const sortBy = request.nextUrl.searchParams.get("sort");
    const min = request.nextUrl.searchParams.get("min");
    const max = request.nextUrl.searchParams.get("max");
    const searchTerm = request.nextUrl.searchParams.get("search");
    const page = request.nextUrl.searchParams.get("page")||1;
    const pageSize = 3;
    let where = {
        categoryId,
    };
    if (min && max) {
        where.salePrice = {
            gte: parseFloat(min),
            lte: parseFloat(max),
        };
    } else if (min) {
        where.salePrice = {
            gte: parseFloat(min),
        };
    } else if (max) {
        where.salePrice = {
            gte: parseFloat(max),
        };
    }
        let products;
        try {
            if (searchTerm){
                products = await db.product.findMany({
                    where: {
                        OR: [{ title: {contains: searchTerm, mode: 'insensitive' } }],
                    },                  
                });
            }else if(categoryId && page){
                products = await db.product.findMany({
                    where,
                    skip: (parseInt(page)-1) * parseInt(pageSize),
                    take: parseInt(pageSize),
                    orderBy: {
                        createdAt: "desc",
                    },
                });
            }else if (categoryId && sortBy) {
                products = await db.product.findMany({
                    where,
                    orderBy: {
                        salePrice: sortBy === "asc" ? "asc" : "desc",
                    },
                });
            } else if (categoryId) {
                products = await db.product.findMany({
                    where,
                    orderBy: {
                        createdAt: "desc",
                    },
                });
            } else {
                products = await db.product.findMany({
                    orderBy: {
                        createdAt: "desc",
                    },
                });
            }
            // return NextResponse.json(products);
            // Check if products is undefined or empty before returning as JSON
            if (!products || products.length === 0) {
                return NextResponse.json({
                    message: "No products found",
                }, { status: 404 });
            } else {
                return NextResponse.json(products);
            }
        } catch (error) {
            console.log(error)
            return NextResponse.json({
                message: "Failed to Fetch Product",
                error: error.message, // Assuming error.message contains relevant error info,
            },
                {
                    status: 500
                })
        }
    }
