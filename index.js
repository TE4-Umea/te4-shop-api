const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... categ: 1=cat, 2=dog, 3=other
    // await prisma.item.create({
    //     data: {
    //         name: 'Julbelysning för älgars horn',
    //         description: 'Lys upp din älg med riktig julglädje med dessa specialgjorda lampor för älghorn.',
    //         price: 799,
    //         image: 'moose1.jpg',
    //         categoryId: 3,
    //     },
    // })

    // await prisma.category.create({
    //     data: {
    //         name: 'Annat',
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
