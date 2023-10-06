const express = require('express')
const app = express()
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors())

app.get('/', async function (req, res) {
    const allItems = await prisma.item.findMany({})
    const allCategories = await prisma.category.findMany({
        include: {
            items: true,
        },
    })

    res.json({ data: allItems, categories: allCategories })
})

app.listen(3000)