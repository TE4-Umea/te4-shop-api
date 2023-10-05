const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    // await prisma.item.create({
    //     data: {
    //         name: 'Humle GoPro',
    //         description: 'En GoPro för humlor, bin och dina andra favorit insekter',
    //         price: 299,
    //         oldPrice: 999,
    //         image: 'bee1.jpg',
    //         categoryId: 3,
    //     },
    // })

    // await prisma.category.create({
    //     data: {
    //         name: 'Annat',
    //     },
    // })

    const allItems = await prisma.item.findMany({})
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
