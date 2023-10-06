const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... categ: 1=cat, 2=dog, 3=other
    await prisma.item.create({
        data: {
            name: 'Krokodil koppel',
            description: 'Ett koppel som passar på dina större reptiler, nämnligen krokodiler och alligatorer.',
            price: 500,
            image: 'gator1.jpg',
            categoryId: 3,
        },
    })

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
