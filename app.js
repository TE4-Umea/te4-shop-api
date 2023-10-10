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
    })

    res.json({ data: allItems })
})

app.get('/product/:id', async function (req, res) {
    const oneItem = await prisma.item.findMany({
        where: {
            id: parseInt(req.params.id),
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

app.get('/category/hat', async function (req, res) {
    const hat = await prisma.category.findMany({
        include: {
            items: true,
        }
    })
    res.json({ data: hat })
})

app.get('/animal/', async function (req, res) {
    const categ = await prisma.animal.findMany({
        include: {
            items: true,
        }
    })
    res.json({ data: categ })
})

app.get('/animal/dog', async function (req, res) {
    const dogCateg = await prisma.animal.findMany({
        where: {
            name: 'Hundprodukter',
        },
        include: {
            items: true,
        },
    })
    res.json({ data: dogCateg })
})

app.get('/animal/cat', async function (req, res) {
    const catCateg = await prisma.animal.findMany({
        where: {
            name: 'Kattprodukter',
        },
        include: {
            items: true,
        },
    })
    res.json({ data: catCateg })
})

app.get('/animal/other', async function (req, res) {
    const otherCateg = await prisma.animal.findMany({
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