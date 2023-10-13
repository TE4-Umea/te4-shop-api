const express = require('express')
const app = express()
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors())

app.get('/', async function (req, res) {
    // needs pagination
    //const { page = 1, limit = 10 } = req.query

    const allItems = await prisma.item.findMany({
        // orderBy: {
        //     id: 'desc',
        // },
        include: {
            brand: true,
            categories: true,
        },
        //take: parseInt(limit),
        //skip: (parseInt(page) - 1) * parseInt(limit),
    })

    res.json({ data: allItems })
})

app.get('/product/:id', async function (req, res) {
    // security for id?

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

app.get('/product/search/:value', async function (req, res) {
    let value = req.params.value
    // security?

    const searchedItems = await prisma.item.findMany({
        where: {
            name: {
                contains: value,
            }
        },
        include: {
            brand: true,
            categories: true,
        }
    })
    res.json({ data: searchedItems })
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