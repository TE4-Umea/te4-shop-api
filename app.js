const express = require('express')
const app = express()
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors())

app.get('/', async function (req, res) {
    const allItems = await prisma.item.findMany({
        // orderBy: {
        //     id: 'desc',
        // },
        include: {
            brand: true,
            categories: true,
        },
    })

    res.json({ data: allItems })
})

app.get('/product/:id', async function (req, res) {
    const oneItem = await prisma.item.findMany({
        where: {
            id: parseInt(req.params.id),
        },
        include: {
            brand: true,
            categories: true,
        },
    })

    res.json({ data: oneItem })
})

app.get('/category/', async function (req, res) {
    const categ = await prisma.category.findMany({
        include: {
            items: true,
        }
    })
    res.json({ data: categ })
})


app.listen(3000)