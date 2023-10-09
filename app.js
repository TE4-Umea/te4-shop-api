const express = require('express')
const app = express()
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors())

app.get('/', async function (req, res) {
    const allItems = await prisma.item.findMany({})

    res.json({ data: allItems })
})

app.get('/product/:id', async function (req, res) {
    const oneItems = await prisma.item.findMany({
        where: {
            id: parseInt(req.params.id),
        },
    })

    res.json({ data: oneItems })
})

app.get('/category/', async function (req, res) {
    const categ = await prisma.category.findMany({
        include: {
            items: true,
        },
    })
    res.json({ data: categ })
})

app.get('/category/dog', async function (req, res) {
    const dogCateg = await prisma.category.findMany({
        where: {
            name: 'Hundprodukter',
        },
        include: {
            items: true,
        },
    })
    res.json({ data: dogCateg })
})

app.get('/category/cat', async function (req, res) {
    const catCateg = await prisma.category.findMany({
        where: {
            name: 'Kattprodukter',
        },
        include: {
            items: true,
        },
    })
    res.json({ data: catCateg })
})

app.get('/category/other', async function (req, res) {
    const otherCateg = await prisma.category.findMany({
        where: {
            name: 'Annat',
        },
        include: {
            items: true,
        },
    })
    res.json({ data: otherCateg })
})

app.listen(3000)