import { request } from "express";
import prismaClient from "../../prisma";

interface productRequeste {
  category_id: string;
}

class ListByCategoryService {
  async execute({ category_id }: productRequeste) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findByCategory;
  }
}

export { ListByCategoryService };
