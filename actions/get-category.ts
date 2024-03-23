import prismadb from "@/lib/prismadb"

export const getCategories= async()=>{
    const categories=await prismadb?.category?.findMany();
    return categories;
}