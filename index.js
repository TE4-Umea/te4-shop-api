const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... categ: 1=cat, 2=dog, 3=other
    // await prisma.item.create({
    //     data: {
    //         name: 'Julbelysning för älgars horn',
    //         description: 'Lys upp din älg med riktig julglädje med dessa specialgjorda lampor för älghorn.',
    //         price: 799,
    //         oldPrice: 999,
    //         image: 'moose1.jpg',
    //         categoryId: 3,
    //         animalId: 3,
    //         inStack: 5,
    //         size: 'big',
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
    //         name: 'Annat',
    //     },
    // })

    // Create aminal category
    // await prisma.animal.create({
    //     data: {
    //         name: 'hund',
    //     },
    // })

    const allItems = await prisma.category.findMany({
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
