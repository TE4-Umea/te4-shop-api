const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function main() {
    const item = await prisma.item.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'HUnd halsband',
            description: 'vanligt halsband för en större hund. test2',
            price: 299,
            oldPrice: 499,
            image: 'dog2.jpg',
            inStock: 150,
            brand: {
                create: {
                    name: 'apple',
                },
            },
            categories: {
                create: {
                    category: {
                        create: {
                            name: 'hund',
                        },
                    },
                }
            }
        },
    })

    console.log(item)
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
