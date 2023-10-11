const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... categ: 1=hund, 2=Katt, 3=Andra djur, 4=Halsband, 5=Regnkläder, 6=Dekorationer
    // await prisma.item.create({
    //     data: {
    //         name: 'Liten igelkottshatt',
    //         description: 'En liten igelkottshatt för små igelkottar',
    //         price: 499,
    //         oldPrice: 799,
    //         image: 'hedgehog1.jpg',
    //         inStock: (Math.floor(Math.random() * 100) + 1),
    //         brandId: 4,
    //         categories: {
    //             create: [
    //                 {
    //                     category: {
    //                         connectOrCreate: {
    //                             create: {
    //                                 name: 'Andra djur',
    //                             },
    //                             where: {
    //                                 name: 'Andra djur',
    //                             },
    //                         },
    //                     },
    //                 },
    //                 {
    //                     category: {
    //                         connectOrCreate: {
    //                             create: {
    //                                 name: 'Dekorationer',
    //                             },
    //                             where: {
    //                                 name: 'Dekorationer',
    //                             },
    //                         },
    //                     },
    //                 },
    //             ],
    //         },
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
    //         name: 'Dekorationer',
    //     },
    // })

    // Create brand
    // await prisma.brand.create({
    //     data: {
    //         name: 'Fluff&Fashion',
    //     },
    // })

    // Create COI
    // await prisma.categoriesOnItems.create({
    //     data: {
    //         categoryId: 1,
    //         itemId: 2,
    //     },
    // })

    const allItems = await prisma.item.findMany({
        include: {
            brand: true,
            categories: true,
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
