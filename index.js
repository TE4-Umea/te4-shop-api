const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... categ: 1=cat, 2=dog, 3=other
    // await prisma.item.create({
    //     data: {
    //         name: 'HUnd halsband',
    //         description: 'vanligt halsband för en större hund.',
    //         price: 299,
    //         oldPrice: 499,
    //         image: 'dog1.jpg',
    //         inStock: 15,
    //         brandId: 1,
    //     },
    // })

    // Update item
    // await prisma.item.update({
    //     where: { id: 20 },
    //     data: {
    //         name: 'Lama keps, solbrillor, bandana kombo',
    //     }
    // })

    // Create category
    // await prisma.category.create({
    //     data: {
    //         name: 'hund',
    //     },
    // })

    // Create brand
    // await prisma.brand.create({
    //     data: {
    //         name: 'apple',
    //     },
    // })

    // Create COI
    // await prisma.categoriesOnItems.create({
    //     data: {
    //         categoryId: 1,
    //         itemId: 2,
    //     },
    // })

    const allItems = await prisma.animal.findMany({
        include: {
            items: true,
        },
    })
    console.dir(allItems, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
